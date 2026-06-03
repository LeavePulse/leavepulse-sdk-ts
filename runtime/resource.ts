// LeavePulse SDK — base resource.
//
// Generated resource classes extend this. It holds the backing data, supports
// in-place hydration for the identity map, and computes runtime capabilities
// (RFC 0001 §4): a static capability is "usable" only if the user's
// permissions carry it. Getters here never touch the network.
//
// Wrapped responses (RFC §3.1 x-sdk-data-root, e.g.
// `{ project: {id, ...}, servers: [...] }`) are normalized by the client
// BEFORE a resource is constructed: the core object is unwrapped and sibling
// fields (links) are merged onto it. So a resource always sees a flat object
// with `id` at the top level — the data root never leaks into runtime.

import type { Identified } from "./cache";

/** Extract an instance id from a payload. Resources key on different fields:
 * most use `id`, some use a domain id (`user_id`). When `idPath` is given the
 * id lives at a nested path (`["summary", "id"]` for an envelope), so we walk it
 * directly. Otherwise: top-level `id`, then the first `*_id` field, so identity
 * mapping works regardless of the schema's id name. */
export function extractId(
	data: Record<string, unknown>,
	idPath?: readonly string[],
): string | number {
	if (idPath && idPath.length > 0) {
		let cursor: unknown = data;
		for (const segment of idPath) {
			if (cursor == null || typeof cursor !== "object") return "";
			cursor = (cursor as Record<string, unknown>)[segment];
		}
		return typeof cursor === "string" || typeof cursor === "number"
			? cursor
			: "";
	}
	const direct = data.id;
	if (typeof direct === "string" || typeof direct === "number") return direct;
	for (const [key, value] of Object.entries(data)) {
		if (
			key.endsWith("_id") &&
			(typeof value === "string" || typeof value === "number")
		) {
			return value;
		}
	}
	return "";
}

export abstract class Resource<TData extends Record<string, unknown>>
	implements Identified
{
	protected data: TData;

	constructor(data: TData) {
		this.data = data;
	}

	get id(): string | number {
		return extractId(this.data);
	}

	/** Replace backing data in place (identity map refresh). */
	_hydrate(data: unknown): void {
		this.data = data as TData;
	}

	/** Snapshot of the backing data (always from memory). */
	toJSON(): TData {
		return this.data;
	}

	/**
	 * Whether the current principal may perform `capability` on this instance:
	 * the static capability must exist AND the permission must be granted in the
	 * resource's payload. Emitters expose this as `can_<capability>` getters.
	 */
	protected hasCapability(
		_capability: string,
		permissionCode: string,
	): boolean {
		const perms = (this.data as { user_permissions?: unknown })
			.user_permissions;
		return Array.isArray(perms) && perms.includes(permissionCode);
	}
}
