"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: "/odalar", label: lang === "tr" ? "Odalar" : "Rooms" },
    { href: "/kurumsal", label: t.nav.forBusiness },
    { href: "/iletisim", label: lang === "tr" ? "İletişim" : "Contact" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] font-medium transition-colors ${
                pathname === l.href ? "text-black" : "text-[#1d1d1d] hover:text-black"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="flex items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-sm font-semibold text-ink hover:border-black/30"
            aria-label="Switch language"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
            </svg>
            {lang === "tr" ? "TR" : "EN"}
          </button>
          <PillButton href="/odalar" variant="dark" size="sm">
            {t.nav.reserve}
          </PillButton>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-base font-medium text-ink">
                {l.label}
              </Link>
            ))}
            <hr className="border-black/10" />
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="flex w-fit items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-sm font-semibold text-ink"
            >
              {lang === "tr" ? "TR / Türkçe" : "EN / English"}
            </button>
            <PillButton href="/odalar" variant="dark" className="w-full text-center">
              {t.nav.reserve}
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
