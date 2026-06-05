// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["SessionList"];

export class Session extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may revoke (RFC §4). */
	get canRevoke(): boolean {
		return this.hasCapability("revoke", "session.revoke");
	}

	/** session.revoke */
	async revoke(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/sessions/${this.id}/actions/revoke`,
		});
		this.ctx.hydrate("Session", data);
		return this;
	}
}
