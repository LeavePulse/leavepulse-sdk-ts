// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { TopicSubscription } from "../runtime/realtime";
import { Resource } from "../runtime/resource";
import type { components } from "../types";

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

	/** server.change_address */
	async changeAddress(
		body: components["schemas"]["ServerChangeAddressRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/change-address`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.change_slug */
	async changeSlug(
		body: components["schemas"]["ServerChangeSlugRequest"],
	): Promise<this> {
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
	async rename(
		body: components["schemas"]["ServerRenameRequest"],
	): Promise<this> {
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
		body: components["schemas"]["ServerSetBedrockPortRequest"],
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
		body: components["schemas"]["ServerSetDescriptionRequest"],
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
	async setParent(
		body: components["schemas"]["ServerSetParentRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-parent`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_ping_port */
	async setPingPort(
		body: components["schemas"]["ServerSetPingPortRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-ping-port`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_regions */
	async setRegions(
		body: components["schemas"]["ServerSetRegionsRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/actions/set-regions`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.set_role */
	async setRole(
		body: components["schemas"]["ServerSetRoleRequest"],
	): Promise<this> {
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
		body: components["schemas"]["ServerSetShowDescriptionRequest"],
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
		body: components["schemas"]["ServerSetShowInPublicRequest"],
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
		body: components["schemas"]["ServerSetTeamEnabledRequest"],
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
		body: components["schemas"]["ServerSetVersionOverrideRequest"],
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
	async botUpdate(
		body: components["schemas"]["ServerBotUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/bot`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.issue_gateway_token */
	async issueGatewayToken(
		body: components["schemas"]["GatewayTokenRequest"],
	): Promise<this> {
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
	async iconsSelect(
		body: components["schemas"]["IconSelectRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/icon/select`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.voting.update */
	async votingUpdate(
		body: components["schemas"]["VotingLinksUpdateRequest"],
	): Promise<this> {
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
		body: components["schemas"]["ServerMaintenanceUpdateRequest"],
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
	async motdUpdate(
		body: components["schemas"]["ServerMotdUpdateRequest"],
	): Promise<this> {
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
	async discordUpdate(
		body: components["schemas"]["DiscordLinkUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/social/discord`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.discord.verify */
	async discordVerify(
		body: components["schemas"]["DiscordVerifyRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/social/discord/verify`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.social.update */
	async socialUpdate(
		body: components["schemas"]["SocialLinksUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/social/links`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.social.verify */
	async socialVerify(
		body: components["schemas"]["SocialLinkVerifyRequest"],
	): Promise<this> {
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
	async membersCreate(
		body: components["schemas"]["TeamMemberCreateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/team/members`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.members.delete */
	async membersDelete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/team/members/${this.data["member_id"]}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.members.update */
	async membersUpdate(
		body: components["schemas"]["TeamMemberUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/team/members/${this.data["member_id"]}`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.roles.create */
	async rolesCreate(
		body: components["schemas"]["TeamRoleCreateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/servers/${this.id}/team/roles`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.roles.delete */
	async rolesDelete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/team/roles/${this.data["role_id"]}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.roles.update */
	async rolesUpdate(
		body: components["schemas"]["TeamRoleUpdateRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/team/roles/${this.data["role_id"]}`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.translations.delete */
	async translationsDelete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/translations/${this.data["field"]}/${this.data["locale"]}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.translations.set */
	async translationsSet(
		body: components["schemas"]["ServerTranslationUpsertRequest"],
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "PATCH",
			path: `/v1/servers/${this.id}/translations/${this.data["field"]}/${this.data["locale"]}`,
			body,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.whitelist.add_direct */
	async whitelistAddDirect(
		body: components["schemas"]["WhitelistDirectAddRequest"],
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
	async whitelistRemoveDirect(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/servers/${this.id}/whitelist/direct/${this.data["entry_id"]}`,
		});
		this.ctx.hydrate("Server", data);
		return this;
	}

	/** server.whitelist.create_import */
	async whitelistCreateImport(
		body: components["schemas"]["WhitelistImportRequest"],
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
		body: components["schemas"]["WhitelistMinecraftPullRequest"],
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
