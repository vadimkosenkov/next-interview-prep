import { QUESTIONS_DB } from "@/data";
import { hasOwnKey } from "@/lib/hasOwnKey";

// blockId comes straight from the route (e.g. /constructor/quiz), so a
// plain QUESTIONS_DB[blockId] lookup would resolve inherited
// Object.prototype properties (blockId="constructor", "toString", ...) to
// a truthy value instead of undefined, silently bypassing the caller's
// notFound() check. hasOwnKey only accepts QUESTIONS_DB's own keys.
export function getBlockData(blockId: string) {
  return hasOwnKey(QUESTIONS_DB, blockId) ? QUESTIONS_DB[blockId] : undefined;
}
