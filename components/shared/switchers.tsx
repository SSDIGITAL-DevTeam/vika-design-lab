"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DESIGNS,
  DEFAULT_DESIGN,
  LOCALES,
  LOCALE_LABELS,
  DESIGN_LABELS,
  type Design,
  type Locale,
} from "@/lib/designs";

/**
 * The default design (v1) is served without its segment in the URL (see the
 * rewrites in next.config.ts), so a path's first segment is only a design id
 * when it explicitly matches one — otherwise everything is [lang, ...page].
 */
function parsePath(pathname: string): { design: string | null; rest: string[] } {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && (DESIGNS as readonly string[]).includes(parts[0])) {
    return { design: parts[0], rest: parts.slice(1) };
  }
  return { design: null, rest: parts };
}

function buildPath(design: string | null, rest: string[]): string {
  const segments = design && design !== DEFAULT_DESIGN ? [design, ...rest] : rest;
  return "/" + segments.join("/");
}

/** Swap the locale (rest[0]) while keeping the current design prefix and page. */
function swapLocale(pathname: string, loc: string): string {
  const { design, rest } = parsePath(pathname);
  return buildPath(design, [loc, ...rest.slice(1)]);
}

/** Swap the design while keeping the current locale and page. */
function swapDesign(pathname: string, design: string): string {
  const { rest } = parsePath(pathname);
  return buildPath(design, rest);
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

export function DesignSwitcher({
  design,
  className,
  light,
  onNavigate,
}: {
  design: Design;
  className?: string;
  light?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  return (
    <div className={className} role="group" aria-label="Design version">
      {DESIGNS.map((d) => {
        const active = d === design;
        return (
          <Link
            key={d}
            href={swapDesign(pathname, d)}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
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
