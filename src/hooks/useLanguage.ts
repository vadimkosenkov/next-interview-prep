import { useAppSelector } from "@/store/hooks";
import { useIsClient } from "@/hooks/useIsClient";
import { Lang } from "@/lib/i18n";

export function useLanguage(): Lang {
  const isClient = useIsClient();
  const persistedLanguage = useAppSelector((state) => state.ui.language);
  // ui.language is persisted via redux-persist, so the client's first render
  // (before rehydration) must match the server's default ("en", see
  // uiSlice's initialState) to avoid a hydration mismatch — same reasoning
  // as the progress guard in src/app/page.tsx.
  return isClient ? persistedLanguage : "en";
}
