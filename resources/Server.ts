// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import { TopicSubscription } from "../runtime/realtime";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Application } from "./Application";
import type { Ticket } from "./Ticket";

type Data = components["schemas"]["ServerDetail"] & {
	job_id?: string | number;
	member_id?: string | number;
	role_id?: string | number;
	field?: string | number;
	locale?: string | number;
	entry_id?: string | number;
};

export class Server extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Re-fetch this Server and hydrate in place. */
	async refresh(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "GET",
			path: `/v1/servers/${this.id}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** Whether the current user may change_address (RFC §4). */
	get canChangeAddress(): boolean {
		return this.hasCapability("change_address", "server.change_address");
	}

	/** Whether the current user may change_slug (RFC §4). */
	get canChangeSlug(): boolean {
		return this.hasCapability("change_slug", "server.change_slug");
	}

	/** Whether the current user may force_ping (RFC §4). */
	get canForcePing(): boolean {
		return this.hasCapability("force_ping", "server.force_ping");
	}

	/** Whether the current user may rename (RFC §4). */
	get canRename(): boolean {
		return this.hasCapability("rename", "server.rename");
	}

	/** Whether the current user may set_bedrock_port (RFC §4). */
	get canSetBedrockPort(): boolean {
		return this.hasCapability("set_bedrock_port", "server.set_bedrock_port");
	}

	/** Whether the current user may set_description (RFC §4). */
	get canSetDescription(): boolean {
		return this.hasCapability("set_description", "server.set_description");
	}

	/** Whether the current user may set_parent (RFC §4). */
	get canSetParent(): boolean {
		return this.hasCapability("set_parent", "server.set_parent");
	}

	/** Whether the current user may set_ping_port (RFC §4). */
	get canSetPingPort(): boolean {
		return this.hasCapability("set_ping_port", "server.set_ping_port");
	}

	/** Whether the current user may set_regions (RFC §4). */
	get canSetRegions(): boolean {
		return this.hasCapability("set_regions", "server.set_regions");
	}

	/** Whether the current user may set_role (RFC §4). */
	get canSetRole(): boolean {
		return this.hasCapability("set_role", "server.set_role");
	}

	/** Whether the current user may set_show_description (RFC §4). */
	get canSetShowDescription(): boolean {
		return this.hasCapability(
			"set_show_description",
			"server.set_show_description",
		);
	}

	/** Whether the current user may set_show_in_public (RFC §4). */
	get canSetShowInPublic(): boolean {
		return this.hasCapability(
			"set_show_in_public",
			"server.set_show_in_public",
		);
	}

	/** Whether the current user may set_team_enabled (RFC §4). */
	get canSetTeamEnabled(): boolean {
		return this.hasCapability("set_team_enabled", "server.set_team_enabled");
	}

	/** Whether the current user may set_version_override (RFC §4). */
	get canSetVersionOverride(): boolean {
		return this.hasCapability(
			"set_version_override",
			"server.set_version_override",
		);
	}

	/** Whether the current user may manage_bot (RFC §4). */
	get canManageBot(): boolean {
		return this.hasCapability("manage_bot", "server.manage_bot");
	}

	/** Whether the current user may manage_voting (RFC §4). */
	get canManageVoting(): boolean {
		return this.hasCapability("manage_voting", "server.manage_voting");
	}

	/** Whether the current user may set_maintenance (RFC §4). */
	get canSetMaintenance(): boolean {
		return this.hasCapability("set_maintenance", "server.set_maintenance");
	}

	/** Whether the current user may set_motd (RFC §4). */
	get canSetMotd(): boolean {
		return this.hasCapability("set_motd", "server.set_motd");
	}

	/** Whether the current user may manage_social (RFC §4). */
	get canManageSocial(): boolean {
		return this.hasCapability("manage_social", "server.manage_social");
	}

	/** Whether the current user may import (RFC §4). */
	get canImport(): boolean {
		return this.hasCapability("import", "server.import");
	}

	/** server.tickets.list */
	async ticketsList(params?: {
		page?: number;
		limit?: number;
		status?: string;
	}): Promise<Ticket[]> {
		const data = await this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/community/tickets/server/${this.id}`,
			query: {
				page: params?.page,
				limit: params?.limit,
				status: params?.status,
			},
		});
		const items = Array.isArray(data)
			? data
			: ((data as { items?: unknown[] }).items ?? []);
		return this.ctx.hydrateMany("Ticket", items) as Ticket[];
	}

	/** server.player_stats */
	async playerStats(params?: {
		userId?: string;
		minecraftUuid?: string;
		minecraftNick?: string;
		namedServerId?: number;
	}): Promise<models.PlayerStats> {
		return this.ctx.transport.request<models.PlayerStats>({
			method: "GET",
			path: `/v1/monitoring/servers/${this.id}/player-stats`,
			query: {
				user_id: params?.userId,
				minecraft_uuid: params?.minecraftUuid,
				minecraft_nick: params?.minecraftNick,
				named_server_id: params?.namedServerId,
			},
		});
	}

	/** server.bot */
	async bot(): Promise<models.ServerBot> {
		return this.ctx.transport.request<models.ServerBot>({
			method: "GET",
			path: `/v1/servers/${this.id}/bot`,
		});
	}

	/** server.events.list */
	async eventsList(params?: {
		period?: string;
		limit?: number;
		page?: number;
		eventTypes?: string;
		player?: string;
	}): Promise<models.ServerEvents> {
		return this.ctx.transport.request<models.ServerEvents>({
			method: "GET",
			path: `/v1/servers/${this.id}/events`,
			query: {
				period: params?.period,
				limit: params?.limit,
				page: params?.page,
				event_types: params?.eventTypes,
				player: params?.player,
			},
		});
	}

	/** server.history.list */
	async historyList(params?: {
		period?: string;
	}): Promise<models.HistoryResponse> {
		return this.ctx.transport.request<models.HistoryResponse>({
			method: "GET",
			path: `/v1/servers/${this.id}/history`,
			query: { period: params?.period },
		});
	}

	/** server.icons.list */
	async iconsList(): Promise<models.IconHistory> {
		return this.ctx.transport.request<models.IconHistory>({
			method: "GET",
			path: `/v1/servers/${this.id}/icons/history`,
		});
	}

	/** server.voting */
	async voting(): Promise<models.VotingLinks> {
		return this.ctx.transport.request<models.VotingLinks>({
			method: "GET",
			path: `/v1/servers/${this.id}/integrations/voting`,
		});
	}

	/** server.launch_manifest */
	async launchManifest(): Promise<models.ServerLaunchManifest> {
		return this.ctx.transport.request<models.ServerLaunchManifest>({
			method: "GET",
			path: `/v1/servers/${this.id}/launch-manifest`,
		});
	}

	/** server.live */
	async live(): Promise<models.LiveStatus> {
		return this.ctx.transport.request<models.LiveStatus>({
			method: "GET",
			path: `/v1/servers/${this.id}/live`,
		});
	}

	/** server.maintenance */
	async maintenance(): Promise<models.ServerMaintenance> {
		return this.ctx.transport.request<models.ServerMaintenance>({
			method: "GET",
			path: `/v1/servers/${this.id}/maintenance`,
		});
	}

	/** server.ownership */
	async ownership(): Promise<models.ServerOwnership> {
		return this.ctx.transport.request<models.ServerOwnership>({
			method: "GET",
			path: `/v1/servers/${this.id}/ownership`,
		});
	}

	/** server.root */
	async root(): Promise<models.ServerRoot> {
		return this.ctx.transport.request<models.ServerRoot>({
			method: "GET",
			path: `/v1/servers/${this.id}/root`,
		});
	}

	/** server.discord */
	async discord(): Promise<models.DiscordLink> {
		return this.ctx.transport.request<models.DiscordLink>({
			method: "GET",
			path: `/v1/servers/${this.id}/social/discord`,
		});
	}

	/** server.social */
	async social(): Promise<models.SocialLinks> {
		return this.ctx.transport.request<models.SocialLinks>({
			method: "GET",
			path: `/v1/servers/${this.id}/social/links`,
		});
	}

	/** server.stats */
	async stats(params?: { period?: string }): Promise<models.ServerStats> {
		return this.ctx.transport.request<models.ServerStats>({
			method: "GET",
			path: `/v1/servers/${this.id}/stats`,
			query: { period: params?.period },
		});
	}

	/** server.subservers.list */
	async subserversList(): Promise<models.ServerSubservers> {
		return this.ctx.transport.request<models.ServerSubservers>({
			method: "GET",
			path: `/v1/servers/${this.id}/subservers`,
		});
	}

	/** server.team */
	async team(): Promise<models.ServerTeamPublic> {
		return this.ctx.transport.request<models.ServerTeamPublic>({
			method: "GET",
			path: `/v1/servers/${this.id}/team`,
		});
	}

	/** server.team_sync.targets */
	async teamSyncTargets(params?: {
		roleId?: string;
	}): Promise<models.MinecraftGroupTargets> {
		return this.ctx.transport.request<models.MinecraftGroupTargets>({
			method: "GET",
			path: `/v1/servers/${this.id}/team-sync/minecraft-targets`,
			query: { role_id: params?.roleId },
		});
	}

	/** server.team.manage */
	async teamManage(): Promise<models.ServerTeamManage> {
		return this.ctx.transport.request<models.ServerTeamManage>({
			method: "GET",
			path: `/v1/servers/${this.id}/team/manage`,
		});
	}

	/** server.telemetry */
	async telemetry(params?: {
		period?: string;
		source?: string;
	}): Promise<models.ServerTelemetry> {
		return this.ctx.transport.request<models.ServerTelemetry>({
			method: "GET",
			path: `/v1/servers/${this.id}/telemetry`,
			query: { period: params?.period, source: params?.source },
		});
	}

	/** server.translations.list */
	async translationsList(): Promise<models.ServerTranslations> {
		return this.ctx.transport.request<models.ServerTranslations>({
			method: "GET",
			path: `/v1/servers/${this.id}/translations`,
		});
	}

	/** server.whitelist.applications */
	async whitelistApplications(params?: {
		status?: string;
		page?: number;
		perPage?: number;
	}): Promise<Application[]> {
		const data = await this.ctx.transport.request<unknown>({
			method: "GET",
			path: `/v1/servers/${this.id}/whitelist/applications`,
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

	/** server.whitelist */
	async whitelist(): Promise<models.WhitelistConfig> {
		return this.ctx.transport.request<models.WhitelistConfig>({
			method: "GET",
			path: `/v1/servers/${this.id}/whitelist/config`,
		});
	}

	/** server.whitelist.direct */
	async whitelistDirect(params?: {
		page?: number;
		perPage?: number;
	}): Promise<models.WhitelistDirectEntryPage> {
		return this.ctx.transport.request<models.WhitelistDirectEntryPage>({
			method: "GET",
			path: `/v1/servers/${this.id}/whitelist/direct`,
			query: { page: params?.page, per_page: params?.perPage },
		});
	}

	/** server.whitelist.imports */
	async whitelistImports(params?: {
		status?: string;
		page?: number;
		perPage?: number;
	}): Promise<models.WhitelistImportJobPage> {
		return this.ctx.transport.request<models.WhitelistImportJobPage>({
			method: "GET",
			path: `/v1/servers/${this.id}/whitelist/imports`,
			query: {
				status: params?.status,
				page: params?.page,
				per_page: params?.perPage,
			},
		});
	}

	/** server.whitelist.import */
	async whitelistImport(
		jobId: string | number,
	): Promise<models.WhitelistImportJob> {
		return this.ctx.transport.request<models.WhitelistImportJob>({
			method: "GET",
			path: `/v1/servers/${this.id}/whitelist/imports/${jobId}`,
		});
	}

	/** server.change_address */
	async changeAddress(body: models.ServerChangeAddressRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/change-address`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.change_slug */
	async changeSlug(body: models.ServerChangeSlugRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/change-slug`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.force_ping */
	async forcePing(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/force-ping`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.rename */
	async rename(body: models.ServerRenameRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/rename`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_bedrock_port */
	async setBedrockPort(
		body: models.ServerSetBedrockPortRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-bedrock-port`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_description */
	async setDescription(
		body: models.ServerSetDescriptionRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-description`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_parent */
	async setParent(body: models.ServerSetParentRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-parent`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_ping_port */
	async setPingPort(body: models.ServerSetPingPortRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-ping-port`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_regions */
	async setRegions(body: models.ServerSetRegionsRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-regions`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_role */
	async setRole(body: models.ServerSetRoleRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-role`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_show_description */
	async setShowDescription(
		body: models.ServerSetShowDescriptionRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-show-description`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_show_in_public */
	async setShowInPublic(
		body: models.ServerSetShowInPublicRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-show-in-public`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_team_enabled */
	async setTeamEnabled(
		body: models.ServerSetTeamEnabledRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-team-enabled`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_version_override */
	async setVersionOverride(
		body: models.ServerSetVersionOverrideRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-version-override`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.bot.update */
	async botUpdate(body: models.ServerBotUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/bot`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.issue_gateway_token */
	async issueGatewayToken(body: models.GatewayTokenRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/gateway-token`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.icons.upload */
	async iconsUpload(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/icon`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.icons.select */
	async iconsSelect(body: models.IconSelectRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/icon/select`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.voting.update */
	async votingUpdate(body: models.VotingLinksUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/integrations/voting`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.maintenance.update */
	async maintenanceUpdate(
		body: models.ServerMaintenanceUpdateRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/maintenance`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.motd.update */
	async motdUpdate(body: models.ServerMotdUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/motd`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.discord.unlink */
	async discordUnlink(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/social/discord`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.discord.update */
	async discordUpdate(body: models.DiscordLinkUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/social/discord`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.discord.verify */
	async discordVerify(body: models.DiscordVerifyRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/social/discord/verify`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.social.update */
	async socialUpdate(body: models.SocialLinksUpdateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/social/links`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.social.verify */
	async socialVerify(body: models.SocialLinkVerifyRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/social/verify`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.subservers.issue_link_code */
	async subserversIssueLinkCode(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/subservers/auto-link-code`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.members.create */
	async membersCreate(body: models.TeamMemberCreateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/team/members`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.members.delete */
	async membersDelete(memberId: string | number): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/team/members/${memberId}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.members.update */
	async membersUpdate(
		memberId: string | number,
		body: models.TeamMemberUpdateRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/team/members/${memberId}`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.roles.create */
	async rolesCreate(body: models.TeamRoleCreateRequest): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/team/roles`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.roles.delete */
	async rolesDelete(roleId: string | number): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/team/roles/${roleId}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.roles.update */
	async rolesUpdate(
		roleId: string | number,
		body: models.TeamRoleUpdateRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/team/roles/${roleId}`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.translations.delete */
	async translationsDelete(field: string, locale: string): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/translations/${field}/${locale}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.translations.set */
	async translationsSet(
		field: string,
		locale: string,
		body: models.ServerTranslationUpsertRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/translations/${field}/${locale}`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.whitelist.add_direct */
	async whitelistAddDirect(
		body: models.WhitelistDirectAddRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/whitelist/direct`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.whitelist.remove_direct */
	async whitelistRemoveDirect(entryId: string | number): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/whitelist/direct/${entryId}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.whitelist.create_import */
	async whitelistCreateImport(
		body: models.WhitelistImportRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/whitelist/imports`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.whitelist.pull_minecraft_import */
	async whitelistPullMinecraftImport(
		body: models.WhitelistMinecraftPullRequest,
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/whitelist/imports/pull-minecraft`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** Subscribe to `monitoring.live_status` (public realtime). */
	onLiveStatus(): TopicSubscription {
		return new TopicSubscription(this.ctx.realtime, "monitoring.live_status");
	}

	/** Subscribe to `project.telemetry.{server_id}` (private realtime). */
	onTelemetry(): TopicSubscription {
		return new TopicSubscription(
			this.ctx.realtime,
			`project.telemetry.${this.id}`,
		);
	}

	/** Subscribe to `project.tickets.{server_id}` (private realtime). */
	onTickets(): TopicSubscription {
		return new TopicSubscription(
			this.ctx.realtime,
			`project.tickets.${this.id}`,
		);
	}
}
