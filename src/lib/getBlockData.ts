import { QUESTIONS_DB } from "@/data";

// Plain-object index access (QUESTIONS_DB[blockId]) resolves inherited
// Object.prototype properties (e.g. blockId="constructor") to a truthy
// value instead of undefined, bypassing not-found checks. Object.hasOwn
// guards against that.
export function getBlockData(blockId: string) {
  return Object.hasOwn(QUESTIONS_DB, blockId) ? QUESTIONS_DB[blockId] : undefined;
}
