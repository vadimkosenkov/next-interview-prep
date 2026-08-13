"use client";

import Link from "next/link";
import { useAppSelector } from "@/store/hooks";
import { Topic } from "@/types/question";
import { useTranslations } from "@/hooks/useTranslations";

interface TopicsListProps {
  blockId: string;
  topics: Record<string, Topic>;
}

export default function TopicsList({ blockId, topics }: TopicsListProps) {
  const topicsProgress = useAppSelector((state) => state.progress.topics);
  const translations = useTranslations();

  return (
    <div className="flex flex-col gap-3">
      {Object.entries(topics).map(([topicId, topic]) => {
        const key = `${blockId}_${topicId}`;
        const prog = topicsProgress[key];
        const answered = prog?.answered ?? 0;
        const correct = prog?.correct ?? 0;
        const total = topic.questions.length;
        const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;
        const barColor =
          pct >= 80
          ? "bg-emerald-500"
          : pct >= 50
            ? "bg-yellow-400"
            : "bg-violet-500";

        return (
          <Link
            key={topicId}
            href={`/${blockId}/${topicId}/quiz`}
            className="flex items-center gap-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-5 py-4 hover:border-violet-500 transition-colors"
          >
            <span className="text-2xl w-8 text-center">{topic.icon}</span>

            <div className="flex-1">
              <h4 className="font-semibold mb-2">{topic.en.title}</h4>
              <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-1">
                <div
                  className={`h-full ${barColor} rounded-full transition-all`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-zinc-400">
                {answered > 0 ? `${pct}% · ${correct}/${answered} ${translations.blocks.correctSuffix}` : translations.blocks.notStarted}
              </p>
            </div>

            <span className="text-xs text-zinc-400 shrink-0">
              {total} {translations.blocks.questions}
            </span>
          </Link>
        );
      })}

      <Link
        href={`/${blockId}/quiz`}
        className="mt-4 w-full py-3 text-center font-bold text-white bg-violet-600 hover:bg-violet-700 rounded-2xl transition-colors"
      >
        {translations.blocks.startAll}
      </Link>
    </div>
  );
}
