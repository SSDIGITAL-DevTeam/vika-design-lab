"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_KEYS, pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { LanguageSwitcher, DesignSwitcher } from "@/components/shared/switchers";
import type { ViewProps } from "@/components/types";

export function Header({ content, design, lang }: ViewProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const home = pagePath(design, lang, "home");

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link
          href={home}
          className="font-display text-xl font-black tracking-tight text-ink"
        >
          Vika Design Lab
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_KEYS.map((key) => {
            const href = pagePath(design, lang, key);
            const active = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-bold transition-colors duration-200 ${
                  active
                    ? "text-ink underline decoration-yellow decoration-4 underline-offset-8"
                    : "text-muted hover:text-ink"
                }`}
              >
                {content.nav[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher
            lang={lang}
            className="hidden items-center rounded-full bg-paper-2 px-1 sm:flex"
          />
          <DesignSwitcher
            design={design}
            className="hidden items-center overflow-hidden rounded-full bg-paper-2 sm:flex"
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-paper md:hidden">
          <nav className="container-page flex flex-col gap-1 pb-4" aria-label="Mobile">
            {NAV_KEYS.map((key) => {
              const href = pagePath(design, lang, key);
              const active = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-lg font-bold ${
                    active ? "bg-yellow text-ink" : "text-ink-soft hover:bg-paper-2"
                  }`}
                >
                  {content.nav[key]}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center justify-between px-1">
              <LanguageSwitcher
                lang={lang}
                className="flex items-center rounded-full bg-paper-2 px-1"
              />
              <DesignSwitcher
                design={design}
                className="flex items-center overflow-hidden rounded-full bg-paper-2"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
