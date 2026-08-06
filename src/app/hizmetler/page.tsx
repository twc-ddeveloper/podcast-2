"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PillButton from "@/components/PillButton";
import { useLanguage } from "@/lib/LanguageContext";

export default function HizmetlerPage() {
  const { t } = useLanguage();
  const s = t.servicesPage;
  const [expandedId, setExpandedId] = useState<string | null>("001");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedService = s.services.find((svc) => svc.id === selectedId);

  return (
    <>
      <Nav />
      <main className="relative bg-[#0d0d0d]">
        <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
          <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none" className="max-w-none flex-shrink-0 opacity-[0.09]">
            <circle cx="750" cy="750" r="120" stroke="#c7b8ff" strokeWidth="46" />
            <circle cx="750" cy="750" r="290" stroke="#c7b8ff" strokeWidth="46" />
            <circle cx="750" cy="750" r="460" stroke="#c7b8ff" strokeWidth="46" />
            <circle cx="750" cy="750" r="630" stroke="#c7b8ff" strokeWidth="46" />
            <circle cx="750" cy="750" r="780" stroke="#c7b8ff" strokeWidth="34" />
          </svg>
        </div>

        <section className="relative z-10 px-6 py-24 text-center lg:px-10">
          <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">{s.badge}</span>
          <h1 className="mx-auto max-w-2xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{s.heading}</h1>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{s.subheading}</p>
        </section>

        <section className="relative z-10 px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            {selectedService ? (
              <div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white/60 transition-colors hover:text-white"
                >
                  ← {s.backToAll}
                </button>

                <div className="mb-12 max-w-3xl">
                  <span className="mb-3 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{selectedService.id}</span>
                  </span>
                  <h2 className="mb-5 font-heading text-[32px] font-medium leading-tight text-white sm:text-[42px]">{selectedService.title}</h2>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-white/60">{selectedService.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  <div className="space-y-6 lg:col-span-8">
                    <div className="rounded-3xl bg-[#161616] p-8 sm:p-10">
                      <h3 className="mb-5 flex items-center gap-2.5 text-sm font-semibold uppercase tracking-wide text-white">
                        <span className="h-5 w-1.5 rounded-full bg-purple" />
                        {s.overviewLabel}
                      </h3>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-white/60">{selectedService.detailedContent}</p>
                    </div>

                    <div className="rounded-3xl bg-[#161616] p-8 sm:p-10">
                      <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white">{s.outcomesLabel}</h3>
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {s.outcomes.map((o) => (
                          <div key={o.title} className="flex items-start gap-3">
                            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple/15 text-[10px] font-bold text-purple">✓</span>
                            <div>
                              <h4 className="text-sm font-semibold text-white">{o.title}</h4>
                              <p className="mt-1 text-xs leading-relaxed text-white/50">{o.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 lg:col-span-4">
                    <div className="rounded-3xl bg-[#161616] p-7">
                      <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/40">{s.capabilitiesLabel}</h3>
                      <div className="flex flex-col gap-2.5">
                        {selectedService.categories.map((cat) => (
                          <div key={cat} className="flex items-center gap-2.5 rounded-xl bg-[#0d0d0d] px-4 py-3">
                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
                            <span className="text-xs font-medium text-white/80">{cat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-3xl bg-[#161616] p-7">
                      <h3 className="mb-2 text-base font-semibold text-white">{s.ctaTitle}</h3>
                      <p className="mb-5 text-xs leading-relaxed text-white/50">{s.ctaDesc}</p>
                      <PillButton href="/iletisim" variant="purple" size="sm" className="w-full">
                        {s.ctaButton}
                      </PillButton>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="border-t border-white/10">
                {s.services.map((service) => {
                  const isExpanded = expandedId === service.id;
                  return (
                    <div key={service.id} className="border-b border-white/10">
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : service.id)}
                        className="flex w-full items-center justify-between gap-6 py-8 text-left sm:py-9"
                      >
                        <div className="flex items-center gap-5 sm:gap-8">
                          <span className="text-xs font-semibold text-white/40 sm:text-sm">{service.id}</span>
                          <h3
                            className={`font-heading text-lg font-medium transition-colors sm:text-2xl ${
                              isExpanded ? "text-purple" : "text-white/80"
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>
                        <span
                          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-sm transition-colors ${
                            isExpanded ? "border-white bg-white text-black" : "border-white/15 text-white/50"
                          }`}
                        >
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="max-w-3xl pb-10 pl-10 pr-4 sm:pl-16">
                          <p className="mb-6 text-sm leading-relaxed text-white/60">{service.description}</p>
                          <button
                            onClick={() => setSelectedId(service.id)}
                            className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-purple-dark"
                          >
                            {s.overviewLabel} →
                          </button>
                          <div className="flex flex-wrap gap-2">
                            {service.categories.map((cat) => (
                              <span key={cat} className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-white/70">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="relative z-10 px-6 pb-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">{s.workflowLabel}</p>
            <h2 className="mb-14 max-w-lg font-heading text-[28px] font-medium leading-tight text-white sm:text-[34px]">{s.workflowTitle}</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {s.steps.map((step) => (
                <div key={step.number} className="flex flex-col justify-between rounded-2xl bg-[#161616] p-6">
                  <span className="mb-6 font-heading text-3xl font-medium text-white/15">{step.number}</span>
                  <div>
                    <h3 className="mb-2 text-sm font-semibold text-white">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-white/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-6 pb-28 lg:px-10">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 rounded-[2.5rem] bg-[#161616] p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">{s.equipmentLabel}</p>
              <h3 className="mb-4 font-heading text-2xl font-medium leading-tight text-white sm:text-[30px]">{s.equipmentTitle}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/50">{s.equipmentDesc}</p>
              <ul className="space-y-2.5">
                {s.equipmentChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-purple/15 text-[9px] font-bold text-purple">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {s.equipment.map((eq) => (
                <div key={eq.name} className="rounded-xl bg-[#0d0d0d] p-4 text-center">
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-white/40">{eq.category}</span>
                  <span className="text-xs font-semibold text-white sm:text-sm">{eq.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
