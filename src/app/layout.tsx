import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site, siteUrl } from "@/content/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Dev Gothi — Front-End Designer & Engineer",
    template: "%s — Dev Gothi",
  },
  description: site.description,
  applicationName: "Dev Gothi",
  authors: [{ name: "Dev Gothi" }],
  creator: "Dev Gothi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Dev Gothi",
    locale: "en_CA",
    title: "Dev Gothi — Front-End Designer & Engineer",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Gothi — Front-End Designer & Engineer",
    description: site.description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#07130d",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${geist.variable} ${geistMono.variable}`}>
      <body id="top">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-green-500 px-5 py-3 font-medium text-forest-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
