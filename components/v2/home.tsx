import { pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import type { ViewProps } from "@/components/types";
import { BigButton, Display, Kicker, Section } from "./ui";

export function Home({ content, design, lang }: ViewProps) {
  const { home } = content;
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");
  const toServices = pagePath(design, lang, "services");

  return (
    <>
      {/* Hero */}
      <Section className="!pt-10">
        <Kicker>{home.heroEyebrow}</Kicker>
        <Display
          as="h1"
          className="mt-6 max-w-[15ch] text-[clamp(2.75rem,9vw,7rem)]"
        >
          {home.heroHeadline}
        </Display>
        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <p className="max-w-xl text-xl leading-relaxed text-ink-soft">
            {home.heroSub}
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <BigButton href={toContact}>{home.cta.primary}</BigButton>
            <BigButton href={toPortfolio} variant="secondary">
              {home.cta.secondary}
            </BigButton>
          </div>
        </div>

        {/* Stats as bold blocks */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {home.stats.map((s, i) => (
            <div
              key={s.label}
              className={`rounded-[var(--radius)] p-7 ${
                i === 1 ? "bg-yellow text-ink" : "bg-paper-2 text-ink"
              }`}
            >
              <p className="font-display text-5xl font-black tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-ink-soft">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Intro */}
      <Section>
        <Kicker>{home.intro.heading}</Kicker>
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-12">
          <Display className="text-[clamp(1.8rem,4vw,3rem)]">
            {home.intro.body[0]}
          </Display>
          <p className="self-end text-xl leading-relaxed text-ink-soft">
            {home.intro.body[1]}
          </p>
        </div>
      </Section>

      {/* USP grid */}
      <Section>
        <Kicker>{home.usp.heading}</Kicker>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {home.usp.cards.map((card) => (
            <article
              key={card.title}
              className="group rounded-[var(--radius)] bg-paper-2 p-7 transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-ink">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted group-hover:text-paper/70">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* Services overview */}
      <Section>
        <div className="rounded-[2rem] bg-paper-2 p-8 sm:p-12">
          <Kicker>{home.servicesOverview.heading}</Kicker>
          <ul className="mt-8 divide-y divide-line">
            {home.servicesOverview.tiles.map((tile, i) => (
              <li key={tile.title} className="flex items-baseline gap-5 py-5">
                <span className="font-display text-2xl font-black text-yellow-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{tile.title}</h3>
                  <p className="mt-1 text-sm text-muted">{tile.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <BigButton href={toServices}>{home.servicesOverview.cta}</BigButton>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <Kicker>{home.testimonials.heading}</Kicker>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {home.testimonials.items.map((t, i) => (
            <figure
              key={t.author}
              className={`flex flex-col rounded-[var(--radius)] p-7 ${
                i === 1 ? "bg-ink text-paper" : "bg-paper-2 text-ink"
              }`}
            >
              <blockquote className="flex-1 text-lg leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-bold">{t.author}</span>
                <span
                  className={`text-sm ${i === 1 ? "text-paper/60" : "text-muted"}`}
                >
                  {t.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Trust badges */}
      <Section>
        <p className="text-center text-2xl font-bold text-ink">
          {home.trust.heading}
        </p>
        <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {home.trust.badges.map((b) => (
            <li
              key={b.name}
              className="flex items-center gap-2 rounded-full bg-paper-2 px-5 py-3"
            >
              <span className="text-sm font-bold text-ink">{b.name}</span>
              {b.comingSoon ? (
                <span className="rounded-full bg-ink px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-paper">
                  {content.common.comingSoon}
                </span>
              ) : (
                <span className="text-xs text-muted">{b.note}</span>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
