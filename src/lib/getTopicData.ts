import { hasOwnKey } from "@/lib/hasOwnKey";
import { QuestionBlock, Topic } from "@/types/question";

// topicId is also an untrusted route segment: a plain block.topics[topicId]
// lookup would resolve prototype properties (topicId="toString", ...) to a
// truthy value instead of undefined, bypassing the caller's notFound()
// check the same way an unguarded QUESTIONS_DB[blockId] lookup would.
export function getTopicData(block: QuestionBlock, topicId: string): Topic | undefined {
  return hasOwnKey(block.topics, topicId) ? block.topics[topicId] : undefined;
}
