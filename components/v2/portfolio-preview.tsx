"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { GoldEyebrow, GoldButton } from "./ui";

type LightboxItem = { src: string; alt: string; label: string };

const ITEMS: LightboxItem[] = [
  { src: "/assets/portfolio/landed/landed1.jpg",  alt: "Jalan Kuras 01 — Landed", label: "Landed · Jalan Kuras" },
  { src: "/assets/portfolio/condo/condo2.jpg",    alt: "Geylang — Condo",         label: "Condo · Geylang" },
  { src: "/assets/portfolio/hdb/hdb1.jpg",        alt: "Executive Maisonette Yishun — HDB", label: "HDB · Yishun" },
];

function Lightbox({ item, onClose }: { item: LightboxItem; onClose: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation on next frame
    const raf = requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setVisible(false);
    // Wait for exit animation before unmounting
    setTimeout(onClose, 280);
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
        visible ? "bg-paper/90 opacity-100" : "bg-paper/0 opacity-0"
      }`}
      onClick={handleClose}
    >
      {/* Close */}
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-paper-2 text-muted transition-colors duration-200 hover:text-yellow"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className={`max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Label */}
      <p
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-yellow transition-all duration-300 delay-150 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {item.label}
      </p>
    </div>
  );
}

export function PortfolioPreview({
  eyebrow,
  heading,
  sub,
  cta,
  toPortfolio,
}: {
  eyebrow: string;
  heading: string;
  sub: string;
  cta: string;
  toPortfolio: string;
}) {
  const [open, setOpen] = useState<LightboxItem | null>(null);

  return (
    <>
      <Reveal>
        <div className="mb-10">
          <GoldEyebrow>{eyebrow}</GoldEyebrow>
          <h2 className="mt-5 font-display italic text-4xl font-light text-ink sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">{sub}</p>
        </div>
      </Reveal>

      {/* Staggered grid: 1 tall left, 2 stacked right */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 lg:gap-4">
        {/* Tall left */}
        <Reveal className="row-span-2">
          <button
            type="button"
            onClick={() => setOpen(ITEMS[0])}
            className="group relative h-full min-h-72 w-full cursor-zoom-in overflow-hidden rounded-2xl sm:min-h-96"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[0].src}
              alt={ITEMS[0].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-paper/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-wider text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {ITEMS[0].label}
            </p>
          </button>
        </Reveal>

        {/* Top right */}
        <Reveal delay={80} className="lg:col-span-2">
          <button
            type="button"
            onClick={() => setOpen(ITEMS[1])}
            className="group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[1].src}
              alt={ITEMS[1].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-paper/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-wider text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {ITEMS[1].label}
            </p>
          </button>
        </Reveal>

        {/* Bottom right */}
        <Reveal delay={140} className="lg:col-span-2">
          <button
            type="button"
            onClick={() => setOpen(ITEMS[2])}
            className="group relative aspect-video w-full cursor-zoom-in overflow-hidden rounded-2xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ITEMS[2].src}
              alt={ITEMS[2].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-paper/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-wider text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {ITEMS[2].label}
            </p>
          </button>
        </Reveal>
      </div>

      <Reveal delay={180}>
        <div className="mt-8">
          <GoldButton href={toPortfolio} variant="secondary">{cta}</GoldButton>
        </div>
      </Reveal>

      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </>
  );
}
