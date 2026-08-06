"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function KurumsalPage() {
  const { t } = useLanguage();
  const a = t.aboutPage;

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 text-center lg:px-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1702669010428-0063fa6eb5ed?w=1600&q=80&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 to-[#0d0d0d]" />
          <div className="relative">
            <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">{a.badge}</span>
            <h1 className="mx-auto max-w-2xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{a.heading}</h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{a.subheading}</p>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div
              className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1500&q=80&auto=format&fit=crop)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8 sm:p-12">
                <div className="max-w-xl">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60">{a.missionLabel}</span>
                  <p className="mt-1 font-heading text-lg font-medium leading-snug text-white sm:text-2xl">{a.missionQuote}</p>
                </div>
              </div>
            </div>

            <div className="mt-24">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink/40">{a.valuesLabel}</p>
              <h2 className="mb-14 max-w-xl font-heading text-[28px] font-medium leading-tight text-ink sm:text-[34px]">{a.valuesTitle}</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {a.values.map((v, i) => (
                  <div key={v.title} className="rounded-3xl border border-black/5 p-7 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.2)]">
                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-sm font-semibold text-purple">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mb-2 text-base font-semibold text-ink">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-ink/60">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
