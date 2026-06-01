// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { TopicSubscription } from "../runtime/realtime";
import type { components } from "../types";
import type { ClientContext } from "../client";
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
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/me`,
		});
		this.ctx.hydrate("Me", data);
		return this;
	}

	/** me.issue_ws_token */
	async issueWsToken(
		body: components["schemas"]["WsTokenRequest"],
	): Promise<components["schemas"]["WsTokenResponse"]> {
		return this.ctx.transport.request<components["schemas"]["WsTokenResponse"]>(
			{ method: "POST", path: `/v1/auth/ws-token`, body },
		);
	}

	/** builds.list */
	async buildsList(): Promise<Build[]> {
		const data = await this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/builds`,
		});
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Build", items) as Build[];
	}

	/** me.engagement */
	async engagement(): Promise<components["schemas"]["UserEngagement"]> {
		return this.ctx.transport.request<components["schemas"]["UserEngagement"]>({
			method: "GET",
			path: `/v1/community/projects/me/engagement`,
		});
	}

	/** me.account.change_email */
	async accountChangeEmail(
		body: components["schemas"]["EmailChangeRequest"],
	): Promise<components["schemas"]["EmailChangeResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["EmailChangeResult"]
		>({ method: "POST", path: `/v1/me/account/actions/change-email`, body });
	}

	/** me.account.delete */
	async accountDelete(): Promise<
		components["schemas"]["AccountDeletionResult"]
	> {
		return this.ctx.transport.request<
			components["schemas"]["AccountDeletionResult"]
		>({ method: "POST", path: `/v1/me/account/actions/delete` });
	}

	/** me.account.export */
	async accountExport(): Promise<components["schemas"]["AccountExport"]> {
		return this.ctx.transport.request<components["schemas"]["AccountExport"]>({
			method: "GET",
			path: `/v1/me/account/export`,
		});
	}

	/** me.avatar.remove */
	async avatarRemove(): Promise<components["schemas"]["UserProfile"]> {
		return this.ctx.transport.request<components["schemas"]["UserProfile"]>({
			method: "DELETE",
			path: `/v1/me/avatar`,
		});
	}

	/** me.avatar.upload */
	async avatarUpload(): Promise<components["schemas"]["UserProfile"]> {
		return this.ctx.transport.request<components["schemas"]["UserProfile"]>({
			method: "POST",
			path: `/v1/me/avatar`,
		});
	}

	/** me.avatar.set */
	async avatarSet(
		body: components["schemas"]["AvatarUrlRequest"],
	): Promise<components["schemas"]["UserProfile"]> {
		return this.ctx.transport.request<components["schemas"]["UserProfile"]>({
			method: "PUT",
			path: `/v1/me/avatar`,
			body,
		});
	}

	/** me.minecraft.unlink */
	async minecraftUnlink(
		accountId: string | number,
	): Promise<components["schemas"]["MinecraftUnlinkResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["MinecraftUnlinkResult"]
		>({ method: "DELETE", path: `/v1/me/minecraft/accounts/${accountId}` });
	}

	/** me.minecraft.link_code */
	async minecraftLinkCode(
		body: components["schemas"]["MinecraftLinkCodeRequest"],
	): Promise<components["schemas"]["MinecraftLinkCodeResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["MinecraftLinkCodeResponse"]
		>({ method: "POST", path: `/v1/me/minecraft/link-code`, body });
	}

	/** me.minecraft.complete_link */
	async minecraftCompleteLink(
		body: components["schemas"]["LinkCompletionRequest"],
	): Promise<components["schemas"]["LinkCompletionResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["LinkCompletionResponse"]
		>({ method: "POST", path: `/v1/me/minecraft/link/complete`, body });
	}

	/** me.minecraft.official_link_start */
	async minecraftOfficialLinkStart(): Promise<
		components["schemas"]["MinecraftOfficialLinkStart"]
	> {
		return this.ctx.transport.request<
			components["schemas"]["MinecraftOfficialLinkStart"]
		>({ method: "POST", path: `/v1/me/minecraft/official/start` });
	}

	/** me.minecraft.resolve */
	async minecraftResolve(
		body: components["schemas"]["MinecraftResolveRequest"],
	): Promise<components["schemas"]["MinecraftCandidateAccount"]> {
		return this.ctx.transport.request<
			components["schemas"]["MinecraftCandidateAccount"]
		>({ method: "POST", path: `/v1/me/minecraft/resolve`, body });
	}

	/** me.minecraft.state */
	async minecraftState(params?: {
		projectId?: string;
	}): Promise<components["schemas"]["MinecraftVerificationState"]> {
		return this.ctx.transport.request<
			components["schemas"]["MinecraftVerificationState"]
		>({
			method: "GET",
			path: `/v1/me/minecraft/state`,
			query: { project_id: params?.projectId },
		});
	}

	/** me.notifications.get */
	async notificationsGet(): Promise<
		components["schemas"]["NotificationPreferences"]
	> {
		return this.ctx.transport.request<
			components["schemas"]["NotificationPreferences"]
		>({ method: "GET", path: `/v1/me/notifications` });
	}

	/** me.notifications.update */
	async notificationsUpdate(
		body: components["schemas"]["NotificationPreferencesUpdate"],
	): Promise<components["schemas"]["NotificationPreferences"]> {
		return this.ctx.transport.request<
			components["schemas"]["NotificationPreferences"]
		>({ method: "PATCH", path: `/v1/me/notifications`, body });
	}

	/** me.oauth.list */
	async oauthList(): Promise<components["schemas"]["OAuthProvidersResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["OAuthProvidersResponse"]
		>({ method: "GET", path: `/v1/me/oauth/providers` });
	}

	/** me.oauth.link_start */
	async oauthLinkStart(
		provider: string,
	): Promise<components["schemas"]["OAuthLinkStartResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["OAuthLinkStartResponse"]
		>({ method: "POST", path: `/v1/me/oauth/${provider}/link/start` });
	}

	/** me.password.status */
	async passwordStatus(): Promise<components["schemas"]["PasswordStatus"]> {
		return this.ctx.transport.request<components["schemas"]["PasswordStatus"]>({
			method: "GET",
			path: `/v1/me/password`,
		});
	}

	/** me.password.set */
	async passwordSet(
		body: components["schemas"]["PasswordSetRequest"],
	): Promise<components["schemas"]["PasswordMutationResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["PasswordMutationResult"]
		>({ method: "PUT", path: `/v1/me/password`, body });
	}

	/** me.password.change */
	async passwordChange(
		body: components["schemas"]["PasswordChangeRequest"],
	): Promise<components["schemas"]["PasswordMutationResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["PasswordMutationResult"]
		>({ method: "POST", path: `/v1/me/password/actions/change`, body });
	}

	/** me.profile.update */
	async profileUpdate(
		body: components["schemas"]["ProfileUpdateRequest"],
	): Promise<components["schemas"]["UserProfile"]> {
		return this.ctx.transport.request<components["schemas"]["UserProfile"]>({
			method: "POST",
			path: `/v1/me/profile`,
			body,
		});
	}

	/** me.sessions.list */
	async sessionsList(): Promise<Session[]> {
		const data = await this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/me/sessions`,
		});
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Session", items) as Session[];
	}

	/** me.sessions.revoke_others */
	async sessionsRevokeOthers(): Promise<
		components["schemas"]["RevokeOtherSessionsResult"]
	> {
		return this.ctx.transport.request<
			components["schemas"]["RevokeOtherSessionsResult"]
		>({ method: "POST", path: `/v1/me/sessions/actions/revoke-others` });
	}

	/** me.stats */
	async stats(params?: {
		estimated?: boolean;
	}): Promise<components["schemas"]["MyPlayerStats"]> {
		return this.ctx.transport.request<components["schemas"]["MyPlayerStats"]>({
			method: "GET",
			path: `/v1/me/stats`,
			query: { estimated: params?.estimated },
		});
	}

	/** me.stats_unverified */
	async statsUnverified(): Promise<components["schemas"]["MyPlayerStats"]> {
		return this.ctx.transport.request<components["schemas"]["MyPlayerStats"]>({
			method: "GET",
			path: `/v1/me/stats/unverified`,
		});
	}

	/** me.totp.status */
	async totpStatus(): Promise<components["schemas"]["TotpStatus"]> {
		return this.ctx.transport.request<components["schemas"]["TotpStatus"]>({
			method: "GET",
			path: `/v1/me/totp`,
		});
	}

	/** me.totp.begin */
	async totpBegin(): Promise<components["schemas"]["TotpBeginResult"]> {
		return this.ctx.transport.request<components["schemas"]["TotpBeginResult"]>(
			{ method: "POST", path: `/v1/me/totp/actions/begin` },
		);
	}

	/** me.totp.confirm */
	async totpConfirm(
		body: components["schemas"]["TotpCodeRequest"],
	): Promise<components["schemas"]["TotpStatus"]> {
		return this.ctx.transport.request<components["schemas"]["TotpStatus"]>({
			method: "POST",
			path: `/v1/me/totp/actions/confirm`,
			body,
		});
	}

	/** me.totp.disable */
	async totpDisable(
		body: components["schemas"]["TotpCodeRequest"],
	): Promise<components["schemas"]["TotpStatus"]> {
		return this.ctx.transport.request<components["schemas"]["TotpStatus"]>({
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
	}): Promise<Application[]> {
		const data = await this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/me/whitelist/applications`,
			query: {
				status: params?.status,
				page: params?.page,
				per_page: params?.perPage,
			},
		});
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Application", items) as Application[];
	}

	/** me.servers.list */
	async serversList(params?: {
		page?: number;
		perPage?: number;
	}): Promise<Server[]> {
		const data = await this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/servers/mine`,
			query: { page: params?.page, per_page: params?.perPage },
		});
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Server", items) as Server[];
	}

	/** me.servers.issues */
	async serversIssues(params?: {
		page?: number;
		perPage?: number;
		includeOk?: boolean;
	}): Promise<components["schemas"]["MyServerIssuesPage"]> {
		return this.ctx.transport.request<
			components["schemas"]["MyServerIssuesPage"]
		>({
			method: "GET",
			path: `/v1/servers/mine/issues`,
			query: {
				page: params?.page,
				per_page: params?.perPage,
				include_ok: params?.includeOk,
			},
		});
	}

	/** me.servers.create_planned */
	async serversCreatePlanned(
		body: components["schemas"]["CreatePlannedServerRequest"],
	): Promise<Server> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/mine/planned`,
			body,
		});
		return this.ctx.hydrate("Server", data) as Server;
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
}
