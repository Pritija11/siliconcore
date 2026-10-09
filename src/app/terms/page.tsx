import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of SiliconCore's GPU cloud, bare-metal, and private AI infrastructure platform.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    heading: "1. Using SiliconCore",
    body: [
      "These terms apply from the moment you create a SiliconCore account. By provisioning an instance or node, you agree to use it in a way that's legal and doesn't disrupt shared infrastructure like fabric networking.",
    ],
  },
  {
    heading: "2. Acceptable use",
    body: [
      "Instances may not be used to host illegal content, run attacks against other systems, or abuse shared networking in a way that degrades fabric performance for other customers.",
      "We don't monitor instance contents proactively, but we do act on abuse reports and will suspend an instance that's actively harming the network, with notice wherever possible.",
    ],
  },
  {
    heading: "3. Account responsibilities",
    body: [
      "You're responsible for keeping your account credentials and API keys secure, and for activity under your account.",
      "You're responsible for the software and security configuration running on your instance — OS patches, application-level access control, and anything installed on top of the base image.",
    ],
  },
  {
    heading: "4. Billing",
    body: [
      "On-demand instances are billed per GPU per minute of use. Reserved terms are billed according to the commitment schedule agreed at signup. Cancelling an on-demand instance stops billing immediately.",
    ],
  },
  {
    heading: "5. Service availability",
    body: [
      "We design for high fabric and power uptime, but we don't promise a specific uptime percentage in these terms. For a formal SLA on a production workload, contact us before you launch and we'll work one out directly.",
      "Scheduled maintenance that could affect availability is communicated in advance by email wherever possible.",
    ],
  },
  {
    heading: "6. Hardware failures",
    body: [
      "If a physical node fails during your use, we replace it under our hardware swap SLA. We are not responsible for data loss on local instance storage — persistent data should be backed up to durable storage you control.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "SiliconCore is provided on an as-is basis. To the extent permitted by law, we aren't liable for indirect, incidental, or consequential damages arising from use of the service, beyond the amount you've paid us in the three months prior to a claim.",
    ],
  },
  {
    heading: "8. Termination",
    body: [
      "You can terminate on-demand instances at any time from the dashboard. We may suspend or terminate an instance for a violation of the acceptable use terms above.",
    ],
  },
  {
    heading: "9. Governing law",
    body: [
      "These terms are governed by the laws of Nepal. Any dispute arising from use of the service will be handled in the courts of Kathmandu, Nepal.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "If we make a material change to these terms, we'll notify active account holders by email before the change takes effect.",
    ],
  },
  {
    heading: "11. Contact",
    body: [
      "Questions about these terms can be sent to hello@siliconcore.ltd, or by post to Baluwatar, Kathmandu 44600, Nepal.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="py-20 md:py-24">
      <Container>
        <Reveal>
          <Tag variant="amber">Legal</Tag>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-4xl font-black uppercase tracking-tight text-[var(--fg)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--fg-muted)]">
            The terms that govern use of the SiliconCore platform.
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
