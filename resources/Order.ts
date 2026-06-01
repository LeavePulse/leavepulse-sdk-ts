// Generated from the LeavePulse contract. Do not edit.
import type { ClientContext } from "../client";
import type { components } from "../types";

/** Order — a scope namespace (no instance identity). */
export class Order {
	constructor(private readonly ctx: ClientContext) {}

	/** order.get */
	async get(orderId: string): Promise<components["schemas"]["Order"]> {
		return this.ctx.transport.request<components["schemas"]["Order"]>({
			method: "GET",
			path: `/v1/billing/orders/${orderId}`,
		});
	}
}
