"use client";

// Runtime errors thrown while rendering a page here — the layout above
// (Header/Footer) has already rendered successfully, so it stays visible;
// only the page content area is replaced with this fallback.
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/designs";

const COPY: Record<Locale, { eyebrow: string; heading: string; sub: string; retry: string; home: string }> = {
  en: {
    eyebrow: "Error",
    heading: "Something went wrong.",
    sub: "Please try again. If the problem keeps happening, feel free to contact us.",
    retry: "Try again",
    home: "Back to home",
  },
  zh: {
    eyebrow: "出错了",
    heading: "这个页面出了点问题。",
    sub: "请重试，如果问题持续发生，欢迎与我们联系。",
    retry: "重试",
    home: "返回首页",
  },
  ms: {
    eyebrow: "Ralat",
    heading: "Ada sedikit masalah.",
    sub: "Sila cuba lagi. Jika masalah ini berterusan, sila hubungi kami.",
    retry: "Cuba lagi",
    home: "Kembali ke laman utama",
  },
};

function detectLang(pathname: string | null): Locale {
  if (pathname?.startsWith("/zh")) return "zh";
  if (pathname?.startsWith("/ms")) return "ms";
  return "en";
}

export default function LocaleError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const pathname = usePathname();
  const lang = detectLang(pathname);
  const t = COPY[lang];

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {t.eyebrow}
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
        {t.heading}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        {t.sub}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex min-h-12 items-center justify-center border border-ink px-6 text-sm font-semibold tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          {t.retry}
        </button>
        <Link
          href={`/${lang}`}
          className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:bg-ink-soft"
        >
          {t.home}
        </Link>
      </div>
    </div>
  );
}
