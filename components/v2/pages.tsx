import {
  CONTACT,
  buildWhatsAppLink,
  pagePath,
} from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { Reveal } from "@/components/shared/reveal";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import type { ViewProps } from "@/components/types";
import { GoldEyebrow, GoldButton, V2Section, V2Cta } from "./ui";
import { PortfolioMarquee } from "@/components/v1/portfolio-marquee";

const DESIGNER_PHOTOS = [
  "https://i.pravatar.cc/400?img=11",
  "https://i.pravatar.cc/400?img=47",
  "https://i.pravatar.cc/400?img=26",
  "https://i.pravatar.cc/400?img=33",
];

function PageHeader({
  image,
  title,
  subtitle,
  overlay = "from-black/70 via-black/40 to-transparent",
}: {
  image: string;
  title: string;
  subtitle: string;
  overlay?: string;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(380px, 52vh, 600px)" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className={`absolute inset-0 bg-linear-to-r ${overlay}`} />
      <div className="relative flex h-full flex-col justify-end container-page pb-14 pt-28">
        <Reveal>
          <h1 className="max-w-2xl font-display italic text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">{subtitle}</p>
        </Reveal>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════════════ */
export function About({ content, design, lang }: ViewProps) {
  const { about } = content;
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");
  const isZh = content.langTag.startsWith("zh");

  return (
    <>
      <PageHeader
        image="/assets/images/home/homepage-section2.png"
        title={about.title}
        subtitle={about.subtitle}
        overlay="from-black/80 via-black/50 to-black/10"
      />

      {/* Story */}
      <V2Section>
        <GoldEyebrow>{about.storyLabel}</GoldEyebrow>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:items-start">
          <div className="space-y-5">
            {about.story.map((p, i) => (
              <Reveal key={i} delay={i * 50}>
                <p
                  className={
                    i === 0
                      ? "font-display italic text-2xl font-light leading-snug text-ink sm:text-3xl"
                      : "text-base leading-relaxed text-muted"
                  }
                >
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100} className="lg:sticky lg:top-28 lg:self-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/home/homepage-section4.png"
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </V2Section>

      {/* Founder quote — gold block */}
      <div className="bg-yellow">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <figure className="max-w-2xl mx-auto text-center">
              <blockquote className="font-display italic text-2xl font-light leading-snug text-paper sm:text-3xl">
                &ldquo;{about.founderQuote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                — {about.founderQuote.author}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>

      {/* Mission & Vision — image backdrop */}
      <div className="relative overflow-hidden" style={{ minHeight: "clamp(380px, 46vw, 560px)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/portfolio/landed/landed4.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="relative container-page py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-20">
            <Reveal>
              <GoldEyebrow>{about.missionLabel}</GoldEyebrow>
              <p className="mt-5 max-w-md font-display italic text-xl font-light leading-snug text-white sm:text-2xl">
                {about.mission}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <GoldEyebrow>{about.visionLabel}</GoldEyebrow>
              <p className="mt-5 max-w-md font-display italic text-xl font-light leading-snug text-white sm:text-2xl">
                {about.vision}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Process */}
      <V2Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <GoldEyebrow>{isZh ? "施工流程" : "Our Process"}</GoldEyebrow>
            <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
              {about.process.heading}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5">
              {about.process.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </V2Section>

      {/* Designers */}
      <div className="bg-paper-2">
        <div className="container-page py-(--section-y)">
          <Reveal>
            <GoldEyebrow>{isZh ? "我们的团队" : "Our Team"}</GoldEyebrow>
            <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
              {about.designers.heading}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              {about.designers.intro}
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {about.designers.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="rounded-2xl overflow-hidden bg-paper">
                  <div className="aspect-square w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={DESIGNER_PHOTOS[i]}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  </div>
                  <div className="p-4">
                    <div className="h-px w-8 bg-yellow opacity-60" />
                    <p className="mt-3 text-sm font-semibold text-ink">{member.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-yellow">
                      {member.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <V2Cta image="/assets/portfolio/condo/condo3.jpg">
        <Reveal>
          <h2 className="font-display italic text-3xl font-light text-ink sm:text-4xl">
            {content.services.cta.heading}
          </h2>
          <p className="mt-4 text-base text-muted">{content.services.cta.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
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

/* ═══════════════════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════════════════ */
export function Services({ content, design, lang }: ViewProps) {
  const { services } = content;
  const isZh = content.langTag.startsWith("zh");
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");

  return (
    <>
      <PageHeader
        image="/assets/component/Services.png"
        title={services.title}
        subtitle={services.subtitle}
      />

      {/* Core services */}
      <V2Section>
        <Reveal>
          <GoldEyebrow>{services.coreEyebrow}</GoldEyebrow>
          <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
            {services.coreHeading}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{services.coreSub}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.core.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 80}>
              <article className="h-full rounded-2xl bg-paper-2 p-7 border-t border-yellow/40 transition-all duration-300 hover:border-yellow/70">
                <Icon name={svc.icon} className="h-7 w-7 text-yellow" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{svc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{svc.body}</p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-yellow/70">
                  {svc.includedLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {svc.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </V2Section>

      {/* Portfolio marquee — "Our Work" section */}
      <div className="bg-paper-2">
        <div className="container-page py-(--section-y)">
          <Reveal>
            <GoldEyebrow>{isZh ? "项目案例" : "Our Work"}</GoldEyebrow>
            <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
              {isZh ? "从组屋到有地住宅，遍布全岛。" : "From HDB to landed, built across Singapore."}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {isZh
                ? "每个项目都围绕真正居住其中的人而设计。"
                : "Every project is designed around the people who actually live in it."}
            </p>
          </Reveal>
        </div>
      </div>
      <PortfolioMarquee />

      {/* Speciality */}
      <V2Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <GoldEyebrow>{services.specialityEyebrow}</GoldEyebrow>
            <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
              {services.specialityHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{services.specialityIntro}</p>
          </Reveal>
          <ul className="divide-y divide-line border-y border-line">
            {services.speciality.map((s, i) => (
              <li key={s.title} className="py-5">
                <Reveal delay={i * 60} className="flex items-start gap-4">
                  <Icon name={s.icon} className="mt-0.5 h-6 w-6 shrink-0 text-yellow" />
                  <div>
                    <h3 className="font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </V2Section>

      {/* Materials */}
      <div className="bg-paper-2">
        <div className="container-page py-(--section-y)">
          <Reveal>
            <GoldEyebrow>{services.materialsEyebrow}</GoldEyebrow>
            <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
              {services.materials.heading}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{services.materials.sub}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {services.materials.specs.map((spec, i) => (
              <Reveal key={spec.title} delay={i * 80}>
                <div className="h-full rounded-2xl bg-paper p-6 sm:p-8 border-t border-yellow/40">
                  <Icon name={spec.icon} className="h-7 w-7 text-yellow" />
                  <h3 className="mt-5 text-base font-semibold text-ink">{spec.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{spec.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Payment */}
      <V2Section>
        <Reveal>
          <GoldEyebrow>{services.pricingEyebrow}</GoldEyebrow>
          <h2 className="mt-4 font-display italic text-3xl font-light text-ink sm:text-4xl">
            {services.payment.heading}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{services.payment.sub}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {services.payment.milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 80}>
              <div className="h-full rounded-2xl bg-paper-2 p-6 sm:p-8">
                <Icon name={m.icon} className="h-7 w-7 text-yellow" />
                <h3 className="mt-5 text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <figure className="mt-10 rounded-2xl bg-yellow p-8 sm:p-10">
            <blockquote className="font-display italic text-xl font-light leading-snug text-paper sm:text-2xl">
              &ldquo;{services.payment.refundQuote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
              {services.payment.refundNote}
            </figcaption>
          </figure>
        </Reveal>
      </V2Section>

      {/* CTA */}
      <V2Cta image="/assets/portfolio/landed/landed3.jpg">
        <Reveal>
          <h2 className="font-display italic text-3xl font-light text-ink sm:text-4xl">
            {services.cta.heading}
          </h2>
          <p className="mt-4 text-base text-muted">{services.cta.sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GoldButton href={toContact}>{services.cta.primary}</GoldButton>
            <GoldButton href={toPortfolio} variant="secondary">{services.cta.secondary}</GoldButton>
          </div>
        </Reveal>
      </V2Cta>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   PORTFOLIO
═══════════════════════════════════════════════════════════ */
export function Portfolio({ content, design, lang }: ViewProps) {
  const { portfolio, common } = content;
  const toContact = pagePath(design, lang, "contact");

  return (
    <>
      <PageHeader
        image="/assets/component/Portfolio.png"
        title={portfolio.title}
        subtitle={portfolio.subtitle}
      />
      <V2Section>
        <PortfolioGrid
          filters={portfolio.filters}
          captionPrefix={portfolio.captionPrefix}
        />
      </V2Section>
      <V2Cta image="/assets/portfolio/hdb/hdb3.jpg">
        <Reveal>
          <h2 className="font-display italic text-3xl font-light text-ink sm:text-4xl">
            {portfolio.cta.heading}
          </h2>
          <p className="mt-4 text-base text-muted">{portfolio.cta.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GoldButton href={toContact}>{portfolio.cta.primary}</GoldButton>
            <GoldButton
              href={buildWhatsAppLink(common.whatsappPrefill)}
              variant="secondary"
              external
            >
              {portfolio.cta.secondary}
            </GoldButton>
          </div>
        </Reveal>
      </V2Cta>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════════ */
export function Contact({ content }: ViewProps) {
  const { contact, common } = content;

  return (
    <>
      <PageHeader
        image="/assets/component/Contact.png"
        title={contact.title}
        subtitle={contact.subtitle}
      />

      <V2Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Details */}
          <Reveal>
            <GoldEyebrow>{contact.detailsHeading}</GoldEyebrow>
            <p className="mt-5 text-base leading-relaxed text-muted">{contact.detailsNote}</p>

            <ul className="mt-8 space-y-5">
              {[
                { icon: "whatsapp", label: contact.labels.whatsapp, href: buildWhatsAppLink(common.whatsappPrefill), text: CONTACT.phone, external: true },
                { icon: "mail", label: contact.labels.email, href: CONTACT.emailHref, text: CONTACT.email, external: false },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow/10">
                    <Icon name={row.icon} className="h-4 w-4 text-yellow" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-yellow">{row.label}</p>
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="mt-0.5 text-sm text-muted hover:text-ink transition-colors duration-200"
                    >
                      {row.text}
                    </a>
                  </div>
                </li>
              ))}
              {[
                { icon: "pin", label: contact.labels.showroom, text: CONTACT.address },
                { icon: "clock", label: contact.labels.hours, text: contact.hoursValue },
              ].map((row) => (
                <li key={row.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow/10">
                    <Icon name={row.icon} className="h-4 w-4 text-yellow" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-yellow">{row.label}</p>
                    <p className="mt-0.5 text-sm text-muted">{row.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Reassurance */}
            <div className="mt-10 rounded-2xl border border-yellow/20 bg-paper-2 p-5">
              <p className="text-sm leading-relaxed text-muted">
                {contact.reassurance.body}
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-line bg-paper-2 p-6 sm:p-8">
              <h2 className="font-display italic text-2xl font-light text-ink sm:text-3xl">
                {contact.form.heading}
              </h2>
              <p className="mt-2 text-sm text-muted">{contact.form.sub}</p>
              <div className="mt-6">
                <EnquiryForm
                  form={contact.form}
                  whatsappMessage={common.whatsappPrefill}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </V2Section>
    </>
  );
}
