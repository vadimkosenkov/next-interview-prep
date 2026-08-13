"use client";

import { useAppSelector } from "@/store/hooks";
import { QUESTIONS_DB } from "@/data";
import BlockCard from "@/components/blocks/BlockCard";
import { useIsClient } from "@/hooks/useIsClient";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function HomePage() {
  const isClient = useIsClient();
  const persistedProgress = useAppSelector((state) => state.progress.topics);
  // redux-persist rehydrates from localStorage before the client's first
  // hydration render, so reading persistedProgress directly here would
  // mismatch the server-rendered zero state. Use the empty default until
  // the client is confirmed mounted, then swap in the real values.
  const topicsProgress = isClient ? persistedProgress : {};
  const translations = useTranslations();

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">{translations.home.title}</h1>
        <p className="text-zinc-500">{translations.home.subtitle}</p>
      </div>

      <Link
        href="/dashboard"
        className="flex items-center gap-2 mx-auto mb-10 px-6 py-2.5 border-2 border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-500 hover:border-violet-500 hover:text-violet-500 transition-colors w-fit"
      >
        {translations.home.viewStats}
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {Object.entries(QUESTIONS_DB).map(([id, block]) => {
          const topics = Object.keys(block.topics);

          // sum progress across all topics in the block
          const { answered, correct } = topics.reduce(
            (acc, topicId) => {
              const key = `${id}_${topicId}`;
              const prog = topicsProgress[key];
              return {
                answered: acc.answered + (prog?.answered ?? 0),
                correct: acc.correct + (prog?.correct ?? 0),
              };
            },
            { answered: 0, correct: 0 }
          );

          const accuracyPct = answered > 0 ? Math.round((correct / answered) * 100) : 0;

          return (
            <BlockCard
              key={id}
              id={id}
              icon={block.meta.icon}
              title={block.meta.en.title}
              desc={block.meta.en.desc}
              topicsCount={topics.length}
              answeredCount={answered}
              accuracyPct={accuracyPct}
            />
          );
        })}
      </div>
    </main>
  );
}
