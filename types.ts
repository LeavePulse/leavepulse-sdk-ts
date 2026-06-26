import type { Snowflake } from "./runtime/snowflake";
export interface paths {
	"/": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** Root */
		get: operations["Root"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** Root */
		get: operations["V1Root"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/discovery/candidates": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List discovery candidates (admin)
		 * @description Page through pending discovery candidates. Filter by ``status`` (``staged | approved | ignored``), free-text search, source, edition, region, or minimum observed scale.
		 */
		get: operations["admin.discovery.candidates"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/discovery/candidates/{candidate_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Edit a discovery candidate (admin)
		 * @description Apply free-form edits to a candidate before approval.
		 */
		patch: operations["admin.discovery.edit"];
		trace?: never;
	};
	"/v1/admin/discovery/candidates/{candidate_id}/actions/approve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Approve a discovery candidate (admin) */
		post: operations["admin.discovery.approve"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/discovery/candidates/{candidate_id}/actions/ignore": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Ignore a discovery candidate (admin) */
		post: operations["admin.discovery.ignore"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/discovery/candidates/{candidate_id}/observations": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List candidate observations (admin)
		 * @description Return the raw per-source observations recorded for one discovery candidate.
		 */
		get: operations["admin.discovery.observations"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/discovery/candidates/{candidate_id}/preview": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** Preview a discovery candidate (admin) */
		get: operations["admin.discovery.preview"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/discovery/sources": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List discovery sources (admin)
		 * @description Return the configured discovery sources and their status.
		 */
		get: operations["admin.discovery.sources"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/players": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Search players (admin)
		 * @description Global player search across all servers. ``q`` matches a username or UUID; omit it to list the most recently seen players.
		 */
		get: operations["admin.players.search"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List projects (admin)
		 * @description Paginated admin list of all projects. Requires platform servers-moderation power.
		 */
		get: operations["admin.projects.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects/{project_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Delete project (admin)
		 * @description Permanently delete a project. Requires moderation power.
		 */
		delete: operations["admin.projects.delete"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects/{project_id}/actions/change-slug": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Change project short link (admin)
		 * @description Set or clear the project's public short link. Provide ``null`` to clear.
		 */
		post: operations["admin.projects.change_slug"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects/{project_id}/actions/rename": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Rename project (admin)
		 * @description Force-update the displayed project name.
		 */
		post: operations["admin.projects.rename"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects/{project_id}/actions/set-online-strategy": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set online strategy (admin)
		 * @description Override how this project resolves the online server for catalog rendering.
		 */
		post: operations["admin.projects.set_online_strategy"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects/{project_id}/actions/set-rollout-mode": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set verified-plugin rollout mode (admin)
		 * @description Override the project's verified-plugin rollout mode. Admin can force ``cutover_enforced`` even when the fleet is not yet uniformly migration-ready.
		 */
		post: operations["admin.projects.set_rollout_mode"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/projects/{project_id}/actions/transfer-ownership": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Transfer ownership (admin)
		 * @description Transfer the project to a different owner. Provide ``null`` to clear ownership.
		 */
		post: operations["admin.projects.transfer_ownership"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/roles": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** List platform roles (admin) */
		get: operations["admin.roles.list"];
		put?: never;
		/**
		 * Create platform role (admin)
		 * @description Create a role with a unique ``key`` and a set of platform permission codes.
		 */
		post: operations["admin.roles.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/roles/{role_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Delete platform role (admin)
		 * @description Delete a role. Protected platform roles cannot be deleted.
		 */
		delete: operations["admin.roles.delete"];
		options?: never;
		head?: never;
		/**
		 * Update platform role (admin)
		 * @description Rename, re-key and re-scope a role. Protected platform roles cannot change their key.
		 */
		patch: operations["admin.roles.update"];
		trace?: never;
	};
	"/v1/admin/servers": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List servers (admin)
		 * @description Page through every server visible to platform moderators. Supports a free-text search across name, address and id.
		 */
		get: operations["admin.servers.list"];
		put?: never;
		/**
		 * Force-create server (admin)
		 * @description Create a server bypassing the regular onboarding flow. Used by moderators to seed catalog entries or repair broken records.
		 */
		post: operations["admin.servers.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/servers/stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Global server stats (admin)
		 * @description Return platform-wide server counts: total, networks, subservers.
		 */
		get: operations["admin.servers.stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/servers/{server_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Delete server (admin)
		 * @description Permanently delete a server. For network-role servers all subservers attached to it are deleted as well to avoid orphan rows.
		 */
		delete: operations["admin.servers.delete"];
		options?: never;
		head?: never;
		/**
		 * Update server (admin)
		 * @description Edit moderation-sensitive fields: ``owner_id``, ``is_hidden``, ``is_verified``, ``server_role``, ``parent_id``, ``project_id``. Send ``null`` for ``parent_id`` or ``project_id`` to clear them.
		 */
		patch: operations["admin.servers.update"];
		trace?: never;
	};
	"/v1/admin/servers/{server_id}/status-overrides": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List manual monitoring status overrides (admin)
		 * @description List manual status overrides pinned on a server's monitoring over an optional ISO-8601 window.
		 */
		get: operations["admin.overrides.list"];
		put?: never;
		/**
		 * Create manual monitoring status override (admin)
		 * @description Pin a manual monitoring status (online/offline/excluded) over a time window — e.g. to mask a known maintenance period from uptime and score math.
		 */
		post: operations["admin.overrides.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/servers/{server_id}/status-overrides/{override_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** Delete manual monitoring status override (admin) */
		delete: operations["admin.overrides.delete"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/sessions/{session_id}/actions/revoke": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Revoke a user session (admin)
		 * @description Revoke any user's session and its refresh tokens by id.
		 */
		post: operations["admin.sessions.revoke"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/system/services-health": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Platform services health (admin)
		 * @description Probe every platform microservice for reachability. Used by the admin dashboard to surface degraded services.
		 */
		get: operations["admin.system.health"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List users (admin)
		 * @description Page through platform users. Supports a free-text search across username, email and id.
		 */
		get: operations["admin.users.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users/by-minecraft-uuid/{uuid}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Find user by Minecraft UUID (admin)
		 * @description Resolve the user linked to a given Minecraft UUID.
		 */
		get: operations["admin.users.by_minecraft"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users/search": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Search users (admin)
		 * @description Free-text user lookup used by moderation flows (server/user moderators may call this without full staff rights).
		 */
		get: operations["admin.users.search"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users/{user_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get user details (admin)
		 * @description Full user record: profile, roles, Discord and linked Minecraft accounts.
		 */
		get: operations["admin.users.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update user (admin)
		 * @description Edit username, status, email, bio and avatar. ``email``, ``bio`` and ``avatar_url`` are tri-state: omit to keep, send ``null`` to clear.
		 */
		patch: operations["admin.users.update"];
		trace?: never;
	};
	"/v1/admin/users/{user_id}/discord": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update linked Discord ID (admin)
		 * @description Link, relink or clear (``discord_subject=null``) the user's Discord account.
		 */
		patch: operations["admin.users.set_discord"];
		trace?: never;
	};
	"/v1/admin/users/{user_id}/minecraft-accounts/offline": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Create offline Minecraft account (admin) */
		post: operations["admin.users.create_offline_minecraft"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users/{user_id}/minecraft-accounts/{account_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** Delete linked Minecraft account (admin) */
		delete: operations["admin.users.delete_minecraft"];
		options?: never;
		head?: never;
		/** Update linked Minecraft account (admin) */
		patch: operations["admin.users.update_minecraft"];
		trace?: never;
	};
	"/v1/admin/users/{user_id}/roles": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** List user platform roles (admin) */
		get: operations["admin.users.roles"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users/{user_id}/roles/{role_slug}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Assign platform role (admin) */
		post: operations["admin.users.assign_role"];
		/** Remove platform role (admin) */
		delete: operations["admin.users.remove_role"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/admin/users/{user_id}/sessions": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List user sessions (admin)
		 * @description Return all active and revoked sessions for one user.
		 */
		get: operations["admin.users.sessions"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/auth/device/approve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Approve a device authorization
		 * @description Approve a pending device for the signed-in user. Called by the website after the user enters the user_code.
		 */
		post: operations["auth.device.approve"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/auth/device/start": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Begin a device authorization
		 * @description Start the device flow: returns the device_code to poll with and the user_code/verification_uri to show the user. Unauthenticated.
		 */
		post: operations["auth.device.start"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/auth/device/token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Poll for device-flow tokens
		 * @description Exchange a device_code for tokens. Returns a pending/slow_down/expired/denied status until the user approves. Unauthenticated.
		 */
		post: operations["auth.device.token"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/auth/ws-token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Issue a WebSocket access token
		 * @description Mint a short-lived (5min) access token bound to the current session for use in WebSocket handshakes. Scope is narrowed by the RBAC service to what the user actually holds.
		 */
		post: operations["me.issue_ws_token"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/checkout": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CreateCheckout */
		post: operations["billing.checkout"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/coupons/validate": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ValidateCoupon */
		post: operations["billing.coupons.validate"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/currencies": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListCurrencies */
		get: operations["billing.currencies.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/customer": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetCustomer */
		get: operations["billing.customer.get"];
		/** UpsertCustomer */
		put: operations["billing.customer.upsert"];
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/orders": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListOrders */
		get: operations["billing.orders.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/orders/{order_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetOrder */
		get: operations["order.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/orders/{order_id}/reconcile": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ReconcileOrder */
		post: operations["order.reconcile"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/orders/{order_id}/refund-request": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CreateRefundRequest */
		post: operations["order.refundRequest"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/payment-methods": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListPaymentMethods */
		get: operations["billing.paymentMethods.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/payment-methods/{method_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** DeletePaymentMethod */
		delete: operations["paymentMethod.delete"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/payment-methods/{method_id}/default": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/** SetDefaultPaymentMethod */
		patch: operations["paymentMethod.setDefault"];
		trace?: never;
	};
	"/v1/billing/products": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListProducts */
		get: operations["billing.products.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/quote": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Quote */
		post: operations["billing.quote"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/refund-requests": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListRefundRequests */
		get: operations["billing.refundRequests.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/refund-requests/{request_id}/cancel": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/** CancelRefundRequest */
		patch: operations["refundRequest.cancel"];
		trace?: never;
	};
	"/v1/billing/subscriptions": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListSubscriptions */
		get: operations["billing.subscriptions.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/billing/subscriptions/{subscription_id}/cancel": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/** CancelSubscription */
		patch: operations["subscription.cancel"];
		trace?: never;
	};
	"/v1/builds": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListBuilds */
		get: operations["builds.list"];
		put?: never;
		/** CreateBuild */
		post: operations["builds.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/import": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ImportSharedBuild */
		post: operations["builds.import"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/preview/{share_token}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Public preview of a shared build
		 * @description Anonymous preview of a publicly shared build by its share token.
		 */
		get: operations["builds.preview"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/shared-with-me": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListSharedWithMe */
		get: operations["builds.shared_with_me"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/{build_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetBuild */
		get: operations["build.get"];
		put?: never;
		post?: never;
		/** DeleteBuild */
		delete: operations["build.delete"];
		options?: never;
		head?: never;
		/** UpdateBuild */
		patch: operations["build.update"];
		trace?: never;
	};
	"/v1/builds/{build_id}/collaborators": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListCollaborators */
		get: operations["build.collaborators.list"];
		put?: never;
		/** AddCollaborator */
		post: operations["build.collaborators.add"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/{build_id}/collaborators/{user_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** RemoveCollaborator */
		delete: operations["build.collaborators.remove"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/{build_id}/config": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetConfigUrl */
		get: operations["build.config.url"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/{build_id}/config/confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ConfirmConfigUpload */
		post: operations["build.config.confirm"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/{build_id}/config/upload": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** RequestConfigUpload */
		post: operations["build.config.upload"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/builds/{build_id}/share": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CreateShareLink */
		post: operations["build.share"];
		/** RevokeShareLink */
		delete: operations["build.unshare"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/me/engagement": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetMyEngagement */
		get: operations["me.engagement"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/comments": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListComments */
		get: operations["project.comments.list"];
		put?: never;
		/** CreateComment */
		post: operations["project.comments.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/comments/liked": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListLikedComments */
		get: operations["project.comments.liked"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/comments/me": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetMyComment */
		get: operations["project.comments.mine"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/comments/{comment_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** DeleteComment */
		delete: operations["comment.delete"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/comments/{comment_id}/like": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ToggleCommentLike */
		post: operations["comment.like"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/comments/{comment_id}/replies": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CreateReply */
		post: operations["comment.reply"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/engagement": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetEngagement */
		get: operations["project.engagement"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/engagement/status": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetEngagementStatus */
		get: operations["project.engagement.status"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/heart": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ToggleHeart */
		post: operations["project.heart"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/thumb": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ToggleThumb */
		post: operations["project.thumb"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/projects/{project_id}/votes": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListVotes */
		get: operations["project.votes.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/tickets": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CreateTicket */
		post: operations["tickets.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/tickets/my": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListMyTickets */
		get: operations["tickets.mine"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/tickets/server/{server_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListServerTickets */
		get: operations["server.tickets.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/tickets/{ticket_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/** UpdateTicketStatus */
		patch: operations["ticket.set_status"];
		trace?: never;
	};
	"/v1/community/tickets/{ticket_id}/messages": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetTicketMessages */
		get: operations["ticket.messages.list"];
		put?: never;
		/** AddTicketMessage */
		post: operations["ticket.reply"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/users/{user_id}/engagement": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetUserEngagement */
		get: operations["user.engagement"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/users/{user_id}/recent-activity": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ListUserActivity */
		get: operations["user.activity.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/community/users/{user_id}/report": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ReportUser */
		post: operations["user.report"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/discord/link/complete": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CompleteLink */
		post: operations["discord.link.complete"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/discord/link/session": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** ResolveLinkSession */
		get: operations["discord.link.session"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/discord/link/token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** CreateLinkToken */
		post: operations["discord.link.token"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/discord/servers/{server_id}/bridge": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** GetBridge */
		get: operations["project.bridge"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/** UpdateBridge */
		patch: operations["project.bridge.update"];
		trace?: never;
	};
	"/v1/discord/servers/{server_id}/import-pull": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** ImportPull */
		post: operations["project.bridge.import"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/discord/servers/{server_id}/roles-catalog": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** RoleCatalog */
		get: operations["project.bridge.roles"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/launcher/updates/manifest": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Resolve the latest launcher update manifest
		 * @description Return the signed manifest for the given channel and platform, honoring rollout rules. 404 when no manifest matches.
		 */
		get: operations["updates.manifest"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/launcher/updates/manifests/{channel}/{platform}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		/**
		 * Upsert a launcher update manifest (admin)
		 * @description Publish or replace the manifest for a channel/platform. Guarded by the X-Update-Admin-Token header; the service signs the manifest.
		 */
		put: operations["updates.manifest_upsert"];
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/launcher/updates/manifests/{channel}/{platform}/delete": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Delete a launcher update manifest (admin) */
		post: operations["updates.manifest_delete"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/launcher/updates/report": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Ingest a launcher update lifecycle report
		 * @description Record a check/download/apply event for rollout telemetry.
		 */
		post: operations["updates.report"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get current user
		 * @description Return the authenticated user's profile, platform roles, and linked Minecraft accounts.
		 */
		get: operations["me.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/account/actions/change-email": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Change email
		 * @description Change the current user's email. Requires the current password (or a TOTP code for password-less accounts). The new address is marked unverified until re-confirmed.
		 */
		post: operations["me.account.change_email"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/account/actions/delete": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Request account deletion
		 * @description Schedule irreversible account deletion. Immediately disables the account and revokes every active session and refresh token, then schedules a hard delete after a grace period.
		 */
		post: operations["me.account.delete"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/account/export": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Export account data
		 * @description Return a GDPR data export of the current user: profile, linked external identities, and session history.
		 */
		get: operations["me.account.export"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/avatar": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		/**
		 * Set avatar URL
		 * @description Set the current user's avatar to an external URL. Pass a null ``avatar_url`` to clear it (equivalent to deleting the avatar).
		 */
		put: operations["me.avatar.set"];
		/**
		 * Upload avatar image
		 * @description Upload an avatar image (multipart/form-data) with a ``file`` part. The image is stored and the resulting public URL becomes the user's avatar. Max 2 MiB; image MIME types only.
		 */
		post: operations["me.avatar.upload"];
		/**
		 * Remove avatar
		 * @description Clear the current user's avatar.
		 */
		delete: operations["me.avatar.remove"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/minecraft/accounts/{account_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Unlink a Minecraft account
		 * @description Remove one linked Minecraft account by its numeric id. Returns a compact view of the account that was removed.
		 */
		delete: operations["me.minecraft.unlink"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/minecraft/link-code": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Issue Minecraft link code
		 * @description Issue a one-time link code for the in-game Minecraft handshake. The player redeems it on the server side via ``/me/minecraft/link/complete``.
		 */
		post: operations["me.minecraft.link_code"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/minecraft/link/complete": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Complete Minecraft account link
		 * @description Redeem a one-time link code emitted by the Minecraft plugin handshake and attach the resulting Minecraft identity to the current authenticated user.
		 */
		post: operations["me.minecraft.complete_link"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/minecraft/official/start": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Start official Minecraft link
		 * @description Begin the Microsoft OAuth flow that links an official (Mojang/Microsoft) Minecraft account to the current user. Returns an authorization URL plus an opaque state; the provider redirects back to the auth callback which finalizes the link.
		 */
		post: operations["me.minecraft.official_link_start"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/minecraft/resolve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Resolve a Minecraft nickname
		 * @description Resolve a Minecraft nickname into a link candidate (account type + canonical UUID) without issuing a challenge yet. Used by the link wizard to confirm the player typed the right name.
		 */
		post: operations["me.minecraft.resolve"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/minecraft/state": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get Minecraft verification state
		 * @description Return the user's verified Minecraft accounts plus any active pending challenge. ``project_id`` (optional) scopes the state to one workspace; absent ⇒ global scope.
		 */
		get: operations["me.minecraft.state"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get notification preferences
		 * @description Return delivery preferences (channel set + ordering) per notification topic for the current user.
		 */
		get: operations["me.notifications.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update notification preferences
		 * @description Replace delivery preferences for the current user. The full set is supplied (no partial merges).
		 */
		patch: operations["me.notifications.update"];
		trace?: never;
	};
	"/v1/me/notifications/delivery": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get delivery preferences
		 * @description Return the current user's per-channel delivery preferences (enabled + address per channel, with an `available` hint for channels that aren't live yet).
		 */
		get: operations["me.notifications.delivery.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update delivery preferences
		 * @description Replace the current user's delivery preferences. The full channel set is supplied (no partial merge); in-app stays on and unavailable channels can't be enabled.
		 */
		patch: operations["me.notifications.delivery.update"];
		trace?: never;
	};
	"/v1/me/notifications/delivery/email/confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Confirm override email address
		 * @description Confirm an override email address from the token in the confirmation link, marking it as the delivery target.
		 */
		post: operations["me.notifications.delivery.email.confirm"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/delivery/email/confirm-request": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Send override-email confirmation link
		 * @description Email a one-time confirmation link to the current override email address (double opt-in). Until confirmed, delivery falls back to the account email. No-op if there's no override or it's already confirmed.
		 */
		post: operations["me.notifications.delivery.email.confirm_request"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/delivery/test": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Send a test notification
		 * @description Send a test notification down one channel so the user can confirm delivery. For email the account address is used unless an override is set; unavailable channels return `sent=false`.
		 */
		post: operations["me.notifications.delivery.send_test"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/feed": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List notifications
		 * @description Return the current user's notification feed, newest first, as a page. `unread_only` filters to unread; the envelope also carries `unread_total` for the bell badge.
		 */
		get: operations["me.notifications.feed.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/feed/read-all": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Mark all notifications read
		 * @description Mark every unread notification read; returns how many.
		 */
		post: operations["me.notifications.feed.mark_all_read"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/feed/unread-count": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Unread notification count
		 * @description Return the number of unread notifications (bell badge).
		 */
		get: operations["me.notifications.feed.unread_count"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/feed/{notification_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Dismiss a notification
		 * @description Remove one notification from the feed (idempotent).
		 */
		delete: operations["me.notifications.feed.dismiss"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/feed/{notification_id}/read": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Mark a notification read
		 * @description Mark one notification read (idempotent).
		 */
		post: operations["me.notifications.feed.mark_read"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/notifications/feed/{notification_id}/unread": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Mark a notification unread
		 * @description Mark one notification unread again (idempotent).
		 */
		post: operations["me.notifications.feed.mark_unread"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/oauth/providers": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List OAuth providers
		 * @description Return the OAuth providers (Discord, Google, …) linked to the current user, with provider-specific subject/email/avatar.
		 */
		get: operations["me.oauth.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/oauth/{provider}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Unlink OAuth provider
		 * @description Remove a linked OAuth provider from the current account. Refuses to remove the last remaining login method.
		 */
		delete: operations["me.oauth.unlink"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/oauth/{provider}/link/start": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Start OAuth link flow
		 * @description Generate a provider authorization URL plus an opaque state token that the consumer should present back to the callback handler when the provider redirects back.
		 */
		post: operations["me.oauth.link_start"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/password": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Password status
		 * @description Return whether the current user has a password set. OAuth-only accounts report ``has_password: false`` until they set one.
		 */
		get: operations["me.password.status"];
		/**
		 * Set or replace password
		 * @description Set a password on an OAuth-only account or replace an existing one. The current password is required when one already exists, and a TOTP code is required when MFA is enabled. Succeeding revokes all of the user's active sessions and refresh tokens.
		 */
		put: operations["me.password.set"];
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/password/actions/change": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Change password
		 * @description Validate the current password, confirm TOTP when enabled, and replace the password. Revokes all active sessions and refresh tokens so other devices must re-authenticate.
		 */
		post: operations["me.password.change"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/pat-tokens": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** List personal access tokens */
		get: operations["me.pat_tokens.list"];
		put?: never;
		/**
		 * Create a personal access token
		 * @description Mint a new token. The plaintext token is returned once in `token` and cannot be retrieved later.
		 */
		post: operations["me.pat_tokens.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/pat-tokens/{token_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** Revoke a personal access token */
		delete: operations["me.pat_tokens.revoke"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/profile": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Update public profile
		 * @description Update the current user's public-profile fields (username, bio, slug, time-format preference) and per-surface visibility flags. Returns the full self-view profile.
		 */
		post: operations["me.profile.update"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List my project workspaces
		 * @description List project workspaces accessible to the current user — owned, created, or member of.
		 */
		get: operations["me.projects.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects/resolve/{project_ref}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Resolve workspace reference
		 * @description Resolve a settings-space project ref to its canonical id.
		 */
		get: operations["me.projects.resolve"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects/{project_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get workspace details
		 * @description Return workspace details for the settings UI — identity, capability flags, composition, and live snapshot.
		 */
		get: operations["me.projects.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects/{project_id}/actions/change-slug": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Change project short link
		 * @description Set or clear the project's public short link. Provide ``null`` to clear.
		 */
		post: operations["project.change_slug"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects/{project_id}/actions/rename": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Rename project
		 * @description Update the displayed project name.
		 */
		post: operations["project.rename"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects/{project_id}/actions/set-online-strategy": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set online strategy
		 * @description Switch how this project resolves the online server for catalog rendering.
		 */
		post: operations["project.set_online_strategy"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/projects/{project_id}/actions/set-rollout-mode": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set verified-plugin rollout mode
		 * @description Change the project's verified-plugin rollout mode. ``cutover_enforced`` requires every tracked server to be migration-ready.
		 */
		post: operations["project.set_rollout_mode"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/sessions": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List my sessions
		 * @description Return active and recently-revoked sessions for the current user. The session backing this request is marked ``current``.
		 */
		get: operations["me.sessions.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/sessions/actions/revoke-others": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Revoke all other sessions
		 * @description Revoke every active session for the current user except the one carrying this request. Used by the security panel.
		 */
		post: operations["me.sessions.revoke_others"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/sessions/{session_id}/actions/revoke": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Revoke a session
		 * @description Revoke one specific session by its numeric id. Also marks the session's refresh tokens as revoked so subsequent refresh attempts fail.
		 */
		post: operations["session.revoke"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get my player stats
		 * @description Return aggregated playtime and activity statistics for the current user's linked Minecraft accounts. Set ``estimated=true`` to reconstruct best-effort stats from unverified snapshots.
		 */
		get: operations["me.stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/stats/unverified": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get my unverified player stats
		 * @description Return best-effort player stats reconstructed from unverified snapshots for the current user's linked Minecraft nicknames. Use this when verified plugin data is unavailable; the verified counterpart is ``me.stats``.
		 */
		get: operations["me.stats_unverified"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/totp": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * TOTP status
		 * @description Return whether time-based MFA (TOTP) is enabled for the current user, plus when it was enrolled.
		 */
		get: operations["me.totp.status"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/totp/actions/begin": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Begin TOTP enrollment
		 * @description Generate (or reset) a pending TOTP secret and return the shared secret plus an otpauth URL for authenticator apps. Returned once — call ``confirm`` with a generated code to activate MFA.
		 */
		post: operations["me.totp.begin"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/totp/actions/confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Confirm TOTP enrollment
		 * @description Activate MFA by verifying a code produced by the authenticator app for the pending secret created by ``begin``.
		 */
		post: operations["me.totp.confirm"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/totp/actions/disable": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Disable TOTP
		 * @description Remove the user's MFA enrollment after verifying a current TOTP code.
		 */
		post: operations["me.totp.disable"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/me/whitelist/applications": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List my whitelist applications
		 * @description Return whitelist applications submitted by the current user across all servers. Optional ``status`` filters to one lifecycle stage (``pending | approved | denied | ...``).
		 */
		get: operations["me.whitelist.applications"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/monitoring/landing": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Landing-page aggregate stats
		 * @description Return platform-wide aggregates used on the marketing landing page: total registered profiles, players with profile data, and cumulative tracked playtime.
		 */
		get: operations["monitoring.landing"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/monitoring/me/stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * My dashboard stats
		 * @description Return aggregated playtime and activity statistics for the current user's verified Minecraft accounts, used by the dashboard.
		 */
		get: operations["monitoring.me.stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/monitoring/me/stats/unverified": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * My unverified dashboard stats
		 * @description Return best-effort dashboard statistics reconstructed from unverified snapshots for the current user's linked Minecraft nicknames. Use when verified plugin data is unavailable.
		 */
		get: operations["monitoring.me.stats.unverified"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/monitoring/projects/{project_id}/history": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get project history
		 * @description Return aggregated online-count history for one project over a named period (``24h``, ``7d``, ``30d``).
		 */
		get: operations["project.history.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/monitoring/projects/{project_id}/live": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get project live status
		 * @description Return the aggregated live availability snapshot for one project: rolled-up online state and player count plus the per-server live items the rollup was derived from.
		 */
		get: operations["project.live"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/monitoring/servers/{server_id}/player-stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Player playtime stats
		 * @description Return aggregated playtime for one player on one server. Provide either ``user_id`` (preferred) or both ``minecraft_uuid`` and ``minecraft_nick``.
		 */
		get: operations["server.player_stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/password/reset/confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Confirm a password reset
		 * @description Public. Reset the password using a valid opaque reset token. Revokes all of the account's active sessions and refresh tokens.
		 */
		post: operations["password.reset_confirm"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/password/reset/request": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Request a password reset
		 * @description Public. Send a password reset link if an active account with the given email exists. Always returns ``ok`` so callers cannot probe which emails are registered.
		 */
		post: operations["password.reset_request"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List projects
		 * @description Paginated list of public projects.
		 */
		get: operations["project.list"];
		put?: never;
		/**
		 * Create project draft
		 * @description Create a private draft project. Ownership unlocks after verification.
		 */
		post: operations["project.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/resolve/{project_ref}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Resolve public project reference
		 * @description Resolve a slug, numeric id, or server address to the canonical project id.
		 */
		get: operations["project.resolve"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Project filter stats
		 * @description Aggregated counts for project catalog filters.
		 */
		get: operations["projects.stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get project profile
		 * @description Public project profile with all visible servers.
		 */
		get: operations["project.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/servers": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Add a server to the project
		 * @description Create a server under this project. A server always belongs to a project and has no owner of its own — ownership is the project's.
		 */
		post: operations["project.servers.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get project stats
		 * @description Return aggregated monitoring statistics for one project over a named period, rolled up across its servers. Owner/admin only.
		 */
		get: operations["project.stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/team-sync/discord-targets": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List Discord role targets
		 * @description Return the mapped Discord roles for one project with the resolved desired set of Discord user ids per role. Optionally filter to one role via ``role_id``.
		 */
		get: operations["project.team_sync.targets"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/whitelist/config": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Public whitelist config for a project
		 * @description Return the public whitelist application options for a project — one entry per server that accepts applications, used to render the apply flow. Empty list when the project has none.
		 */
		get: operations["project.whitelist.config"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/whitelist/forms": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/** List whitelist forms in a workspace */
		get: operations["project.whitelist.forms"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/whitelist/policies": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List project whitelist policies
		 * @description Return the whitelist policies (project-scoped bindings) that govern how forms apply across the project's servers.
		 */
		get: operations["project.policies"];
		put?: never;
		/** Create project whitelist policy */
		post: operations["project.policies.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/projects/{project_id}/whitelist/policies/{policy_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** Delete project whitelist policy */
		delete: operations["project.policies.delete"];
		options?: never;
		head?: never;
		/** Update project whitelist policy */
		patch: operations["project.policies.update"];
		trace?: never;
	};
	"/v1/projects/{project_id}/whitelist/policies/{policy_id}/actions/test-notifications": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/** Test project policy notifications */
		post: operations["project.policies.test"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/rbac/batch-resolve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Batch resolve platform permissions
		 * @description Resolve platform roles and permission bits for many users in a single round-trip. Useful for rendering team/staff lists in the admin UI without N+1 calls.
		 */
		post: operations["rbac.batch_resolve"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/mine": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List my servers
		 * @description List servers the current user can manage — owned, created, or accessible through workspace membership.
		 */
		get: operations["me.servers.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/mine/issues": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List my servers with service-health issues
		 * @description Return servers (across all workspaces accessible to the current user) that have unresolved service-health issues. Use ``include_ok=true`` to also include servers with no issues.
		 */
		get: operations["me.servers.issues"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/resolve/{server_ref}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Resolve server by id, slug or address
		 * @description Resolve a URL-safe identifier (numeric id, slug, or ``host[:port]``) into one server card. Returns 404 when the server cannot be matched.
		 */
		get: operations["servers.resolve"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/verification/dns": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Start DNS verification
		 * @description Issue a verification token that must be published as a TXT record under the server domain. The response includes the exact record name and value to publish.
		 */
		post: operations["verification.start_dns"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/verification/dns/check": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Check DNS verification
		 * @description Re-query the published TXT record. When the token is found, the server is marked as ownership-verified and (if no owner yet) the requester becomes the project owner.
		 */
		post: operations["verification.check_dns"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/verification/motd": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Start MOTD verification
		 * @description Issue a verification token that must be placed inside the Minecraft server MOTD.
		 */
		post: operations["verification.start_motd"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/verification/motd/check": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Check MOTD verification
		 * @description Re-check the server MOTD for the verification token. Promotes ownership on first success, identical to the DNS flow.
		 */
		post: operations["verification.check_motd"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/verification/plugin": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Start plugin verification
		 * @description Issue a gateway token and a short link code so a Minecraft plugin can attest ownership. Returns the link code the user pastes into the plugin admin panel.
		 */
		post: operations["verification.start_plugin"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/verification/plugin/{server_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Check plugin verification
		 * @description Return the current state of the plugin verification request for one server, including the cached link code while the verification is still pending.
		 */
		get: operations["verification.check_plugin"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server
		 * @description Fetch one server by its numeric id.
		 */
		get: operations["server.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/change-address": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Change server address
		 * @description Update the server's primary ``host[:port]`` address.
		 */
		post: operations["server.change_address"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/change-slug": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Change server slug
		 * @description Set or clear the server's public short link. Empty string clears the slug.
		 */
		post: operations["server.change_slug"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/force-ping": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Force-ping server
		 * @description Enqueue an out-of-band live status ping for this server, bypassing the regular polling cadence. Rate-limited by a per-server cooldown and an hourly budget; see ``retry_after_seconds`` / ``remaining_hourly`` on the response.
		 */
		post: operations["server.force_ping"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/rename": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Rename server
		 * @description Update the displayed server name.
		 */
		post: operations["server.rename"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-bedrock-port": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set server Bedrock port
		 * @description Override the Bedrock-edition port for hybrid servers. Provide ``0`` to clear the override.
		 */
		post: operations["server.set_bedrock_port"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-description": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set server description
		 * @description Update the public server description. Empty string clears it.
		 */
		post: operations["server.set_description"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-parent": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set parent server
		 * @description Attach this server as a subserver under one parent network root. Provide ``0`` to detach.
		 */
		post: operations["server.set_parent"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-ping-port": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set server ping port
		 * @description Override the port used by the live status poller. Provide ``0`` to clear the override.
		 */
		post: operations["server.set_ping_port"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-regions": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set server regions
		 * @description Replace the list of geographic regions advertised for this server. Use ``[]`` to clear all regions.
		 */
		post: operations["server.set_regions"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-role": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set server role
		 * @description Change the topological role of the server: ``standalone``, ``proxy``, ``hub`` (network root), or ``sub`` (sub-server). Requires sufficient workspace power.
		 */
		post: operations["server.set_role"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-show-description": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Toggle description visibility
		 * @description Show or hide the description on the public server card.
		 */
		post: operations["server.set_show_description"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-show-in-public": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Toggle public visibility
		 * @description Show or hide this server in the public catalog. Hidden servers remain accessible to workspace members.
		 */
		post: operations["server.set_show_in_public"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-team-enabled": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Toggle team feature
		 * @description Enable or disable the project team page for this server.
		 */
		post: operations["server.set_team_enabled"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/actions/set-version-override": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Set version override
		 * @description Override the displayed server version string. Empty string clears the override and re-enables auto-detection.
		 */
		post: operations["server.set_version_override"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/bot": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server bot binding
		 * @description Return the bot instance bound to this server's project plus the Discord guilds currently linked. Requires bot-manage permission.
		 */
		get: operations["server.bot"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update server bot binding
		 * @description Bind a bot to this server's project via its link string, or pass an empty ``bot_link`` to clear the binding. Requires bot-manage permission.
		 */
		patch: operations["server.bot.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/events": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server events
		 * @description Return the paginated event stream for one server over a named period — joins, leaves, chats, commands and more. Owner/admin only.
		 */
		get: operations["server.events.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/gateway-token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Issue gateway token
		 * @description Issue a server-scoped agent token usable by the LeavePulse Minecraft plugin to connect to the gateway. Also returns a fresh short link code so the token can be redeemed from the plugin admin panel without copy-pasting the JWT.
		 */
		post: operations["server.issue_gateway_token"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/history": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server history
		 * @description Return the monitoring time series for one server over a named period (e.g. ``24h``, ``7d``, ``30d``).
		 */
		get: operations["server.history.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/host-risk/evidence": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Download host risk evidence
		 * @description Return the host-risk evidence JSON payload for one server. The response includes the suggested filename and the parsed JSON object.
		 */
		get: operations["server.host_risk_evidence"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/icon": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Upload server icon
		 * @description Upload a new server icon (multipart/form-data). The body must include a ``file`` part with an image MIME type; total size must not exceed 8 MiB.
		 */
		post: operations["server.icons.upload"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/icon/select": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Select server icon
		 * @description Pin an existing icon (identified by its storage key) as the current server icon. ``sync=true`` publishes an ``icon_updated`` event so live consumers pick the change up.
		 */
		post: operations["server.icons.select"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/icons/history": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List server icon history
		 * @description Return recently-stored icons for one server, ordered by upload time (newest first). Each entry includes a stable storage key that can be passed to ``POST /v1/servers/{id}/icon/select``.
		 */
		get: operations["server.icons.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/integrations/voting": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get voting links
		 * @description Return external vote-page URLs configured for one server.
		 */
		get: operations["server.voting"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update voting links
		 * @description Update vote-page URLs used by reminders and external vote plugins. Field absent ⇒ keep current; ``null`` ⇒ clear; non-empty string ⇒ store.
		 */
		patch: operations["server.voting.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/launch-manifest": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server launch manifest
		 * @description Return the LeavePulse launcher manifest published for this server (Minecraft version, mod loader, inline or .mrpack content, JVM hints, endpoint and whitelist). 404 when none is published.
		 */
		get: operations["server.launch_manifest"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/live": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get live status
		 * @description Return the latest live availability snapshot for one server, including online players, MOTD and freshness.
		 */
		get: operations["server.live"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/maintenance": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get maintenance state
		 * @description Return current maintenance flag and operator-supplied message for one server.
		 */
		get: operations["server.maintenance"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Set maintenance state
		 * @description Enable or disable maintenance mode and set the operator message. Requires the server profile edit permission.
		 */
		patch: operations["server.maintenance.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/motd": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update server MOTD
		 * @description Persist a new MOTD for one server and optionally push the change to connected agents. Requires the server profile edit permission.
		 */
		patch: operations["server.motd.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/ownership": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Check ownership
		 * @description Return ``is_owner`` and ``can_edit`` flags for the authenticated user against one server. ``can_edit`` is true when the user owns the project, holds a platform override, or has any of the server-edit permissions through project RBAC.
		 */
		get: operations["server.ownership"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/root": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Resolve root server
		 * @description Return the root server and project for one server. For a root server, ``root_server_id`` equals ``server_id``; for a subserver it points at the parent.
		 */
		get: operations["server.root"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/social/discord": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get Discord link
		 * @description Return the Discord-link configuration for one server.
		 */
		get: operations["server.discord"];
		put?: never;
		post?: never;
		/**
		 * Remove Discord link
		 * @description Clear the Discord-link state for one server.
		 */
		delete: operations["server.discord.unlink"];
		options?: never;
		head?: never;
		/**
		 * Update Discord link
		 * @description Toggle ``enabled`` and/or set the invite URL. Absence of a field keeps its current value; ``null`` clears.
		 */
		patch: operations["server.discord.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/social/discord/verify": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Verify Discord link
		 * @description Validate the Discord invite against the Discord API and pin it to the server. When ``invite_url`` is omitted, the currently-stored invite is verified.
		 */
		post: operations["server.discord.verify"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/social/links": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get social links
		 * @description Return external social URLs configured for one server.
		 */
		get: operations["server.social"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update social links
		 * @description Update one or more social URLs. Field absent ⇒ keep current; field set to ``null`` ⇒ clear; field set to a non-empty string ⇒ store that URL.
		 */
		patch: operations["server.social.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/social/verify": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Verify a non-Discord social link
		 * @description Run platform verification for the given social platform and URL. On success the verified URL replaces the stored one for that platform.
		 */
		post: operations["server.social.verify"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server stats
		 * @description Return aggregated statistics for one server over a named period, derived from its event stream. Owner/admin only.
		 */
		get: operations["server.stats"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/subservers": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List subserver ids
		 * @description Return numeric ids of servers attached as subservers under one parent. Use ``GET /v1/servers/resolve`` to fetch their details.
		 */
		get: operations["server.subservers.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/subservers/auto-link-code": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Issue subserver auto-link code
		 * @description Issue a short link code that the LeavePulse Minecraft plugin can redeem to automatically create and attach a subserver to this network. Only valid on network-role servers.
		 */
		post: operations["server.subservers.issue_link_code"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/team": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get public team
		 * @description Return the public team listing for one server: owner first, then members sorted by role priority. Only roles flagged as public are included.
		 */
		get: operations["server.team"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/team-sync/minecraft-targets": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List Minecraft group targets
		 * @description Return the mapped LuckPerms groups for one server with the resolved desired set of Minecraft UUIDs per role. Optionally filter to one role via ``role_id``.
		 */
		get: operations["server.team_sync.targets"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/team/manage": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get team management view
		 * @description Return the full team payload for management UI: roles, members with scoped role assignments, and the list of sibling servers under the same project. Requires ``project.members.manage`` or ``project.roles.manage``.
		 */
		get: operations["server.team.manage"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/team/members": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Create team member
		 * @description Add one user to the team and assign initial roles. Requires ``project.members.manage``; assigning roles additionally requires ``project.roles.manage``.
		 */
		post: operations["server.members.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/team/members/{member_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Delete team member
		 * @description Remove a member from the team. The project owner cannot be removed; non-owner actors can only act on members with strictly lower role priority.
		 */
		delete: operations["server.members.delete"];
		options?: never;
		head?: never;
		/**
		 * Update team member
		 * @description Edit member visibility, state, ordering, or role grants. Field absent ⇒ keep current value; supplying ``role_ids`` or ``role_assignments`` replaces the current grant set.
		 */
		patch: operations["server.members.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/team/roles": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Create team role
		 * @description Create a custom team role. Requires ``project.roles.manage``. Non-owners cannot create roles at or above their own role priority.
		 */
		post: operations["server.roles.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/team/roles/{role_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Delete team role
		 * @description Delete a custom team role. Managed roles can only be removed by the project owner. Non-owners cannot delete roles at or above their own role priority.
		 */
		delete: operations["server.roles.delete"];
		options?: never;
		head?: never;
		/**
		 * Update team role
		 * @description Edit any subset of role fields. Field absent ⇒ keep current; ``discord_role_id`` and ``luckperms_group`` accept empty strings to clear. Changing Discord or LuckPerms links detaches all auto-imported member grants tied to the previous link.
		 */
		patch: operations["server.roles.update"];
		trace?: never;
	};
	"/v1/servers/{server_id}/telemetry": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get server telemetry
		 * @description Return the verified-plugin telemetry summary (Spark/JVM/system metrics) for one server over a named period. Owner/admin only.
		 */
		get: operations["server.telemetry"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/translations": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List server text translations
		 * @description Manual catalog-field translations stored for a server.
		 */
		get: operations["server.translations.list"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/translations/{field}/{locale}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** Delete a server text translation */
		delete: operations["server.translations.delete"];
		options?: never;
		head?: never;
		/**
		 * Upsert a server text translation
		 * @description Set the manual translation for one field/locale pair.
		 */
		patch: operations["server.translations.set"];
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get public whitelist config
		 * @description Return the public whitelist configuration for a server: binding, form, the caller's own application, grant targets, enforcement servers, and proof entry.
		 */
		get: operations["server.whitelist.public"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/applications": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List whitelist applications
		 * @description List submitted applications for one server's whitelist. Optionally filter by status (``pending``, ``approved``, ``denied``).
		 */
		get: operations["server.whitelist.applications"];
		put?: never;
		/**
		 * Submit a whitelist application
		 * @description Submit the current user's whitelist application for one server. Applicant identity (Minecraft + Discord) is resolved server-side from the authenticated session — the body only carries the chosen Minecraft account type / nick / uuid and the form answers. Idempotent: an already-open application is returned unchanged.
		 */
		post: operations["server.whitelist.apply"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/applications/{application_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Set whitelist application status
		 * @description Set the status of one application explicitly. Use ``approve`` or ``deny`` for the common cases — this endpoint exists for status values outside the standard approve/deny flow.
		 */
		patch: operations["application.set_status"];
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/applications/{application_id}/approve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Approve whitelist application
		 * @description Approve one pending application. Requires the caller to be the server owner or hold the whitelist review permission.
		 */
		post: operations["application.approve"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/applications/{application_id}/deny": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Deny whitelist application
		 * @description Deny one pending application. Requires the caller to be the server owner or hold the whitelist review permission.
		 */
		post: operations["application.deny"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/applications/{application_id}/resubmit": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Resubmit a whitelist application
		 * @description Resubmit the current user's own application after it was sent back for revision. Only the application's owner may resubmit, and only while it is awaiting changes (status ``revision``).
		 */
		patch: operations["application.resubmit"];
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/config": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get whitelist config
		 * @description Return the whitelist configuration scoped to one server: enforcement mode, application form, and current entries.
		 */
		get: operations["server.whitelist"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/direct": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List direct whitelist entries
		 * @description List operator-added direct entries on one server's whitelist. Direct entries bypass the application form and are typically used by server staff.
		 */
		get: operations["server.whitelist.direct"];
		put?: never;
		/**
		 * Add direct whitelist entry
		 * @description Add one direct entry to a server's whitelist by Minecraft nick. Requires the caller to be the server owner or hold the whitelist manage permission.
		 */
		post: operations["server.whitelist.add_direct"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/direct/{entry_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Remove direct whitelist entry
		 * @description Remove one direct entry by its numeric id.
		 */
		delete: operations["server.whitelist.remove_direct"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/imports": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List whitelist import jobs
		 * @description List bulk-import jobs for one server's whitelist, newest first. Optionally filter by status (``queued``, ``running``, ``completed``, ``failed``).
		 */
		get: operations["server.whitelist.imports"];
		put?: never;
		/**
		 * Create whitelist import job
		 * @description Create a bulk-import job from an uploaded source. The matching knobs (source / field priority, manual overrides, direct entries) ride in ``options`` as opaque JSON. ``dry_run`` validates without persisting.
		 */
		post: operations["server.whitelist.create_import"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/imports/pull-minecraft": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Pull whitelist from Minecraft
		 * @description Trigger a live import that pulls the running server's whitelist via the agent and processes it against the binding's form.
		 */
		post: operations["server.whitelist.pull_minecraft_import"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/servers/{server_id}/whitelist/imports/{job_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get whitelist import job
		 * @description Return one import job by its numeric id.
		 */
		get: operations["server.whitelist.import"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/stats/filter": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Catalog filter stats
		 * @description Return aggregated counts for the public catalog filters. All query parameters mirror the catalog search parameters.
		 */
		get: operations["stats.filter"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/stats/live": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Live dashboard stats
		 * @description Return aggregate online totals for the public live dashboard: servers online, players online, agent coverage, and profile metrics.
		 */
		get: operations["stats.live"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/users/public-profiles": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Batch get public profile cards
		 * @description Return compact public profile cards for many users in one round-trip. Used by catalog pages that need owner chips alongside server cards.
		 */
		post: operations["users.batch"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/users/search": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Search public profiles by username
		 * @description Username-prefix search returning compact public profile cards. Used by the launcher's share dialog to pick a friend by name.
		 */
		get: operations["users.search"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/users/{user_ref}/profile/activity": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Public activity heatmap
		 * @description Per-day activity counts for the last N days (default 365), respecting profile privacy.
		 */
		get: operations["user.heatmap"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/users/{user_ref}/profile/gameplay": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Public gameplay summary
		 * @description Privacy-aware gameplay summary (playtime, linked accounts, most played server, streaks) for a public profile.
		 */
		get: operations["user.gameplay"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/users/{user_ref}/profile/ownership": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Public ownership summary
		 * @description Owned public projects and standalone servers shown on a profile page (empty when the owner hid ownership).
		 */
		get: operations["user.ownership"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/users/{user_ref}/public-profile": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get a user's public profile
		 * @description Resolve a user's public profile by numeric id or profile slug. Returns 404 when the user does not exist or has no public profile.
		 */
		get: operations["user.get"];
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/whitelist/bindings": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Create whitelist binding
		 * @description Create a binding attaching a form + scope rule to a server. The caller must hold whitelist-config edit permission on the target server's project.
		 */
		post: operations["whitelist.bindings.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/whitelist/bindings/{binding_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/**
		 * Delete whitelist binding
		 * @description Delete a binding and reconcile away any role grants it issued. Caller must have whitelist-config edit permission on the project.
		 */
		delete: operations["binding.delete"];
		options?: never;
		head?: never;
		/**
		 * Update whitelist binding
		 * @description Replace a binding's configuration. The full payload is supplied (no partial merges); role-grant reconciliation runs server-side.
		 */
		patch: operations["binding.update"];
		trace?: never;
	};
	"/v1/whitelist/bindings/{binding_id}/actions/test-notifications": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		/**
		 * Send test notifications for a binding
		 * @description Fire a dummy application-status event through the binding's notification channels so admins can verify delivery. ``audience`` selects the template set (``owner | applicant``).
		 */
		post: operations["binding.test"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/whitelist/bindings/{binding_id}/direct/entries": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List direct whitelist entries (by binding)
		 * @description Same as ``/v1/servers/{server_id}/whitelist/direct`` but addressed by binding id. Useful when the caller already holds a binding reference and shouldn't have to resolve back to ``server_id``.
		 */
		get: operations["binding.entries.list"];
		put?: never;
		/** Add direct whitelist entry (by binding) */
		post: operations["binding.entries.add"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/whitelist/bindings/{binding_id}/direct/entries/{entry_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		/** Remove direct whitelist entry (by binding) */
		delete: operations["binding.entries.remove"];
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/whitelist/forms": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * List whitelist forms
		 * @description Return whitelist forms the current user can manage — own forms and forms attached to workspaces they're a member of. Optional ``project_id`` narrows down to one workspace; ``search`` does a case-insensitive name match.
		 */
		get: operations["whitelist.forms.list"];
		put?: never;
		/**
		 * Create whitelist form
		 * @description Create a whitelist application form. Caller must have manage permission on the target project (or none for a personal form).
		 */
		post: operations["whitelist.forms.create"];
		delete?: never;
		options?: never;
		head?: never;
		patch?: never;
		trace?: never;
	};
	"/v1/whitelist/forms/{form_id}": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		/**
		 * Get whitelist form
		 * @description Return one whitelist form with all field configs, import mapping and auto-approve rules. Caller must have manage permission on the form's project (or own the form).
		 */
		get: operations["form.get"];
		put?: never;
		post?: never;
		/**
		 * Delete whitelist form
		 * @description Permanently delete one whitelist form and its field configs. Caller must have manage permission on the form's project (or own the form).
		 */
		delete: operations["form.delete"];
		options?: never;
		head?: never;
		/**
		 * Update whitelist form
		 * @description Apply a partial update to a whitelist form.
		 */
		patch: operations["form.update"];
		trace?: never;
	};
	"/v1/whitelist/forms/{form_id}/import-mapping": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		get?: never;
		put?: never;
		post?: never;
		delete?: never;
		options?: never;
		head?: never;
		/**
		 * Update form import mapping
		 * @description Replace the import field mapping for one whitelist form.
		 */
		patch: operations["form.set_import_mapping"];
		trace?: never;
	};
}
export type webhooks = Record<string, never>;
export interface components {
	schemas: {
		/** AccountDeletionResult */
		AccountDeletionResult: {
			scheduled_at: string;
			status: string;
		};
		/** AccountExport */
		AccountExport: {
			identities?: components["schemas"]["AccountExportIdentity"][];
			sessions?: components["schemas"]["AccountExportSession"][];
			user: components["schemas"]["UserProfile"];
		};
		/** AccountExportIdentity */
		AccountExportIdentity: {
			avatar_url?: string | null;
			created_at?: string | null;
			display_name?: string | null;
			email?: string | null;
			/** @default false */
			email_verified: boolean;
			last_login_at?: string | null;
			provider: string;
		};
		/** AccountExportSession */
		AccountExportSession: {
			expires_at?: string | null;
			id: string;
			issued_at?: string | null;
			revoked_at?: string | null;
		};
		/**
		 * ActivityType
		 * @description Kind of a recent public-activity entry.
		 * @enum {string}
		 */
		ActivityType: "vote" | "comment" | "favorite" | "unknown";
		/** AdminChangeProjectSlugRequest */
		AdminChangeProjectSlugRequest: {
			slug?: string | null;
		};
		/** AdminDeleteResponse */
		AdminDeleteResponse: {
			ok: boolean;
		};
		/** AdminForceCreateRequest */
		AdminForceCreateRequest: {
			address: string;
			/** @default false */
			is_verified?: boolean;
			name: string;
			owner_id: components["schemas"]["Snowflake"];
			parent_id?: components["schemas"]["Snowflake"] | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			server_role: components["schemas"]["ServerRole"];
		};
		/** AdminMinecraftAccount */
		AdminMinecraftAccount: {
			account_type: components["schemas"]["MinecraftAccountType"];
			created_at?: string | null;
			id: string;
			identity_scope_id?: string | null;
			identity_scope_type: components["schemas"]["MinecraftIdentityScopeType"];
			link_source: components["schemas"]["MinecraftLinkSource"];
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			proof_server_id?: string | null;
			updated_at?: string | null;
			uuid_type?: components["schemas"]["MinecraftUuidType"] | null;
			verification_status: components["schemas"]["MinecraftVerificationStatus"];
			verified_at?: string | null;
		};
		/** AdminMinecraftAccountDeleteResult */
		AdminMinecraftAccountDeleteResult: {
			account_id: string;
			status: string;
		};
		/** AdminMinecraftAccountWriteRequest */
		AdminMinecraftAccountWriteRequest: {
			minecraft_nick: string;
			minecraft_uuid?: string | null;
		};
		/** AdminProject */
		AdminProject: {
			/** Format: date-time */
			created_at: string;
			creator_user_id?: components["schemas"]["Snowflake"] | null;
			display_server_id?: components["schemas"]["Snowflake"] | null;
			id: components["schemas"]["Snowflake"];
			lifecycle_state?: components["schemas"]["LifecycleState"];
			name: string;
			online_server_id?: components["schemas"]["Snowflake"] | null;
			online_strategy: components["schemas"]["OnlineStrategy"];
			owner_id?: components["schemas"]["Snowflake"] | null;
			/** @default 0 */
			public_server_count: number;
			root_server_id?: components["schemas"]["Snowflake"] | null;
			/** @default 0 */
			server_count: number;
			slug?: string | null;
			/** Format: date-time */
			updated_at: string;
			verified_plugin_rollout_mode?: components["schemas"]["RolloutMode"];
			verified_plugin_rollout_state?:
				| components["schemas"]["RolloutState"]
				| null;
			/** @default 0 */
			verified_server_count: number;
		};
		/** AdminProjectDeleteResponse */
		AdminProjectDeleteResponse: {
			ok: boolean;
		};
		/** AdminProjectListResponse */
		AdminProjectListResponse: {
			items: components["schemas"]["AdminProject"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** AdminRenameProjectRequest */
		AdminRenameProjectRequest: {
			name: string;
		};
		/** AdminRole */
		AdminRole: {
			id: string;
			key: string;
			name: string;
			permissions?: string[];
		};
		/** AdminRoleDeleteResponse */
		AdminRoleDeleteResponse: {
			role_id: string;
		};
		/** AdminRoleListResponse */
		AdminRoleListResponse: {
			items?: components["schemas"]["AdminRole"][];
		};
		/** AdminRoleRequest */
		AdminRoleRequest: {
			key: string;
			name: string;
			permissions?: string[];
		};
		/** AdminServerListResponse */
		AdminServerListResponse: {
			items?: components["schemas"]["AdminServerSummary"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** AdminServerSummary */
		AdminServerSummary: {
			/** Format: date-time */
			created_at: string;
			creator_user_id?: string | null;
			id: string;
			ip_or_domain: string;
			/** @default false */
			is_hidden: boolean;
			/** @default false */
			is_verified: boolean;
			name: string;
			owner_id?: string | null;
			parent_id?: string | null;
			project_id?: string | null;
			server_role: components["schemas"]["ServerRole"];
			/** Format: date-time */
			updated_at: string;
			verified_plugin_compatibility?: string | null;
			verified_plugin_last_seen_at?: string | null;
			verified_plugin_platform?: string | null;
			verified_plugin_protocol_generation?: number | null;
			verified_plugin_rollout_state?:
				| components["schemas"]["RolloutState"]
				| null;
			verified_plugin_version?: string | null;
		};
		/** AdminServerUpdateRequest */
		AdminServerUpdateRequest: {
			is_hidden?: boolean;
			is_verified?: boolean;
			owner_id?: components["schemas"]["Snowflake"] | null;
			parent_id?: components["schemas"]["Snowflake"] | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			server_role?: components["schemas"]["ServerRole"];
		};
		/** AdminSetProjectOnlineStrategyRequest */
		AdminSetProjectOnlineStrategyRequest: {
			online_strategy: components["schemas"]["OnlineStrategy"];
		};
		/** AdminSetProjectRolloutModeRequest */
		AdminSetProjectRolloutModeRequest: {
			verified_plugin_rollout_mode: components["schemas"]["RolloutMode"];
		};
		/** AdminTransferOwnershipRequest */
		AdminTransferOwnershipRequest: {
			owner_id?: components["schemas"]["Snowflake"] | null;
		};
		/** AdminUserDetail */
		AdminUserDetail: {
			avatar_url?: string | null;
			bio?: string | null;
			created_at: string;
			discord_subject?: string | null;
			email?: string | null;
			id: string;
			/** @default false */
			is_shadow: boolean;
			minecraft_accounts?: components["schemas"]["AdminMinecraftAccount"][];
			roles?: string[];
			status: components["schemas"]["UserStatus"];
			updated_at?: string | null;
			username: string;
		};
		/** AdminUserDiscordUpdateRequest */
		AdminUserDiscordUpdateRequest: {
			discord_subject?: string | null;
		};
		/** AdminUserListResponse */
		AdminUserListResponse: {
			items?: components["schemas"]["AdminUserSummary"][];
			/** @default 1 */
			page: number;
			/** @default 50 */
			per_page: number;
			total: number;
		};
		/** AdminUserSummary */
		AdminUserSummary: {
			avatar_url?: string | null;
			created_at: string;
			email?: string | null;
			id: string;
			roles?: string[];
			status: components["schemas"]["UserStatus"];
			username: string;
		};
		/** AdminUserUpdateRequest */
		AdminUserUpdateRequest: {
			avatar_url?: string | null;
			bio?: string | null;
			email?: string | null;
			status: components["schemas"]["UserStatus"];
			username: string;
		};
		/** AvatarUrlRequest */
		AvatarUrlRequest: {
			avatar_url?: string | null;
		};
		/** BatchPublicProfilesRequest */
		BatchPublicProfilesRequest: {
			user_ids: components["schemas"]["Snowflake"][];
		};
		/** BatchPublicProfilesResponse */
		BatchPublicProfilesResponse: {
			items?: components["schemas"]["PublicProfileCard"][];
		};
		/** BatchResolveRequest */
		BatchResolveRequest: {
			user_ids: components["schemas"]["Snowflake"][];
		};
		/** BatchResolveResponse */
		BatchResolveResponse: {
			items?: components["schemas"]["PlatformPermsRow"][];
		};
		/** BridgeSettings */
		BridgeSettings: {
			discord_to_mc_channel_id?: string | null;
			discord_to_mc_enabled: boolean;
			discord_to_mc_mode: string;
			discord_to_mc_plain_format: string;
			discord_to_mc_spoof_content_format: string;
			discord_to_mc_target_channel?: string | null;
			enabled: boolean;
			mc_to_discord_channel_id?: string | null;
			mc_to_discord_chat_routing?: {
				[key: string]: unknown;
			};
			mc_to_discord_enabled: boolean;
			mc_to_discord_notifications?: {
				[key: string]: unknown;
			};
			mc_to_discord_use_webhook: boolean;
			minecraft_chat_filter?: {
				[key: string]: unknown;
			};
			nickname_sync_enabled: boolean;
			status_notifications?: {
				[key: string]: unknown;
			};
		};
		/** BridgeSettingsUpdateRequest */
		BridgeSettingsUpdateRequest: {
			discord_to_mc_channel_id?: string | null;
			discord_to_mc_enabled?: boolean | null;
			discord_to_mc_mode?: string | null;
			discord_to_mc_plain_format?: string | null;
			discord_to_mc_spoof_content_format?: string | null;
			discord_to_mc_target_channel?: string | null;
			enabled?: boolean | null;
			mc_to_discord_channel_id?: string | null;
			mc_to_discord_chat_routing?: {
				[key: string]: unknown;
			} | null;
			mc_to_discord_enabled?: boolean | null;
			mc_to_discord_notifications?: {
				[key: string]: unknown;
			} | null;
			mc_to_discord_use_webhook?: boolean | null;
			minecraft_chat_filter?: {
				[key: string]: unknown;
			} | null;
			nickname_sync_enabled?: boolean | null;
			status_notifications?: {
				[key: string]: unknown;
			} | null;
		};
		/** Build */
		Build: {
			access: string;
			config_blob_sha256?: string | null;
			created_at: string;
			has_config_blob: boolean;
			icon?: string | null;
			id: string;
			is_public: boolean;
			manifest: components["schemas"]["BuildManifest"];
			name: string;
			owner_id: string;
			share_token?: string | null;
			summary: string;
			updated_at: string;
			updated_revision: number;
		};
		/** BuildCreateRequest */
		BuildCreateRequest: {
			icon?: string | null;
			manifest?: components["schemas"]["BuildManifest"];
			name: string;
			/** @default  */
			summary?: string;
		};
		/** BuildList */
		BuildList: {
			items: components["schemas"]["BuildSummary"][];
			/** @default 1 */
			page: number;
			/** @default 50 */
			per_page: number;
			total: number;
		};
		/** BuildManifest */
		BuildManifest: {
			game_args?: string[];
			/** @default  */
			game_version: string;
			jvm_args?: string[];
			/** @default  */
			loader_kind: string;
			/** @default  */
			loader_version: string;
			/** @default 0 */
			memory_max_mb: number;
			/** @default 0 */
			memory_min_mb: number;
			mods?: components["schemas"]["BuildManifestMod"][];
			/** @default 1 */
			schema_version: number;
		};
		/** BuildManifestMod */
		BuildManifestMod: {
			/** @default false */
			enabled: boolean;
			/** @default  */
			file_path: string;
			kind: string;
			name: string;
			/** @default  */
			provider: string;
			/** @default  */
			sha256: string;
			/** @default  */
			source_url: string;
			/** @default  */
			version: string;
		};
		/** BuildSummary */
		BuildSummary: {
			access: string;
			created_at: string;
			has_config_blob: boolean;
			icon?: string | null;
			id: string;
			is_public: boolean;
			name: string;
			owner_id: string;
			summary: string;
			updated_at: string;
			updated_revision: number;
		};
		/** BuildUpdateRequest */
		BuildUpdateRequest: {
			icon?: string | null;
			manifest?: components["schemas"]["BuildManifest"] | null;
			name?: string | null;
			summary?: string | null;
		};
		/** ChannelPref */
		ChannelPref: {
			/** @default  */
			address: string;
			/** @default true */
			available: boolean;
			channel: string;
			/** @default true */
			confirmed: boolean;
			/** @default false */
			enabled: boolean;
		};
		/** CheckoutRequest */
		CheckoutRequest: {
			cancel_url?: string | null;
			context?: {
				[key: string]: unknown;
			} | null;
			coupon_code?: string | null;
			/** @default false */
			create_subscription?: boolean;
			/** @default false */
			enable_auto_pull?: boolean;
			idempotency_key?: string | null;
			payment_method_id?: string | null;
			product_code?: string | null;
			product_id?: string | null;
			/** @default 1 */
			quantity?: number;
			/** @default false */
			save_card?: boolean;
			success_url?: string | null;
		};
		/** CheckoutResult */
		CheckoutResult: {
			checkout_url?: string | null;
			order: components["schemas"]["Order"];
		};
		/** Collaborator */
		Collaborator: {
			build_id: string;
			can_edit: boolean;
			user_id: string;
		};
		/** CollaboratorAddRequest */
		CollaboratorAddRequest: {
			/** @default false */
			can_edit?: boolean;
			user_id: string;
		};
		/** CollaboratorList */
		CollaboratorList: {
			items: components["schemas"]["Collaborator"][];
		};
		/** Comment */
		Comment: {
			author: components["schemas"]["CommentAuthor"];
			content: string;
			created_at: string;
			edited_at?: string | null;
			id: components["schemas"]["Snowflake"];
			/** @default 0 */
			likes: number;
			replies?: components["schemas"]["CommentReply"][];
			translation?: components["schemas"]["TextTranslation"] | null;
		};
		/** CommentAuthor */
		CommentAuthor: {
			avatar_url?: string | null;
			id: components["schemas"]["Snowflake"];
			slug?: string | null;
			username?: string | null;
		};
		/** CommentCreateRequest */
		CommentCreateRequest: {
			content: string;
		};
		/** CommentLikeResult */
		CommentLikeResult: {
			comment_id: components["schemas"]["Snowflake"];
			liked: boolean;
			likes: number;
		};
		/** CommentList */
		CommentList: {
			items: components["schemas"]["Comment"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** CommentReply */
		CommentReply: {
			author: components["schemas"]["CommentAuthor"];
			content: string;
			created_at: string;
			edited_at?: string | null;
			id: components["schemas"]["Snowflake"];
			translation?: components["schemas"]["TextTranslation"] | null;
		};
		/** CompleteLinkRequest */
		CompleteLinkRequest: {
			project_id: components["schemas"]["Snowflake"];
			state: string;
		};
		/** CompleteLinkResult */
		CompleteLinkResult: {
			guild_id: string;
			project_id: components["schemas"]["Snowflake"];
			status: components["schemas"]["LinkResultStatus"];
		};
		/** ConfigBlobConfirmRequest */
		ConfigBlobConfirmRequest: {
			sha256: string;
		};
		/** ConfigBlobRef */
		ConfigBlobRef: {
			download_url: string;
			sha256: string;
		};
		/** ConfigBlobUpload */
		ConfigBlobUpload: {
			expires_in_seconds: number;
			object_key: string;
			upload_url: string;
		};
		/** ConfigBlobUploadRequest */
		ConfigBlobUploadRequest: {
			/** @default 0 */
			size_bytes?: number;
		};
		/** CreateLinkTokenRequest */
		CreateLinkTokenRequest: {
			project_id: components["schemas"]["Snowflake"];
		};
		/** CreatePatTokenRequest */
		CreatePatTokenRequest: {
			audience?: string | null;
			/** @default 30 */
			expires_in_days?: number;
			name: string;
			note?: string | null;
			scope?: string[];
		};
		/** CreatePatTokenResult */
		CreatePatTokenResult: {
			expires_in: number;
			item: components["schemas"]["PatToken"];
			token: string;
			token_type: string;
		};
		/** CreateProjectServerRequest */
		CreateProjectServerRequest: {
			address: string;
			description?: string | null;
			name?: string | null;
		};
		/** CreateStatusOverrideRequest */
		CreateStatusOverrideRequest: {
			/** Format: date-time */
			ends_at: string;
			mode: string;
			note?: string | null;
			/** Format: date-time */
			starts_at: string;
		};
		/** Currency */
		Currency: {
			ccy: number;
			code: string;
			symbol: string;
		};
		/** Customer */
		Customer: {
			address_line: string;
			ccy: number;
			city: string;
			company_name?: string | null;
			country: string;
			created_at: string;
			customer_type: string;
			first_name: string;
			id: string;
			/** @default none */
			kyc_status: string;
			kyc_type: string;
			last_name: string;
			postal_code: string;
			product_scope: string;
			tax_country?: string | null;
			tax_id?: string | null;
			updated_at: string;
			user_id: string;
			vat_number?: string | null;
			vat_valid?: boolean | null;
		};
		/** CustomerUpdateRequest */
		CustomerUpdateRequest: {
			address_line: string;
			ccy?: number | null;
			city: string;
			company_name?: string | null;
			country: string;
			customer_type?: string | null;
			first_name: string;
			last_name: string;
			postal_code: string;
			tax_country?: string | null;
			tax_id?: string | null;
			vat_number?: string | null;
		};
		/** DashboardAccount */
		DashboardAccount: {
			nick?: string | null;
			type?: string | null;
			uuid?: string | null;
		};
		/** DashboardDailyActivityPoint */
		DashboardDailyActivityPoint: {
			/** @default 0 */
			count: number;
			date: string;
		};
		/** DashboardServerItem */
		DashboardServerItem: {
			/** @default 0 */
			activity: number;
			last_seen?: string | null;
			playtime_seconds?: number | null;
			server_id: components["schemas"]["Snowflake"];
		};
		/** DeleteAck */
		DeleteAck: {
			deleted: boolean;
		};
		/** DeleteBuildResult */
		DeleteBuildResult: {
			build_id: string;
		};
		/** DeleteCommentResult */
		DeleteCommentResult: {
			comment_id: components["schemas"]["Snowflake"];
		};
		/** DeleteStatusOverrideResponse */
		DeleteStatusOverrideResponse: {
			/** @default true */
			ok: boolean;
		};
		/** DeliveryPreferences */
		DeliveryPreferences: {
			channels?: components["schemas"]["ChannelPref"][];
			/** @default 1 */
			version: number;
		};
		/** DeliveryPreferencesUpdate */
		DeliveryPreferencesUpdate: {
			channels?: components["schemas"]["ChannelPref"][];
		};
		/** DeviceApproveRequest */
		DeviceApproveRequest: {
			user_code: string;
		};
		/** DeviceApproveResult */
		DeviceApproveResult: {
			error?: string | null;
			ok: boolean;
		};
		/**
		 * DevicePollStatus
		 * @description OAuth device-flow token polling status.
		 * @enum {string}
		 */
		DevicePollStatus:
			| "approved"
			| "pending"
			| "slow_down"
			| "expired"
			| "denied"
			| "unknown";
		/** DeviceStartRequest */
		DeviceStartRequest: {
			client_id: string;
			scope?: string[];
		};
		/** DeviceStartResult */
		DeviceStartResult: {
			device_code: string;
			expires_in: number;
			interval: number;
			user_code: string;
			verification_uri: string;
			verification_uri_complete: string;
		};
		/** DeviceTokenRequest */
		DeviceTokenRequest: {
			device_code: string;
		};
		/** DeviceTokenResult */
		DeviceTokenResult: {
			access_token?: string | null;
			expires_in?: number | null;
			refresh_token?: string | null;
			refresh_token_expires_in?: number | null;
			status: components["schemas"]["DevicePollStatus"];
			token_type?: string | null;
		};
		/** DiscordLink */
		DiscordLink: {
			enabled: boolean;
			guild_id?: string | null;
			invite_url?: string | null;
			member_count?: number | null;
			server_id: components["schemas"]["Snowflake"];
			verified: boolean;
			verified_at?: string | null;
		};
		/** DiscordLinkUpdateRequest */
		DiscordLinkUpdateRequest: {
			enabled?: boolean;
			invite_url?: string | null;
		};
		/**
		 * DiscordMembershipMode
		 * @description When Discord membership is required for a whitelist binding.
		 * @default disabled
		 * @enum {string}
		 */
		DiscordMembershipMode:
			| "disabled"
			| "on_apply"
			| "on_join"
			| "both"
			| "unknown";
		/** DiscordRoleTarget */
		DiscordRoleTarget: {
			desired_discord_user_ids?: string[];
			discord_role_id: string;
			role_id: components["schemas"]["Snowflake"];
			role_key: string;
			role_name: string;
		};
		/** DiscordRoleTargets */
		DiscordRoleTargets: {
			items?: components["schemas"]["DiscordRoleTarget"][];
			project_id: components["schemas"]["Snowflake"];
		};
		/** DiscordVerifyRequest */
		DiscordVerifyRequest: {
			invite_url?: string | null;
		};
		/** DiscoveryApproveResult */
		DiscoveryApproveResult: {
			candidate_id: number;
			server_id?: number | null;
			status: string;
		};
		/** DiscoveryCandidateEditRequest */
		DiscoveryCandidateEditRequest: {
			edits: {
				[key: string]: unknown;
			};
		};
		/** DiscoveryIgnoreResult */
		DiscoveryIgnoreResult: {
			candidate_id: number;
			status: string;
		};
		/**
		 * DiscoverySort
		 * @description Admin discovery-candidate ordering (a different axis from the catalog).
		 * @enum {string}
		 */
		DiscoverySort: "sources" | "discord_members" | "mc_online" | "unknown";
		/** DismissResult */
		DismissResult: {
			/** @default false */
			dismissed: boolean;
		};
		/** DnsVerification */
		DnsVerification: {
			checked_at?: string | null;
			expires_at?: string | null;
			reason?: string | null;
			record_name: string;
			/** @default TXT */
			record_type: string;
			record_value: string;
			server: components["schemas"]["VerificationServerSummary"];
			status: components["schemas"]["VerificationStatus"];
			token: string;
		};
		/** EmailChangeRequest */
		EmailChangeRequest: {
			current_password?: string | null;
			email: string;
			totp_code?: string | null;
		};
		/** EmailChangeResult */
		EmailChangeResult: {
			status: string;
		};
		/** EmailConfirmRequest */
		EmailConfirmRequest: {
			token: string;
		};
		/** EmailConfirmRequestPayload */
		EmailConfirmRequestPayload: {
			/** @default  */
			audience: string;
		};
		/** EmailConfirmRequestResult */
		EmailConfirmRequestResult: {
			/** @default  */
			detail: string;
			/** @default false */
			sent: boolean;
		};
		/** EmailConfirmResult */
		EmailConfirmResult: {
			/** @default false */
			confirmed: boolean;
			/** @default  */
			detail: string;
		};
		/**
		 * EnforcementMode
		 * @description How a whitelist binding enforces non-whitelisted players.
		 * @enum {string}
		 */
		EnforcementMode: "kick" | "restrict" | "unknown";
		/** FilterCount */
		FilterCount: {
			key: string;
			value: number;
		};
		/** FilterStats */
		FilterStats: {
			access?: {
				[key: string]: number;
			};
			editions?: {
				[key: string]: number;
			};
			features?: {
				[key: string]: number;
			};
			hosting?: {
				[key: string]: number;
			};
			regions?: {
				[key: string]: number;
			};
			roles?: {
				[key: string]: number;
			};
			total: number;
			verified?: {
				[key: string]: number;
			};
		};
		/** ForcePingResult */
		ForcePingResult: {
			cooldown_seconds?: number | null;
			enqueued: boolean;
			hourly_limit?: number | null;
			reason?: string | null;
			remaining_hourly?: number | null;
			retry_after_seconds?: number | null;
		};
		/**
		 * FreshnessState
		 * @description Whether the latest live snapshot is recent enough to trust.
		 * @default stale
		 * @enum {string}
		 */
		FreshnessState: "fresh" | "stale" | "unknown";
		/**
		 * GameEdition
		 * @description Minecraft edition(s) a server speaks.
		 * @enum {string}
		 */
		GameEdition: "java" | "bedrock" | "hybrid" | "unknown";
		/** GatewayToken */
		GatewayToken: {
			audience: string;
			expires_in: number;
			link_code?: string | null;
			roles?: string[];
			scope?: string[];
			server_id: components["schemas"]["Snowflake"];
			session_id: string;
			token: string;
			token_type: string;
		};
		/** GatewayTokenRequest */
		GatewayTokenRequest: {
			expires_in_hours?: number | null;
		};
		/** GlobalServerStats */
		GlobalServerStats: {
			total_networks: number;
			total_servers: number;
			total_subservers: number;
		};
		/** HistoryPoint */
		HistoryPoint: {
			avg_online?: number | null;
			collected_at: string;
			/** @default false */
			exclude_from_score: boolean;
			last_online?: number | null;
			max_players?: number | null;
			peak_online?: number | null;
			status?: components["schemas"]["OnlineState"] | null;
			status_source?: components["schemas"]["TrustState"] | null;
		};
		/** HistoryResponse */
		HistoryResponse: {
			period: string;
			points?: components["schemas"]["HistoryPoint"][];
		};
		/** IconEntry */
		IconEntry: {
			created_at: string;
			key: string;
			source: components["schemas"]["IconSource"];
			url: string;
		};
		/** IconHistory */
		IconHistory: {
			items?: components["schemas"]["IconEntry"][];
		};
		/** IconSelectRequest */
		IconSelectRequest: {
			key: string;
			/** @default true */
			sync?: boolean;
		};
		/**
		 * IconSource
		 * @description Provenance of a server icon.
		 * @enum {string}
		 */
		IconSource: "manual" | "auto" | "unknown";
		/** ImportPull */
		ImportPull: {
			channel_id?: string | null;
			entries?: {
				[key: string]: unknown;
			}[];
			fetched_at?: string | null;
			guild_id: string;
			guild_name?: string | null;
			scanned_messages: number;
			source: string;
		};
		/** ImportPullRequest */
		ImportPullRequest: {
			annotations?: {
				[key: string]: unknown;
			} | null;
			before_message_id?: string | null;
			channel_id: string;
			/** @default 200 */
			limit?: number;
		};
		/** ImportSharedBuildRequest */
		ImportSharedBuildRequest: {
			share_token: string;
		};
		/** LandingStats */
		LandingStats: {
			players_with_profile: number;
			registered_profiles: number;
			total_playtime_hours: number;
		};
		/** LaunchManifestInlineContent */
		LaunchManifestInlineContent: {
			mods?: components["schemas"]["LaunchManifestModRef"][];
			resourcepacks?: components["schemas"]["LaunchManifestPackRef"][];
			/** @constant */
			type: "inline";
		};
		/** LaunchManifestJvm */
		LaunchManifestJvm: {
			extra_args?: string[];
			min_ram_mb?: number | null;
			recommended_ram_mb?: number | null;
		};
		/** LaunchManifestMinecraft */
		LaunchManifestMinecraft: {
			/** @default vanilla */
			loader: string;
			loader_version?: string | null;
			version: string;
		};
		/** LaunchManifestModRef */
		LaunchManifestModRef: {
			download_url?: string | null;
			filename: string;
			project_id: string;
			provider: string;
			sha1?: string | null;
			sha512?: string | null;
			size?: number | null;
			version_id: string;
		};
		/** LaunchManifestMrpackContent */
		LaunchManifestMrpackContent: {
			sha256?: string | null;
			sha512?: string | null;
			size?: number | null;
			/** @constant */
			type: "mrpack";
			url: string;
		};
		/** LaunchManifestPackRef */
		LaunchManifestPackRef: {
			download_url?: string | null;
			filename: string;
			project_id?: string | null;
			provider: string;
			sha1?: string | null;
			sha512?: string | null;
			size?: number | null;
			version_id?: string | null;
		};
		/** LaunchManifestServerEndpoint */
		LaunchManifestServerEndpoint: {
			address: string;
			motd?: string | null;
			port?: number | null;
		};
		/** LaunchManifestWhitelist */
		LaunchManifestWhitelist: {
			link_url?: string | null;
			/** @default false */
			required: boolean;
		};
		/**
		 * LifecycleState
		 * @description Project lifecycle stage.
		 * @default draft
		 * @enum {string}
		 */
		LifecycleState: "draft" | "active" | "unknown";
		/** LikedCommentIds */
		LikedCommentIds: {
			comment_ids: components["schemas"]["Snowflake"][];
		};
		/** LinkCompletionRequest */
		LinkCompletionRequest: {
			code: string;
			minecraft_nick: string;
			minecraft_uuid: string;
			project_id: components["schemas"]["Snowflake"];
			server_id: components["schemas"]["Snowflake"];
		};
		/** LinkCompletionResponse */
		LinkCompletionResponse: {
			account?: components["schemas"]["LinkedMinecraftAccount"] | null;
			status: string;
			user_id?: components["schemas"]["Snowflake"] | null;
		};
		/**
		 * LinkResultStatus
		 * @description Outcome of completing a Discord link.
		 * @enum {string}
		 */
		LinkResultStatus: "linked" | "already_linked" | "unknown";
		/** LinkSession */
		LinkSession: {
			already_linked_project_id?: components["schemas"]["Snowflake"] | null;
			expires_at: string;
			guild_id: string;
			guild_name?: string | null;
			status: components["schemas"]["LinkSessionStatus"];
			used_at?: string | null;
		};
		/**
		 * LinkSessionStatus
		 * @description State of a Discord link session.
		 * @enum {string}
		 */
		LinkSessionStatus: "pending" | "used" | "expired" | "unknown";
		/** LinkTokenResult */
		LinkTokenResult: {
			expires_at: string;
			token: string;
		};
		/** LinkedMinecraftAccount */
		LinkedMinecraftAccount: {
			account_type: components["schemas"]["MinecraftAccountType"];
			id: components["schemas"]["Snowflake"];
			identity_scope_id?: components["schemas"]["Snowflake"] | null;
			identity_scope_type: components["schemas"]["MinecraftIdentityScopeType"];
			link_source: components["schemas"]["MinecraftLinkSource"];
			minecraft_nick: string;
			minecraft_uuid: string;
			proof_server_id?: components["schemas"]["Snowflake"] | null;
			verification_status: components["schemas"]["MinecraftVerificationStatus"];
		};
		/** LiveDashboardStats */
		LiveDashboardStats: {
			collected_at?: string | null;
			players_online: number;
			players_with_profile?: number | null;
			registered_profiles?: number | null;
			servers_online: number;
			servers_with_agent: number;
			total_playtime_hours?: number | null;
		};
		/** LiveStatus */
		LiveStatus: {
			collected_at: string;
			connection_state?: components["schemas"]["OnlineState"] | null;
			country?: string | null;
			country_code?: string | null;
			freshness_state: components["schemas"]["FreshnessState"];
			max_players?: number | null;
			motd?: string | null;
			online?: number | null;
			online_reason?: string | null;
			online_state: components["schemas"]["OnlineState"];
			players?: string[];
			server_id: components["schemas"]["Snowflake"];
			source?: components["schemas"]["TrustState"] | null;
			version?: string | null;
		};
		/** ManifestComponent */
		ManifestComponent: {
			path: string;
			sha256: string;
		};
		/** ManifestDelta */
		ManifestDelta: {
			patch_path: string;
			patch_sha256: string;
			result_sha256: string;
		};
		/** MarkAllReadResult */
		MarkAllReadResult: {
			/** @default 0 */
			marked: number;
		};
		/** MeResponse */
		MeResponse: {
			email?: string | null;
			minecraft_accounts?: components["schemas"]["MinecraftAccount"][];
			roles?: string[];
			user_id: components["schemas"]["Snowflake"];
			username?: string | null;
		};
		/**
		 * MemberState
		 * @description Membership state of a project team member.
		 * @default active
		 * @enum {string}
		 */
		MemberState: "active" | "suspended" | "unknown";
		/** MinecraftAccount */
		MinecraftAccount: {
			account_type: components["schemas"]["MinecraftAccountType"];
			minecraft_nick: string;
			minecraft_uuid: string;
		};
		/**
		 * MinecraftAccountType
		 * @description Whether a linked Minecraft account is official or offline.
		 * @enum {string}
		 */
		MinecraftAccountType: "official" | "offline" | "unknown";
		/** MinecraftCandidateAccount */
		MinecraftCandidateAccount: {
			account_type: components["schemas"]["MinecraftAccountType"];
			found: boolean;
			minecraft_nick: string;
			minecraft_uuid?: string | null;
			source?: string | null;
		};
		/** MinecraftGroupTarget */
		MinecraftGroupTarget: {
			desired_minecraft_uuids?: string[];
			luckperms_group: string;
			role_id: components["schemas"]["Snowflake"];
			role_key: string;
			role_name: string;
			server_id: components["schemas"]["Snowflake"];
		};
		/** MinecraftGroupTargets */
		MinecraftGroupTargets: {
			items?: components["schemas"]["MinecraftGroupTarget"][];
			project_id: components["schemas"]["Snowflake"];
			server_id: components["schemas"]["Snowflake"];
		};
		/**
		 * MinecraftIdentityScopeType
		 * @description Scope a Minecraft identity binding applies to.
		 * @enum {string}
		 */
		MinecraftIdentityScopeType: "global_minecraft" | "project" | "unknown";
		/**
		 * MinecraftIdentityState
		 * @description Identity-proof state attached to a whitelist application.
		 * @enum {string}
		 */
		MinecraftIdentityState:
			| "verified"
			| "unverified_candidate"
			| "approved_pending_proof"
			| "unknown";
		/** MinecraftLinkCodeRequest */
		MinecraftLinkCodeRequest: {
			minecraft_nick: string;
		};
		/** MinecraftLinkCodeResponse */
		MinecraftLinkCodeResponse: {
			account: components["schemas"]["MinecraftCandidateAccount"];
			challenge_id: components["schemas"]["Snowflake"];
			code: string;
			expires_in: number;
			status: string;
		};
		/**
		 * MinecraftLinkSource
		 * @description How a Minecraft account link was established.
		 * @enum {string}
		 */
		MinecraftLinkSource:
			| "microsoft"
			| "nickname_proof"
			| "offline_manual"
			| "unknown";
		/** MinecraftOfficialLinkStart */
		MinecraftOfficialLinkStart: {
			authorization_url: string;
			expires_in: number;
			state: string;
		};
		/** MinecraftPendingChallenge */
		MinecraftPendingChallenge: {
			account_type: components["schemas"]["MinecraftAccountType"];
			challenge_id: components["schemas"]["Snowflake"];
			code: string;
			expires_at: string;
			expires_in: number;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
		};
		/** MinecraftResolveRequest */
		MinecraftResolveRequest: {
			minecraft_nick: string;
		};
		/** MinecraftUnlinkResult */
		MinecraftUnlinkResult: {
			account: components["schemas"]["UnlinkedMinecraftAccount"];
			status: string;
		};
		/**
		 * MinecraftUuidType
		 * @description Provenance of a Minecraft UUID.
		 * @enum {string}
		 */
		MinecraftUuidType: "mojang" | "offline" | "xuid" | "floodgate" | "unknown";
		/** MinecraftVerificationAccount */
		MinecraftVerificationAccount: {
			account_type: components["schemas"]["MinecraftAccountType"];
			id: components["schemas"]["Snowflake"];
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			verification_status: components["schemas"]["MinecraftVerificationStatus"];
		};
		/** MinecraftVerificationState */
		MinecraftVerificationState: {
			items?: components["schemas"]["MinecraftVerificationAccount"][];
			pending_challenge?:
				| components["schemas"]["MinecraftPendingChallenge"]
				| null;
		};
		/**
		 * MinecraftVerificationStatus
		 * @description Verification level of a linked Minecraft account.
		 * @enum {string}
		 */
		MinecraftVerificationStatus: "verified" | "legacy_unverified" | "unknown";
		/** MotdVerification */
		MotdVerification: {
			checked_at?: string | null;
			expires_at?: string | null;
			reason?: string | null;
			server: components["schemas"]["VerificationServerSummary"];
			status: components["schemas"]["VerificationStatus"];
			token: string;
		};
		/** MyComment */
		MyComment: {
			/** @default false */
			can_moderate_comments: boolean;
			/** @default false */
			can_reply_to_comments: boolean;
			comment?: components["schemas"]["Comment"] | null;
		};
		/** MyDashboardStats */
		MyDashboardStats: {
			accounts?: components["schemas"]["DashboardAccount"][];
			daily_activity?: components["schemas"]["DashboardDailyActivityPoint"][];
			/** @default false */
			estimated: boolean;
			events_breakdown?: {
				[key: string]: number;
			};
			servers?: components["schemas"]["DashboardServerItem"][];
			source?: string | null;
			total_playtime_seconds: number;
		};
		/** MyPlayerStats */
		MyPlayerStats: {
			accounts?: {
				[key: string]: unknown;
			}[];
			daily_activity?: {
				[key: string]: unknown;
			}[];
			/** @default false */
			estimated: boolean;
			events_breakdown?: {
				[key: string]: number;
			};
			servers?: {
				[key: string]: unknown;
			}[];
			source?: string | null;
			total_playtime_seconds: number;
		};
		/** MyServerIssuesPage */
		MyServerIssuesPage: {
			items?: components["schemas"]["ServerIssuesItem"][];
			/** @default 1 */
			page: number;
			/** @default 20 */
			per_page: number;
			/** @default 0 */
			total: number;
			/** @default 0 */
			total_issues: number;
			/** @default 0 */
			total_servers: number;
		};
		/** MyServersPage */
		MyServersPage: {
			items?: components["schemas"]["ServerCard"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** Notification */
		Notification: {
			body: string;
			category: string;
			created_at: string;
			data?: {
				[key: string]: unknown;
			} | null;
			icon?: string | null;
			id: string;
			link?: string | null;
			read: boolean;
			read_at?: string | null;
			title: string;
			topic_key: string;
		};
		/** NotificationList */
		NotificationList: {
			items?: components["schemas"]["Notification"][];
			/** @default 1 */
			page: number;
			/** @default 20 */
			per_page: number;
			/** @default 0 */
			total: number;
			/** @default 0 */
			unread_total: number;
		};
		/** NotificationPreferences */
		NotificationPreferences: {
			/** @default 1 */
			version: number;
			whitelist_applicant?: components["schemas"]["NotificationTopicPreferences"];
			whitelist_staff?: components["schemas"]["NotificationTopicPreferences"];
		};
		/** NotificationPreferencesUpdate */
		NotificationPreferencesUpdate: {
			whitelist_applicant?: components["schemas"]["NotificationTopicPreferences"];
			whitelist_staff?: components["schemas"]["NotificationTopicPreferences"];
		};
		/** NotificationTopicPreferences */
		NotificationTopicPreferences: {
			enabled_channels?: string[];
			preferred_order?: string[];
		};
		/** OAuthLinkStartResponse */
		OAuthLinkStartResponse: {
			authorization_url: string;
			expires_in: number;
			state: string;
		};
		/** OAuthProviderStatus */
		OAuthProviderStatus: {
			avatar_url?: string | null;
			connected: boolean;
			display_name?: string | null;
			email?: string | null;
			provider: string;
			subject?: string | null;
		};
		/** OAuthProvidersResponse */
		OAuthProvidersResponse: {
			providers?: components["schemas"]["OAuthProviderStatus"][];
		};
		/** OAuthUnlinkResult */
		OAuthUnlinkResult: {
			status: string;
		};
		/**
		 * OnlineSource
		 * @description Where the online player count was sourced from.
		 * @enum {string}
		 */
		OnlineSource: "proxy" | "aggregate" | "unknown";
		/**
		 * OnlineState
		 * @description Live availability of a server/project.
		 * @default unknown
		 * @enum {string}
		 */
		OnlineState: "live" | "offline" | "unknown";
		/**
		 * OnlineStrategy
		 * @description How a project's online state is computed from its servers.
		 * @enum {string}
		 */
		OnlineStrategy: "proxy_preferred" | "aggregate" | "unknown";
		/** Order */
		Order: {
			amount_minor: number;
			ccy: number;
			coupon_code?: string | null;
			created_at: string;
			description: string;
			/** @default 0 */
			discount_minor: number;
			expires_at?: string | null;
			external_ref: string;
			extra?: {
				[key: string]: unknown;
			} | null;
			id: string;
			idempotency_key?: string | null;
			/** @default 0 */
			net_minor: number;
			paid_at?: string | null;
			payments?: components["schemas"]["Payment"][];
			product_id: string;
			refunded_at?: string | null;
			status: string;
			status_reason?: string | null;
			subscription_id?: string | null;
			tax_country?: string | null;
			/** @default none */
			tax_kind: string;
			/** @default 0 */
			tax_minor: number;
			/** @default 0 */
			tax_rate_bp: number;
			updated_at: string;
			user_id: string;
		};
		/** OrderList */
		OrderList: {
			items: components["schemas"]["Order"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** PasswordChangeRequest */
		PasswordChangeRequest: {
			current_password: string;
			new_password: string;
			totp_code?: string | null;
		};
		/** PasswordMutationResult */
		PasswordMutationResult: {
			status: string;
		};
		/** PasswordResetConfirmRequest */
		PasswordResetConfirmRequest: {
			password: string;
			token: string;
		};
		/** PasswordResetRequest */
		PasswordResetRequest: {
			audience?: string | null;
			email: string;
		};
		/** PasswordResetResult */
		PasswordResetResult: {
			status: string;
		};
		/** PasswordSetRequest */
		PasswordSetRequest: {
			current_password?: string | null;
			new_password: string;
			totp_code?: string | null;
		};
		/** PasswordStatus */
		PasswordStatus: {
			has_password: boolean;
		};
		/** PatToken */
		PatToken: {
			audience: string;
			created_at: string;
			expires_at: string;
			id: string;
			name: string;
			note?: string | null;
			revoked_at?: string | null;
			scope?: string[];
			tenant?: string | null;
			token_hint: string;
		};
		/** PatTokenList */
		PatTokenList: {
			items?: components["schemas"]["PatToken"][];
		};
		/** Payment */
		Payment: {
			created_at: string;
			fiscal_status?: string | null;
			fiscal_url?: string | null;
			id: string;
			page_url?: string | null;
			provider: string;
			provider_payment_id?: string | null;
			status: string;
			updated_at: string;
		};
		/** PaymentMethod */
		PaymentMethod: {
			created_at: string;
			id: string;
			is_default: boolean;
			masked_pan?: string | null;
			payment_system?: string | null;
			provider: string;
			updated_at: string;
		};
		/** PlatformInfo */
		PlatformInfo: {
			canonical_base_url: string;
			docs_url: string;
			openapi_url: string;
			service: string;
			version: string;
		};
		/** PlatformPermsRow */
		PlatformPermsRow: {
			bits: number;
			max_role_weight: number;
			roles?: string[];
			user_id: components["schemas"]["Snowflake"];
			version: number;
		};
		/** PlayerSearchPage */
		PlayerSearchPage: {
			items: components["schemas"]["PlayerSearchResult"][];
		};
		/** PlayerSearchResult */
		PlayerSearchResult: {
			last_seen_at: string;
			last_server_id?: components["schemas"]["Snowflake"] | null;
			total_playtime_seconds: number;
			username: string;
			uuid: string;
		};
		/** PlayerStats */
		PlayerStats: {
			found: boolean;
			per_server_seconds?: {
				[key: string]: number;
			};
			server_playtime_seconds: number;
			source?: string | null;
			total_playtime_seconds: number;
		};
		/** PluginVerification */
		PluginVerification: {
			expires_at?: string | null;
			expires_in?: number | null;
			link_code?: string | null;
			server: components["schemas"]["VerificationServerSummary"];
			status: components["schemas"]["VerificationStatus"];
			token?: string | null;
			token_type?: string | null;
			verified_at?: string | null;
		};
		/** PluginVerificationStartRequest */
		PluginVerificationStartRequest: {
			address: string;
			expires_in_hours?: number | null;
			name?: string | null;
			project_id?: string | null;
			proxy_type?: string | null;
			server_role?: components["schemas"]["ServerRole"] | null;
		};
		/** Product */
		Product: {
			active: boolean;
			amount_minor: number;
			ccy: number;
			code: string;
			country_code: string;
			description?: string | null;
			extra?: {
				[key: string]: unknown;
			} | null;
			geo_source: string;
			id: string;
			interval: string;
			name: string;
			price_country_code?: string | null;
			product_type: string;
			provider_supported: boolean;
			used_fallback: boolean;
		};
		/** ProfileActivityHeatmap */
		ProfileActivityHeatmap: {
			days?: components["schemas"]["ProfileActivityHeatmapDay"][];
			/** @default 0 */
			total_events: number;
			/** @default 0 */
			window_days: number;
		};
		/** ProfileActivityHeatmapDay */
		ProfileActivityHeatmapDay: {
			date: string;
			/** @default 0 */
			events: number;
			/** @default 0 */
			sessions: number;
		};
		/** ProfileGameplaySummary */
		ProfileGameplaySummary: {
			/** @default 0 */
			active_days: number;
			linked_accounts?: components["schemas"]["ProfileLinkedMinecraftAccount"][];
			most_played_server?:
				| components["schemas"]["ProfileMostPlayedServer"]
				| null;
			/** @default 0 */
			streak_current: number;
			/** @default 0 */
			streak_longest: number;
			/** @default 0 */
			total_playtime_seconds: number;
		};
		/** ProfileLinkedMinecraftAccount */
		ProfileLinkedMinecraftAccount: {
			nick?: string | null;
			type?: string | null;
		};
		/** ProfileMostPlayedServer */
		ProfileMostPlayedServer: {
			/** @default 0 */
			activity: number;
			last_seen?: string | null;
			/** @default 0 */
			playtime_seconds: number;
			server_id: string;
		};
		/** ProfileOwnedProject */
		ProfileOwnedProject: {
			display_server?:
				| components["schemas"]["ProfileOwnedProjectDisplayServer"]
				| null;
			id: components["schemas"]["Snowflake"];
			name: string;
			public_entrypoint?: string | null;
			slug?: string | null;
		};
		/** ProfileOwnedProjectDisplayServer */
		ProfileOwnedProjectDisplayServer: {
			favicon_url?: string | null;
			icon_url?: string | null;
			ip_or_domain?: string | null;
		};
		/** ProfileOwnedServer */
		ProfileOwnedServer: {
			canonical_project_id?: components["schemas"]["Snowflake"] | null;
			canonical_project_slug?: string | null;
			favicon_url?: string | null;
			icon_url?: string | null;
			id: components["schemas"]["Snowflake"];
			ip_or_domain?: string | null;
			name: string;
			public_profile_kind?: string | null;
			slug?: string | null;
		};
		/** ProfileOwnershipSummary */
		ProfileOwnershipSummary: {
			/** @default 0 */
			project_count: number;
			projects?: components["schemas"]["ProfileOwnedProject"][];
			/** @default 0 */
			server_count: number;
			servers?: components["schemas"]["ProfileOwnedServer"][];
		};
		/** ProfilePrivacyUpdate */
		ProfilePrivacyUpdate: {
			show_activity_stats?: boolean | null;
			show_bio?: boolean | null;
			show_join_date?: boolean | null;
			show_linked_accounts?: boolean | null;
			show_ownership?: boolean | null;
			show_status?: boolean | null;
			show_streak?: boolean | null;
			show_top_server?: boolean | null;
			show_user_id?: boolean | null;
		};
		/** ProfileUpdateRequest */
		ProfileUpdateRequest: {
			bio?: string | null;
			privacy?: components["schemas"]["ProfilePrivacyUpdate"] | null;
			slug?: string | null;
			time_format_preference?: string | null;
			username: string;
		};
		/** Project */
		Project: {
			catalog_mode: string;
			/** Format: date-time */
			created_at: string;
			display_server: components["schemas"]["ServerSummary"];
			display_server_id: components["schemas"]["Snowflake"];
			freshness_state?: components["schemas"]["FreshnessState"];
			game_editions?: string[];
			hearts?: number | null;
			id: components["schemas"]["Snowflake"];
			last_status_at?: string | null;
			max_players?: number | null;
			name: string;
			online_players?: number | null;
			online_reason?: string | null;
			online_server_id?: components["schemas"]["Snowflake"] | null;
			online_source?: components["schemas"]["OnlineSource"] | null;
			online_state?: components["schemas"]["OnlineState"];
			online_strategy: components["schemas"]["OnlineStrategy"];
			owner_id?: components["schemas"]["Snowflake"] | null;
			public_entrypoint?: string | null;
			/** @default 0 */
			public_entrypoint_count: number;
			public_entrypoint_state?: components["schemas"]["PublicEntrypointState"];
			public_profile_kind?: components["schemas"]["PublicProfileKind"];
			/** @default 0 */
			public_server_count: number;
			regions?: string[];
			score?: number | null;
			score_breakdown?: components["schemas"]["ScoreBreakdown"] | null;
			/** @default 0 */
			server_count: number;
			slug?: string | null;
			trust_state?: components["schemas"]["TrustState"];
			/** Format: date-time */
			updated_at: string;
			uptime_24h_percentage?: number | null;
			uptime_7d_percentage?: number | null;
			/** @default 0 */
			verified_server_count: number;
			votes_monthly?: number | null;
		};
		/** ProjectCreateRequest */
		ProjectCreateRequest: {
			name: string;
			public_entrypoint?: string | null;
			slug?: string | null;
		};
		/** ProjectCreateResponse */
		ProjectCreateResponse: {
			id: components["schemas"]["Snowflake"];
			lifecycle_state?: components["schemas"]["LifecycleState"];
			name: string;
			public_entrypoint?: string | null;
			slug?: string | null;
		};
		/** ProjectDetail */
		ProjectDetail: {
			project: components["schemas"]["Project"];
			servers?: components["schemas"]["ServerSummary"][];
		};
		/** ProjectEngagement */
		ProjectEngagement: {
			comments: number;
			hearts: number;
			project_id: components["schemas"]["Snowflake"];
			thumbs: number;
		};
		/** ProjectEngagementStatus */
		ProjectEngagementStatus: {
			hearted: boolean;
			project_id: components["schemas"]["Snowflake"];
			thumbed: boolean;
		};
		/** ProjectFilterStats */
		ProjectFilterStats: {
			access?: components["schemas"]["FilterCount"][];
			editions?: components["schemas"]["FilterCount"][];
			features?: components["schemas"]["FilterCount"][];
			hosting?: components["schemas"]["FilterCount"][];
			regions?: components["schemas"]["FilterCount"][];
			roles?: components["schemas"]["FilterCount"][];
			total: number;
			verified?: components["schemas"]["FilterCount"][];
		};
		/** ProjectHeartResult */
		ProjectHeartResult: {
			hearted: boolean;
			hearts: number;
			project_id: components["schemas"]["Snowflake"];
		};
		/** ProjectListResponse */
		ProjectListResponse: {
			items: components["schemas"]["Project"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** ProjectLiveStatus */
		ProjectLiveStatus: {
			collected_at?: string | null;
			freshness_state: components["schemas"]["FreshnessState"];
			items?: components["schemas"]["LiveStatus"][];
			max_players?: number | null;
			online?: number | null;
			online_reason?: string | null;
			online_server_id?: components["schemas"]["Snowflake"] | null;
			online_source?: string | null;
			online_state: components["schemas"]["OnlineState"];
			project_id: components["schemas"]["Snowflake"];
		};
		/** ProjectResolveResponse */
		ProjectResolveResponse: {
			project_id: components["schemas"]["Snowflake"];
			slug?: string | null;
		};
		/**
		 * ProjectSort
		 * @description Public project-catalog ordering. Absent means the default (score) order.
		 * @enum {string}
		 */
		ProjectSort: "players" | "newest" | "verified" | "score" | "unknown";
		/** ProjectStats */
		ProjectStats: {
			active_servers: number;
			avg_online?: number | null;
			/** @default 0 */
			chats: number;
			/** @default 0 */
			commands: number;
			first_event_at?: string | null;
			/** @default 0 */
			joins: number;
			last_event_at?: string | null;
			/** @default 0 */
			peak_online: number;
			period: string;
			server_count: number;
			/** @default 0 */
			total_events: number;
			/** @default 0 */
			unique_players: number;
		};
		/** ProjectThumbResult */
		ProjectThumbResult: {
			project_id: components["schemas"]["Snowflake"];
			thumbed: boolean;
			thumbs: number;
		};
		/** ProjectWhitelistApplicationPreview */
		ProjectWhitelistApplicationPreview: {
			application_url?: string | null;
			/** @default false */
			auto_approved: boolean;
			binding_id?: components["schemas"]["Snowflake"] | null;
			created_at?: string | null;
			discord_name?: string | null;
			form_id?: components["schemas"]["Snowflake"] | null;
			id: components["schemas"]["Snowflake"];
			minecraft_account_type?: string | null;
			minecraft_identity_state?: string | null;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			payload?: {
				[key: string]: unknown;
			};
			review_reason?: string | null;
			reviewed_at?: string | null;
			server_id?: components["schemas"]["Snowflake"] | null;
			status: string;
			status_alias?: string | null;
			updated_at?: string | null;
			user_id?: components["schemas"]["Snowflake"] | null;
		};
		/** ProjectWhitelistBindingPreview */
		ProjectWhitelistBindingPreview: {
			created_at?: string | null;
			/** @default disabled */
			discord_membership_mode: string;
			/** @default true */
			enabled: boolean;
			enforcement_mode: string;
			form_id?: components["schemas"]["Snowflake"] | null;
			granted_role_ids?: components["schemas"]["Snowflake"][];
			id: components["schemas"]["Snowflake"];
			/** @default form */
			mode: string;
			notification_settings?: {
				[key: string]: unknown;
			} | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			/** @default true */
			restrict_chat: boolean;
			scope_type: string;
			server_id: components["schemas"]["Snowflake"];
			target_server_ids?: components["schemas"]["Snowflake"][];
			updated_at?: string | null;
		};
		/** ProjectWhitelistConfigItem */
		ProjectWhitelistConfigItem: {
			application?:
				| components["schemas"]["ProjectWhitelistApplicationPreview"]
				| null;
			apply_server_id: components["schemas"]["Snowflake"];
			binding: components["schemas"]["ProjectWhitelistBindingPreview"];
			enforcement_servers?: components["schemas"]["WhitelistTargetServerRef"][];
			form?: components["schemas"]["WhitelistFormCard"] | null;
			grant_target_servers?: components["schemas"]["WhitelistTargetServerRef"][];
			project_id: components["schemas"]["Snowflake"];
			proof_entry?: components["schemas"]["WhitelistProofEntry"] | null;
		};
		/**
		 * PublicEntrypointState
		 * @description How many public entrypoints a project exposes.
		 * @default none
		 * @enum {string}
		 */
		PublicEntrypointState:
			| "none"
			| "single"
			| "multiple"
			| "primary"
			| "unknown";
		/** PublicProfile */
		PublicProfile: {
			avatar_url?: string | null;
			bio?: string | null;
			created_at?: string | null;
			privacy?: components["schemas"]["users_ProfilePrivacy"];
			slug?: string | null;
			status?: string | null;
			user_id: components["schemas"]["Snowflake"];
			username?: string | null;
		};
		/** PublicProfileCard */
		PublicProfileCard: {
			avatar_url?: string | null;
			found: boolean;
			slug?: string | null;
			status?: string | null;
			user_id: components["schemas"]["Snowflake"];
			username?: string | null;
		};
		/**
		 * PublicProfileKind
		 * @description Which kind of public profile a catalog row represents.
		 * @default unknown
		 * @enum {string}
		 */
		PublicProfileKind:
			| "canonical_project_only"
			| "project_child_visible"
			| "standalone_server"
			| "unknown";
		/** PublicTeamMember */
		PublicTeamMember: {
			/** @default false */
			is_owner: boolean;
			roles?: string[];
			user_id: components["schemas"]["Snowflake"];
		};
		/** Quote */
		Quote: {
			amount_minor: number;
			base_minor: number;
			ccy: number;
			country_code: string;
			net_minor: number;
			profile_ready: boolean;
			provider_supported: boolean;
			tax_kind: string;
			tax_minor: number;
			tax_rate_bp: number;
		};
		/** QuoteRequest */
		QuoteRequest: {
			context?: {
				[key: string]: unknown;
			} | null;
			product_code?: string | null;
			product_id?: string | null;
			/** @default 1 */
			quantity?: number;
		};
		/** RecentActivityItem */
		RecentActivityItem: {
			created_at: string;
			preview?: string | null;
			project_id: components["schemas"]["Snowflake"];
			type: components["schemas"]["ActivityType"];
		};
		/** RecentVotes */
		RecentVotes: {
			project_id: components["schemas"]["Snowflake"];
			votes: components["schemas"]["VoteItem"][];
		};
		/** RefundRequest */
		RefundRequest: {
			amount_minor: number;
			created_at: string;
			decision_note: string;
			id: string;
			order_id: string;
			reason: string;
			reviewed_at: string;
			reviewed_by: string;
			status: string;
			updated_at: string;
			user_id: string;
		};
		/** RefundRequestBody */
		RefundRequestBody: {
			amount_minor?: number | null;
			reason?: string | null;
		};
		/** RefundRequestList */
		RefundRequestList: {
			items: components["schemas"]["RefundRequest"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** ReportUserRequest */
		ReportUserRequest: {
			details?: string | null;
			reason: string;
		};
		/** ReportUserResult */
		ReportUserResult: {
			id: components["schemas"]["Snowflake"];
			status: string;
		};
		/** RevokeOtherSessionsResult */
		RevokeOtherSessionsResult: {
			revoked_count: number;
		};
		/** RevokePatTokenResult */
		RevokePatTokenResult: {
			item: components["schemas"]["PatToken"];
		};
		/** RoleCandidate */
		RoleCandidate: {
			id: string;
			/** @default false */
			managed: boolean;
			name: string;
			/** @default 0 */
			position: number;
		};
		/** RoleCatalog */
		RoleCatalog: {
			available: boolean;
			guild_id?: string | null;
			guild_name?: string | null;
			message?: string | null;
			roles?: components["schemas"]["RoleCandidate"][];
		};
		/**
		 * RolloutMode
		 * @description Verified-plugin rollout policy for a project.
		 * @default auto
		 * @enum {string}
		 */
		RolloutMode: "auto" | "cutover_enforced" | "unknown";
		/**
		 * RolloutState
		 * @description Computed verified-plugin rollout state for a project's fleet.
		 * @enum {string}
		 */
		RolloutState:
			| "legacy_grace"
			| "mixed_fleet"
			| "cutover_ready"
			| "cutover_enforced"
			| "unknown";
		/** ScoreBreakdown */
		ScoreBreakdown: {
			/** @default 0 */
			avg_online: number;
			/** @default 0 */
			comments: number;
			/** @default 0 */
			hearts: number;
			/** @default 0 */
			thumbs: number;
			total: number;
			/** @default 0 */
			verified_bonus: number;
		};
		/** SendTestRequest */
		SendTestRequest: {
			channel: string;
		};
		/** SendTestResult */
		SendTestResult: {
			/** @default  */
			detail: string;
			/** @default false */
			sent: boolean;
		};
		/** ServerBot */
		ServerBot: {
			bot_id?: string | null;
			linked_guilds?: components["schemas"]["ServerBotLinkedGuild"][];
		};
		/** ServerBotLinkedGuild */
		ServerBotLinkedGuild: {
			guild_id: string;
			guild_name?: string | null;
			linked_at?: string | null;
		};
		/** ServerBotUpdateRequest */
		ServerBotUpdateRequest: {
			bot_link?: string | null;
		};
		/** ServerCard */
		ServerCard: {
			/** Format: date-time */
			created_at: string;
			favicon_url?: string | null;
			game_edition?: components["schemas"]["GameEdition"] | null;
			icon_url?: string | null;
			id: components["schemas"]["Snowflake"];
			ip_or_domain: string;
			/** @default false */
			is_verified: boolean;
			last_max_players?: number | null;
			last_online_players?: number | null;
			/** @default false */
			maintenance_enabled: boolean;
			name: string;
			parent_id?: components["schemas"]["Snowflake"] | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			role: components["schemas"]["ServerRole"];
			/** @default true */
			show_in_public: boolean;
			slug?: string | null;
			/** Format: date-time */
			updated_at: string;
		};
		/** ServerCardTranslations */
		ServerCardTranslations: {
			description?: components["schemas"]["TextTranslation"] | null;
			maintenance_message?: components["schemas"]["TextTranslation"] | null;
			motd?: components["schemas"]["TextTranslation"] | null;
		};
		/** ServerChangeAddressRequest */
		ServerChangeAddressRequest: {
			address: string;
		};
		/** ServerChangeSlugRequest */
		ServerChangeSlugRequest: {
			slug: string;
		};
		/** ServerDetail */
		ServerDetail: {
			bedrock_port?: number | null;
			/** Format: date-time */
			created_at: string;
			game_edition?: components["schemas"]["GameEdition"] | null;
			id: components["schemas"]["Snowflake"];
			ip_or_domain: string;
			/** @default false */
			is_verified: boolean;
			parent_id?: components["schemas"]["Snowflake"] | null;
			ping_ip_or_domain?: string | null;
			ping_port?: number | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			project_online_strategy?: components["schemas"]["OnlineStrategy"] | null;
			proxy_type?: string | null;
			role: components["schemas"]["ServerRole"];
			/** Format: date-time */
			updated_at: string;
			user_permissions?: string[];
			verification_source?: components["schemas"]["VerificationSource"] | null;
		};
		/** ServerEventPoint */
		ServerEventPoint: {
			collected_at: string;
			event_type: string;
			extra?: {
				[key: string]: unknown;
			} | null;
			online?: number | null;
			online_delta?: number | null;
			player_id?: string | null;
			player_name?: string | null;
			source?: string | null;
		};
		/** ServerEvents */
		ServerEvents: {
			items: components["schemas"]["ServerEventPoint"][];
			page: number;
			per_page: number;
			period: string;
			total: number;
		};
		/** ServerHostRiskEvidence */
		ServerHostRiskEvidence: {
			filename: string;
			payload?: {
				[key: string]: unknown;
			} | null;
		};
		/** ServerIssuesItem */
		ServerIssuesItem: {
			ip_or_domain: string;
			issues?: components["schemas"]["ServerServiceIssue"][];
			server_id: components["schemas"]["Snowflake"];
			server_name: string;
			server_slug?: string | null;
		};
		/** ServerLaunchManifest */
		ServerLaunchManifest: {
			content:
				| components["schemas"]["LaunchManifestInlineContent"]
				| components["schemas"]["LaunchManifestMrpackContent"];
			etag?: string | null;
			jvm?: components["schemas"]["LaunchManifestJvm"];
			minecraft: components["schemas"]["LaunchManifestMinecraft"];
			schema_version: number;
			server: components["schemas"]["LaunchManifestServerEndpoint"];
			server_id: string;
			updated_at?: string | null;
			whitelist?: components["schemas"]["LaunchManifestWhitelist"];
		};
		/** ServerMaintenance */
		ServerMaintenance: {
			enabled: boolean;
			message?: string | null;
		};
		/** ServerMaintenanceUpdateRequest */
		ServerMaintenanceUpdateRequest: {
			enabled: boolean;
			message?: string | null;
		};
		/** ServerMediaSummary */
		ServerMediaSummary: {
			icon_key?: string | null;
			icon_url?: string | null;
			icon_version: number;
			server_id: components["schemas"]["Snowflake"];
		};
		/** ServerMotdSummary */
		ServerMotdSummary: {
			server: components["schemas"]["VerificationServerSummary"];
		};
		/** ServerMotdUpdateRequest */
		ServerMotdUpdateRequest: {
			motd: string;
			/** @default true */
			sync?: boolean;
		};
		/** ServerOwnership */
		ServerOwnership: {
			can_edit: boolean;
			is_owner: boolean;
			server_id: components["schemas"]["Snowflake"];
		};
		/** ServerRenameRequest */
		ServerRenameRequest: {
			name: string;
		};
		/**
		 * ServerRole
		 * @description Topological role of a server within a network.
		 * @enum {string}
		 */
		ServerRole: "standalone" | "proxy" | "sub" | "hub" | "unknown";
		/** ServerRoot */
		ServerRoot: {
			project_id: components["schemas"]["Snowflake"];
			root_server_id: components["schemas"]["Snowflake"];
			server_id: components["schemas"]["Snowflake"];
		};
		/** ServerServiceIssue */
		ServerServiceIssue: {
			action?: string | null;
			code: string;
			detail?: string | null;
			service: string;
			severity: string;
			title: string;
		};
		/** ServerSetBedrockPortRequest */
		ServerSetBedrockPortRequest: {
			port: number;
		};
		/** ServerSetDescriptionRequest */
		ServerSetDescriptionRequest: {
			description: string;
		};
		/** ServerSetParentRequest */
		ServerSetParentRequest: {
			parent_id: components["schemas"]["Snowflake"];
		};
		/** ServerSetPingPortRequest */
		ServerSetPingPortRequest: {
			port: number;
		};
		/** ServerSetRegionsRequest */
		ServerSetRegionsRequest: {
			regions?: string[];
		};
		/** ServerSetRoleRequest */
		ServerSetRoleRequest: {
			role: components["schemas"]["ServerRole"];
		};
		/** ServerSetShowDescriptionRequest */
		ServerSetShowDescriptionRequest: {
			value: boolean;
		};
		/** ServerSetShowInPublicRequest */
		ServerSetShowInPublicRequest: {
			value: boolean;
		};
		/** ServerSetTeamEnabledRequest */
		ServerSetTeamEnabledRequest: {
			value: boolean;
		};
		/** ServerSetVersionOverrideRequest */
		ServerSetVersionOverrideRequest: {
			version_override: string;
		};
		/** ServerStats */
		ServerStats: {
			achievements: number;
			activity: number;
			chats: number;
			commands: number;
			deaths: number;
			first_event_at?: string | null;
			joins: number;
			kicks: number;
			last_event_at?: string | null;
			leaves: number;
			period: string;
			total_events: number;
			unique_players: number;
			world: number;
		};
		/** ServerSubservers */
		ServerSubservers: {
			subserver_ids?: components["schemas"]["Snowflake"][];
		};
		/** ServerSummary */
		ServerSummary: {
			/** Format: date-time */
			created_at: string;
			description?: string | null;
			favicon_url?: string | null;
			game_edition?: components["schemas"]["GameEdition"] | null;
			/** @default false */
			has_build: boolean;
			icon_url?: string | null;
			id: components["schemas"]["Snowflake"];
			ip_or_domain: string;
			/** @default false */
			is_verified: boolean;
			max_players?: number | null;
			motd?: string | null;
			/** @default  */
			name: string;
			online_players?: number | null;
			parent_id?: components["schemas"]["Snowflake"] | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			role: components["schemas"]["ServerRole"];
			/** @default false */
			show_description: boolean;
			slug?: string | null;
			translations?: components["schemas"]["ServerCardTranslations"] | null;
			/** Format: date-time */
			updated_at: string;
			verification_source?: components["schemas"]["VerificationSource"] | null;
		};
		/** ServerTeamManage */
		ServerTeamManage: {
			enabled: boolean;
			members?: components["schemas"]["TeamMemberItem"][];
			project_id: components["schemas"]["Snowflake"];
			project_servers?: components["schemas"]["TeamScopeServer"][];
			roles?: components["schemas"]["TeamRoleItem"][];
			root_server_id: components["schemas"]["Snowflake"];
			server_id: components["schemas"]["Snowflake"];
		};
		/** ServerTeamPublic */
		ServerTeamPublic: {
			enabled: boolean;
			inherited_from_server_id?: components["schemas"]["Snowflake"] | null;
			members?: components["schemas"]["PublicTeamMember"][];
			project_id: components["schemas"]["Snowflake"];
			server_id: components["schemas"]["Snowflake"];
		};
		/** ServerTelemetry */
		ServerTelemetry: {
			collected_at?: string | null;
			latest?: {
				[key: string]: unknown;
			};
			metrics?: components["schemas"]["ServerTelemetryMetric"][];
			period: string;
			source?: string | null;
		};
		/** ServerTelemetryMetric */
		ServerTelemetryMetric: {
			avg: number;
			cadence_hint_seconds: number;
			key: string;
			kind: components["schemas"]["TelemetryMetricKind"];
			last: number;
			max: number;
			min: number;
			samples: number;
		};
		/** ServerTranslation */
		ServerTranslation: {
			created_at?: string | null;
			/** @default  */
			engine: string;
			field: string;
			locale: string;
			/** @default  */
			original_text: string;
			source?: string | null;
			source_locale?: string | null;
			status?: components["schemas"]["TranslationStatus"];
			/** @default  */
			target_locale: string;
			/** @default  */
			translated_text: string;
			updated_at?: string | null;
		};
		/** ServerTranslationUpsertRequest */
		ServerTranslationUpsertRequest: {
			translated_text: string;
		};
		/** ServerTranslations */
		ServerTranslations: {
			items?: components["schemas"]["ServerTranslation"][];
		};
		/** ServerWhitelistPublicConfig */
		ServerWhitelistPublicConfig: {
			application?: components["schemas"]["WhitelistApplication"] | null;
			binding?: components["schemas"]["WhitelistBindingDetail"] | null;
			enforcement_servers?: components["schemas"]["WhitelistTargetServerRef"][];
			form?: components["schemas"]["WhitelistFormDetail"] | null;
			grant_target_servers?: components["schemas"]["WhitelistTargetServerRef"][];
			proof_entry?: components["schemas"]["WhitelistProofEntry"] | null;
		};
		/**
		 * ServiceHealth
		 * @description Liveness of a downstream service in the admin health view.
		 * @enum {string}
		 */
		ServiceHealth: "up" | "down" | "unknown";
		/** ServiceHealthEntry */
		ServiceHealthEntry: {
			checked_at: string;
			error?: string | null;
			latency_ms?: number | null;
			name: string;
			status: components["schemas"]["ServiceHealth"];
		};
		/** ServicesHealthResponse */
		ServicesHealthResponse: {
			items?: components["schemas"]["ServiceHealthEntry"][];
		};
		/** SessionInfo */
		SessionInfo: {
			city?: string | null;
			country?: string | null;
			/** @default false */
			current: boolean;
			expires_at?: string | null;
			id: string;
			ip_address?: string | null;
			issued_at: string;
			revoked_at?: string | null;
			user_agent?: string | null;
		};
		/** SessionList */
		SessionList: {
			sessions?: components["schemas"]["SessionInfo"][];
		};
		/** SessionRevokeResult */
		SessionRevokeResult: {
			session_id: string;
			status: string;
		};
		/** ShareLink */
		ShareLink: {
			build_id: string;
			share_token: string;
		};
		/**
		 * Snowflake
		 * Format: snowflake
		 * @description A 64-bit Snowflake identifier. Carried as an integer on the wire; consumers in safe-integer-limited languages (JavaScript) must treat it as an opaque string to avoid precision loss.
		 */
		Snowflake: Snowflake;
		/** SocialLinkVerification */
		SocialLinkVerification: {
			metadata?: {
				[key: string]: string;
			};
			platform: string;
			url?: string | null;
			verified: boolean;
		};
		/** SocialLinkVerifyRequest */
		SocialLinkVerifyRequest: {
			platform: string;
			url: string;
		};
		/** SocialLinks */
		SocialLinks: {
			instagram_url?: string | null;
			server_id: components["schemas"]["Snowflake"];
			telegram_url?: string | null;
			tiktok_url?: string | null;
			twitch_url?: string | null;
			twitter_url?: string | null;
			verified_data?: {
				[key: string]: components["schemas"]["SocialLinkVerification"];
			};
			website_url?: string | null;
			youtube_url?: string | null;
		};
		/** SocialLinksUpdateRequest */
		SocialLinksUpdateRequest: {
			instagram_url?: string | null;
			telegram_url?: string | null;
			tiktok_url?: string | null;
			twitch_url?: string | null;
			twitter_url?: string | null;
			website_url?: string | null;
			youtube_url?: string | null;
		};
		/** StatusOverrideItem */
		StatusOverrideItem: {
			created_at?: string | null;
			created_by?: number | null;
			/** Format: date-time */
			ends_at: string;
			id: string;
			mode: string;
			/** @default  */
			note: string;
			server_id: components["schemas"]["Snowflake"];
			/** Format: date-time */
			starts_at: string;
			updated_at?: string | null;
			updated_by?: number | null;
		};
		/** Subscription */
		Subscription: {
			canceled_at?: string | null;
			created_at: string;
			extra?: {
				[key: string]: unknown;
			} | null;
			id: string;
			last_charge_at?: string | null;
			next_charge_at?: string | null;
			product_id: string;
			provider: string;
			pull_mode: string;
			status: string;
			updated_at: string;
			user_id: string;
		};
		/** SubscriptionList */
		SubscriptionList: {
			items: components["schemas"]["Subscription"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** TeamMemberCreateRequest */
		TeamMemberCreateRequest: {
			is_public?: boolean | null;
			member_state?: components["schemas"]["MemberState"] | null;
			role_assignments?:
				| components["schemas"]["TeamMemberRoleAssignmentInput"][]
				| null;
			role_ids?: string[] | null;
			sort_order?: number | null;
			user_id: string;
		};
		/** TeamMemberDeleteResponse */
		TeamMemberDeleteResponse: {
			ok: boolean;
		};
		/** TeamMemberItem */
		TeamMemberItem: {
			/** Format: date-time */
			created_at: string;
			id: components["schemas"]["Snowflake"];
			is_owner: boolean;
			is_public: boolean;
			member_state?: components["schemas"]["MemberState"];
			role_assignments?: components["schemas"]["TeamMemberRoleAssignment"][];
			role_ids?: string[];
			sort_order: number;
			/** Format: date-time */
			updated_at: string;
			user_id: components["schemas"]["Snowflake"];
		};
		/** TeamMemberRoleAssignment */
		TeamMemberRoleAssignment: {
			role_id: string;
			scope_id?: string | null;
			scope_type?: components["schemas"]["TeamScopeType"];
		};
		/** TeamMemberRoleAssignmentInput */
		TeamMemberRoleAssignmentInput: {
			role_id: string;
			scope_id?: string | null;
			scope_type?: components["schemas"]["TeamScopeType"] | null;
		};
		/** TeamMemberUpdateRequest */
		TeamMemberUpdateRequest: {
			is_public?: boolean | null;
			member_state?: components["schemas"]["MemberState"] | null;
			role_assignments?:
				| components["schemas"]["TeamMemberRoleAssignmentInput"][]
				| null;
			role_ids?: string[] | null;
			sort_order?: number | null;
		};
		/** TeamRoleCreateRequest */
		TeamRoleCreateRequest: {
			color?: string | null;
			discord_role_id?: string | null;
			icon?: string | null;
			is_public?: boolean | null;
			key?: string | null;
			luckperms_group?: string | null;
			name: string;
			permissions?: string[] | null;
			position?: number | null;
			sort_order?: number | null;
		};
		/** TeamRoleDeleteResponse */
		TeamRoleDeleteResponse: {
			ok: boolean;
		};
		/** TeamRoleItem */
		TeamRoleItem: {
			color?: string | null;
			/** Format: date-time */
			created_at: string;
			discord_role_id?: string | null;
			icon?: string | null;
			id: components["schemas"]["Snowflake"];
			/** @default false */
			is_public: boolean;
			key: string;
			luckperms_group?: string | null;
			/** @default false */
			managed: boolean;
			name: string;
			permissions?: string[];
			/** @default 0 */
			permissions_bits: number;
			/** @default 0 */
			position: number;
			/** @default 0 */
			sort_order: number;
			/** Format: date-time */
			updated_at: string;
		};
		/** TeamRoleUpdateRequest */
		TeamRoleUpdateRequest: {
			color?: string | null;
			discord_role_id?: string | null;
			icon?: string | null;
			is_public?: boolean | null;
			key?: string | null;
			luckperms_group?: string | null;
			name?: string | null;
			permissions?: string[] | null;
			position?: number | null;
			sort_order?: number | null;
		};
		/** TeamScopeServer */
		TeamScopeServer: {
			/** Format: date-time */
			created_at: string;
			id: components["schemas"]["Snowflake"];
			name: string;
			server_role: components["schemas"]["ServerRole"];
			slug?: string | null;
			/** Format: date-time */
			updated_at: string;
		};
		/**
		 * TeamScopeType
		 * @description Scope a project team role grant applies to.
		 * @default project
		 * @enum {string}
		 */
		TeamScopeType:
			| "project"
			| "server"
			| "network_all"
			| "network_selected"
			| "whitelist_policy"
			| "unknown";
		/**
		 * TelemetryMetricKind
		 * @description Update profile for a verified-plugin telemetry metric.
		 * @enum {string}
		 */
		TelemetryMetricKind:
			| "hot"
			| "warm"
			| "cold"
			| "static"
			| "event"
			| "other"
			| "unknown";
		/** TextTranslation */
		TextTranslation: {
			engine: string;
			original_text: string;
			source?: string | null;
			source_locale?: string | null;
			status: components["schemas"]["TranslationStatus"];
			target_locale: string;
			translated_text: string;
		};
		/**
		 * TicketAuthorType
		 * @description Who authored a ticket message.
		 * @enum {string}
		 */
		TicketAuthorType: "user" | "staff" | "system" | "unknown";
		/** TicketCreateRequest */
		TicketCreateRequest: {
			content: string;
			minecraft_username?: string | null;
			minecraft_uuid?: string | null;
			priority?: components["schemas"]["TicketPriority"];
			server_id: components["schemas"]["Snowflake"];
			source?: components["schemas"]["TicketSource"];
			subject: string;
		};
		/** TicketDetail */
		TicketDetail: {
			creator_id: components["schemas"]["Snowflake"];
			messages?: components["schemas"]["TicketMessage"][];
			summary: components["schemas"]["TicketSummary"];
		};
		/** TicketList */
		TicketList: {
			items: components["schemas"]["TicketSummary"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** TicketMessage */
		TicketMessage: {
			author_id: components["schemas"]["Snowflake"];
			author_type: components["schemas"]["TicketAuthorType"];
			content: string;
			created_at: string;
			id: components["schemas"]["Snowflake"];
			source: components["schemas"]["TicketSource"];
		};
		/** TicketMessageCreateRequest */
		TicketMessageCreateRequest: {
			content: string;
		};
		/** TicketMessageList */
		TicketMessageList: {
			messages: components["schemas"]["TicketMessage"][];
		};
		/**
		 * TicketPriority
		 * @description Priority of a support ticket.
		 * @default normal
		 * @enum {string}
		 */
		TicketPriority: "low" | "normal" | "high" | "urgent" | "unknown";
		/**
		 * TicketSource
		 * @description Channel a ticket message arrived through.
		 * @default web
		 * @enum {string}
		 */
		TicketSource: "web" | "discord" | "minecraft" | "unknown";
		/**
		 * TicketStatus
		 * @description Lifecycle of a support ticket.
		 * @enum {string}
		 */
		TicketStatus: "open" | "pending" | "resolved" | "closed" | "unknown";
		/** TicketStatusUpdateRequest */
		TicketStatusUpdateRequest: {
			status: components["schemas"]["TicketStatus"];
		};
		/** TicketSummary */
		TicketSummary: {
			created_at: string;
			id: components["schemas"]["Snowflake"];
			priority: components["schemas"]["TicketPriority"];
			server_id: components["schemas"]["Snowflake"];
			status: components["schemas"]["TicketStatus"];
			subject: string;
			updated_at: string;
		};
		/** TotpBeginResult */
		TotpBeginResult: {
			otpauth_url: string;
			secret: string;
		};
		/** TotpCodeRequest */
		TotpCodeRequest: {
			code: string;
		};
		/** TotpStatus */
		TotpStatus: {
			created_at?: string | null;
			enabled: boolean;
		};
		/**
		 * TranslationStatus
		 * @description Outcome of an automated comment translation.
		 * @default unknown
		 * @enum {string}
		 */
		TranslationStatus:
			| "translated"
			| "skipped"
			| "pending"
			| "unavailable"
			| "unsupported"
			| "unknown";
		/**
		 * TrustState
		 * @description How the live status for a server was sourced/trusted.
		 * @default unknown
		 * @enum {string}
		 */
		TrustState: "verified" | "gateway" | "unverified" | "unknown";
		/** UnlinkedMinecraftAccount */
		UnlinkedMinecraftAccount: {
			account_type: string;
			id: components["schemas"]["Snowflake"];
			identity_scope_id?: components["schemas"]["Snowflake"] | null;
			identity_scope_type: string;
			link_source: string;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			proof_server_id?: components["schemas"]["Snowflake"] | null;
			uuid_type?: string | null;
			verification_status: string;
		};
		/** UnreadCount */
		UnreadCount: {
			/** @default 0 */
			count: number;
		};
		/** UpdateManifest */
		UpdateManifest: {
			artifact_id: string;
			channel: string;
			components?: {
				[key: string]: components["schemas"]["ManifestComponent"];
			};
			deltas?: {
				[key: string]: {
					[key: string]: components["schemas"]["ManifestDelta"];
				};
			};
			download_url?: string | null;
			download_urls?: string[];
			file_name: string;
			modrinth_url?: string | null;
			platform: string;
			product: string;
			sha256: string;
			signature?: string | null;
			signature_version?: string | null;
			version: string;
		};
		/** UpdateManifestUpsert */
		UpdateManifestUpsert: {
			artifact_id?: string | null;
			components?: {
				[key: string]: components["schemas"]["ManifestComponent"];
			};
			deltas?: {
				[key: string]: {
					[key: string]: components["schemas"]["ManifestDelta"];
				};
			};
			download_url?: string | null;
			download_urls?: string[];
			file_name?: string | null;
			modrinth_url?: string | null;
			rollout_allow_servers?: number[];
			rollout_deny_servers?: number[];
			rollout_percent?: number | null;
			sha256: string;
			version: string;
		};
		/** UpdateReportAck */
		UpdateReportAck: {
			ok: boolean;
		};
		/** UpdateReportInput */
		UpdateReportInput: {
			channel?: string | null;
			current_version?: string | null;
			detail?: string | null;
			/** @default unknown */
			event: string;
			platform?: string | null;
			server_id?: components["schemas"]["Snowflake"] | null;
			/** @default unknown */
			status: string;
			target_version?: string | null;
		};
		/** UserEngagement */
		UserEngagement: {
			top_project?: components["schemas"]["UserEngagementTopProject"] | null;
			total_comments: number;
			total_favorites: number;
			total_votes: number;
		};
		/** UserEngagementTopProject */
		UserEngagementTopProject: {
			project_id: components["schemas"]["Snowflake"];
			votes: number;
		};
		/** UserProfile */
		UserProfile: {
			avatar_url?: string | null;
			bio?: string | null;
			created_at?: string | null;
			email?: string | null;
			/** @default false */
			email_verified: boolean;
			id: components["schemas"]["Snowflake"];
			privacy?: components["schemas"]["me_ProfilePrivacy"];
			slug?: string | null;
			status: string;
			/** @default auto */
			time_format_preference: string;
			updated_at?: string | null;
			username: string;
		};
		/** UserRecentActivity */
		UserRecentActivity: {
			items: components["schemas"]["RecentActivityItem"][];
		};
		/** UserRolesResponse */
		UserRolesResponse: {
			roles?: string[];
			user_id: string;
		};
		/**
		 * UserStatus
		 * @description Account status of a platform user.
		 * @enum {string}
		 */
		UserStatus: "active" | "pending" | "disabled" | "banned" | "unknown";
		/** ValidateCouponRequest */
		ValidateCouponRequest: {
			coupon_code: string;
			product_code?: string | null;
			product_id?: string | null;
			/** @default 1 */
			quantity?: number;
		};
		/** ValidateCouponResult */
		ValidateCouponResult: {
			/** @default 0 */
			amount_minor: number;
			/** @default 0 */
			base_minor: number;
			/** @default 0 */
			ccy: number;
			/** @default  */
			coupon_code: string;
			/** @default 0 */
			discount_minor: number;
			/** @default 0 */
			net_minor: number;
			/** @default  */
			reason: string;
			/** @default 0 */
			tax_minor: number;
			valid: boolean;
		};
		/** VerificationCheckRequest */
		VerificationCheckRequest: {
			token: string;
		};
		/** VerificationServerSummary */
		VerificationServerSummary: {
			favicon_url?: string | null;
			game_edition?: components["schemas"]["GameEdition"] | null;
			icon_url?: string | null;
			id: components["schemas"]["Snowflake"];
			ip_or_domain: string;
			is_verified: boolean;
			name: string;
			owner_id?: components["schemas"]["Snowflake"] | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			proxy_type: string;
			role: components["schemas"]["ServerRole"];
			server_role: components["schemas"]["ServerRole"];
			slug?: string | null;
			/** @default 0 */
			verification_level: number;
			verification_source?: components["schemas"]["VerificationSource"] | null;
			verified_at?: string | null;
		};
		/**
		 * VerificationSource
		 * @description How a server's ownership was verified (provenance, not live trust).
		 * @enum {string}
		 */
		VerificationSource: "plugin" | "motd" | "unknown";
		/** VerificationStartRequest */
		VerificationStartRequest: {
			address: string;
			project_id?: components["schemas"]["Snowflake"] | null;
		};
		/**
		 * VerificationStatus
		 * @description Lifecycle of a DNS/MOTD ownership verification challenge.
		 * @enum {string}
		 */
		VerificationStatus:
			| "issued"
			| "pending"
			| "verified"
			| "expired"
			| "unknown";
		/** VoteItem */
		VoteItem: {
			avatar_url?: string | null;
			slug?: string | null;
			user_id: components["schemas"]["Snowflake"];
			username?: string | null;
			voted_at: string;
		};
		/** VotingLinks */
		VotingLinks: {
			allmc_url?: string | null;
			disflip_url?: string | null;
			leavepulse_url?: string | null;
			monicore_url?: string | null;
			server_id: components["schemas"]["Snowflake"];
		};
		/** VotingLinksUpdateRequest */
		VotingLinksUpdateRequest: {
			allmc_url?: string | null;
			disflip_url?: string | null;
			leavepulse_url?: string | null;
			monicore_url?: string | null;
		};
		/** WhitelistApplicantNotificationSettings */
		WhitelistApplicantNotificationSettings: {
			discord_dm?: components["schemas"]["WhitelistNotificationChannelSettings"];
			email?: components["schemas"]["WhitelistNotificationChannelSettings"];
			minecraft_direct?: components["schemas"]["WhitelistNotificationChannelSettings"];
			telegram?: components["schemas"]["WhitelistNotificationChannelSettings"];
		};
		/** WhitelistApplication */
		WhitelistApplication: {
			application_url?: string | null;
			/** @default false */
			auto_approved: boolean;
			/** Format: date-time */
			created_at: string;
			discord_name?: string | null;
			form_id?: components["schemas"]["Snowflake"] | null;
			id: components["schemas"]["Snowflake"];
			minecraft_account_type?:
				| components["schemas"]["MinecraftAccountType"]
				| null;
			minecraft_identity_state?:
				| components["schemas"]["MinecraftIdentityState"]
				| null;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			payload?: {
				[key: string]: string;
			};
			review_reason?: string | null;
			reviewed_at?: string | null;
			server_id: components["schemas"]["Snowflake"];
			status: components["schemas"]["WhitelistApplicationStatus"];
			status_alias?: string | null;
			/** Format: date-time */
			updated_at: string;
			user_id: components["schemas"]["Snowflake"];
		};
		/** WhitelistApplicationList */
		WhitelistApplicationList: {
			items?: components["schemas"]["WhitelistApplication"][];
			/** @default 1 */
			page: number;
			/** @default 50 */
			per_page: number;
			/** @default 0 */
			total: number;
		};
		/**
		 * WhitelistApplicationStatus
		 * @description Lifecycle of a whitelist application (canonical statuses only).
		 *
		 *     The backend canonicalises soft aliases (``approved_soft`` etc.) before
		 *     they reach the API, so only the canonical set is listed here.
		 * @enum {string}
		 */
		WhitelistApplicationStatus:
			| "pending"
			| "approved"
			| "approved_pending_proof"
			| "denied"
			| "revision"
			| "unknown";
		/** WhitelistApplyRequest */
		WhitelistApplyRequest: {
			answers?: {
				[key: string]: unknown;
			};
			binding_id?: components["schemas"]["Snowflake"] | null;
			minecraft_account_type: string;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
		};
		/** WhitelistBindingDetail */
		WhitelistBindingDetail: {
			/** Format: date-time */
			created_at: string;
			discord_membership_mode?: components["schemas"]["DiscordMembershipMode"];
			/** @default true */
			enabled: boolean;
			enforcement_mode: components["schemas"]["EnforcementMode"];
			form_id?: components["schemas"]["Snowflake"] | null;
			granted_role_ids?: components["schemas"]["Snowflake"][];
			id: components["schemas"]["Snowflake"];
			mode?: components["schemas"]["WhitelistBindingMode"];
			notification_settings?: components["schemas"]["WhitelistNotificationSettings"];
			project_id?: components["schemas"]["Snowflake"] | null;
			/** @default true */
			restrict_chat: boolean;
			scope_type: components["schemas"]["TeamScopeType"];
			server_id: components["schemas"]["Snowflake"];
			target_server_ids?: components["schemas"]["Snowflake"][];
			/** Format: date-time */
			updated_at: string;
		};
		/**
		 * WhitelistBindingMode
		 * @description How a whitelist binding gathers applicants.
		 * @default form
		 * @enum {string}
		 */
		WhitelistBindingMode: "form" | "direct" | "unknown";
		/** WhitelistBindingTestResult */
		WhitelistBindingTestResult: {
			detail?: string | null;
			sent: boolean;
		};
		/** WhitelistBindingWriteRequest */
		WhitelistBindingWriteRequest: {
			discord_membership_mode?: components["schemas"]["DiscordMembershipMode"];
			/** @default true */
			enabled?: boolean;
			enforcement_mode: components["schemas"]["EnforcementMode"];
			form_id?: string | null;
			granted_role_ids?: string[];
			mode?: components["schemas"]["WhitelistBindingMode"];
			notification_settings?: components["schemas"]["WhitelistNotificationSettings"];
			/** @default true */
			restrict_chat?: boolean;
			scope_type: components["schemas"]["TeamScopeType"];
			server_id: string;
			target_server_ids?: string[];
		};
		/** WhitelistConfig */
		WhitelistConfig: {
			binding_server_id?: components["schemas"]["Snowflake"] | null;
			enabled: boolean;
			enforcement_mode: components["schemas"]["EnforcementMode"];
			entries?: components["schemas"]["WhitelistEntry"][];
			form_fields?: components["schemas"]["WhitelistFormField"][];
			form_id?: components["schemas"]["Snowflake"] | null;
			form_name?: string | null;
			restrict_chat: boolean;
			scope_type: components["schemas"]["TeamScopeType"];
			server_id: components["schemas"]["Snowflake"];
		};
		/** WhitelistDecisionRequest */
		WhitelistDecisionRequest: {
			/** @default  */
			reason?: string;
		};
		/** WhitelistDirectAddRequest */
		WhitelistDirectAddRequest: {
			minecraft_nick: string;
		};
		/** WhitelistDirectEntry */
		WhitelistDirectEntry: {
			added_by_user_id?: components["schemas"]["Snowflake"] | null;
			/** Format: date-time */
			created_at: string;
			id: components["schemas"]["Snowflake"];
			minecraft_account_type?:
				| components["schemas"]["MinecraftAccountType"]
				| null;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			server_id: components["schemas"]["Snowflake"];
			/** Format: date-time */
			updated_at: string;
		};
		/** WhitelistDirectEntryPage */
		WhitelistDirectEntryPage: {
			items?: components["schemas"]["WhitelistDirectEntry"][];
			/** @default 1 */
			page: number;
			/** @default 50 */
			per_page: number;
			total: number;
		};
		/** WhitelistDirectRemoval */
		WhitelistDirectRemoval: {
			minecraft_nick?: string | null;
			removed: boolean;
		};
		/** WhitelistEntry */
		WhitelistEntry: {
			created_at?: string | null;
			discord_name?: string | null;
			minecraft_account_type?:
				| components["schemas"]["MinecraftAccountType"]
				| null;
			minecraft_nick?: string | null;
			minecraft_uuid?: string | null;
			updated_at?: string | null;
			user_id?: components["schemas"]["Snowflake"] | null;
		};
		/** WhitelistFieldConfig */
		WhitelistFieldConfig: {
			field_type: string;
			help_text?: string | null;
			key: string;
			label: string;
			/** @default 0 */
			order: number;
			/** @default false */
			required: boolean;
			rules?: {
				[key: string]: string | number | boolean | string[] | null;
			} | null;
		};
		/**
		 * WhitelistFieldType
		 * @description Input type of a whitelist form field.
		 * @enum {string}
		 */
		WhitelistFieldType:
			| "text"
			| "textarea"
			| "number"
			| "boolean"
			| "select"
			| "unknown";
		/** WhitelistFormCard */
		WhitelistFormCard: {
			auto_approve_enabled: boolean;
			/** Format: date-time */
			created_at: string;
			description?: string | null;
			id: components["schemas"]["Snowflake"];
			name: string;
			project_id?: components["schemas"]["Snowflake"] | null;
			require_discord: boolean;
			require_minecraft_nick: boolean;
			/** Format: date-time */
			updated_at: string;
		};
		/** WhitelistFormCreateRequest */
		WhitelistFormCreateRequest: {
			/** @default false */
			auto_approve_enabled?: boolean;
			auto_approve_rules?: {
				[key: string]: string | number | boolean | string[] | null;
			} | null;
			description?: string | null;
			fields?: components["schemas"]["WhitelistFieldConfig"][];
			import_mapping?: {
				[key: string]: unknown;
			} | null;
			name: string;
			project_id?: components["schemas"]["Snowflake"] | null;
			/** @default false */
			require_discord?: boolean;
			/** @default true */
			require_minecraft_nick?: boolean;
		};
		/** WhitelistFormDetail */
		WhitelistFormDetail: {
			auto_approve_rules?: {
				[key: string]: string | number | boolean | string[] | null;
			} | null;
			fields?: components["schemas"]["WhitelistFieldConfig"][];
			import_mapping?: {
				[key: string]: unknown;
			} | null;
			summary: components["schemas"]["WhitelistFormCard"];
		};
		/** WhitelistFormDetailPage */
		WhitelistFormDetailPage: {
			items?: components["schemas"]["WhitelistFormDetail"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** WhitelistFormField */
		WhitelistFormField: {
			field_type: components["schemas"]["WhitelistFieldType"];
			key: string;
			label: string;
			order?: number | null;
			required: boolean;
		};
		/** WhitelistFormImportMappingRequest */
		WhitelistFormImportMappingRequest: {
			import_mapping?: {
				[key: string]: unknown;
			} | null;
		};
		/** WhitelistFormPatch */
		WhitelistFormPatch: {
			auto_approve_enabled?: boolean | null;
			auto_approve_rules?: {
				[key: string]: string | number | boolean | string[] | null;
			} | null;
			description?: string | null;
			fields?: components["schemas"]["WhitelistFieldConfig"][] | null;
			import_mapping?: {
				[key: string]: unknown;
			} | null;
			name?: string | null;
			project_id?: components["schemas"]["Snowflake"] | null;
			require_discord?: boolean | null;
			require_minecraft_nick?: boolean | null;
		};
		/** WhitelistFormUpdateRequest */
		WhitelistFormUpdateRequest: {
			patch: components["schemas"]["WhitelistFormPatch"];
		};
		/** WhitelistImportJob */
		WhitelistImportJob: {
			/** @default 0 */
			applications_added: number;
			/** @default 0 */
			batches_expected: number;
			/** @default 0 */
			batches_received: number;
			binding_id: components["schemas"]["Snowflake"];
			completed_at?: string | null;
			conflict_policy: string;
			/** @default 0 */
			conflicts: number;
			/** Format: date-time */
			created_at: string;
			/** @default 0 */
			entries_added: number;
			/** @default 0 */
			entries_updated: number;
			error_reason?: string | null;
			expires_at?: string | null;
			id: components["schemas"]["Snowflake"];
			include_history: boolean;
			payload?: unknown;
			server_id: components["schemas"]["Snowflake"];
			source: string;
			started_at?: string | null;
			status: string;
			token: string;
			/** Format: date-time */
			updated_at: string;
		};
		/** WhitelistImportJobPage */
		WhitelistImportJobPage: {
			items?: components["schemas"]["WhitelistImportJob"][];
			/** @default 1 */
			page: number;
			/** @default 20 */
			per_page: number;
			/** @default 0 */
			total: number;
		};
		/** WhitelistImportOptions */
		WhitelistImportOptions: {
			entries?:
				| {
						[key: string]: unknown;
				  }[]
				| null;
			field_priority?: {
				[key: string]: string[];
			} | null;
			manual_overrides?: {
				[key: string]: {
					[key: string]: string;
				};
			} | null;
			payload?: {
				[key: string]: unknown;
			} | null;
			source_priority?: string[];
			sources?:
				| {
						[key: string]: unknown;
				  }[]
				| null;
		};
		/** WhitelistImportRequest */
		WhitelistImportRequest: {
			binding_id: components["schemas"]["Snowflake"];
			/** @default merge */
			conflict_policy?: string;
			/** @default false */
			dry_run?: boolean;
			expires_in_hours?: number | null;
			form_id?: string | null;
			/** @default auto */
			import_account_mode?: string;
			/** @default false */
			include_history?: boolean;
			options?: components["schemas"]["WhitelistImportOptions"];
			/** @default vanilla */
			source?: string;
		};
		/** WhitelistMinecraftPullRequest */
		WhitelistMinecraftPullRequest: {
			/** @default 200 */
			batch_size?: number;
			binding_id: components["schemas"]["Snowflake"];
			/** @default merge */
			conflict_policy?: string;
			expires_in_hours?: number | null;
			form_id?: string | null;
			/** @default auto */
			import_account_mode?: string;
			/** @default false */
			include_history?: boolean;
			/** @default minecraft */
			source?: string;
		};
		/** WhitelistNotificationChannelSettings */
		WhitelistNotificationChannelSettings: {
			channel_id?: string | null;
			content_template?: string | null;
			/** @default false */
			enabled: boolean;
			format?: string | null;
			statuses?: string[];
			subject_template?: string | null;
			target_scope?: string | null;
		};
		/** WhitelistNotificationSettings */
		WhitelistNotificationSettings: {
			applicant?: components["schemas"]["WhitelistApplicantNotificationSettings"];
			staff?: components["schemas"]["WhitelistStaffNotificationSettings"];
			/** @default 1 */
			version: number;
		};
		/** WhitelistProofEntry */
		WhitelistProofEntry: {
			/** @default project_any_server */
			entry_hint_kind: string;
			entry_server_id?: components["schemas"]["Snowflake"] | null;
			/** @default leavepulse */
			preferred_command_root: string;
			/** @default project */
			scope: string;
		};
		/** WhitelistStaffNotificationSettings */
		WhitelistStaffNotificationSettings: {
			discord_channel?: components["schemas"]["WhitelistNotificationChannelSettings"];
			discord_dm?: components["schemas"]["WhitelistNotificationChannelSettings"];
			email?: components["schemas"]["WhitelistNotificationChannelSettings"];
			minecraft_broadcast?: components["schemas"]["WhitelistNotificationChannelSettings"];
			telegram?: components["schemas"]["WhitelistNotificationChannelSettings"];
		};
		/** WhitelistStatusRequest */
		WhitelistStatusRequest: {
			/** @default  */
			reason?: string;
			status: string;
		};
		/** WhitelistTargetServerRef */
		WhitelistTargetServerRef: {
			entry_server_id?: components["schemas"]["Snowflake"] | null;
			server_id: components["schemas"]["Snowflake"];
		};
		/** Workspace */
		Workspace: {
			/** @default false */
			can_edit_draft: boolean;
			/** @default false */
			can_manage: boolean;
			/** @default false */
			can_verify: boolean;
			catalog_mode: string;
			/** Format: date-time */
			created_at: string;
			creator_user_id?: components["schemas"]["Snowflake"] | null;
			display_server?: components["schemas"]["ServerSummary"] | null;
			display_server_id?: components["schemas"]["Snowflake"] | null;
			freshness_state?: components["schemas"]["FreshnessState"];
			game_editions?: string[];
			hearts?: number | null;
			id: components["schemas"]["Snowflake"];
			last_status_at?: string | null;
			lifecycle_state?: components["schemas"]["LifecycleState"];
			max_players?: number | null;
			name: string;
			online_players?: number | null;
			online_reason?: string | null;
			online_server_id?: components["schemas"]["Snowflake"] | null;
			online_source?: components["schemas"]["OnlineSource"] | null;
			online_state?: components["schemas"]["OnlineState"];
			online_strategy: components["schemas"]["OnlineStrategy"];
			owner_id?: components["schemas"]["Snowflake"] | null;
			public_entrypoint?: string | null;
			/** @default 0 */
			public_entrypoint_count: number;
			public_entrypoint_state?: components["schemas"]["PublicEntrypointState"];
			/** @default 0 */
			public_server_count: number;
			regions?: string[];
			root_server_id?: components["schemas"]["Snowflake"] | null;
			/** @default 0 */
			server_count: number;
			slug?: string | null;
			trust_state?: components["schemas"]["TrustState"];
			/** Format: date-time */
			updated_at: string;
			user_permissions?: string[];
			verified_plugin_rollout_mode?: components["schemas"]["RolloutMode"];
			verified_plugin_rollout_state?:
				| components["schemas"]["RolloutState"]
				| null;
			/** @default 0 */
			verified_server_count: number;
			votes_monthly?: number | null;
		};
		/** WorkspaceChangeSlugRequest */
		WorkspaceChangeSlugRequest: {
			slug?: string | null;
		};
		/** WorkspaceDetail */
		WorkspaceDetail: {
			servers?: components["schemas"]["ServerSummary"][];
			workspace: components["schemas"]["Workspace"];
		};
		/** WorkspaceListResponse */
		WorkspaceListResponse: {
			items: components["schemas"]["Workspace"][];
			page: number;
			per_page: number;
			total: number;
		};
		/** WorkspaceRenameRequest */
		WorkspaceRenameRequest: {
			name: string;
		};
		/** WorkspaceResolveResponse */
		WorkspaceResolveResponse: {
			slug?: string | null;
			workspace_id: components["schemas"]["Snowflake"];
		};
		/** WorkspaceSetOnlineStrategyRequest */
		WorkspaceSetOnlineStrategyRequest: {
			online_strategy: components["schemas"]["OnlineStrategy"];
		};
		/** WorkspaceSetRolloutModeRequest */
		WorkspaceSetRolloutModeRequest: {
			verified_plugin_rollout_mode: components["schemas"]["RolloutMode"];
		};
		/** WsTokenRequest */
		WsTokenRequest: {
			audience: string;
			scope?: string[];
		};
		/** WsTokenResponse */
		WsTokenResponse: {
			audience: string;
			expires_in: number;
			scope?: string[];
			session_id: string;
			tenant?: string | null;
			token: string;
			token_type: string;
		};
		/** _AvatarUploadForm */
		_AvatarUploadForm: {
			/** Format: binary */
			file: string;
		};
		/** _IconUploadForm */
		_IconUploadForm: {
			/** Format: binary */
			file: string;
			/** @default true */
			sync: boolean | string;
		};
		/** ProfilePrivacy */
		me_ProfilePrivacy: {
			/** @default false */
			show_activity_stats: boolean;
			/** @default true */
			show_bio: boolean;
			/** @default true */
			show_join_date: boolean;
			/** @default false */
			show_linked_accounts: boolean;
			/** @default false */
			show_ownership: boolean;
			/** @default false */
			show_status: boolean;
			/** @default false */
			show_streak: boolean;
			/** @default false */
			show_top_server: boolean;
			/** @default false */
			show_user_id: boolean;
		};
		/** ProfilePrivacy */
		users_ProfilePrivacy: {
			/** @default false */
			show_activity_stats: boolean;
			/** @default true */
			show_bio: boolean;
			/** @default true */
			show_join_date: boolean;
			/** @default false */
			show_linked_accounts: boolean;
			/** @default false */
			show_ownership: boolean;
			/** @default false */
			show_status: boolean;
			/** @default false */
			show_streak: boolean;
			/** @default false */
			show_top_server: boolean;
			/** @default false */
			show_user_id: boolean;
		};
	};
	responses: never;
	parameters: never;
	requestBodies: never;
	headers: never;
	pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
	Root: {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PlatformInfo"];
				};
			};
		};
	};
	V1Root: {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PlatformInfo"];
				};
			};
		};
	};
	"admin.discovery.candidates": {
		parameters: {
			query?: {
				page?: number;
				limit?: number;
				status?: string | null;
				search?: string | null;
				source?: string | null;
				edition?: components["schemas"]["GameEdition"] | null;
				region?: string | null;
				min_sources?: number | null;
				min_mc_online?: number | null;
				min_discord_members?: number | null;
				sort?: components["schemas"]["DiscoverySort"] | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": string;
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.discovery.edit": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				candidate_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DiscoveryCandidateEditRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": string;
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.discovery.approve": {
		parameters: {
			query?: {
				show_in_public?: boolean;
				server_id?: components["schemas"]["Snowflake"] | null;
			};
			header?: never;
			path: {
				candidate_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscoveryApproveResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.discovery.ignore": {
		parameters: {
			query?: {
				reason?: string | null;
			};
			header?: never;
			path: {
				candidate_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscoveryIgnoreResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.discovery.observations": {
		parameters: {
			query?: {
				limit?: number;
			};
			header?: never;
			path: {
				candidate_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": string;
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.discovery.preview": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				candidate_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": string;
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.discovery.sources": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": string;
				};
			};
		};
	};
	"admin.players.search": {
		parameters: {
			query?: {
				q?: string | null;
				page?: number;
				per_page?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PlayerSearchPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.list": {
		parameters: {
			query?: {
				q?: string | null;
				page?: number;
				per_page?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProjectListResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProjectDeleteResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.change_slug": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminChangeProjectSlugRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProject"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.rename": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminRenameProjectRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProject"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.set_online_strategy": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminSetProjectOnlineStrategyRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProject"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.set_rollout_mode": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminSetProjectRolloutModeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProject"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.projects.transfer_ownership": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminTransferOwnershipRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminProject"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.roles.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminRoleListResponse"];
				};
			};
		};
	};
	"admin.roles.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminRoleRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminRole"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.roles.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				role_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminRoleDeleteResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.roles.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				role_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminRoleRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminRole"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.servers.list": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
				q?: string | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminServerListResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.servers.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminForceCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminServerSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.servers.stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["GlobalServerStats"];
				};
			};
		};
	};
	"admin.servers.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminDeleteResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.servers.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminServerUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminServerSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.overrides.list": {
		parameters: {
			query?: {
				start?: string | null;
				end?: string | null;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["StatusOverrideItem"][];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.overrides.create": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CreateStatusOverrideRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["StatusOverrideItem"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.overrides.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				override_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeleteStatusOverrideResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.sessions.revoke": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				session_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SessionRevokeResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.system.health": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServicesHealthResponse"];
				};
			};
		};
	};
	"admin.users.list": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
				q?: string | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminUserListResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.by_minecraft": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				uuid: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminUserDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.search": {
		parameters: {
			query?: {
				q?: string | null;
				limit?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminUserListResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminUserDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminUserUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminUserDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.set_discord": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminUserDiscordUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminUserDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.create_offline_minecraft": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminMinecraftAccountWriteRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminMinecraftAccount"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.delete_minecraft": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
				account_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminMinecraftAccountDeleteResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.update_minecraft": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
				account_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AdminMinecraftAccountWriteRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AdminMinecraftAccount"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.roles": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserRolesResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.assign_role": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
				role_slug: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserRolesResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.remove_role": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
				role_slug: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserRolesResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"admin.users.sessions": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SessionList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"auth.device.approve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DeviceApproveRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeviceApproveResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"auth.device.start": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DeviceStartRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeviceStartResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"auth.device.token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DeviceTokenRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeviceTokenResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.issue_ws_token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WsTokenRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WsTokenResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.checkout": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CheckoutRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["CheckoutResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.coupons.validate": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ValidateCouponRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ValidateCouponResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.currencies.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Currency"][];
				};
			};
		};
	};
	"billing.customer.get": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Customer"] | null;
				};
			};
		};
	};
	"billing.customer.upsert": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CustomerUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Customer"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.orders.list": {
		parameters: {
			query?: {
				page?: number;
				limit?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["OrderList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"order.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				order_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Order"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"order.reconcile": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				order_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Order"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"order.refundRequest": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				order_id: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["RefundRequestBody"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RefundRequest"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.paymentMethods.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PaymentMethod"][];
				};
			};
		};
	};
	"paymentMethod.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				method_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, nothing follows */
			204: {
				headers: {
					[name: string]: unknown;
				};
				content?: never;
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"paymentMethod.setDefault": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				method_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PaymentMethod"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.products.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Product"][];
				};
			};
		};
	};
	"billing.quote": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["QuoteRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Quote"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.refundRequests.list": {
		parameters: {
			query?: {
				status?: string | null;
				page?: number;
				limit?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RefundRequestList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"refundRequest.cancel": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				request_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RefundRequest"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"billing.subscriptions.list": {
		parameters: {
			query?: {
				page?: number;
				limit?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SubscriptionList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"subscription.cancel": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				subscription_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Subscription"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"builds.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BuildList"];
				};
			};
		};
	};
	"builds.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["BuildCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Build"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"builds.import": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ImportSharedBuildRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Build"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"builds.preview": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				share_token: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Build"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"builds.shared_with_me": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BuildList"];
				};
			};
		};
	};
	"build.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Build"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeleteBuildResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.update": {
		parameters: {
			query?: never;
			header?: {
				"If-Match"?: string | null;
			};
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["BuildUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Build"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.collaborators.list": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["CollaboratorList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.collaborators.add": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CollaboratorAddRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Collaborator"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.collaborators.remove": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeleteBuildResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.config.url": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ConfigBlobRef"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.config.confirm": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ConfigBlobConfirmRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Build"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.config.upload": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ConfigBlobUploadRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ConfigBlobUpload"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.share": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ShareLink"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"build.unshare": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				build_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeleteBuildResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.engagement": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserEngagement"];
				};
			};
		};
	};
	"project.comments.list": {
		parameters: {
			query?: {
				page?: number;
				limit?: number;
				target_locale?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["CommentList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.comments.create": {
		parameters: {
			query?: {
				target_locale?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CommentCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Comment"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.comments.liked": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LikedCommentIds"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.comments.mine": {
		parameters: {
			query?: {
				target_locale?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyComment"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"comment.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
				comment_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeleteCommentResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"comment.like": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
				comment_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["CommentLikeResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"comment.reply": {
		parameters: {
			query?: {
				target_locale?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
				comment_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CommentCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Comment"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.engagement": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectEngagement"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.engagement.status": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectEngagementStatus"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.heart": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectHeartResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.thumb": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectThumbResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.votes.list": {
		parameters: {
			query?: {
				limit?: number;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RecentVotes"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"tickets.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TicketCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TicketDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"tickets.mine": {
		parameters: {
			query?: {
				page?: number;
				limit?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TicketList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.tickets.list": {
		parameters: {
			query?: {
				page?: number;
				limit?: number;
				status?: string;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TicketList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"ticket.set_status": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				ticket_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TicketStatusUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TicketSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"ticket.messages.list": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				ticket_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TicketMessageList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"ticket.reply": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				ticket_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TicketMessageCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TicketMessage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.engagement": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserEngagement"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.activity.list": {
		parameters: {
			query?: {
				limit?: number;
			};
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserRecentActivity"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.report": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ReportUserRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ReportUserResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"discord.link.complete": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CompleteLinkRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["CompleteLinkResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"discord.link.session": {
		parameters: {
			query: {
				state: string;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LinkSession"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"discord.link.token": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CreateLinkTokenRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LinkTokenResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.bridge": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BridgeSettings"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.bridge.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["BridgeSettingsUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BridgeSettings"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.bridge.import": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ImportPullRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ImportPull"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.bridge.roles": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RoleCatalog"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"updates.manifest": {
		parameters: {
			query?: {
				channel?: string;
				platform?: string;
				server_id?: components["schemas"]["Snowflake"] | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UpdateManifest"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"updates.manifest_upsert": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				channel: string;
				platform: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["UpdateManifestUpsert"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UpdateManifest"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"updates.manifest_delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				channel: string;
				platform: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeleteAck"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"updates.report": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["UpdateReportInput"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UpdateReportAck"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.get": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MeResponse"];
				};
			};
		};
	};
	"me.account.change_email": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["EmailChangeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["EmailChangeResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.account.delete": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AccountDeletionResult"];
				};
			};
		};
	};
	"me.account.export": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["AccountExport"];
				};
			};
		};
	};
	"me.avatar.set": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["AvatarUrlRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserProfile"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.avatar.upload": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"multipart/form-data": components["schemas"]["_AvatarUploadForm"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserProfile"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.avatar.remove": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserProfile"];
				};
			};
		};
	};
	"me.minecraft.unlink": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				account_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MinecraftUnlinkResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.minecraft.link_code": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["MinecraftLinkCodeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MinecraftLinkCodeResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.minecraft.complete_link": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["LinkCompletionRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LinkCompletionResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.minecraft.official_link_start": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MinecraftOfficialLinkStart"];
				};
			};
		};
	};
	"me.minecraft.resolve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["MinecraftResolveRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MinecraftCandidateAccount"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.minecraft.state": {
		parameters: {
			query?: {
				project_id?: components["schemas"]["Snowflake"] | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MinecraftVerificationState"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.get": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["NotificationPreferences"];
				};
			};
		};
	};
	"me.notifications.update": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["NotificationPreferencesUpdate"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["NotificationPreferences"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.delivery.get": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeliveryPreferences"];
				};
			};
		};
	};
	"me.notifications.delivery.update": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DeliveryPreferencesUpdate"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DeliveryPreferences"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.delivery.email.confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["EmailConfirmRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["EmailConfirmResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.delivery.email.confirm_request": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["EmailConfirmRequestPayload"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["EmailConfirmRequestResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.delivery.send_test": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["SendTestRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SendTestResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.feed.list": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
				unread_only?: boolean;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["NotificationList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.feed.mark_all_read": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MarkAllReadResult"];
				};
			};
		};
	};
	"me.notifications.feed.unread_count": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UnreadCount"];
				};
			};
		};
	};
	"me.notifications.feed.dismiss": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				notification_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DismissResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.feed.mark_read": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				notification_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Notification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.notifications.feed.mark_unread": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				notification_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["Notification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.oauth.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["OAuthProvidersResponse"];
				};
			};
		};
	};
	"me.oauth.unlink": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				provider: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["OAuthUnlinkResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.oauth.link_start": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				provider: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["OAuthLinkStartResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.password.status": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PasswordStatus"];
				};
			};
		};
	};
	"me.password.set": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["PasswordSetRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PasswordMutationResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.password.change": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["PasswordChangeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PasswordMutationResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.pat_tokens.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PatTokenList"];
				};
			};
		};
	};
	"me.pat_tokens.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CreatePatTokenRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["CreatePatTokenResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.pat_tokens.revoke": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				token_id: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RevokePatTokenResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.profile.update": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ProfileUpdateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["UserProfile"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.projects.list": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceListResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.projects.resolve": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceResolveResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.projects.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.change_slug": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WorkspaceChangeSlugRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.rename": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WorkspaceRenameRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.set_online_strategy": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WorkspaceSetOnlineStrategyRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.set_rollout_mode": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WorkspaceSetRolloutModeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WorkspaceDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.sessions.list": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SessionList"];
				};
			};
		};
	};
	"me.sessions.revoke_others": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["RevokeOtherSessionsResult"];
				};
			};
		};
	};
	"session.revoke": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				session_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SessionRevokeResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.stats": {
		parameters: {
			query?: {
				estimated?: boolean;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyPlayerStats"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.stats_unverified": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyPlayerStats"];
				};
			};
		};
	};
	"me.totp.status": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TotpStatus"];
				};
			};
		};
	};
	"me.totp.begin": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TotpBeginResult"];
				};
			};
		};
	};
	"me.totp.confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TotpCodeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TotpStatus"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.totp.disable": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TotpCodeRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TotpStatus"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.whitelist.applications": {
		parameters: {
			query?: {
				status?: string | null;
				page?: number;
				per_page?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplicationList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"monitoring.landing": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LandingStats"];
				};
			};
		};
	};
	"monitoring.me.stats": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyDashboardStats"];
				};
			};
		};
	};
	"monitoring.me.stats.unverified": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyDashboardStats"];
				};
			};
		};
	};
	"project.history.list": {
		parameters: {
			query?: {
				period?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["HistoryResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.live": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectLiveStatus"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.player_stats": {
		parameters: {
			query?: {
				user_id?: components["schemas"]["Snowflake"] | null;
				minecraft_uuid?: string | null;
				minecraft_nick?: string | null;
				named_server_id?: number;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PlayerStats"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"password.reset_confirm": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["PasswordResetConfirmRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PasswordResetResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"password.reset_request": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["PasswordResetRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PasswordResetResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.list": {
		parameters: {
			query?: {
				q?: string | null;
				edition?: components["schemas"]["GameEdition"] | null;
				access?: string | null;
				features?: string | null;
				region?: string | null;
				hosting?: string | null;
				verified?: boolean | null;
				has_build?: boolean | null;
				page?: number;
				per_page?: number;
				sort?: components["schemas"]["ProjectSort"] | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectListResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ProjectCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectCreateResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.resolve": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectResolveResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"projects.stats": {
		parameters: {
			query?: {
				q?: string | null;
				edition?: components["schemas"]["GameEdition"] | null;
				access?: string | null;
				features?: string | null;
				region?: string | null;
				hosting?: string | null;
				verified?: boolean | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectFilterStats"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.servers.create": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["CreateProjectServerRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.stats": {
		parameters: {
			query?: {
				period?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectStats"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.team_sync.targets": {
		parameters: {
			query?: {
				role_id?: components["schemas"]["Snowflake"] | null;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscordRoleTargets"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.whitelist.config": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProjectWhitelistConfigItem"][];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.whitelist.forms": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistFormDetailPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.policies": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingDetail"][];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.policies.create": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistBindingWriteRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.policies.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
				policy_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content?: never;
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.policies.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
				policy_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistBindingWriteRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"project.policies.test": {
		parameters: {
			query?: {
				audience?: string;
			};
			header?: never;
			path: {
				project_id: components["schemas"]["Snowflake"];
				policy_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingTestResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"rbac.batch_resolve": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["BatchResolveRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BatchResolveResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.servers.list": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyServersPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"me.servers.issues": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
				include_ok?: boolean;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MyServerIssuesPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"servers.resolve": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"verification.start_dns": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["VerificationStartRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DnsVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"verification.check_dns": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["VerificationCheckRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DnsVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"verification.start_motd": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["VerificationStartRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MotdVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"verification.check_motd": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["VerificationCheckRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MotdVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"verification.start_plugin": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["PluginVerificationStartRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PluginVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"verification.check_plugin": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PluginVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.change_address": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerChangeAddressRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.change_slug": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerChangeSlugRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.force_ping": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ForcePingResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.rename": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerRenameRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_bedrock_port": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetBedrockPortRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_description": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetDescriptionRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_parent": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetParentRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_ping_port": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetPingPortRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_regions": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetRegionsRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_role": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetRoleRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_show_description": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetShowDescriptionRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_show_in_public": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetShowInPublicRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_team_enabled": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetTeamEnabledRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.set_version_override": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerSetVersionOverrideRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerCard"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.bot": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerBot"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.bot.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerBotUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerBot"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.events.list": {
		parameters: {
			query?: {
				period?: string;
				limit?: number;
				page?: number;
				event_types?: string | null;
				player?: string | null;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerEvents"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.issue_gateway_token": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["GatewayTokenRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["GatewayToken"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.history.list": {
		parameters: {
			query?: {
				period?: string;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["HistoryResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.host_risk_evidence": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerHostRiskEvidence"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.icons.upload": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"multipart/form-data": components["schemas"]["_IconUploadForm"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerMediaSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.icons.select": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["IconSelectRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerMediaSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.icons.list": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["IconHistory"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.voting": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["VotingLinks"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.voting.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["VotingLinksUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["VotingLinks"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.launch_manifest": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerLaunchManifest"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.live": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LiveStatus"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.maintenance": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerMaintenance"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.maintenance.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerMaintenanceUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerMaintenance"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.motd.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerMotdUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerMotdSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.ownership": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerOwnership"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.root": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerRoot"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.discord": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscordLink"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.discord.unlink": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscordLink"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.discord.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DiscordLinkUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscordLink"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.discord.verify": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["DiscordVerifyRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["DiscordLink"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.social": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SocialLinks"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.social.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["SocialLinksUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SocialLinks"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.social.verify": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["SocialLinkVerifyRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["SocialLinkVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.stats": {
		parameters: {
			query?: {
				period?: string;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerStats"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.subservers.list": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerSubservers"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.subservers.issue_link_code": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PluginVerification"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.team": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerTeamPublic"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.team_sync.targets": {
		parameters: {
			query?: {
				role_id?: components["schemas"]["Snowflake"] | null;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["MinecraftGroupTargets"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.team.manage": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerTeamManage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.members.create": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TeamMemberCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TeamMemberItem"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.members.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				member_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TeamMemberDeleteResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.members.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				member_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TeamMemberUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TeamMemberItem"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.roles.create": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TeamRoleCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TeamRoleItem"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.roles.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				role_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TeamRoleDeleteResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.roles.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				role_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["TeamRoleUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["TeamRoleItem"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.telemetry": {
		parameters: {
			query?: {
				period?: string;
				source?: string | null;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerTelemetry"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.translations.list": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerTranslations"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.translations.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				field: string;
				locale: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						[key: string]: boolean;
					};
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.translations.set": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				field: string;
				locale: string;
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["ServerTranslationUpsertRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerTranslation"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.public": {
		parameters: {
			query?: {
				binding_id?: number | null;
				locale?: string | null;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ServerWhitelistPublicConfig"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.applications": {
		parameters: {
			query?: {
				status?: string;
				page?: number;
				per_page?: number;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplicationList"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.apply": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistApplyRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplication"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"application.set_status": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				application_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistStatusRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplication"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"application.approve": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				application_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistDecisionRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplication"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"application.deny": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				application_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistDecisionRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplication"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"application.resubmit": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				application_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistApplyRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistApplication"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistConfig"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.direct": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistDirectEntryPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.add_direct": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistDirectAddRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistDirectEntry"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.remove_direct": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				entry_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistDirectRemoval"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.imports": {
		parameters: {
			query?: {
				status?: string;
				page?: number;
				per_page?: number;
			};
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistImportJobPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.create_import": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistImportRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistImportJob"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.pull_minecraft_import": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistMinecraftPullRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistImportJob"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"server.whitelist.import": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				server_id: components["schemas"]["Snowflake"];
				job_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistImportJob"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"stats.filter": {
		parameters: {
			query?: {
				q?: string | null;
				edition?: components["schemas"]["GameEdition"] | null;
				access?: string | null;
				features?: string | null;
				region?: string | null;
				hosting?: string | null;
				verified?: boolean | null;
				role?: string | null;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["FilterStats"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"stats.live": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["LiveDashboardStats"];
				};
			};
		};
	};
	"users.batch": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["BatchPublicProfilesRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BatchPublicProfilesResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"users.search": {
		parameters: {
			query?: {
				q?: string;
				limit?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["BatchPublicProfilesResponse"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.heatmap": {
		parameters: {
			query?: {
				days?: number;
			};
			header?: never;
			path: {
				user_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProfileActivityHeatmap"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.gameplay": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProfileGameplaySummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.ownership": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["ProfileOwnershipSummary"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"user.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				user_ref: string;
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["PublicProfile"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"whitelist.bindings.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistBindingWriteRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"binding.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				binding_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, nothing follows */
			204: {
				headers: {
					[name: string]: unknown;
				};
				content?: never;
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"binding.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				binding_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistBindingWriteRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"binding.test": {
		parameters: {
			query?: {
				audience?: string;
			};
			header?: never;
			path: {
				binding_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistBindingTestResult"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"binding.entries.list": {
		parameters: {
			query?: {
				page?: number;
				per_page?: number;
			};
			header?: never;
			path: {
				binding_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistDirectEntryPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"binding.entries.add": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				binding_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistDirectAddRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistDirectEntry"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"binding.entries.remove": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				binding_id: components["schemas"]["Snowflake"];
				entry_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistDirectRemoval"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"whitelist.forms.list": {
		parameters: {
			query?: {
				project_id?: components["schemas"]["Snowflake"] | null;
				search?: string | null;
				page?: number;
				per_page?: number;
			};
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistFormDetailPage"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"whitelist.forms.create": {
		parameters: {
			query?: never;
			header?: never;
			path?: never;
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistFormCreateRequest"];
			};
		};
		responses: {
			/** @description Document created, URL follows */
			201: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistFormDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"form.get": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				form_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistFormDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"form.delete": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				form_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody?: never;
		responses: {
			/** @description Request fulfilled, nothing follows */
			204: {
				headers: {
					[name: string]: unknown;
				};
				content?: never;
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"form.update": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				form_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistFormUpdateRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistFormDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
	"form.set_import_mapping": {
		parameters: {
			query?: never;
			header?: never;
			path: {
				form_id: components["schemas"]["Snowflake"];
			};
			cookie?: never;
		};
		requestBody: {
			content: {
				"application/json": components["schemas"]["WhitelistFormImportMappingRequest"];
			};
		};
		responses: {
			/** @description Request fulfilled, document follows */
			200: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": components["schemas"]["WhitelistFormDetail"];
				};
			};
			/** @description Bad request syntax or unsupported method */
			400: {
				headers: {
					[name: string]: unknown;
				};
				content: {
					"application/json": {
						detail: string;
						extra?:
							| null
							| {
									[key: string]: unknown;
							  }
							| unknown[];
						status_code: number;
					};
				};
			};
		};
	};
}
