// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { TopicSubscription } from "../runtime/realtime";
import { fetchCachedOrThrow } from "../runtime/etag-store";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";
import type { Binding } from "./Binding";
import type { Comment } from "./Comment";
import type { Form } from "./Form";
import type { Server } from "./Server";

type Data = components["schemas"]["ProjectDetail"]["project"] &
	Omit<components["schemas"]["ProjectDetail"], "project"> & {
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
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/projects/${this.id}` },
		);
		this.ctx.hydrate("Project", data, "project");
		return this;
	}

	/** Load this Project's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
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

	/** project.comments.list */
	async commentsList(params?: {
		page?: number;
		limit?: number;
		targetLocale?: string;
	}): Promise<Comment[]> {
		const data = await fetchCachedOrThrow<unknown>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/community/projects/${this.id}/comments`,
				query: {
					page: params?.page,
					limit: params?.limit,
					target_locale: params?.targetLocale,
				},
			},
		);
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Comment", items) as Comment[];
	}

	/** project.comments.liked */
	async commentsLiked(): Promise<models.LikedCommentIds> {
		return fetchCachedOrThrow<models.LikedCommentIds>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/community/projects/${this.id}/comments/liked`,
			},
		);
	}

	/** project.comments.mine */
	async commentsMine(params?: {
		targetLocale?: string;
	}): Promise<models.MyComment> {
		return fetchCachedOrThrow<models.MyComment>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/community/projects/${this.id}/comments/me`,
				query: { target_locale: params?.targetLocale },
			},
		);
	}

	/** project.engagement */
	async engagement(): Promise<models.ProjectEngagement> {
		return fetchCachedOrThrow<models.ProjectEngagement>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/community/projects/${this.id}/engagement` },
		);
	}

	/** project.engagement.status */
	async engagementStatus(): Promise<models.ProjectEngagementStatus> {
		return fetchCachedOrThrow<models.ProjectEngagementStatus>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/community/projects/${this.id}/engagement/status`,
			},
		);
	}

	/** project.votes.list */
	async votesList(params?: { limit?: number }): Promise<models.RecentVotes> {
		return fetchCachedOrThrow<models.RecentVotes>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/community/projects/${this.id}/votes`,
				query: { limit: params?.limit },
			},
		);
	}

	/** me.projects.get */
	async meProjectsGet(): Promise<models.WorkspaceDetail> {
		return fetchCachedOrThrow<models.WorkspaceDetail>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/projects/${this.id}` },
		);
	}

	/** project.history.list */
	async historyList(params?: {
		period?: string;
	}): Promise<models.HistoryResponse> {
		return fetchCachedOrThrow<models.HistoryResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/monitoring/projects/${this.id}/history`,
				query: { period: params?.period },
			},
		);
	}

	/** project.live */
	async live(): Promise<models.ProjectLiveStatus> {
		return fetchCachedOrThrow<models.ProjectLiveStatus>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/monitoring/projects/${this.id}/live` },
		);
	}

	/** project.servers.create */
	async serversCreate(
		body: models.CreateProjectServerRequest,
	): Promise<Server> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/projects/${this.id}/servers`,
			body,
		});
		return this.ctx.hydrate("Server", data) as Server;
	}

	/** project.stats */
	async stats(params?: { period?: string }): Promise<models.ProjectStats> {
		return fetchCachedOrThrow<models.ProjectStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/projects/${this.id}/stats`,
				query: { period: params?.period },
			},
		);
	}

	/** project.team_sync.targets */
	async teamSyncTargets(params?: {
		roleId?: Snowflake;
	}): Promise<models.DiscordRoleTargets> {
		return fetchCachedOrThrow<models.DiscordRoleTargets>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/projects/${this.id}/team-sync/discord-targets`,
				query: { role_id: params?.roleId },
			},
		);
	}

	/** project.whitelist.config */
	async whitelistConfig(): Promise<models.ProjectWhitelistConfigItem[]> {
		return fetchCachedOrThrow<models.ProjectWhitelistConfigItem[]>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/projects/${this.id}/whitelist/config` },
		);
	}

	/** project.whitelist.forms */
	async whitelistForms(): Promise<Form[]> {
		const data = await fetchCachedOrThrow<unknown>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/projects/${this.id}/whitelist/forms` },
		);
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Form", items) as Form[];
	}

	/** project.policies */
	async policies(): Promise<Binding[]> {
		const data = await fetchCachedOrThrow<unknown>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/projects/${this.id}/whitelist/policies` },
		);
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Binding", items) as Binding[];
	}

	/** project.comments.create */
	async commentsCreate(
		body: models.CommentCreateRequest,
		params?: { targetLocale?: string },
	): Promise<Comment> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${this.id}/comments`,
			body,
			query: { target_locale: params?.targetLocale },
		});
		return this.ctx.hydrate("Comment", data) as Comment;
	}

	/** project.heart */
	async heart(): Promise<models.ProjectHeartResult> {
		return this.ctx.transport.request<models.ProjectHeartResult>({
			method: "POST",
			path: `/v1/community/projects/${this.id}/heart`,
		});
	}

	/** project.thumb */
	async thumb(): Promise<models.ProjectThumbResult> {
		return this.ctx.transport.request<models.ProjectThumbResult>({
			method: "POST",
			path: `/v1/community/projects/${this.id}/thumb`,
		});
	}

	/** project.change_slug */
	async changeSlug(body: models.WorkspaceChangeSlugRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/projects/${this.id}/actions/change-slug`,
			body,
		});
		this.ctx.hydrate("Project", data, "workspace");
		return this;
	}

	/** project.rename */
	async rename(body: models.WorkspaceRenameRequest): Promise<this> {
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
		body: models.WorkspaceSetOnlineStrategyRequest,
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
		body: models.WorkspaceSetRolloutModeRequest,
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
		body: models.WhitelistBindingWriteRequest,
	): Promise<Binding> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/projects/${this.id}/whitelist/policies`,
			body,
		});
		return this.ctx.hydrate("Binding", data) as Binding;
	}

	/** project.policies.delete */
	async policiesDelete(policyId: Snowflake): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/projects/${this.id}/whitelist/policies/${policyId}`,
		});
		this.ctx.hydrate("Project", data);
		return this;
	}

	/** project.policies.update */
	async policiesUpdate(
		policyId: Snowflake,
		body: models.WhitelistBindingWriteRequest,
	): Promise<Binding> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/projects/${this.id}/whitelist/policies/${policyId}`,
			body,
		});
		return this.ctx.hydrate("Binding", data) as Binding;
	}

	/** project.policies.test */
	async policiesTest(
		policyId: Snowflake,
		params?: { audience?: string },
	): Promise<models.WhitelistBindingTestResult> {
		return this.ctx.transport.request<models.WhitelistBindingTestResult>({
			method: "POST",
			path: `/v1/projects/${this.id}/whitelist/policies/${policyId}/actions/test-notifications`,
			query: { audience: params?.audience },
		});
	}

	/** Subscribe to `projects.live.{project_id}` (public realtime). */
	subscribe(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, `projects.live.${this.id}`);
	}
}
