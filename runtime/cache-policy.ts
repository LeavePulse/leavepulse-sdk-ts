// LeavePulse SDK — CachePolicy.
//
// An OPTIONAL layer that sits ABOVE the identity map (cache.ts) and answers a
// different question than the ETag store does. The ETag store (etag-store.ts)
// answers "did the bytes change?" (HTTP 304). CachePolicy answers "is my entity
// fresh enough, at this completeness level, that I can skip the network
// entirely?" (TTL + levels). The two stack:
//
//   TTL-hit  → no request at all (zero RTT)
//   TTL-miss → the caller's fetcher runs; a generated SDK GET already routes
//              through fetchCached, so a 304 reuses the body — and CachePolicy
//              then stamps a fresh TTL. So an unchanged entity is "fresh" again
//              after one cheap 304, with no re-download.
//
// CachePolicy holds NO module-level state: it is handed a `PolicyState` whose
// Records are owned by the consumer (e.g. Pinia `ref()`s), which keeps it
// SSR-safe. It NEVER touches the network itself except inside `ensure()`, and
// even there only via the caller-supplied fetcher — so sync getters stay
// network-free (RFC 0001 §5).

/** Caller-defined completeness levels, ranked by number (higher = more complete). */
export interface PolicyConfig<TData, TLevel extends string> {
	/** Identity-map type key, e.g. "Server". Informational; the policy keys by id. */
	type: string;
	/** Level → rank. e.g. `{ list: 1, profile: 2, manage: 3 }`. */
	levels: Record<TLevel, number>;
	/** Level → TTL in ms. e.g. `{ list: 60_000, profile: 300_000, manage: 180_000 }`. */
	ttlMs: Record<TLevel, number>;
	/** Extract the alias refs an entity can be addressed by (id/slug/domain/...). */
	refs?: (data: TData) => string[];
	/** Normalize a ref before indexing/lookup. Default: trim + lowercase. */
	normalizeRef?: (ref: string) => string;
	/** Shallow-merge incoming onto base, skipping `undefined`. Default below. */
	merge?: (base: TData, incoming: Partial<TData>) => TData;
	/** Default TTL for query/page entries when `setQuery` gets no override. */
	queryTtlMs?: number;
	/**
	 * Optional readiness gate BEYOND level+TTL: whether a cached entry's payload
	 * is rich enough to satisfy `level`. Lets a consumer demand specific fields
	 * (e.g. a "profile" entry without `display_server` is incomplete, so re-fetch
	 * even though its level/TTL pass). Returns `true` when ready. Default: always
	 * ready (level+TTL alone decide).
	 */
	ready?: (data: TData, level: TLevel) => boolean;
	/**
	 * Fields to PRESERVE when a lower-level upsert lands on a higher-level entry,
	 * keyed by the level that owns them. When merging e.g. a "list" payload onto
	 * an entry already at "manage", the manage-owned fields are not clobbered by
	 * the thinner payload. Returns the protected field names for a given level.
	 */
	protectedFields?: (level: TLevel) => readonly string[];
}

export interface PolicyEntry<TData, TLevel extends string> {
	data: TData;
	level: TLevel;
	/** Per-level last-updated timestamp (ms). 0 = never. */
	freshness: Record<TLevel, number>;
}

export interface QueryEntry {
	ids: string[];
	total: number;
	page: number;
	limit: number;
	fetchedAt: number;
	staleAt: number;
}

/**
 * The backing state. The consumer owns these Records (e.g. as Pinia refs) so
 * the policy stays SSR-safe and reactive — CachePolicy only reads/writes them.
 */
export interface PolicyState<TData, TLevel extends string> {
	entities: Record<string, PolicyEntry<TData, TLevel>>;
	refToId: Record<string, string>;
	queries: Record<string, QueryEntry>;
}

export interface EnsureOptions<TLevel extends string> {
	/** Minimum level the cached entry must satisfy to count as a hit. */
	minLevel?: TLevel;
	/** Level to stamp on the fetched result. Defaults to `minLevel`. */
	level?: TLevel;
	/** Force a fetch even if the cache is fresh. */
	force?: boolean;
}

const DEFAULT_QUERY_TTL_MS = 45_000;

function defaultNormalizeRef(ref: string): string {
	return String(ref ?? "")
		.trim()
		.toLowerCase();
}

function defaultMerge<T extends Record<string, unknown>>(
	base: T,
	incoming: Partial<T>,
): T {
	const merged: Record<string, unknown> = { ...base };
	for (const [key, value] of Object.entries(incoming)) {
		if (value !== undefined) merged[key] = value;
	}
	return merged as T;
}

export class CachePolicy<
	TData extends Record<string, unknown> & { id: string | number },
	TLevel extends string,
> {
	private readonly config: PolicyConfig<TData, TLevel>;
	private readonly state: PolicyState<TData, TLevel>;
	private readonly normalizeRef: (ref: string) => string;
	private readonly merge: (base: TData, incoming: Partial<TData>) => TData;
	private readonly levelKeys: TLevel[];

	constructor(
		config: PolicyConfig<TData, TLevel>,
		state: PolicyState<TData, TLevel>,
	) {
		this.config = config;
		this.state = state;
		this.normalizeRef = config.normalizeRef ?? defaultNormalizeRef;
		this.merge = config.merge ?? defaultMerge;
		this.levelKeys = Object.keys(config.levels) as TLevel[];
	}

	// --- level helpers ---------------------------------------------------------

	private rank(level: TLevel): number {
		return this.config.levels[level] ?? 0;
	}

	/** Whether `current` rank is at least `expected`'s. */
	private levelAtLeast(current: TLevel, expected: TLevel): boolean {
		return this.rank(current) >= this.rank(expected);
	}

	/** Return the higher-ranked of two levels. */
	private maxLevel(current: TLevel, incoming: TLevel): TLevel {
		return this.rank(current) >= this.rank(incoming) ? current : incoming;
	}

	private emptyFreshness(): Record<TLevel, number> {
		const record = {} as Record<TLevel, number>;
		for (const level of this.levelKeys) record[level] = 0;
		return record;
	}

	/** Stamp every level up to and including `level` with `timestamp`. */
	private touchFreshness(
		freshness: Record<TLevel, number>,
		level: TLevel,
		timestamp: number,
	): Record<TLevel, number> {
		const targetRank = this.rank(level);
		const next = { ...freshness };
		for (const key of this.levelKeys) {
			if (this.rank(key) <= targetRank) {
				next[key] = Math.max(next[key] ?? 0, timestamp);
			}
		}
		return next;
	}

	// --- ref index -------------------------------------------------------------

	private indexRefs(data: TData, id: string): void {
		if (!this.config.refs) return;
		for (const ref of this.config.refs(data)) {
			const key = this.normalizeRef(ref);
			if (key) this.state.refToId[key] = id;
		}
	}

	private idForRef(ref: string): string | null {
		const key = this.normalizeRef(ref);
		if (!key) return null;
		return this.state.refToId[key] ?? null;
	}

	// --- sync reads (NEVER hit the network; RFC §5) ----------------------------

	getById(id: string | number): TData | null {
		const key = String(id ?? "").trim();
		if (!key) return null;
		return this.state.entities[key]?.data ?? null;
	}

	getByRef(ref: string): TData | null {
		const id = this.idForRef(ref);
		if (!id) return null;
		return this.getById(id);
	}

	getByIds(ids: Array<string | number>): TData[] {
		const items: TData[] = [];
		for (const id of ids) {
			const entity = this.getById(id);
			if (entity) items.push(entity);
		}
		return items;
	}

	hasLevel(ref: string, level: TLevel): boolean {
		const entry = this.entryForRef(ref);
		if (!entry) return false;
		if (!this.levelAtLeast(entry.level, level)) return false;
		// A higher-or-equal level still fails the readiness gate if the payload
		// lacks the fields that level requires.
		return this.config.ready?.(entry.data, level) ?? true;
	}

	isFresh(ref: string, level: TLevel): boolean {
		const entry = this.entryForRef(ref);
		if (!entry) return false;
		const lastUpdated = Number(entry.freshness[level] ?? 0);
		if (lastUpdated <= 0) return false;
		return Date.now() - lastUpdated <= (this.config.ttlMs[level] ?? 0);
	}

	private entryForRef(ref: string): PolicyEntry<TData, TLevel> | null {
		// Accept a raw id directly as well as an indexed ref.
		const direct = this.state.entities[String(ref ?? "").trim()];
		if (direct) return direct;
		const id = this.idForRef(ref);
		if (!id) return null;
		return this.state.entities[id] ?? null;
	}

	// --- mutations -------------------------------------------------------------

	/** Identity-map upsert + ref index + level/freshness bump. */
	upsert(data: TData, level: TLevel): TData {
		const id = String(data.id ?? "").trim();
		if (!id) return data;

		const existing = this.state.entities[id];
		const nextLevel = existing ? this.maxLevel(existing.level, level) : level;
		const baseData = existing?.data ?? ({} as TData);
		const mergedData = this.merge(baseData, data);
		// When a thinner (lower-level) payload lands on a richer entry, keep the
		// higher level's owned fields from being clobbered by absent/blank values.
		if (
			existing &&
			this.config.protectedFields &&
			this.levelAtLeast(existing.level, level) &&
			existing.level !== level
		) {
			for (const field of this.config.protectedFields(existing.level)) {
				if (baseData[field] !== undefined) {
					(mergedData as Record<string, unknown>)[field] = baseData[field];
				}
			}
		}
		const mergedFreshness = this.touchFreshness(
			existing?.freshness ?? this.emptyFreshness(),
			level,
			Date.now(),
		);

		this.state.entities[id] = {
			data: mergedData,
			level: nextLevel,
			freshness: mergedFreshness,
		};
		this.indexRefs(mergedData, id);
		return mergedData;
	}

	upsertMany(items: TData[], level: TLevel): void {
		for (const item of items) this.upsert(item, level);
	}

	/** Shallow patch an existing entry's data (e.g. a realtime live overlay). */
	patch(id: string | number, patch: Partial<TData>): void {
		const key = String(id ?? "").trim();
		if (!key) return;
		const existing = this.state.entities[key];
		if (!existing) return;
		const data = this.merge(existing.data, patch);
		this.state.entities[key] = { ...existing, data };
		this.indexRefs(data, key);
	}

	invalidate(id: string | number): void {
		const key = String(id ?? "").trim();
		if (key) delete this.state.entities[key];
	}

	// --- query / page cache ----------------------------------------------------

	setQuery(
		queryKey: string,
		payload: {
			ids: Array<string | number>;
			total: number;
			page: number;
			limit: number;
		},
		opts: { ttlMs?: number } = {},
	): void {
		const key = String(queryKey ?? "").trim();
		if (!key) return;
		const now = Date.now();
		const ttl =
			Number(opts.ttlMs) > 0
				? Number(opts.ttlMs)
				: (this.config.queryTtlMs ?? DEFAULT_QUERY_TTL_MS);
		this.state.queries[key] = {
			ids: payload.ids.map((id) => String(id)).filter(Boolean),
			total: Number(payload.total || 0),
			page: Number(payload.page || 1),
			limit: Number(payload.limit || 20),
			fetchedAt: now,
			staleAt: now + ttl,
		};
	}

	getQuery(queryKey: string): QueryEntry | null {
		const key = String(queryKey ?? "").trim();
		if (!key) return null;
		return this.state.queries[key] ?? null;
	}

	isQueryFresh(queryKey: string): boolean {
		const entry = this.getQuery(queryKey);
		if (!entry) return false;
		return Date.now() <= entry.staleAt;
	}

	// --- the ONLY network-touching method --------------------------------------

	/**
	 * Return a fresh-enough cached entry, or fetch via `fetcher` and cache it.
	 *
	 * The `fetcher` is a thunk the caller builds from a generated SDK GET (which
	 * already routes through the ETag layer). So on a TTL-miss the round-trip may
	 * still resolve to a 304 inside the fetcher, reusing the body; `ensure` then
	 * stamps a fresh TTL. ETag is never touched here — the two layers compose.
	 */
	async ensure(
		ref: string,
		fetcher: () => Promise<TData | null>,
		opts: EnsureOptions<TLevel> = {},
	): Promise<TData | null> {
		// levelKeys is derived from the required `config.levels` map, so it is
		// always non-empty — the `[0]` fallback exists.
		const minLevel: TLevel = opts.minLevel ?? (this.levelKeys[0] as TLevel);
		const stampLevel = opts.level ?? minLevel;
		const force = Boolean(opts.force);

		const cached = this.entryForRef(ref);
		// A hit must clear all three gates: level reached, readiness payload
		// present (config.ready), and TTL still fresh. `hasLevel` covers the
		// first two; `isFresh` the third.
		if (
			cached &&
			!force &&
			this.hasLevel(ref, minLevel) &&
			this.isFresh(ref, minLevel)
		) {
			return cached.data;
		}

		const fetched = await fetcher();
		if (!fetched) return cached?.data ?? null;
		return this.upsert(fetched, stampLevel);
	}
}
