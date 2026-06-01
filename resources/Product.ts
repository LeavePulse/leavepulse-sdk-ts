// Generated from the LeavePulse contract. Do not edit.
import { Resource } from "../runtime/resource";
import type { ClientContext } from "../client";

type Data = { id: string | number } & Record<string, unknown>;

export class Product extends Resource<Data> {
	constructor(data: Data, ctx: ClientContext) {
		super(data);
		void ctx;
	}
}
