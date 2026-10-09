import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { ClusterCTA } from "@/components/ClusterCTA";
import { IconMapPin, IconUsers, IconChip } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "SiliconCore is an early-stage compute infrastructure startup based in Kathmandu, Nepal, building GPU cloud and bare-metal infrastructure for AI teams.",
  alternates: {
    canonical: "/about",
  },
};

const quickFacts = [
  { icon: IconMapPin, label: "Based in Kathmandu" },
  { icon: IconUsers, label: "Small founding team" },
  { icon: IconChip, label: "Founded 2025" },
];

const timeline = [
  {
    date: "2025 — Q1",
    title: "First rack online",
    description:
      "Eight nodes, one region, and a lot of cable management. The first external training run finished without a single dropped checkpoint.",
  },
  {
    date: "2025 — Q2",
    title: "InfiniBand fabric deployed",
    description:
      "Moved off commodity networking entirely. NVLink inside the node, NDR InfiniBand between nodes — the fabric a real training run needs.",
  },
  {
    date: "2025 — Q3",
    title: "Bare metal, three regions",
    description:
      "Added dedicated bare-metal nodes alongside GPU instances, and brought US West and EU Central online.",
  },
  {
    date: "2026 — Q1",
    title: "12,000+ GPUs provisioned",
    description:
      "Crossed six live regions. Still a small team — every node added gets the same hands-on attention the first eight did.",
  },
];

const principles = [
  {
    icon: IconChip,
    title: "Hardware you can actually see",
    description:
      "No reselling capacity we don't operate. If a node is listed, we know exactly which rack it's in.",
  },
  {
    icon: IconUsers,
    title: "Small team, direct answers",
    description:
      "A hardware issue gets routed to someone who understands racks and fabric, not a script reading from a template.",
  },
  {
    icon: IconMapPin,
    title: "Built from Kathmandu, for anywhere",
    description:
      "Our team sits in Nepal. Our GPUs sit in data centers across six regions — proximity to us was never the point.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">About SiliconCore</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-black uppercase leading-[1.1] tracking-tight text-[var(--fg)] md:text-5xl">
              We&apos;d rather own fewer racks than oversell more of them.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              SiliconCore is an early-stage compute infrastructure startup
              based in Kathmandu, Nepal. We build GPU cloud and bare-metal
              infrastructure for teams training and serving AI in
              production.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[var(--border)] pt-8">
              {quickFacts.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-4 w-4 flex-none text-[var(--fg-faint)]" />
                  <span className="text-sm text-[var(--fg-muted)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Timeline */}
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">How we got here</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              From one rack to a fleet
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div className="grid grid-cols-1 gap-2 border-l-2 border-[var(--border-strong)] py-6 pl-8 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-8">
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--primary)]">
                    {t.date}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--fg-muted)]">
                      {t.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">How we think</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Principles we build with
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="h-full rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p.icon className="h-5 w-5 text-[var(--primary)]" />
                  <h3 className="mt-4 text-base font-medium text-[var(--fg)]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClusterCTA
        title="Want to see the fleet for yourself?"
        description="We're happy to walk through the exact hardware behind an instance before you commit to a run."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </>
  );
}
