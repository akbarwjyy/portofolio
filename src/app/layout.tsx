import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import AOSProvider from "./providers/AOSProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://akbarwijaya.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akbar Wijaya | Web Developer & Backend Specialist",
    template: "%s | Akbar Wijaya",
  },
  description:
    "Akbar Wijaya is a Web Developer focused on Backend Development. Specializing in building scalable server-side applications, RESTful APIs, and database architecture using Node.js, Express.js, and modern web technologies.",
  keywords: [
    "Akbar Wijaya",
    "Web Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Full Stack Developer",
    "Indonesia Developer",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Akbar Wijaya", url: siteUrl }],
  creator: "Akbar Wijaya",
  publisher: "Akbar Wijaya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Akbar Wijaya Portfolio",
    title: "Akbar Wijaya | Web Developer & Backend Specialist",
    description:
      "Web Developer focused on Backend Development. Building scalable server-side applications, RESTful APIs, and robust database solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akbar Wijaya - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akbar Wijaya | Web Developer & Backend Specialist",
    description:
      "Web Developer focused on Backend Development. Building scalable server-side applications and RESTful APIs.",
    images: ["/og-image.png"],
    creator: "@akbarwijaya",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans overflow-x-hidden`}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
