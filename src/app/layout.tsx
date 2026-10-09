import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const SITE_URL = "https://siliconcore.ltd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SiliconCore — GPU Cloud for AI Training & Inference",
    template: "%s · SiliconCore",
  },
  description:
    "SiliconCore is an early-stage compute infrastructure startup based in Kathmandu, Nepal, offering on-demand GPU instances, bare-metal clusters, and private AI infrastructure for teams training and serving real models.",
  keywords: [
    "SiliconCore",
    "GPU cloud",
    "GPU instances",
    "bare metal GPU",
    "AI compute startup",
    "H100 GPU cloud",
    "AI infrastructure startup",
    "Nepal startup",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SiliconCore — GPU Cloud for AI Training & Inference",
    description:
      "On-demand GPU instances, bare-metal clusters, and private AI infrastructure.",
    siteName: "SiliconCore",
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiliconCore — GPU Cloud for AI Training & Inference",
    description:
      "On-demand GPU instances, bare-metal clusters, and private AI infrastructure.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SiliconCore",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "SiliconCore is an early-stage compute infrastructure startup based in Kathmandu, Nepal, offering on-demand GPU instances, bare-metal clusters, and private AI infrastructure for teams training and serving real models.",
  email: "hello@siliconcore.ltd",
  telephone: "+977-985-1234098",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Baluwatar",
    addressLocality: "Kathmandu",
    postalCode: "44600",
    addressCountry: "NP",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--bg)] text-[var(--fg)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
