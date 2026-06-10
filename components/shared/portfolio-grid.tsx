"use client";

import { useState } from "react";

// Placeholder projects until the client's real photos arrive.
// `cat` indexes into the localized filter labels (1=HDB, 2=BTO, 3=Condo, 4=Landed).
const PROJECTS: { id: number; cat: number; tall?: boolean }[] = [
  { id: 1, cat: 1, tall: true },
  { id: 2, cat: 3 },
  { id: 3, cat: 2 },
  { id: 4, cat: 4, tall: true },
  { id: 5, cat: 1 },
  { id: 6, cat: 3, tall: true },
  { id: 7, cat: 2 },
  { id: 8, cat: 1 },
  { id: 9, cat: 4 },
  { id: 10, cat: 3 },
  { id: 11, cat: 2, tall: true },
  { id: 12, cat: 1 },
];

// Rotating placeholder tints kept within the brand palette.
const TINTS = [
  "bg-paper-2 text-muted",
  "bg-ink text-paper",
  "bg-yellow text-ink",
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
        {visible.map((p, i) => (
          <figure
            key={p.id}
            className={`group overflow-hidden rounded-[var(--radius)] ${
              p.tall ? "row-span-2" : ""
            }`}
          >
            <div
              className={`flex h-full min-h-[180px] flex-col justify-between p-4 transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100 ${
                TINTS[i % TINTS.length]
              } ${p.tall ? "min-h-[380px]" : "sm:min-h-[240px]"}`}
            >
              <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                {String(p.id).padStart(2, "0")}
              </span>
              <figcaption className="text-sm font-medium">
                {captionPrefix} {String(p.id).padStart(2, "0")} · {filters[p.cat]}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
