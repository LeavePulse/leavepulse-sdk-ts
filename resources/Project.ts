// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { TopicSubscription } from "../runtime/realtime";
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type { Server } from "./Server";

type Data = components["schemas"]["ProjectDetail"] & {
	policy_id?: string | number;
};

export class Project extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Project and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/projects/${this.id}`,
		});
		this.ctx.hydrate("Project", data, "project");
		return this;
	}

	/** Whether the current user may heart (RFC §4). */
	get canHeart(): boolean {
		return this.hasCapability("heart", "project.heart");
	}

	/** Whether the current user may thumb (RFC §4). */
	get canThumb(): boolean {
		return this.hasCapability("thumb", "project.thumb");
	}

	/** Whether the current user may manage_bridge (RFC §4). */
	get canManageBridge(): boolean {
		return this.hasCapability("manage_bridge", "project.manage_bridge");
	}

	/** Whether the current user may change_slug (RFC §4). */
	get canChangeSlug(): boolean {
		return this.hasCapability("change_slug", "project.change_slug");
	}

	/** Whether the current user may rename (RFC §4). */
	get canRename(): boolean {
		return this.hasCapability("rename", "project.rename");
	}

	/** Whether the current user may set_online_strategy (RFC §4). */
	get canSetOnlineStrategy(): boolean {
		return this.hasCapability(
			"set_online_strategy",
			"project.set_online_strategy",
		);
	}

	/** Whether the current user may set_rollout_mode (RFC §4). */
	get canSetRolloutMode(): boolean {
		return this.hasCapability("set_rollout_mode", "project.set_rollout_mode");
	}

	/** Related Server from cache (no network). */
	get servers(): Server[] {
		return this.ctx.hydrateMany(
			"Server",
			(this.data as Record<string, unknown>).servers,
		) as Server[];
	}
	/** Fetch related Server from the server. */
	async getServers(): Promise<Server[]> {
		await this.refresh();
		return this.servers;
	}

	/** project.comments.create */
	async commentsCreate(
		body: components["schemas"]["CommentCreateRequest"],
		params?: { targetLocale?: string },
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${this.id}/comments`,
			body,
			query: { target_locale: params?.targetLocale },
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.heart */
	async heart(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${this.id}/heart`,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.thumb */
	async thumb(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${this.id}/thumb`,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.bridge.update */
	async bridgeUpdate(
		body: components["schemas"]["BridgeSettingsUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/discord/servers/${this.id}/bridge`,
			body,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.bridge.import */
	async bridgeImport(
		body: components["schemas"]["ImportPullRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/discord/servers/${this.id}/import-pull`,
			body,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.change_slug */
	async changeSlug(
		body: components["schemas"]["WorkspaceChangeSlugRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/projects/${this.id}/actions/change-slug`,
			body,
		});
		this.ctx.hydrate("Project", data, "workspace");
		return this;
	}

	/** project.rename */
	async rename(
		body: components["schemas"]["WorkspaceRenameRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/projects/${this.id}/actions/rename`,
			body,
		});
		this.ctx.hydrate("Project", data, "workspace");
		return this;
	}

	/** project.set_online_strategy */
	async setOnlineStrategy(
		body: components["schemas"]["WorkspaceSetOnlineStrategyRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/projects/${this.id}/actions/set-online-strategy`,
			body,
		});
		this.ctx.hydrate("Project", data, "workspace");
		return this;
	}

	/** project.set_rollout_mode */
	async setRolloutMode(
		body: components["schemas"]["WorkspaceSetRolloutModeRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/projects/${this.id}/actions/set-rollout-mode`,
			body,
		});
		this.ctx.hydrate("Project", data, "workspace");
		return this;
	}

	/** project.policies.create */
	async policiesCreate(
		body: components["schemas"]["WhitelistBindingWriteRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/projects/${this.id}/whitelist/policies`,
			body,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.policies.delete */
	async policiesDelete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/projects/${this.id}/whitelist/policies/${this.data["policy_id"]}`,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.policies.update */
	async policiesUpdate(
		body: components["schemas"]["WhitelistBindingWriteRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/projects/${this.id}/whitelist/policies/${this.data["policy_id"]}`,
			body,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.policies.test */
	async policiesTest(params?: { audience?: string }): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/projects/${this.id}/whitelist/policies/${this.data["policy_id"]}/actions/test-notifications`,
			query: { audience: params?.audience },
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** Subscribe to `projects.live.{project_id}` (public realtime). */
	subscribe(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, `projects.live.${this.id}`);
	}
}
