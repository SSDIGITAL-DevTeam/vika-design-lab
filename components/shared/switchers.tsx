"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/designs";

/** Swap the locale (the path's first segment) while keeping the rest of the page. */
function swapLocale(pathname: string, loc: string): string {
  const parts = pathname.split("/").filter(Boolean);
  return "/" + [loc, ...parts.slice(1)].join("/");
}

export function LanguageSwitcher({
  lang,
  className,
  light,
  onNavigate,
}: {
  lang: Locale;
  className?: string;
  light?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  if (LOCALES.length <= 1) return null;

  return (
    <div className={className} role="group" aria-label="Language">
      {LOCALES.map((loc) => {
        const active = loc === lang;
        return (
          <Link
            key={loc}
            href={swapLocale(pathname, loc)}
            hrefLang={loc}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
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
