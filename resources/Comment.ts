// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { Resource } from "../runtime/resource";
import type { components } from "../types";

type Data = { id: string | number } & Record<string, unknown> & {
		project_id?: string | number;
	};

export class Comment extends Resource<Data> {
	constructor(
		data: Data,
		private readonly ctx: ClientContext,
	) {
		super(data);
	}

	/** Whether the current user may delete (RFC §4). */
	get canDelete(): boolean {
		return this.hasCapability("delete", "comment.delete");
	}

	/** Whether the current user may like (RFC §4). */
	get canLike(): boolean {
		return this.hasCapability("like", "comment.like");
	}

	/** comment.delete */
	async delete(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "DELETE",
			path: `/v1/community/projects/${this.data["project_id"]}/comments/${this.id}`,
		});
		this.ctx.hydrate("Comment", data);
		return this;
	}

	/** comment.like */
	async like(): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${this.data["project_id"]}/comments/${this.id}/like`,
		});
		this.ctx.hydrate("Comment", data);
		return this;
	}

	/** comment.reply */
	async reply(
		body: components["schemas"]["CommentCreateRequest"],
		params?: { targetLocale?: string },
	): Promise<this> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${this.data["project_id"]}/comments/${this.id}/replies`,
			body,
			query: { target_locale: params?.targetLocale },
		});
		this.ctx.hydrate("Comment", data);
		return this;
	}
}
