import Link from "next/link";
import { CONTACT, NAV_KEYS, pagePath } from "@/lib/site";
import { Icon } from "@/components/shared/icons";
import type { ViewProps } from "@/components/types";

export function Footer({ content, design, lang }: ViewProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper">
      {/* Gold rule */}
      <div className="h-px bg-yellow opacity-20" />
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1.3fr] md:py-20">
        {/* Brand */}
        <div>
          <img
            src="/assets/logo/logo-vika-black.png"
            alt="Vika Design Lab"
            className="h-8 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            {content.footer.blurb}
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Footer">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-yellow">
            {content.footer.navHeading}
          </p>
          <ul className="mt-5 space-y-3">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <Link
                  href={pagePath(design, lang, key)}
                  className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                >
                  {content.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-yellow">
            {content.footer.contactHeading}
          </p>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-yellow" />
              <a href={CONTACT.phoneHref} className="hover:text-ink transition-colors duration-200">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-yellow" />
              <a href={CONTACT.emailHref} className="hover:text-ink transition-colors duration-200">
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

      <div className="border-t border-line">
        <p className="container-page py-5 text-xs text-muted">
          © {year} {content.footer.rights}
        </p>
      </div>
    </footer>
  );
}
