// LeavePulse SDK — transport abstraction.
//
// The SDK never knows how requests are authenticated or sent. It only calls
// `transport.request(...)`. Adapters supply the real mechanism:
//   - BrowserTransport: wraps the Nuxt `useApi()` channel (cookie + CSRF).
//   - BearerTransport:  Authorization: Bearer for external consumers.
//   - MockTransport:    canned responses for tests.

import { httpErrorFor, RateLimited, ServerError } from "./errors";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Which backend a request targets. `platform` is the BFF (`/v1/*`); `auth` is
 * the auth-service core (`/auth/*`) carrying login/refresh/oauth. The adapter
 * maps each channel to a base URL and to its own auth mechanism (cookie+CSRF
 * for the web, local refresh for the launcher, bearer for services). The SDK
 * never learns *how* a channel authenticates — only which one to hit.
 */
export type Channel = "platform" | "auth";

export interface TransportRequest {
	method: HttpMethod;
	/** Path relative to the channel root, e.g. `/v1/projects/1` or `/auth/login`. */
	path: string;
	/** Backend channel; defaults to `platform` when omitted. */
	channel?: Channel;
	/** Query parameters; undefined values are dropped. */
	query?: Record<string, string | number | boolean | undefined>;
	/** JSON request body. */
	body?: unknown;
	/**
	 * Send `If-None-Match` with this ETag so the server can answer `304 Not
	 * Modified` and skip resending an unchanged body. Only meaningful through
	 * `conditional()`.
	 */
	ifNoneMatch?: string;
}

/**
 * Result of a conditional (`If-None-Match`) request:
 *   - `modified`: the body changed (or there was no prior ETag) — `data` holds
 *     it, `etag` is the new validator to cache.
 *   - `not_modified`: the server returned `304` — reuse the cached copy.
 *   - `not_found`: the resource returned `404` (e.g. nothing published yet).
 */
export type ConditionalResult<T> =
	| { status: "modified"; data: T; etag?: string }
	| { status: "not_modified"; etag?: string }
	| { status: "not_found" };

export interface Transport {
	request<T>(req: TransportRequest): Promise<T>;
	/**
	 * Like `request`, but treats `304`/`404` as outcomes rather than errors and
	 * surfaces the response ETag — for caching resources (launch manifests,
	 * server registries) without refetching unchanged bodies.
	 */
	conditional<T>(req: TransportRequest): Promise<ConditionalResult<T>>;
}

/** Build a path with an encoded query string from a TransportRequest. */
export function buildPath(req: TransportRequest): string {
	if (!req.query) return req.path;
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(req.query)) {
		if (value !== undefined) params.set(key, String(value));
	}
	const qs = params.toString();
	return qs ? `${req.path}?${qs}` : req.path;
}

/** Tuning for a transport's automatic retry behaviour. */
export interface RetryOptions {
	/** Max automatic retries on 429 / 5xx (default 2). Set 0 to disable. */
	maxRetries?: number;
	/** Base backoff in ms for 5xx exponential backoff (default 250). */
	backoffBaseMs?: number;
	/** Cap on any single backoff wait, ms (default 10000). */
	backoffMaxMs?: number;
}

const DEFAULT_RETRY: Required<RetryOptions> = {
	maxRetries: 2,
	backoffBaseMs: 250,
	backoffMaxMs: 10_000,
};

const sleep = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));

/** Parse a `Retry-After` header (seconds or HTTP-date) into seconds. */
function parseRetryAfter(value: string | null): number | undefined {
	if (!value) return undefined;
	const secs = Number(value);
	if (Number.isFinite(secs)) return secs;
	const date = Date.parse(value);
	if (!Number.isNaN(date)) return Math.max(0, (date - Date.now()) / 1000);
	return undefined;
}

/**
 * Bearer-token transport for external consumers (no cookies). Uses the global
 * `fetch`; pass a custom `fetchImpl` to override (Node, tests). Automatically
 * retries 429 (honouring `Retry-After`) and 5xx (exponential backoff) up to
 * `retry.maxRetries`, then raises a typed `HTTPException`.
 */
export class BearerTransport implements Transport {
	private readonly retry: Required<RetryOptions>;

	/**
	 * @param baseUrl     platform (`/v1`) base URL.
	 * @param token       bearer token sent on every request.
	 * @param authBaseUrl optional auth-service base URL for the `auth` channel;
	 *                    defaults to `baseUrl` when the auth core is co-hosted.
	 * @param retry       automatic-retry tuning (429 / 5xx).
	 */
	constructor(
		private readonly baseUrl: string,
		private readonly token: string,
		private readonly fetchImpl: typeof fetch = fetch,
		private readonly authBaseUrl?: string,
		retry: RetryOptions = {},
	) {
		this.retry = { ...DEFAULT_RETRY, ...retry };
	}

	/**
	 * Dispatch the request with the retry budget applied. Returns the raw
	 * `Response` for any status `passThrough` accepts (so callers can handle
	 * 304/404 themselves); every other non-2xx becomes a typed `HTTPException`.
	 */
	private async send(
		req: TransportRequest,
		passThrough: (status: number) => boolean = () => false,
	): Promise<Response> {
		const base =
			req.channel === "auth"
				? (this.authBaseUrl ?? this.baseUrl)
				: this.baseUrl;
		const url = base.replace(/\/$/, "") + buildPath(req);

		let attempt = 0;
		for (;;) {
			const response = await this.fetchImpl(url, {
				method: req.method,
				headers: {
					Authorization: `Bearer ${this.token}`,
					...(req.body !== undefined
						? { "Content-Type": "application/json" }
						: {}),
					...(req.ifNoneMatch ? { "If-None-Match": req.ifNoneMatch } : {}),
				},
				body: req.body !== undefined ? JSON.stringify(req.body) : undefined,
			});

			if (response.ok || passThrough(response.status)) return response;

			const retryAfter = parseRetryAfter(response.headers.get("retry-after"));
			const error = httpErrorFor(
				response.status,
				req,
				await safeText(response),
				retryAfter,
			);

			// Retry on rate-limit / transient server errors while budget remains.
			const retriable =
				error instanceof RateLimited || error instanceof ServerError;
			if (retriable && attempt < this.retry.maxRetries) {
				const waitMs =
					error instanceof RateLimited && error.retryAfter !== undefined
						? error.retryAfter * 1000
						: Math.min(
								this.retry.backoffBaseMs * 2 ** attempt,
								this.retry.backoffMaxMs,
							);
				attempt += 1;
				await sleep(waitMs);
				continue;
			}
			throw error;
		}
	}

	async request<T>(req: TransportRequest): Promise<T> {
		const response = await this.send(req);
		if (response.status === 204) return undefined as T;
		return (await response.json()) as T;
	}

	async conditional<T>(req: TransportRequest): Promise<ConditionalResult<T>> {
		const response = await this.send(
			req,
			(status) => status === 304 || status === 404,
		);
		if (response.status === 404) return { status: "not_found" };
		const etag = response.headers.get("etag") ?? undefined;
		if (response.status === 304) return { status: "not_modified", etag };
		const data = (await response.json()) as T;
		return { status: "modified", data, etag };
	}
}

async function safeText(response: Response): Promise<string> {
	try {
		return await response.text();
	} catch {
		return "";
	}
}
