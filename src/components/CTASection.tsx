import PillButton from "./PillButton";

export default function CTASection() {
  return (
    <section className="relative z-0 flex h-[420px] flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center">
      <h2 className="font-heading text-[32px] font-medium leading-tight text-white sm:text-[42px]">
        Your all-in-one studio. Ready when you are.
      </h2>
      <div className="mt-8">
        <PillButton href="#">Start for Free</PillButton>
      </div>
    </section>
  );
}
