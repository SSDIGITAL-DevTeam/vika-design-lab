"use client";
import { useEffect, useRef, useState } from "react";

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          obs.disconnect();

          const duration = 1800;
          const start = performance.now();

          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            setDisplay(Math.round(easeOut(t) * num));
            if (t < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
