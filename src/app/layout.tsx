import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DeferredScripts } from "@/components/deferred-scripts";

const Header = dynamic(
  () => import("@/components/layout/header").then((m) => ({ default: m.Header })),
  { ssr: true }
);

const Footer = dynamic(
  () => import("@/components/layout/footer").then((m) => ({ default: m.Footer })),
  { ssr: true }
);

/* adjustFontFallback reduz CLS na troca de fonte (fallback com métricas similares) */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://godevstudio.com";

const title = "GoDev Studio | Software de Alta Performance";
const description =
  "Sua equipe de desenvolvimento Next.js sob demanda. Código sênior, entrega ágil e foco total no seu produto.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | GoDev Studio",
  },
  description,
  keywords: [
    "desenvolvimento",
    "Next.js",
    "React",
    "software",
    "agência",
    "high performance",
    "GoDev Studio",
  ],
  authors: [{ name: "GoDev Studio", url: siteUrl }],
  creator: "GoDev Studio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "GoDev Studio",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GoDev Studio | Software de Alta Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport = {
  width: "device-width" as const,
  initialScale: 1,
  maximumScale: 5,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#09090b" }],
} satisfies import("next").Viewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="lenis lenis-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 bg-noise text-zinc-300 antialiased`}
      >
        <DeferredScripts />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
