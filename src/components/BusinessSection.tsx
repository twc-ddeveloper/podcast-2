"use client";

import Link from "next/link";
import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function BusinessSection() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1761735486549-7a6a04e67061?w=1600&q=80&auto=format&fit=crop)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/85 to-[#0d0d0d]/40" />
      <div className="relative mx-auto max-w-[1300px]">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-purple">{t.business.badge}</p>
        <h2 className="max-w-xl font-heading text-[34px] font-medium leading-tight text-white sm:text-[44px]">
          {t.business.title1}
          <br />
          {t.business.title2}
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">{t.business.desc}</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <PillButton href="/iletisim">{t.business.bookDemo}</PillButton>
          <Link href="/kurumsal" className="text-sm font-semibold text-white underline underline-offset-4">
            {t.business.learnMore}
          </Link>
        </div>
        <div className="mt-14 flex items-center gap-3">
          <span className="font-heading text-3xl font-bold text-white">4.8</span>
          <span className="text-sm text-white/50">{t.business.reviewsText}</span>
        </div>
      </div>
    </section>
  );
}
