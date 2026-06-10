import Link from "next/link";
import { Icon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";

interface CtaBlockProps {
  heading: string;
  sub: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  secondaryExternal?: boolean;
  secondaryIcon?: string;
}

export function CtaBlock({
  heading,
  sub,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  secondaryExternal,
  secondaryIcon,
}: CtaBlockProps) {
  return (
    <Reveal>
      <div className="overflow-hidden bg-ink text-paper">
        <div className="container-page grid items-end gap-0 md:grid-cols-[1.3fr_1fr]">

          {/* Text + buttons */}
          <div className="py-(--section-y)">
            <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 max-w-sm text-lg leading-relaxed text-paper/65">
              {sub}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="inline-flex min-h-12 cursor-pointer items-center gap-2 bg-yellow px-7 text-sm font-semibold tracking-wide text-ink transition-colors duration-200 hover:bg-yellow-deep"
              >
                {primaryLabel}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              {secondaryExternal ? (
                <a
                  href={secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 cursor-pointer items-center gap-2 border border-paper/25 px-7 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:border-paper/70"
                >
                  {secondaryIcon && (
                    <Icon name={secondaryIcon} className="h-4 w-4" />
                  )}
                  {secondaryLabel}
                </a>
              ) : (
                <Link
                  href={secondaryHref}
                  className="inline-flex min-h-12 cursor-pointer items-center gap-2 border border-paper/25 px-7 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:border-paper/70"
                >
                  {secondaryIcon && (
                    <Icon name={secondaryIcon} className="h-4 w-4" />
                  )}
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>

          {/* Chair — bottom-aligned, slightly overflows for editorial feel */}
          <div className="hidden items-end justify-end md:flex">
            <img
              src="/assets/component/kursicta.png"
              alt=""
              aria-hidden
              className="w-full max-w-[340px] translate-y-[12%] object-contain"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
