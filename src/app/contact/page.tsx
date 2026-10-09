import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { IconMail, IconPhone, IconMapPin } from "@/components/icons";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SiliconCore about GPU instances, bare-metal clusters, or private AI infrastructure.",
  alternates: {
    canonical: "/contact",
  },
};

const slaStats = [
  { label: "Median first response", value: "4h" },
  { label: "Hardware swap SLA", value: "24h" },
  { label: "Fabric uptime", value: "99.97%" },
];

const faqs = [
  {
    q: "How fast can we talk to someone about a large cluster?",
    a: "Usually within a business day. For multi-node or bare-metal requests, mention the GPU count in your message and we'll route it straight to infrastructure.",
  },
  {
    q: "Do you offer a trial before a reserved commitment?",
    a: "Yes — start on-demand to validate the workload, then move to a reserved term once you know your real usage pattern.",
  },
  {
    q: "Can I get a tour of the hardware before committing?",
    a: "For larger deployments, yes. We can walk through the exact rack and fabric configuration your workload would run on.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="amber">Contact</Tag>
            <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-tight text-[var(--fg)] md:text-5xl">
              Let&apos;s talk about your cluster.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--fg-muted)]">
              Whether you need a single GPU for an afternoon or a
              dedicated fleet for a quarter, tell us what you&apos;re
              running and we&apos;ll reply with real specs — not a sales
              funnel.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-7 md:p-9">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex flex-col gap-6">
                <div className="rounded-sm border border-[var(--border)] bg-[var(--surface)] p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                    Reach us directly
                  </p>
                  <div className="mt-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <IconMail className="h-4 w-4 flex-none text-[var(--primary)]" />
                      <a
                        href="mailto:hello@siliconcore.ltd"
                        className="text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                      >
                        hello@siliconcore.ltd
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <IconPhone className="h-4 w-4 flex-none text-[var(--primary)]" />
                      <a
                        href="tel:+9779851234098"
                        className="text-sm text-[var(--fg)] hover:text-[var(--primary)]"
                      >
                        +977 985-1234098
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <IconMapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--primary)]" />
                      <span className="text-sm text-[var(--fg)]">
                        Baluwatar, Kathmandu 44600
                        <br />
                        Nepal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-sm border border-[var(--border)] bg-[var(--surface)]">
                  <div className="border-b border-[var(--border)] px-6 py-4">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg-faint)]">
                      Support SLA
                    </p>
                  </div>
                  <div className="flex flex-col">
                    {slaStats.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between border-b border-[var(--border)] px-6 py-3.5 last:border-b-0"
                      >
                        <span className="text-sm text-[var(--fg-muted)]">
                          {s.label}
                        </span>
                        <span className="font-mono text-sm text-[var(--primary)]">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-20 md:py-24">
        <Container>
          <Reveal>
            <Tag variant="cyan">Before you write in</Tag>
            <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-black uppercase tracking-tight text-[var(--fg)] md:text-4xl">
              Quick answers
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col divide-y divide-[var(--border)]">
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
    </>
  );
}
