import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SiliconCore collects, uses, and protects data for customers using our GPU cloud and bare-metal infrastructure.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    heading: "1. What we collect",
    body: [
      "When you create an account, we collect your name, email address, and billing details needed to provision instances and invoice you.",
      "When you launch a GPU instance or bare-metal node, we collect infrastructure telemetry — utilization, power draw, thermal readings, and fabric health — so monitoring and support can work. We do not inspect the contents of your instance's disk or running processes.",
      "Like most web services, our dashboard and marketing site log IP addresses and request metadata for security and abuse prevention.",
    ],
  },
  {
    heading: "2. How we use it",
    body: [
      "Account and billing data is used to provision instances, process payments, and send service-related notices — maintenance windows, hardware advisories, invoice receipts.",
      "Infrastructure telemetry powers the fleet monitoring and support features described on our Infrastructure page, scoped to your own instances only.",
    ],
  },
  {
    heading: "3. What we don't do",
    body: [
      "We don't sell customer data to third parties.",
      "We don't access the contents of a running instance's disk or memory unless you explicitly grant support access to help debug a hardware issue, or we're legally compelled to.",
      "We don't use customer workload data to train models of our own.",
    ],
  },
  {
    heading: "4. Third-party processors",
    body: [
      "We rely on a small number of third-party processors to run the business — a payment processor for billing and an email provider for transactional notices. Each is bound by its own data-processing terms.",
    ],
  },
  {
    heading: "5. Data retention",
    body: [
      "Account and billing records are retained for as long as your account is active, plus a limited period for tax and accounting obligations. Instance telemetry is retained on a rolling 30-day window by default.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You can request a copy of the personal data we hold, ask us to correct it, or request deletion of your account and associated data, subject to legal retention requirements. Reach out through the contact details below and we'll respond directly.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "If this policy changes in a way that materially affects how we handle your data, we'll email active account holders before the change takes effect.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "Questions about this policy can be sent to hello@siliconcore.ltd, or by post to Baluwatar, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Tag variant="amber">Legal</Tag>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-tight text-[var(--fg)] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            This explains what data SiliconCore collects, how it&apos;s
            used, and what you can do about it.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--fg-faint)]">
            Effective January 1, 2026
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 40, 240)}>
              <div className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0">
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--fg)]">
                  {section.heading}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.body.map((p) => (
                    <p
                      key={p}
                      className="text-sm leading-7 text-[var(--fg-muted)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
