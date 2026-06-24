import Link from "next/link";

export function GoldLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[10px] uppercase tracking-[0.25em] text-yellow ${className}`}>
      {children}
    </p>
  );
}

export function V3Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}

export function V3Section({
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

export function GoldButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 bg-yellow px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-black transition-opacity duration-200 hover:opacity-85 ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

export function InkLink({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  const cls = `inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-opacity duration-200 hover:opacity-60 ${className}`;
  const inner = (
    <>
      {children}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${cls}`}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={`group ${cls}`}>
      {inner}
    </Link>
  );
}
