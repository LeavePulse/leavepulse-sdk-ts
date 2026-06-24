// Generated from the LeavePulse contract. Do not edit.
import type { ClientContext } from "./client";
import { fetchCachedOrThrow } from "./runtime/etag-store";
import { Page, type PageData, pageDataFrom } from "./runtime/page";
import type * as models from "./models";
import type { Snowflake } from "./runtime/snowflake";
import type { Binding } from "./resources/Binding";
import type { Build } from "./resources/Build";
import type { Form } from "./resources/Form";
import type { Order } from "./resources/Order";
import type { PaymentMethod } from "./resources/PaymentMethod";
import type { RefundRequest } from "./resources/RefundRequest";
import type { Server } from "./resources/Server";
import type { Subscription } from "./resources/Subscription";
import type { Ticket } from "./resources/Ticket";
import type { User } from "./resources/User";

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

	/** auth.oauth.captcha_confirm */
	async captchaConfirm(
		body: models.OAuthCaptchaConfirmRequest,
	): Promise<models.LoginResponse | models.OAuthTotpChallengeResponse> {
		return this.ctx.transport.request<
			models.LoginResponse | models.OAuthTotpChallengeResponse
		>({
			method: "POST",
			path: `/auth/oauth/captcha/confirm`,
			body,
			channel: "auth",
		});
	}

	/** auth.oauth.totp_confirm */
	async totpConfirm(
		body: models.OAuthTotpConfirmRequest,
	): Promise<models.LoginResponse> {
		return this.ctx.transport.request<models.LoginResponse>({
			method: "POST",
			path: `/auth/oauth/totp/confirm`,
			body,
			channel: "auth",
		});
	}

	/** auth.oauth.callback */
	async callback(
		provider: string,
		body: models.OAuthCallbackRequest,
	): Promise<
		| models.LoginResponse
		| models.OAuthCaptchaChallengeResponse
		| models.OAuthTotpChallengeResponse
		| models.StatusResponse
		| models.MinecraftAccountLinkResponse
	> {
		return this.ctx.transport.request<
			| models.LoginResponse
			| models.OAuthCaptchaChallengeResponse
			| models.OAuthTotpChallengeResponse
			| models.StatusResponse
			| models.MinecraftAccountLinkResponse
		>({
			method: "POST",
			path: `/auth/oauth/${provider}/callback`,
			body,
			channel: "auth",
		});
	}

	/** auth.oauth.start */
	async start(
		provider: string,
		params?: { audience?: string },
	): Promise<models.OAuthStartResponse> {
		return fetchCachedOrThrow<models.OAuthStartResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/auth/oauth/${provider}/start`,
				query: { audience: params?.audience },
				channel: "auth",
			},
		);
	}
}

/** auth.oauth2 procedures. */
export class AuthOauth2Ns {
	constructor(private readonly ctx: ClientContext) {}

	/** auth.oauth2.authorize */
	async authorize(params?: {
		responseType?: string;
		clientId?: string;
		codeChallenge?: string;
		redirectUri?: string;
		scope?: string;
		state?: string;
		codeChallengeMethod?: string;
	}): Promise<unknown> {
		return fetchCachedOrThrow<unknown>(this.ctx.transport, this.ctx.etagStore, {
			method: "GET",
			path: `/auth/oauth/authorize`,
			query: {
				response_type: params?.responseType,
				client_id: params?.clientId,
				code_challenge: params?.codeChallenge,
				redirect_uri: params?.redirectUri,
				scope: params?.scope,
				state: params?.state,
				code_challenge_method: params?.codeChallengeMethod,
			},
			channel: "auth",
		});
	}

	/** auth.oauth2.token */
	async token(): Promise<models.OAuthAuthorizationTokenResponse> {
		return this.ctx.transport.request<models.OAuthAuthorizationTokenResponse>({
			method: "POST",
			path: `/auth/oauth/token`,
			channel: "auth",
		});
	}
}

/** auth.tokens procedures. */
export class AuthTokensNs {
	constructor(private readonly ctx: ClientContext) {}

	/** auth.tokens.list */
	async list(): Promise<models.PersonalAccessTokenListResponse> {
		return fetchCachedOrThrow<models.PersonalAccessTokenListResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/auth/pat-tokens`, channel: "auth" },
		);
	}

	/** auth.tokens.create */
	async create(
		body: models.PersonalAccessTokenCreateRequest,
	): Promise<models.PersonalAccessTokenCreateResponse> {
		return this.ctx.transport.request<models.PersonalAccessTokenCreateResponse>(
			{ method: "POST", path: `/auth/pat-tokens`, body, channel: "auth" },
		);
	}

	/** auth.tokens.revoke */
	async revoke(tokenId: number): Promise<models.StatusResponse> {
		return this.ctx.transport.request<models.StatusResponse>({
			method: "DELETE",
			path: `/auth/pat-tokens/${tokenId}`,
			channel: "auth",
		});
	}
}

/** auth.* procedures. */
export class AuthNs {
	readonly device: AuthDeviceNs;
	readonly oauth: AuthOauthNs;
	readonly oauth2: AuthOauth2Ns;
	readonly tokens: AuthTokensNs;
	constructor(private readonly ctx: ClientContext) {
		this.device = new AuthDeviceNs(ctx);
		this.oauth = new AuthOauthNs(ctx);
		this.oauth2 = new AuthOauth2Ns(ctx);
		this.tokens = new AuthTokensNs(ctx);
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

	/** auth.session */
	async session(): Promise<models.LoginResponse> {
		return this.ctx.transport.request<models.LoginResponse>({
			method: "POST",
			path: `/auth/session`,
			channel: "auth",
		});
	}
}

/** billing.coupons procedures. */
export class BillingCouponsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.coupons.validate */
	async validate(
		body: models.ValidateCouponRequest,
	): Promise<models.ValidateCouponResult> {
		return this.ctx.transport.request<models.ValidateCouponResult>({
			method: "POST",
			path: `/v1/billing/coupons/validate`,
			body,
		});
	}
}

/** billing.currencies procedures. */
export class BillingCurrenciesNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.currencies.list */
	async list(): Promise<models.Currency[]> {
		const data = (await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/billing/currencies` },
		)) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["items"] ?? []);
		return items as models.Currency[];
	}
}

/** billing.customer procedures. */
export class BillingCustomerNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.customer.get */
	async get(): Promise<models.Customer> {
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/billing/customer` },
		);
		return data as models.Customer;
	}

	/** billing.customer.upsert */
	async upsert(body: models.CustomerUpdateRequest): Promise<models.Customer> {
		return this.ctx.transport.request<models.Customer>({
			method: "PUT",
			path: `/v1/billing/customer`,
			body,
		});
	}
}

/** billing.orders procedures. */
export class BillingOrdersNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.orders.list */
	async list(params?: { page?: number; limit?: number }): Promise<Page<Order>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<Order>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/billing/orders`,
					query: { page: page, limit: perPage },
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("Order", raw) as Order[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.limit ?? 20),
			fetchPage,
		);
	}
}

/** billing.paymentMethods procedures. */
export class BillingPaymentMethodsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.paymentMethods.list */
	async list(): Promise<PaymentMethod[]> {
		const data = (await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/billing/payment-methods` },
		)) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["items"] ?? []);
		return this.ctx.hydrateMany("PaymentMethod", items) as PaymentMethod[];
	}
}

/** billing.products procedures. */
export class BillingProductsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.products.list */
	async list(): Promise<models.Product[]> {
		const data = (await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/billing/products` },
		)) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["items"] ?? []);
		return items as models.Product[];
	}
}

/** billing.refundRequests procedures. */
export class BillingRefundRequestsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.refundRequests.list */
	async list(params?: {
		status?: string;
		page?: number;
		limit?: number;
	}): Promise<Page<RefundRequest>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<RefundRequest>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/billing/refund-requests`,
					query: { status: params?.status, page: page, limit: perPage },
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("RefundRequest", raw) as RefundRequest[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.limit ?? 20),
			fetchPage,
		);
	}
}

/** billing.subscriptions procedures. */
export class BillingSubscriptionsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** billing.subscriptions.list */
	async list(params?: {
		page?: number;
		limit?: number;
	}): Promise<Page<Subscription>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<Subscription>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/billing/subscriptions`,
					query: { page: page, limit: perPage },
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("Subscription", raw) as Subscription[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.limit ?? 20),
			fetchPage,
		);
	}
}

/** billing.* procedures. */
export class BillingNs {
	readonly coupons: BillingCouponsNs;
	readonly currencies: BillingCurrenciesNs;
	readonly customer: BillingCustomerNs;
	readonly orders: BillingOrdersNs;
	readonly paymentMethods: BillingPaymentMethodsNs;
	readonly products: BillingProductsNs;
	readonly refundRequests: BillingRefundRequestsNs;
	readonly subscriptions: BillingSubscriptionsNs;
	constructor(private readonly ctx: ClientContext) {
		this.coupons = new BillingCouponsNs(ctx);
		this.currencies = new BillingCurrenciesNs(ctx);
		this.customer = new BillingCustomerNs(ctx);
		this.orders = new BillingOrdersNs(ctx);
		this.paymentMethods = new BillingPaymentMethodsNs(ctx);
		this.products = new BillingProductsNs(ctx);
		this.refundRequests = new BillingRefundRequestsNs(ctx);
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

	/** billing.quote */
	async quote(body: models.QuoteRequest): Promise<models.Quote> {
		return this.ctx.transport.request<models.Quote>({
			method: "POST",
			path: `/v1/billing/quote`,
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

	/** builds.preview */
	async preview(shareToken: string): Promise<Build> {
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/builds/preview/${shareToken}` },
		);
		return this.ctx.hydrate("Build", data) as Build;
	}

	/** builds.shared_with_me */
	async sharedWithMe(): Promise<Build[]> {
		const data = (await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/builds/shared-with-me` },
		)) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["items"] ?? []);
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
		return fetchCachedOrThrow<models.LinkSession>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/discord/link/session`,
				query: { state: params?.state },
			},
		);
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

/** monitoring.me procedures. */
export class MonitoringMeNs {
	constructor(private readonly ctx: ClientContext) {}

	/** monitoring.me.stats */
	async stats(): Promise<models.MyDashboardStats> {
		return fetchCachedOrThrow<models.MyDashboardStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/monitoring/me/stats` },
		);
	}
}

/** monitoring.me.stats procedures. */
export class MonitoringMeStatsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** monitoring.me.stats.unverified */
	async unverified(): Promise<models.MyDashboardStats> {
		return fetchCachedOrThrow<models.MyDashboardStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/monitoring/me/stats/unverified` },
		);
	}
}

/** monitoring.* procedures. */
export class MonitoringNs {
	readonly me: MonitoringMeNs;
	readonly meStats: MonitoringMeStatsNs;
	constructor(private readonly ctx: ClientContext) {
		this.me = new MonitoringMeNs(ctx);
		this.meStats = new MonitoringMeStatsNs(ctx);
	}

	/** monitoring.landing */
	async landing(): Promise<models.LandingStats> {
		return fetchCachedOrThrow<models.LandingStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/monitoring/landing` },
		);
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
		edition?: "java" | "bedrock" | "hybrid" | "unknown";
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: boolean;
	}): Promise<models.ProjectFilterStats> {
		return fetchCachedOrThrow<models.ProjectFilterStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
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
			},
		);
	}

	/** projects.bridge */
	async bridge(serverId: Snowflake): Promise<models.BridgeSettings> {
		return fetchCachedOrThrow<models.BridgeSettings>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/discord/servers/${serverId}/bridge` },
		);
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
		return fetchCachedOrThrow<models.RoleCatalog>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/discord/servers/${serverId}/roles-catalog` },
		);
	}

	/** projects.projects_list */
	async projectsList(params?: {
		page?: number;
		perPage?: number;
	}): Promise<models.WorkspaceListResponse> {
		return fetchCachedOrThrow<models.WorkspaceListResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/me/projects`,
				query: { page: params?.page, per_page: params?.perPage },
			},
		);
	}

	/** projects.projects_resolve */
	async projectsResolve(
		projectRef: string,
	): Promise<models.WorkspaceResolveResponse> {
		return fetchCachedOrThrow<models.WorkspaceResolveResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/me/projects/resolve/${projectRef}` },
		);
	}

	/** projects.list */
	async list(params?: {
		q?: string;
		edition?: "java" | "bedrock" | "hybrid" | "unknown";
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: boolean;
		hasBuild?: boolean;
		page?: number;
		perPage?: number;
		sort?: "players" | "newest" | "verified" | "score" | "unknown";
	}): Promise<models.ProjectListResponse> {
		return fetchCachedOrThrow<models.ProjectListResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
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
					has_build: params?.hasBuild,
					page: params?.page,
					per_page: params?.perPage,
					sort: params?.sort,
				},
			},
		);
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
		return fetchCachedOrThrow<models.ProjectResolveResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/projects/resolve/${projectRef}` },
		);
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
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/resolve/${serverRef}` },
		);
		return this.ctx.hydrate("Server", data) as Server;
	}
}

/** stats.* procedures. */
export class StatsNs {
	constructor(private readonly ctx: ClientContext) {}

	/** stats.filter */
	async filter(params?: {
		q?: string;
		edition?: "java" | "bedrock" | "hybrid" | "unknown";
		access?: string;
		features?: string;
		region?: string;
		hosting?: string;
		verified?: boolean;
		role?: string;
	}): Promise<models.FilterStats> {
		return fetchCachedOrThrow<models.FilterStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
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
			},
		);
	}

	/** stats.live */
	async live(): Promise<models.LiveDashboardStats> {
		return fetchCachedOrThrow<models.LiveDashboardStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/stats/live` },
		);
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
	async mine(params?: {
		page?: number;
		limit?: number;
	}): Promise<Page<Ticket>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<Ticket>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/community/tickets/my`,
					query: { page: page, limit: perPage },
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("Ticket", raw) as Ticket[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.limit ?? 20),
			fetchPage,
		);
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
		return fetchCachedOrThrow<models.UpdateManifest>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/launcher/updates/manifest`,
				query: {
					channel: params?.channel,
					platform: params?.platform,
					server_id: params?.serverId,
				},
			},
		);
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
			: ((data as Record<string, unknown[]>)["items"] ?? []);
		return this.ctx.hydrateMany("User", items) as User[];
	}

	/** users.search */
	async search(params?: { q?: string; limit?: number }): Promise<User[]> {
		const data = (await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/users/search`,
				query: { q: params?.q, limit: params?.limit },
			},
		)) as unknown;
		const items = Array.isArray(data)
			? data
			: ((data as Record<string, unknown[]>)["items"] ?? []);
		return this.ctx.hydrateMany("User", items) as User[];
	}

	/** users.engagement */
	async engagement(userId: Snowflake): Promise<models.UserEngagement> {
		return fetchCachedOrThrow<models.UserEngagement>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/community/users/${userId}/engagement` },
		);
	}

	/** users.activity_list */
	async activityList(
		userId: Snowflake,
		params?: { limit?: number },
	): Promise<models.UserRecentActivity> {
		return fetchCachedOrThrow<models.UserRecentActivity>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/community/users/${userId}/recent-activity`,
				query: { limit: params?.limit },
			},
		);
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
		return fetchCachedOrThrow<models.PluginVerification>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/verification/plugin/${serverId}` },
		);
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
	}): Promise<Page<Form>> {
		const fetchPage = async (
			page: number,
			perPage: number,
		): Promise<PageData<Form>> => {
			const data = await fetchCachedOrThrow<unknown>(
				this.ctx.transport,
				this.ctx.etagStore,
				{
					method: "GET",
					path: `/v1/whitelist/forms`,
					query: {
						project_id: params?.projectId,
						search: params?.search,
						page: page,
						per_page: perPage,
					},
				},
			);
			return pageDataFrom(
				data,
				(raw) => this.ctx.hydrateMany("Form", raw) as Form[],
				page,
				perPage,
			);
		};
		return new Page(
			await fetchPage(params?.page ?? 1, params?.perPage ?? 20),
			fetchPage,
		);
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
