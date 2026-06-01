// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";

type Data = components["schemas"]["Build"] & { user_id?: string | number };

export class Build extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Build and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/builds/${this.id}`,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** Whether the current user may delete (RFC §4). */
	get canDelete(): boolean {
		return this.hasCapability("delete", "build.delete");
	}

	/** Whether the current user may update (RFC §4). */
	get canUpdate(): boolean {
		return this.hasCapability("update", "build.update");
	}

	/** Whether the current user may add_collaborator (RFC §4). */
	get canAddCollaborator(): boolean {
		return this.hasCapability("add_collaborator", "build.add_collaborator");
	}

	/** Whether the current user may remove_collaborator (RFC §4). */
	get canRemoveCollaborator(): boolean {
		return this.hasCapability(
			"remove_collaborator",
			"build.remove_collaborator",
		);
	}

	/** Whether the current user may confirm_config (RFC §4). */
	get canConfirmConfig(): boolean {
		return this.hasCapability("confirm_config", "build.confirm_config");
	}

	/** Whether the current user may upload_config (RFC §4). */
	get canUploadConfig(): boolean {
		return this.hasCapability("upload_config", "build.upload_config");
	}

	/** Whether the current user may unshare (RFC §4). */
	get canUnshare(): boolean {
		return this.hasCapability("unshare", "build.unshare");
	}

	/** Whether the current user may share (RFC §4). */
	get canShare(): boolean {
		return this.hasCapability("share", "build.share");
	}

	/** build.collaborators.list */
	async collaboratorsList(): Promise<models.CollaboratorList> {
		return this.ctx.transport.request<models.CollaboratorList>({
			method: "GET",
			path: `/v1/builds/${this.id}/collaborators`,
		});
	}

	/** build.config.url */
	async configUrl(): Promise<models.ConfigBlobRef> {
		return this.ctx.transport.request<models.ConfigBlobRef>({
			method: "GET",
			path: `/v1/builds/${this.id}/config`,
		});
	}

	/** build.delete */
	async delete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/builds/${this.id}`,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.update */
	async update(body: models.BuildUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/builds/${this.id}`,
			body,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.collaborators.add */
	async collaboratorsAdd(body: models.CollaboratorAddRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds/${this.id}/collaborators`,
			body,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.collaborators.remove */
	async collaboratorsRemove(userId: string): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/builds/${this.id}/collaborators/${userId}`,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.config.confirm */
	async configConfirm(body: models.ConfigBlobConfirmRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds/${this.id}/config/confirm`,
			body,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.config.upload */
	async configUpload(body: models.ConfigBlobUploadRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds/${this.id}/config/upload`,
			body,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.unshare */
	async unshare(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/builds/${this.id}/share`,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}

	/** build.share */
	async share(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds/${this.id}/share`,
		});
		this.ctx.hydrate("Build", data);
		return this;
	}
}
