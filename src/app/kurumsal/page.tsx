"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PillButton from "@/components/PillButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function KurumsalPage() {
  const { t } = useLanguage();
  const b = t.businessPage;

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 text-center lg:px-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1761735486549-7a6a04e67061?w=1600&q=80&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 to-[#0d0d0d]" />
          <div className="relative">
            <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">{b.badge}</span>
            <h1 className="mx-auto max-w-2xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{b.heading}</h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{b.subheading}</p>
            <div className="mt-9">
              <PillButton href="/iletisim">{b.ctaButton}</PillButton>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {b.perks.map((p) => (
              <div key={p.title} className="rounded-3xl border border-black/5 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.2)]">
                <div className="mb-4 h-10 w-10 rounded-xl bg-purple/10" />
                <h3 className="mb-2 text-lg font-semibold text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0d0d0d] px-6 py-24 text-center lg:px-10">
          <h2 className="mx-auto max-w-lg font-heading text-[32px] font-medium leading-tight text-white sm:text-[40px]">{b.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/60">{b.ctaDesc}</p>
          <div className="mt-8">
            <PillButton href="/iletisim">{b.ctaButton}</PillButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
