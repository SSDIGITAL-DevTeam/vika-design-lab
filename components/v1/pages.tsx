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
import { StoryTimeline } from "./story-timeline";

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
  const storySteps = [
    isZh ? "起点" : "Opening",
    isZh ? "转折点" : "Turning Point",
    isZh ? "退款承诺" : "Refund Promise",
    isZh ? "从零开始" : "Building From Zero",
    isZh ? "今日" : "Where We Are Today",
  ];

  return (
    <>
      <PageHeader
        image="/assets/component/About%20Us.png"
        title={about.title}
        subtitle={about.subtitle}
      />

      {/* ── Founder Story ──────────────────────────────────────── */}
      <Section bordered className="pb-8 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.6fr] lg:items-start lg:gap-10">
          {/* Sticky label column */}
          <div className="lg:sticky lg:top-28 lg:min-h-[calc(100vh-7rem)]">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {about.storyLabel}
              </p>
              <h2 className="mt-4 max-w-md text-2xl font-semibold leading-tight text-ink sm:mt-6 sm:text-3xl lg:text-4xl">
                {isZh ? "创办人的故事" : "Founder Story"}
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft sm:mt-5 sm:text-base">
                {about.subtitle}
              </p>
            </Reveal>
          </div>

          <StoryTimeline
            steps={storySteps}
            story={about.story}
            founderQuote={about.founderQuote}
          />
        </div>
      </Section>

      {/* ── Mission & Vision ───────────────────────────────────── */}
      <Section bordered>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          <Reveal className="bg-paper">
            <div className="p-6 sm:p-8">
              <Eyebrow>{about.missionLabel}</Eyebrow>
              <p className="mt-4 text-base leading-snug text-ink sm:mt-5 sm:text-xl">
                {about.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="bg-ink">
            <div className="p-6 text-paper sm:p-8">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper/60">
                <span className="h-px w-6 bg-yellow" aria-hidden />
                {about.visionLabel}
              </p>
              <p className="mt-4 text-base leading-snug sm:mt-5 sm:text-xl">
                {about.vision}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Visual break ───────────────────────────────────── */}
      <div
        className="w-full overflow-hidden"
        style={{ height: "clamp(200px, 38vw, 480px)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/portfolio/landed/landed4.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* ── Our Promise Is Backed by a Process ────────────────── */}
      <Section bordered>
        {/* Image + first two paragraphs */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <img
              src="/assets/images/about-us/About%20us%20Section%203.png"
              alt={about.process.heading}
              className="aspect-square w-full max-w-sm object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {isZh ? "施工流程" : "Our Process"}
            </p>
            <h2 className="mt-2 mb-4 text-xl font-semibold text-ink sm:mb-5 sm:text-2xl lg:text-3xl">
              {about.process.heading}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-ink-soft sm:space-y-4 sm:text-base">
              {about.process.body.slice(0, 2).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Commitment block — 3rd paragraph elevated */}
        <Reveal delay={160}>
          <div className="mt-6 grid gap-px bg-ink grid-cols-1 sm:mt-8 md:grid-cols-[auto_1fr]">
            {/* Metric */}
            <div className="flex items-center justify-center gap-4 bg-ink px-8 py-6 md:flex-col md:gap-0 md:px-10 md:py-8 md:text-center">
              <span
                className="block font-mono text-[3rem] font-black leading-none tracking-tight text-yellow sm:text-[3.5rem] md:text-[4.5rem]"
                aria-hidden
              >
                1
              </span>
              <div className="md:mt-1">
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-yellow/70">
                  {isZh ? "个月" : "MONTH"}
                </span>
                <span className="mt-1 hidden font-mono text-[10px] uppercase tracking-widest text-paper/40 md:mt-4 md:block">
                  {isZh ? "目标完工期限" : "TARGET DELIVERY"}
                </span>
              </div>
            </div>
            {/* Text */}
            <div className="bg-ink p-6 sm:p-8 md:p-10">
              <span className="block h-px w-10 bg-yellow" aria-hidden />
              <p className="mt-4 text-sm leading-relaxed text-paper/80 sm:text-base md:text-lg">
                {about.process.body[2]}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-paper/40 sm:mt-5 sm:text-[11px]">
                {isZh
                  ? "超期一个月 → 全额退款，写进合约"
                  : "Delay over 1 month → full refund, in writing"}
              </p>
            </div>
          </div>
        </Reveal>
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

export function Services({ content, design, lang }: ViewProps) {
  const { services } = content;
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
      <Section bordered>
        <Reveal>
          <div className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{services.coreEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-ink sm:text-4xl">{services.coreHeading}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{services.coreSub}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
          {services.core.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 100} className="bg-paper">
              <article className="h-full p-7">
                <span className="font-mono text-xs text-yellow-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {svc.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {svc.body}
                </p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-ink">
                  {svc.includedLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {svc.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-yellow-deep"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Portfolio proof strip ─────────────────────────── */}
      <div className="grid grid-cols-3 gap-1 overflow-hidden">
        {[
          { src: "/assets/portfolio/hdb/hdb3.jpg",      alt: "HDB renovation" },
          { src: "/assets/portfolio/condo/condo3.jpg",   alt: "Condo interior" },
          { src: "/assets/portfolio/landed/landed3.jpg", alt: "Landed home" },
        ].map((img) => (
          <div key={img.src} className="aspect-4/3 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </div>
        ))}
      </div>

      {/* Speciality */}
      <Section bordered>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{services.specialityEyebrow}</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink sm:text-3xl">{services.specialityHeading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {services.specialityIntro}
              </p>
            </div>
          </Reveal>
          <ul className="border-y border-line">
            {services.speciality.map((s, i) => (
              <li key={s.title} className="border-b border-line last:border-0">
                <Reveal delay={i * 80} className="flex items-start gap-4 py-5">
                  <Icon name={s.icon} className="mt-0.5 h-6 w-6 shrink-0 text-ink" />
                  <div>
                    <h3 className="font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
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
            <Reveal key={m.step} delay={i * 100} className="bg-paper">
              <div className="p-6 sm:p-8">
                <span className="font-mono text-xs text-yellow-deep">{m.step}</span>
                <h3 className="mt-2 text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <figure className="mt-8 border border-ink bg-yellow p-7">
            <blockquote className="text-xl font-medium leading-snug text-ink">
              &ldquo;{services.payment.refundQuote}&rdquo;
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
