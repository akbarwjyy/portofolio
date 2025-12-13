import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Portfolio | Akbar Wijaya",
  description:
    "Developer Portfolio inspired by GitHub Universe. Creating modern, clean, and scalable web experiences.",
  keywords: ["developer", "portfolio", "web development", "next.js", "react"],
  authors: [{ name: "Developer" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
