"use client";

import { useEffect, useRef, useState } from "react";

type StoryTimelineProps = {
  steps: string[];
  story: string[];
  founderQuote: {
    quote: string;
    author: string;
  };
};

export function StoryTimeline({
  steps,
  story,
  founderQuote,
}: StoryTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const articleRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const total = articleRefs.current.length;

    articleRefs.current.forEach((el, i) => {
      if (!el) return;
      // Last item uses a wider zone so it activates without needing extra scroll space
      const isLast = i === total - 1;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i);
          }
        },
        {
          rootMargin: isLast ? "0px 0px -5% 0px" : "-20% 0px -55% 0px",
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="relative pr-1 sm:pr-4">
      {/* Static track line */}
      <div className="pointer-events-none absolute bottom-0 left-4 top-0 w-px bg-line" />

      <div className="space-y-8 py-2 lg:space-y-12 lg:pb-16">
        {story.map((paragraph, i) => {
          const isActive = i === activeIndex;
          const isPast = i < activeIndex;

          return (
            <article
              key={steps[i]}
              ref={(el) => {
                articleRefs.current[i] = el;
              }}
              className="relative pl-12 sm:pl-14"
            >
              {/* Per-article dot — snaps to each card as you scroll */}
              <span
                className={`pointer-events-none absolute left-1.75 top-0.5 z-20 h-5 w-5 rounded-full border-2 transition-all duration-500 ease-out ${
                  isActive
                    ? "scale-125 border-yellow bg-yellow shadow-[0_0_0_5px_rgba(255,212,0,0.2)]"
                    : isPast
                    ? "scale-100 border-yellow bg-yellow"
                    : "scale-90 border-line bg-paper"
                }`}
              />

              {/* Step label */}
              <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:text-[11px]">
                {String(i + 1).padStart(2, "0")} — {steps[i]}
              </p>

              {/* Card */}
              <div
                className={`border bg-paper transition-all duration-500 ${
                  isActive ? "border-yellow/40" : "border-line"
                }`}
              >
                <div
                  className={`border-l-4 p-4 sm:p-6 transition-colors duration-500 ${
                    isActive
                      ? "border-yellow"
                      : isPast
                      ? "border-yellow/30"
                      : "border-line"
                  }`}
                >
                  <p
                    className={`leading-relaxed transition-colors duration-300 ${
                      i === 0
                        ? "text-base font-semibold leading-snug text-ink sm:text-lg lg:text-xl"
                        : isActive
                        ? "text-sm text-ink sm:text-base"
                        : "text-sm text-ink-soft sm:text-base"
                    }`}
                  >
                    {paragraph}
                  </p>

                  {i === 2 && (
                    <figure className="mt-5 bg-ink p-4 sm:p-6">
                      <span
                        className="block text-3xl font-bold leading-none text-yellow"
                        aria-hidden
                      >
                        &ldquo;
                      </span>
                      <blockquote className="mt-1 text-sm font-medium leading-snug text-paper sm:text-base lg:text-lg">
                        {founderQuote.quote}
                      </blockquote>
                      <figcaption className="mt-4 flex items-center gap-2">
                        <span className="h-px w-6 bg-yellow" aria-hidden />
                        <span className="font-mono text-[10px] uppercase tracking-wider text-paper/60">
                          {founderQuote.author}
                        </span>
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
