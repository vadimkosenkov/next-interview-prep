import { QUESTIONS_DB } from "@/data";
import { hasOwnKey } from "@/lib/hasOwnKey";

// Plain-object index access (QUESTIONS_DB[blockId]) resolves inherited
// Object.prototype properties (e.g. blockId="constructor") to a truthy
// value instead of undefined, bypassing not-found checks. hasOwnKey
// guards against that with Object.prototype.hasOwnProperty.call.
export function getBlockData(blockId: string) {
  return hasOwnKey(QUESTIONS_DB, blockId) ? QUESTIONS_DB[blockId] : undefined;
}
