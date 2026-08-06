"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function BlogPage() {
  const { t } = useLanguage();
  const b = t.blogPage;
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const categoryLabel = (id: string) => b.categories.find((c) => c.id === id)?.label ?? id;

  const filtered = b.posts.filter((post) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(q) || post.summary.toLowerCase().includes(q);
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const selected = b.posts.find((p) => p.id === selectedId);

  return (
    <>
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 text-center lg:px-10">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1767474365536-ef81bfa24c8a?w=1600&q=80&auto=format&fit=crop)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/40 to-[#0d0d0d]" />
          <div className="relative">
            <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">{b.badge}</span>
            <h1 className="mx-auto max-w-2xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{b.heading}</h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">{b.subheading}</p>
          </div>
        </section>

        <section className="bg-[#f4f2ee] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-black/10 pb-8 lg:flex-row lg:items-center">
              <div className="flex flex-wrap gap-2">
                {b.categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                      activeCategory === cat.id ? "bg-[#0d0d0d] text-white" : "border border-black/10 bg-white text-ink/50 hover:border-black/20 hover:text-ink"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={b.searchPlaceholder}
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-purple lg:w-64"
              />
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
                {filtered.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedId(post.id)}
                    className="group flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-5 text-left shadow-[0_20px_60px_-35px_rgba(0,0,0,0.2)] transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)]"
                  >
                    <div>
                      <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl">
                        <div
                          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(https://images.unsplash.com/photo-${post.image}?w=700&q=80&auto=format&fit=crop)` }}
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink backdrop-blur">
                          {categoryLabel(post.category)}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 px-2 text-[11px] text-ink/40">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-3 px-2 font-heading text-lg font-medium leading-snug text-ink">{post.title}</h3>
                      <p className="mb-5 mt-2 line-clamp-3 px-2 text-sm leading-relaxed text-ink/55">{post.summary}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between border-t border-black/5 px-2 pt-5">
                      <span className="text-[11px] text-ink/40">
                        {b.writtenBy} <span className="font-semibold text-ink/70">{post.author}</span>
                      </span>
                      <span className="text-xs font-semibold text-ink transition-transform group-hover:translate-x-1">{b.readArticle} →</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-xl rounded-3xl border border-black/10 bg-white p-16 text-center">
                <h3 className="mb-2 text-lg font-semibold text-ink">{b.noResultsTitle}</h3>
                <p className="text-sm text-ink/50">{b.noResultsDesc}</p>
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
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-ink/5 text-sm text-ink hover:bg-ink/10"
              aria-label="Close"
            >
              ✕
            </button>

            <span className="mb-4 inline-flex w-fit items-center rounded-full bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink/60">
              {categoryLabel(selected.category)}
            </span>
            <h2 className="mb-5 font-heading text-2xl font-medium leading-tight text-ink sm:text-[32px]">{selected.title}</h2>

            <div className="mb-7 flex flex-wrap items-center gap-3 border-b border-black/5 pb-5 text-xs text-ink/40">
              <span>
                {b.writtenBy} <span className="font-semibold text-ink/70">{selected.author}</span>
              </span>
              <span>●</span>
              <span>{selected.date}</span>
              <span>●</span>
              <span>{selected.readTime}</span>
            </div>

            <div className="space-y-5">
              <p className="text-base font-semibold leading-relaxed text-ink/80">{selected.summary}</p>
              <div className="whitespace-pre-line text-sm leading-relaxed text-ink/60">{selected.content}</div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 sm:flex-row">
              <span className="text-xs text-ink/40">{b.readMore}</span>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full bg-[#0d0d0d] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-black"
              >
                {b.ctaButton}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
