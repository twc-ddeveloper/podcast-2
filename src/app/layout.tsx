import type { Metadata } from "next";
import { Instrument_Sans, Bricolage_Grotesque } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
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
  title: "Record Media: Podcast & Video Stüdyosu | Oda Kirala, Kaydet, Yayınla",
  description:
    "Record Media; podcast, toplantı ve çekim odalarını online rezervasyonla sunan, kayıt ve profesyonel prodüksiyon hizmetleri veren stüdyo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${instrumentSans.variable} ${bricolage.variable}`}>
      <body className="min-h-full antialiased bg-white text-ink font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
