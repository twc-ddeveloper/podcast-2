"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import PillButton from "./PillButton";

const productMenu = {
  Products: [
    { name: "Recording", desc: "4K video and audio recorder." },
    { name: "Editing", desc: "AI, text-based video editor." },
    { name: "Live Streaming", desc: "For livestreams in full HD." },
    { name: "Webinars", desc: "Host, record, and repurpose." },
    { name: "Hosting", desc: "Podcast publishing and analytics." },
  ],
  Features: [
    "Transcribing",
    "Magic Clips",
    "Magic Audio",
    "AI Co-Creator",
    "AI Translation",
    "Captions",
    "AI Show Notes",
    "Async Recording",
  ],
};

const solutionsMenu = {
  For: ["Podcasters", "Producers", "Marketers"],
  "Use cases": [
    "Podcasts",
    "Video testimonials",
    "Webinars",
    "Video marketing",
    "Learning & Development",
    "Virtual conferences",
    "Internal communications",
    "Tutorial videos",
  ],
};

const resourcesMenu = {
  Learn: [
    "Riverside University",
    "Blog",
    "Free tools",
    "Webinars",
    "Masterclass",
  ],
  Community: ["Case studies", "Creators Newsletter", "Community hub", "Recorded on Riverside"],
  Support: ["Help Center", "Contact support", "Blog", "University"],
};

function NavDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-[15px] font-medium text-[#1d1d1d] hover:text-black">
        {label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-6 shadow-2xl">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link href="/" aria-label="Riverside home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavDropdown label="Product">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                  Products
                </p>
                <ul className="space-y-3">
                  {productMenu.Products.map((p) => (
                    <li key={p.name}>
                      <Link href="#" className="block hover:opacity-70">
                        <span className="block text-sm font-semibold text-ink">{p.name}</span>
                        <span className="block text-xs text-ink/50">{p.desc}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                  Features
                </p>
                <ul className="space-y-2.5">
                  {productMenu.Features.map((f) => (
                    <li key={f}>
                      <Link href="#" className="text-sm text-ink/80 hover:text-purple">
                        {f}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown label="Solutions">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                  For
                </p>
                <ul className="space-y-2.5">
                  {solutionsMenu.For.map((f) => (
                    <li key={f}>
                      <Link href="#" className="text-sm text-ink/80 hover:text-purple">
                        {f}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                  Use cases
                </p>
                <ul className="grid grid-cols-1 gap-2.5">
                  {solutionsMenu["Use cases"].map((f) => (
                    <li key={f}>
                      <Link href="#" className="text-sm text-ink/80 hover:text-purple">
                        {f}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </NavDropdown>

          <NavDropdown label="Resources">
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(resourcesMenu).map(([title, items]) => (
                <div key={title}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
                    {title}
                  </p>
                  <ul className="space-y-2.5">
                    {items.map((f) => (
                      <li key={f}>
                        <Link href="#" className="text-sm text-ink/80 hover:text-purple">
                          {f}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavDropdown>

          <Link href="#" className="text-[15px] font-medium text-[#1d1d1d] hover:text-black">
            For Business
          </Link>
          <Link href="#" className="text-[15px] font-medium text-[#1d1d1d] hover:text-black">
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="#" className="text-[15px] font-medium text-ink/80 hover:text-black">
            Contact Sales
          </Link>
          <Link href="#" className="text-[15px] font-medium text-ink/80 hover:text-black">
            Login
          </Link>
          <PillButton href="#" variant="dark" size="sm">
            Start for Free
          </PillButton>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-base font-medium text-ink">
              Product
            </Link>
            <Link href="#" className="text-base font-medium text-ink">
              Solutions
            </Link>
            <Link href="#" className="text-base font-medium text-ink">
              Resources
            </Link>
            <Link href="#" className="text-base font-medium text-ink">
              For Business
            </Link>
            <Link href="#" className="text-base font-medium text-ink">
              Pricing
            </Link>
            <hr className="border-black/10" />
            <Link href="#" className="text-base font-medium text-ink">
              Contact Sales
            </Link>
            <Link href="#" className="text-base font-medium text-ink">
              Login
            </Link>
            <PillButton href="#" variant="dark" className="w-full text-center">
              Start for Free
            </PillButton>
          </div>
        </div>
      )}
    </header>
  );
}
