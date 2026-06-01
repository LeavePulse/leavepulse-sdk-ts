// LeavePulse SDK — error hierarchy (discord.py-style).
//
// Every failure is a `LeavePulseError`. HTTP failures are an `HTTPException`
// subclass chosen by status code, so callers can `catch (e) { if (e instanceof
// NotFound) ... }`. The backend speaks RFC 7807 problem+json (service-toolkit /
// awesome_errors), so the parsed `problem` carries the machine-readable `code`,
// human `detail`, validation `fields`, and `requestId` for support.

import type { TransportRequest } from "./transport";

/** RFC 7807 problem details as emitted by the LeavePulse backend. */
export interface ProblemDetails {
	/** URI identifying the problem type. */
	type?: string;
	/** Short human-readable summary. */
	title?: string;
	/** HTTP status code. */
	status?: number;
	/** Human-readable explanation specific to this occurrence. */
	detail?: string;
	/** URI identifying this specific occurrence. */
	instance?: string;
	/** Stable machine-readable error code (e.g. `whitelist.not_found`). */
	code?: string;
	/** ISO-8601 timestamp. */
	timestamp?: string;
	/** Correlation id for support / log lookup. */
	requestId?: string;
	/** Originating service name. */
	service?: string;
	/** Extra structured context, including per-field validation errors. */
	details?: Record<string, unknown>;
}

/** Base class for every error the SDK raises. */
export class LeavePulseError extends Error {
	constructor(message: string) {
		super(message);
		this.name = new.target.name;
	}
}

/** The server returned a payload that doesn't match the expected shape (e.g. a
 * resource with no id to identity-map on). Distinct from an HTTP error: the
 * request succeeded but the body is unusable. */
export class MalformedResponse extends LeavePulseError {
	constructor(
		message: string,
		readonly payload: unknown,
	) {
		super(message);
	}
}

/** Any non-2xx HTTP response. Subclasses narrow by status. */
export class HTTPException extends LeavePulseError {
	readonly status: number;
	readonly request: TransportRequest;
	readonly problem: ProblemDetails | null;
	/** Raw response body text when it wasn't valid problem+json. */
	readonly raw: string;

	constructor(
		status: number,
		request: TransportRequest,
		problem: ProblemDetails | null,
		raw: string,
	) {
		const code = problem?.code ? ` [${problem.code}]` : "";
		const detail = problem?.detail ?? problem?.title ?? raw;
		super(
			`${request.method} ${request.path} → ${status}${code}${detail ? `: ${detail}` : ""}`,
		);
		this.status = status;
		this.request = request;
		this.problem = problem;
		this.raw = raw;
	}

	/** Machine-readable error code, when the server supplied one. */
	get code(): string | undefined {
		return this.problem?.code;
	}

	/** Correlation id for support, when present. */
	get requestId(): string | undefined {
		return this.problem?.requestId;
	}
}

/** 400 — malformed request / failed validation. `fields` holds per-field
 * validation messages when the backend supplied them. */
export class BadRequest extends HTTPException {
	/** Per-field validation errors, when the backend reported them. */
	get fields(): Record<string, unknown> | undefined {
		const d = this.problem?.details;
		if (d && typeof d === "object") {
			const f =
				(d as { fields?: unknown; errors?: unknown }).fields ??
				(d as { errors?: unknown }).errors;
			if (f && typeof f === "object") return f as Record<string, unknown>;
		}
		return undefined;
	}
}

/** 401 — authentication required or failed. */
export class Unauthorized extends HTTPException {}
/** 403 — authenticated but not permitted. */
export class Forbidden extends HTTPException {}
/** 404 — resource not found. */
export class NotFound extends HTTPException {}
/** 409 — state conflict (e.g. duplicate, already-exists). */
export class Conflict extends HTTPException {}

/** 429 — rate limited. `retryAfter` is the server-advised wait in seconds. */
export class RateLimited extends HTTPException {
	constructor(
		status: number,
		request: TransportRequest,
		problem: ProblemDetails | null,
		raw: string,
		readonly retryAfter: number | undefined,
	) {
		super(status, request, problem, raw);
	}
}

/** 5xx — the server failed to fulfil a valid request. */
export class ServerError extends HTTPException {}

/** Parse a response body as RFC 7807 problem+json; `null` if it isn't JSON. */
export function parseProblem(raw: string): ProblemDetails | null {
	if (!raw) return null;
	try {
		const obj = JSON.parse(raw) as Record<string, unknown>;
		if (!obj || typeof obj !== "object") return null;
		// The wire uses snake_case (`request_id`); expose camelCase too.
		return {
			...obj,
			requestId: (obj.request_id ?? obj.requestId) as string | undefined,
		} as ProblemDetails;
	} catch {
		return null;
	}
}

/** Build the right `HTTPException` subclass from a failed response. */
export function httpErrorFor(
	status: number,
	request: TransportRequest,
	raw: string,
	retryAfter?: number,
): HTTPException {
	const problem = parseProblem(raw);
	switch (status) {
		case 400:
			return new BadRequest(status, request, problem, raw);
		case 401:
			return new Unauthorized(status, request, problem, raw);
		case 403:
			return new Forbidden(status, request, problem, raw);
		case 404:
			return new NotFound(status, request, problem, raw);
		case 409:
			return new Conflict(status, request, problem, raw);
		case 429:
			return new RateLimited(status, request, problem, raw, retryAfter);
		default:
			if (status >= 500) return new ServerError(status, request, problem, raw);
			return new HTTPException(status, request, problem, raw);
	}
}
