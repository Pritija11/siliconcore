import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { LogoStrip } from "@/components/LogoStrip";
import { ClusterCTA } from "@/components/ClusterCTA";
import { GPUSpecTable } from "@/components/mocks/GPUSpecTable";
import { ClusterTopology } from "@/components/mocks/ClusterTopology";
import { NodeList } from "@/components/mocks/NodeList";
import { BenchmarkChart } from "@/components/mocks/BenchmarkChart";
import {
  IconArrowRight,
  IconBolt,
  IconShieldCheck,
  IconNetwork,
  IconGauge,
} from "@/components/icons";

const quickStats = [
  { index: "01", label: "GPUs provisioned", value: "12,400+" },
  { index: "02", label: "Fabric uptime", value: "99.97%" },
  { index: "03", label: "Regions live", value: "6" },
];

const capabilities = [
  {
    title: "Launch in under 60 seconds",
    body: "Spin up a GPU instance and get straight to training or inference. No driver installs, no queue — NVIDIA GPUs provisioned on bare metal.",
  },
  {
    title: "Multi-GPU and bare metal",
    body: "Choose 8x, 4x, 2x, or 1x GPU instances to fit everything from a quick experiment to a full pretraining run, or go bare metal for full hardware control.",
  },
  {
    title: "Your network, your rules",
    body: "Private VPC peering and dedicated InfiniBand fabric between your own nodes — your training traffic never touches the public internet.",
  },
  {
    title: "Hardware support, 24/7",
    body: "A node fails, we swap it — usually before your job even finishes retrying. No ticket queue standing between you and a working GPU.",
  },
];

const whoItsFor = [
  {
    icon: IconBolt,
    title: "Teams pretraining foundation models",
    description:
      "Multi-week runs on hundreds of GPUs, with InfiniBand fabric built for the checkpoint traffic, not just the compute.",
  },
  {
    icon: IconGauge,
    title: "Inference at production scale",
    description:
      "Right-sized instances for serving, with per-minute billing so idle capacity doesn't quietly burn budget overnight.",
  },
  {
    icon: IconShieldCheck,
    title: "Regulated or security-sensitive workloads",
    description:
      "Private VPC, dedicated bare metal, and no shared tenancy when your data governance requirements actually mean it.",
  },
  {
    icon: IconNetwork,
    title: "Research teams without an ops team",
    description:
      "Hardware support and cluster orchestration included, so the team's time goes into experiments, not firmware.",
  },
];

const faqs = [
  {
    q: "What GPUs does SiliconCore actually offer?",
    a: "H200, H100, and A100 SXM for multi-GPU training, plus L40S for inference and graphics workloads. New SKUs are added as NVIDIA ships them, not a generation behind.",
  },
  {
    q: "Is this shared infrastructure or dedicated?",
    a: "Both. Instances are single-tenant by default. If you need the whole physical node, bare-metal and private cluster options are available on the Scale plan.",
  },
  {
    q: "How fast can we actually get GPUs?",
    a: "Most standard instance types provision in under a minute. Large multi-node clusters typically take a few hours to a few days, depending on size and region.",
  },
  {
    q: "Do you charge for data egress?",
    a: "No. Pricing is per-GPU-hour with no separate egress line item — the price on the page is the price on the invoice.",
  },
  {
    q: "Is SiliconCore a new company?",
    a: "Yes — we're an early-stage compute infrastructure startup based in Kathmandu. We're deliberately starting with a smaller fleet so every node is one we can stand behind.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="particle-field" aria-hidden />
        <Container className="relative z-10 py-24 md:py-32">
          <Reveal>
            <Tag variant="amber">GPU Cloud</Tag>
            <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-[1.02] tracking-tight text-[var(--fg)] md:text-7xl">
              The silicon your{" "}
              <span className="glitch-block" data-text="models">
                models
              </span>{" "}
              actually run on.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              SiliconCore is on-demand GPU and bare-metal infrastructure for
              teams training and serving AI in production — provisioned in
              under a minute, billed by the minute.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Button href="/contact">
                Launch a GPU
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/infrastructure" variant="outline">
                See infrastructure
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[var(--border)] pt-8 sm:grid-cols-3">
              {quickStats.map((s) => (
                <div key={s.index}>
                  <p className="font-mono text-xs text-[var(--primary)]">
                    {s.index}/
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-2xl font-black text-[var(--fg)]">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-[var(--fg-muted)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <LogoStrip />

      {/* Capabilities — numbered accordion */}
      <section className="border-b border-[var(--border)] py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Built for AI</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Infrastructure that gets out of the way
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)] border-t border-[var(--border)]">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 50}>
                <details className="group py-7" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-6">
                    <span className="font-mono text-sm text-[var(--primary)]">
                      {String(i + 1).padStart(2, "0")}/
                    </span>
                    <span className="flex-1 font-[family-name:var(--font-display)] text-xl font-bold text-[var(--fg)] md:text-2xl">
                      {c.title}
                    </span>
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-sm border border-[var(--border-strong)] font-mono text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl pl-[3.25rem] text-sm leading-6 text-[var(--fg-muted)]">
                    {c.body}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Asymmetric grid of mocks */}
      <section className="relative overflow-hidden border-b border-[var(--border)] py-24">
        <div className="particle-field" aria-hidden />
        <Container className="relative z-10">
          <Reveal>
            <Tag variant="cyan">Fleet status</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Real visibility into real hardware
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <ClusterTopology />
            </Reveal>
            <Reveal delay={80} className="lg:col-span-2">
              <NodeList />
            </Reveal>
            <Reveal delay={140} className="lg:col-span-5">
              <BenchmarkChart />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* GPU pricing showcase */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <Reveal>
              <Tag variant="rose">Pay by the minute</Tag>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
                Transparent pricing, no egress fees
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--fg-muted)]">
                The price on this page is the price on your invoice.
                Switch between 8x, 4x, 2x, and 1x configurations to see
                what fits your run.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <GPUSpecTable />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Who it&apos;s for</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Built for the teams running real workloads
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {whoItsFor.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <div className="flex gap-4 rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6">
                  <w.icon className="h-5 w-5 flex-none text-[var(--primary)]" />
                  <div>
                    <h3 className="text-base font-medium text-[var(--fg)]">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--fg-muted)]">
                      {w.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">Questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Before you launch a node
            </h2>
          </Reveal>

          <div className="mt-12 flex flex-col divide-y divide-[var(--border)]">
            {faqs.map((item, i) => (
              <Reveal key={item.q} delay={i * 50}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-[var(--fg)]">
                    {item.q}
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-sm border border-[var(--border-strong)] font-mono text-sm text-[var(--fg-faint)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--fg-muted)]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ClusterCTA
        title="Spin up your first cluster today."
        description="No lengthy procurement cycle, no sales call required to get started — just GPUs, provisioned in under a minute."
        buttonLabel="Launch a GPU"
        buttonHref="/contact"
      />
    </>
  );
}
