import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Archivo, IBM_Plex_Mono, Noto_Sans_SC, Cormorant_Garamond, Cinzel } from "next/font/google";
import "../globals.css";
import "lenis/dist/lenis.css";
import { allLocaleParams, hasLocale } from "@/lib/designs";
import { getContent } from "@/content";
import { Header, Footer } from "@/components/v1";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";
import { SmoothScroll } from "@/components/shared/smooth-scroll";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-label",
  display: "swap",
});
const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
  preload: false,
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: false,
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
  preload: false,
});

const fontVars = `${inter.variable} ${archivo.variable} ${mono.variable} ${notoSC.variable} ${cormorant.variable} ${cinzel.variable}`;

export async function generateStaticParams() {
  return allLocaleParams();
}

// [lang] is the first segment under app/, so an invalid value here needs to
// be treated as a genuinely unmatched route (same path as e.g. /foo/bar) for
// app/global-not-found.tsx to catch it — a notFound() thrown from inside this
// layout does not reliably bubble to it. Restricting params to exactly the
// locales from generateStaticParams makes Next 404 at the router level
// instead of ever entering this layout with an invalid `lang`.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { brand } = getContent(lang);
  return {
    title: {
      default: `${brand.name} — ${brand.tagline}`,
      template: `%s · ${brand.name}`,
    },
    description: brand.tagline,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const content = getContent(lang);

  return (
    <html lang={lang} className={fontVars}>
      <body className="flex min-h-screen flex-col">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {content.common.skipToContent}
        </a>
        <Header content={content} lang={lang} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer content={content} lang={lang} />
        <WhatsAppFloat
          message={content.common.whatsappPrefill}
          label={content.common.whatsappTooltip}
        />
      </body>
    </html>
  );
}
