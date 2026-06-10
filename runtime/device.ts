// LeavePulse SDK — OAuth device-flow (RFC 8628) polling helper.
//
// `auth.device.start` / `approve` / `token` are the raw generated calls. This
// wraps the token poll loop: call `token` every `interval` seconds, back off on
// `slow_down`, and resolve once the user approves (or reject on expiry/denial).
// Framework-agnostic — the caller passes the poll function and the device_code.
//
// `beginDeviceFlow` is the higher-level headless facade: it runs `start`,
// surfaces the user-facing URL + code, and exposes `.poll()` which honours the
// returned interval and maps the approved grant into a RefreshingCredential.

import type { RefreshFn } from "./credentials";
import { RefreshingCredential } from "./credentials";

/** The poll status the token endpoint returns (RFC 8628 §3.5). */
export type DevicePollStatus =
	| "approved"
	| "pending"
	| "slow_down"
	| "expired"
	| "denied";

/** Minimal shape of a `auth.device.token` response the poller needs. */
export interface DeviceTokenResponse {
	status: DevicePollStatus;
	access_token?: string | null;
	token_type?: string | null;
	expires_in?: number | null;
	refresh_token?: string | null;
	refresh_token_expires_in?: number | null;
}

export interface DevicePollOptions {
	/** Initial seconds between polls (the `interval` from `start`). Default 5. */
	intervalSeconds?: number;
	/** Seconds added to the interval on each `slow_down`. Default 5. */
	slowDownStepSeconds?: number;
	/** Abort the poll loop (e.g. user cancelled). */
	signal?: AbortSignal;
}

/** Raised when a device authorization can't complete. */
export class DeviceFlowError extends Error {
	constructor(readonly status: "expired" | "denied" | "aborted") {
		super(`device authorization ${status}`);
		this.name = "DeviceFlowError";
	}
}

const sleep = (ms: number, signal?: AbortSignal): Promise<void> =>
	new Promise((resolve, reject) => {
		if (signal?.aborted) {
			reject(new DeviceFlowError("aborted"));
			return;
		}
		const timer = setTimeout(resolve, ms);
		signal?.addEventListener(
			"abort",
			() => {
				clearTimeout(timer);
				reject(new DeviceFlowError("aborted"));
			},
			{ once: true },
		);
	});

/**
 * Poll `token` until the user approves the device. Resolves with the approved
 * token response, or throws `DeviceFlowError` on expiry/denial/abort.
 *
 * @param token  a function that performs one `auth.device.token` call.
 */
export async function pollDeviceToken(
	token: () => Promise<DeviceTokenResponse>,
	options: DevicePollOptions = {},
): Promise<DeviceTokenResponse> {
	const step = (options.slowDownStepSeconds ?? 5) * 1000;
	let interval = (options.intervalSeconds ?? 5) * 1000;
	for (;;) {
		if (options.signal?.aborted) throw new DeviceFlowError("aborted");
		const response = await token();
		switch (response.status) {
			case "approved":
				return response;
			case "pending":
				break;
			case "slow_down":
				interval += step;
				break;
			case "expired":
				throw new DeviceFlowError("expired");
			case "denied":
				throw new DeviceFlowError("denied");
		}
		await sleep(interval, options.signal);
	}
}

/** Shape of a `auth.device.start` response (RFC 8628 §3.2, wire snake_case). */
export interface DeviceStartResponse {
	/** Opaque code the client polls `token` with. */
	device_code: string;
	/** Short code the user enters in the frontend (`device.vue`). */
	user_code: string;
	/** URL the user opens to approve. */
	verification_uri: string;
	/** `verification_uri` with the `user_code` pre-filled, when provided. */
	verification_uri_complete?: string | null;
	/** Seconds until the device code expires. */
	expires_in: number;
	/** Recommended seconds between polls. */
	interval?: number | null;
}

/** Options for {@link beginDeviceFlow}'s `.poll()`. */
export interface BeginDeviceFlowOptions {
	/**
	 * Performs the refresh-token exchange for the credential returned by
	 * `.poll()`. Omit to leave wiring to the integration layer — the returned
	 * credential then throws if a refresh is attempted. Keep transport-agnostic.
	 */
	refreshFn?: RefreshFn;
	/** Refresh this many seconds before the access token expires (default 30). */
	leewaySeconds?: number;
	/** Abort the poll loop (e.g. user cancelled). */
	signal?: AbortSignal;
	/** Override the `slow_down` interval step (default 5s). */
	slowDownStepSeconds?: number;
}

/** A started device authorization: user-facing fields plus a `.poll()` that
 * blocks until approval and yields a refreshing credential. */
export interface DeviceFlowHandle {
	/** Short code the user confirms in the frontend. */
	readonly userCode: string;
	/** URL the user opens to approve the device. */
	readonly verificationUri: string;
	/** `verificationUri` with the code pre-filled, when the server supplied it. */
	readonly verificationUriComplete?: string;
	/** Seconds until the device code expires. */
	readonly expiresIn: number;
	/** The `device_code` to poll with (exposed for advanced callers). */
	readonly deviceCode: string;
	/**
	 * Poll `token` (honouring `interval`/`slow_down`/`expires_in`) until the
	 * user approves, then resolve with a {@link RefreshingCredential} seeded
	 * from the grant. Throws {@link DeviceFlowError} on expiry/denial/abort.
	 */
	poll(): Promise<RefreshingCredential>;
}

/**
 * Begin RFC 8628 device authorization headlessly. Calls `start()`, returns the
 * user-facing URL + code immediately, and exposes `.poll()` which runs the
 * existing {@link pollDeviceToken} loop with the server-advised `interval` and
 * maps the approved grant into a {@link RefreshingCredential}.
 *
 * @param start a function performing one `auth.device.start` call.
 * @param poll  a function performing one `auth.device.token` call for a given
 *              `device_code`.
 */
export async function beginDeviceFlow(
	start: () => Promise<DeviceStartResponse>,
	poll: (deviceCode: string) => Promise<DeviceTokenResponse>,
	options: BeginDeviceFlowOptions = {},
): Promise<DeviceFlowHandle> {
	const started = await start();
	const interval = started.interval ?? undefined;
	return {
		userCode: started.user_code,
		verificationUri: started.verification_uri,
		verificationUriComplete: started.verification_uri_complete ?? undefined,
		expiresIn: started.expires_in,
		deviceCode: started.device_code,
		async poll(): Promise<RefreshingCredential> {
			const approved = await pollDeviceToken(() => poll(started.device_code), {
				intervalSeconds: interval,
				slowDownStepSeconds: options.slowDownStepSeconds,
				signal: options.signal,
			});
			if (!approved.access_token || !approved.refresh_token) {
				throw new DeviceFlowError("denied");
			}
			return new RefreshingCredential({
				accessToken: approved.access_token,
				refreshToken: approved.refresh_token,
				expiresIn: approved.expires_in,
				leewaySeconds: options.leewaySeconds,
				refreshFn:
					options.refreshFn ??
					(() => {
						throw new Error(
							"device-flow credential has no refreshFn; provide one in beginDeviceFlow options",
						);
					}),
			});
		},
	};
}
