// Design-variant + locale registry. Single source of truth for which
// variants/locales exist, used by routing, generateStaticParams, and switchers.

export const DESIGNS = ["v1", "v2", "v3"] as const;
export type Design = (typeof DESIGNS)[number];

export const SUPPORTED_LOCALES = ["en", "zh"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_DESIGN: Design = "v1";
export const DEFAULT_LOCALE: Locale = "en";

const isSupportedLocale = (value: string): value is Locale =>
  (SUPPORTED_LOCALES as readonly string[]).includes(value);

const activeLocalesFromEnv = (): readonly Locale[] => {
  const raw = process.env.NEXT_PUBLIC_ACTIVE_LOCALES;
  if (!raw) return [DEFAULT_LOCALE];

  const locales = raw
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(isSupportedLocale);

  return locales.length > 0 ? Array.from(new Set(locales)) : [DEFAULT_LOCALE];
};

// Active locales are the routes/switcher options currently exposed in the app.
// Set NEXT_PUBLIC_ACTIVE_LOCALES=en,zh to enable both languages.
export const LOCALES: readonly Locale[] = activeLocalesFromEnv();

export const DESIGN_LABELS: Record<Design, string> = {
  v1: "Swiss Editorial",
  v2: "Warm Editorial",
  v3: "Noir Luxe",
};

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const hasDesign = (value: string): value is Design =>
  (DESIGNS as readonly string[]).includes(value);

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** Every design × locale combination, for static generation. */
export const allDesignLocaleParams = (): { design: Design; lang: Locale }[] =>
  DESIGNS.flatMap((design) => LOCALES.map((lang) => ({ design, lang })));
