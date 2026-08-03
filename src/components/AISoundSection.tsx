"use client";

import { useMemo, useState } from "react";
import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

function smoothWave(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const t = i / n;
    const bump1 = Math.exp(-Math.pow((t - 0.3) * 6, 2)) * 90;
    const bump2 = Math.exp(-Math.pow((t - 0.65) * 8, 2)) * 55;
    return Math.max(8, bump1 + bump2 + 10);
  });
}

function noisyWave(n: number, seed: number) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: n }, () => 15 + rand() * 80);
}

type Playing = "good" | "bad" | null;

export default function AISoundSection() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState<Playing>(null);
  const good = useMemo(() => smoothWave(48), []);
  const bad = useMemo(() => noisyWave(48, 42), []);

  const toggle = (side: Playing) => setPlaying((p) => (p === side ? null : side));

  return (
    <section className="bg-[#f4f2ee] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="mb-4 inline-flex items-center rounded-full bg-[#0d0d0d] px-3 py-1.5 text-xs font-semibold text-white">
          {t.aiSound.badge}
        </span>
        <h2 className="font-heading text-[32px] font-medium leading-tight text-ink sm:text-[40px]">{t.aiSound.title}</h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ink/60">{t.aiSound.desc}</p>

        <div className="mt-12 grid overflow-hidden rounded-3xl bg-[#161616] sm:grid-cols-2">
          <button
            type="button"
            onClick={() => toggle("good")}
            className="group relative flex h-[280px] flex-col items-center justify-end gap-[3px] px-8 pb-8 text-left"
          >
            <div className={`flex h-[170px] w-full items-end justify-center gap-[3px] ${playing === "good" ? "animate-pulse" : ""}`}>
              {good.map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-purple transition-all"
                  style={{ height: `${(playing === "good" ? h : h * 0.85).toFixed(2)}%` }}
                />
              ))}
            </div>
            <span className="mt-4 text-sm font-medium text-white/70">{t.aiSound.withUs}</span>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-lg transition-transform group-hover:scale-105">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 6V10H4.5L8 13V3L4.5 6H2Z" fill="currentColor" />
                <path d="M11 5.5C11.8 6.3 11.8 9.7 11 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              {playing === "good" ? t.aiSound.pause : t.aiSound.listen}
            </span>
          </button>

          <button
            type="button"
            onClick={() => toggle("bad")}
            className="group relative flex h-[280px] flex-col items-center justify-end gap-[3px] border-t border-white/10 px-8 pb-8 text-left sm:border-l sm:border-t-0"
          >
            <div className={`flex h-[170px] w-full items-end justify-center gap-[3px] ${playing === "bad" ? "animate-pulse" : ""}`}>
              {bad.map((h, i) => (
                <span key={i} className="w-1.5 rounded-full bg-white/30" style={{ height: `${h.toFixed(2)}%` }} />
              ))}
            </div>
            <span className="mt-4 text-sm font-medium text-white/70">{t.aiSound.others}</span>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-lg transition-transform group-hover:scale-105">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 6V10H4.5L8 13V3L4.5 6H2Z" fill="currentColor" />
                <path d="M11 5.5C11.8 6.3 11.8 9.7 11 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              {playing === "bad" ? t.aiSound.pause : t.aiSound.listen}
            </span>
          </button>
        </div>

        <div className="mt-16">
          <p className="text-lg font-medium leading-relaxed text-ink">{t.aiSound.quote}</p>
          <p className="mt-4 text-sm text-ink/50">{t.aiSound.quoteAuthor}</p>
          <div className="mt-8">
            <PillButton href="/odalar">{t.nav.reserve}</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
