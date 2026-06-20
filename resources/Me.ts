// Generated from the LeavePulse contract. Do not edit.
import { Resource, extractId } from "../runtime/resource";
import { TopicSubscription } from "../runtime/realtime";
import { fetchCachedOrThrow } from "../runtime/etag-store";
import { Page, type PageData, pageDataFrom } from "../runtime/page";
import type { components } from "../types";
import type * as models from "../models";
import type { LeavePulseFile } from "../runtime/transport";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";
import type { Application } from "./Application";
import type { Build } from "./Build";
import type { Server } from "./Server";
import type { Session } from "./Session";

type Data = components["schemas"]["MeResponse"];

export class Me extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Me and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me` },
		);
		let hydrated = data as Record<string, unknown>;
		const id = extractId(hydrated);
		return this.ctx.cache.upsertAlias(
			"Me",
			this.id,
			id,
			hydrated,
			() => this,
		) as this;
	}

	/** Load this Me's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
	}

	/** me.issue_ws_token */
	async issueWsToken(
		body: models.WsTokenRequest,
	): Promise<models.WsTokenResponse> {
		return this.ctx.transport.request<models.WsTokenResponse>({
			method: "POST",
			path: `/v1/auth/ws-token`,
			body,
		});
	}

	/** builds.list */
	async buildsList(): Promise<Build[]> {
		const data = await fetchCachedOrThrow<unknown>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/builds` },
		);
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["items"] ?? []);
		return this.ctx.hydrateMany("Build", items) as Build[];
	}

	/** me.engagement */
	async engagement(): Promise<models.UserEngagement> {
		return fetchCachedOrThrow<models.UserEngagement>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/community/projects/me/engagement` },
		);
	}

	/** me.account.change_email */
	async accountChangeEmail(
		body: models.EmailChangeRequest,
	): Promise<models.EmailChangeResult> {
		return this.ctx.transport.request<models.EmailChangeResult>({
			method: "POST",
			path: `/v1/me/account/actions/change-email`,
			body,
		});
	}

	/** me.account.delete */
	async accountDelete(): Promise<models.AccountDeletionResult> {
		return this.ctx.transport.request<models.AccountDeletionResult>({
			method: "POST",
			path: `/v1/me/account/actions/delete`,
		});
	}

	/** me.account.export */
	async accountExport(): Promise<models.AccountExport> {
		return fetchCachedOrThrow<models.AccountExport>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/account/export` },
		);
	}

	/** me.avatar.remove */
	async avatarRemove(): Promise<models.UserProfile> {
		return this.ctx.transport.request<models.UserProfile>({
			method: "DELETE",
			path: `/v1/me/avatar`,
		});
	}

	/** me.avatar.upload */
	async avatarUpload(file: LeavePulseFile): Promise<models.UserProfile> {
		return this.ctx.transport.request<models.UserProfile>({
			method: "POST",
			path: `/v1/me/avatar`,
			multipart: { fileField: "file", file, fields: {} },
		});
	}

	/** me.avatar.set */
	async avatarSet(body: models.AvatarUrlRequest): Promise<models.UserProfile> {
		return this.ctx.transport.request<models.UserProfile>({
			method: "PUT",
			path: `/v1/me/avatar`,
			body,
		});
	}

	/** me.minecraft.unlink */
	async minecraftUnlink(
		accountId: Snowflake,
	): Promise<models.MinecraftUnlinkResult> {
		return this.ctx.transport.request<models.MinecraftUnlinkResult>({
			method: "DELETE",
			path: `/v1/me/minecraft/accounts/${accountId}`,
		});
	}

	/** me.minecraft.link_code */
	async minecraftLinkCode(
		body: models.MinecraftLinkCodeRequest,
	): Promise<models.MinecraftLinkCodeResponse> {
		return this.ctx.transport.request<models.MinecraftLinkCodeResponse>({
			method: "POST",
			path: `/v1/me/minecraft/link-code`,
			body,
		});
	}

	/** me.minecraft.complete_link */
	async minecraftCompleteLink(
		body: models.LinkCompletionRequest,
	): Promise<models.LinkCompletionResponse> {
		return this.ctx.transport.request<models.LinkCompletionResponse>({
			method: "POST",
			path: `/v1/me/minecraft/link/complete`,
			body,
		});
	}

	/** me.minecraft.official_link_start */
	async minecraftOfficialLinkStart(): Promise<models.MinecraftOfficialLinkStart> {
		return this.ctx.transport.request<models.MinecraftOfficialLinkStart>({
			method: "POST",
			path: `/v1/me/minecraft/official/start`,
		});
	}

	/** me.minecraft.resolve */
	async minecraftResolve(
		body: models.MinecraftResolveRequest,
	): Promise<models.MinecraftCandidateAccount> {
		return this.ctx.transport.request<models.MinecraftCandidateAccount>({
			method: "POST",
			path: `/v1/me/minecraft/resolve`,
			body,
		});
	}

	/** me.minecraft.state */
	async minecraftState(params?: {
		projectId?: Snowflake;
	}): Promise<models.MinecraftVerificationState> {
		return fetchCachedOrThrow<models.MinecraftVerificationState>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/me/minecraft/state`,
				query: { project_id: params?.projectId },
			},
		);
	}

	/** me.notifications.get */
	async notificationsGet(): Promise<models.NotificationPreferences> {
		return fetchCachedOrThrow<models.NotificationPreferences>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/notifications` },
		);
	}

	/** me.notifications.update */
	async notificationsUpdate(
		body: models.NotificationPreferencesUpdate,
	): Promise<models.NotificationPreferences> {
		return this.ctx.transport.request<models.NotificationPreferences>({
			method: "PATCH",
			path: `/v1/me/notifications`,
			body,
		});
	}

	/** me.notifications.feed.list */
	async notificationsFeedList(params?: {
		page?: number;
		perPage?: number;
		unreadOnly?: boolean;
	}): Promise<Page<models.Notification>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<models.Notification>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/me/notifications/feed`,
					query: {
						page: page,
						per_page: perPage,
						unread_only: params?.unreadOnly,
					},
				},
			);
			return pageDataFrom(
				data,
				(raw) => raw as models.Notification[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.perPage ?? 20),
			fetchPage,
		);
	}

	/** me.notifications.feed.mark_all_read */
	async notificationsFeedMarkAllRead(): Promise<models.MarkAllReadResult> {
		return this.ctx.transport.request<models.MarkAllReadResult>({
			method: "POST",
			path: `/v1/me/notifications/feed/read-all`,
		});
	}

	/** me.notifications.feed.unread_count */
	async notificationsFeedUnreadCount(): Promise<models.UnreadCount> {
		return fetchCachedOrThrow<models.UnreadCount>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/notifications/feed/unread-count` },
		);
	}

	/** me.notifications.feed.mark_read */
	async notificationsFeedMarkRead(
		notificationId: string,
	): Promise<models.Notification> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/me/notifications/feed/${notificationId}/read`,
		});
		return data as models.Notification;
	}

	/** me.oauth.list */
	async oauthList(): Promise<models.OAuthProvidersResponse> {
		return fetchCachedOrThrow<models.OAuthProvidersResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/oauth/providers` },
		);
	}

	/** me.oauth.unlink */
	async oauthUnlink(provider: string): Promise<models.OAuthUnlinkResult> {
		return this.ctx.transport.request<models.OAuthUnlinkResult>({
			method: "DELETE",
			path: `/v1/me/oauth/${provider}`,
		});
	}

	/** me.oauth.link_start */
	async oauthLinkStart(
		provider: string,
	): Promise<models.OAuthLinkStartResponse> {
		return this.ctx.transport.request<models.OAuthLinkStartResponse>({
			method: "POST",
			path: `/v1/me/oauth/${provider}/link/start`,
		});
	}

	/** me.password.status */
	async passwordStatus(): Promise<models.PasswordStatus> {
		return fetchCachedOrThrow<models.PasswordStatus>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/password` },
		);
	}

	/** me.password.set */
	async passwordSet(
		body: models.PasswordSetRequest,
	): Promise<models.PasswordMutationResult> {
		return this.ctx.transport.request<models.PasswordMutationResult>({
			method: "PUT",
			path: `/v1/me/password`,
			body,
		});
	}

	/** me.password.change */
	async passwordChange(
		body: models.PasswordChangeRequest,
	): Promise<models.PasswordMutationResult> {
		return this.ctx.transport.request<models.PasswordMutationResult>({
			method: "POST",
			path: `/v1/me/password/actions/change`,
			body,
		});
	}

	/** me.profile.update */
	async profileUpdate(
		body: models.ProfileUpdateRequest,
	): Promise<models.UserProfile> {
		return this.ctx.transport.request<models.UserProfile>({
			method: "POST",
			path: `/v1/me/profile`,
			body,
		});
	}

	/** me.sessions.list */
	async sessionsList(): Promise<Session[]> {
		const data = await fetchCachedOrThrow<unknown>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/sessions` },
		);
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["sessions"] ?? []);
		return this.ctx.hydrateMany("Session", items) as Session[];
	}

	/** me.sessions.revoke_others */
	async sessionsRevokeOthers(): Promise<models.RevokeOtherSessionsResult> {
		return this.ctx.transport.request<models.RevokeOtherSessionsResult>({
			method: "POST",
			path: `/v1/me/sessions/actions/revoke-others`,
		});
	}

	/** me.stats */
	async stats(params?: { estimated?: boolean }): Promise<models.MyPlayerStats> {
		return fetchCachedOrThrow<models.MyPlayerStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/me/stats`,
				query: { estimated: params?.estimated },
			},
		);
	}

	/** me.stats_unverified */
	async statsUnverified(): Promise<models.MyPlayerStats> {
		return fetchCachedOrThrow<models.MyPlayerStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/stats/unverified` },
		);
	}

	/** me.totp.status */
	async totpStatus(): Promise<models.TotpStatus> {
		return fetchCachedOrThrow<models.TotpStatus>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/totp` },
		);
	}

	/** me.totp.begin */
	async totpBegin(): Promise<models.TotpBeginResult> {
		return this.ctx.transport.request<models.TotpBeginResult>({
			method: "POST",
			path: `/v1/me/totp/actions/begin`,
		});
	}

	/** me.totp.confirm */
	async totpConfirm(body: models.TotpCodeRequest): Promise<models.TotpStatus> {
		return this.ctx.transport.request<models.TotpStatus>({
			method: "POST",
			path: `/v1/me/totp/actions/confirm`,
			body,
		});
	}

	/** me.totp.disable */
	async totpDisable(body: models.TotpCodeRequest): Promise<models.TotpStatus> {
		return this.ctx.transport.request<models.TotpStatus>({
			method: "POST",
			path: `/v1/me/totp/actions/disable`,
			body,
		});
	}

	/** me.whitelist.applications */
	async whitelistApplications(params?: {
		status?: string;
		page?: number;
		perPage?: number;
	}): Promise<Page<Application>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<Application>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/me/whitelist/applications`,
					query: { status: params?.status, page: page, per_page: perPage },
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("Application", raw) as Application[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.perPage ?? 20),
			fetchPage,
		);
	}

	/** me.servers.list */
	async serversList(params?: {
		page?: number;
		perPage?: number;
	}): Promise<Page<Server>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<Server>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/servers/mine`,
					query: { page: page, per_page: perPage },
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("Server", raw) as Server[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.perPage ?? 20),
			fetchPage,
		);
	}

	/** me.servers.issues */
	async serversIssues(params?: {
		page?: number;
		perPage?: number;
		includeOk?: boolean;
	}): Promise<models.MyServerIssuesPage> {
		return fetchCachedOrThrow<models.MyServerIssuesPage>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/mine/issues`,
				query: {
					page: params?.page,
					per_page: params?.perPage,
					include_ok: params?.includeOk,
				},
			},
		);
	}

	/** Subscribe to `user.server_issues` (private realtime). */
	onServerIssues(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.server_issues");
	}

	/** Subscribe to `user.tickets` (private realtime). */
	onTickets(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.tickets");
	}

	/** Subscribe to `user.billing` (private realtime). */
	onBilling(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.billing");
	}

	/** Subscribe to `user.whitelist` (private realtime). */
	onWhitelist(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.whitelist");
	}

	/** Subscribe to `user.notifications` (private realtime). */
	onNotifications(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "user.notifications");
	}
}
