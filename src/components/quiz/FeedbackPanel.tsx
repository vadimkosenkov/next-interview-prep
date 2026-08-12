"use client";

import { useTranslations } from "@/hooks/useTranslations";

interface FeedbackPanelProps {
  isCorrect: boolean;
  explanation: string;
  onReadTheory: () => void;
}

export default function FeedbackPanel({ isCorrect, explanation, onReadTheory, }: FeedbackPanelProps) {
  const translations = useTranslations();

  return (
    <div className={`rounded-xl p-4 border-l-4 ${
      isCorrect
        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
        : "border-red-400 bg-red-50 dark:bg-red-950"}`}
    >
      <p className="font-bold mb-1 text-sm">
        {isCorrect ? translations.quiz.correct : translations.quiz.wrong}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-3">
        {explanation}
      </p>
      <button
        onClick={onReadTheory}
        className="text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors"
      >
        {translations.quiz.readTheory}
      </button>
    </div>
  );
}
