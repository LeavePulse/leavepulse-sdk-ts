// Generated from the LeavePulse contract. Do not edit.

import type { ClientContext } from "../client";
import { Resource } from "../runtime/resource";

type Data = { id: string | number } & Record<string, unknown>;

export class Product extends Resource<Data> {
	constructor(data: Data, ctx: ClientContext) {
		super(data);
		void ctx;
	}
}
