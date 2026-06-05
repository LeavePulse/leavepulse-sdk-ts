// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { fetchCachedOrThrow } from "../runtime/etag-store";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["WhitelistBindingDetail"] & {
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
		bindingId: Snowflake,
		params?: { page?: number; perPage?: number },
	): Promise<models.WhitelistDirectEntryPage> {
		return fetchCachedOrThrow<models.WhitelistDirectEntryPage>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/whitelist/bindings/${bindingId}/direct/entries`,
				query: { page: params?.page, per_page: params?.perPage },
			},
		);
	}

	/** binding.delete */
	async delete(bindingId: Snowflake): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${bindingId}`,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.update */
	async update(
		bindingId: Snowflake,
		body: models.WhitelistBindingWriteRequest,
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
		bindingId: Snowflake,
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
		bindingId: Snowflake,
		body: models.WhitelistDirectAddRequest,
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
	async entriesRemove(bindingId: Snowflake): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${bindingId}/direct/entries/${this.id}`,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}
}
