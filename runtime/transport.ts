// LeavePulse SDK — transport abstraction.
//
// The SDK never knows how requests are authenticated or sent. It only calls
// `transport.request(...)`. Adapters supply the real mechanism:
//   - BrowserTransport: wraps the Nuxt `useApi()` channel (cookie + CSRF).
//   - BearerTransport:  Authorization: Bearer for external consumers.
//   - MockTransport:    canned responses for tests.

import type { CredentialProvider } from "./credentials";
import { StaticCredential } from "./credentials";
import { httpErrorFor, RateLimited, ServerError, Unauthorized } from "./errors";
import { parseJson } from "./json";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Which backend a request targets. `platform` is the BFF (`/v1/*`); `auth` is
 * the auth-service core (`/auth/*`) carrying login/refresh/oauth. The adapter
 * maps each channel to a base URL and to its own auth mechanism (cookie+CSRF
 * for the web, local refresh for the launcher, bearer for services). The SDK
 * never learns *how* a channel authenticates — only which one to hit.
 */
export type Channel = "platform" | "auth";

/**
 * A file to upload, in the style of discord.py's `File`. Wrap a `Blob`/`File`
 * (or raw bytes) with a filename and optional content type, then hand it to a
 * multipart SDK method (e.g. `server.iconsUpload(new LeavePulseFile(blob))`).
 */
export class LeavePulseFile {
	readonly data: Blob;
	readonly filename: string;
	readonly contentType?: string;

	constructor(
		data: Blob | ArrayBuffer | Uint8Array,
		filename = "upload",
		contentType?: string,
	) {
		this.data =
			data instanceof Blob
				? data
				: new Blob(
						[data as BlobPart],
						contentType ? { type: contentType } : {},
					);
		this.filename = filename;
		this.contentType = contentType;
	}

	/** The part as a `Blob` carrying the right content type, for `FormData`. */
	toBlob(): Blob {
		if (this.contentType && this.data.type !== this.contentType) {
			return new Blob([this.data], { type: this.contentType });
		}
		return this.data;
	}
}

/** A `multipart/form-data` upload: one file part plus scalar form fields. */
export interface MultipartBody {
	/** Form field name for the binary part (e.g. `file`, `avatar`). */
	fileField: string;
	file?: LeavePulseFile;
	/** Scalar fields sent alongside the file; undefined values are dropped. */
	fields?: Record<string, string | number | boolean | undefined>;
}

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
	/** Multipart upload body; mutually exclusive with `body`. */
	multipart?: MultipartBody;
	/**
	 * `application/x-www-form-urlencoded` body; mutually exclusive with `body`
	 * and `multipart`. Required by the OAuth2 `/auth/oauth2/token` endpoint,
	 * which consumes form-encoded (not JSON) grant requests.
	 */
	form?: Record<string, string>;
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

/** Assemble a `FormData` body from a multipart descriptor. */
export function buildFormData(multipart: MultipartBody): FormData {
	const form = new FormData();
	if (multipart.file) {
		form.append(
			multipart.fileField,
			multipart.file.toBlob(),
			multipart.file.filename,
		);
	}
	for (const [key, value] of Object.entries(multipart.fields ?? {})) {
		if (value !== undefined) form.append(key, String(value));
	}
	return form;
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

/** Build the request body + headers for one HTTP attempt from a transport
 * request. Mutually exclusive body kinds: `multipart` (FormData, no explicit
 * Content-Type — the runtime adds the boundary), `form` (URL-encoded), or
 * `body` (JSON). */
function buildBody(req: TransportRequest): {
	body: BodyInit | undefined;
	contentType?: string;
} {
	if (req.multipart) {
		// Do NOT set Content-Type: the runtime adds the multipart boundary.
		return { body: buildFormData(req.multipart) };
	}
	if (req.form) {
		const params = new URLSearchParams();
		for (const [key, value] of Object.entries(req.form)) params.set(key, value);
		return { body: params, contentType: "application/x-www-form-urlencoded" };
	}
	if (req.body !== undefined) {
		return { body: JSON.stringify(req.body), contentType: "application/json" };
	}
	return { body: undefined };
}

/**
 * Bearer transport driven by a {@link CredentialProvider} rather than a fixed
 * token. Before every request it asks `provider.token()` for the current
 * bearer; on a `401`, if `provider.refresh` exists it refreshes **once** and
 * retries the request **once** — covering device-flow / OAuth2 / launcher
 * tokens that rotate. Uses the global `fetch`; pass `fetchImpl` to override
 * (Node, tests). Automatically retries 429 (honouring `Retry-After`) and 5xx
 * (exponential backoff) up to `retry.maxRetries`, then raises a typed
 * `HTTPException`. `BrowserTransport` (cookie) stays separate — the browser
 * owns that session.
 */
export class AuthenticatedTransport implements Transport {
	protected readonly retry: Required<RetryOptions>;

	/**
	 * @param baseUrl     platform (`/v1`) base URL.
	 * @param provider    supplies (and optionally refreshes) the bearer token.
	 * @param fetchImpl   `fetch` override (Node, tests).
	 * @param authBaseUrl optional auth-service base URL for the `auth` channel;
	 *                    defaults to `baseUrl` when the auth core is co-hosted.
	 * @param retry       automatic-retry tuning (429 / 5xx).
	 */
	constructor(
		private readonly baseUrl: string,
		private readonly provider: CredentialProvider,
		private readonly fetchImpl: typeof fetch = fetch,
		private readonly authBaseUrl?: string,
		retry: RetryOptions = {},
	) {
		this.retry = { ...DEFAULT_RETRY, ...retry };
	}

	/** One HTTP attempt with the freshly-fetched bearer applied. */
	private async fetchOnce(
		req: TransportRequest,
		url: string,
	): Promise<Response> {
		const token = await this.provider.token();
		const { body, contentType } = buildBody(req);
		return this.fetchImpl(url, {
			method: req.method,
			headers: {
				Authorization: `Bearer ${token}`,
				...(contentType ? { "Content-Type": contentType } : {}),
				...(req.ifNoneMatch ? { "If-None-Match": req.ifNoneMatch } : {}),
			},
			body,
		});
	}

	/**
	 * Dispatch the request with the retry budget applied. Returns the raw
	 * `Response` for any status `passThrough` accepts (so callers can handle
	 * 304/404 themselves); every other non-2xx becomes a typed `HTTPException`.
	 * A `401` triggers a single `provider.refresh()` + retry when available.
	 */
	protected async send(
		req: TransportRequest,
		passThrough: (status: number) => boolean = () => false,
	): Promise<Response> {
		const base =
			req.channel === "auth"
				? (this.authBaseUrl ?? this.baseUrl)
				: this.baseUrl;
		const url = base.replace(/\/$/, "") + buildPath(req);

		let attempt = 0;
		let refreshed = false;
		for (;;) {
			const response = await this.fetchOnce(req, url);

			if (response.ok || passThrough(response.status)) return response;

			const retryAfter = parseRetryAfter(response.headers.get("retry-after"));
			const error = httpErrorFor(
				response.status,
				req,
				await safeText(response),
				retryAfter,
			);

			// On 401, refresh the credential once and retry once before surfacing.
			if (
				error instanceof Unauthorized &&
				!refreshed &&
				this.provider.refresh
			) {
				refreshed = true;
				await this.provider.refresh();
				continue;
			}

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
		// parseJson (not response.json()) keeps 64-bit Snowflake ids precise.
		return parseJson(await response.text()) as T;
	}

	async conditional<T>(req: TransportRequest): Promise<ConditionalResult<T>> {
		const response = await this.send(
			req,
			(status) => status === 304 || status === 404,
		);
		if (response.status === 404) return { status: "not_found" };
		const etag = response.headers.get("etag") ?? undefined;
		if (response.status === 304) return { status: "not_modified", etag };
		const data = parseJson(await response.text()) as T;
		return { status: "modified", data, etag };
	}
}

/**
 * Bearer-token transport for external consumers (no cookies) holding a single
 * pre-acquired token. A thin specialization of {@link AuthenticatedTransport}
 * over a {@link StaticCredential}, kept for back-compat: the constructor
 * signature `(baseUrl, token, fetchImpl?, authBaseUrl?, retry?)` is unchanged.
 * For tokens that rotate (device flow, OAuth2, launcher) use
 * `AuthenticatedTransport` with a refreshing credential instead.
 */
export class BearerTransport extends AuthenticatedTransport {
	constructor(
		baseUrl: string,
		token: string,
		fetchImpl: typeof fetch = fetch,
		authBaseUrl?: string,
		retry: RetryOptions = {},
	) {
		super(baseUrl, StaticCredential(token), fetchImpl, authBaseUrl, retry);
	}
}

async function safeText(response: Response): Promise<string> {
	try {
		return await response.text();
	} catch {
		return "";
	}
}
