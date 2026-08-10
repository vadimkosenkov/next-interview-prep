import { QuestionBlock, Topic } from "@/types/question";

// Same Object.prototype collision risk as getBlockData, but for topics
// nested inside a block. See getBlockData.ts for details.
export function getTopicData(block: QuestionBlock, topicId: string): Topic | undefined {
  return Object.hasOwn(block.topics, topicId) ? block.topics[topicId] : undefined;
}