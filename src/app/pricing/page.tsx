import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ClusterCTA } from "@/components/ClusterCTA";
import { GPUSpecTable } from "@/components/mocks/GPUSpecTable";
import { IconCheck } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "SiliconCore pricing — pay-by-the-minute GPU instances with no egress fees, plus reserved and private-cluster discounts for committed workloads.",
  alternates: {
    canonical: "/pricing",
  },
};

const commitments = [
  {
    name: "On-Demand",
    discount: "0%",
    description: "Full flexibility, billed by the minute with no commitment.",
    points: ["Cancel anytime", "No minimum spend", "Standard support"],
  },
  {
    name: "1-Year Reserved",
    discount: "32%",
    description: "Lock in capacity and a lower rate for a steady workload.",
    points: ["Guaranteed capacity", "Priority hardware support", "Volume add-ons available"],
    featured: true,
  },
  {
    name: "3-Year Reserved",
    discount: "51%",
    description: "Lowest per-GPU rate, for workloads you know aren't going anywhere.",
    points: ["Deepest discount available", "Dedicated account contact", "Custom cluster sizing"],
  },
];

const faqs = [
  {
    q: "Is pricing really per-GPU, not per-node?",
    a: "Yes. A 1x instance is billed at exactly the per-GPU rate shown, and an 8x instance is billed at eight times that rate — no bundling markup for larger configurations.",
  },
  {
    q: "What's the difference between on-demand and reserved?",
    a: "On-demand instances can be launched and terminated anytime with no commitment. Reserved capacity guarantees hardware availability and a locked-in discount for a 1 or 3-year term.",
  },
  {
    q: "Do you charge separately for storage or networking?",
    a: "Local NVMe storage is included with every instance. Network egress has no separate fee. Persistent block storage and object storage are billed separately if you use them.",
  },
  {
    q: "Can we get a custom quote for a large cluster?",
    a: "Yes — for multi-node clusters or dedicated private infrastructure, reach out and we'll put together pricing based on your exact GPU count and term.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-[var(--border)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="rose">Pricing</Tag>
            <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-tight text-[var(--fg)] md:text-5xl">
              Priced by the GPU, not by the guess.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
              One rate per GPU per hour, no egress fees, no bundling
              markup. Commit to a term for a steep discount, or stay
              on-demand and pay for exactly what you use.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-14">
              <GPUSpecTable />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Commitment tiers</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Commit for a term, save on every GPU
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal key={c.name} delay={i * 80}>
                <div
                  className={`flex h-full flex-col rounded-sm border p-7 ${
                    c.featured
                      ? "border-[var(--primary)] bg-[var(--primary-soft)]"
                      : "border-[var(--border)] bg-[var(--surface)]"
                  }`}
                >
                  <p className="font-mono text-sm text-[var(--fg)]">
                    {c.name}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-4xl font-black text-[var(--primary)]">
                    {c.discount}
                    <span className="ml-2 text-sm font-normal text-[var(--fg-muted)]">
                      off on-demand
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--fg-muted)]">
                    {c.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-[var(--fg-muted)]"
                      >
                        <IconCheck className="h-4 w-4 flex-none text-[var(--primary)]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant={c.featured ? "primary" : "outline"}
                    className="mt-7"
                  >
                    {c.name === "On-Demand" ? "Launch a GPU" : "Request a quote"}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">Billing questions</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Before you commit to a term
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
        title="Not sure which tier fits your run?"
        description="Tell us roughly how many GPU-hours you're looking at and we'll recommend on-demand or a reserved term."
        buttonLabel="Talk to us"
        buttonHref="/contact"
      />
    </>
  );
}
