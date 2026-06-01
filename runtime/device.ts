// LeavePulse SDK — OAuth device-flow (RFC 8628) polling helper.
//
// `auth.device.start` / `approve` / `token` are the raw generated calls. This
// wraps the token poll loop: call `token` every `interval` seconds, back off on
// `slow_down`, and resolve once the user approves (or reject on expiry/denial).
// Framework-agnostic — the caller passes the poll function and the device_code.

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
