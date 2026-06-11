// LeavePulse SDK — pagination.
//
// `list`-style operations (x-sdk-paginated) return a Page<T> that is both a
// snapshot of one page and an async iterator over all pages. Callers can do
// `for await (const item of client.project.list()) { ... }` without juggling
// page/limit by hand.

export interface PageData<T> {
	items: T[];
	page: number;
	per_page: number;
	total: number;
}

export type PageFetcher<T> = (
	page: number,
	perPage: number,
) => Promise<PageData<T>>;

/** Coerce an arbitrary list-envelope body into `PageData<T>`, hydrating items
 * via the supplied callback and reading the canonical `{total,page,per_page}`
 * fields (falling back sensibly when a field is absent). Generated list methods
 * build the per-endpoint `hydrate` closure; the field plumbing lives here so it
 * stays identical across every paginated method. */
export function pageDataFrom<T>(
	body: unknown,
	hydrate: (items: unknown[]) => T[],
	requestedPage: number,
	requestedPerPage: number,
): PageData<T> {
	const obj = (body ?? {}) as Record<string, unknown>;
	const rawItems = Array.isArray(obj.items) ? (obj.items as unknown[]) : [];
	const items = hydrate(rawItems);
	const num = (v: unknown, fallback: number): number => {
		const n = Number(v);
		return Number.isFinite(n) ? n : fallback;
	};
	return {
		items,
		total: num(obj.total, items.length),
		page: num(obj.page, requestedPage),
		per_page: num(obj.per_page, requestedPerPage),
	};
}

export class Page<T> implements AsyncIterable<T> {
	readonly items: T[];
	readonly page: number;
	readonly perPage: number;
	readonly total: number;

	constructor(
		data: PageData<T>,
		private readonly fetcher: PageFetcher<T>,
	) {
		this.items = data.items;
		this.page = data.page;
		this.perPage = data.per_page;
		this.total = data.total;
	}

	get hasNext(): boolean {
		return this.page * this.perPage < this.total;
	}

	async next(): Promise<Page<T> | null> {
		if (!this.hasNext) return null;
		const data = await this.fetcher(this.page + 1, this.perPage);
		return new Page(data, this.fetcher);
	}

	/** Iterate every item across all pages, fetching lazily. */
	async *[Symbol.asyncIterator](): AsyncIterator<T> {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		let current: Page<T> | null = this;
		while (current) {
			for (const item of current.items) yield item;
			current = await current.next();
		}
	}
}
