"use client";

import { useEffect, useState } from "react";
import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

const brands = ["Spotify", "Microsoft", "Vercel", "MARVEL", "HubSpot", "The New York Times", "TED", "The Economist"];

function TagPill({ label, checked }: { label: string; checked: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] font-medium transition-colors duration-500 ${
        checked ? "border-white/0 bg-white/15 text-white" : "border-white/25 bg-white/5 text-white/85"
      }`}
    >
      <span
        className={`flex h-4 w-4 items-center justify-center rounded border transition-colors duration-500 ${
          checked ? "border-purple bg-purple" : "border-white/40 bg-transparent"
        }`}
      >
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </span>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const tags = t.hero.tags;

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % tags.length);
    }, 900);
    return () => clearInterval(id);
  }, [tags.length]);

  const row1 = tags.slice(0, 4);
  const row2 = tags.slice(4);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url(https://images.unsplash.com/photo-1677100091678-1e96b3de3a38?w=1600&q=80&auto=format&fit=crop)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-6 pb-24 pt-24 text-center lg:pt-32">
        <h1 className="font-heading text-[44px] font-medium leading-[1.05] text-white sm:text-[58px] lg:text-[72px]">
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </h1>
        <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/70">{t.hero.subtitle}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {row1.map((tag) => (
            <TagPill key={tag} label={tag} checked={tags[activeIndex] === tag} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          {row2.map((tag) => (
            <TagPill key={tag} label={tag} checked={tags[activeIndex] === tag} />
          ))}
        </div>

        <div className="mt-10">
          <PillButton href="/odalar" variant="purple">
            {t.nav.reserve}
          </PillButton>
        </div>
        <p className="mt-4 text-sm text-white/50">
          {t.hero.note} <span className="cursor-pointer underline underline-offset-2">{t.hero.noteLink}</span>
        </p>
      </div>

      <div className="relative border-t border-white/10 bg-black/30 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wide text-white/40">{t.hero.trustedBy}</p>
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
          {brands.map((b) => (
            <span key={b} className="font-heading text-lg font-semibold text-white/60">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
