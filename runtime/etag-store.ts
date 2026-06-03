// LeavePulse SDK — ETag cache store (RFC 7232 conditional requests).
//
// `transport.conditional()` is the raw mechanism: it sends `If-None-Match` and
// reports modified / not_modified / not_found, but doesn't remember anything.
// This module adds the *policy*: an `EtagStore` keeps `{etag, body}` per key,
// and `fetchCached` ties it to the transport — serve the cached body on `304`,
// store the new body on `200`. Two stores ship (in-memory, localStorage);
// implement `EtagStore` for anything else (SQLite, IndexedDB, …).

import { NotFound } from "./errors";
import type {
	ConditionalResult,
	Transport,
	TransportRequest,
} from "./transport";

/** A cached conditional response: the validator and the body it belongs to. */
export interface EtagEntry<T = unknown> {
	etag: string;
	body: T;
}

/**
 * Pluggable storage for ETag cache entries. Sync or async — `fetchCached`
 * awaits every call, so a synchronous store (Map) and an async one (IndexedDB,
 * SQLite) satisfy the same interface.
 */
export interface EtagStore {
	get<T>(
		key: string,
	): EtagEntry<T> | undefined | Promise<EtagEntry<T> | undefined>;
	set<T>(key: string, entry: EtagEntry<T>): void | Promise<void>;
	delete(key: string): void | Promise<void>;
}

/** The default cache key for a request: method + path (+ query). */
export function defaultCacheKey(req: TransportRequest): string {
	const channel = req.channel ?? "platform";
	return `${channel} ${req.method} ${req.path}`;
}

/** In-process cache. Lives for the process; ideal for SSR and tests. */
export class MemoryEtagStore implements EtagStore {
	private readonly map = new Map<string, EtagEntry>();

	get<T>(key: string): EtagEntry<T> | undefined {
		return this.map.get(key) as EtagEntry<T> | undefined;
	}

	set<T>(key: string, entry: EtagEntry<T>): void {
		this.map.set(key, entry);
	}

	delete(key: string): void {
		this.map.delete(key);
	}
}

/**
 * Browser-persistent cache backed by `localStorage`. Entries survive reloads;
 * a parse/quota failure degrades to a cache miss rather than throwing, so a
 * full or corrupt store never breaks a request.
 */
export class LocalStorageEtagStore implements EtagStore {
	/** @param prefix namespaces keys to avoid clashing with other data. */
	constructor(
		private readonly storage: Storage,
		private readonly prefix = "lp.etag:",
	) {}

	get<T>(key: string): EtagEntry<T> | undefined {
		const raw = this.storage.getItem(this.prefix + key);
		if (raw === null) return undefined;
		try {
			return JSON.parse(raw) as EtagEntry<T>;
		} catch {
			return undefined;
		}
	}

	set<T>(key: string, entry: EtagEntry<T>): void {
		try {
			this.storage.setItem(this.prefix + key, JSON.stringify(entry));
		} catch {
			// Quota exceeded / unavailable — skip caching, the request still works.
		}
	}

	delete(key: string): void {
		try {
			this.storage.removeItem(this.prefix + key);
		} catch {
			// ignore
		}
	}
}

export interface FetchCachedOptions {
	/** Override the cache key (default: channel + method + path). */
	key?: string;
}

/**
 * Fetch a resource through the ETag cache: send the stored validator, return
 * the cached body unchanged on `304`, store and return the fresh body on `200`,
 * and return `null` on `404` (evicting any stale entry).
 */
export async function fetchCached<T>(
	transport: Transport,
	store: EtagStore,
	req: TransportRequest,
	options: FetchCachedOptions = {},
): Promise<T | null> {
	const key = options.key ?? defaultCacheKey(req);
	const cached = await store.get<T>(key);
	const result: ConditionalResult<T> = await transport.conditional<T>({
		...req,
		ifNoneMatch: cached?.etag,
	});

	switch (result.status) {
		case "not_modified":
			// Server confirmed the cached copy is current. (If the cache was empty
			// this shouldn't happen, but fall back to whatever we have.)
			return cached?.body ?? null;
		case "modified":
			if (result.etag) {
				await store.set<T>(key, { etag: result.etag, body: result.data });
			}
			return result.data;
		case "not_found":
			await store.delete(key);
			return null;
	}
}

/**
 * Like {@link fetchCached} but for endpoints that always yield a value: a `404`
 * (null) is surfaced as a {@link NotFound} error, matching what a plain
 * `transport.request` would throw. Generated GET methods route through this so
 * their return type stays non-nullable.
 */
export async function fetchCachedOrThrow<T>(
	transport: Transport,
	store: EtagStore,
	req: TransportRequest,
	options: FetchCachedOptions = {},
): Promise<T> {
	const body = await fetchCached<T>(transport, store, req, options);
	if (body === null) {
		throw new NotFound(404, req, null, "");
	}
	return body;
}
