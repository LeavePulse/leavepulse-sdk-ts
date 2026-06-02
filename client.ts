// Generated from the LeavePulse contract. Do not edit.
import type { Transport } from "./runtime/transport";
import { IdentityMap } from "./runtime/cache";
import type { Identified } from "./runtime/cache";
import { extractId } from "./runtime/resource";
import { MalformedResponse } from "./runtime/errors";
import type { Snowflake } from "./runtime/snowflake";
import type { RealtimeTransport } from "./runtime/realtime";
import { Application } from "./resources/Application";
import { Binding } from "./resources/Binding";
import { Build } from "./resources/Build";
import { Comment } from "./resources/Comment";
import { Form } from "./resources/Form";
import { Me } from "./resources/Me";
import { Order } from "./resources/Order";
import { Project } from "./resources/Project";
import { Server } from "./resources/Server";
import { Session } from "./resources/Session";
import { Subscription } from "./resources/Subscription";
import { Ticket } from "./resources/Ticket";
import { User } from "./resources/User";
import {
	AdminNs,
	AuthNs,
	BillingNs,
	BuildsNs,
	DiscordNs,
	MonitoringNs,
	PasswordNs,
	ProjectsNs,
	RbacNs,
	ServersNs,
	StatsNs,
	TicketsNs,
	UpdatesNs,
	UsersNs,
	VerificationNs,
	WhitelistNs,
} from "./procedures";

export interface ClientContext {
	transport: Transport;
	cache: IdentityMap;
	hydrate(type: string, payload: unknown, dataRoot?: string): unknown;
	hydrateMany(type: string, raw: unknown): unknown[];
	realtime: RealtimeTransport;
}

export class LeavePulse {
	private readonly ctx: ClientContext;
	private _me?: Me;
	readonly admin: AdminNs;
	readonly auth: AuthNs;
	readonly billing: BillingNs;
	readonly builds: BuildsNs;
	readonly discord: DiscordNs;
	readonly monitoring: MonitoringNs;
	readonly password: PasswordNs;
	readonly projects: ProjectsNs;
	readonly rbac: RbacNs;
	readonly servers: ServersNs;
	readonly stats: StatsNs;
	readonly tickets: TicketsNs;
	readonly updates: UpdatesNs;
	readonly users: UsersNs;
	readonly verification: VerificationNs;
	readonly whitelist: WhitelistNs;

	constructor(transport: Transport, realtime?: RealtimeTransport) {
		const cache = new IdentityMap();
		const realtimeOrThrow =
			realtime ??
			(new Proxy(
				{},
				{
					get() {
						throw new Error(
							"realtime not configured: pass a RealtimeTransport to the client",
						);
					},
				},
			) as RealtimeTransport);
		this.ctx = {
			transport,
			cache,
			realtime: realtimeOrThrow,
			hydrate: (type, payload, dataRoot) =>
				this.hydrate(type, payload, dataRoot),
			hydrateMany: (type, raw) =>
				Array.isArray(raw) ? raw.map((d) => this.hydrate(type, d)) : [],
		};
		this.admin = new AdminNs(this.ctx);
		this.auth = new AuthNs(this.ctx);
		this.billing = new BillingNs(this.ctx);
		this.builds = new BuildsNs(this.ctx);
		this.discord = new DiscordNs(this.ctx);
		this.monitoring = new MonitoringNs(this.ctx);
		this.password = new PasswordNs(this.ctx);
		this.projects = new ProjectsNs(this.ctx);
		this.rbac = new RbacNs(this.ctx);
		this.servers = new ServersNs(this.ctx);
		this.stats = new StatsNs(this.ctx);
		this.tickets = new TicketsNs(this.ctx);
		this.updates = new UpdatesNs(this.ctx);
		this.users = new UsersNs(this.ctx);
		this.verification = new VerificationNs(this.ctx);
		this.whitelist = new WhitelistNs(this.ctx);
	}

	async build(id: string): Promise<Build> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/builds/${id}`,
		});
		return this.hydrate("Build", data) as Build;
	}

	async form(id: Snowflake): Promise<Form> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/whitelist/forms/${id}`,
		});
		return this.hydrate("Form", data) as Form;
	}

	get me(): Me {
		this._me ??= new Me({} as never, this.ctx);
		return this._me;
	}

	async order(id: string): Promise<Order> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/billing/orders/${id}`,
		});
		return this.hydrate("Order", data) as Order;
	}

	async project(id: Snowflake): Promise<Project> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/projects/${id}`,
		});
		return this.hydrate("Project", data, "project") as Project;
	}

	async server(id: Snowflake): Promise<Server> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/servers/${id}`,
		});
		return this.hydrate("Server", data) as Server;
	}

	async user(id: string): Promise<User> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/users/${id}/public-profile`,
		});
		return this.hydrate("User", data) as User;
	}

	/**
	 * Normalize a payload into a resource instance. When `dataRoot` is
	 * set the payload is an envelope (`{ project, servers }`): the core
	 * object is unwrapped and sibling fields (links) are merged onto it,
	 * so the resource sees a flat object with `id` at the top.
	 */
	private hydrate(type: string, payload: unknown, dataRoot?: string): unknown {
		type Hydrated = { id: string | number } & Record<string, unknown>;
		const factories: Record<string, (d: Hydrated) => Identified> = {
			Application: (d) => new Application(d as never, this.ctx),
			Binding: (d) => new Binding(d as never, this.ctx),
			Build: (d) => new Build(d as never, this.ctx),
			Comment: (d) => new Comment(d as never, this.ctx),
			Form: (d) => new Form(d as never, this.ctx),
			Me: (d) => new Me(d as never, this.ctx),
			Order: (d) => new Order(d as never, this.ctx),
			Project: (d) => new Project(d as never, this.ctx),
			Server: (d) => new Server(d as never, this.ctx),
			Session: (d) => new Session(d as never, this.ctx),
			Subscription: (d) => new Subscription(d as never, this.ctx),
			Ticket: (d) => new Ticket(d as never, this.ctx),
			User: (d) => new User(d as never, this.ctx),
		};
		const factory = factories[type];
		if (!factory) return payload;
		let data = payload as Record<string, unknown>;
		if (dataRoot && payload && typeof payload === "object") {
			const { [dataRoot]: core, ...siblings } = payload as Record<
				string,
				unknown
			>;
			data = { ...(core as Record<string, unknown>), ...siblings };
		}
		const hydrated = data as Hydrated;
		const id = extractId(hydrated);
		if (id === "") {
			throw new MalformedResponse(
				`${type} payload has no id field to identity-map on`,
				payload,
			);
		}
		return this.ctx.cache.upsert(type, id, hydrated, () => factory(hydrated));
	}
}
