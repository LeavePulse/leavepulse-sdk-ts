// LeavePulse SDK — identity map.
//
// Guarantees one live object per (resource, id): `client.project(1)` always
// returns the same instance, so `p1 === p2`. Resource instances hold their
// data; the cache hands back the existing instance and refreshes its data in
// place rather than minting a new object.
//
// Per RFC 0001 §5 the cache is NOT a TTL auto-refetcher. Getters never touch
// the network; data only changes on an explicit `refresh()` / `invalidate()`.

export interface Identified {
	/** Stable identity within its resource type. */
	readonly id: string | number;
	/** Replace this instance's backing data in place (used on refresh). */
	_hydrate(data: unknown): void;
}

export class IdentityMap {
	private readonly byType = new Map<string, Map<string, Identified>>();

	/**
	 * Return the canonical instance for (type, id), creating it via `factory`
	 * on first sight and hydrating the existing one with fresh data otherwise.
	 */
	upsert<T extends Identified>(
		type: string,
		id: string | number,
		data: unknown,
		factory: () => T,
	): T {
		const key = String(id);
		let bucket = this.byType.get(type);
		if (!bucket) {
			bucket = new Map();
			this.byType.set(type, bucket);
		}
		const existing = bucket.get(key);
		if (existing) {
			existing._hydrate(data);
			return existing as T;
		}
		const created = factory();
		bucket.set(key, created);
		return created;
	}

	/**
	 * Return the canonical instance for (type, id) WITHOUT touching its data:
	 * the existing one as-is, or a freshly constructed one (typically seeded
	 * with just `{ id }`) on first sight. Used by sync id-accessors
	 * (`client.project(1)`) that hand back a resource without a GET; data is
	 * loaded on demand via `refresh()`. Unlike `upsert`, never overwrites an
	 * already-hydrated instance.
	 */
	ensure<T extends Identified>(
		type: string,
		id: string | number,
		factory: () => T,
	): T {
		const key = String(id);
		let bucket = this.byType.get(type);
		if (!bucket) {
			bucket = new Map();
			this.byType.set(type, bucket);
		}
		const existing = bucket.get(key);
		if (existing) return existing as T;
		const created = factory();
		bucket.set(key, created);
		return created;
	}

	get<T extends Identified>(type: string, id: string | number): T | undefined {
		return this.byType.get(type)?.get(String(id)) as T | undefined;
	}

	/** Drop one instance (or a whole type) from the cache. */
	invalidate(type: string, id?: string | number): void {
		if (id === undefined) {
			this.byType.delete(type);
			return;
		}
		this.byType.get(type)?.delete(String(id));
	}

	clear(): void {
		this.byType.clear();
	}
}
