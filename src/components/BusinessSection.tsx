import Link from "next/link";
import PillButton from "./PillButton";

export default function BusinessSection() {
  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 80% 40%, #4a3626 0%, transparent 55%), linear-gradient(120deg, #1a1a1a 0%, #0d0d0d 60%)",
        }}
      />
      <div className="relative mx-auto max-w-[1300px]">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-purple">
          Riverside for Business
        </p>
        <h2 className="max-w-xl font-heading text-[34px] font-medium leading-tight text-white sm:text-[44px]">
          Built for marketers
          <br />
          and producers
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
          Give your teams the ability to collaborate and produce content at scale with the
          control to maintain the quality your brand requires. Plus, 24/7 priority support to
          cover all your needs.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <PillButton href="#">Book a demo</PillButton>
          <Link href="#" className="text-sm font-semibold text-white underline underline-offset-4">
            Learn More
          </Link>
        </div>
        <div className="mt-14 flex items-center gap-3">
          <span className="font-heading text-3xl font-bold text-white">4.8</span>
          <span className="text-sm text-white/50">On G2 with 1,582 reviews</span>
        </div>
      </div>
    </section>
  );
}
