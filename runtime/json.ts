import { isInteger, parse } from "lossless-json";

/**
 * Parse a JSON response body, keeping integers beyond `Number.MAX_SAFE_INTEGER`
 * as strings so 64-bit Snowflake ids survive intact (a plain `JSON.parse` would
 * round them through a lossy `number`). All other numbers stay regular numbers.
 *
 * The transport uses this instead of `response.json()` so every SDK consumer
 * gets precise ids without any per-call handling.
 */
export function parseJson(text: string): unknown {
	if (text.length === 0) return undefined;
	return parse(text, undefined, {
		parseNumber(value: string) {
			if (isInteger(value)) {
				const num = Number(value);
				if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
					return value;
				}
				return num;
			}
			return Number.parseFloat(value);
		},
	});
}
