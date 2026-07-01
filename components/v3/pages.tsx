import {
  CONTACT,
  buildWhatsAppLink,
  mapsEmbedSrc,
  pagePath,
} from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import { Reveal } from "@/components/shared/reveal";
import { PortfolioMarquee } from "@/components/v1/portfolio-marquee";
import type { ViewProps } from "@/components/types";
import { GoldLabel, V3Section } from "./ui";

const DESIGNER_PHOTOS = [
  "https://i.pravatar.cc/400?img=11",
  "https://i.pravatar.cc/400?img=47",
  "https://i.pravatar.cc/400?img=8",
  "https://i.pravatar.cc/400?img=15",
];

const CORE_SERVICE_PHOTOS = [
  "/assets/portfolio/hdb/hdb3.jpg",
  "/assets/portfolio/hdb/hdb4.jpg",
  "/assets/portfolio/condo/condo3.jpg",
  "/assets/portfolio/condo/condo4.jpg",
];

const SPECIALITY_PHOTOS = [
  "/assets/portfolio/landed/landed3.jpg",
  "/assets/portfolio/landed/landed4.jpg",
  "/assets/portfolio/landed/landed1.jpg",
  "/assets/portfolio/landed/landed2.jpg",
  "/assets/portfolio/condo/condo2.jpg",
];

function PageHeader({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative flex min-h-[40vh] items-end sm:min-h-[44vh]">
      <img
        src={image}
        alt=""
        aria-hidden
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/10 to-black/20" />
      <div className="relative container-page w-full pb-14 pt-36">
        <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-wide text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-4 h-0.5 w-12 bg-yellow" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

function V3CtaSection({
  heading,
  sub,
  primary,
  primaryHref,
  secondary,
  secondaryHref,
  secondaryExternal,
}: {
  heading: string;
  sub: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  secondaryExternal?: boolean;
}) {
  return (
    <section className="bg-yellow pt-14 sm:pt-20">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-wide text-black sm:text-4xl">
                {heading}
              </h2>
              <p className="mt-5 max-w-lg text-sm font-medium leading-relaxed text-black/55 sm:text-base">
                {sub}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 lg:justify-end">
              <a
                href={primaryHref}
                className="inline-flex min-h-12 items-center justify-center border-2 border-black px-8 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-black transition-colors duration-200 hover:bg-black hover:text-yellow sm:min-w-48"
              >
                {primary}
              </a>
              <a
                href={secondaryHref}
                target={secondaryExternal ? "_blank" : undefined}
                rel={secondaryExternal ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-12 items-center font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-black/70 transition-opacity duration-200 hover:opacity-100"
              >
                {secondary}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative mt-10 sm:mt-12 lg:mt-14">
            <div className="overflow-hidden">
              <img
                src="/assets/images/home/Frame 4.png"
                alt=""
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-yellow" />
      <div>
        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="text-ink">{children}</span>
      </div>
    </li>
  );
}

export function About({ content, design, lang }: ViewProps) {
  const { about } = content;
  const isZh = lang === "zh";
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");

  return (
    <>
      <PageHeader
        image="/assets/component/About%20Us.png"
        title={about.title}
        subtitle={about.subtitle}
      />

      {/* Founder Story */}
      <div className="bg-paper-2">
        <V3Section>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-center">
            <Reveal>
              <div className="overflow-hidden">
                <img
                  src="/assets/images/home/homepage-section4.png"
                  alt=""
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ maxHeight: "520px" }}
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <GoldLabel>{about.storyLabel}</GoldLabel>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl lg:text-4xl">
                  {isZh ? "\u521b\u529e\u4eba\u7684\u6545\u4e8b" : "Founder Story"}
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {about.story.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="flex items-start gap-5">
                      <span
                        className="shrink-0 font-mono text-lg font-bold tracking-wider text-yellow/70 pt-0.5"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-muted sm:text-base">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={300}>
                <figure className="mt-8 border-l-2 border-yellow pl-4">
                  <blockquote className="text-sm italic leading-relaxed text-muted">
                    &ldquo;{about.founderQuote.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                    &mdash; {about.founderQuote.author}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </V3Section>
      </div>

      {/* Mission & Vision &mdash; image backdrop */}
      <div className="relative overflow-hidden border-t border-line">
        <img
          src="/assets/portfolio/landed/landed4.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/55 to-black/70" />
        <div className="relative container-page py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-20">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="h-px w-6 bg-yellow" aria-hidden />
                {about.missionLabel}
              </p>
              <p className="mt-5 max-w-md text-xl font-medium leading-snug text-white sm:text-2xl">
                {about.mission}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                <span className="h-px w-6 bg-yellow" aria-hidden />
                {about.visionLabel}
              </p>
              <p className="mt-5 max-w-md text-xl font-medium leading-snug text-white sm:text-2xl">
                {about.vision}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Our Process */}
      <div className="bg-paper-2">
        <V3Section>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:items-center">
            <div>
              <Reveal>
                <GoldLabel>{isZh ? "\u65bd\u5de5\u6d41\u7a0b" : "Our Process"}</GoldLabel>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl lg:text-4xl">
                  {about.process.heading}
                </h2>
              </Reveal>
              <div className="mt-8 space-y-0 divide-y divide-line">
                {about.process.body.map((step, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="flex items-start gap-5 py-5">
                      <span
                        className="shrink-0 font-mono text-lg font-bold tracking-wider text-yellow/70 pt-0.5"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1 text-sm leading-relaxed text-muted sm:text-base">{step}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={120}>
              <img
                src="/assets/images/about-us/About%20us%20Section%203.png"
                alt={about.process.heading}
                loading="lazy"
                className="w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </Reveal>
          </div>
        </V3Section>
      </div>

      {/* Meet Our Team */}
      <V3Section>
        <Reveal>
          <GoldLabel>{isZh ? "\u6211\u4eec\u7684\u56e2\u961f" : "Our Team"}</GoldLabel>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
            {about.designers.heading}
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
            {about.designers.intro}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {about.designers.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80} className="bg-paper">
              <div className="flex flex-col">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={DESIGNER_PHOTOS[i]}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <span className="block h-px w-8 bg-yellow" aria-hidden />
                  <p className="mt-3 text-sm font-semibold leading-tight text-ink sm:text-base">
                    {member.name}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted sm:text-[11px]">
                    {member.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </V3Section>

      <V3CtaSection
        heading={content.services.cta.heading}
        sub={content.services.cta.sub ?? ""}
        primary={content.services.cta.primary}
        primaryHref={toContact}
        secondary={content.services.cta.secondary}
        secondaryHref={toPortfolio}
      />
    </>
  );
}

export function Services({ content, design, lang }: ViewProps) {
  const { services } = content;
  const isZh = lang === "zh";
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");

  return (
    <>
      <PageHeader
        image="/assets/component/Services.png"
        title={services.title}
        subtitle={services.subtitle}
      />

      {/* Core Services */}
      <V3Section>
        <Reveal>
          <GoldLabel>{services.coreEyebrow}</GoldLabel>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
            {services.coreHeading}
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.coreSub}</p>
        </Reveal>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {services.core.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 60}>
              <div className={`grid lg:grid-cols-[2fr_3fr] ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
                <div className="relative min-h-52 overflow-hidden lg:min-h-72">
                  <img
                    src={CORE_SERVICE_PHOTOS[i]}
                    alt={svc.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <article className="flex flex-col justify-center p-7 lg:p-10">
                  <Icon name={svc.icon} className="h-7 w-7 text-yellow" />
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-wide text-ink">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{svc.body}</p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-yellow">{svc.includedLabel}</p>
                  <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {svc.included.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-sm text-muted">
                        <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-yellow" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </V3Section>

      {/* Portfolio section header + marquee */}
      <div className="bg-paper-2">
        <V3Section>
          <Reveal>
            <GoldLabel>{isZh ? "\u9879\u76ee\u6848\u4f8b" : "Our Work"}</GoldLabel>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
              {isZh ? "\u4ece\u7ec4\u5c4b\u5230\u6709\u5730\u4f4f\u5b85\uff0c\u904d\u5e03\u5168\u5c9a\u3002" : "From HDB to landed, built across Singapore."}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              {isZh ? "\u6bcf\u4e2a\u9879\u76ee\u90fd\u56f4\u7ed5\u771f\u6b63\u5c45\u4f4f\u5176\u4e2d\u7684\u4eba\u800c\u8bbe\u8ba1\u3002" : "Every project is designed around the people who actually live in it."}
            </p>
          </Reveal>
        </V3Section>
        <PortfolioMarquee />
      </div>

      {/* Speciality Services */}
      <V3Section>
        <Reveal>
          <GoldLabel>{services.specialityEyebrow}</GoldLabel>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">{services.specialityHeading}</h2>
          {services.specialityIntro && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{services.specialityIntro}</p>
          )}
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.speciality.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group border border-line overflow-hidden">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={SPECIALITY_PHOTOS[i]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <Icon name={s.icon} className="h-5 w-5 text-yellow" />
                  <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </V3Section>

      {/* Materials */}
      <div className="bg-paper-2">
        <V3Section>
          <Reveal>
            <GoldLabel>{services.materialsEyebrow}</GoldLabel>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">{services.materials.heading}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.materials.sub}</p>
          </Reveal>
          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
            {services.materials.specs.map((card, i) => (
              <Reveal key={card.title} delay={i * 100} className="bg-paper">
                <div className="h-full p-6 sm:p-8">
                  <Icon name={card.icon} className="h-8 w-8 text-yellow" />
                  <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </V3Section>
      </div>

      {/* Payment */}
      <V3Section>
        <Reveal>
          <GoldLabel>{services.pricingEyebrow}</GoldLabel>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">{services.payment.heading}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.payment.sub}</p>
        </Reveal>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
          {services.payment.milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 100} className="bg-paper">
              <div className="p-6 sm:p-8">
                <Icon name={m.icon} className="h-7 w-7 text-yellow" />
                <h3 className="mt-4 text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <figure className="mt-8 bg-yellow p-7">
            <blockquote className="text-xl font-medium leading-snug text-black">
              &ldquo;{services.payment.refundQuote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-black/80">
              {services.payment.refundNote}
            </figcaption>
          </figure>
        </Reveal>
      </V3Section>

      <V3CtaSection
        heading={services.cta.heading}
        sub={services.cta.sub ?? ""}
        primary={services.cta.primary}
        primaryHref={toContact}
        secondary={services.cta.secondary}
        secondaryHref={toPortfolio}
      />
    </>
  );
}

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
      <V3Section>
        <PortfolioGrid
          filters={portfolio.filters}
          captionPrefix={portfolio.captionPrefix}
        />
      </V3Section>
      <V3CtaSection
        heading={portfolio.cta.heading}
        sub={portfolio.cta.body}
        primary={portfolio.cta.primary}
        primaryHref={toContact}
        secondary={portfolio.cta.secondary}
        secondaryHref={buildWhatsAppLink(common.whatsappPrefill)}
        secondaryExternal
      />
    </>
  );
}

export function Contact({ content }: ViewProps) {
  const { contact, common } = content;

  return (
    <>
      <PageHeader
        image="/assets/component/Contact.png"
        title={contact.title}
        subtitle={contact.subtitle}
      />

      {/* Details + Form */}
      <V3Section>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <GoldLabel>{contact.detailsHeading}</GoldLabel>
            <p className="mt-4 text-base text-muted">{contact.detailsNote}</p>
            <ul className="mt-6 space-y-4">
              <ContactRow icon="whatsapp" label={contact.labels.whatsapp}>
                <a
                  href={buildWhatsAppLink(common.whatsappPrefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow transition-colors duration-200"
                >
                  {CONTACT.phone}
                </a>
              </ContactRow>
              <ContactRow icon="mail" label={contact.labels.email}>
                <a href={CONTACT.emailHref} className="hover:text-yellow transition-colors duration-200">
                  {CONTACT.email}
                </a>
              </ContactRow>
              <ContactRow icon="pin" label={contact.labels.showroom}>
                {CONTACT.address}
              </ContactRow>
              <ContactRow icon="clock" label={contact.labels.hours}>
                {contact.hoursValue}
              </ContactRow>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-line p-5 sm:p-7">
              <h2 className="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
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
      </V3Section>

      {/* Reassurance */}
      <div className="bg-paper-2">
        <V3Section>
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="text-lg leading-relaxed text-muted sm:text-xl">
                {contact.reassurance.body}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="space-y-3">
                {contact.reassurance.icons.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 border border-line p-4"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-5 w-5 shrink-0 text-yellow"
                    />
                    <span className="text-sm font-medium text-ink">{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </V3Section>
      </div>

      {/* Map */}
      <div className="border-t border-line">
        <V3Section>
          <Reveal>
            <GoldLabel>{contact.map.heading}</GoldLabel>
            <div className="mt-6 overflow-hidden border border-line">
              <iframe
                title={contact.map.heading}
                src={mapsEmbedSrc()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full sm:h-90"
              />
            </div>
            <p className="mt-4 max-w-2xl text-sm text-muted">
              {contact.map.directions}
            </p>
          </Reveal>
        </V3Section>
      </div>
    </>
  );
}
