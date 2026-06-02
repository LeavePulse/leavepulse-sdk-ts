// A 64-bit Snowflake id, carried as a string in TypeScript: the value exceeds
// JS's safe-integer range (2^53), so a `number` would silently lose its low
// digits. Backends keep it an int64; only the JS representation is a string.
//
// Kept as a plain alias (not a branded type) so ids interoperate with ordinary
// string handling — template URLs, equality, Map keys — without ceremony.
export type Snowflake = string;
