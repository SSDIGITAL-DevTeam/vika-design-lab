import Link from "next/link";
import { Reveal } from "@/components/shared/reveal";
import { Icon } from "@/components/shared/icons";

interface CtaSectionProps {
  heading: string;
  sub: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  secondaryExternal?: boolean;
}

const BTN_INNER = "inline-flex min-h-12 w-full items-center justify-center gap-2 px-8 text-sm font-semibold tracking-wide";

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
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/component/background-cta.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="lazy"
      />

      {/* Content — vertically generous, centered */}
      <div className="relative container-page py-20 text-center sm:py-28 lg:py-36">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {sub}
          </p>

          {/* Buttons — stacked on mobile, side-by-side on sm+ */}
          <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            {/* Primary: white filled */}
            <Link
              href={primaryHref}
              className="inline-flex bg-paper text-ink transition-colors duration-200 hover:bg-paper/90"
            >
              <span className={BTN_INNER}>
                {primary}
                <Icon name="arrow" className="h-4 w-4 shrink-0" />
              </span>
            </Link>

            {/* Secondary: white outline */}
            {secondaryExternal ? (
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-paper/70 text-paper transition-colors duration-200 hover:bg-paper/10"
              >
                <span className={BTN_INNER}>
                  {secondary}
                  <Icon name="arrow" className="h-4 w-4 shrink-0" />
                </span>
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className="inline-flex border border-paper/70 text-paper transition-colors duration-200 hover:bg-paper/10"
              >
                <span className={BTN_INNER}>
                  {secondary}
                  <Icon name="arrow" className="h-4 w-4 shrink-0" />
                </span>
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
