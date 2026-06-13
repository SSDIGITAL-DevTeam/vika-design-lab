"use client";

import Marquee from "react-fast-marquee";

const PARTNERS = Array.from({ length: 9 }, (_, i) => ({
  src: `/assets/images/home/partner${i + 1}.png`,
  alt: `Partner ${i + 1}`,
}));

export function PartnerMarquee() {
  return (
    <div className="border-t border-line py-16">
      {/* Heading — contained */}
      <div className="container-page mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Trusted Partners
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
          The brands behind every project.
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
          We source from certified suppliers and industry-leading brands — so every surface, fixture, and finish meets our quality standard.
        </p>
      </div>

      {/* Full-width edge-fade marquee */}
      <div className="[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
        <Marquee speed={40} pauseOnHover gradient={false}>
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="mx-10 flex h-14 items-center justify-center"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="max-h-10 w-auto object-contain grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
