import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconArrowRight } from "./icons";

const specRows = [
  { label: "GPU", value: "8x H100 SXM" },
  { label: "Interconnect", value: "NVLink + IB NDR" },
  { label: "Est. cost", value: "$3.29 / GPU / hr" },
];

export function ClusterCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
      <div className="particle-field" aria-hidden />
      <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <h2 className="max-w-lg font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--fg-muted)]">
            {description}
          </p>
          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[var(--primary)] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--on-primary)] transition-colors hover:bg-[var(--primary-dark)]"
          >
            {buttonLabel}
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-sm border border-[var(--border-strong)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3">
              <span className="font-mono text-xs text-[var(--fg)]">
                Cluster builder
              </span>
              <span className="pill pill-success">Available now</span>
            </div>
            <div className="flex flex-col">
              {specRows.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3 last:border-b-0"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--fg-faint)]">
                    {r.label}
                  </span>
                  <span className="font-mono text-xs text-[var(--fg)]">
                    {r.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
