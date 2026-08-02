"use client";

import { useLanguage } from "@/lib/LanguageContext";

const reels = [
  { name: "Ayşe K.", img: "1638389746813-5a5784e752f6" },
  { name: "Demandly.io", img: "1761735486549-7a6a04e67061" },
  { name: "Mert Y.", img: "1702669010428-0063fa6eb5ed" },
  { name: "Kolin & Samet", img: "1759784120360-8b5044b71f47" },
  { name: "Podcast TR", img: "1655947714947-451781994012" },
  { name: "Huberman TR", img: "1767474365536-ef81bfa24c8a" },
];

export default function MadeWithRiverside() {
  const { t } = useLanguage();
  return (
    <section className="overflow-hidden bg-[#0d0d0d] pb-28 pt-4">
      <h2 className="mb-10 text-center font-heading text-[28px] font-medium text-white sm:text-[34px]">
        {t.madeWith.title}
      </h2>

      <div className="flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:justify-center [&::-webkit-scrollbar]:hidden">
        {reels.map((c) => (
          <div
            key={c.name}
            className="relative h-[280px] w-[190px] flex-shrink-0 overflow-hidden rounded-2xl bg-cover bg-center sm:h-[320px] sm:w-[220px]"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-${c.img}?w=500&q=80&auto=format&fit=crop)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
            <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              {c.name}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 2.5L11 7L4 11.5V2.5Z" fill="#0d0d0d" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
