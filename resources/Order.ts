// Generated from the LeavePulse contract. Do not edit.
import type { ClientContext } from "../client";
import type * as models from "../models";

/** Order — a scope namespace (no instance identity). */
export class Order {
	constructor(private readonly ctx: ClientContext) {}

	/** order.get */
	async get(orderId: string): Promise<models.Order> {
		return this.ctx.transport.request<models.Order>({
			method: "GET",
			path: `/v1/billing/orders/${orderId}`,
		});
	}
}
