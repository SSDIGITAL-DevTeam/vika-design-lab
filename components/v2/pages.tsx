import {
  CONTACT,
  buildWhatsAppLink,
  mapsEmbedSrc,
  pagePath,
} from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import type { ViewProps } from "@/components/types";
import { BigButton, Display, Kicker, Section } from "./ui";

function PageHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Section className="!pb-8 !pt-10">
      <Kicker>{kicker}</Kicker>
      <Display as="h1" className="mt-6 max-w-[18ch] text-[clamp(2.5rem,8vw,6rem)]">
        {title}
      </Display>
      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft">
        {subtitle}
      </p>
    </Section>
  );
}

export function About({ content }: ViewProps) {
  const { about, nav } = content;
  return (
    <>
      <PageHeader kicker={nav.about} title={about.title} subtitle={about.subtitle} />

      <Section>
        <Kicker>{about.storyLabel}</Kicker>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <Display className="text-[clamp(1.6rem,3.5vw,2.6rem)]">
            {about.story[0]}
          </Display>
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>{about.story[1]}</p>
            <p>{about.story[2]}</p>
          </div>
        </div>

        <figure className="mt-10 rounded-[2rem] bg-yellow p-8 sm:p-12">
          <blockquote className="font-display text-[clamp(1.5rem,4vw,2.6rem)] font-black leading-tight tracking-tight text-ink">
            “{about.founderQuote.quote}”
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-wider text-ink/70">
            {about.founderQuote.author}
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-5 text-lg leading-relaxed text-ink-soft md:grid-cols-2">
          <p>{about.story[3]}</p>
          <p>{about.story[4]}</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[var(--radius)] bg-paper-2 p-8">
            <Kicker>{about.missionLabel}</Kicker>
            <p className="mt-5 text-2xl font-bold leading-snug text-ink">
              {about.mission}
            </p>
          </div>
          <div className="rounded-[var(--radius)] bg-ink p-8 text-paper">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-paper/70">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow" />
              {about.visionLabel}
            </p>
            <p className="mt-5 text-2xl font-bold leading-snug">{about.vision}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-paper-2 p-8 sm:p-12">
          <Kicker>{about.process.heading}</Kicker>
          <div className="mt-8 grid gap-6 text-lg leading-relaxed text-ink-soft md:grid-cols-3">
            {about.process.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

export function Services({ content, design, lang }: ViewProps) {
  const { services, nav } = content;
  const toContact = pagePath(design, lang, "contact");
  const toPortfolio = pagePath(design, lang, "portfolio");
  return (
    <>
      <PageHeader
        kicker={nav.services}
        title={services.title}
        subtitle={services.subtitle}
      />

      <Section>
        <Kicker>{services.coreHeading}</Kicker>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.core.map((svc, i) => (
            <article
              key={svc.title}
              className="rounded-[var(--radius)] bg-paper-2 p-8"
            >
              <span className="font-display text-3xl font-black text-yellow-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-ink">{svc.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{svc.body}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-ink">
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
          ))}
        </div>
      </Section>

      <Section>
        <Kicker>{services.specialityHeading}</Kicker>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          {services.specialityIntro}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.speciality.map((s) => (
            <article
              key={s.title}
              className="rounded-[var(--radius)] border-2 border-line p-7 transition-colors duration-200 hover:border-ink"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow text-ink">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <Display className="text-[clamp(1.8rem,4vw,3rem)]">
            {services.materials.heading}
          </Display>
          <div className="space-y-5 self-end text-lg leading-relaxed text-ink-soft">
            {services.materials.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-ink p-8 text-paper sm:p-12">
          <Kicker>{services.payment.heading}</Kicker>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80">
            {services.payment.body}
          </p>
          <figure className="mt-8 rounded-[var(--radius)] bg-yellow p-7 text-ink">
            <blockquote className="text-xl font-bold leading-snug">
              “{services.payment.refundQuote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-ink/80">
              {services.payment.refundNote}
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section className="text-center">
        <Display className="mx-auto max-w-3xl text-[clamp(2rem,5vw,3.5rem)]">
          {services.cta.heading}
        </Display>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
          {services.cta.sub}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BigButton href={toContact}>{services.cta.primary}</BigButton>
          <BigButton href={toPortfolio} variant="secondary">
            {services.cta.secondary}
          </BigButton>
        </div>
      </Section>
    </>
  );
}

export function Portfolio({ content, design, lang }: ViewProps) {
  const { portfolio, nav, common } = content;
  const toContact = pagePath(design, lang, "contact");
  return (
    <>
      <PageHeader
        kicker={nav.portfolio}
        title={portfolio.title}
        subtitle={portfolio.subtitle}
      />
      <Section className="!pt-0">
        <PortfolioGrid
          filters={portfolio.filters}
          captionPrefix={portfolio.captionPrefix}
        />
      </Section>
      <Section>
        <div className="rounded-[2rem] bg-yellow p-8 text-center sm:p-14">
          <Display className="mx-auto max-w-2xl text-[clamp(2rem,5vw,3.5rem)]">
            {portfolio.cta.heading}
          </Display>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/80">
            {portfolio.cta.body}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <BigButton href={toContact}>{portfolio.cta.primary}</BigButton>
            <BigButton
              href={buildWhatsAppLink(common.whatsappPrefill)}
              variant="secondary"
              external
            >
              {portfolio.cta.secondary}
            </BigButton>
          </div>
        </div>
      </Section>
    </>
  );
}

export function Contact({ content }: ViewProps) {
  const { contact, common, nav } = content;
  return (
    <>
      <PageHeader
        kicker={nav.contact}
        title={contact.title}
        subtitle={contact.subtitle}
      />

      <Section className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
          <div className="rounded-[var(--radius)] bg-paper-2 p-8">
            <Kicker>{contact.detailsHeading}</Kicker>
            <p className="mt-4 text-muted">{contact.detailsNote}</p>
            <ul className="mt-6 space-y-5">
              <ContactRow icon="phone" label={contact.labels.phone}>
                <a href={CONTACT.phoneHref} className="hover:text-yellow-deep">
                  {CONTACT.phone}
                </a>
              </ContactRow>
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
          </div>

          <div className="rounded-[var(--radius)] border-2 border-ink p-8">
            <h2 className="font-display text-3xl font-black tracking-tight text-ink">
              {contact.form.heading}
            </h2>
            <p className="mt-2 text-muted">{contact.form.sub}</p>
            <div className="mt-6">
              <EnquiryForm
                form={contact.form}
                whatsappMessage={common.whatsappPrefill}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-ink p-8 text-paper sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <p className="text-2xl font-bold leading-snug">
              {contact.reassurance.body}
            </p>
            <ul className="space-y-3">
              {contact.reassurance.icons.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-yellow text-ink">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-paper/90">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <Kicker>{contact.map.heading}</Kicker>
        <div className="mt-6 overflow-hidden rounded-[var(--radius)]">
          <iframe
            title={contact.map.heading}
            src={mapsEmbedSrc()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full"
          />
        </div>
        <p className="mt-4 max-w-2xl text-muted">{contact.map.directions}</p>
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
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <div>
        <span className="block text-xs font-bold uppercase tracking-wider text-muted">
          {label}
        </span>
        <span className="font-medium text-ink">{children}</span>
      </div>
    </li>
  );
}
