"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function IletisimPage() {
  const { t } = useLanguage();
  const c = t.contactPage;
  const [submitted, setSubmitted] = useState(false);

  const info = [
    { label: c.address, value: c.addressValue },
    { label: c.phone, value: c.phoneValue },
    { label: c.email, value: c.emailValue },
    { label: c.instagram, value: c.instagramValue },
    { label: c.hours, value: c.hoursValue },
  ];

  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#0d0d0d] px-6 py-24 text-center lg:px-10">
          <h1 className="mx-auto max-w-xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{c.heading}</h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">{c.subheading}</p>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="mb-6 text-lg font-semibold text-ink">{c.infoTitle}</h2>
              <div className="flex flex-col gap-6">
                {info.map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{item.label}</p>
                    <p className="mt-1 text-sm text-ink/70">{item.value}</p>
                  </div>
                ))}
              </div>
              <div
                className="mt-8 aspect-video rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1761735486549-7a6a04e67061?w=800&q=80&auto=format&fit=crop)" }}
              />
            </div>

            <div className="rounded-3xl border border-black/10 bg-[#f4f2ee] p-8 sm:p-10">
              {submitted ? (
                <div className="rounded-2xl bg-purple/10 px-5 py-6 text-center text-sm font-medium text-purple">{c.formSuccess}</div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-4"
                >
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
                    {c.formName}
                    <input required type="text" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-purple" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
                    {c.formEmail}
                    <input required type="email" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-purple" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
                    {c.formSubject}
                    <input type="text" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-purple" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
                    {c.formMessage}
                    <textarea required rows={5} className="resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-purple" />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-[#0d0d0d] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black"
                  >
                    {c.formSubmit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
