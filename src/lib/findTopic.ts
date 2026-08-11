import { getBlockData } from "@/lib/getBlockData";

export function findTopicIdByQuestionId(questionId: string, blockId: string): string | null {
  const block = getBlockData(blockId);
  if (!block) return null;

  for (const [topicId, topic] of Object.entries(block.topics)) {
    if (topic.questions.find((q) => q.id === questionId)) {
      return topicId;
    }
  }
  return null;
}
