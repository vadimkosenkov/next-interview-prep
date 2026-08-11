"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/types/question";
import QuestionCard from "@/components/quiz/QuestionCard";
import BackButton from "@/components/common/BackButton";
import { useIsClient } from "@/hooks/useIsClient";

interface QuizClientProps {
  blockId: string;
  topicId: string | null;
  questions: Question[];
}

interface QuizResult {
  correct: number;
  total: number;
}

export default function QuizClient({ blockId, topicId, questions, }: QuizClientProps) {
  const router = useRouter();
  const [result, setResult] = useState<QuizResult | null>(null);
  const isMounted = useIsClient();

  if (!isMounted) return null;

  if (result) {
    const pct = Math.round((result.correct / result.total) * 100);
    const emoji = pct === 100 ? "🏆" : pct >= 80 ? "🎉" : pct >= 60 ? "📚" : "💡";
    const label =
      pct === 100
        ? "Perfect! You're a master!"
        : pct >= 80
          ? "Great result!"
          : pct >= 60
            ? "Room to grow"
            : "More practice needed";

    return (
      <div className="text-center">
        <div className="text-6xl mb-4">{emoji}</div>
        <div className="text-4xl font-bold text-violet-600 mb-2">
          {result.correct}/{result.total}
        </div>
        <p className="text-zinc-500 mb-2">{label}</p>
        <p className="text-2xl font-bold mb-8">{pct}%</p>

        <div className="flex gap-3">
          <button
            onClick={() => setResult(null)} // Resets the result, but QuestionCard and useQuiz are recreated from scratch because React unmounts and remounts the component when navigating back from the result screen. Questions get reshuffled again via useMemo.
            className="flex-1 py-3 font-bold border-2 border-zinc-200 dark:border-zinc-700 rounded-2xl hover:border-violet-500 transition-colors cursor-pointer"
          >
            🔄 Retry
          </button>
          <button
            onClick={() => router.push(`/${blockId}`)}
            className="flex-1 py-3 font-bold text-white bg-violet-600 hover:bg-violet-700 rounded-2xl transition-colors cursor-pointer"
          >
            🏠 Back to block
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <QuestionCard
        blockId={blockId}
        topicId={topicId}
        questions={questions}
        onFinish={setResult}
      />
    </div>
  );
}
