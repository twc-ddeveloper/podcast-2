const creators = [
  { name: "Jay Clouse", from: "#8b6f47", to: "#2b2320" },
  { name: "Notion x Riverside", from: "#2f2f2f", to: "#0d0d0d" },
  { name: "Ali Abdaal", from: "#4a5568", to: "#1a1e26" },
  { name: "Colin & Samir", from: "#6b4b8a", to: "#1f1730" },
  { name: "Demandly.io", from: "#1f6d5a", to: "#0e2b23" },
  { name: "Huberman Lab", from: "#7a5230", to: "#241b12" },
];

export default function MadeWithRiverside() {
  return (
    <section className="overflow-hidden bg-[#0d0d0d] pb-28 pt-4">
      <h2 className="mb-10 text-center font-heading text-[28px] font-medium text-white sm:text-[34px]">
        Made with Riverside
      </h2>

      <div className="flex gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:justify-center [&::-webkit-scrollbar]:hidden">
        {creators.map((c) => (
          <div
            key={c.name}
            className="relative h-[280px] w-[190px] flex-shrink-0 overflow-hidden rounded-2xl sm:h-[320px] sm:w-[220px]"
            style={{
              background: `linear-gradient(160deg, ${c.from}, ${c.to})`,
            }}
          >
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
