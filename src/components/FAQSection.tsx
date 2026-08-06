"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const leftBars = Array.from({ length: 34 }, (_, i) => {
  const x = i / 33;
  return 12 + 65 * Math.exp(-Math.pow((x - 0.32) * 3.2, 2)) + 55 * Math.exp(-Math.pow((x - 0.72) * 3.2, 2));
});
const rightBars = Array.from({ length: 34 }, (_, i) => 15 + 55 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6)));

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="sss" className="relative overflow-hidden bg-[#f4f2ee] px-6 py-20 lg:px-10">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.05]" aria-hidden="true">
        <div className="flex h-[280px] w-full max-w-[1000px] divide-x divide-ink/30 rounded-3xl border border-ink/30">
          <div className="flex flex-1 items-end justify-center gap-1 p-8">
            {leftBars.map((h, i) => (
              <span key={i} className="w-1.5 flex-shrink-0 rounded-full bg-ink" style={{ height: `${h.toFixed(2)}%` }} />
            ))}
          </div>
          <div className="flex flex-1 items-end justify-center gap-1 p-8">
            {rightBars.map((h, i) => (
              <span key={i} className="w-1.5 flex-shrink-0 rounded-full bg-ink" style={{ height: `${h.toFixed(2)}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[640px]">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-ink/40">{t.faq.badge}</p>
        <h2 className="mb-8 text-center font-heading text-4xl font-medium leading-tight text-ink sm:text-5xl">{t.faq.title}</h2>

        <div className="flex flex-col">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-medium text-ink">{item.q}</span>
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-ink/40">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="pb-4 text-sm leading-relaxed text-ink/55">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
