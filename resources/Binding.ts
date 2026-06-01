// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type { ClientContext } from "../client";

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

	/** binding.entries.list */
	async entriesList(
		bindingId: string | number,
		params?: { page?: number; perPage?: number },
	): Promise<components["schemas"]["WhitelistDirectEntryPage"]> {
		return this.ctx.transport.request<
			components["schemas"]["WhitelistDirectEntryPage"]
		>({
			method: "GET",
			path: `/v1/whitelist/bindings/${bindingId}/direct/entries`,
			query: { page: params?.page, per_page: params?.perPage },
		});
	}

	/** binding.delete */
	async delete(bindingId: string | number): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${bindingId}`,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.update */
	async update(
		bindingId: string | number,
		body: components["schemas"]["WhitelistBindingWriteRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/whitelist/bindings/${bindingId}`,
			body,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.test */
	async test(
		bindingId: string | number,
		params?: { audience?: string },
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/whitelist/bindings/${bindingId}/actions/test-notifications`,
			query: { audience: params?.audience },
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.entries.add */
	async entriesAdd(
		bindingId: string | number,
		body: components["schemas"]["WhitelistDirectAddRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/whitelist/bindings/${bindingId}/direct/entries`,
			body,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.entries.remove */
	async entriesRemove(bindingId: string | number): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${bindingId}/direct/entries/${this.id}`,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}
}
