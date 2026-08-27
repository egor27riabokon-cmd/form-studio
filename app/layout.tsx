import type { Metadata } from "next";
import { Instrument_Serif, Manrope, Fragment_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl = "https://egor27riabokon-cmd.github.io/form-studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FORM — Architecture Studio",
    template: "%s — FORM",
  },
  description:
    "FORM is an architecture studio working across private residences, cultural buildings, hospitality, and interiors. Every project starts from the site, not the mood board.",
  openGraph: {
    title: "FORM — Architecture Studio",
    description:
      "An architecture studio working across private residences, cultural buildings, hospitality, and interiors.",
    url: siteUrl,
    siteName: "FORM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FORM — Architecture Studio",
    description:
      "An architecture studio working across private residences, cultural buildings, hospitality, and interiors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${manrope.variable} ${fragmentMono.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
