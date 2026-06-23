"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DESIGNS,
  LOCALES,
  LOCALE_LABELS,
  DESIGN_LABELS,
  type Design,
  type Locale,
} from "@/lib/designs";

/** Replace the design (segment 0) or locale (segment 1) and keep the rest. */
function swapSegment(pathname: string, index: number, value: string): string {
  const parts = pathname.split("/").filter(Boolean);
  parts[index] = value;
  return "/" + parts.join("/");
}

export function LanguageSwitcher({
  lang,
  className,
  light,
}: {
  lang: Locale;
  className?: string;
  light?: boolean;
}) {
  const pathname = usePathname();
  return (
    <div className={className} role="group" aria-label="Language">
      {LOCALES.map((loc) => {
        const active = loc === lang;
        return (
          <Link
            key={loc}
            href={swapSegment(pathname, 1, loc)}
            hrefLang={loc}
            aria-current={active ? "true" : undefined}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-sm transition-colors duration-300 ${
              light
                ? active ? "font-semibold text-white" : "text-white/60 hover:text-white"
                : active ? "font-semibold text-ink"  : "text-muted hover:text-ink"
            }`}
          >
            {LOCALE_LABELS[loc]}
          </Link>
        );
      })}
    </div>
  );
}

export function DesignSwitcher({
  design,
  className,
  light,
}: {
  design: Design;
  className?: string;
  light?: boolean;
}) {
  const pathname = usePathname();
  return (
    <div className={className} role="group" aria-label="Design version">
      {DESIGNS.map((d) => {
        const active = d === design;
        return (
          <Link
            key={d}
            href={swapSegment(pathname, 0, d)}
            aria-current={active ? "true" : undefined}
            title={DESIGN_LABELS[d]}
            className={`inline-flex min-h-[36px] items-center justify-center px-3 text-xs uppercase tracking-wider transition-colors duration-300 ${
              light
                ? active ? "bg-white/90 text-black"    : "text-white/60 hover:text-white"
                : active ? "bg-ink text-paper"         : "text-muted hover:text-ink"
            }`}
          >
            {d}
          </Link>
        );
      })}
    </div>
  );
}
