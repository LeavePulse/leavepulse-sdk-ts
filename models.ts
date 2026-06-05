// Named type aliases over the generated schema maps. Generated — do not edit.
import type { components } from "./types";
import type { components as authComponents } from "./auth-types";

export type AccountDeletionResult =
	components["schemas"]["AccountDeletionResult"];
export type AccountExport = components["schemas"]["AccountExport"];
export type AdminChangeProjectSlugRequest =
	components["schemas"]["AdminChangeProjectSlugRequest"];
export type AdminDeleteResponse = components["schemas"]["AdminDeleteResponse"];
export type AdminForceCreateRequest =
	components["schemas"]["AdminForceCreateRequest"];
export type AdminProject = components["schemas"]["AdminProject"];
export type AdminProjectDeleteResponse =
	components["schemas"]["AdminProjectDeleteResponse"];
export type AdminProjectListResponse =
	components["schemas"]["AdminProjectListResponse"];
export type AdminRenameProjectRequest =
	components["schemas"]["AdminRenameProjectRequest"];
export type AdminRole = components["schemas"]["AdminRole"];
export type AdminRoleDeleteResponse =
	components["schemas"]["AdminRoleDeleteResponse"];
export type AdminRoleListResponse =
	components["schemas"]["AdminRoleListResponse"];
export type AdminRoleRequest = components["schemas"]["AdminRoleRequest"];
export type AdminServerListResponse =
	components["schemas"]["AdminServerListResponse"];
export type AdminServerSummary = components["schemas"]["AdminServerSummary"];
export type AdminServerUpdateRequest =
	components["schemas"]["AdminServerUpdateRequest"];
export type AdminSetProjectOnlineStrategyRequest =
	components["schemas"]["AdminSetProjectOnlineStrategyRequest"];
export type AdminSetProjectRolloutModeRequest =
	components["schemas"]["AdminSetProjectRolloutModeRequest"];
export type AdminTransferOwnershipRequest =
	components["schemas"]["AdminTransferOwnershipRequest"];
export type AdminUserDetail = components["schemas"]["AdminUserDetail"];
export type AdminUserDiscordUpdateRequest =
	components["schemas"]["AdminUserDiscordUpdateRequest"];
export type AdminUserListResponse =
	components["schemas"]["AdminUserListResponse"];
export type AdminUserUpdateRequest =
	components["schemas"]["AdminUserUpdateRequest"];
export type AvatarUrlRequest = components["schemas"]["AvatarUrlRequest"];
export type BatchPublicProfilesRequest =
	components["schemas"]["BatchPublicProfilesRequest"];
export type BatchPublicProfilesResponse =
	components["schemas"]["BatchPublicProfilesResponse"];
export type BatchResolveRequest = components["schemas"]["BatchResolveRequest"];
export type BatchResolveResponse =
	components["schemas"]["BatchResolveResponse"];
export type BridgeSettings = components["schemas"]["BridgeSettings"];
export type BridgeSettingsUpdateRequest =
	components["schemas"]["BridgeSettingsUpdateRequest"];
export type Build = components["schemas"]["Build"];
export type BuildCreateRequest = components["schemas"]["BuildCreateRequest"];
export type BuildList = components["schemas"]["BuildList"];
export type BuildUpdateRequest = components["schemas"]["BuildUpdateRequest"];
export type CheckoutRequest = components["schemas"]["CheckoutRequest"];
export type CheckoutResult = components["schemas"]["CheckoutResult"];
export type Collaborator = components["schemas"]["Collaborator"];
export type CollaboratorAddRequest =
	components["schemas"]["CollaboratorAddRequest"];
export type CollaboratorList = components["schemas"]["CollaboratorList"];
export type Comment = components["schemas"]["Comment"];
export type CommentCreateRequest =
	components["schemas"]["CommentCreateRequest"];
export type CommentLikeResult = components["schemas"]["CommentLikeResult"];
export type CommentList = components["schemas"]["CommentList"];
export type CompleteLinkRequest = components["schemas"]["CompleteLinkRequest"];
export type CompleteLinkResult = components["schemas"]["CompleteLinkResult"];
export type ConfigBlobConfirmRequest =
	components["schemas"]["ConfigBlobConfirmRequest"];
export type ConfigBlobRef = components["schemas"]["ConfigBlobRef"];
export type ConfigBlobUpload = components["schemas"]["ConfigBlobUpload"];
export type ConfigBlobUploadRequest =
	components["schemas"]["ConfigBlobUploadRequest"];
export type CreateLinkTokenRequest =
	components["schemas"]["CreateLinkTokenRequest"];
export type CreateProjectServerRequest =
	components["schemas"]["CreateProjectServerRequest"];
export type CreateStatusOverrideRequest =
	components["schemas"]["CreateStatusOverrideRequest"];
export type DeleteAck = components["schemas"]["DeleteAck"];
export type DeleteBuildResult = components["schemas"]["DeleteBuildResult"];
export type DeleteCommentResult = components["schemas"]["DeleteCommentResult"];
export type DeleteStatusOverrideResponse =
	components["schemas"]["DeleteStatusOverrideResponse"];
export type DeviceApproveRequest =
	components["schemas"]["DeviceApproveRequest"];
export type DeviceApproveResult = components["schemas"]["DeviceApproveResult"];
export type DeviceStartRequest = components["schemas"]["DeviceStartRequest"];
export type DeviceStartResult = components["schemas"]["DeviceStartResult"];
export type DeviceTokenRequest = components["schemas"]["DeviceTokenRequest"];
export type DeviceTokenResult = components["schemas"]["DeviceTokenResult"];
export type DiscordLink = components["schemas"]["DiscordLink"];
export type DiscordLinkUpdateRequest =
	components["schemas"]["DiscordLinkUpdateRequest"];
export type DiscordRoleTargets = components["schemas"]["DiscordRoleTargets"];
export type DiscordVerifyRequest =
	components["schemas"]["DiscordVerifyRequest"];
export type DiscoveryApproveResult =
	components["schemas"]["DiscoveryApproveResult"];
export type DiscoveryCandidateEditRequest =
	components["schemas"]["DiscoveryCandidateEditRequest"];
export type DiscoveryIgnoreResult =
	components["schemas"]["DiscoveryIgnoreResult"];
export type DnsVerification = components["schemas"]["DnsVerification"];
export type EmailChangeRequest = components["schemas"]["EmailChangeRequest"];
export type EmailChangeResult = components["schemas"]["EmailChangeResult"];
export type FilterStats = components["schemas"]["FilterStats"];
export type ForcePingResult = components["schemas"]["ForcePingResult"];
export type GatewayToken = components["schemas"]["GatewayToken"];
export type GatewayTokenRequest = components["schemas"]["GatewayTokenRequest"];
export type GlobalServerStats = components["schemas"]["GlobalServerStats"];
export type HistoryResponse = components["schemas"]["HistoryResponse"];
export type IconHistory = components["schemas"]["IconHistory"];
export type IconSelectRequest = components["schemas"]["IconSelectRequest"];
export type ImportPull = components["schemas"]["ImportPull"];
export type ImportPullRequest = components["schemas"]["ImportPullRequest"];
export type ImportSharedBuildRequest =
	components["schemas"]["ImportSharedBuildRequest"];
export type LandingStats = components["schemas"]["LandingStats"];
export type LikedCommentIds = components["schemas"]["LikedCommentIds"];
export type LinkCompletionRequest =
	components["schemas"]["LinkCompletionRequest"];
export type LinkCompletionResponse =
	components["schemas"]["LinkCompletionResponse"];
export type LinkSession = components["schemas"]["LinkSession"];
export type LinkTokenResult = components["schemas"]["LinkTokenResult"];
export type LiveDashboardStats = components["schemas"]["LiveDashboardStats"];
export type LiveStatus = components["schemas"]["LiveStatus"];
export type MeResponse = components["schemas"]["MeResponse"];
export type MinecraftCandidateAccount =
	components["schemas"]["MinecraftCandidateAccount"];
export type MinecraftGroupTargets =
	components["schemas"]["MinecraftGroupTargets"];
export type MinecraftLinkCodeRequest =
	components["schemas"]["MinecraftLinkCodeRequest"];
export type MinecraftLinkCodeResponse =
	components["schemas"]["MinecraftLinkCodeResponse"];
export type MinecraftOfficialLinkStart =
	components["schemas"]["MinecraftOfficialLinkStart"];
export type MinecraftResolveRequest =
	components["schemas"]["MinecraftResolveRequest"];
export type MinecraftUnlinkResult =
	components["schemas"]["MinecraftUnlinkResult"];
export type MinecraftVerificationState =
	components["schemas"]["MinecraftVerificationState"];
export type MotdVerification = components["schemas"]["MotdVerification"];
export type MyComment = components["schemas"]["MyComment"];
export type MyDashboardStats = components["schemas"]["MyDashboardStats"];
export type MyPlayerStats = components["schemas"]["MyPlayerStats"];
export type MyServerIssuesPage = components["schemas"]["MyServerIssuesPage"];
export type MyServersPage = components["schemas"]["MyServersPage"];
export type NotificationPreferences =
	components["schemas"]["NotificationPreferences"];
export type NotificationPreferencesUpdate =
	components["schemas"]["NotificationPreferencesUpdate"];
export type OAuthLinkStartResponse =
	components["schemas"]["OAuthLinkStartResponse"];
export type OAuthProvidersResponse =
	components["schemas"]["OAuthProvidersResponse"];
export type OAuthUnlinkResult = components["schemas"]["OAuthUnlinkResult"];
export type Order = components["schemas"]["Order"];
export type OrderList = components["schemas"]["OrderList"];
export type PasswordChangeRequest =
	components["schemas"]["PasswordChangeRequest"];
export type PasswordMutationResult =
	components["schemas"]["PasswordMutationResult"];
export type PasswordResetConfirmRequest =
	components["schemas"]["PasswordResetConfirmRequest"];
export type PasswordResetRequest =
	components["schemas"]["PasswordResetRequest"];
export type PasswordResetResult = components["schemas"]["PasswordResetResult"];
export type PasswordSetRequest = components["schemas"]["PasswordSetRequest"];
export type PasswordStatus = components["schemas"]["PasswordStatus"];
export type PlayerSearchPage = components["schemas"]["PlayerSearchPage"];
export type PlayerStats = components["schemas"]["PlayerStats"];
export type PluginVerification = components["schemas"]["PluginVerification"];
export type PluginVerificationStartRequest =
	components["schemas"]["PluginVerificationStartRequest"];
export type Product = components["schemas"]["Product"];
export type ProfileActivityHeatmap =
	components["schemas"]["ProfileActivityHeatmap"];
export type ProfileGameplaySummary =
	components["schemas"]["ProfileGameplaySummary"];
export type ProfileOwnershipSummary =
	components["schemas"]["ProfileOwnershipSummary"];
export type ProfileUpdateRequest =
	components["schemas"]["ProfileUpdateRequest"];
export type ProjectCreateRequest =
	components["schemas"]["ProjectCreateRequest"];
export type ProjectCreateResponse =
	components["schemas"]["ProjectCreateResponse"];
export type ProjectDetail = components["schemas"]["ProjectDetail"];
export type ProjectEngagement = components["schemas"]["ProjectEngagement"];
export type ProjectEngagementStatus =
	components["schemas"]["ProjectEngagementStatus"];
export type ProjectFilterStats = components["schemas"]["ProjectFilterStats"];
export type ProjectHeartResult = components["schemas"]["ProjectHeartResult"];
export type ProjectListResponse = components["schemas"]["ProjectListResponse"];
export type ProjectLiveStatus = components["schemas"]["ProjectLiveStatus"];
export type ProjectResolveResponse =
	components["schemas"]["ProjectResolveResponse"];
export type ProjectStats = components["schemas"]["ProjectStats"];
export type ProjectThumbResult = components["schemas"]["ProjectThumbResult"];
export type ProjectWhitelistConfigItem =
	components["schemas"]["ProjectWhitelistConfigItem"];
export type PublicProfile = components["schemas"]["PublicProfile"];
export type RecentVotes = components["schemas"]["RecentVotes"];
export type ReportUserRequest = components["schemas"]["ReportUserRequest"];
export type ReportUserResult = components["schemas"]["ReportUserResult"];
export type RevokeOtherSessionsResult =
	components["schemas"]["RevokeOtherSessionsResult"];
export type RoleCatalog = components["schemas"]["RoleCatalog"];
export type ServerBot = components["schemas"]["ServerBot"];
export type ServerBotUpdateRequest =
	components["schemas"]["ServerBotUpdateRequest"];
export type ServerCard = components["schemas"]["ServerCard"];
export type ServerChangeAddressRequest =
	components["schemas"]["ServerChangeAddressRequest"];
export type ServerChangeSlugRequest =
	components["schemas"]["ServerChangeSlugRequest"];
export type ServerDetail = components["schemas"]["ServerDetail"];
export type ServerEvents = components["schemas"]["ServerEvents"];
export type ServerLaunchManifest =
	components["schemas"]["ServerLaunchManifest"];
export type ServerMaintenance = components["schemas"]["ServerMaintenance"];
export type ServerMaintenanceUpdateRequest =
	components["schemas"]["ServerMaintenanceUpdateRequest"];
export type ServerMediaSummary = components["schemas"]["ServerMediaSummary"];
export type ServerMotdSummary = components["schemas"]["ServerMotdSummary"];
export type ServerMotdUpdateRequest =
	components["schemas"]["ServerMotdUpdateRequest"];
export type ServerOwnership = components["schemas"]["ServerOwnership"];
export type ServerRenameRequest = components["schemas"]["ServerRenameRequest"];
export type ServerRoot = components["schemas"]["ServerRoot"];
export type ServerSetBedrockPortRequest =
	components["schemas"]["ServerSetBedrockPortRequest"];
export type ServerSetDescriptionRequest =
	components["schemas"]["ServerSetDescriptionRequest"];
export type ServerSetParentRequest =
	components["schemas"]["ServerSetParentRequest"];
export type ServerSetPingPortRequest =
	components["schemas"]["ServerSetPingPortRequest"];
export type ServerSetRegionsRequest =
	components["schemas"]["ServerSetRegionsRequest"];
export type ServerSetRoleRequest =
	components["schemas"]["ServerSetRoleRequest"];
export type ServerSetShowDescriptionRequest =
	components["schemas"]["ServerSetShowDescriptionRequest"];
export type ServerSetShowInPublicRequest =
	components["schemas"]["ServerSetShowInPublicRequest"];
export type ServerSetTeamEnabledRequest =
	components["schemas"]["ServerSetTeamEnabledRequest"];
export type ServerSetVersionOverrideRequest =
	components["schemas"]["ServerSetVersionOverrideRequest"];
export type ServerStats = components["schemas"]["ServerStats"];
export type ServerSubservers = components["schemas"]["ServerSubservers"];
export type ServerTeamManage = components["schemas"]["ServerTeamManage"];
export type ServerTeamPublic = components["schemas"]["ServerTeamPublic"];
export type ServerTelemetry = components["schemas"]["ServerTelemetry"];
export type ServerTranslation = components["schemas"]["ServerTranslation"];
export type ServerTranslationUpsertRequest =
	components["schemas"]["ServerTranslationUpsertRequest"];
export type ServerTranslations = components["schemas"]["ServerTranslations"];
export type ServicesHealthResponse =
	components["schemas"]["ServicesHealthResponse"];
export type SessionList = components["schemas"]["SessionList"];
export type SessionRevokeResult = components["schemas"]["SessionRevokeResult"];
export type ShareLink = components["schemas"]["ShareLink"];
export type SocialLinkVerification =
	components["schemas"]["SocialLinkVerification"];
export type SocialLinkVerifyRequest =
	components["schemas"]["SocialLinkVerifyRequest"];
export type SocialLinks = components["schemas"]["SocialLinks"];
export type SocialLinksUpdateRequest =
	components["schemas"]["SocialLinksUpdateRequest"];
export type StatusOverrideItem = components["schemas"]["StatusOverrideItem"];
export type Subscription = components["schemas"]["Subscription"];
export type SubscriptionList = components["schemas"]["SubscriptionList"];
export type TeamMemberCreateRequest =
	components["schemas"]["TeamMemberCreateRequest"];
export type TeamMemberDeleteResponse =
	components["schemas"]["TeamMemberDeleteResponse"];
export type TeamMemberItem = components["schemas"]["TeamMemberItem"];
export type TeamMemberUpdateRequest =
	components["schemas"]["TeamMemberUpdateRequest"];
export type TeamRoleCreateRequest =
	components["schemas"]["TeamRoleCreateRequest"];
export type TeamRoleDeleteResponse =
	components["schemas"]["TeamRoleDeleteResponse"];
export type TeamRoleItem = components["schemas"]["TeamRoleItem"];
export type TeamRoleUpdateRequest =
	components["schemas"]["TeamRoleUpdateRequest"];
export type TicketCreateRequest = components["schemas"]["TicketCreateRequest"];
export type TicketDetail = components["schemas"]["TicketDetail"];
export type TicketList = components["schemas"]["TicketList"];
export type TicketMessage = components["schemas"]["TicketMessage"];
export type TicketMessageCreateRequest =
	components["schemas"]["TicketMessageCreateRequest"];
export type TicketMessageList = components["schemas"]["TicketMessageList"];
export type TicketStatusUpdateRequest =
	components["schemas"]["TicketStatusUpdateRequest"];
export type TicketSummary = components["schemas"]["TicketSummary"];
export type TotpBeginResult = components["schemas"]["TotpBeginResult"];
export type TotpCodeRequest = components["schemas"]["TotpCodeRequest"];
export type TotpStatus = components["schemas"]["TotpStatus"];
export type UpdateManifest = components["schemas"]["UpdateManifest"];
export type UpdateManifestUpsert =
	components["schemas"]["UpdateManifestUpsert"];
export type UpdateReportAck = components["schemas"]["UpdateReportAck"];
export type UpdateReportInput = components["schemas"]["UpdateReportInput"];
export type UserEngagement = components["schemas"]["UserEngagement"];
export type UserProfile = components["schemas"]["UserProfile"];
export type UserRecentActivity = components["schemas"]["UserRecentActivity"];
export type UserRolesResponse = components["schemas"]["UserRolesResponse"];
export type VerificationCheckRequest =
	components["schemas"]["VerificationCheckRequest"];
export type VerificationStartRequest =
	components["schemas"]["VerificationStartRequest"];
export type VotingLinks = components["schemas"]["VotingLinks"];
export type VotingLinksUpdateRequest =
	components["schemas"]["VotingLinksUpdateRequest"];
export type WhitelistApplication =
	components["schemas"]["WhitelistApplication"];
export type WhitelistApplicationList =
	components["schemas"]["WhitelistApplicationList"];
export type WhitelistApplyRequest =
	components["schemas"]["WhitelistApplyRequest"];
export type WhitelistBindingDetail =
	components["schemas"]["WhitelistBindingDetail"];
export type WhitelistBindingTestResult =
	components["schemas"]["WhitelistBindingTestResult"];
export type WhitelistBindingWriteRequest =
	components["schemas"]["WhitelistBindingWriteRequest"];
export type WhitelistConfig = components["schemas"]["WhitelistConfig"];
export type WhitelistDecisionRequest =
	components["schemas"]["WhitelistDecisionRequest"];
export type WhitelistDirectAddRequest =
	components["schemas"]["WhitelistDirectAddRequest"];
export type WhitelistDirectEntry =
	components["schemas"]["WhitelistDirectEntry"];
export type WhitelistDirectEntryPage =
	components["schemas"]["WhitelistDirectEntryPage"];
export type WhitelistDirectRemoval =
	components["schemas"]["WhitelistDirectRemoval"];
export type WhitelistFormCreateRequest =
	components["schemas"]["WhitelistFormCreateRequest"];
export type WhitelistFormDetail = components["schemas"]["WhitelistFormDetail"];
export type WhitelistFormImportMappingRequest =
	components["schemas"]["WhitelistFormImportMappingRequest"];
export type WhitelistFormPage = components["schemas"]["WhitelistFormPage"];
export type WhitelistFormUpdateRequest =
	components["schemas"]["WhitelistFormUpdateRequest"];
export type WhitelistImportJob = components["schemas"]["WhitelistImportJob"];
export type WhitelistImportJobPage =
	components["schemas"]["WhitelistImportJobPage"];
export type WhitelistImportRequest =
	components["schemas"]["WhitelistImportRequest"];
export type WhitelistMinecraftPullRequest =
	components["schemas"]["WhitelistMinecraftPullRequest"];
export type WhitelistStatusRequest =
	components["schemas"]["WhitelistStatusRequest"];
export type WorkspaceChangeSlugRequest =
	components["schemas"]["WorkspaceChangeSlugRequest"];
export type WorkspaceDetail = components["schemas"]["WorkspaceDetail"];
export type WorkspaceListResponse =
	components["schemas"]["WorkspaceListResponse"];
export type WorkspaceRenameRequest =
	components["schemas"]["WorkspaceRenameRequest"];
export type WorkspaceResolveResponse =
	components["schemas"]["WorkspaceResolveResponse"];
export type WorkspaceSetOnlineStrategyRequest =
	components["schemas"]["WorkspaceSetOnlineStrategyRequest"];
export type WorkspaceSetRolloutModeRequest =
	components["schemas"]["WorkspaceSetRolloutModeRequest"];
export type WsTokenRequest = components["schemas"]["WsTokenRequest"];
export type WsTokenResponse = components["schemas"]["WsTokenResponse"];
export type LoginResponse = authComponents["schemas"]["LoginResponse"];
export type LogoutResponse = authComponents["schemas"]["LogoutResponse"];
export type MinecraftAccountLinkResponse =
	authComponents["schemas"]["MinecraftAccountLinkResponse"];
export type OAuthCallbackRequest =
	authComponents["schemas"]["OAuthCallbackRequest"];
export type OAuthCaptchaChallengeResponse =
	authComponents["schemas"]["OAuthCaptchaChallengeResponse"];
export type OAuthCaptchaConfirmRequest =
	authComponents["schemas"]["OAuthCaptchaConfirmRequest"];
export type OAuthStartResponse =
	authComponents["schemas"]["OAuthStartResponse"];
export type OAuthTotpChallengeResponse =
	authComponents["schemas"]["OAuthTotpChallengeResponse"];
export type OAuthTotpConfirmRequest =
	authComponents["schemas"]["OAuthTotpConfirmRequest"];
export type RefreshTokenRequest =
	authComponents["schemas"]["RefreshTokenRequest"];
export type StatusResponse = authComponents["schemas"]["StatusResponse"];
export type UserLogin = authComponents["schemas"]["UserLogin"];
export type UserPublic = authComponents["schemas"]["UserPublic"];
export type UserRegister = authComponents["schemas"]["UserRegister"];
export type BuildData = components["schemas"]["Build"];
export type CommentData = components["schemas"]["Comment"];
export type FormData = components["schemas"]["WhitelistFormDetail"];
export type MeData = components["schemas"]["MeResponse"];
export type OrderData = components["schemas"]["Order"];
export type ProjectData = components["schemas"]["ProjectDetail"];
export type ServerData = components["schemas"]["ServerDetail"];
export type SubscriptionData = components["schemas"]["Subscription"];
export type UserData = components["schemas"]["PublicProfile"];
