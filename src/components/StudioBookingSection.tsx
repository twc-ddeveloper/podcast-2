"use client";

import Link from "next/link";
import PillButton from "./PillButton";
import { useLanguage } from "@/lib/LanguageContext";

const roomImages = ["1767474365536-ef81bfa24c8a", "1761735486549-7a6a04e67061", "1759784120360-8b5044b71f47"];

export default function StudioBookingSection() {
  const { t } = useLanguage();
  const rooms = t.studioBooking.rooms;

  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="mb-4 inline-flex items-center rounded-full bg-purple/10 px-3 py-1.5 text-xs font-semibold text-purple">
              {t.studioBooking.badge}
            </span>
            <h2 className="max-w-lg font-heading text-[34px] font-medium leading-tight text-ink sm:text-[42px]">
              {t.studioBooking.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">{t.studioBooking.desc}</p>
          </div>
          <Link href="/odalar" className="text-sm font-semibold text-ink underline underline-offset-4">
            {t.studioBooking.viewAll}
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {rooms.map((r, i) => (
            <div key={r.name} className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-${roomImages[i]}?w=700&q=80&auto=format&fit=crop)` }}
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-ink">{r.name}</h3>
                  <p className="text-sm font-semibold text-ink">
                    {r.price}
                    <span className="font-normal text-ink/40">{t.studioBooking.hour}</span>
                  </p>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink/60">{r.desc}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {r.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <PillButton href="/odalar" variant="dark" size="sm" className="w-full">
                  {t.studioBooking.bookNow}
                </PillButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 rounded-2xl bg-purple/5 px-5 py-4 text-sm text-ink/60">
          <span className="text-purple">●</span>
          {t.studioBooking.comingSoon}
        </div>
      </div>
    </section>
  );
}
