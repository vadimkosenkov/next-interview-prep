// ← /[block]/[topic]/quiz

import { notFound } from "next/navigation";
import { getBlockData } from "@/lib/getBlockData";
import { getTopicData } from "@/lib/getTopicData";
import QuizClient from "@/components/quiz/QuizClient";

interface TopicQuizPageProps {
  params: Promise<{ block: string; topic: string }>;
}

export default async function TopicQuizPage({ params }: TopicQuizPageProps) {
  const { block, topic } = await params;
  const blockData = getBlockData(block);
  const topicData = blockData ? getTopicData(blockData, topic) : undefined;

  if (!blockData || !topicData) notFound();

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      <QuizClient
        blockId={block}
        topicId={topic}
        questions={topicData.questions}
      />
    </main>
  );
}
