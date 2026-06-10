import { Reveal } from "@/components/shared/reveal";
import { CtaButton } from "./ui";

interface CtaSectionProps {
  heading: string;
  sub: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  secondaryExternal?: boolean;
}

export function CtaSection({
  heading,
  sub,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
  secondaryExternal,
}: CtaSectionProps) {
  return (
    <div className="border-t border-line">
      <div className="container-page grid items-center gap-8 py-(--section-y) md:grid-cols-[1.3fr_0.9fr]">

        {/* Left: heading, body, buttons */}
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
            {sub}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3">
            <CtaButton href={primaryHref}>{primary}</CtaButton>
            <CtaButton
              href={secondaryHref}
              variant="secondary"
              external={secondaryExternal}
            >
              {secondary}
            </CtaButton>
          </div>
        </Reveal>

        {/* Right: chair — decorative, desktop only */}
        <div className="hidden items-end justify-center md:flex">
          <img
            src="/assets/component/kursicta.png"
            alt=""
            aria-hidden
            className="h-auto w-full object-contain"
            style={{ maxHeight: "380px" }}
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
