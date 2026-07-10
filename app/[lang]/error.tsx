"use client";

// Runtime errors thrown while rendering a page here — the layout above
// (Header/Footer) has already rendered successfully, so it stays visible;
// only the page content area is replaced with this fallback.
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  const pathname = usePathname();
  const isZh = pathname?.startsWith("/zh");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-page py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {isZh ? "出错了" : "Error"}
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
        {isZh ? "这个页面出了点问题。" : "Something went wrong."}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
        {isZh
          ? "请重试，如果问题持续发生，欢迎与我们联系。"
          : "Please try again. If the problem keeps happening, feel free to contact us."}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="inline-flex min-h-12 items-center justify-center border border-ink px-6 text-sm font-semibold tracking-wide text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
        >
          {isZh ? "重试" : "Try again"}
        </button>
        <Link
          href={isZh ? "/zh" : "/en"}
          className="inline-flex min-h-12 items-center justify-center bg-ink px-6 text-sm font-semibold tracking-wide text-paper transition-colors duration-200 hover:bg-ink-soft"
        >
          {isZh ? "返回首页" : "Back to home"}
        </Link>
      </div>
    </div>
  );
}
