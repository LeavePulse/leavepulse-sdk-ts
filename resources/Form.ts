// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["WhitelistFormDetail"];

export class Form extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Form and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/whitelist/forms/${this.id}`,
		});
		this.ctx.hydrate("Form", data);
		return this;
	}

	/** Load this Form's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
	}

	/** Whether the current user may delete (RFC §4). */
	get canDelete(): boolean {
		return this.hasCapability("delete", "form.delete");
	}

	/** Whether the current user may update (RFC §4). */
	get canUpdate(): boolean {
		return this.hasCapability("update", "form.update");
	}

	/** form.delete */
	async delete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/whitelist/forms/${this.id}`,
		});
		this.ctx.hydrate("Form", data);
		return this;
	}

	/** form.update */
	async update(body: models.WhitelistFormUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/whitelist/forms/${this.id}`,
			body,
		});
		this.ctx.hydrate("Form", data);
		return this;
	}

	/** form.set_import_mapping */
	async setImportMapping(
		body: models.WhitelistFormImportMappingRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/whitelist/forms/${this.id}/import-mapping`,
			body,
		});
		this.ctx.hydrate("Form", data);
		return this;
	}
}
