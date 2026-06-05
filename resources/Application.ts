// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["WhitelistApplicationList"] & {
	server_id?: string | number;
};

export class Application extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may apply (RFC §4). */
	get canApply(): boolean {
		return this.hasCapability("apply", "application.apply");
	}

	/** Whether the current user may set_status (RFC §4). */
	get canSetStatus(): boolean {
		return this.hasCapability("set_status", "application.set_status");
	}

	/** Whether the current user may approve (RFC §4). */
	get canApprove(): boolean {
		return this.hasCapability("approve", "application.approve");
	}

	/** Whether the current user may deny (RFC §4). */
	get canDeny(): boolean {
		return this.hasCapability("deny", "application.deny");
	}

	/** Whether the current user may resubmit (RFC §4). */
	get canResubmit(): boolean {
		return this.hasCapability("resubmit", "application.resubmit");
	}

	/** server.whitelist.apply */
	async whitelistApply(
		serverId: Snowflake,
		body: models.WhitelistApplyRequest,
	): Promise<models.WhitelistApplication> {
		return this.ctx.transport.request<models.WhitelistApplication>({
			method: "POST",
			path: `/v1/servers/${serverId}/whitelist/applications`,
			body,
		});
	}

	/** application.set_status */
	async setStatus(
		serverId: Snowflake,
		body: models.WhitelistStatusRequest,
	): Promise<models.WhitelistApplication> {
		return this.ctx.transport.request<models.WhitelistApplication>({
			method: "PATCH",
			path: `/v1/servers/${serverId}/whitelist/applications/${this.id}`,
			body,
		});
	}

	/** application.approve */
	async approve(
		serverId: Snowflake,
		body: models.WhitelistDecisionRequest,
	): Promise<models.WhitelistApplication> {
		return this.ctx.transport.request<models.WhitelistApplication>({
			method: "POST",
			path: `/v1/servers/${serverId}/whitelist/applications/${this.id}/approve`,
			body,
		});
	}

	/** application.deny */
	async deny(
		serverId: Snowflake,
		body: models.WhitelistDecisionRequest,
	): Promise<models.WhitelistApplication> {
		return this.ctx.transport.request<models.WhitelistApplication>({
			method: "POST",
			path: `/v1/servers/${serverId}/whitelist/applications/${this.id}/deny`,
			body,
		});
	}

	/** application.resubmit */
	async resubmit(
		serverId: Snowflake,
		body: models.WhitelistApplyRequest,
	): Promise<models.WhitelistApplication> {
		return this.ctx.transport.request<models.WhitelistApplication>({
			method: "PATCH",
			path: `/v1/servers/${serverId}/whitelist/applications/${this.id}/resubmit`,
			body,
		});
	}
}
