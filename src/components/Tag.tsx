type Variant = "amber" | "violet" | "cyan" | "rose";

const variants: Record<Variant, string> = {
  amber: "tag-amber",
  violet: "tag-violet",
  cyan: "tag-cyan",
  rose: "tag-rose",
};

export function Tag({
  children,
  variant = "amber",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
