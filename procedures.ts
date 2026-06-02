// Generated from the LeavePulse contract. Do not edit.
import type { ClientContext } from "./client";
import type * as models from "./models";
import type { Snowflake } from "./runtime/snowflake";
import type { Binding } from "./resources/Binding";
import type { Build } from "./resources/Build";
import type { Form } from "./resources/Form";
import type { Order } from "./resources/Order";
import type { Product } from "./resources/Product";
import type { Server } from "./resources/Server";
import type { Subscription } from "./resources/Subscription";
import type { Ticket } from "./resources/Ticket";
import type { User } from "./resources/User";

/** admin.discovery procedures. */
export class AdminDiscoveryNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.discovery.candidates */
	async candidates(params?: {
		page?: number;
		limit?: number;
		status?: string;
		search?: string;
		source?: string;
		edition?: string;
		region?: string;
		minSources?: number;
		minMcOnline?: number;
		minDiscordMembers?: number;
		sort?: string;
	}): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/admin/discovery/candidates`,
			query: {
				page: params?.page,
				limit: params?.limit,
				status: params?.status,
				search: params?.search,
				source: params?.source,
				edition: params?.edition,
				region: params?.region,
				min_sources: params?.minSources,
				min_mc_online: params?.minMcOnline,
				min_discord_members: params?.minDiscordMembers,
				sort: params?.sort,
			},
		});
	}

	/** admin.discovery.edit */
	async edit(
		candidateId: Snowflake,
		body: models.DiscoveryCandidateEditRequest,
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "PATCH",
			path: `/v1/admin/discovery/candidates/${candidateId}`,
			body,
		});
	}

	/** admin.discovery.approve */
	async approve(
		candidateId: Snowflake,
		params?: { showInPublic?: boolean; serverId?: Snowflake },
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "POST",
			path: `/v1/admin/discovery/candidates/${candidateId}/actions/approve`,
			query: {
				show_in_public: params?.showInPublic,
				server_id: params?.serverId,
			},
		});
	}

	/** admin.discovery.ignore */
	async ignore(
		candidateId: Snowflake,
		params?: { reason?: string },
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "POST",
			path: `/v1/admin/discovery/candidates/${candidateId}/actions/ignore`,
			query: { reason: params?.reason },
		});
	}

	/** admin.discovery.observations */
	async observations(
		candidateId: Snowflake,
		params?: { limit?: number },
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/admin/discovery/candidates/${candidateId}/observations`,
			query: { limit: params?.limit },
		});
	}

	/** admin.discovery.preview */
	async preview(candidateId: Snowflake): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/admin/discovery/candidates/${candidateId}/preview`,
		});
	}

	/** admin.discovery.sources */
	async sources(): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/admin/discovery/sources`,
		});
	}
}

/** admin.overrides procedures. */
export class AdminOverridesNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.overrides.list */
	async list(
		serverId: Snowflake,
		params?: { start?: string; end?: string },
	): Promise<models.StatusOverrideItem> {
		return this.ctx.transport.request<models.StatusOverrideItem>({
			method: "GET",
			path: `/v1/admin/servers/${serverId}/status-overrides`,
			query: { start: params?.start, end: params?.end },
		});
	}

	/** admin.overrides.create */
	async create(
		serverId: Snowflake,
		body: models.CreateStatusOverrideRequest,
	): Promise<models.StatusOverrideItem> {
		return this.ctx.transport.request<models.StatusOverrideItem>({
			method: "POST",
			path: `/v1/admin/servers/${serverId}/status-overrides`,
			body,
		});
	}

	/** admin.overrides.delete */
	async delete(
		serverId: Snowflake,
		overrideId: string,
	): Promise<models.DeleteStatusOverrideResponse> {
		return this.ctx.transport.request<models.DeleteStatusOverrideResponse>({
			method: "DELETE",
			path: `/v1/admin/servers/${serverId}/status-overrides/${overrideId}`,
		});
	}
}

/** admin.players procedures. */
export class AdminPlayersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.players.search */
	async search(params?: {
		q?: string;
		page?: number;
		perPage?: number;
	}): Promise<models.PlayerSearchPage> {
		return this.ctx.transport.request<models.PlayerSearchPage>({
			method: "GET",
			path: `/v1/admin/players`,
			query: { q: params?.q, page: params?.page, per_page: params?.perPage },
		});
	}
}

/** admin.projects procedures. */
export class AdminProjectsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.projects.list */
	async list(params?: {
		q?: string;
		page?: number;
		perPage?: number;
	}): Promise<models.AdminProjectListResponse> {
		return this.ctx.transport.request<models.AdminProjectListResponse>({
			method: "GET",
			path: `/v1/admin/projects`,
			query: { q: params?.q, page: params?.page, per_page: params?.perPage },
		});
	}

	/** admin.projects.delete */
	async delete(
		projectId: Snowflake,
	): Promise<models.AdminProjectDeleteResponse> {
		return this.ctx.transport.request<models.AdminProjectDeleteResponse>({
			method: "DELETE",
			path: `/v1/admin/projects/${projectId}`,
		});
	}

	/** admin.projects.change_slug */
	async changeSlug(
		projectId: Snowflake,
		body: models.AdminChangeProjectSlugRequest,
	): Promise<models.AdminProject> {
		return this.ctx.transport.request<models.AdminProject>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/change-slug`,
			body,
		});
	}

	/** admin.projects.rename */
	async rename(
		projectId: Snowflake,
		body: models.AdminRenameProjectRequest,
	): Promise<models.AdminProject> {
		return this.ctx.transport.request<models.AdminProject>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/rename`,
			body,
		});
	}

	/** admin.projects.set_online_strategy */
	async setOnlineStrategy(
		projectId: Snowflake,
		body: models.AdminSetProjectOnlineStrategyRequest,
	): Promise<models.AdminProject> {
		return this.ctx.transport.request<models.AdminProject>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/set-online-strategy`,
			body,
		});
	}

	/** admin.projects.set_rollout_mode */
	async setRolloutMode(
		projectId: Snowflake,
		body: models.AdminSetProjectRolloutModeRequest,
	): Promise<models.AdminProject> {
		return this.ctx.transport.request<models.AdminProject>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/set-rollout-mode`,
			body,
		});
	}

	/** admin.projects.transfer_ownership */
	async transferOwnership(
		projectId: Snowflake,
		body: models.AdminTransferOwnershipRequest,
	): Promise<models.AdminProject> {
		return this.ctx.transport.request<models.AdminProject>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/transfer-ownership`,
			body,
		});
	}
}

/** admin.roles procedures. */
export class AdminRolesNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.roles.list */
	async list(): Promise<models.AdminRoleListResponse> {
		return this.ctx.transport.request<models.AdminRoleListResponse>({
			method: "GET",
			path: `/v1/admin/roles`,
		});
	}

	/** admin.roles.create */
	async create(body: models.AdminRoleRequest): Promise<models.AdminRole> {
		return this.ctx.transport.request<models.AdminRole>({
			method: "POST",
			path: `/v1/admin/roles`,
			body,
		});
	}

	/** admin.roles.delete */
	async delete(roleId: Snowflake): Promise<models.AdminRoleDeleteResponse> {
		return this.ctx.transport.request<models.AdminRoleDeleteResponse>({
			method: "DELETE",
			path: `/v1/admin/roles/${roleId}`,
		});
	}

	/** admin.roles.update */
	async update(
		roleId: Snowflake,
		body: models.AdminRoleRequest,
	): Promise<models.AdminRole> {
		return this.ctx.transport.request<models.AdminRole>({
			method: "PATCH",
			path: `/v1/admin/roles/${roleId}`,
			body,
		});
	}
}

/** admin.servers procedures. */
export class AdminServersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.servers.list */
	async list(params?: {
		page?: number;
		perPage?: number;
		q?: string;
	}): Promise<models.AdminServerListResponse> {
		return this.ctx.transport.request<models.AdminServerListResponse>({
			method: "GET",
			path: `/v1/admin/servers`,
			query: { page: params?.page, per_page: params?.perPage, q: params?.q },
		});
	}

	/** admin.servers.create */
	async create(
		body: models.AdminForceCreateRequest,
	): Promise<models.AdminServerSummary> {
		return this.ctx.transport.request<models.AdminServerSummary>({
			method: "POST",
			path: `/v1/admin/servers`,
			body,
		});
	}

	/** admin.servers.stats */
	async stats(): Promise<models.GlobalServerStats> {
		return this.ctx.transport.request<models.GlobalServerStats>({
			method: "GET",
			path: `/v1/admin/servers/stats`,
		});
	}

	/** admin.servers.delete */
	async delete(serverId: Snowflake): Promise<models.AdminDeleteResponse> {
		return this.ctx.transport.request<models.AdminDeleteResponse>({
			method: "DELETE",
			path: `/v1/admin/servers/${serverId}`,
		});
	}

	/** admin.servers.update */
	async update(
		serverId: Snowflake,
		body: models.AdminServerUpdateRequest,
	): Promise<models.AdminServerSummary> {
		return this.ctx.transport.request<models.AdminServerSummary>({
			method: "PATCH",
			path: `/v1/admin/servers/${serverId}`,
			body,
		});
	}
}

/** admin.sessions procedures. */
export class AdminSessionsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.sessions.revoke */
	async revoke(sessionId: Snowflake): Promise<models.SessionRevokeResult> {
		return this.ctx.transport.request<models.SessionRevokeResult>({
			method: "POST",
			path: `/v1/admin/sessions/${sessionId}/actions/revoke`,
		});
	}
}

/** admin.system procedures. */
export class AdminSystemNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.system.health */
	async health(): Promise<models.ServicesHealthResponse> {
		return this.ctx.transport.request<models.ServicesHealthResponse>({
			method: "GET",
			path: `/v1/admin/system/services-health`,
		});
	}
}

/** admin.users procedures. */
export class AdminUsersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.users.list */
	async list(params?: {
		page?: number;
		perPage?: number;
		q?: string;
	}): Promise<models.AdminUserListResponse> {
		return this.ctx.transport.request<models.AdminUserListResponse>({
			method: "GET",
			path: `/v1/admin/users`,
			query: { page: params?.page, per_page: params?.perPage, q: params?.q },
		});
	}

	/** admin.users.by_minecraft */
	async byMinecraft(uuid: string): Promise<models.AdminUserDetail> {
		return this.ctx.transport.request<models.AdminUserDetail>({
			method: "GET",
			path: `/v1/admin/users/by-minecraft-uuid/${uuid}`,
		});
	}

	/** admin.users.search */
	async search(params?: {
		q?: string;
		limit?: number;
	}): Promise<models.AdminUserListResponse> {
		return this.ctx.transport.request<models.AdminUserListResponse>({
			method: "GET",
			path: `/v1/admin/users/search`,
			query: { q: params?.q, limit: params?.limit },
		});
	}

	/** admin.users.get */
	async get(userId: Snowflake): Promise<models.AdminUserDetail> {
		return this.ctx.transport.request<models.AdminUserDetail>({
			method: "GET",
			path: `/v1/admin/users/${userId}`,
		});
	}

	/** admin.users.update */
	async update(
		userId: Snowflake,
		body: models.AdminUserUpdateRequest,
	): Promise<models.AdminUserDetail> {
		return this.ctx.transport.request<models.AdminUserDetail>({
			method: "PATCH",
			path: `/v1/admin/users/${userId}`,
			body,
		});
	}

	/** admin.users.set_discord */
	async setDiscord(
		userId: Snowflake,
		body: models.AdminUserDiscordUpdateRequest,
	): Promise<models.AdminUserDetail> {
		return this.ctx.transport.request<models.AdminUserDetail>({
			method: "PATCH",
			path: `/v1/admin/users/${userId}/discord`,
			body,
		});
	}

	/** admin.users.roles */
	async roles(userId: Snowflake): Promise<models.UserRolesResponse> {
		return this.ctx.transport.request<models.UserRolesResponse>({
			method: "GET",
			path: `/v1/admin/users/${userId}/roles`,
		});
	}

	/** admin.users.remove_role */
	async removeRole(
		userId: Snowflake,
		roleSlug: string,
	): Promise<models.UserRolesResponse> {
		return this.ctx.transport.request<models.UserRolesResponse>({
			method: "DELETE",
			path: `/v1/admin/users/${userId}/roles/${roleSlug}`,
		});
	}

	/** admin.users.assign_role */
	async assignRole(
		userId: Snowflake,
		roleSlug: string,
	): Promise<models.UserRolesResponse> {
		return this.ctx.transport.request<models.UserRolesResponse>({
			method: "POST",
			path: `/v1/admin/users/${userId}/roles/${roleSlug}`,
		});
	}

	/** admin.users.sessions */
	async sessions(userId: Snowflake): Promise<models.SessionList> {
		return this.ctx.transport.request<models.SessionList>({
			method: "GET",
			path: `/v1/admin/users/${userId}/sessions`,
		});
	}
}

/** admin.* procedures. */
export class AdminNs {
	readonly discovery: AdminDiscoveryNs;
	readonly overrides: AdminOverridesNs;
	readonly players: AdminPlayersNs;
	readonly projects: AdminProjectsNs;
	readonly roles: AdminRolesNs;
	readonly servers: AdminServersNs;
	readonly sessions: AdminSessionsNs;
	readonly system: AdminSystemNs;
	readonly users: AdminUsersNs;
	constructor(ctx: ClientContext) {
		this.discovery = new AdminDiscoveryNs(ctx);
		this.overrides = new AdminOverridesNs(ctx);
		this.players = new AdminPlayersNs(ctx);
		this.projects = new AdminProjectsNs(ctx);
		this.roles = new AdminRolesNs(ctx);
		this.servers = new AdminServersNs(ctx);
		this.sessions = new AdminSessionsNs(ctx);
		this.system = new AdminSystemNs(ctx);
		this.users = new AdminUsersNs(ctx);
	}
}

/** auth.device procedures. */
export class AuthDeviceNs {
	constructor(private readonly ctx: ClientContext) {}

	/** auth.device.approve */
	async approve(
		body: models.DeviceApproveRequest,
	): Promise<models.DeviceApproveResult> {
		return this.ctx.transport.request<models.DeviceApproveResult>({
			method: "POST",
			path: `/v1/auth/device/approve`,
			body,
		});
	}

	/** auth.device.start */
	async start(
		body: models.DeviceStartRequest,
	): Promise<models.DeviceStartResult> {
		return this.ctx.transport.request<models.DeviceStartResult>({
			method: "POST",
			path: `/v1/auth/device/start`,
			body,
		});
	}

	/** auth.device.token */
	async token(
		body: models.DeviceTokenRequest,
	): Promise<models.DeviceTokenResult> {
		return this.ctx.transport.request<models.DeviceTokenResult>({
			method: "POST",
			path: `/v1/auth/device/token`,
			body,
		});
	}
}

/** auth.oauth procedures. */
export class AuthOauthNs {
	constructor(private readonly ctx: ClientContext) {}

	/** auth.oauth.callback */
	async callback(
		provider: string,
		body: models.OAuthCallbackRequest,
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "POST",
			path: `/auth/oauth/${provider}/callback`,
			body,
			channel: "auth",
		});
	}

	/** auth.oauth.start */
	async start(provider: string): Promise<models.OAuthStartResponse> {
		return this.ctx.transport.request<models.OAuthStartResponse>({
			method: "GET",
			path: `/auth/oauth/${provider}/start`,
			channel: "auth",
		});
	}
}

/** auth.* procedures. */
export class AuthNs {
	readonly device: AuthDeviceNs;
	readonly oauth: AuthOauthNs;
	constructor(private readonly ctx: ClientContext) {
		this.device = new AuthDeviceNs(ctx);
		this.oauth = new AuthOauthNs(ctx);
	}

	/** auth.login */
	async login(body: models.UserLogin): Promise<models.LoginResponse> {
		return this.ctx.transport.request<models.LoginResponse>({
			method: "POST",
			path: `/auth/login`,
			body,
			channel: "auth",
		});
	}

	/** auth.logout */
	async logout(): Promise<models.LogoutResponse> {
		return this.ctx.transport.request<models.LogoutResponse>({
			method: "POST",
			path: `/auth/logout`,
			channel: "auth",
		});
	}

	/** auth.refresh */
	async refresh(
		body: models.RefreshTokenRequest,
	): Promise<models.LoginResponse> {
		return this.ctx.transport.request<models.LoginResponse>({
			method: "POST",
			path: `/auth/refresh`,
			body,
			channel: "auth",
		});
	}

	/** auth.register */
	async register(body: models.UserRegister): Promise<models.UserPublic> {
		return this.ctx.transport.request<models.UserPublic>({
			method: "POST",
			path: `/auth/register`,
			body,
			channel: "auth",
		});
	}
}

/** billing.orders procedures. */
export class BillingOrdersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.orders.list */
	async list(params?: { page?: number; limit?: number }): Promise<Order[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/billing/orders`,
			query: { page: params?.page, limit: params?.limit },
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Order", items) as Order[];
	}
}

/** billing.products procedures. */
export class BillingProductsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.products.list */
	async list(): Promise<Product[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/billing/products`,
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Product", items) as Product[];
	}
}

/** billing.subscriptions procedures. */
export class BillingSubscriptionsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.subscriptions.list */
	async list(params?: {
		page?: number;
		limit?: number;
	}): Promise<Subscription[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/billing/subscriptions`,
			query: { page: params?.page, limit: params?.limit },
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Subscription", items) as Subscription[];
	}
}

/** billing.* procedures. */
export class BillingNs {
	readonly orders: BillingOrdersNs;
	readonly products: BillingProductsNs;
	readonly subscriptions: BillingSubscriptionsNs;
	constructor(private readonly ctx: ClientContext) {
		this.orders = new BillingOrdersNs(ctx);
		this.products = new BillingProductsNs(ctx);
		this.subscriptions = new BillingSubscriptionsNs(ctx);
	}

	/** billing.checkout */
	async checkout(body: models.CheckoutRequest): Promise<models.CheckoutResult> {
		return this.ctx.transport.request<models.CheckoutResult>({
			method: "POST",
			path: `/v1/billing/checkout`,
			body,
		});
	}
}

/** builds.* procedures. */
export class BuildsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** builds.create */
	async create(body: models.BuildCreateRequest): Promise<Build> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds`,
			body,
		});
		return this.ctx.hydrate("Build", data) as Build;
	}

	/** builds.import */
	async import(body: models.ImportSharedBuildRequest): Promise<Build> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds/import`,
			body,
		});
		return this.ctx.hydrate("Build", data) as Build;
	}

	/** builds.shared_with_me */
	async sharedWithMe(): Promise<Build[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/builds/shared-with-me`,
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Build", items) as Build[];
	}
}

/** discord.link procedures. */
export class DiscordLinkNs {
	constructor(private readonly ctx: ClientContext) {}

	/** discord.link.complete */
	async complete(
		body: models.CompleteLinkRequest,
	): Promise<models.CompleteLinkResult> {
		return this.ctx.transport.request<models.CompleteLinkResult>({
			method: "POST",
			path: `/v1/discord/link/complete`,
			body,
		});
	}

	/** discord.link.session */
	async session(params?: { state?: string }): Promise<models.LinkSession> {
		return this.ctx.transport.request<models.LinkSession>({
			method: "GET",
			path: `/v1/discord/link/session`,
			query: { state: params?.state },
		});
	}

	/** discord.link.token */
	async token(
		body: models.CreateLinkTokenRequest,
	): Promise<models.LinkTokenResult> {
		return this.ctx.transport.request<models.LinkTokenResult>({
			method: "POST",
			path: `/v1/discord/link/token`,
			body,
		});
	}
}

/** discord.* procedures. */
export class DiscordNs {
	readonly link: DiscordLinkNs;
	constructor(ctx: ClientContext) {
		this.link = new DiscordLinkNs(ctx);
	}
}

/** monitoring.* procedures. */
export class MonitoringNs {
	constructor(private readonly ctx: ClientContext) {}

	/** monitoring.landing */
	async landing(): Promise<models.LandingStats> {
		return this.ctx.transport.request<models.LandingStats>({
			method: "GET",
			path: `/v1/monitoring/landing`,
		});
	}
}

/** password.* procedures. */
export class PasswordNs {
	constructor(private readonly ctx: ClientContext) {}

	/** password.reset_confirm */
	async resetConfirm(
		body: models.PasswordResetConfirmRequest,
	): Promise<models.PasswordResetResult> {
		return this.ctx.transport.request<models.PasswordResetResult>({
			method: "POST",
			path: `/v1/password/reset/confirm`,
			body,
		});
	}

	/** password.reset_request */
	async resetRequest(
		body: models.PasswordResetRequest,
	): Promise<models.PasswordResetResult> {
		return this.ctx.transport.request<models.PasswordResetResult>({
			method: "POST",
			path: `/v1/password/reset/request`,
			body,
		});
	}
}

/** projects.* procedures. */
export class ProjectsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** projects.stats */
	async stats(params?: {
		q?: string;
		edition?: string;
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: boolean;
	}): Promise<models.ProjectFilterStats> {
		return this.ctx.transport.request<models.ProjectFilterStats>({
			method: "GET",
			path: `/v1/projects/stats`,
			query: {
				q: params?.q,
				edition: params?.edition,
				access: params?.access,
				features: params?.features,
				region: params?.region,
				hosting: params?.hosting,
				verified: params?.verified,
			},
		});
	}

	/** projects.bridge */
	async bridge(serverId: Snowflake): Promise<models.BridgeSettings> {
		return this.ctx.transport.request<models.BridgeSettings>({
			method: "GET",
			path: `/v1/discord/servers/${serverId}/bridge`,
		});
	}

	/** projects.bridge_update */
	async bridgeUpdate(
		serverId: Snowflake,
		body: models.BridgeSettingsUpdateRequest,
	): Promise<models.BridgeSettings> {
		return this.ctx.transport.request<models.BridgeSettings>({
			method: "PATCH",
			path: `/v1/discord/servers/${serverId}/bridge`,
			body,
		});
	}

	/** projects.bridge_import */
	async bridgeImport(
		serverId: Snowflake,
		body: models.ImportPullRequest,
	): Promise<models.ImportPull> {
		return this.ctx.transport.request<models.ImportPull>({
			method: "POST",
			path: `/v1/discord/servers/${serverId}/import-pull`,
			body,
		});
	}

	/** projects.bridge_roles */
	async bridgeRoles(serverId: Snowflake): Promise<models.RoleCatalog> {
		return this.ctx.transport.request<models.RoleCatalog>({
			method: "GET",
			path: `/v1/discord/servers/${serverId}/roles-catalog`,
		});
	}

	/** projects.projects_list */
	async projectsList(params?: {
		page?: number;
		perPage?: number;
	}): Promise<models.WorkspaceListResponse> {
		return this.ctx.transport.request<models.WorkspaceListResponse>({
			method: "GET",
			path: `/v1/me/projects`,
			query: { page: params?.page, per_page: params?.perPage },
		});
	}

	/** projects.projects_resolve */
	async projectsResolve(
		projectRef: string,
	): Promise<models.WorkspaceResolveResponse> {
		return this.ctx.transport.request<models.WorkspaceResolveResponse>({
			method: "GET",
			path: `/v1/me/projects/resolve/${projectRef}`,
		});
	}

	/** projects.list */
	async list(params?: {
		q?: string;
		edition?: string;
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: boolean;
		page?: number;
		perPage?: number;
		sort?: string;
	}): Promise<models.ProjectListResponse> {
		return this.ctx.transport.request<models.ProjectListResponse>({
			method: "GET",
			path: `/v1/projects`,
			query: {
				q: params?.q,
				edition: params?.edition,
				access: params?.access,
				features: params?.features,
				region: params?.region,
				hosting: params?.hosting,
				verified: params?.verified,
				page: params?.page,
				per_page: params?.perPage,
				sort: params?.sort,
			},
		});
	}

	/** projects.create */
	async create(
		body: models.ProjectCreateRequest,
	): Promise<models.ProjectCreateResponse> {
		return this.ctx.transport.request<models.ProjectCreateResponse>({
			method: "POST",
			path: `/v1/projects`,
			body,
		});
	}

	/** projects.resolve */
	async resolve(projectRef: string): Promise<models.ProjectResolveResponse> {
		return this.ctx.transport.request<models.ProjectResolveResponse>({
			method: "GET",
			path: `/v1/projects/resolve/${projectRef}`,
		});
	}
}

/** rbac.* procedures. */
export class RbacNs {
	constructor(private readonly ctx: ClientContext) {}

	/** rbac.batch_resolve */
	async batchResolve(
		body: models.BatchResolveRequest,
	): Promise<models.BatchResolveResponse> {
		return this.ctx.transport.request<models.BatchResolveResponse>({
			method: "POST",
			path: `/v1/rbac/batch-resolve`,
			body,
		});
	}
}

/** servers.* procedures. */
export class ServersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** servers.resolve */
	async resolve(serverRef: string): Promise<Server> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/servers/resolve/${serverRef}`,
		});
		return this.ctx.hydrate("Server", data) as Server;
	}
}

/** stats.* procedures. */
export class StatsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** stats.filter */
	async filter(params?: {
		q?: string;
		edition?: string;
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: boolean;
		role?: string;
	}): Promise<models.FilterStats> {
		return this.ctx.transport.request<models.FilterStats>({
			method: "GET",
			path: `/v1/stats/filter`,
			query: {
				q: params?.q,
				edition: params?.edition,
				access: params?.access,
				features: params?.features,
				region: params?.region,
				hosting: params?.hosting,
				verified: params?.verified,
				role: params?.role,
			},
		});
	}

	/** stats.live */
	async live(): Promise<models.LiveDashboardStats> {
		return this.ctx.transport.request<models.LiveDashboardStats>({
			method: "GET",
			path: `/v1/stats/live`,
		});
	}
}

/** tickets.* procedures. */
export class TicketsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** tickets.create */
	async create(body: models.TicketCreateRequest): Promise<Ticket> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/tickets`,
			body,
		});
		return this.ctx.hydrate("Ticket", data) as Ticket;
	}

	/** tickets.mine */
	async mine(params?: { page?: number; limit?: number }): Promise<Ticket[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/community/tickets/my`,
			query: { page: params?.page, limit: params?.limit },
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Ticket", items) as Ticket[];
	}
}

/** updates.* procedures. */
export class UpdatesNs {
	constructor(private readonly ctx: ClientContext) {}

	/** updates.manifest */
	async manifest(params?: {
		channel?: string;
		platform?: string;
		serverId?: Snowflake;
	}): Promise<models.UpdateManifest> {
		return this.ctx.transport.request<models.UpdateManifest>({
			method: "GET",
			path: `/v1/launcher/updates/manifest`,
			query: {
				channel: params?.channel,
				platform: params?.platform,
				server_id: params?.serverId,
			},
		});
	}

	/** updates.manifest_upsert */
	async manifestUpsert(
		channel: string,
		platform: string,
		body: models.UpdateManifestUpsert,
	): Promise<models.UpdateManifest> {
		return this.ctx.transport.request<models.UpdateManifest>({
			method: "PUT",
			path: `/v1/launcher/updates/manifests/${channel}/${platform}`,
			body,
		});
	}

	/** updates.manifest_delete */
	async manifestDelete(
		channel: string,
		platform: string,
	): Promise<models.DeleteAck> {
		return this.ctx.transport.request<models.DeleteAck>({
			method: "POST",
			path: `/v1/launcher/updates/manifests/${channel}/${platform}/delete`,
		});
	}

	/** updates.report */
	async report(
		body: models.UpdateReportInput,
	): Promise<models.UpdateReportAck> {
		return this.ctx.transport.request<models.UpdateReportAck>({
			method: "POST",
			path: `/v1/launcher/updates/report`,
			body,
		});
	}
}

/** users.* procedures. */
export class UsersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** users.batch */
	async batch(body: models.BatchPublicProfilesRequest): Promise<User[]> {
		const data = (await this.ctx.transport.request({
			method: "POST",
			path: `/v1/users/public-profiles`,
			body,
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("User", items) as User[];
	}

	/** users.search */
	async search(params?: { q?: string; limit?: number }): Promise<User[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/users/search`,
			query: { q: params?.q, limit: params?.limit },
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("User", items) as User[];
	}

	/** users.engagement */
	async engagement(userId: Snowflake): Promise<models.UserEngagement> {
		return this.ctx.transport.request<models.UserEngagement>({
			method: "GET",
			path: `/v1/community/users/${userId}/engagement`,
		});
	}

	/** users.activity_list */
	async activityList(
		userId: Snowflake,
		params?: { limit?: number },
	): Promise<models.UserRecentActivity> {
		return this.ctx.transport.request<models.UserRecentActivity>({
			method: "GET",
			path: `/v1/community/users/${userId}/recent-activity`,
			query: { limit: params?.limit },
		});
	}
}

/** verification.* procedures. */
export class VerificationNs {
	constructor(private readonly ctx: ClientContext) {}

	/** verification.start_dns */
	async startDns(
		body: models.VerificationStartRequest,
	): Promise<models.DnsVerification> {
		return this.ctx.transport.request<models.DnsVerification>({
			method: "POST",
			path: `/v1/servers/verification/dns`,
			body,
		});
	}

	/** verification.check_dns */
	async checkDns(
		body: models.VerificationCheckRequest,
	): Promise<models.DnsVerification> {
		return this.ctx.transport.request<models.DnsVerification>({
			method: "POST",
			path: `/v1/servers/verification/dns/check`,
			body,
		});
	}

	/** verification.start_motd */
	async startMotd(
		body: models.VerificationStartRequest,
	): Promise<models.MotdVerification> {
		return this.ctx.transport.request<models.MotdVerification>({
			method: "POST",
			path: `/v1/servers/verification/motd`,
			body,
		});
	}

	/** verification.check_motd */
	async checkMotd(
		body: models.VerificationCheckRequest,
	): Promise<models.MotdVerification> {
		return this.ctx.transport.request<models.MotdVerification>({
			method: "POST",
			path: `/v1/servers/verification/motd/check`,
			body,
		});
	}

	/** verification.start_plugin */
	async startPlugin(
		body: models.PluginVerificationStartRequest,
	): Promise<models.PluginVerification> {
		return this.ctx.transport.request<models.PluginVerification>({
			method: "POST",
			path: `/v1/servers/verification/plugin`,
			body,
		});
	}

	/** verification.check_plugin */
	async checkPlugin(serverId: Snowflake): Promise<models.PluginVerification> {
		return this.ctx.transport.request<models.PluginVerification>({
			method: "GET",
			path: `/v1/servers/verification/plugin/${serverId}`,
		});
	}
}

/** whitelist.bindings procedures. */
export class WhitelistBindingsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** whitelist.bindings.create */
	async create(body: models.WhitelistBindingWriteRequest): Promise<Binding> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/whitelist/bindings`,
			body,
		});
		return this.ctx.hydrate("Binding", data) as Binding;
	}
}

/** whitelist.forms procedures. */
export class WhitelistFormsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** whitelist.forms.list */
	async list(params?: {
		projectId?: Snowflake;
		search?: string;
		page?: number;
		perPage?: number;
	}): Promise<Form[]> {
		const data = (await this.ctx.transport.request({
			method: "GET",
			path: `/v1/whitelist/forms`,
			query: {
				project_id: params?.projectId,
				search: params?.search,
				page: params?.page,
				per_page: params?.perPage,
			},
		})) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Form", items) as Form[];
	}

	/** whitelist.forms.create */
	async create(body: models.WhitelistFormCreateRequest): Promise<Form> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/whitelist/forms`,
			body,
		});
		return this.ctx.hydrate("Form", data) as Form;
	}
}

/** whitelist.* procedures. */
export class WhitelistNs {
	readonly bindings: WhitelistBindingsNs;
	readonly forms: WhitelistFormsNs;
	constructor(ctx: ClientContext) {
		this.bindings = new WhitelistBindingsNs(ctx);
		this.forms = new WhitelistFormsNs(ctx);
	}
}
