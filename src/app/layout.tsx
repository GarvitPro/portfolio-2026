import type { Metadata } from "next";
import {
  Fredoka,
  Silkscreen,
  Pacifico,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { ScrollProgress } from "@/components/animation/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";

const fontDisplay = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontPixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
  display: "swap",
});

const fontScript = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://garvitarora.me"),
  title: {
    default: "PORTFOLIO 2026 — GARVIT ARORA | AI ENGINEER & DEVELOPER",
    template: "%s | Garvit Arora",
  },
  description:
    "Unboxing Garvit Arora's 2026/27 Portfolio — AI Engineering, Computer Vision, Machine Learning, Full-Stack Software & Business Systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    jobTitle: "AI Engineering & Software Development Undergraduate",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: profileData.institution,
    },
    email: `mailto:${profileData.email}`,
    sameAs: [profileData.github, profileData.linkedin],
  };

  return (
    <html
      lang="en"
      className={`${fontDisplay.variable} ${fontPixel.variable} ${fontScript.variable} ${fontSans.variable} ${fontMono.variable}`}
    >
      <body className="font-sans bg-cream text-navy antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
