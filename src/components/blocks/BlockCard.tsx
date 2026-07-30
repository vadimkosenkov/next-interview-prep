import Link from "next/link";

interface BlockCardProps {
  id: string;
  icon: string;
  title: string;
  desc: string;
  topicsCount: number;
  answeredCount: number;
  accuracyPct: number;
}

export default function BlockCard({ id, icon, title, desc, topicsCount, answeredCount, accuracyPct }: BlockCardProps) {
  return (
    <Link href={`/${id}`}>
      <div
        className="h-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 hover:border-violet-500 transition-colors cursor-pointer">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm text-zinc-500 mb-4">{desc}</p>

        <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-violet-500 rounded-full transition-all"
            style={{ width: `${accuracyPct}%` }}
          />
        </div>

        <p className="text-xs text-zinc-400">
          {answeredCount} answered · {topicsCount} {topicsCount === 1 ? "topic" : "topics"}
        </p>
      </div>
    </Link>
  );
}
