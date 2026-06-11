// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { fetchCachedOrThrow } from "../runtime/etag-store";
import { Page, type PageData, pageDataFrom } from "../runtime/page";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["WhitelistBindingDetail"] & {
	entry_id?: string | number;
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
	async entriesList(params?: {
		page?: number;
		perPage?: number;
	}): Promise<models.WhitelistDirectEntryPage> {
		return fetchCachedOrThrow<models.WhitelistDirectEntryPage>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/whitelist/bindings/${this.id}/direct/entries`,
				query: { page: params?.page, per_page: params?.perPage },
			},
		);
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
	async update(body: models.WhitelistBindingWriteRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/whitelist/bindings/${this.id}`,
			body,
		});
		this.ctx.hydrate("Binding", data);
		return this;
	}

	/** binding.test */
	async test(params?: {
		audience?: string;
	}): Promise<models.WhitelistBindingTestResult> {
		return this.ctx.transport.request<models.WhitelistBindingTestResult>({
			method: "POST",
			path: `/v1/whitelist/bindings/${this.id}/actions/test-notifications`,
			query: { audience: params?.audience },
		});
	}

	/** binding.entries.add */
	async entriesAdd(
		body: models.WhitelistDirectAddRequest,
	): Promise<models.WhitelistDirectEntry> {
		return this.ctx.transport.request<models.WhitelistDirectEntry>({
			method: "POST",
			path: `/v1/whitelist/bindings/${this.id}/direct/entries`,
			body,
		});
	}

	/** binding.entries.remove */
	async entriesRemove(
		entryId: Snowflake,
	): Promise<models.WhitelistDirectRemoval> {
		return this.ctx.transport.request<models.WhitelistDirectRemoval>({
			method: "DELETE",
			path: `/v1/whitelist/bindings/${this.id}/direct/entries/${entryId}`,
		});
	}
}
