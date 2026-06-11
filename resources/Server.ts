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
		const data = await fetchCachedOrThrow(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}` },
		);
		let hydrated = data as Record<string, unknown>;
		const id = extractId(hydrated);
		return this.ctx.cache.upsertAlias(
			"Server",
			this.id,
			id,
			hydrated,
			() => this,
		) as this;
	}

	/** Load this Server's data (alias of refresh). */
	fetch(): Promise<this> {
		return this.refresh();
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
					path: `/v1/community/tickets/server/${this.id}`,
					query: { page: page, limit: perPage, status: params?.status },
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

	/** server.player_stats */
	async playerStats(params?: {
		userId?: Snowflake;
		minecraftUuid?: string;
		minecraftNick?: string;
		namedServerId?: number;
	}): Promise<models.PlayerStats> {
		return fetchCachedOrThrow<models.PlayerStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/monitoring/servers/${this.id}/player-stats`,
				query: {
					user_id: params?.userId,
					minecraft_uuid: params?.minecraftUuid,
					minecraft_nick: params?.minecraftNick,
					named_server_id: params?.namedServerId,
				},
			},
		);
	}

	/** server.bot */
	async bot(): Promise<models.ServerBot> {
		return fetchCachedOrThrow<models.ServerBot>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/bot` },
		);
	}

	/** server.events.list */
	async eventsList(params?: {
		period?: string;
		limit?: number;
		page?: number;
		eventTypes?: string;
		player?: string;
	}): Promise<models.ServerEvents> {
		return fetchCachedOrThrow<models.ServerEvents>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/events`,
				query: {
					period: params?.period,
					limit: params?.limit,
					page: params?.page,
					event_types: params?.eventTypes,
					player: params?.player,
				},
			},
		);
	}

	/** server.history.list */
	async historyList(params?: {
		period?: string;
	}): Promise<models.HistoryResponse> {
		return fetchCachedOrThrow<models.HistoryResponse>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/history`,
				query: { period: params?.period },
			},
		);
	}

	/** server.host_risk_evidence */
	async hostRiskEvidence(): Promise<models.ServerHostRiskEvidence> {
		return fetchCachedOrThrow<models.ServerHostRiskEvidence>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/host-risk/evidence` },
		);
	}

	/** server.icons.list */
	async iconsList(): Promise<models.IconHistory> {
		return fetchCachedOrThrow<models.IconHistory>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/icons/history` },
		);
	}

	/** server.voting */
	async voting(): Promise<models.VotingLinks> {
		return fetchCachedOrThrow<models.VotingLinks>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/integrations/voting` },
		);
	}

	/** server.launch_manifest */
	async launchManifest(): Promise<models.ServerLaunchManifest> {
		return fetchCachedOrThrow<models.ServerLaunchManifest>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/launch-manifest` },
		);
	}

	/** server.live */
	async live(): Promise<models.LiveStatus> {
		return fetchCachedOrThrow<models.LiveStatus>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/live` },
		);
	}

	/** server.maintenance */
	async maintenance(): Promise<models.ServerMaintenance> {
		return fetchCachedOrThrow<models.ServerMaintenance>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/maintenance` },
		);
	}

	/** server.ownership */
	async ownership(): Promise<models.ServerOwnership> {
		return fetchCachedOrThrow<models.ServerOwnership>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/ownership` },
		);
	}

	/** server.root */
	async root(): Promise<models.ServerRoot> {
		return fetchCachedOrThrow<models.ServerRoot>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/root` },
		);
	}

	/** server.discord */
	async discord(): Promise<models.DiscordLink> {
		return fetchCachedOrThrow<models.DiscordLink>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/social/discord` },
		);
	}

	/** server.social */
	async social(): Promise<models.SocialLinks> {
		return fetchCachedOrThrow<models.SocialLinks>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/social/links` },
		);
	}

	/** server.stats */
	async stats(params?: { period?: string }): Promise<models.ServerStats> {
		return fetchCachedOrThrow<models.ServerStats>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/stats`,
				query: { period: params?.period },
			},
		);
	}

	/** server.subservers.list */
	async subserversList(): Promise<models.ServerSubservers> {
		return fetchCachedOrThrow<models.ServerSubservers>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/subservers` },
		);
	}

	/** server.team */
	async team(): Promise<models.ServerTeamPublic> {
		return fetchCachedOrThrow<models.ServerTeamPublic>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/team` },
		);
	}

	/** server.team_sync.targets */
	async teamSyncTargets(params?: {
		roleId?: Snowflake;
	}): Promise<models.MinecraftGroupTargets> {
		return fetchCachedOrThrow<models.MinecraftGroupTargets>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/team-sync/minecraft-targets`,
				query: { role_id: params?.roleId },
			},
		);
	}

	/** server.team.manage */
	async teamManage(): Promise<models.ServerTeamManage> {
		return fetchCachedOrThrow<models.ServerTeamManage>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/team/manage` },
		);
	}

	/** server.telemetry */
	async telemetry(params?: {
		period?: string;
		source?: string;
	}): Promise<models.ServerTelemetry> {
		return fetchCachedOrThrow<models.ServerTelemetry>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/telemetry`,
				query: { period: params?.period, source: params?.source },
			},
		);
	}

	/** server.translations.list */
	async translationsList(): Promise<models.ServerTranslations> {
		return fetchCachedOrThrow<models.ServerTranslations>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/translations` },
		);
	}

	/** server.whitelist.public */
	async whitelistPublic(params?: {
		bindingId?: number;
		locale?: string;
	}): Promise<models.ServerWhitelistPublicConfig> {
		return fetchCachedOrThrow<models.ServerWhitelistPublicConfig>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/whitelist`,
				query: { binding_id: params?.bindingId, locale: params?.locale },
			},
		);
	}

	/** server.whitelist.applications */
	async whitelistApplications(params?: {
		status?: string;
		page?: number;
		perPage?: number;
	}): Promise<models.WhitelistApplicationList> {
		return fetchCachedOrThrow<models.WhitelistApplicationList>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/whitelist/applications`,
				query: {
					status: params?.status,
					page: params?.page,
					per_page: params?.perPage,
				},
			},
		);
	}

	/** server.whitelist */
	async whitelist(): Promise<models.WhitelistConfig> {
		return fetchCachedOrThrow<models.WhitelistConfig>(
			this.ctx.transport,
			this.ctx.etagStore,
			{ method: "GET", path: `/v1/servers/${this.id}/whitelist/config` },
		);
	}

	/** server.whitelist.direct */
	async whitelistDirect(params?: {
		page?: number;
		perPage?: number;
	}): Promise<models.WhitelistDirectEntryPage> {
		return fetchCachedOrThrow<models.WhitelistDirectEntryPage>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/whitelist/direct`,
				query: { page: params?.page, per_page: params?.perPage },
			},
		);
	}

	/** server.whitelist.imports */
	async whitelistImports(params?: {
		status?: string;
		page?: number;
		perPage?: number;
	}): Promise<models.WhitelistImportJobPage> {
		return fetchCachedOrThrow<models.WhitelistImportJobPage>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/whitelist/imports`,
				query: {
					status: params?.status,
					page: params?.page,
					per_page: params?.perPage,
				},
			},
		);
	}

	/** server.whitelist.import */
	async whitelistImport(jobId: Snowflake): Promise<models.WhitelistImportJob> {
		return fetchCachedOrThrow<models.WhitelistImportJob>(
			this.ctx.transport,
			this.ctx.etagStore,
			{
				method: "GET",
				path: `/v1/servers/${this.id}/whitelist/imports/${jobId}`,
			},
		);
	}

	/** server.change_address */
	async changeAddress(
		body: models.ServerChangeAddressRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/change-address`,
			body,
		});
	}

	/** server.change_slug */
	async changeSlug(
		body: models.ServerChangeSlugRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/change-slug`,
			body,
		});
	}

	/** server.force_ping */
	async forcePing(): Promise<models.ForcePingResult> {
		return this.ctx.transport.request<models.ForcePingResult>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/force-ping`,
		});
	}

	/** server.rename */
	async rename(body: models.ServerRenameRequest): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/rename`,
			body,
		});
	}

	/** server.set_bedrock_port */
	async setBedrockPort(
		body: models.ServerSetBedrockPortRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-bedrock-port`,
			body,
		});
	}

	/** server.set_description */
	async setDescription(
		body: models.ServerSetDescriptionRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-description`,
			body,
		});
	}

	/** server.set_parent */
	async setParent(
		body: models.ServerSetParentRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-parent`,
			body,
		});
	}

	/** server.set_ping_port */
	async setPingPort(
		body: models.ServerSetPingPortRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-ping-port`,
			body,
		});
	}

	/** server.set_regions */
	async setRegions(
		body: models.ServerSetRegionsRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-regions`,
			body,
		});
	}

	/** server.set_role */
	async setRole(body: models.ServerSetRoleRequest): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-role`,
			body,
		});
	}

	/** server.set_show_description */
	async setShowDescription(
		body: models.ServerSetShowDescriptionRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-show-description`,
			body,
		});
	}

	/** server.set_show_in_public */
	async setShowInPublic(
		body: models.ServerSetShowInPublicRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-show-in-public`,
			body,
		});
	}

	/** server.set_team_enabled */
	async setTeamEnabled(
		body: models.ServerSetTeamEnabledRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-team-enabled`,
			body,
		});
	}

	/** server.set_version_override */
	async setVersionOverride(
		body: models.ServerSetVersionOverrideRequest,
	): Promise<models.ServerCard> {
		return this.ctx.transport.request<models.ServerCard>({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-version-override`,
			body,
		});
	}

	/** server.bot.update */
	async botUpdate(
		body: models.ServerBotUpdateRequest,
	): Promise<models.ServerBot> {
		return this.ctx.transport.request<models.ServerBot>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/bot`,
			body,
		});
	}

	/** server.issue_gateway_token */
	async issueGatewayToken(
		body: models.GatewayTokenRequest,
	): Promise<models.GatewayToken> {
		return this.ctx.transport.request<models.GatewayToken>({
			method: "POST",
			path: `/v1/servers/${this.id}/gateway-token`,
			body,
		});
	}

	/** server.icons.upload */
	async iconsUpload(
		file: LeavePulseFile,
		sync?: string,
	): Promise<models.ServerMediaSummary> {
		return this.ctx.transport.request<models.ServerMediaSummary>({
			method: "POST",
			path: `/v1/servers/${this.id}/icon`,
			multipart: { fileField: "file", file, fields: { sync: sync } },
		});
	}

	/** server.icons.select */
	async iconsSelect(
		body: models.IconSelectRequest,
	): Promise<models.ServerMediaSummary> {
		return this.ctx.transport.request<models.ServerMediaSummary>({
			method: "POST",
			path: `/v1/servers/${this.id}/icon/select`,
			body,
		});
	}

	/** server.voting.update */
	async votingUpdate(
		body: models.VotingLinksUpdateRequest,
	): Promise<models.VotingLinks> {
		return this.ctx.transport.request<models.VotingLinks>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/integrations/voting`,
			body,
		});
	}

	/** server.maintenance.update */
	async maintenanceUpdate(
		body: models.ServerMaintenanceUpdateRequest,
	): Promise<models.ServerMaintenance> {
		return this.ctx.transport.request<models.ServerMaintenance>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/maintenance`,
			body,
		});
	}

	/** server.motd.update */
	async motdUpdate(
		body: models.ServerMotdUpdateRequest,
	): Promise<models.ServerMotdSummary> {
		return this.ctx.transport.request<models.ServerMotdSummary>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/motd`,
			body,
		});
	}

	/** server.discord.unlink */
	async discordUnlink(): Promise<models.DiscordLink> {
		return this.ctx.transport.request<models.DiscordLink>({
			method: "DELETE",
			path: `/v1/servers/${this.id}/social/discord`,
		});
	}

	/** server.discord.update */
	async discordUpdate(
		body: models.DiscordLinkUpdateRequest,
	): Promise<models.DiscordLink> {
		return this.ctx.transport.request<models.DiscordLink>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/social/discord`,
			body,
		});
	}

	/** server.discord.verify */
	async discordVerify(
		body: models.DiscordVerifyRequest,
	): Promise<models.DiscordLink> {
		return this.ctx.transport.request<models.DiscordLink>({
			method: "POST",
			path: `/v1/servers/${this.id}/social/discord/verify`,
			body,
		});
	}

	/** server.social.update */
	async socialUpdate(
		body: models.SocialLinksUpdateRequest,
	): Promise<models.SocialLinks> {
		return this.ctx.transport.request<models.SocialLinks>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/social/links`,
			body,
		});
	}

	/** server.social.verify */
	async socialVerify(
		body: models.SocialLinkVerifyRequest,
	): Promise<models.SocialLinkVerification> {
		return this.ctx.transport.request<models.SocialLinkVerification>({
			method: "POST",
			path: `/v1/servers/${this.id}/social/verify`,
			body,
		});
	}

	/** server.subservers.issue_link_code */
	async subserversIssueLinkCode(): Promise<models.PluginVerification> {
		return this.ctx.transport.request<models.PluginVerification>({
			method: "POST",
			path: `/v1/servers/${this.id}/subservers/auto-link-code`,
		});
	}

	/** server.members.create */
	async membersCreate(
		body: models.TeamMemberCreateRequest,
	): Promise<models.TeamMemberItem> {
		return this.ctx.transport.request<models.TeamMemberItem>({
			method: "POST",
			path: `/v1/servers/${this.id}/team/members`,
			body,
		});
	}

	/** server.members.delete */
	async membersDelete(
		memberId: Snowflake,
	): Promise<models.TeamMemberDeleteResponse> {
		return this.ctx.transport.request<models.TeamMemberDeleteResponse>({
			method: "DELETE",
			path: `/v1/servers/${this.id}/team/members/${memberId}`,
		});
	}

	/** server.members.update */
	async membersUpdate(
		memberId: Snowflake,
		body: models.TeamMemberUpdateRequest,
	): Promise<models.TeamMemberItem> {
		return this.ctx.transport.request<models.TeamMemberItem>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/team/members/${memberId}`,
			body,
		});
	}

	/** server.roles.create */
	async rolesCreate(
		body: models.TeamRoleCreateRequest,
	): Promise<models.TeamRoleItem> {
		return this.ctx.transport.request<models.TeamRoleItem>({
			method: "POST",
			path: `/v1/servers/${this.id}/team/roles`,
			body,
		});
	}

	/** server.roles.delete */
	async rolesDelete(roleId: Snowflake): Promise<models.TeamRoleDeleteResponse> {
		return this.ctx.transport.request<models.TeamRoleDeleteResponse>({
			method: "DELETE",
			path: `/v1/servers/${this.id}/team/roles/${roleId}`,
		});
	}

	/** server.roles.update */
	async rolesUpdate(
		roleId: Snowflake,
		body: models.TeamRoleUpdateRequest,
	): Promise<models.TeamRoleItem> {
		return this.ctx.transport.request<models.TeamRoleItem>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/team/roles/${roleId}`,
			body,
		});
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
	): Promise<models.ServerTranslation> {
		return this.ctx.transport.request<models.ServerTranslation>({
			method: "PATCH",
			path: `/v1/servers/${this.id}/translations/${field}/${locale}`,
			body,
		});
	}

	/** server.whitelist.add_direct */
	async whitelistAddDirect(
		body: models.WhitelistDirectAddRequest,
	): Promise<models.WhitelistDirectEntry> {
		return this.ctx.transport.request<models.WhitelistDirectEntry>({
			method: "POST",
			path: `/v1/servers/${this.id}/whitelist/direct`,
			body,
		});
	}

	/** server.whitelist.remove_direct */
	async whitelistRemoveDirect(
		entryId: Snowflake,
	): Promise<models.WhitelistDirectRemoval> {
		return this.ctx.transport.request<models.WhitelistDirectRemoval>({
			method: "DELETE",
			path: `/v1/servers/${this.id}/whitelist/direct/${entryId}`,
		});
	}

	/** server.whitelist.create_import */
	async whitelistCreateImport(
		body: models.WhitelistImportRequest,
	): Promise<models.WhitelistImportJob> {
		return this.ctx.transport.request<models.WhitelistImportJob>({
			method: "POST",
			path: `/v1/servers/${this.id}/whitelist/imports`,
			body,
		});
	}

	/** server.whitelist.pull_minecraft_import */
	async whitelistPullMinecraftImport(
		body: models.WhitelistMinecraftPullRequest,
	): Promise<models.WhitelistImportJob> {
		return this.ctx.transport.request<models.WhitelistImportJob>({
			method: "POST",
			path: `/v1/servers/${this.id}/whitelist/imports/pull-minecraft`,
			body,
		});
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
