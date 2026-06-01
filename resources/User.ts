// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";

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
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/users/${this.id}/public-profile`,
		});
		this.ctx.hydrate("User", data);
		return this;
	}

	/** Whether the current user may report (RFC §4). */
	get canReport(): boolean {
		return this.hasCapability("report", "user.report");
	}

	/** user.heatmap */
	async heatmap(params?: {
		days?: number;
	}): Promise<models.ProfileActivityHeatmap> {
		return this.ctx.transport.request<models.ProfileActivityHeatmap>({
			method: "GET",
			path: `/v1/users/${this.id}/profile/activity`,
			query: { days: params?.days },
		});
	}

	/** user.gameplay */
	async gameplay(): Promise<models.ProfileGameplaySummary> {
		return this.ctx.transport.request<models.ProfileGameplaySummary>({
			method: "GET",
			path: `/v1/users/${this.id}/profile/gameplay`,
		});
	}

	/** user.ownership */
	async ownership(): Promise<models.ProfileOwnershipSummary> {
		return this.ctx.transport.request<models.ProfileOwnershipSummary>({
			method: "GET",
			path: `/v1/users/${this.id}/profile/ownership`,
		});
	}

	/** user.report */
	async report(userId: string, body: models.ReportUserRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/users/${userId}/report`,
			body,
		});
		this.ctx.hydrate("User", data);
		return this;
	}
}
