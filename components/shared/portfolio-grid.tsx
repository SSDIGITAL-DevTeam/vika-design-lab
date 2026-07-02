"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Icon } from "@/components/shared/icons";
import {
  PORTFOLIO_ALBUMS,
  PORTFOLIO_CATEGORIES,
  type PortfolioAlbum,
} from "@/lib/portfolio";

export function PortfolioGrid({
  filters,
  captionPrefix,
  detailLabels,
}: {
  filters: string[];
  captionPrefix: string;
  detailLabels: {
    roomType: string;
    size: string;
    location: string;
    sqftUnit: string;
  };
}) {
  const [active, setActive] = useState(0);
  const [openAlbum, setOpenAlbum] = useState<PortfolioAlbum | null>(null);
  // Keep last album/index in state so the image stays visible during close fade-out
  const [lastAlbum, setLastAlbum] = useState<PortfolioAlbum | null>(null);
  const [lastPhotoIndex, setLastPhotoIndex] = useState(0);
  // 1 = navigated forward (next), -1 = navigated back (prev) — picks which
  // slide-in direction the next photo animates from.
  const [direction, setDirection] = useState(1);

  const visible =
    active === 0
      ? PORTFOLIO_ALBUMS
      : PORTFOLIO_ALBUMS.filter(
          (a) => PORTFOLIO_CATEGORIES.indexOf(a.category) + 1 === active
        );

  const open = useCallback((album: PortfolioAlbum) => {
    setLastAlbum(album);
    setLastPhotoIndex(0);
    setDirection(1);
    setOpenAlbum(album);
  }, []);

  const close = useCallback(() => setOpenAlbum(null), []);

  const step = useCallback(
    (delta: number) => {
      const total = openAlbum?.photos.length ?? 0;
      if (total <= 1) return;
      setDirection(delta > 0 ? 1 : -1);
      setLastPhotoIndex((i) => (i + delta + total) % total);
    },
    [openAlbum]
  );

  // Escape + arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, step]);

  // Lock scroll while open
  useEffect(() => {
    document.body.style.overflow = openAlbum ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openAlbum]);

  const isOpen = openAlbum !== null;
  const album = lastAlbum;
  const total = album?.photos.length ?? 0;
  const src = album?.photos[lastPhotoIndex];
  const hasMultiple = total > 1;
  const description = album?.description;
  const hasDescription =
    description &&
    (description.roomType || description.sizeSqft || description.location);

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

      {/* ── Album grid ─────────────────────────────────────────────
          key={active}: remounts on filter change → items re-animate  */}
      <div
        key={active}
        className="grid grid-cols-2 gap-1.5 sm:gap-3 lg:grid-cols-3"
      >
        {visible.map((a, i) => {
          const label = `${a.name} · ${filters[PORTFOLIO_CATEGORIES.indexOf(a.category) + 1]}`;
          return (
            <figure
              key={a.id}
              style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }}
              className="animate-fade-up group relative cursor-zoom-in overflow-hidden bg-paper-2"
              onClick={() => open(a)}
            >
              <div className="relative h-full min-h-37.5 overflow-hidden sm:min-h-52.5">
                <Image
                  src={a.photos[0]}
                  alt={label}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
                />
                {a.photos.length > 1 && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    {a.photos.length} photos
                  </span>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-black/70 via-black/30 to-transparent p-3 pt-8 text-white sm:p-4 sm:pt-12">
                  <span className="text-[11px] font-medium sm:text-sm">
                    {a.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-75 sm:text-[10px]">
                    {filters[PORTFOLIO_CATEGORIES.indexOf(a.category) + 1]}
                  </span>
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>

      {/* ── Gallery ────────────────────────────────────────────────
          Always in DOM — opacity/scale transitions handle enter/exit */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Project gallery"
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 transition-opacity duration-300 bg-ink/92 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      >
        {/* Label + counter — top left */}
        <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-white/50 sm:left-6 sm:top-6 sm:text-xs">
          {captionPrefix} · {album?.name}
          {hasMultiple && ` · ${lastPhotoIndex + 1} / ${total}`}
        </p>

        {/* Close — bare icon, no background */}
        <button
          type="button"
          aria-label="Close"
          className="absolute right-4 top-3.5 text-white/70 transition-colors duration-200 hover:text-white sm:right-6 sm:top-5"
          onClick={(e) => { e.stopPropagation(); close(); }}
        >
          <Icon name="close" className="h-7 w-7" />
        </button>

        {/* Prev / next */}
        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white/70 transition-colors duration-200 hover:text-white sm:left-4"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
            >
              <Icon name="chevronLeft" className="h-9 w-9" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 transition-colors duration-200 hover:text-white sm:right-4"
              onClick={(e) => { e.stopPropagation(); step(1); }}
            >
              <Icon name="chevronRight" className="h-9 w-9" />
            </button>
          </>
        )}

        {/* Image — scale in on open, scale out on close */}
        <div
          className={`transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* key={src} remounts on every photo change so the slide-in animation replays */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={src}
            src={src ?? ""}
            alt={album?.name ?? ""}
            className={`block max-h-[88vh] max-w-[93vw] object-contain sm:max-w-[84vw] ${
              direction > 0 ? "animate-slide-in-right" : "animate-slide-in-left"
            }`}
          />
        </div>

        {/* Description — bottom left */}
        {hasDescription && (
          <div
            className="absolute bottom-4 left-4 space-y-0.5 text-[11px] text-white/80 sm:bottom-6 sm:left-6 sm:text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {description?.roomType && (
              <p>{detailLabels.roomType}: {description.roomType}</p>
            )}
            {description?.sizeSqft && (
              <p>{detailLabels.size}: {description.sizeSqft} {detailLabels.sqftUnit}</p>
            )}
            {description?.location && (
              <p>{detailLabels.location}: {description.location}</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
