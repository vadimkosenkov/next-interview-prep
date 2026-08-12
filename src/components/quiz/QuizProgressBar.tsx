"use client";

import { useTranslations } from "@/hooks/useTranslations";

interface QuizProgressBarProps {
  current: number;
  total: number;
}

export default function QuizProgressBar({ current, total }: QuizProgressBarProps) {
  const translations = useTranslations();
  const pct = Math.round((current / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-zinc-400 mb-1">
        <span>{translations.quiz.questionProgress(current, total)}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-violet-500 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
