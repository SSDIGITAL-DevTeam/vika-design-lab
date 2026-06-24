import { pagePath } from "@/lib/site";
import { Reveal } from "@/components/shared/reveal";
import { CountUp } from "@/components/shared/count-up";
import { PartnerMarquee } from "@/components/v1/partner-marquee";
import { PortfolioPreview } from "@/components/v2/portfolio-preview";
import type { ViewProps } from "@/components/types";
import { GoldLabel, GoldButton, V3Rule, V3Section, InkLink } from "./ui";

export function Home({ content, design, lang }: ViewProps) {
  const { home } = content;
  const isZh = lang === "zh";
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");
  const toServices = pagePath(design, lang, "services");

  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-end">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/home/Hero Pict.png"
          alt="Vika Design Lab — interior project"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/55 to-black/88" />

        <div className="relative container-page w-full pb-20 pt-36">
          <Reveal>
            <GoldLabel>{home.heroEyebrow}</GoldLabel>
            <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.06] tracking-wide text-white sm:text-6xl lg:text-7xl">
              {home.heroHeadline}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
              {home.heroSub}
            </p>
            <div className="mt-10">
              <GoldButton href={toContact}>{home.cta.primary}</GoldButton>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={200}>
            <div className="mt-16 flex divide-x divide-white/15 border-t border-white/15 pt-8">
              {home.stats.map((s) => (
                <div key={s.label} className="flex-1 px-5 first:pl-0 last:pr-0">
                  <p className="font-display text-3xl font-semibold text-yellow">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <div className="bg-paper-2">
        <div className="container-page py-(--section-y)">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Photo */}
            <Reveal>
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/portfolio/condo/condo1.jpg"
                  alt="Interior project — Condo Singapore"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ maxHeight: "520px" }}
                />
              </div>
            </Reveal>
            {/* Text */}
            <Reveal delay={100}>
              <GoldLabel>{isZh ? "关于我们" : "About Us"}</GoldLabel>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-snug tracking-wide text-ink sm:text-4xl">
                {home.intro.heading}
              </h2>
              <div className="mt-4 h-px w-10 bg-yellow opacity-60" />
              <div className="mt-6 space-y-4">
                {home.intro.body.map((p, i) => (
                  <p key={i} className={`leading-relaxed text-muted ${i === 0 ? "text-base" : "text-sm"}`}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Services Overview ─── heading top, photo + tiles below ─ */}
      <div className="container-page py-(--section-y)">
        {/* Heading — full width */}
        <Reveal>
          <GoldLabel>{isZh ? "我们的服务" : "What We Do"}</GoldLabel>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-snug tracking-wide text-ink sm:text-3xl">
            {home.servicesOverview.heading}
          </h2>
        </Reveal>

        {/* Grid — photo left fills tile height, tiles right */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          {/* Photo — stretches to match tile list height */}
          <Reveal className="relative min-h-64 lg:min-h-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/portfolio/hdb/hdb1.jpg"
              alt="Interior project — HDB Singapore"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-yellow">
              HDB · Yishun
            </p>
          </Reveal>

          {/* Tiles */}
          <div className="divide-y divide-line border-y border-line">
            {home.servicesOverview.tiles.map((tile, i) => (
              <Reveal key={tile.title} delay={i * 50}>
                <div className="flex items-start gap-6 py-5 group cursor-pointer">
                  <span className="shrink-0 font-mono text-[10px] tracking-wider text-yellow/70 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-sans text-base font-light text-ink transition-colors duration-200 group-hover:text-yellow">
                      {tile.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{tile.desc}</p>
                  </div>
                  <span className="shrink-0 text-yellow/30 transition-all duration-200 group-hover:text-yellow group-hover:translate-x-1 mt-0.5">
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-8">
            <GoldButton href={toServices}>{home.servicesOverview.cta}</GoldButton>
          </div>
        </Reveal>
      </div>

      {/* ── Portfolio Preview ─────────────────────────────────────── */}
      <div className="bg-paper-2">
        <V3Section>
          <PortfolioPreview
            eyebrow={home.portfolioPreview.eyebrow}
            heading={home.portfolioPreview.heading}
            sub={home.portfolioPreview.sub}
            cta={home.portfolioPreview.cta}
            toPortfolio={toPortfolio}
          />
        </V3Section>
      </div>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <div className="container-page py-(--section-y)">
        <Reveal>
          <div className="mb-16 text-center">
            <GoldLabel>{home.testimonials.eyebrow}</GoldLabel>
            <h2 className="mt-5 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
              {home.testimonials.heading}
            </h2>
          </div>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          {home.testimonials.items.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <div>
                <V3Rule />
                <div className="py-10">
                  <div className="flex gap-4">
                    <span className="shrink-0 font-display text-5xl leading-none text-yellow select-none">&ldquo;</span>
                    <blockquote className="font-display text-lg font-normal italic leading-relaxed text-ink/90 sm:text-xl">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="h-px w-6 bg-yellow/50" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {t.author} &middot; {t.meta}
                    </span>
                  </figcaption>
                </div>
              </div>
            </Reveal>
          ))}
          <V3Rule />
        </div>
      </div>

      {/* ── Partners ─────────────────────────────────────────────── */}
      <div className="bg-paper-2">
        <PartnerMarquee
          eyebrow={home.partners.eyebrow}
          heading={home.partners.heading}
          sub={home.partners.sub}
        />
      </div>

      {/* ── End CTA — full gold section ───────────────────────────── */}
      <div className="bg-yellow py-24 sm:py-32 text-center">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/50">
            {home.usp.eyebrow}
          </p>
          <h2 className="mx-auto mt-8 max-w-xl font-display text-3xl font-semibold leading-snug tracking-wide text-black sm:text-4xl">
            {content.services.cta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-black/65">
            {content.services.cta.sub ?? ""}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a
              href={toContact}
              className="inline-flex items-center gap-2 border-2 border-black px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-black transition-colors duration-200 hover:bg-black hover:text-yellow"
            >
              {content.services.cta.primary}
              <span aria-hidden>→</span>
            </a>
            <a
              href={toPortfolio}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black/60 transition-opacity duration-200 hover:opacity-100"
            >
              {content.services.cta.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </>
  );
}
