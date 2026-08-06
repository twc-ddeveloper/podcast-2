"use client";

import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

const chat = [
  { name: "Dilan", msg: "Farklı departmanlar için ayrı panolar oluşturabilir miyiz?" },
  { name: "Kerem", msg: "Bu güncellemeler işimi çok kolaylaştıracak!!" },
  { name: "Ece", msg: "Süper olmuş!" },
  { name: "Barış", msg: "Haftalık raporlar otomatik olarak paydaşlara gidebilir mi?" },
];

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="mb-1.5 text-lg font-semibold text-white">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-white/60">{desc}</p>
    </div>
  );
}

export default function WebinarSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="max-w-2xl font-heading text-[34px] font-medium leading-tight text-white sm:text-[42px]">{t.webinar.title}</h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {t.webinar.topFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <span className="font-semibold text-white">Kerem&rsquo;in Stüdyosu</span>
              <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> {t.webinar.live}
              </span>
              <span className="text-white/40">00:24:12</span>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70">{t.webinar.invite}</span>
          </div>
          <div className="grid sm:grid-cols-[1fr_260px]">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#1f6d5a] to-[#0e2b23] p-6">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                src="https://assets.mixkit.co/videos/42644/42644-720.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f6d5a]/80 to-[#0e2b23]/80" />
              <p className="relative font-heading text-2xl font-semibold text-white/90 sm:text-3xl">
                İş
                <br />
                Dünyası
              </p>
              <span className="relative mt-4 inline-flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white">
                {t.webinar.liveWebinar}
              </span>
              <div
                className="absolute right-6 top-6 h-16 w-24 rounded-lg bg-cover bg-center ring-2 ring-white/20 sm:h-20 sm:w-28"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1638389746813-5a5784e752f6?w=300&q=80&auto=format&fit=crop)" }}
              />
            </div>
            <div className="flex flex-col border-t border-white/10 sm:border-l sm:border-t-0">
              <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white">{t.webinar.publicChat}</div>
              <div className="flex-1 space-y-3 overflow-hidden p-4">
                {chat.map((c) => (
                  <div key={c.name} className="text-xs">
                    <span className="font-semibold text-white">{c.name} </span>
                    <span className="text-white/60">{c.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {t.webinar.bottomFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-white">{t.webinar.quote}</p>
          <p className="mt-4 text-sm text-white/50">{t.webinar.quoteAuthor}</p>
          <div className="mt-8">
            <PillButton href="/odalar">{t.nav.reserve}</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
