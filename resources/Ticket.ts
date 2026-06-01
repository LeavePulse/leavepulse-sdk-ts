// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { TopicSubscription } from "../runtime/realtime";
import type { components } from "../types";
import type { ClientContext } from "../client";

type Data = { id: string | number } & Record<string, unknown>;

export class Ticket extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may set_status (RFC §4). */
	get canSetStatus(): boolean {
		return this.hasCapability("set_status", "ticket.set_status");
	}

	/** Whether the current user may reply (RFC §4). */
	get canReply(): boolean {
		return this.hasCapability("reply", "ticket.reply");
	}

	/** ticket.messages.list */
	async messagesList(): Promise<components["schemas"]["TicketMessageList"]> {
		return this.ctx.transport.request<
			components["schemas"]["TicketMessageList"]
		>({ method: "GET", path: `/v1/community/tickets/${this.id}/messages` });
	}

	/** ticket.set_status */
	async setStatus(
		body: components["schemas"]["TicketStatusUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/community/tickets/${this.id}`,
			body,
		});
		this.ctx.hydrate("Ticket", data);
		return this;
	}

	/** ticket.reply */
	async reply(
		body: components["schemas"]["TicketMessageCreateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/tickets/${this.id}/messages`,
			body,
		});
		this.ctx.hydrate("Ticket", data);
		return this;
	}

	/** Subscribe to `ticket.thread.{ticket_id}` (private realtime). */
	onThread(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, `ticket.thread.${this.id}`);
	}
}
