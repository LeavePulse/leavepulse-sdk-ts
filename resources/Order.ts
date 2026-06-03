// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";

type Data = components["schemas"]["Order"];

export class Order extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Order and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/billing/orders/${this.id}`,
		});
		this.ctx.hydrate("Order", data);
		return this;
	}

	/** Load this Order's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
	}
}
