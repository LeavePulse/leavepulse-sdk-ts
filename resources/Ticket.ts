// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { TopicSubscription } from "../runtime/realtime";
import { fetchCachedOrThrow } from "../runtime/etag-store";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["TicketList"];

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
	async messagesList(): Promise<models.TicketMessageList> {
		return fetchCachedOrThrow<models.TicketMessageList>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/community/tickets/${this.id}/messages` },
		);
	}

	/** ticket.set_status */
	async setStatus(
		body: models.TicketStatusUpdateRequest,
	): Promise<models.TicketSummary> {
		return this.ctx.transport.request<models.TicketSummary>({
			method: "PATCH",
			path: `/v1/community/tickets/${this.id}`,
			body,
		});
	}

	/** ticket.reply */
	async reply(
		body: models.TicketMessageCreateRequest,
	): Promise<models.TicketMessage> {
		return this.ctx.transport.request<models.TicketMessage>({
			method: "POST",
			path: `/v1/community/tickets/${this.id}/messages`,
			body,
		});
	}

	/** Subscribe to `ticket.thread.{ticket_id}` (private realtime). */
	onThread(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, `ticket.thread.${this.id}`);
	}
}
