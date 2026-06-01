// Generated from the LeavePulse contract. Do not edit.
import type { ClientContext } from "./client";
import type { components } from "./types";
import type { components as authComponents } from "./auth-types";
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
		minSources?: string;
		minMcOnline?: string;
		minDiscordMembers?: string;
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
		candidateId: string | number,
		body: components["schemas"]["DiscoveryCandidateEditRequest"],
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "PATCH",
			path: `/v1/admin/discovery/candidates/${candidateId}`,
			body,
		});
	}

	/** admin.discovery.approve */
	async approve(
		candidateId: string | number,
		params?: { showInPublic?: boolean; serverId?: string },
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
		candidateId: string | number,
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
		candidateId: string | number,
		params?: { limit?: number },
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/admin/discovery/candidates/${candidateId}/observations`,
			query: { limit: params?.limit },
		});
	}

	/** admin.discovery.preview */
	async preview(candidateId: string | number): Promise<unknown> {
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
		serverId: string | number,
		params?: { start?: string; end?: string },
	): Promise<components["schemas"]["StatusOverrideItem"]> {
		return this.ctx.transport.request<
			components["schemas"]["StatusOverrideItem"]
		>({
			method: "GET",
			path: `/v1/admin/servers/${serverId}/status-overrides`,
			query: { start: params?.start, end: params?.end },
		});
	}

	/** admin.overrides.create */
	async create(
		serverId: string | number,
		body: components["schemas"]["CreateStatusOverrideRequest"],
	): Promise<components["schemas"]["StatusOverrideItem"]> {
		return this.ctx.transport.request<
			components["schemas"]["StatusOverrideItem"]
		>({
			method: "POST",
			path: `/v1/admin/servers/${serverId}/status-overrides`,
			body,
		});
	}

	/** admin.overrides.delete */
	async delete(
		serverId: string | number,
		overrideId: string,
	): Promise<components["schemas"]["DeleteStatusOverrideResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["DeleteStatusOverrideResponse"]
		>({
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
	}): Promise<components["schemas"]["PlayerSearchPage"]> {
		return this.ctx.transport.request<
			components["schemas"]["PlayerSearchPage"]
		>({
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
	}): Promise<components["schemas"]["AdminProjectListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminProjectListResponse"]
		>({
			method: "GET",
			path: `/v1/admin/projects`,
			query: { q: params?.q, page: params?.page, per_page: params?.perPage },
		});
	}

	/** admin.projects.delete */
	async delete(
		projectId: string | number,
	): Promise<components["schemas"]["AdminProjectDeleteResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminProjectDeleteResponse"]
		>({ method: "DELETE", path: `/v1/admin/projects/${projectId}` });
	}

	/** admin.projects.change_slug */
	async changeSlug(
		projectId: string | number,
		body: components["schemas"]["AdminChangeProjectSlugRequest"],
	): Promise<components["schemas"]["AdminProject"]> {
		return this.ctx.transport.request<components["schemas"]["AdminProject"]>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/change-slug`,
			body,
		});
	}

	/** admin.projects.rename */
	async rename(
		projectId: string | number,
		body: components["schemas"]["AdminRenameProjectRequest"],
	): Promise<components["schemas"]["AdminProject"]> {
		return this.ctx.transport.request<components["schemas"]["AdminProject"]>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/rename`,
			body,
		});
	}

	/** admin.projects.set_online_strategy */
	async setOnlineStrategy(
		projectId: string | number,
		body: components["schemas"]["AdminSetProjectOnlineStrategyRequest"],
	): Promise<components["schemas"]["AdminProject"]> {
		return this.ctx.transport.request<components["schemas"]["AdminProject"]>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/set-online-strategy`,
			body,
		});
	}

	/** admin.projects.set_rollout_mode */
	async setRolloutMode(
		projectId: string | number,
		body: components["schemas"]["AdminSetProjectRolloutModeRequest"],
	): Promise<components["schemas"]["AdminProject"]> {
		return this.ctx.transport.request<components["schemas"]["AdminProject"]>({
			method: "POST",
			path: `/v1/admin/projects/${projectId}/actions/set-rollout-mode`,
			body,
		});
	}

	/** admin.projects.transfer_ownership */
	async transferOwnership(
		projectId: string | number,
		body: components["schemas"]["AdminTransferOwnershipRequest"],
	): Promise<components["schemas"]["AdminProject"]> {
		return this.ctx.transport.request<components["schemas"]["AdminProject"]>({
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
	async list(): Promise<components["schemas"]["AdminRoleListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminRoleListResponse"]
		>({ method: "GET", path: `/v1/admin/roles` });
	}

	/** admin.roles.create */
	async create(
		body: components["schemas"]["AdminRoleRequest"],
	): Promise<components["schemas"]["AdminRole"]> {
		return this.ctx.transport.request<components["schemas"]["AdminRole"]>({
			method: "POST",
			path: `/v1/admin/roles`,
			body,
		});
	}

	/** admin.roles.delete */
	async delete(
		roleId: string | number,
	): Promise<components["schemas"]["AdminRoleDeleteResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminRoleDeleteResponse"]
		>({ method: "DELETE", path: `/v1/admin/roles/${roleId}` });
	}

	/** admin.roles.update */
	async update(
		roleId: string | number,
		body: components["schemas"]["AdminRoleRequest"],
	): Promise<components["schemas"]["AdminRole"]> {
		return this.ctx.transport.request<components["schemas"]["AdminRole"]>({
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
	}): Promise<components["schemas"]["AdminServerListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminServerListResponse"]
		>({
			method: "GET",
			path: `/v1/admin/servers`,
			query: { page: params?.page, per_page: params?.perPage, q: params?.q },
		});
	}

	/** admin.servers.create */
	async create(
		body: components["schemas"]["AdminForceCreateRequest"],
	): Promise<components["schemas"]["AdminServerSummary"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminServerSummary"]
		>({ method: "POST", path: `/v1/admin/servers`, body });
	}

	/** admin.servers.stats */
	async stats(): Promise<components["schemas"]["GlobalServerStats"]> {
		return this.ctx.transport.request<
			components["schemas"]["GlobalServerStats"]
		>({ method: "GET", path: `/v1/admin/servers/stats` });
	}

	/** admin.servers.delete */
	async delete(
		serverId: string | number,
	): Promise<components["schemas"]["AdminDeleteResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminDeleteResponse"]
		>({ method: "DELETE", path: `/v1/admin/servers/${serverId}` });
	}

	/** admin.servers.update */
	async update(
		serverId: string | number,
		body: components["schemas"]["AdminServerUpdateRequest"],
	): Promise<components["schemas"]["AdminServerSummary"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminServerSummary"]
		>({ method: "PATCH", path: `/v1/admin/servers/${serverId}`, body });
	}
}

/** admin.sessions procedures. */
export class AdminSessionsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.sessions.revoke */
	async revoke(
		sessionId: string | number,
	): Promise<components["schemas"]["SessionRevokeResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["SessionRevokeResult"]
		>({
			method: "POST",
			path: `/v1/admin/sessions/${sessionId}/actions/revoke`,
		});
	}
}

/** admin.system procedures. */
export class AdminSystemNs {
	constructor(private readonly ctx: ClientContext) {}

	/** admin.system.health */
	async health(): Promise<components["schemas"]["ServicesHealthResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["ServicesHealthResponse"]
		>({ method: "GET", path: `/v1/admin/system/services-health` });
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
	}): Promise<components["schemas"]["AdminUserListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminUserListResponse"]
		>({
			method: "GET",
			path: `/v1/admin/users`,
			query: { page: params?.page, per_page: params?.perPage, q: params?.q },
		});
	}

	/** admin.users.by_minecraft */
	async byMinecraft(
		uuid: string,
	): Promise<components["schemas"]["AdminUserDetail"]> {
		return this.ctx.transport.request<components["schemas"]["AdminUserDetail"]>(
			{ method: "GET", path: `/v1/admin/users/by-minecraft-uuid/${uuid}` },
		);
	}

	/** admin.users.search */
	async search(params?: {
		q?: string;
		limit?: number;
	}): Promise<components["schemas"]["AdminUserListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["AdminUserListResponse"]
		>({
			method: "GET",
			path: `/v1/admin/users/search`,
			query: { q: params?.q, limit: params?.limit },
		});
	}

	/** admin.users.get */
	async get(
		userId: string | number,
	): Promise<components["schemas"]["AdminUserDetail"]> {
		return this.ctx.transport.request<components["schemas"]["AdminUserDetail"]>(
			{ method: "GET", path: `/v1/admin/users/${userId}` },
		);
	}

	/** admin.users.update */
	async update(
		userId: string | number,
		body: components["schemas"]["AdminUserUpdateRequest"],
	): Promise<components["schemas"]["AdminUserDetail"]> {
		return this.ctx.transport.request<components["schemas"]["AdminUserDetail"]>(
			{ method: "PATCH", path: `/v1/admin/users/${userId}`, body },
		);
	}

	/** admin.users.set_discord */
	async setDiscord(
		userId: string | number,
		body: components["schemas"]["AdminUserDiscordUpdateRequest"],
	): Promise<components["schemas"]["AdminUserDetail"]> {
		return this.ctx.transport.request<components["schemas"]["AdminUserDetail"]>(
			{ method: "PATCH", path: `/v1/admin/users/${userId}/discord`, body },
		);
	}

	/** admin.users.roles */
	async roles(
		userId: string | number,
	): Promise<components["schemas"]["UserRolesResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["UserRolesResponse"]
		>({ method: "GET", path: `/v1/admin/users/${userId}/roles` });
	}

	/** admin.users.remove_role */
	async removeRole(
		userId: string | number,
		roleSlug: string,
	): Promise<components["schemas"]["UserRolesResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["UserRolesResponse"]
		>({
			method: "DELETE",
			path: `/v1/admin/users/${userId}/roles/${roleSlug}`,
		});
	}

	/** admin.users.assign_role */
	async assignRole(
		userId: string | number,
		roleSlug: string,
	): Promise<components["schemas"]["UserRolesResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["UserRolesResponse"]
		>({ method: "POST", path: `/v1/admin/users/${userId}/roles/${roleSlug}` });
	}

	/** admin.users.sessions */
	async sessions(
		userId: string | number,
	): Promise<components["schemas"]["SessionList"]> {
		return this.ctx.transport.request<components["schemas"]["SessionList"]>({
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
		body: components["schemas"]["DeviceApproveRequest"],
	): Promise<components["schemas"]["DeviceApproveResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["DeviceApproveResult"]
		>({ method: "POST", path: `/v1/auth/device/approve`, body });
	}

	/** auth.device.start */
	async start(
		body: components["schemas"]["DeviceStartRequest"],
	): Promise<components["schemas"]["DeviceStartResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["DeviceStartResult"]
		>({ method: "POST", path: `/v1/auth/device/start`, body });
	}

	/** auth.device.token */
	async token(
		body: components["schemas"]["DeviceTokenRequest"],
	): Promise<components["schemas"]["DeviceTokenResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["DeviceTokenResult"]
		>({ method: "POST", path: `/v1/auth/device/token`, body });
	}
}

/** auth.oauth procedures. */
export class AuthOauthNs {
	constructor(private readonly ctx: ClientContext) {}

	/** auth.oauth.callback */
	async callback(
		provider: string,
		body: authComponents["schemas"]["OAuthCallbackRequest"],
	): Promise<unknown> {
		return this.ctx.transport.request<unknown>({
			method: "POST",
			path: `/auth/oauth/${provider}/callback`,
			body,
			channel: "auth",
		});
	}

	/** auth.oauth.start */
	async start(
		provider: string,
	): Promise<authComponents["schemas"]["OAuthStartResponse"]> {
		return this.ctx.transport.request<
			authComponents["schemas"]["OAuthStartResponse"]
		>({
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
	async login(
		body: authComponents["schemas"]["UserLogin"],
	): Promise<authComponents["schemas"]["LoginResponse"]> {
		return this.ctx.transport.request<
			authComponents["schemas"]["LoginResponse"]
		>({ method: "POST", path: `/auth/login`, body, channel: "auth" });
	}

	/** auth.logout */
	async logout(): Promise<authComponents["schemas"]["LogoutResponse"]> {
		return this.ctx.transport.request<
			authComponents["schemas"]["LogoutResponse"]
		>({ method: "POST", path: `/auth/logout`, channel: "auth" });
	}

	/** auth.refresh */
	async refresh(
		body: authComponents["schemas"]["RefreshTokenRequest"],
	): Promise<authComponents["schemas"]["LoginResponse"]> {
		return this.ctx.transport.request<
			authComponents["schemas"]["LoginResponse"]
		>({ method: "POST", path: `/auth/refresh`, body, channel: "auth" });
	}

	/** auth.register */
	async register(
		body: authComponents["schemas"]["UserRegister"],
	): Promise<authComponents["schemas"]["UserPublic"]> {
		return this.ctx.transport.request<authComponents["schemas"]["UserPublic"]>({
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
	async checkout(
		body: components["schemas"]["CheckoutRequest"],
	): Promise<components["schemas"]["CheckoutResult"]> {
		return this.ctx.transport.request<components["schemas"]["CheckoutResult"]>({
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
	async create(
		body: components["schemas"]["BuildCreateRequest"],
	): Promise<Build> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/builds`,
			body,
		});
		return this.ctx.hydrate("Build", data) as Build;
	}

	/** builds.import */
	async import(
		body: components["schemas"]["ImportSharedBuildRequest"],
	): Promise<Build> {
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
		body: components["schemas"]["CompleteLinkRequest"],
	): Promise<components["schemas"]["CompleteLinkResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["CompleteLinkResult"]
		>({ method: "POST", path: `/v1/discord/link/complete`, body });
	}

	/** discord.link.session */
	async session(params?: {
		state?: string;
	}): Promise<components["schemas"]["LinkSession"]> {
		return this.ctx.transport.request<components["schemas"]["LinkSession"]>({
			method: "GET",
			path: `/v1/discord/link/session`,
			query: { state: params?.state },
		});
	}

	/** discord.link.token */
	async token(
		body: components["schemas"]["CreateLinkTokenRequest"],
	): Promise<components["schemas"]["LinkTokenResult"]> {
		return this.ctx.transport.request<components["schemas"]["LinkTokenResult"]>(
			{ method: "POST", path: `/v1/discord/link/token`, body },
		);
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
	async landing(): Promise<components["schemas"]["LandingStats"]> {
		return this.ctx.transport.request<components["schemas"]["LandingStats"]>({
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
		body: components["schemas"]["PasswordResetConfirmRequest"],
	): Promise<components["schemas"]["PasswordResetResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["PasswordResetResult"]
		>({ method: "POST", path: `/v1/password/reset/confirm`, body });
	}

	/** password.reset_request */
	async resetRequest(
		body: components["schemas"]["PasswordResetRequest"],
	): Promise<components["schemas"]["PasswordResetResult"]> {
		return this.ctx.transport.request<
			components["schemas"]["PasswordResetResult"]
		>({ method: "POST", path: `/v1/password/reset/request`, body });
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
		verified?: string;
	}): Promise<components["schemas"]["ProjectFilterStats"]> {
		return this.ctx.transport.request<
			components["schemas"]["ProjectFilterStats"]
		>({
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
	async bridge(
		serverId: string | number,
	): Promise<components["schemas"]["BridgeSettings"]> {
		return this.ctx.transport.request<components["schemas"]["BridgeSettings"]>({
			method: "GET",
			path: `/v1/discord/servers/${serverId}/bridge`,
		});
	}

	/** projects.bridge_roles */
	async bridgeRoles(
		serverId: string | number,
	): Promise<components["schemas"]["RoleCatalog"]> {
		return this.ctx.transport.request<components["schemas"]["RoleCatalog"]>({
			method: "GET",
			path: `/v1/discord/servers/${serverId}/roles-catalog`,
		});
	}

	/** projects.projects_list */
	async projectsList(params?: {
		page?: number;
		perPage?: number;
	}): Promise<components["schemas"]["WorkspaceListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["WorkspaceListResponse"]
		>({
			method: "GET",
			path: `/v1/me/projects`,
			query: { page: params?.page, per_page: params?.perPage },
		});
	}

	/** projects.projects_resolve */
	async projectsResolve(
		projectRef: string,
	): Promise<components["schemas"]["WorkspaceResolveResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["WorkspaceResolveResponse"]
		>({ method: "GET", path: `/v1/me/projects/resolve/${projectRef}` });
	}

	/** projects.list */
	async list(params?: {
		q?: string;
		edition?: string;
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: string;
		page?: number;
		perPage?: number;
		sort?: string;
	}): Promise<components["schemas"]["ProjectListResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["ProjectListResponse"]
		>({
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
		body: components["schemas"]["ProjectCreateRequest"],
	): Promise<components["schemas"]["ProjectCreateResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["ProjectCreateResponse"]
		>({ method: "POST", path: `/v1/projects`, body });
	}

	/** projects.resolve */
	async resolve(
		projectRef: string,
	): Promise<components["schemas"]["ProjectResolveResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["ProjectResolveResponse"]
		>({ method: "GET", path: `/v1/projects/resolve/${projectRef}` });
	}
}

/** rbac.* procedures. */
export class RbacNs {
	constructor(private readonly ctx: ClientContext) {}

	/** rbac.batch_resolve */
	async batchResolve(
		body: components["schemas"]["BatchResolveRequest"],
	): Promise<components["schemas"]["BatchResolveResponse"]> {
		return this.ctx.transport.request<
			components["schemas"]["BatchResolveResponse"]
		>({ method: "POST", path: `/v1/rbac/batch-resolve`, body });
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
		verified?: string;
		role?: string;
	}): Promise<components["schemas"]["FilterStats"]> {
		return this.ctx.transport.request<components["schemas"]["FilterStats"]>({
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
	async live(): Promise<components["schemas"]["LiveDashboardStats"]> {
		return this.ctx.transport.request<
			components["schemas"]["LiveDashboardStats"]
		>({ method: "GET", path: `/v1/stats/live` });
	}
}

/** tickets.* procedures. */
export class TicketsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** tickets.create */
	async create(
		body: components["schemas"]["TicketCreateRequest"],
	): Promise<Ticket> {
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
		serverId?: string;
	}): Promise<components["schemas"]["UpdateManifest"]> {
		return this.ctx.transport.request<components["schemas"]["UpdateManifest"]>({
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
		body: components["schemas"]["UpdateManifestUpsert"],
	): Promise<components["schemas"]["UpdateManifest"]> {
		return this.ctx.transport.request<components["schemas"]["UpdateManifest"]>({
			method: "PUT",
			path: `/v1/launcher/updates/manifests/${channel}/${platform}`,
			body,
		});
	}

	/** updates.manifest_delete */
	async manifestDelete(
		channel: string,
		platform: string,
	): Promise<components["schemas"]["DeleteAck"]> {
		return this.ctx.transport.request<components["schemas"]["DeleteAck"]>({
			method: "POST",
			path: `/v1/launcher/updates/manifests/${channel}/${platform}/delete`,
		});
	}

	/** updates.report */
	async report(
		body: components["schemas"]["UpdateReportInput"],
	): Promise<components["schemas"]["UpdateReportAck"]> {
		return this.ctx.transport.request<components["schemas"]["UpdateReportAck"]>(
			{ method: "POST", path: `/v1/launcher/updates/report`, body },
		);
	}
}

/** users.* procedures. */
export class UsersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** users.batch */
	async batch(
		body: components["schemas"]["BatchPublicProfilesRequest"],
	): Promise<User[]> {
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
	async engagement(
		userId: string,
	): Promise<components["schemas"]["UserEngagement"]> {
		return this.ctx.transport.request<components["schemas"]["UserEngagement"]>({
			method: "GET",
			path: `/v1/community/users/${userId}/engagement`,
		});
	}

	/** users.activity_list */
	async activityList(
		userId: string,
		params?: { limit?: number },
	): Promise<components["schemas"]["UserRecentActivity"]> {
		return this.ctx.transport.request<
			components["schemas"]["UserRecentActivity"]
		>({
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
		body: components["schemas"]["VerificationStartRequest"],
	): Promise<components["schemas"]["DnsVerification"]> {
		return this.ctx.transport.request<components["schemas"]["DnsVerification"]>(
			{ method: "POST", path: `/v1/servers/verification/dns`, body },
		);
	}

	/** verification.check_dns */
	async checkDns(
		body: components["schemas"]["VerificationCheckRequest"],
	): Promise<components["schemas"]["DnsVerification"]> {
		return this.ctx.transport.request<components["schemas"]["DnsVerification"]>(
			{ method: "POST", path: `/v1/servers/verification/dns/check`, body },
		);
	}

	/** verification.start_motd */
	async startMotd(
		body: components["schemas"]["VerificationStartRequest"],
	): Promise<components["schemas"]["MotdVerification"]> {
		return this.ctx.transport.request<
			components["schemas"]["MotdVerification"]
		>({ method: "POST", path: `/v1/servers/verification/motd`, body });
	}

	/** verification.check_motd */
	async checkMotd(
		body: components["schemas"]["VerificationCheckRequest"],
	): Promise<components["schemas"]["MotdVerification"]> {
		return this.ctx.transport.request<
			components["schemas"]["MotdVerification"]
		>({ method: "POST", path: `/v1/servers/verification/motd/check`, body });
	}

	/** verification.start_plugin */
	async startPlugin(
		body: components["schemas"]["PluginVerificationStartRequest"],
	): Promise<components["schemas"]["PluginVerification"]> {
		return this.ctx.transport.request<
			components["schemas"]["PluginVerification"]
		>({ method: "POST", path: `/v1/servers/verification/plugin`, body });
	}

	/** verification.check_plugin */
	async checkPlugin(
		serverId: string | number,
	): Promise<components["schemas"]["PluginVerification"]> {
		return this.ctx.transport.request<
			components["schemas"]["PluginVerification"]
		>({ method: "GET", path: `/v1/servers/verification/plugin/${serverId}` });
	}
}

/** whitelist.bindings procedures. */
export class WhitelistBindingsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** whitelist.bindings.create */
	async create(
		body: components["schemas"]["WhitelistBindingWriteRequest"],
	): Promise<Binding> {
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
		projectId?: string;
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
	async create(
		body: components["schemas"]["WhitelistFormCreateRequest"],
	): Promise<Form> {
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
