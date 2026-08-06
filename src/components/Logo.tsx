export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d0d0d]">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path
            d="M1 8L5 3L9 9L15 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={`font-heading text-[17px] font-bold tracking-wide ${
          dark ? "text-white" : "text-[#0d0d0d]"
        }`}
      >
        DAD STUDIO
      </span>
    </div>
  );
}
