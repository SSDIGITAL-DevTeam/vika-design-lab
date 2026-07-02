"use client";

import { useState, useEffect, useCallback } from "react";
import { Reveal } from "@/components/shared/reveal";
import { CtaButton, Section } from "./ui";
import { Icon } from "@/components/shared/icons";
import { getAlbumById } from "@/lib/portfolio";

const landed = getAlbumById("landed-jalan-kuras")!;
const hdb = getAlbumById("hdb-yishun-executive-maisonette")!;
const condo = getAlbumById("condo-geylang")!;

const PREVIEW = [
  { src: landed.photos[1], alt: "Landed home interior — Vika Design Lab", featured: true },
  { src: hdb.photos[0],    alt: "HDB kitchen — Vika Design Lab" },
  { src: landed.photos[0], alt: "Landed home — Vika Design Lab" },
  { src: hdb.photos[1],    alt: "HDB bathroom — Vika Design Lab" },
  { src: condo.photos[1],  alt: "Condo bathroom — Vika Design Lab" },
];

interface PortfolioPreviewProps {
  toPortfolio: string;
  eyebrow: string;
  heading: string;
  sub: string;
  cta: string;
}

export function PortfolioPreview({ toPortfolio, eyebrow, heading, sub, cta }: PortfolioPreviewProps) {
  const [selected, setSelected] = useState<string | null>(null);
  // lastSrc persists the image src during the close animation so it doesn't
  // snap to blank while the overlay is still fading out.
  const [lastSrc, setLastSrc] = useState("");

  const open = useCallback((src: string) => {
    setLastSrc(src);
    setSelected(src);
  }, []);

  const close = useCallback(() => setSelected(null), []);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const isOpen = selected !== null;

  return (
    <>
      <Section bordered>
        {/* Section header */}
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {sub}
            </p>
          </div>
        </Reveal>

        {/* Editorial asymmetric grid:
            Desktop (3-col): A (row-span-2) | B C / D E
            Mobile  (2-col): A B / C D  (E hidden)       */}
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
          {/* A — featured, tall on desktop */}
          <Reveal
            delay={0}
            className="group relative overflow-hidden bg-paper-2 aspect-3/2 sm:aspect-auto sm:row-span-2"
          >
            <img
              src={PREVIEW[0].src}
              alt={PREVIEW[0].alt}
              className="absolute inset-0 h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
              onClick={() => open(PREVIEW[0].src)}
            />
          </Reveal>

          {/* B C D E — small images */}
          {PREVIEW.slice(1).map((p, i) => (
            <Reveal
              key={i}
              delay={(i + 1) * 80}
              className={`group relative overflow-hidden bg-paper-2 aspect-3/2${
                i === 3 ? " hidden sm:block" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="absolute inset-0 h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                onClick={() => open(p.src)}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={300}>
          <div className="mt-8">
            <CtaButton href={toPortfolio} variant="secondary">
              {cta}
            </CtaButton>
          </div>
        </Reveal>
      </Section>

      {/* ── Lightbox ────────────────────────────────────────────
          Always in DOM so opacity/scale transitions work on both
          enter and exit. pointer-events-none when closed.        */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Project image"
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto bg-ink/90"
            : "opacity-0 pointer-events-none bg-ink/90"
        }`}
        onClick={close}
      >
        {/* Close button — bare icon, no background */}
        <button
          type="button"
          aria-label="Close image"
          className="absolute right-4 top-3.5 z-10 text-paper/70 transition-colors duration-200 hover:text-paper sm:right-6 sm:top-5"
          onClick={(e) => { e.stopPropagation(); close(); }}
        >
          <Icon name="close" className="h-7 w-7" />
        </button>

        {/* Image — scale 95→100 on open, 100→95 on close */}
        <div
          className={`transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lastSrc}
            alt=""
            className="block max-h-[88vh] max-w-[92vw] object-contain shadow-2xl sm:max-w-[82vw]"
          />
        </div>
      </div>
    </>
  );
}
