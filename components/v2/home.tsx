import { pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import type { ViewProps } from "@/components/types";
import { GoldEyebrow, GoldButton, V2Section, V2Cta } from "./ui";
import { PortfolioPreview } from "./portfolio-preview";
import { PartnerMarquee } from "@/components/v1/partner-marquee";

export function Home({ content, design, lang }: ViewProps) {
  const { home } = content;
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");
  const toServices = pagePath(design, lang, "services");

  return (
    <>
      {/* ── Hero — full-viewport editorial split ─────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/home/Hero Pict.png"
          alt="Vika Design Lab — home interior in Singapore"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        {/* Left-to-right dark fade — photo shows through on the right */}
        <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/60 to-black/10" />

        <div className="relative container-page w-full pb-20 pt-32 lg:pb-24 lg:pt-40">
          <div className="max-w-xl">
            <GoldEyebrow>{home.heroEyebrow}</GoldEyebrow>
            <h1 className="mt-6 font-display italic text-5xl font-light leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {home.heroHeadline}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              {home.heroSub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GoldButton href={toContact}>{home.cta.primary}</GoldButton>
              <GoldButton href={toPortfolio} variant="secondary">
                {home.cta.secondary}
              </GoldButton>
            </div>

            {/* Stats */}
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/20 pt-8">
              {home.stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="font-display italic text-3xl font-light text-white">
                    <CountUp value={s.value} />
                  </dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-yellow">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <V2Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          {/* Photo — full column height */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/portfolio/condo/condo1.jpg"
                alt="Interior project — Condo Geylang"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ maxHeight: "520px" }}
              />
            </div>
          </Reveal>
          {/* Text — heading + body stacked */}
          <Reveal delay={100}>
            <h2 className="font-display italic text-4xl font-light leading-tight text-ink sm:text-5xl">
              {home.intro.heading}
            </h2>
            <div className="mt-5 h-px w-12 bg-yellow opacity-60" />
            <div className="mt-6 space-y-5">
              {home.intro.body.map((p, i) => (
                <p key={i} className={`leading-relaxed text-muted ${i === 0 ? "text-lg" : "text-base"}`}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </V2Section>

      {/* Gold rule */}
      <div className="mx-auto w-full max-w-screen-xl px-6 opacity-20">
        <div className="h-px bg-yellow" />
      </div>

      {/* ── USP — 3×2 card grid ──────────────────────────────── */}
      <V2Section>
        <Reveal>
          <div className="mb-12">
            <GoldEyebrow>{home.usp.eyebrow}</GoldEyebrow>
            <h2 className="mt-5 font-display italic text-4xl font-light text-ink sm:text-5xl">
              {home.usp.heading}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              {home.usp.sub}
            </p>
          </div>
        </Reveal>
        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.usp.cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 70}>
              <article className="h-full rounded-2xl bg-paper-2 p-6 border-t border-yellow/40 sm:p-8 transition-all duration-300 hover:border-yellow/80">
                <Icon name={card.icon} className="h-7 w-7 text-yellow" />
                <h3 className="mt-5 text-base font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </V2Section>

      {/* ── Services overview — photo left + tiles right ─────── */}
      <div className="bg-paper-2">
        <div className="container-page py-(--section-y)">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            {/* Photo */}
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/portfolio/hdb/hdb1.jpg"
                  alt="Interior project — HDB Yishun"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ maxHeight: "520px" }}
                />
                {/* Gold caption */}
                <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-yellow">
                  HDB · Yishun
                </p>
              </div>
            </Reveal>
            {/* Tiles */}
            <div>
              <Reveal>
                <h2 className="font-display italic text-3xl font-light text-ink sm:text-4xl">
                  {home.servicesOverview.heading}
                </h2>
              </Reveal>
              <div className="mt-10 divide-y divide-line border-y border-line">
                {home.servicesOverview.tiles.map((tile, i) => (
                  <Reveal key={tile.title} delay={i * 60}>
                    <div className="flex items-center gap-6 py-5 group">
                      <span className="shrink-0 font-mono text-[10px] text-yellow/60 tracking-wider">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-medium text-ink group-hover:text-yellow transition-colors duration-200">
                          {tile.title}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted">{tile.desc}</p>
                      </div>
                      <Icon name="arrow" className="h-4 w-4 shrink-0 text-yellow/40 transition-all duration-200 group-hover:text-yellow group-hover:translate-x-1" />
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <div className="mt-8">
                  <GoldButton href={toServices}>{home.servicesOverview.cta}</GoldButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── Portfolio preview — staggered grid with lightbox ──── */}
      <V2Section>
        <PortfolioPreview
          eyebrow={home.portfolioPreview.eyebrow}
          heading={home.portfolioPreview.heading}
          sub={home.portfolioPreview.sub}
          cta={home.portfolioPreview.cta}
          toPortfolio={toPortfolio}
        />
      </V2Section>

      {/* ── Testimonials — centered editorial ────────────────── */}
      <div className="bg-paper-2">
        <div className="container-page py-(--section-y)">
          <Reveal>
            <div className="mb-12 text-center">
              <GoldEyebrow>{home.testimonials.eyebrow}</GoldEyebrow>
              <h2 className="mt-5 font-display italic text-4xl font-light text-ink sm:text-5xl">
                {home.testimonials.heading}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {home.testimonials.items.map((t, i) => (
              <Reveal key={t.author} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl bg-paper p-6 sm:p-8">
                  <span
                    className="mb-4 block font-display italic text-5xl font-light leading-none text-yellow"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <span className="block text-sm font-semibold text-ink">{t.author}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-yellow">
                      {t.meta}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partner logos ────────────────────────────────────── */}
      <PartnerMarquee
        eyebrow={home.partners.eyebrow}
        heading={home.partners.heading}
        sub={home.partners.sub}
      />

      {/* ── End CTA ──────────────────────────────────────────── */}
      <V2Cta image="/assets/portfolio/hdb/hdb2.jpg">
        <Reveal>
          <h2 className="font-display italic text-4xl font-light text-ink sm:text-5xl">
            {content.services.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted">
            {content.services.cta.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GoldButton href={toContact}>{content.services.cta.primary}</GoldButton>
            <GoldButton href={toPortfolio} variant="secondary">
              {content.services.cta.secondary}
            </GoldButton>
          </div>
        </Reveal>
      </V2Cta>
    </>
  );
}
