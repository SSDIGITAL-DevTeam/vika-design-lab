// Handles every unmatched URL and every notFound() call in the app,
// including ones thrown from [design]/[lang]/layout.tsx itself — see the
// `experimental.globalNotFound` flag in next.config.ts. Because it replaces
// normal rendering it can't inherit the [design]/[lang] layout (or its
// params), so it assembles the v1 Header/Footer itself; language is picked
// client-side in NotFoundContent since there's no [lang] param here.
import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { getContent } from "@/content";
import { NotFoundContent } from "@/components/shared/not-found-content";

const inter = Montserrat({
  subsets: ["latin"],
  variable: "--font-inter",
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

export const metadata: Metadata = {
  title: "Page Not Found · Vika Design Lab",
  description: "The page you're looking for doesn't exist.",
};

export default function GlobalNotFound() {
  const contentEn = getContent("en");
  const contentZh = getContent("zh");

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${notoSC.variable}`}>
      <body className="flex min-h-screen flex-col">
        <NotFoundContent contentEn={contentEn} contentZh={contentZh} />
      </body>
    </html>
  );
}
