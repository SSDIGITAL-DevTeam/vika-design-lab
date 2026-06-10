import Link from "next/link";
import { Icon } from "@/components/shared/icons";

// Primitives reused across v2 (Exaggerated Minimalism) pages only.

/** Bold uppercase kicker with a yellow dot. */
export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ink-soft">
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow" aria-hidden />
      {children}
    </p>
  );
}

/** Oversized display heading used for hero + section titles. */
export function Display({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`font-display font-black tracking-[-0.04em] leading-[0.92] text-ink ${className}`}
    >
      {children}
    </Tag>
  );
}

export function BigButton({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const cls =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-yellow hover:text-ink"
      : "border-2 border-ink text-ink hover:bg-ink hover:text-paper";
  const inner = (
    <span className="inline-flex min-h-[54px] items-center gap-2.5 rounded-full px-7 text-base font-bold transition-colors duration-200">
      {children}
      <Icon name="arrow" className="h-5 w-5" />
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

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-[var(--section-y)] ${className}`}>
      {children}
    </section>
  );
}
