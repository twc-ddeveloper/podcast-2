"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjelerPage() {
  const { t } = useLanguage();
  const p = t.projectsPage;
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = activeFilter === "all" ? p.projects : p.projects.filter((proj) => proj.id === activeFilter);
  const selected = p.projects.find((proj) => proj.id === selectedId);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 text-center lg:px-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1761735486549-7a6a04e67061?w=1600&q=80&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 to-[#0d0d0d]" />
          <div className="relative">
            <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">{p.badge}</span>
            <h1 className="mx-auto max-w-2xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{p.heading}</h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{p.subheading}</p>
          </div>
        </section>

        <section className="bg-white px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 flex flex-wrap gap-2 border-b border-black/5 pb-8">
              {p.filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    activeFilter === f.id ? "bg-[#0d0d0d] text-white" : "border border-black/10 text-ink/50 hover:border-black/20 hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                {filtered.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedId(proj.id)}
                    className="group rounded-3xl border border-black/5 p-5 text-left shadow-[0_20px_60px_-35px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
                  >
                    <div className="mb-4 flex items-center justify-between px-2">
                      <h3 className="font-heading text-lg font-medium text-ink">{proj.title}</h3>
                      <span className="text-xs font-medium text-ink/40">{proj.category}</span>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <div
                        className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(https://images.unsplash.com/photo-${proj.image}?w=900&q=80&auto=format&fit=crop)` }}
                      />
                      <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-white/95 px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {p.interactiveCase}
                      </span>
                    </div>
                    <p className="mt-5 px-2 text-sm text-ink/60">{proj.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5 px-2">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-ink/5 px-3 py-1 text-[10px] font-medium text-ink/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-xl rounded-3xl border border-black/10 p-16 text-center">
                <h3 className="mb-2 text-lg font-semibold text-ink">{p.noResultsTitle}</h3>
                <p className="text-sm text-ink/50">{p.noResultsDesc}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      {selected && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-y-auto rounded-3xl bg-white shadow-2xl lg:max-h-[80vh] lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/80 text-sm text-white hover:bg-black"
              aria-label="Close"
            >
              ✕
            </button>

            <div
              className="h-56 flex-shrink-0 bg-cover bg-center lg:h-auto lg:w-[40%]"
              style={{ backgroundImage: `url(https://images.unsplash.com/photo-${selected.image}?w=900&q=80&auto=format&fit=crop)` }}
            />

            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
              <div>
                <span className="mb-4 inline-flex items-center rounded-full bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink/60">
                  {selected.category}
                </span>
                <h2 className="mb-6 font-heading text-2xl font-medium leading-tight text-ink sm:text-3xl">{selected.title}</h2>

                <div className="space-y-5">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-ink">{p.challengeLabel}</h4>
                    <p className="text-sm leading-relaxed text-ink/60">{selected.challenge}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-ink">{p.solutionLabel}</h4>
                    <p className="text-sm leading-relaxed text-ink/60">{selected.solution}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-ink">{p.techLabel}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.tech.map((tech) => (
                        <span key={tech} className="rounded-md border border-black/10 px-2.5 py-1 text-xs text-ink/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-ink">{p.resultsLabel}</h4>
                    <ul className="space-y-1.5">
                      {selected.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-ink/70">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end border-t border-black/5 pt-6">
                <a
                  href="/iletisim"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0d0d0d] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
                >
                  {p.inquireButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
