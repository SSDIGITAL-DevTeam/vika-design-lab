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
import type { ViewProps } from "@/components/types";
import { Eyebrow, Section } from "./ui";
import { CtaSection } from "./cta-section";
import { PortfolioMarquee } from "./portfolio-marquee";

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
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(280px, 44vw, 420px)" }}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/65 via-ink/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="container-page">
          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <span className="mt-4 block h-1 w-20 bg-yellow" aria-hidden />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

const DESIGNER_PHOTOS = [
  "https://i.pravatar.cc/400?img=11",
  "https://i.pravatar.cc/400?img=47",
  "https://i.pravatar.cc/400?img=8",
  "https://i.pravatar.cc/400?img=15",
];

export function About({ content, design, lang }: ViewProps) {
  const { about } = content;
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");
  const isZh = content.langTag.startsWith("zh");
  return (
    <>
      <PageHeader
        image="/assets/component/About%20Us.png"
        title={about.title}
        subtitle={about.subtitle}
      />

      {/* ── Founder Story ──────────────────────────────────────── */}
      <Section bordered>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:items-center">
          {/* Photo */}
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/home/homepage-section4.png"
              alt=""
              loading="lazy"
              className="w-full object-cover"
              style={{ maxHeight: "520px" }}
            />
          </Reveal>
          {/* Milestone list */}
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {about.storyLabel}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
                {isZh ? "创办人的初心" : "Founder Story"}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-7">
              {about.story.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-5 items-start">
                    <span
                      className="shrink-0 font-mono text-3xl font-black leading-none text-yellow-deep"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ink-soft sm:text-base">{p}</p>
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
                  — {about.founderQuote.author}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ── Mission & Vision — image backdrop ─────────────────── */}
      <div className="relative overflow-hidden border-t border-line">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/portfolio/landed/landed4.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/78" />
        <div className="relative container-page py-20 sm:py-24 lg:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-20">
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                <span className="h-px w-6 bg-yellow" aria-hidden />
                {about.missionLabel}
              </p>
              <p className="mt-5 max-w-md text-xl font-medium leading-snug text-paper sm:text-2xl">
                {about.mission}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
                <span className="h-px w-6 bg-yellow" aria-hidden />
                {about.visionLabel}
              </p>
              <p className="mt-5 max-w-md text-xl font-medium leading-snug text-paper sm:text-2xl">
                {about.vision}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Our Promise Is Backed by a Process ────────────────── */}
      <Section bordered>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:items-center">
          {/* Numbered steps */}
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {isZh ? "施工流程" : "Our Process"}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
                {about.process.heading}
              </h2>
            </Reveal>
            <div className="mt-8 space-y-0 divide-y divide-line border-y border-line">
              {about.process.body.map((step, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-5 py-5 items-start">
                    <span
                      className="shrink-0 font-mono text-2xl font-black leading-none text-yellow-deep pt-0.5"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-soft sm:text-base">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          {/* Photo */}
          <Reveal delay={120}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/about-us/About%20us%20Section%203.png"
              alt={about.process.heading}
              className="w-full object-cover"
              style={{ maxHeight: "480px" }}
            />
          </Reveal>
        </div>
      </Section>

      {/* ── Meet Our Designer ──────────────────────────────────── */}
      <Section bordered>
        <Reveal>
          <div className="mb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {isZh ? "我们的团队" : "Our Team"}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">
              {about.designers.heading}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              {about.designers.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {about.designers.team.map((member, i) => (
            <Reveal key={member.name} delay={i * 80} className="bg-paper">
              <div className="flex flex-col">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={DESIGNER_PHOTOS[i]}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    loading="lazy"
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
      </Section>

      {/* ── CTA ───────────────────────────────────────────────── */}
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

      {/* Core services — alternating image rows */}
      <Section bordered>
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{services.coreEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{services.coreHeading}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.coreSub}</p>
          </div>
        </Reveal>
        <div className="divide-y divide-line border-y border-line">
          {services.core.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 60}>
              <div className={`grid lg:grid-cols-[2fr_3fr] ${i % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
                {/* Photo */}
                <div className="relative min-h-52 overflow-hidden lg:min-h-72">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CORE_SERVICE_PHOTOS[i]}
                    alt={svc.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                {/* Content */}
                <article className="flex flex-col justify-center p-7 lg:p-10">
                  <Icon name={svc.icon} className="h-7 w-7 text-yellow-deep" />
                  <h3 className="mt-4 text-xl font-semibold text-ink">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{svc.body}</p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-muted">{svc.includedLabel}</p>
                  <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {svc.included.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-sm text-ink-soft">
                        <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-yellow-deep" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Portfolio section header + marquee ─────────────── */}
      <Section bordered>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {isZh ? "项目案例" : "Our Work"}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">
            {isZh ? "从组屋到有地住宅，遍布全新加坡。" : "From HDB to landed, built across Singapore."}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
            {isZh ? "每一个空间，都围绕生活而设计。" : "Every project is designed around the people who actually live in it."}
          </p>
        </Reveal>
      </Section>
      <PortfolioMarquee />

      {/* Speciality — visual photo grid */}
      <Section bordered>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{services.specialityEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">{services.specialityHeading}</h2>
          {services.specialityIntro && (
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{services.specialityIntro}</p>
          )}
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.speciality.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group border border-line overflow-hidden">
                <div className="relative aspect-4/3 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={SPECIALITY_PHOTOS[i]}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <Icon name={s.icon} className="h-5 w-5 text-yellow-deep" />
                  <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Materials */}
      <Section bordered>
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{services.materialsEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{services.materials.heading}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.materials.sub}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
          {services.materials.specs.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="bg-paper">
              <div className="h-full p-6 sm:p-8">
                <Icon name={card.icon} className="h-8 w-8 text-ink" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Payment + refund */}
      <Section bordered>
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{services.pricingEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{services.payment.heading}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.payment.sub}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
          {services.payment.milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 100} className="bg-paper">
              <div className="p-6 sm:p-8">
                <Icon name={m.icon} className="h-7 w-7 text-yellow-deep" />
                <h3 className="mt-4 text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <figure className="mt-8 border border-ink bg-yellow p-7">
            <blockquote className="text-xl font-medium leading-snug text-ink">
              {services.payment.refundQuote}
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-ink/80">
              {services.payment.refundNote}
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      <CtaSection
        heading={services.cta.heading}
        sub={services.cta.sub}
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
      <Section bordered className="pt-10!">
        <PortfolioGrid
          filters={portfolio.filters}
          captionPrefix={portfolio.captionPrefix}
          detailLabels={portfolio.albumDetailLabels}
        />
      </Section>
      <CtaSection
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

      <Section bordered className="pt-10!">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <Reveal>
            <Eyebrow>{contact.detailsHeading}</Eyebrow>
            <p className="mt-4 text-base text-muted">{contact.detailsNote}</p>
            <ul className="mt-6 space-y-4">
              <ContactRow icon="whatsapp" label={contact.labels.whatsapp}>
                <a
                  href={buildWhatsAppLink(common.whatsappPrefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-deep"
                >
                  {CONTACT.phone}
                </a>
              </ContactRow>
              <ContactRow icon="mail" label={contact.labels.email}>
                <a href={CONTACT.emailHref} className="hover:text-yellow-deep">
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

          {/* Form */}
          <Reveal delay={120}>
            <div className="border border-line p-5 sm:p-7">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
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
      </Section>

      {/* Reassurance */}
      <Section bordered>
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">
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
                    className="mt-0.5 h-5 w-5 shrink-0 text-yellow-deep"
                  />
                  <span className="text-sm font-medium text-ink">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* Map */}
      <Section bordered>
        <Reveal>
          <Eyebrow>{contact.map.heading}</Eyebrow>
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
      </Section>
    </>
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
      <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-ink" />
      <div>
        <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="text-ink">{children}</span>
      </div>
    </li>
  );
}
