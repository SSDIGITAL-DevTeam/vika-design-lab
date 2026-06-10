import Link from "next/link";
import { CONTACT, NAV_KEYS, pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import type { ViewProps } from "@/components/types";
import { Display } from "./ui";

export function Footer({ content, design, lang }: ViewProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8">
      <div className="container-page">
        <div className="rounded-[2rem] bg-ink px-7 py-14 text-paper sm:px-12">
          <Display as="h2" className="max-w-3xl text-[clamp(2rem,6vw,3.5rem)] text-paper">
            {content.brand.tagline}
          </Display>

          <div className="mt-12 grid gap-10 border-t border-paper/15 pt-10 md:grid-cols-3">
            <p className="max-w-sm text-sm leading-relaxed text-paper/70">
              {content.footer.blurb}
            </p>

            <nav aria-label="Footer">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/50">
                {content.footer.navHeading}
              </p>
              <ul className="mt-4 space-y-2">
                {NAV_KEYS.map((key) => (
                  <li key={key}>
                    <Link
                      href={pagePath(design, lang, key)}
                      className="font-semibold text-paper/85 transition-colors duration-200 hover:text-yellow"
                    >
                      {content.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-paper/50">
                {content.footer.contactHeading}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-paper/85">
                <li className="flex items-center gap-2">
                  <Icon name="phone" className="h-4 w-4 text-yellow" />
                  <a href={CONTACT.phoneHref} className="hover:text-yellow">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="mail" className="h-4 w-4 text-yellow" />
                  <a href={CONTACT.emailHref} className="hover:text-yellow">
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
                  <span>{CONTACT.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-10 text-xs text-paper/50">
            © {year} {content.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
