"use client";

// Catches errors thrown by the root layout itself (e.g. [design]/[lang]/layout.tsx
// failing before Header/Footer even render). Must supply its own <html>/<body>
// and stays deliberately self-contained — it shouldn't depend on the same
// components that may have just crashed.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

type FallbackLocale = "en" | "zh" | "ms";

const COPY: Record<FallbackLocale, { eyebrow: string; heading: string; sub: string; retry: string; home: string }> = {
  en: {
    eyebrow: "Error",
    heading: "Something went wrong.",
    sub: "Please try again, or contact us if the problem keeps happening.",
    retry: "Try again",
    home: "Back to home",
  },
  zh: {
    eyebrow: "出错了",
    heading: "出了点问题。",
    sub: "请重试，如果问题持续发生，欢迎与我们联系。",
    retry: "重试",
    home: "返回首页",
  },
  ms: {
    eyebrow: "Ralat",
    heading: "Ada sedikit masalah.",
    sub: "Sila cuba lagi, atau hubungi kami jika masalah ini berterusan.",
    retry: "Cuba lagi",
    home: "Kembali ke laman utama",
  },
};

function detectLang(pathname: string | null): FallbackLocale {
  if (pathname?.startsWith("/zh")) return "zh";
  if (pathname?.startsWith("/ms")) return "ms";
  return "en";
}

export default function GlobalError({
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
    <html lang={lang}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {t.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
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
          <a
            href={`/${lang}`}
            className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:bg-ink-soft"
          >
            {t.home}
          </a>
        </div>
      </body>
    </html>
  );
}
