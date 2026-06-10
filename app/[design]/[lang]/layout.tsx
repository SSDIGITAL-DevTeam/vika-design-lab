import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Archivo, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import "../../globals.css";
import "lenis/dist/lenis.css";
import {
  allDesignLocaleParams,
  hasDesign,
  hasLocale,
} from "@/lib/designs";
import { getContent } from "@/content";
import { getKit } from "@/components/registry";
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

const fontVars = `${inter.variable} ${archivo.variable} ${mono.variable} ${notoSC.variable}`;

export async function generateStaticParams() {
  return allDesignLocaleParams();
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[design]/[lang]">): Promise<Metadata> {
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

export default async function DesignLocaleLayout({
  children,
  params,
}: LayoutProps<"/[design]/[lang]">) {
  const { design, lang } = await params;
  if (!hasDesign(design) || !hasLocale(lang)) notFound();

  const content = getContent(lang);
  const { Header, Footer } = getKit(design);

  return (
    <html lang={lang} data-design={design} className={fontVars}>
      <body className="flex min-h-screen flex-col">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          {content.common.skipToContent}
        </a>
        <Header content={content} design={design} lang={lang} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer content={content} design={design} lang={lang} />
        <WhatsAppFloat
          message={content.common.whatsappPrefill}
          label={content.common.whatsappTooltip}
        />
      </body>
    </html>
  );
}
