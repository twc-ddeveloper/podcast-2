"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t, lang, setLang } = useLanguage();
  const f = t.footer;

  const columns = [
    { title: f.company, links: f.companyLinks },
    { title: f.rooms, links: f.roomsLinks },
    { title: f.resources, links: f.resourcesLinks },
  ];

  return (
    <footer className="relative z-10 bg-[#f4f2ee] px-6 pt-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/55">{f.brandDesc}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-ink/55 hover:text-ink">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ink/10 py-8 sm:flex-row">
          <span className="text-sm text-ink/50">{f.copyright}</span>
          <div className="flex items-center gap-6 text-sm text-ink/60">
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="flex items-center gap-1.5 hover:text-ink"
            >
              🌐 {f.language}
            </button>
            <Link href="/iletisim" className="hover:text-ink">
              {f.terms}
            </Link>
            <Link href="/iletisim" className="hover:text-ink">
              {f.privacy}
            </Link>
            <Link href="/iletisim" className="hover:text-ink">
              {f.cookies}
            </Link>
          </div>
        </div>

        <div className="border-t border-ink/10 py-6 text-center">
          <span className="text-xs text-ink/40">
            {f.designedByBefore}
            <a
              href="https://thewhalecreative.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink/60 hover:text-ink"
            >
              thewhalecreative.co
            </a>
            {f.designedByAfter}
          </span>
        </div>
      </div>
    </footer>
  );
}
