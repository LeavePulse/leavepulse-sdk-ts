// LeavePulse SDK — OAuth2 authorization-code + PKCE facade for 3rd-party web
// apps acting on behalf of a LeavePulse *user*.
//
// `buildAuthorizeUrl` is a pure helper: it mints a PKCE S256 pair and assembles
// the authorize URL. The app sends the user to that URL; a **frontend** page
// renders the visual consent (the SDK never drives a browser). After the
// redirect-back with `?code=`, `exchangeCode` trades the code for tokens at
// `/auth/oauth/token` (form-urlencoded) and returns an auto-refreshing
// `OAuth2Credential`. The exchange is driven through the caller's transport,
// so it works without the generated `auth.oauth2.*` methods existing yet.

import { OAuth2Credential } from "./credentials";
import type { Transport } from "./transport";

/** Inputs for {@link buildAuthorizeUrl}. */
export interface BuildAuthorizeUrlInit {
	/** OAuth2 client id of the third-party app. */
	clientId: string;
	/** Redirect URI registered for the app (must match at exchange). */
	redirectUri: string;
	/** Requested scopes; joined with spaces per OAuth2. */
	scope: string[];
	/** Base URL of the authorize page (a frontend URL). */
	authorizeBaseUrl: string;
	/** CSRF/anti-forgery state; a random one is generated when omitted. */
	state?: string;
}

/** Result of {@link buildAuthorizeUrl}: the URL to send the user to, plus the
 * PKCE verifier and state the app must keep until {@link exchangeCode}. */
export interface AuthorizeUrl {
	/** The authorize URL to open in the frontend (visual consent). */
	url: string;
	/** PKCE `code_verifier` — keep secret, pass back to `exchangeCode`. */
	codeVerifier: string;
	/** The `state` echoed back on redirect — verify it matches. */
	state: string;
}

/**
 * Build an OAuth2 authorize URL with a fresh PKCE (S256) challenge. Pure (no
 * network); runs anywhere Web Crypto is available. `response_type=code`,
 * `code_challenge_method=S256`. Async because the S256 digest is async.
 */
export async function buildAuthorizeUrl(
	init: BuildAuthorizeUrlInit,
): Promise<AuthorizeUrl> {
	const codeVerifier = randomUrlSafe(64);
	const state = init.state ?? randomUrlSafe(32);
	const codeChallenge = await s256Challenge(codeVerifier);

	const params = new URLSearchParams({
		response_type: "code",
		client_id: init.clientId,
		redirect_uri: init.redirectUri,
		scope: init.scope.join(" "),
		state,
		code_challenge: codeChallenge,
		code_challenge_method: "S256",
	});
	const base = init.authorizeBaseUrl.replace(/\/$/, "");
	return { url: `${base}?${params.toString()}`, codeVerifier, state };
}

/** Inputs for {@link exchangeCode}. */
export interface ExchangeCodeInit {
	clientId: string;
	/** Authorization code returned to the redirect URI. */
	code: string;
	/** Same redirect URI used to build the authorize URL. */
	redirectUri: string;
	/** The PKCE `code_verifier` from {@link buildAuthorizeUrl}. */
	codeVerifier: string;
}

/** `/auth/oauth/token` response shape (wire snake_case). */
interface TokenExchangeResponse {
	access_token: string;
	refresh_token?: string | null;
	expires_in?: number | null;
	token_type?: string | null;
}

/**
 * Exchange an authorization code for tokens at `/auth/oauth/token`
 * (form-urlencoded, `grant_type=authorization_code`) and return an
 * auto-refreshing {@link OAuth2Credential}. Driven through the supplied
 * `transport` (channel `auth`), so it does not depend on generated code.
 */
export async function exchangeCode(
	init: ExchangeCodeInit,
	transport: Transport,
): Promise<OAuth2Credential> {
	const tokens = await postToken(transport, {
		grant_type: "authorization_code",
		code: init.code,
		client_id: init.clientId,
		redirect_uri: init.redirectUri,
		code_verifier: init.codeVerifier,
	});
	return new OAuth2Credential({
		accessToken: tokens.access_token,
		refreshToken: tokens.refresh_token ?? "",
		expiresIn: tokens.expires_in,
		// Auto-refresh via the same /token endpoint (refresh_token grant).
		refreshFn: (refreshToken) =>
			postToken(transport, {
				grant_type: "refresh_token",
				refresh_token: refreshToken,
				client_id: init.clientId,
			}),
	});
}

/** POST a form-encoded grant request to `/auth/oauth/token` on the auth channel. */
function postToken(
	transport: Transport,
	form: Record<string, string>,
): Promise<TokenExchangeResponse> {
	return transport.request<TokenExchangeResponse>({
		method: "POST",
		path: "/auth/oauth/token",
		channel: "auth",
		form,
	});
}

/** Base64url-encode bytes (no padding), per RFC 7636. */
function base64UrlEncode(bytes: Uint8Array): string {
	let binary = "";
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary)
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
}

/** A cryptographically-random URL-safe string of `byteLength` entropy. */
function randomUrlSafe(byteLength: number): string {
	const bytes = new Uint8Array(byteLength);
	crypto.getRandomValues(bytes);
	return base64UrlEncode(bytes);
}

/** Compute the PKCE S256 `code_challenge` from a verifier. */
async function s256Challenge(verifier: string): Promise<string> {
	const data = new TextEncoder().encode(verifier);
	const digest = await crypto.subtle.digest("SHA-256", data);
	return base64UrlEncode(new Uint8Array(digest));
}
