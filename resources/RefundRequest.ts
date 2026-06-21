// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";

type Data = components["schemas"]["RefundRequest"];

export class RefundRequest extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may cancel (RFC §4). */
	get canCancel(): boolean {
		return this.hasCapability("cancel", "refundrequest.cancel");
	}

	/** refundRequest.cancel */
	async cancel(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/billing/refund-requests/${this.id}/cancel`,
		});
		this.ctx.hydrate("RefundRequest", data);
		return this;
	}
}
