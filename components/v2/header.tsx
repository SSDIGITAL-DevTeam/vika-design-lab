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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "bg-paper/92 shadow-[0_1px_0_rgba(201,169,110,0.15)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* Logo — putih saat transparan, hitam saat scrolled */}
        <Link href={home} aria-label="Vika Design Lab — home" className="shrink-0">
          <img
            src={scrolled || open ? "/assets/logo/logo-vika-black.png" : "/assets/logo/logo-vika-putih.png"}
            alt="Vika Design Lab"
            className="h-8 w-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_KEYS.map((key) => {
            const href = pagePath(design, lang, key);
            const active = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`group relative font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? "text-ink/70 hover:text-ink" : "text-white/80 hover:text-white"
                }`}
              >
                {content.nav[key]}
                {active && (
                  <span className="absolute -bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-yellow" />
                )}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-yellow/60 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <DesignSwitcher design={design} className="hidden items-center sm:flex" light={!scrolled && !open} />
          <span className={`hidden h-4 w-px sm:block ${scrolled ? "bg-line" : "bg-white/30"}`} />
          <LanguageSwitcher lang={lang} className="hidden items-center sm:flex" light={!scrolled && !open} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className={`ml-1 inline-flex h-11 w-11 items-center justify-center transition-colors duration-300 lg:hidden ${
              scrolled || open ? "text-ink" : "text-white"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-30 bg-paper transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: "80px" }}
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
                  className={`block border-b border-line py-5 font-mono text-sm uppercase tracking-[0.15em] transition-colors duration-200 ${
                    active ? "text-yellow" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {content.nav[key]}
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <DesignSwitcher design={design} className="flex items-center" />
            <LanguageSwitcher lang={lang} className="flex items-center" />
          </div>
        </div>
      </div>
    </header>
  );
}
