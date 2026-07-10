"use client";

// The 404 page (app/global-not-found.tsx) can't know which locale a visitor
// meant to reach — the URL never matched a route, so there are no params.
// usePathname() still reflects the actual requested path even during this
// fallback's server render, so we use it to pick en vs zh content client-side.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header, Footer } from "@/components/v1";
import { pagePath } from "@/lib/site";
import type { SiteContent } from "@/content";
import { CtaButton } from "@/components/v1/ui";

export function NotFoundContent({
  contentEn,
  contentZh,
}: {
  contentEn: SiteContent;
  contentZh: SiteContent;
}) {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh") ?? false;
  const lang = isZh ? "zh" : "en";
  const content = isZh ? contentZh : contentEn;
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
            {isZh ? "页面走丢了。" : "This page took a wrong turn."}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            {isZh
              ? "你要找的页面不存在，或者已经被移动。"
              : "The page you’re looking for doesn’t exist or may have moved."}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaButton href={home}>{isZh ? "返回首页" : "Back to home"}</CtaButton>
            <CtaButton href={portfolio} variant="secondary">
              {isZh ? "查看作品" : "View our work"}
            </CtaButton>
          </div>
        </div>
      </main>
      <Footer content={content} lang={lang} />
    </>
  );
}
