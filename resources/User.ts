// Generated from the LeavePulse contract. Do not edit.
import { Resource, extractId } from "../runtime/resource";
import { fetchCachedOrThrow } from "../runtime/etag-store";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["PublicProfile"];

export class User extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this User and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/users/${this.id}/public-profile` },
		);
		let hydrated = data as Record<string, unknown>;
		const id = extractId(hydrated);
		return this.ctx.cache.upsertAlias(
			"User",
			this.id,
			id,
			hydrated,
			() => this,
		) as this;
	}

	/** Load this User's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
	}

	/** Whether the current user may report (RFC §4). */
	get canReport(): boolean {
		return this.hasCapability("report", "user.report");
	}

	/** user.heatmap */
	async heatmap(params?: {
		days?: number;
	}): Promise<models.ProfileActivityHeatmap> {
		return fetchCachedOrThrow<models.ProfileActivityHeatmap>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/users/${this.id}/profile/activity`,
				query: { days: params?.days },
			},
		);
	}

	/** user.gameplay */
	async gameplay(): Promise<models.ProfileGameplaySummary> {
		return fetchCachedOrThrow<models.ProfileGameplaySummary>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/users/${this.id}/profile/gameplay` },
		);
	}

	/** user.ownership */
	async ownership(): Promise<models.ProfileOwnershipSummary> {
		return fetchCachedOrThrow<models.ProfileOwnershipSummary>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/users/${this.id}/profile/ownership` },
		);
	}

	/** user.report */
	async report(
		userId: Snowflake,
		body: models.ReportUserRequest,
	): Promise<models.ReportUserResult> {
		return this.ctx.transport.request<models.ReportUserResult>({
			method: "POST",
			path: `/v1/community/users/${userId}/report`,
			body,
		});
	}
}
