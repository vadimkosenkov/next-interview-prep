"use client";

import { useAppSelector } from "@/store/hooks";
import { QUESTIONS_DB } from "@/data";
import BlockCard from "@/components/blocks/BlockCard";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);
  const topicsProgress = useAppSelector((state) => state.progress.topics);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Interview Preparation</h1>
        <p className="text-zinc-500">Choose a block and start leveling up</p>
      </div>

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
