"use client";

import { useEffect, useState } from "react";
import PillButton from "./PillButton";

const tagsRow1 = ["Podcasts", "Interviews", "Webinars", "Live streams"];
const tagsRow2 = ["Social clips", "Video marketing", "Transcriptions"];
const allTags = [...tagsRow1, ...tagsRow2];

const brands = ["Spotify", "Microsoft", "Vercel", "MARVEL", "HubSpot", "The New York Times", "TED", "The Economist"];

function TagPill({ label, checked }: { label: string; checked: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] font-medium transition-colors duration-500 ${
        checked
          ? "border-white/0 bg-white/15 text-white"
          : "border-white/25 bg-white/5 text-white/85"
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
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % allTags.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.95) 100%), radial-gradient(circle at 15% 60%, #3a2f22 0%, transparent 45%), radial-gradient(circle at 85% 55%, #24211c 0%, transparent 50%), linear-gradient(180deg, #4a3f30 0%, #1c1a17 55%, #0d0d0d 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center px-6 pb-24 pt-24 text-center lg:pt-32">
        <h1 className="font-heading text-[44px] font-medium leading-[1.05] text-white sm:text-[58px] lg:text-[72px]">
          Create your
          <br />
          best content yet
        </h1>
        <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-white/70">
          Riverside is the AI-powered platform that lets you record, edit, repurpose, and
          distribute studio-quality content as easily as if you had a crew behind you.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {tagsRow1.map((t) => (
            <TagPill key={t} label={t} checked={allTags[activeIndex] === t} />
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          {tagsRow2.map((t) => (
            <TagPill key={t} label={t} checked={allTags[activeIndex] === t} />
          ))}
        </div>

        <div className="mt-10">
          <PillButton href="#" variant="purple">
            Start for Free
          </PillButton>
        </div>
        <p className="mt-4 text-sm text-white/50">
          *No credit card needed.{" "}
          <span className="cursor-pointer underline underline-offset-2">Free plan available.</span>
        </p>
      </div>

      <div className="relative border-t border-white/10 bg-black/30 py-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-wide text-white/40">
          Trusted by:
        </p>
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
