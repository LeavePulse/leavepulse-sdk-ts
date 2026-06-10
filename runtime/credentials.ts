// LeavePulse SDK — credential providers.
//
// A `CredentialProvider` is the seam between *acquiring* a token (PAT, device
// flow, OAuth2, service token) and *sending* it: `AuthenticatedTransport` asks
// the provider for a bearer before each request and, on a `401`, for a refresh.
// Providers are transport-agnostic — anything that performs a network call
// (e.g. a token refresh) is injected, never hardcoded — so the same provider
// works from a browser, a CLI, Node, or the launcher.

/**
 * Supplies the bearer token a transport sends, and optionally rotates it.
 *
 * - `token()` returns the **current** access token to send.
 * - `refresh()` (optional) exchanges a refresh token for a new pair; the
 *   transport calls it once on a `401` and retries. Omit it for non-rotating
 *   credentials (PAT, service token).
 */
export interface CredentialProvider {
	/** The current bearer token to send on the next request. */
	token(): Promise<string>;
	/** Rotate the credential (e.g. exchange a refresh token). Optional. */
	refresh?(): Promise<void>;
}

/**
 * A fixed, non-rotating credential: `token()` always returns the same value
 * and there is no `refresh`. Use for Personal Access Tokens and out-of-band
 * service tokens — `BearerTransport` is exactly this.
 */
export function StaticCredential(token: string): CredentialProvider {
	return {
		token: () => Promise.resolve(token),
	};
}

/** The token pair a refresh call yields (wire shape: snake_case). */
export interface TokenPair {
	access_token: string;
	refresh_token?: string | null;
	/** Access-token lifetime in seconds, used to compute the local expiry. */
	expires_in?: number | null;
}

/** Performs the actual refresh exchange. Injected so the credential stays
 * transport-agnostic (no hardcoded fetch/URL): the caller decides whether it
 * hits the transport, a raw fetch, or a mock. */
export type RefreshFn = (refreshToken: string) => Promise<TokenPair>;

/** Seed tokens for a {@link RefreshingCredential}. */
export interface RefreshingCredentialInit {
	accessToken: string;
	refreshToken: string;
	/** Access-token lifetime in seconds, from the issuing response. */
	expiresIn?: number | null;
	/** Performs the refresh-token exchange. */
	refreshFn: RefreshFn;
	/** Refresh this many seconds before the computed expiry (default 30). */
	leewaySeconds?: number;
}

/**
 * Holds an access + refresh token locally and rotates them on demand.
 * `token()` returns the access token, transparently refreshing first if it is
 * known to be expired; `refresh()` forces an exchange (called by the transport
 * on a `401`). The network exchange is delegated to the injected `refreshFn`,
 * so this works for the launcher (refresh-in-body), device flow, and any other
 * rotating credential without knowing the URL or transport.
 */
export class RefreshingCredential implements CredentialProvider {
	private accessToken: string;
	private refreshToken: string;
	private readonly refreshFn: RefreshFn;
	private readonly leewayMs: number;
	/** Epoch ms when the access token expires, or `undefined` if unknown. */
	private expiresAt?: number;
	/** Coalesces concurrent refreshes into one in-flight exchange. */
	private inflight?: Promise<void>;

	constructor(init: RefreshingCredentialInit) {
		this.accessToken = init.accessToken;
		this.refreshToken = init.refreshToken;
		this.refreshFn = init.refreshFn;
		this.leewayMs = (init.leewaySeconds ?? 30) * 1000;
		this.expiresAt = expiryFromSeconds(init.expiresIn);
	}

	/** The current refresh token (for persisting to a local store). */
	get currentRefreshToken(): string {
		return this.refreshToken;
	}

	async token(): Promise<string> {
		// Refresh `leeway` ms early so the token is still valid for the request.
		if (
			this.expiresAt !== undefined &&
			Date.now() >= this.expiresAt - this.leewayMs
		) {
			await this.refresh();
		}
		return this.accessToken;
	}

	async refresh(): Promise<void> {
		// Coalesce concurrent callers (e.g. a 401 retry racing an expiry check).
		if (this.inflight) return this.inflight;
		this.inflight = (async () => {
			try {
				const pair = await this.refreshFn(this.refreshToken);
				this.applyTokenPair(pair);
			} finally {
				this.inflight = undefined;
			}
		})();
		return this.inflight;
	}

	/** Adopt a freshly-issued token pair (keeps the old refresh token if the
	 * server rotated only the access token). */
	protected applyTokenPair(pair: TokenPair): void {
		this.accessToken = pair.access_token;
		if (pair.refresh_token) this.refreshToken = pair.refresh_token;
		this.expiresAt = expiryFromSeconds(pair.expires_in);
	}
}

/**
 * A credential seeded from an OAuth2 authorization-code token exchange that
 * auto-refreshes via the same `/auth/oauth2/token` endpoint. Behaviour is
 * identical to {@link RefreshingCredential}; it exists as a named type so
 * `sdk.oauth2.exchangeCode` can return a self-describing credential. The
 * refresh exchange is still injected (`refreshFn`) to stay transport-agnostic.
 */
export class OAuth2Credential extends RefreshingCredential {}

/** Convert a seconds-from-now lifetime into an absolute epoch-ms expiry. */
function expiryFromSeconds(expiresIn?: number | null): number | undefined {
	if (expiresIn === undefined || expiresIn === null) return undefined;
	return Date.now() + expiresIn * 1000;
}
