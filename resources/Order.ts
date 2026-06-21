// Generated from the LeavePulse contract. Do not edit.
import { Resource, extractId } from "../runtime/resource";
import { fetchCachedOrThrow } from "../runtime/etag-store";
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
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/billing/orders/${this.id}` },
		);
		let hydrated = data as Record<string, unknown>;
		const id = extractId(hydrated);
		return this.ctx.cache.upsertAlias(
			"Order",
			this.id,
			id,
			hydrated,
			() => this,
		) as this;
	}

	/** Load this Order's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
	}

	/** Whether the current user may reconcile (RFC §4). */
	get canReconcile(): boolean {
		return this.hasCapability("reconcile", "order.reconcile");
	}

	/** Whether the current user may refund (RFC §4). */
	get canRefund(): boolean {
		return this.hasCapability("refund", "order.refund");
	}

	/** order.reconcile */
	async reconcile(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/billing/orders/${this.id}/reconcile`,
		});
		this.ctx.hydrate("Order", data);
		return this;
	}

	/** order.refund */
	async refund(body: models.RefundRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/billing/orders/${this.id}/refund`,
			body,
		});
		this.ctx.hydrate("Order", data);
		return this;
	}
}
