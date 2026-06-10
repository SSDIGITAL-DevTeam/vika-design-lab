// Locale-independent site data: contact details, navigation model, and helpers.
import type { Design, Locale } from "./designs";

export const CONTACT = {
  phone: "+65 8886 6998",
  phoneHref: "tel:+6588866998",
  whatsapp: "6588866998",
  email: "admin@vikadesignlab.com",
  emailHref: "mailto:admin@vikadesignlab.com",
  address: "Blk 266 Serangoon Central Dr, #04-253, Singapore 550266",
  mapsQuery: "Blk 266 Serangoon Central Dr, #04-253, Singapore 550266",
} as const;

export const SOURCE_SITE = "https://www.vikadesignlab.com/";

export type NavKey = "home" | "about" | "services" | "portfolio" | "contact";

export const NAV_KEYS: NavKey[] = [
  "home",
  "about",
  "services",
  "portfolio",
  "contact",
];

/** Build an in-app path that preserves the active design + locale. */
export const pagePath = (
  design: Design,
  lang: Locale,
  page: NavKey
): string => {
  const base = `/${design}/${lang}`;
  return page === "home" ? base : `${base}/${page}`;
};

/** Pre-filled WhatsApp click-to-chat link. */
export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const mapsEmbedSrc = (): string =>
  `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.mapsQuery
  )}&output=embed`;
