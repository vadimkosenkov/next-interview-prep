// ← /[block]/quiz (all topics)

import { notFound } from "next/navigation";
import { getBlockData } from "@/lib/getBlockData";
import QuizClient from "@/components/quiz/QuizClient";

interface BlockQuizPageProps {
  params: Promise<{ block: string }>;
}

export default async function BlockQuizPage({ params }: BlockQuizPageProps) {
  const { block } = await params;
  const blockData = getBlockData(block);

  if (!blockData) notFound();

  const allQuestions = Object.values(blockData.topics).flatMap((topic) => topic.questions);

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      <QuizClient
        blockId={block}
        topicId={null}
        questions={allQuestions}
      />
    </main>
  );
}
