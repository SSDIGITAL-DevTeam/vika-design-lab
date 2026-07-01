"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_KEYS, pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { LanguageSwitcher } from "@/components/shared/switchers";
import type { ViewProps } from "@/components/types";

export function Header({ content, design, lang }: ViewProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const home = pagePath(design, lang, "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_16px_rgba(0,0,0,0.07)]" : ""
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href={home} aria-label="Vika Design Lab — home">
          <img
            src="/assets/logo/logo-vika-black.png"
            alt="Vika Design Lab"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_KEYS.map((key) => {
            const href = pagePath(design, lang, key);
            const active = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative font-mono uppercase transition-colors duration-200 ${
                  lang === "zh" ? "text-sm tracking-normal" : "text-xs tracking-[0.14em]"
                } ${active ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                {content.nav[key]}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-yellow" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher lang={lang} className="hidden items-center sm:flex" />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile nav — absolute so it overlays content without shifting layout */}
      <div
        className="absolute left-0 right-0 top-full overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-[max-height] duration-300 ease-in-out lg:hidden"
        style={{
          maxHeight: open ? "360px" : "0px",
        }}
        aria-hidden={!open}
      >
        <div className="border-t border-line bg-paper">
          <nav className="container-page flex flex-col py-2" aria-label="Mobile">
            {NAV_KEYS.map((key) => {
              const href = pagePath(design, lang, key);
              const active = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`border-b border-line py-3 font-mono text-sm uppercase tracking-[0.12em] ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  {content.nav[key]}
                </Link>
              );
            })}
            <div className="flex items-center justify-between py-3">
              <LanguageSwitcher
                lang={lang}
                className="flex items-center"
                onNavigate={() => setOpen(false)}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
