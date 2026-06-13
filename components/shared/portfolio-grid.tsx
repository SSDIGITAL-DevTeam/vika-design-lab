"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Icon } from "@/components/shared/icons";

const PROJECTS: { id: number; cat: number; image: string; tall?: boolean }[] = [
  { id: 1,  cat: 1, image: "/assets/portfolio/hdb/hdb1.jpg",       tall: true },
  { id: 2,  cat: 1, image: "/assets/portfolio/hdb/hdb2.jpg" },
  { id: 3,  cat: 1, image: "/assets/portfolio/hdb/hdb3.jpg" },
  { id: 4,  cat: 1, image: "/assets/portfolio/hdb/hdb4.jpg" },
  { id: 5,  cat: 2, image: "/assets/portfolio/condo/condo1.jpg" },
  { id: 6,  cat: 2, image: "/assets/portfolio/condo/condo2.jpg",   tall: true },
  { id: 7,  cat: 2, image: "/assets/portfolio/condo/condo3.jpg" },
  { id: 8,  cat: 2, image: "/assets/portfolio/condo/condo4.jpg" },
  { id: 9,  cat: 3, image: "/assets/portfolio/landed/landed1.jpg" },
  { id: 10, cat: 3, image: "/assets/portfolio/landed/landed2.jpg", tall: true },
  { id: 11, cat: 3, image: "/assets/portfolio/landed/landed3.jpg" },
  { id: 12, cat: 3, image: "/assets/portfolio/landed/landed4.jpg" },
];

type LightboxItem = { src: string; label: string };

export function PortfolioGrid({
  filters,
  captionPrefix,
}: {
  filters: string[];
  captionPrefix: string;
}) {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<LightboxItem | null>(null);
  // Keep last item in state so image stays visible during close fade-out
  const [lastItem, setLastItem] = useState<LightboxItem | null>(null);

  const visible =
    active === 0 ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  const open = useCallback((src: string, label: string) => {
    const item = { src, label };
    setLastItem(item);
    setSelected(item);
  }, []);

  const close = useCallback(() => setSelected(null), []);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Lock scroll while open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const isOpen = selected !== null;

  return (
    <>
      {/* ── Filter buttons ─────────────────────────────────────── */}
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        {filters.map((label, i) => {
          const isActive = active === i;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`animate-fade-up min-h-9.5 border px-3 text-xs font-medium tracking-wide transition-colors duration-200 sm:min-h-10 sm:px-4 sm:text-sm ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* ── Image grid ─────────────────────────────────────────────
          key={active}: remounts on filter change → items re-animate  */}
      <div
        key={active}
        className="grid grid-cols-2 gap-1.5 sm:gap-3 lg:grid-cols-3"
      >
        {visible.map((p, i) => {
          const label = `${captionPrefix} ${String(p.id).padStart(2, "0")} · ${filters[p.cat]}`;
          return (
            <figure
              key={p.id}
              style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }}
              className={`animate-fade-up group relative cursor-zoom-in overflow-hidden bg-paper-2 ${
                p.tall ? "row-span-2" : ""
              }`}
              onClick={() => open(p.image, label)}
            >
              <div
                className={`relative h-full min-h-37.5 overflow-hidden sm:min-h-52.5 ${
                  p.tall ? "min-h-80 sm:min-h-112.5" : ""
                }`}
              >
                <Image
                  src={p.image}
                  alt={label}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-black/70 via-black/30 to-transparent p-3 pt-8 text-paper sm:p-4 sm:pt-12">
                  <span className="text-[11px] font-medium sm:text-sm">
                    {captionPrefix} {String(p.id).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-75 sm:text-[10px]">
                    {filters[p.cat]}
                  </span>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>

      {/* ── Lightbox ───────────────────────────────────────────────
          Always in DOM — opacity/scale transitions handle enter/exit */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Project image"
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 transition-opacity duration-300 bg-ink/92 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      >
        {/* Label — top left */}
        <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-paper/50 sm:left-6 sm:top-6 sm:text-xs">
          {lastItem?.label}
        </p>

        {/* Close — bare icon, no background */}
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-3.5 text-paper/70 transition-colors duration-200 hover:text-paper sm:right-6 sm:top-5"
          onClick={(e) => { e.stopPropagation(); close(); }}
        >
          <Icon name="close" className="h-7 w-7" />
        </button>

        {/* Image — scale in on open, scale out on close */}
        <div
          className={`transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lastItem?.src ?? ""}
            alt={lastItem?.label ?? ""}
            className="block max-h-[88vh] max-w-[93vw] object-contain sm:max-w-[84vw]"
          />
        </div>
      </div>
    </>
  );
}
