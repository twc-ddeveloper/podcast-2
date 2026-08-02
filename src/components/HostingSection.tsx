"use client";

import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

const platforms = [
  { label: "S", color: "#1ed760", angle: 300 },
  { label: "YT", color: "#ff0000", angle: 210 },
  { label: "OC", color: "#f43f5e", angle: 150 },
  { label: "PC", color: "#f97316", angle: 30 },
  { label: "AP", color: "#a855f7", angle: 330 },
];

export default function HostingSection() {
  const { t } = useLanguage();
  const features = t.hosting.features;

  return (
    <section className="bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1300px] items-center gap-16 lg:grid-cols-2">
        <div className="relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-white/15" />
          <div className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-white/15" />
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1c1c1c]">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path d="M1 10L6 4L11 11L19 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {platforms.map((p) => {
            const rad = (p.angle * Math.PI) / 180;
            const r = p.label === "S" || p.label === "YT" ? 140 : 210;
            const x = Math.cos(rad) * r;
            const y = Math.sin(rad) * r;
            return (
              <div
                key={p.label}
                className="absolute flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold text-white shadow-lg"
                style={{ background: p.color, transform: `translate(${x}px, ${y}px)` }}
              >
                {p.label}
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="font-heading text-[34px] font-medium leading-tight text-white sm:text-[42px]">
            {t.hosting.title1}
            <br />
            {t.hosting.title2}
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {features.map((f) => (
              <div key={f.title}>
                <h3 className="mb-1.5 text-lg font-semibold text-white">{f.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <PillButton href="/odalar">{t.nav.reserve}</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
