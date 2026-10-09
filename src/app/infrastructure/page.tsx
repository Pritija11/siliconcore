import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { ClusterCTA } from "@/components/ClusterCTA";
import { ClusterTopology } from "@/components/mocks/ClusterTopology";
import { NodeList } from "@/components/mocks/NodeList";
import {
  IconChip,
  IconNetwork,
  IconLayers,
  IconThermometer,
  IconShieldCheck,
  IconBolt,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "GPU instances, bare-metal clusters, InfiniBand networking, and private AI infrastructure — the SiliconCore platform explained.",
  alternates: {
    canonical: "/infrastructure",
  },
};

const capabilities = [
  {
    icon: IconChip,
    variant: "amber" as const,
    title: "GPU Instances",
    description:
      "H200, H100, A100, and L40S — provisioned on bare metal, not a slice of a shared card competing with a dozen other tenants.",
    bullets: ["Single-tenant by default", "8x down to 1x configurations", "Clean image, root access"],
  },
  {
    icon: IconNetwork,
    variant: "cyan" as const,
    title: "Fabric Networking",
    description:
      "NVLink inside the node, InfiniBand NDR between nodes — built for the all-reduce traffic a training run actually generates.",
    bullets: ["3.2 Tbps fabric per cluster", "Private VPC peering", "No public internet on the training path"],
  },
  {
    icon: IconLayers,
    variant: "violet" as const,
    title: "Bare Metal",
    description:
      "Full hardware control when an instance isn't enough — your own kernel, your own driver versions, nothing virtualized underneath.",
    bullets: ["Dedicated physical nodes", "Custom OS images supported", "Available from the Scale plan"],
  },
  {
    icon: IconThermometer,
    variant: "rose" as const,
    title: "Thermal & Power",
    description:
      "Liquid-cooled racks built for sustained 700W+ GPUs running at full utilization for days, not just benchmark bursts.",
    bullets: ["Sustained full-TDP operation", "No thermal throttling under load", "N+1 power redundancy"],
  },
  {
    icon: IconShieldCheck,
    variant: "amber" as const,
    title: "Isolation & Security",
    description:
      "Single-tenant hardware, isolated networking, and encrypted storage by default — not an add-on tier you have to ask for.",
    bullets: ["No shared tenancy", "Encrypted local NVMe", "SOC 2-ready controls"],
  },
  {
    icon: IconBolt,
    variant: "cyan" as const,
    title: "Fast Provisioning",
    description:
      "Standard instances are live in under a minute. Multi-node clusters are measured in hours, not the weeks a hardware order usually takes.",
    bullets: ["Sub-minute instance launch", "API, CLI, or dashboard", "No procurement cycle"],
  },
];

const regions = [
  { name: "US East", location: "Virginia, USA", status: "Live" },
  { name: "US West", location: "Oregon, USA", status: "Live" },
  { name: "EU Central", location: "Frankfurt, Germany", status: "Live" },
  { name: "AP South", location: "Mumbai, India", status: "Live" },
  { name: "AP East", location: "Singapore", status: "Capacity limited" },
  { name: "SA East", location: "São Paulo, Brazil", status: "Coming soon" },
];

export default function InfrastructurePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--border)] py-20 md:py-24">
        <div className="particle-field" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Tag variant="amber">Infrastructure</Tag>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-tight text-[var(--fg)] md:text-5xl">
              Every layer, built for real training runs.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              SiliconCore isn&apos;t a thin reseller layer on top of someone
              else&apos;s capacity. GPUs, fabric, power, and cooling are
              engineered as one system — not assembled from whatever was
              available.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <div className="flex h-full flex-col rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6">
                  <c.icon className="h-5 w-5 text-[var(--primary)]" />
                  <h2 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-[var(--fg)]">
                    {c.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {c.description}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2">
                    {c.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-baseline gap-2 text-xs text-[var(--fg-muted)]"
                      >
                        <span className="h-1 w-1 flex-none translate-y-[-2px] rounded-full bg-[var(--primary)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <ClusterTopology />
            </Reveal>
            <Reveal delay={80} className="lg:col-span-2">
              <NodeList />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="violet">Regions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Six regions, more on the way
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {regions.map((r, i) => (
              <Reveal key={r.name} delay={i * 40}>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-[var(--fg)]">
                      {r.name}
                    </span>
                    <span className="text-xs text-[var(--fg-muted)]">
                      {r.location}
                    </span>
                  </div>
                  <span
                    className={`pill ${
                      r.status === "Live"
                        ? "pill-success"
                        : r.status === "Capacity limited"
                          ? "pill-warning"
                          : "pill-neutral"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClusterCTA
        title="Want specs for your exact workload?"
        description="Tell us what you're training or serving and we'll recommend the right GPU, region, and cluster size."
        buttonLabel="Talk to infrastructure"
        buttonHref="/contact"
      />
    </>
  );
}
