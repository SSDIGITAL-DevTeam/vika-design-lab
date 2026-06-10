import "server-only";
import type { Locale } from "@/lib/designs";
import type { SiteContent } from "./types";
import { en } from "./en";
import { zh } from "./zh";

const dictionaries: Record<Locale, SiteContent> = { en, zh };

export const getContent = (lang: Locale): SiteContent => dictionaries[lang];

export type { SiteContent } from "./types";
