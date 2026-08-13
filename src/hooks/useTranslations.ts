import { useLanguage } from "@/hooks/useLanguage";
import { i18n } from "@/lib/i18n";

export function useTranslations() {
  const language = useLanguage();
  return i18n[language];
}
