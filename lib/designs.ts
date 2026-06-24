// Design-variant + locale registry. Single source of truth for which
// variants/locales exist, used by routing, generateStaticParams, and switchers.

export const DESIGNS = ["v1", "v2", "v3"] as const;
export type Design = (typeof DESIGNS)[number];

export const LOCALES = ["en", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_DESIGN: Design = "v1";
export const DEFAULT_LOCALE: Locale = "en";

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
