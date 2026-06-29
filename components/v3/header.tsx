"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_KEYS, pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { LanguageSwitcher, DesignSwitcher } from "@/components/shared/switchers";
import type { ViewProps } from "@/components/types";

export function Header({ content, design, lang }: ViewProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const home = pagePath(design, lang, "home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "bg-paper/96 border-b border-line backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        {/* Logo — always white because bg is always dark */}
        <Link href={home} aria-label="Vika Design Lab — home" className="shrink-0">
          <img
            src="/assets/logo/logo-vika-putih.png"
            alt="Vika Design Lab"
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav — always light text (dark bg always) */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
          {NAV_KEYS.map((key) => {
            const href = pagePath(design, lang, key);
            const active = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-opacity duration-200 ${
                  active ? "text-white opacity-100" : "text-white/50 hover:text-white hover:opacity-100"
                }`}
              >
                {content.nav[key]}
                {active && (
                  <span className="mt-1 block h-px w-full bg-yellow" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right controls — always light */}
        <div className="flex items-center gap-1">
          <DesignSwitcher design={design} className="hidden items-center sm:flex" light />
          <span className="hidden h-3 w-px bg-white/20 sm:block mx-1" />
          <LanguageSwitcher lang={lang} className="hidden items-center sm:flex" light />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="ml-2 inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu — dark bg */}
      <div
        className={`fixed inset-0 z-30 bg-paper transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: "64px" }}
        aria-hidden={!open}
      >
        <div className="container-page flex flex-col py-8">
          <nav aria-label="Mobile">
            {NAV_KEYS.map((key) => {
              const href = pagePath(design, lang, key);
              const active = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className={`block border-b border-line py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 ${
                    active ? "text-yellow" : "text-ink/50 hover:text-ink"
                  }`}
                >
                  {content.nav[key]}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <DesignSwitcher
              design={design}
              className="flex items-center"
              light
              onNavigate={() => setOpen(false)}
            />
            <LanguageSwitcher
              lang={lang}
              className="flex items-center"
              light
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
