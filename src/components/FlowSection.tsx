"use client";

import { useState } from "react";
import PillButton from "./PillButton";

const steps = [
  { name: "Record", desc: "Record solo or with guests, in top quality." },
  { name: "Edit", desc: "Use the text-based editor, and AI when you want it." },
  { name: "Repurpose", desc: "Turn one recording into clips and more with AI." },
  { name: "Stream", desc: "Stream in HD to multiple destinations at once." },
  { name: "Publish", desc: "Publish straight to Youtube, Spotify and Apple." },
];

export default function FlowSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-[36px] font-medium leading-tight text-white sm:text-[46px]">
            End to end content creation.
            <br />
            All in one flow.
          </h2>

          <div className="mt-12 flex flex-col">
            {steps.map((s, i) => (
              <button
                key={s.name}
                onMouseEnter={() => setActive(i)}
                className={`flex items-start gap-6 border-t border-white/10 py-6 text-left transition-opacity ${
                  active === i ? "opacity-100" : "opacity-40"
                }`}
              >
                <span className="font-heading text-2xl font-medium text-white sm:text-3xl">
                  {s.name}
                </span>
                <span className="mt-1 max-w-[280px] text-sm text-white/60">{s.desc}</span>
              </button>
            ))}
            <div className="border-t border-white/10" />
          </div>

          <div className="mt-10">
            <PillButton href="#" variant="purple">
              Start for Free
            </PillButton>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple/90 shadow-lg shadow-purple/30">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2V20M2 11H20" stroke="white" strokeWidth="0" />
                  <path d="M8 6L16 11L8 16V6Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl bg-black/50 px-4 py-3 text-xs text-white/70 backdrop-blur">
              <span>{steps[active].name} in progress</span>
              <span className="flex h-2 w-2 rounded-full bg-purple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
