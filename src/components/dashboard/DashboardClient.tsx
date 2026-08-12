"use client";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { resetProgress } from "@/store/slices/progressSlice";
import { clearHistory } from "@/store/slices/historySlice";
import { QUESTIONS_DB } from "@/data";
import { useIsClient } from "@/hooks/useIsClient";

export default function DashboardClient() {
  const dispatch = useAppDispatch();
  const topicsProgress = useAppSelector((state) => state.progress.topics);
  const sessions = useAppSelector((state) => state.history.sessions);
  const isClient = useIsClient();

  if (!isClient) return null;

  // aggregated statistics
  const allProgress = Object.values(topicsProgress);
  const totalAnswered = allProgress.reduce((acc, p) => acc + p.answered, 0);
  const totalCorrect = allProgress.reduce((acc, p) => acc + p.correct, 0);
  const accuracy = totalAnswered > 0
    ? Math.round((totalCorrect / totalAnswered) * 100)
    : 0;

  const handleReset = () => {
    if (confirm("Reset all progress and history?")) {
      dispatch(resetProgress());
      dispatch(clearHistory());
    }
  };

  return (
    <div className="flex flex-col gap-8">

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total answered", value: totalAnswered },
          { label: "Correct", value: totalCorrect },
          { label: "Accuracy", value: `${accuracy}%` },
          { label: "Sessions", value: sessions.length },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-4"
          >
            <div className="text-2xl font-bold text-violet-500">{stat.value}</div>
            <div className="text-xs text-zinc-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Progress by topic */}
      <div>
        <h2 className="text-lg font-bold mb-4">Progress by topic</h2>
        <div className="flex flex-col gap-3">
          {Object.entries(QUESTIONS_DB).map(([blockId, block]) =>
            Object.entries(block.topics).map(([topicId, topic]) => {
              const key = `${blockId}_${topicId}`;
              const prog = topicsProgress[key];
              const answered = prog?.answered ?? 0;
              const correct = prog?.correct ?? 0;
              const pct = answered > 0
                ? Math.round((correct / answered) * 100)
                : 0;
              const barColor =
                pct >= 80 ? "bg-emerald-500" :
                pct >= 50 ? "bg-yellow-400" :
                "bg-violet-500";

              return (
                <div
                  key={key}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3"
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      {topic.icon} {block.meta.en.title} / {topic.en.title}
                    </span>
                    <span className="font-bold text-violet-500">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${barColor} rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Session history */}
      <div>
        <h2 className="text-lg font-bold mb-4">Session history</h2>
        {sessions.length === 0 ? (
          <p className="text-zinc-400 text-sm">
            No history yet. Complete a quiz first!
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {sessions.slice(0, 15).map((session, index) => {
              const cls =
                session.pct >= 80 ? "text-emerald-500" :
                session.pct >= 50 ? "text-yellow-400" :
                "text-red-400";
              const blockName =
                QUESTIONS_DB[session.blockId]?.meta.en.title ?? session.blockId;
              const topicName = session.topicId
                ? QUESTIONS_DB[session.blockId]?.topics[session.topicId]?.en.title ?? session.topicId
                : null;

              return (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm"
                >
                  <span className="text-zinc-500">
                    {session.date} · {blockName}
                    {topicName ? ` / ${topicName}` : ""}
                  </span>
                  <span className={`font-bold ${cls}`}>
                    {session.correct}/{session.total} ({session.pct}%)
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Reset */}
      <button
        onClick={handleReset}
        className="self-start text-sm text-red-400 border border-red-300 hover:bg-red-50 dark:hover:bg-red-950 px-4 py-2 rounded-xl transition-colors cursor-pointer"
      >
        🗑 Reset all progress
      </button>

    </div>
  );
}
