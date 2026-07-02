"use client";

// Catches errors thrown by the root layout itself (e.g. [design]/[lang]/layout.tsx
// failing before Header/Footer even render). Must supply its own <html>/<body>
// and stays deliberately self-contained — it shouldn't depend on the same
// components that may have just crashed.
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh") ?? false;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang={isZh ? "zh" : "en"}>
      <body className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {isZh ? "出错了" : "Error"}
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          {isZh ? "出了点问题。" : "Something went wrong."}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          {isZh
            ? "请重试，如果问题持续发生，欢迎与我们联系。"
            : "Please try again, or contact us if the problem keeps happening."}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex min-h-12 items-center justify-center border border-ink px-6 text-sm font-semibold tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            {isZh ? "重试" : "Try again"}
          </button>
          <a
            href={isZh ? "/zh" : "/en"}
            className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:bg-ink-soft"
          >
            {isZh ? "返回首页" : "Back to home"}
          </a>
        </div>
      </body>
    </html>
  );
}
