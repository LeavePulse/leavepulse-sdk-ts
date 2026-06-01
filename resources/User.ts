// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { Resource } from "../runtime/resource";
import type { components } from "../types";

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

	/** user.report */
	async report(
		body: components["schemas"]["ReportUserRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/users/${this.id}/report`,
			body,
		});
		this.ctx.hydrate("User", data);
		return this;
	}
}
