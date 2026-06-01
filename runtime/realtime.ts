// LeavePulse SDK — realtime layer.
//
// A single WebSocket multiplexes every topic subscription. The transport is
// pluggable: the browser passes a WebSocket factory + token provider, external
// consumers pass a `ws`-package factory + bearer token. The SDK never knows how
// the socket is created — it only speaks the gateway's JSON protocol:
//   client → server: {op: "subscribe"|"unsubscribe"|"auth"|"ping", topic?, token?}
//   server → client: {type: "welcome"|"subscribed"|"event"|"error"|"ping"|...}
// On subscribe the gateway sends a bootstrap snapshot first (the SDK surfaces
// it as the `initial` event), then deltas as `update`.

export type RealtimeEvent = "initial" | "update" | "error";

export interface RealtimeMessage<T = unknown> {
	topic: string;
	data: T;
}

export type RealtimeHandler<T = unknown> = (msg: RealtimeMessage<T>) => void;

/** Minimal WebSocket shape both the browser and the `ws` package satisfy. */
export interface WebSocketLike {
	send(data: string): void;
	close(): void;
	addEventListener(type: "open" | "close" | "error", cb: () => void): void;
	addEventListener(type: "message", cb: (ev: { data: unknown }) => void): void;
}

export interface RealtimeTransportOptions {
	/** Build a socket for the given URL (browser `WebSocket`, or `ws`). */
	socketFactory: (url: string) => WebSocketLike;
	/** Base WS URL, e.g. `wss://realtime.leavepulse.com`. */
	url: string;
	/** Optional async token provider for authenticating private topics. */
	getToken?: () => Promise<string | null> | string | null;
}

interface Subscription {
	topic: string;
	handlers: { event: RealtimeEvent; fn: RealtimeHandler }[];
	/** Whether the bootstrap snapshot has already been delivered. */
	bootstrapped: boolean;
}

/**
 * Owns the single multiplexed socket and dispatches incoming events to the
 * per-topic subscriptions. Resource classes call `subscribe(topic, ...)`; they
 * never touch the socket directly.
 */
export class RealtimeTransport {
	private socket: WebSocketLike | null = null;
	private connecting: Promise<void> | null = null;
	private authenticated = false;
	private readonly subscriptions = new Map<string, Subscription>();

	constructor(private readonly opts: RealtimeTransportOptions) {}

	/** Subscribe to a topic; returns an unsubscribe function. */
	async subscribe(
		topic: string,
		event: RealtimeEvent,
		handler: RealtimeHandler,
	): Promise<() => void> {
		await this.ensureConnected();
		let sub = this.subscriptions.get(topic);
		if (!sub) {
			sub = { topic, handlers: [], bootstrapped: false };
			this.subscriptions.set(topic, sub);
			this.send({ op: "subscribe", topic });
		}
		sub.handlers.push({ event, fn: handler });

		return () => this.removeHandler(topic, handler);
	}

	private removeHandler(topic: string, handler: RealtimeHandler): void {
		const sub = this.subscriptions.get(topic);
		if (!sub) return;
		sub.handlers = sub.handlers.filter((h) => h.fn !== handler);
		if (sub.handlers.length === 0) {
			this.subscriptions.delete(topic);
			this.send({ op: "unsubscribe", topic });
		}
	}

	/** Whether the socket has completed the realtime auth handshake. */
	get isAuthenticated(): boolean {
		return this.authenticated;
	}

	/** Close the socket and drop all subscriptions. */
	close(): void {
		this.subscriptions.clear();
		this.socket?.close();
		this.socket = null;
		this.connecting = null;
		this.authenticated = false;
	}

	private async ensureConnected(): Promise<void> {
		if (this.socket) return;
		if (this.connecting) return this.connecting;
		this.connecting = this.connect();
		return this.connecting;
	}

	private async connect(): Promise<void> {
		const token = this.opts.getToken ? await this.opts.getToken() : null;
		const url = token
			? `${this.opts.url}?token=${encodeURIComponent(token)}`
			: this.opts.url;
		const socket = this.opts.socketFactory(url);
		this.socket = socket;

		await new Promise<void>((resolve, reject) => {
			socket.addEventListener("open", () => resolve());
			socket.addEventListener("error", () =>
				reject(new Error("realtime socket error")),
			);
		});
		socket.addEventListener("message", (ev) => this.onMessage(ev.data));
		socket.addEventListener("close", () => {
			this.socket = null;
			this.connecting = null;
			this.authenticated = false;
		});
	}

	private onMessage(raw: unknown): void {
		let frame: Record<string, unknown>;
		try {
			frame = JSON.parse(String(raw));
		} catch {
			return;
		}
		const type = frame.type;
		if (type === "ping") {
			this.send({ op: "pong" });
			return;
		}
		if (type === "welcome" || type === "authenticated") {
			this.authenticated =
				Boolean(frame.authenticated) || type === "authenticated";
			return;
		}
		if (type === "event") {
			this.dispatchEvent(String(frame.topic ?? ""), frame.data);
			return;
		}
		if (type === "error") {
			this.dispatchError(frame.topic, frame.error);
		}
	}

	private dispatchEvent(topic: string, data: unknown): void {
		const sub = this.subscriptions.get(topic);
		if (!sub) return;
		// First event on a topic is the bootstrap snapshot → `initial`.
		const event: RealtimeEvent = sub.bootstrapped ? "update" : "initial";
		sub.bootstrapped = true;
		for (const h of sub.handlers) {
			if (h.event === event) h.fn({ topic, data });
		}
	}

	private dispatchError(topic: unknown, error: unknown): void {
		if (typeof topic !== "string") return;
		const sub = this.subscriptions.get(topic);
		if (!sub) return;
		for (const h of sub.handlers) {
			if (h.event === "error") h.fn({ topic, data: error });
		}
	}

	private send(payload: Record<string, unknown>): void {
		this.socket?.send(JSON.stringify(payload));
	}
}

/**
 * A handle returned by `resource.subscribe()`. Register handlers with `.on(...)`
 * and tear down with `.close()`.
 */
export class TopicSubscription {
	private readonly disposers: Array<() => void> = [];

	constructor(
		private readonly transport: RealtimeTransport,
		private readonly topic: string,
	) {}

	/** Register a handler for an event kind on this topic. */
	on<T = unknown>(event: RealtimeEvent, handler: RealtimeHandler<T>): this {
		void this.transport
			.subscribe(this.topic, event, handler as RealtimeHandler)
			.then((dispose) => this.disposers.push(dispose));
		return this;
	}

	/** Stop all handlers attached through this handle. */
	close(): void {
		for (const dispose of this.disposers) dispose();
		this.disposers.length = 0;
	}
}
