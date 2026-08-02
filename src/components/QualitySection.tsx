const speakers = [
  { name: "Marsha", status: "Ready" },
  { name: "Stephen", status: "Ready" },
  { name: "All Speakers", status: "" },
];

export default function QualitySection() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-2">
          <h2 className="font-heading text-[34px] font-medium leading-tight text-ink sm:text-[42px]">
            Studio-level quality.
            <br />
            No studio required.
          </h2>
          <div>
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#0d0d0d] px-3 py-1.5 text-xs font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              REC
            </span>
            <h3 className="text-2xl font-semibold text-ink">
              Local recording for sharp video &amp; audio
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/60">
              Capture up to 4K video and uncompressed audio in separate tracks, unaffected by
              internet connection.
            </p>
          </div>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl bg-[#161616]">
            <div className="relative flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-[#5a4636] to-[#241c15]">
              <div className="h-24 w-24 rounded-full bg-white/10" />
            </div>
            <div className="relative flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-[#3a3a3a] to-[#141414]">
              <div className="h-24 w-24 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#161616]">
            <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-[#4a4a4a] to-[#141414]">
              <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                4K <span className="font-normal text-white/70">High quality recording</span>
              </span>
              <div className="h-20 w-20 rounded-full bg-white/10" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-[500px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-3.5">
            <span className="text-sm font-semibold text-ink">Download separate tracks</span>
            <span className="text-xs text-ink/40">High quality recording</span>
          </div>
          {speakers.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between border-b border-black/5 px-5 py-3.5 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-purple/60 to-purple" />
                <div>
                  <p className="text-sm font-medium text-ink">{s.name}</p>
                  {s.status && <p className="text-xs text-ink/40">{s.status}</p>}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden text-xs text-ink/40 sm:inline">3840 x 2160</span>
                <span className="text-xs font-medium text-purple">WAV</span>
                <span className="text-xs font-medium text-purple">MP4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
