import Link from "next/link";
import { Container } from "./Container";
import { IconLogo, IconMail, IconPhone, IconMapPin } from "./icons";

const infraLinks = [
  "GPU Instances",
  "Bare Metal",
  "Clusters",
  "Private Cloud",
];

const YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)] text-[var(--fg-muted)]">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 font-mono text-sm text-[var(--fg)]">
            <IconLogo className="h-5 w-5 text-[var(--primary)]" />
            siliconcore
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6">
            GPU instances, bare-metal clusters, and private AI
            infrastructure — the silicon under teams training and serving
            real models.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <Link href="/" className="hover:text-[var(--fg)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/infrastructure" className="hover:text-[var(--fg)]">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-[var(--fg)]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--fg)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--fg)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Infrastructure
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            {infraLinks.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fg-faint)]">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <IconMail className="h-4 w-4 flex-none" />
              <a
                href="mailto:hello@siliconcore.ltd"
                className="hover:text-[var(--fg)]"
              >
                hello@siliconcore.ltd
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconPhone className="h-4 w-4 flex-none" />
              <a href="tel:+9779851234098" className="hover:text-[var(--fg)]">
                +977 985-1234098
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMapPin className="mt-0.5 h-4 w-4 flex-none" />
              <span>Baluwatar, Kathmandu 44600, Nepal</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-[var(--border)]">
        <Container className="flex flex-col gap-4 py-6 text-xs text-[var(--fg-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {YEAR} SiliconCore. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[var(--fg)]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[var(--fg)]">
              Terms of Service
            </Link>
            <p className="hidden sm:block">
              Compute infrastructure, built from Kathmandu.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
