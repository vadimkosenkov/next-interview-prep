"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "@/hooks/useTranslations";

export default function BackButton() {
  const router = useRouter();
  const translations = useTranslations();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:cursor-pointer transition-colors mb-8 text-sm"
    >
      {translations.common.back}
    </button>
  );
}
