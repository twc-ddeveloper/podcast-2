import type { Metadata } from "next";
import { Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Riverside: HD Podcast & Video Software | Free Recording & Editing",
  description:
    "Riverside is the AI-powered platform that lets you record, edit, repurpose, and distribute studio-quality content as easily as if you had a crew behind you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${bricolage.variable}`}>
      <body className="min-h-full antialiased bg-white text-ink font-body">{children}</body>
    </html>
  );
}
