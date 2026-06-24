// LeavePulse SDK — bidirectional realtime client.
//
// THE single WS contract between a client and the system. One multiplexed
// socket carries every topic subscription AND bidirectional exchanges:
//   - fan-out:        server → client `event` frames for subscribed topics
//   - request/reply:  client → server `request`, server → client `reply`
//   - session input:  client → server `input` (for future console/exec)
// The wire-format is protobuf (ws.proto: ClientFrame / ServerFrame), so the
// contract evolves by field tags without rewrites and is shared by every client
// (browser, node) and the gateway. This client owns connect/auth/reconnect; Vue
// or other UI layers wrap it, they never touch the socket.

import { create, fromBinary, toBinary } from "@bufbuild/protobuf";
import {
	type ServerFrame,
	ClientFrameSchema,
	ServerFrameSchema,
} from "./realtime_pb/leavepulse/realtime/v1/ws_pb.js";

/** Binary WebSocket shape both the browser and the `ws` package satisfy. */
export interface BinaryWebSocketLike {
	send(data: Uint8Array): void;
	close(): void;
	binaryType: string;
	addEventListener(type: "open" | "close" | "error", cb: () => void): void;
	addEventListener(type: "message", cb: (ev: { data: unknown }) => void): void;
}

export type RealtimeEventKind = "initial" | "update" | "error";

export interface RealtimeEnvelope<T = unknown> {
	topic: string;
	data: T;
}

export type RealtimeHandler<T = unknown> = (env: RealtimeEnvelope<T>) => void;

export interface RealtimeClientOptions {
	/** Build a socket for the given URL (browser `WebSocket`, or `ws`). */
	socketFactory: (url: string) => BinaryWebSocketLike;
	/** Base WS URL, e.g. `wss://rt.leavepulse.com`. */
	url: string;
	/** Async provider for the realtime auth (ws-)token; re-invoked on reconnect. */
	getToken?: () => Promise<string | null> | string | null;
	/** Reconnect backoff bounds (ms). */
	reconnectMinMs?: number;
	reconnectMaxMs?: number;
}

interface Subscription {
	topic: string;
	handlers: { kind: RealtimeEventKind; fn: RealtimeHandler }[];
	bootstrapped: boolean;
}

interface PendingRequest {
	resolve: (payload: Uint8Array) => void;
	reject: (err: Error) => void;
}

const DEFAULT_MIN_MS = 500;
const DEFAULT_MAX_MS = 30_000;

/** Decode a JSON payload carried in an Event/Reply `data` byte field. */
function decodeJson(bytes: Uint8Array): unknown {
	if (bytes.length === 0) return null;
	try {
		return JSON.parse(new TextDecoder().decode(bytes));
	} catch {
		return null;
	}
}

function encodeJson(value: unknown): Uint8Array {
	return new TextEncoder().encode(JSON.stringify(value ?? null));
}

/**
 * Owns the single multiplexed protobuf WebSocket. Reconnects with backoff,
 * re-authenticates and re-subscribes on reconnect, and routes events / replies.
 */
export class RealtimeClient {
	private socket: BinaryWebSocketLike | null = null;
	private connecting: Promise<void> | null = null;
	private authenticated = false;
	private closedByUser = false;
	private reconnectAttempts = 0;
	private requestSeq = 0;
	private readonly subscriptions = new Map<string, Subscription>();
	private readonly pending = new Map<string, PendingRequest>();

	constructor(private readonly opts: RealtimeClientOptions) {}

	get isAuthenticated(): boolean {
		return this.authenticated;
	}

	/** Subscribe to a topic; returns an unsubscribe function. */
	async subscribe(
		topic: string,
		kind: RealtimeEventKind,
		handler: RealtimeHandler,
	): Promise<() => void> {
		await this.ensureConnected();
		let sub = this.subscriptions.get(topic);
		if (!sub) {
			sub = { topic, handlers: [], bootstrapped: false };
			this.subscriptions.set(topic, sub);
			this.sendSubscribe(topic);
		}
		sub.handlers.push({ kind, fn: handler });
		return () => this.removeHandler(topic, handler);
	}

	/** Send a request and await its single reply (the JSON-decoded payload). */
	async request<T = unknown>(method: string, payload?: unknown): Promise<T> {
		await this.ensureConnected();
		const id = `r${++this.requestSeq}`;
		const frame = create(ClientFrameSchema, {
			body: {
				case: "request",
				value: { id, method, payload: encodeJson(payload) },
			},
		});
		const result = new Promise<Uint8Array>((resolve, reject) => {
			this.pending.set(id, { resolve, reject });
		});
		this.sendFrame(frame);
		const bytes = await result;
		return decodeJson(bytes) as T;
	}

	/** Send a chunk of session input (e.g. console stdin) for a session. */
	async sendInput(sessionId: string, data: Uint8Array): Promise<void> {
		await this.ensureConnected();
		this.sendFrame(
			create(ClientFrameSchema, {
				body: { case: "input", value: { sessionId, data } },
			}),
		);
	}

	close(): void {
		this.closedByUser = true;
		this.subscriptions.clear();
		for (const p of this.pending.values())
			p.reject(new Error("realtime client closed"));
		this.pending.clear();
		this.socket?.close();
		this.socket = null;
		this.connecting = null;
		this.authenticated = false;
	}

	// ── internals ────────────────────────────────────────────────────────────

	private removeHandler(topic: string, handler: RealtimeHandler): void {
		const sub = this.subscriptions.get(topic);
		if (!sub) return;
		sub.handlers = sub.handlers.filter((h) => h.fn !== handler);
		if (sub.handlers.length === 0) {
			this.subscriptions.delete(topic);
			this.sendFrame(
				create(ClientFrameSchema, {
					body: { case: "unsubscribe", value: { topic } },
				}),
			);
		}
	}

	private sendSubscribe(topic: string): void {
		this.sendFrame(
			create(ClientFrameSchema, {
				body: { case: "subscribe", value: { topic } },
			}),
		);
	}

	private async ensureConnected(): Promise<void> {
		if (this.socket && this.authenticated) return;
		if (this.connecting) return this.connecting;
		this.connecting = this.connect();
		return this.connecting;
	}

	private async connect(): Promise<void> {
		this.closedByUser = false;
		const token = this.opts.getToken ? await this.opts.getToken() : null;
		const socket = this.opts.socketFactory(this.opts.url);
		socket.binaryType = "arraybuffer";
		this.socket = socket;

		await new Promise<void>((resolve, reject) => {
			socket.addEventListener("open", () => resolve());
			socket.addEventListener("error", () =>
				reject(new Error("realtime socket error")),
			);
		});
		socket.addEventListener("message", (ev) => this.onMessage(ev.data));
		socket.addEventListener("close", () => this.onClose());

		// Authenticate first so private subscriptions are accepted.
		if (token) {
			this.sendFrame(
				create(ClientFrameSchema, {
					body: { case: "auth", value: { token } },
				}),
			);
		}
		// Re-subscribe everything (covers reconnect).
		for (const topic of this.subscriptions.keys()) this.sendSubscribe(topic);
		this.reconnectAttempts = 0;
	}

	private onClose(): void {
		this.socket = null;
		this.connecting = null;
		this.authenticated = false;
		if (this.closedByUser) return;
		this.scheduleReconnect();
	}

	private scheduleReconnect(): void {
		const min = this.opts.reconnectMinMs ?? DEFAULT_MIN_MS;
		const max = this.opts.reconnectMaxMs ?? DEFAULT_MAX_MS;
		const delay = Math.min(max, min * 2 ** this.reconnectAttempts++);
		setTimeout(() => {
			if (this.closedByUser) return;
			void this.ensureConnected().catch(() => this.scheduleReconnect());
		}, delay);
	}

	private onMessage(raw: unknown): void {
		const bytes = this.toBytes(raw);
		if (!bytes) return;
		let frame: ServerFrame;
		try {
			frame = fromBinary(ServerFrameSchema, bytes);
		} catch {
			return;
		}
		switch (frame.body.case) {
			case "ping":
				this.sendFrame(
					create(ClientFrameSchema, { body: { case: "ping", value: {} } }),
				);
				return;
			case "welcome":
				this.authenticated = frame.body.value.authenticated;
				return;
			case "event": {
				const ev = frame.body.value;
				this.dispatchEvent(ev.topic, decodeJson(ev.data));
				return;
			}
			case "reply": {
				const reply = frame.body.value;
				const pending = this.pending.get(reply.id);
				if (!pending) return;
				this.pending.delete(reply.id);
				if (reply.error)
					pending.reject(
						new Error(
							reply.error.message || reply.error.code || "request failed",
						),
					);
				else pending.resolve(reply.payload);
				return;
			}
			case "error": {
				const err = frame.body.value;
				if (err.id && this.pending.has(err.id)) {
					const p = this.pending.get(err.id);
					this.pending.delete(err.id);
					p?.reject(new Error(err.message || err.code || "realtime error"));
					return;
				}
				if (err.topic) this.dispatchError(err.topic, err);
				return;
			}
			default:
				return;
		}
	}

	private toBytes(raw: unknown): Uint8Array | null {
		if (raw instanceof Uint8Array) return raw;
		if (raw instanceof ArrayBuffer) return new Uint8Array(raw);
		return null;
	}

	private dispatchEvent(topic: string, data: unknown): void {
		const sub = this.subscriptions.get(topic);
		if (!sub) return;
		const kind: RealtimeEventKind = sub.bootstrapped ? "update" : "initial";
		sub.bootstrapped = true;
		for (const h of sub.handlers) if (h.kind === kind) h.fn({ topic, data });
	}

	private dispatchError(topic: string, error: unknown): void {
		const sub = this.subscriptions.get(topic);
		if (!sub) return;
		for (const h of sub.handlers)
			if (h.kind === "error") h.fn({ topic, data: error });
	}

	private sendFrame(
		frame: ReturnType<typeof create<typeof ClientFrameSchema>>,
	): void {
		if (!this.socket) return;
		this.socket.send(toBinary(ClientFrameSchema, frame));
	}
}
