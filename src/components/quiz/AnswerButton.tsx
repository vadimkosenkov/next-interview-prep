interface AnswerButtonProps {
  label: string;
  text: string;
  onClick: () => void;
  state: "default" | "correct" | "wrong" | "disabled";
}

export default function AnswerButton({ label, text, onClick, state }: AnswerButtonProps) {
  const baseClass = "w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-colors text-sm font-medium";

  const stateClass = {
    default: "border-zinc-200 dark:border-zinc-700 hover:border-violet-500 cursor-pointer",
    correct: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 cursor-default",
    wrong: "border-red-400 bg-red-50 dark:bg-red-950 cursor-default",
    disabled: "border-zinc-200 dark:border-zinc-700 opacity-50 cursor-default",
  }[state];

  const labelClass = {
    default: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300",
    correct: "bg-emerald-500 text-white",
    wrong: "bg-red-400 text-white",
    disabled: "bg-zinc-100 dark:bg-zinc-800 text-zinc-400",
  }[state];

  return (
    <button
      className={`${baseClass} ${stateClass}`}
      onClick={onClick}
      disabled={state !== "default"}
    >
      <span className={`${labelClass} w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0`}>
        {label}
      </span>
      {text}
    </button>
  );
}