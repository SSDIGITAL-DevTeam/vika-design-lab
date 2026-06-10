"use client";

import Image from "next/image";
import { useState } from "react";

// `cat` indexes into localized filter labels (1=HDB, 2=Condo, 3=Landed).
const PROJECTS: { id: number; cat: number; image: string; tall?: boolean }[] = [
  { id: 1, cat: 1, image: "/assets/portfolio/hdb/hdb1.jpg", tall: true },
  { id: 2, cat: 1, image: "/assets/portfolio/hdb/hdb2.jpg" },
  { id: 3, cat: 1, image: "/assets/portfolio/hdb/hdb3.jpg" },
  { id: 4, cat: 1, image: "/assets/portfolio/hdb/hdb4.jpg" },
  { id: 5, cat: 2, image: "/assets/portfolio/condo/condo1.jpg" },
  { id: 6, cat: 2, image: "/assets/portfolio/condo/condo2.jpg", tall: true },
  { id: 7, cat: 2, image: "/assets/portfolio/condo/condo3.jpg" },
  { id: 8, cat: 2, image: "/assets/portfolio/condo/condo4.jpg" },
  { id: 9, cat: 3, image: "/assets/portfolio/landed/landed1.jpg" },
  { id: 10, cat: 3, image: "/assets/portfolio/landed/landed2.jpg", tall: true },
  { id: 11, cat: 3, image: "/assets/portfolio/landed/landed3.jpg" },
  { id: 12, cat: 3, image: "/assets/portfolio/landed/landed4.jpg" },
];

export function PortfolioGrid({
  filters,
  captionPrefix,
}: {
  filters: string[];
  captionPrefix: string;
}) {
  const [active, setActive] = useState(0); // 0 = All

  const visible =
    active === 0 ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((label, i) => {
          const isActive = active === i;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`min-h-[40px] rounded-[var(--radius)] border px-4 text-sm transition-colors duration-200 ${
                isActive
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink-soft hover:border-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {visible.map((p) => (
          <figure
            key={p.id}
            className={`group relative overflow-hidden rounded-[var(--radius)] bg-paper-2 ${
              p.tall ? "row-span-2" : ""
            }`}
          >
            <div
              className={`relative h-full min-h-[180px] overflow-hidden ${
                p.tall ? "min-h-[380px]" : "sm:min-h-[240px]"
              }`}
            >
              <Image
                src={p.image}
                alt={`${captionPrefix} ${String(p.id).padStart(2, "0")} · ${filters[p.cat]}`}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-linear-to-t from-black/75 via-black/35 to-transparent p-4 pt-12 text-paper">
                <span className="text-sm font-medium">
                  {captionPrefix} {String(p.id).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                  {filters[p.cat]}
                </span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
