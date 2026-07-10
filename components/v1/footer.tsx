import Link from "next/link";
import { CONTACT, NAV_KEYS, pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import type { ViewProps } from "@/components/types";

export function Footer({ content, lang }: ViewProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="container-page grid gap-8 py-10 md:gap-10 md:py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <img
            src="/assets/logo/logo-vika-putih.png"
            alt="Vika Design Lab"
            className="h-8 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            {content.footer.blurb}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            {content.footer.navHeading}
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link
                  href={pagePath(lang, key)}
                  className="text-sm text-paper/80 transition-colors duration-200 hover:text-yellow"
                >
                  {content.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
            {content.footer.contactHeading}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
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
      <div className="border-t border-paper/15">
        <p className="container-page py-5 text-xs text-paper/50">
          © {year} {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
