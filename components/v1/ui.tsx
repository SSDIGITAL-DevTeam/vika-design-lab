import Link from "next/link";
import { Icon } from "@/components/shared/icons";

// Small primitives reused across v1 (Swiss Editorial) pages only.

/** Mono, uppercase, tracked label with an index — the Swiss section marker. */
export function Eyebrow({
  index,
  children,
}: {
  index?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
      {index && <span className="text-ink">{index}</span>}
      <span className="h-px w-6 bg-ink" aria-hidden />
      {children}
    </p>
  );
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "yellow";
  external?: boolean;
  className?: string;
}) {
  const base =
    variant === "primary"
      ? "inline-flex bg-ink text-paper hover:bg-ink-soft"
      : variant === "yellow"
        ? "inline-flex bg-yellow text-ink hover:bg-yellow-deep"
        : "inline-flex border border-ink text-ink hover:bg-ink hover:text-paper";
  const cls = `${base} ${className}`;
  const inner = (
    <span className="inline-flex min-h-12 w-full items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide transition-colors duration-200">
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

/** Section wrapper with the Swiss vertical rhythm. */
export function Section({
  children,
  className = "",
  bordered,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`container-page py-(--section-y) ${
        bordered ? "border-t border-line" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}
