// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { Resource } from "../runtime/resource";
import type { components } from "../types";

type Data = { id: string | number } & Record<string, unknown> & {
		binding_id?: string | number;
	};

export class Binding extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may delete (RFC §4). */
	get canDelete(): boolean {
		return this.hasCapability("delete", "binding.delete");
	}

	/** Whether the current user may update (RFC §4). */
	get canUpdate(): boolean {
		return this.hasCapability("update", "binding.update");
	}

	/** Whether the current user may test (RFC §4). */
	get canTest(): boolean {
		return this.hasCapability("test", "binding.test");
	}

	/** binding.delete */
	async delete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${this.id}`,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.update */
	async update(
		body: components["schemas"]["WhitelistBindingWriteRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/whitelist/bindings/${this.id}`,
			body,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.test */
	async test(params?: { audience?: string }): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/whitelist/bindings/${this.id}/actions/test-notifications`,
			query: { audience: params?.audience },
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.entries.add */
	async entriesAdd(
		body: components["schemas"]["WhitelistDirectAddRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/whitelist/bindings/${this.id}/direct/entries`,
			body,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.entries.remove */
	async entriesRemove(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${this.data["binding_id"]}/direct/entries/${this.id}`,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}
}
