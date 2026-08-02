"use client";

import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function EditingSection() {
  const { t } = useLanguage();
  const features = t.editing.features;
  const toolbarIcons = t.editing.toolbar;

  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="max-w-xl font-heading text-[36px] font-medium leading-tight text-ink sm:text-[46px]">
          {t.editing.title1}
          <br />
          {t.editing.title2}
        </h2>

        <div className="mt-16 overflow-hidden rounded-3xl bg-[#e9e6df] p-4 sm:p-10">
          <div className="mx-auto max-w-[1000px] overflow-hidden rounded-xl bg-[#161616] shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="flex">
              <div className="flex-1 p-5">
                <div className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[#3a3a3a] to-[#141414]" />
                <div className="mt-4 flex items-end gap-[2px] rounded-lg bg-black/40 p-4">
                  {Array.from({ length: 60 }).map((_, i) => (
                    <span key={i} className="w-1 flex-shrink-0 rounded-full bg-lime-400/80" style={{ height: `${10 + ((i * 37) % 40)}px` }} />
                  ))}
                </div>
              </div>
              <div className="hidden w-16 flex-col items-center gap-5 border-l border-white/10 py-6 text-[10px] text-white/50 sm:flex">
                {toolbarIcons.map((icon) => (
                  <span key={icon} className="flex flex-col items-center gap-1">
                    <span className="h-6 w-6 rounded-md bg-white/10" />
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title}>
              <div className="mb-4 h-10 w-10 rounded-xl bg-purple/10" />
              <h3 className="mb-2 text-base font-semibold text-ink">{f.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-ink">{t.editing.quote}</p>
          <p className="mt-4 text-sm text-ink/50">{t.editing.quoteAuthor}</p>
          <div className="mt-8">
            <PillButton href="/odalar">{t.editing.cta}</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
