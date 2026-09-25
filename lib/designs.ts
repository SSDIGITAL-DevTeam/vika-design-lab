// Locale registry. Single source of truth for which locales exist, used by
// routing, generateStaticParams, and the language switcher.

export const SUPPORTED_LOCALES = ["en", "zh", "ms"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

const isSupportedLocale = (value: string): value is Locale =>
  (SUPPORTED_LOCALES as readonly string[]).includes(value);

const activeLocalesFromEnv = (): readonly Locale[] => {
  const raw = process.env.NEXT_PUBLIC_ACTIVE_LOCALES;
  if (!raw) return SUPPORTED_LOCALES;

  const locales = raw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(isSupportedLocale);

  return locales.length > 0 ? Array.from(new Set(locales)) : SUPPORTED_LOCALES;
};

// Active locales are the routes/switcher options currently exposed in the app.
// Set NEXT_PUBLIC_ACTIVE_LOCALES=en,zh to enable both languages.
export const LOCALES: readonly Locale[] = activeLocalesFromEnv();

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ms: "BM",
};

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** Every active locale, for static generation. */
export const allLocaleParams = (): { lang: Locale }[] =>
  LOCALES.map((lang) => ({ lang }));
