import { Container } from "./Container";
import { Reveal } from "./Reveal";

const companies = [
  "Fernlight",
  "Quillbase",
  "Northwind Labs",
  "Vantapay",
  "Cedarloop",
  "Mesh Analytics",
  "Haloform",
  "Driftline",
];

export function LogoStrip() {
  return (
    <section className="border-b border-[var(--border)] py-12">
      <Container>
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Running production training on SiliconCore
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((c) => (
              <span
                key={c}
                className="font-mono text-sm text-[var(--fg-muted)]"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
