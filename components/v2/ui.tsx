import Link from "next/link";
import { Icon } from "@/components/shared/icons";

export function GoldEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-yellow">
      <span className="h-px w-8 bg-yellow opacity-60" aria-hidden />
      {children}
    </p>
  );
}

export function GoldButton({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  const base =
    variant === "primary"
      ? "inline-flex bg-yellow text-paper hover:bg-yellow-deep"
      : "inline-flex border border-yellow/60 text-yellow hover:border-yellow hover:bg-yellow/8";
  const cls = `${base} transition-all duration-200 ${className}`;
  const inner = (
    <span className="inline-flex min-h-12 w-full items-center justify-center gap-2 px-7 text-sm font-medium tracking-wide">
      {children}
      <Icon name="arrow" className="h-4 w-4 shrink-0" />
    </span>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

export function V2Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-(--section-y) ${className}`}>
      {children}
    </section>
  );
}

export function V2Cta({
  children,
  image = "/assets/portfolio/landed/landed2.jpg",
}: {
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="relative container-page py-(--section-y) text-center [&_h2]:text-white [&_p]:text-white/70">
        {children}
      </div>
    </div>
  );
}
