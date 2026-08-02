"use client";

import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="relative z-0 flex h-[420px] flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center">
      <h2 className="font-heading text-[32px] font-medium leading-tight text-white sm:text-[42px]">{t.cta.title}</h2>
      <div className="mt-8">
        <PillButton href="/odalar">{t.nav.reserve}</PillButton>
      </div>
    </section>
  );
}
