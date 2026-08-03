"use client";

import { useState } from "react";
import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

const clips = ["1638389746813-5a5784e752f6", "1702669010428-0063fa6eb5ed", "1655947714947-451781994012", "1767474365536-ef81bfa24c8a"];

export default function AIJumpInSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const editFeatures = t.aiJumpIn.features;

  return (
    <section className="bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="font-heading text-[36px] font-medium leading-tight text-white sm:text-[46px]">
          {t.aiJumpIn.title1}
          <br />
          {t.aiJumpIn.title2}
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-3xl bg-[#161616] p-8">
            <div className="mb-6 flex items-center gap-2 text-white/70">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 2L10 6L3 10V2Z" fill="white" />
                </svg>
              </span>
              <h3 className="text-xl font-semibold text-white">{t.aiJumpIn.episodeReady}</h3>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-white/60">{t.aiJumpIn.episodeDesc}</p>
            <div
              className="mt-8 aspect-video rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1677100091678-1e96b3de3a38?w=900&q=80&auto=format&fit=crop)" }}
            />
          </div>

          <div className="rounded-3xl bg-[#161616] p-8">
            <p className="mb-4 text-sm font-semibold text-white/50">{t.aiJumpIn.magicClips}</p>
            <div className="grid grid-cols-2 gap-3">
              {clips.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-${img}?w=400&q=80&auto=format&fit=crop)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/90">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M2 1.5L7 4.5L2 7.5V1.5Z" fill="#0d0d0d" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60">{t.aiJumpIn.magicClipsDesc}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#161616] p-8">
            <h3 className="mb-2 font-heading text-2xl font-medium text-white">{t.aiJumpIn.hoursTitle}</h3>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/60">{t.aiJumpIn.hoursDesc}</p>
            <div className="flex flex-col">
              {editFeatures.map((f, i) => (
                <button
                  key={f}
                  onMouseEnter={() => setActive(i)}
                  className={`border-t border-white/10 py-4 text-left text-sm font-medium transition-opacity ${
                    active === i ? "text-white opacity-100" : "text-white/50 opacity-70"
                  }`}
                >
                  {f}
                </button>
              ))}
              <div className="border-t border-white/10" />
            </div>
            <div className="mt-8">
              <PillButton href="/odalar">{t.nav.reserve}</PillButton>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1759784120360-8b5044b71f47?w=900&q=80&auto=format&fit=crop)" }}
          >
            <div className="flex h-full min-h-[320px] items-center justify-center bg-black/30">
              <button className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink shadow-lg">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#0d0d0d" />
                </svg>
                {t.aiJumpIn.listen}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
