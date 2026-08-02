"use client";

import { useMemo, useState } from "react";
import PillButton from "./PillButton";

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

export default function AISoundSection() {
  const [listening, setListening] = useState(false);
  const good = useMemo(() => smoothWave(48), []);
  const bad = useMemo(() => noisyWave(48, 42), []);

  return (
    <section className="bg-[#f4f2ee] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[900px] text-center">
        <span className="mb-4 inline-flex items-center rounded-full bg-[#0d0d0d] px-3 py-1.5 text-xs font-semibold text-white">
          AI
        </span>
        <h2 className="font-heading text-[32px] font-medium leading-tight text-ink sm:text-[40px]">
          Let AI make you sound like a pro
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-ink/60">
          AI polishes your sound, removes noise, and makes any mic sound like it&rsquo;s
          professional-grade no matter where it is.
        </p>

        <div className="relative mt-12 grid overflow-hidden rounded-3xl bg-[#161616] sm:grid-cols-2">
          <div className="relative flex h-[260px] items-end justify-center gap-[3px] px-8 pb-14">
            {good.map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-purple transition-all"
                style={{ height: `${(listening ? h : h * 0.85).toFixed(2)}%` }}
              />
            ))}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
              With Riverside
            </span>
          </div>
          <div className="relative flex h-[260px] items-end justify-center gap-[3px] border-t border-white/10 px-8 pb-14 sm:border-l sm:border-t-0">
            {bad.map((h, i) => (
              <span
                key={i}
                className="w-1.5 rounded-full bg-white/30"
                style={{ height: `${h.toFixed(2)}%` }}
              />
            ))}
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
              Other platforms
            </span>
          </div>

          <button
            onClick={() => setListening((v) => !v)}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg transition-transform hover:scale-105"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 6V10H4.5L8 13V3L4.5 6H2Z"
                fill="currentColor"
              />
              <path d="M11 5.5C11.8 6.3 11.8 9.7 11 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            {listening ? "Pause" : "Listen"}
          </button>
        </div>

        <div className="mt-16">
          <p className="text-lg font-medium leading-relaxed text-ink">
            &ldquo;Riverside makes it incredibly easy to create high quality content right from
            your browser.&rdquo;
          </p>
          <p className="mt-4 text-sm text-ink/50">
            Ali Abdaal | Content Creator &amp; YouTuber with 6.4M subscribers
          </p>
          <div className="mt-8">
            <PillButton href="#">Start for Free</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
