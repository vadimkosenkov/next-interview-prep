import { QUESTIONS_DB } from "@/data";

export function findTopicIdByQuestionId(questionId: string, blockId: string): string | null {
  const block = QUESTIONS_DB[blockId];
  if (!block) return null;

  for (const [topicId, topic] of Object.entries(block.topics)) {
    if (topic.questions.find((q) => q.id === questionId)) {
      return topicId;
    }
  }
  return null;
}