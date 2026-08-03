"use client";

// The 404 page (app/global-not-found.tsx) can't know which locale a visitor
// meant to reach — the URL never matched a route, so there are no params.
// usePathname() still reflects the actual requested path even during this
// fallback's server render, so we use it to pick the right content client-side.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header, Footer } from "@/components/v1";
import { pagePath } from "@/lib/site";
import type { Locale } from "@/lib/designs";
import type { SiteContent } from "@/content";
import { CtaButton } from "@/components/v1/ui";

const COPY: Record<Locale, { heading: string; sub: string; home: string; portfolio: string }> = {
  en: {
    heading: "This page took a wrong turn.",
    sub: "The page you’re looking for doesn’t exist or may have moved.",
    home: "Back to home",
    portfolio: "View our work",
  },
  zh: {
    heading: "页面走丢了。",
    sub: "你要找的页面不存在，或者已经被移动。",
    home: "返回首页",
    portfolio: "查看作品",
  },
  ms: {
    heading: "Halaman ini tersesat.",
    sub: "Halaman yang anda cari tidak wujud atau mungkin telah dipindahkan.",
    home: "Kembali ke laman utama",
    portfolio: "Lihat hasil kerja kami",
  },
};

function detectLang(pathname: string | null): Locale {
  if (pathname?.startsWith("/zh")) return "zh";
  if (pathname?.startsWith("/ms")) return "ms";
  return "en";
}

export function NotFoundContent({
  contentEn,
  contentZh,
  contentMs,
}: {
  contentEn: SiteContent;
  contentZh: SiteContent;
  contentMs: SiteContent;
}) {
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const content = { en: contentEn, zh: contentZh, ms: contentMs }[lang];
  const t = COPY[lang];
  const home = pagePath(lang, "home");
  const portfolio = pagePath(lang, "portfolio");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Header content={content} lang={lang} />
      <main className="flex flex-1 items-center">
        <div className="container-page py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            404
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-5xl">
            {t.heading}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            {t.sub}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={home}>{t.home}</CtaButton>
            <CtaButton href={portfolio} variant="secondary">
              {t.portfolio}
            </CtaButton>
          </div>
        </div>
      </main>
      <Footer content={content} lang={lang} />
    </>
  );
}
