// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";

type Data = components["schemas"]["PaymentMethod"];

export class PaymentMethod extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may set-default (RFC §4). */
	get canSetDefault(): boolean {
		return this.hasCapability("set-default", "paymentmethod.set-default");
	}

	/** paymentMethod.delete */
	async paymentMethodDelete(): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "DELETE",
			path: `/v1/billing/payment-methods/${this.id}`,
		});
	}

	/** paymentMethod.setDefault */
	async setDefault(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/billing/payment-methods/${this.id}/default`,
		});
		this.ctx.hydrate("PaymentMethod", data);
		return this;
	}
}
