// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { components } from "../types";
import type * as models from "../models";
import type { ClientContext } from "../client";
import type { Snowflake } from "../runtime/snowflake";

type Data = components["schemas"]["Comment"] & { project_id?: string | number };

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
	async delete(projectId: Snowflake): Promise<models.DeleteCommentResult> {
		return this.ctx.transport.request<models.DeleteCommentResult>({
			method: "DELETE",
			path: `/v1/community/projects/${projectId}/comments/${this.id}`,
		});
	}

	/** comment.like */
	async like(projectId: Snowflake): Promise<models.CommentLikeResult> {
		return this.ctx.transport.request<models.CommentLikeResult>({
			method: "POST",
			path: `/v1/community/projects/${projectId}/comments/${this.id}/like`,
		});
	}

	/** comment.reply */
	async reply(
		projectId: Snowflake,
		body: models.CommentCreateRequest,
		params?: { targetLocale?: string },
	): Promise<Comment> {
		const data = await this.ctx.transport.request({
			method: "POST",
			path: `/v1/community/projects/${projectId}/comments/${this.id}/replies`,
			body,
			query: { target_locale: params?.targetLocale },
		});
		return this.ctx.hydrate("Comment", data) as Comment;
	}
}
