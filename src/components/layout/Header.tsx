"use client";

import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { setLanguage } from "@/store/slices/uiSlice";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/hooks/useLanguage";

export default function Header() {
  const dispatch = useAppDispatch();
  const language = useLanguage();
  const translations = useTranslations();

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="w-full max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-extrabold text-violet-600 flex items-center gap-2"
        >
          {translations.appTitle}
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 ml-2">
            {(["ru", "en"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => dispatch(setLanguage(lang))}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                  language === lang
                    ? "bg-violet-600 text-white"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}