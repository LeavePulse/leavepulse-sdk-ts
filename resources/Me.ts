// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { TopicSubscription } from "../runtime/realtime";
import { Resource } from "../runtime/resource";
import type { components } from "../types";

type Data = components["schemas"]["MeResponse"];

export class Me extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Me and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/me`,
		});
		this.ctx.hydrate("Me", data);
		return this;
	}

	/** Subscribe to `user.server_issues` (private realtime). */
	onServerIssues(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.server_issues");
	}

	/** Subscribe to `user.tickets` (private realtime). */
	onTickets(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.tickets");
	}

	/** Subscribe to `user.billing` (private realtime). */
	onBilling(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.billing");
	}

	/** Subscribe to `user.whitelist` (private realtime). */
	onWhitelist(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.whitelist");
	}
}
