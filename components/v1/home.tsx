import { pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import type { ViewProps } from "@/components/types";
import { CtaButton, Section } from "./ui";
import { CtaSection } from "./cta-section";
import { PartnerMarquee } from "./partner-marquee";
import { PortfolioPreview } from "./portfolio-preview";

const STAT_ICONS = ["home", "clock", "shield"] as const;
const REFUND_PHRASE = "guarantees a full refund";

function HeroSub({ text }: { text: string }) {
  const index = text.indexOf(REFUND_PHRASE);

  if (index === -1) {
    return <>{text}</>;
  }

  return (
    <>
      {text.slice(0, index)}
      <strong className="font-semibold text-ink">{REFUND_PHRASE}</strong>
      {text.slice(index + REFUND_PHRASE.length)}
    </>
  );
}

export function Home({ content, lang }: ViewProps) {
  const { home } = content;
  const toContact = pagePath(lang, "contact");
  const toPortfolio = pagePath(lang, "portfolio");
  const toServices = pagePath(lang, "services");

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="container-page pb-8 pt-(--section-y) sm:pb-14">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">

          {/* Left: headline */}
          <div>
            <h1
              className="animate-fade-up text-balance text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-5xl"
            >
              {home.heroHeadline}
            </h1>
            <p className="animate-fade-up mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              {home.heroHeadlineSub}
            </p>
            {/* Yellow bar draws in from left */}
            <span
              className="animate-draw-line mt-5 block h-1 bg-yellow"
              style={{ animationDelay: "300ms" }}
              aria-hidden
            />
          </div>

          {/* Right: sub-headline + CTAs */}
          <div className="flex flex-col">
            <p
              className="animate-fade-up text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "120ms" }}
            >
              <HeroSub text={home.heroSub} />
            </p>
            <div
              className="animate-fade-up mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <CtaButton href={toContact}>{home.cta.primary}</CtaButton>
              <CtaButton href={toPortfolio} variant="secondary">
                {home.cta.secondary}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-bleed hero image ─────────────────────────────── */}
      <div
        className="animate-fade-in w-full overflow-hidden"
        style={{ height: "clamp(260px, 58vw, 660px)", animationDelay: "400ms" }}
      >
        <img
          src="/assets/images/home/Hero Pict.png"
          alt="Vika Design Lab — completed home interior in Singapore"
          className="animate-image-zoom h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* ── Stats strip ──────────────────────────────────────── */}
      {/* Each stat reveals + counts up independently */}
      <div className="border-b border-t border-line">
        <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {home.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div className="flex items-center gap-4 px-4 py-8 sm:px-6">
                <Icon
                  name={STAT_ICONS[i] ?? "check"}
                  className="h-8 w-8 shrink-0 text-ink"
                />
                <div>
                  <dt className="text-2xl font-semibold text-ink">
                    <CountUp value={s.value} />
                  </dt>
                  <dd className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {s.label}
                  </dd>
                </div>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>

      {/* ── Intro ────────────────────────────────────────────── */}
      <Section bordered>
        <div className="grid items-center gap-6 md:gap-8 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="/assets/images/home/homepage-section2.png"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5">
              {home.intro.body.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-xl font-medium leading-snug text-ink sm:text-2xl"
                      : "text-base leading-relaxed text-ink-soft sm:text-lg"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── USP grid — each card staggers in individually ─────── */}
      <Section bordered>
        <Reveal>
          <div className="mb-10">
            {home.usp.eyebrow && (
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {home.usp.eyebrow}
              </p>
            )}
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              {home.usp.heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {home.usp.sub}
            </p>
          </div>
        </Reveal>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {home.usp.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="bg-paper">
              <article className="h-full cursor-default p-5 sm:p-7 [box-shadow:inset_0_0_0_0px_rgba(255,212,0,0)] transition-all duration-300 hover:[box-shadow:inset_0_0_0_2px_#ffd400]">
                <Icon name={card.icon} className="h-8 w-8 text-ink" />
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Services overview ────────────────────────────────── */}
      <Section bordered>
        <div className="grid items-start gap-6 md:gap-10 md:grid-cols-2">
          <Reveal>
            <div className="aspect-square w-full overflow-hidden">
              <img
                src="/assets/images/home/homepage-section4.png"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="divide-y divide-line border-y border-line">
              {home.servicesOverview.tiles.map((tile) => (
                <li
                  key={tile.title}
                  className="group flex items-start gap-4 px-2 py-5 transition-colors duration-200 hover:bg-paper-2"
                >
                  <Icon
                    name="arrow"
                    className="mt-1 h-4 w-4 shrink-0 text-yellow-deep transition-transform duration-200 group-hover:translate-x-1"
                  />
                  <div>
                    <h3 className="font-semibold text-ink">{tile.title}</h3>
                    <p className="mt-1 text-sm text-muted">{tile.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CtaButton href={toServices}>
                {home.servicesOverview.cta}
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Portfolio preview ────────────────────────────────── */}
      <PortfolioPreview
        toPortfolio={toPortfolio}
        eyebrow={home.portfolioPreview.eyebrow}
        sub={home.portfolioPreview.sub}
        cta={home.portfolioPreview.cta}
      />

      {/* ── Testimonials — each card staggers in ─────────────── */}
      <Section bordered>
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {home.testimonials.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              {home.testimonials.heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {home.testimonials.sub}
            </p>
          </div>
        </Reveal>
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {home.testimonials.items.map((t, i) => (
            <Reveal key={t.author} delay={i * 130} className="bg-paper">
              <figure className="flex h-full flex-col p-5 sm:p-7">
                <span
                  className="mb-3 block text-4xl font-bold leading-none text-yellow sm:text-5xl"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="flex-1 text-base leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <span className="block font-semibold text-ink">{t.author}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted">
                    {t.meta}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Partner logos marquee ────────────────────────────── */}
      <PartnerMarquee
        eyebrow={home.partners.eyebrow}
        heading={home.partners.heading}
        sub={home.partners.sub}
      />

      {/* ── End CTA ──────────────────────────────────────────── */}
      <CtaSection
        heading={content.services.cta.heading}
        sub={content.services.cta.sub}
        primary={content.services.cta.primary}
        primaryHref={toContact}
        secondary={content.services.cta.secondary}
        secondaryHref={toPortfolio}
      />
    </>
  );
}
