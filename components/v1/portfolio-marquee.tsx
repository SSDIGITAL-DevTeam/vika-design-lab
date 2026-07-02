"use client";

import Marquee from "react-fast-marquee";
import { flattenAlbumPhotos, PORTFOLIO_CATEGORY_LABELS } from "@/lib/portfolio";

const PORTFOLIO = flattenAlbumPhotos().map(({ src, album }) => ({
  src,
  type: PORTFOLIO_CATEGORY_LABELS[album.category],
  location: album.name,
}));

export function PortfolioMarquee() {
  return (
    <div className="border-y border-line overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]">
      <Marquee speed={32} pauseOnHover gradient={false}>
        {PORTFOLIO.map((img, i) => (
          <div key={i} className="group mx-1 w-64 shrink-0">
            <div className="aspect-4/3 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`${img.type} — ${img.location}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>
            <div className="border-x border-b border-line bg-paper px-3 py-2.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {img.type}
              </p>
              <p className="mt-0.5 text-sm font-medium text-ink">{img.location}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
