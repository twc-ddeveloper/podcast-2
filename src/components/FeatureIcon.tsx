const paths: Record<string, React.ReactNode> = {
  doc: (
    <>
      <path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </>
  ),
  layers: (
    <>
      <path d="M12 2 3 7l9 5 9-5-9-5Z" />
      <path d="M3 12l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  brand: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12a4 4 0 0 1 8 0M12 8v.01M12 16v.01" />
    </>
  ),
  captions: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M6 10h4M6 14h8M14 10h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18M8 15l2 2 4-4" />
    </>
  ),
  invoice: (
    <>
      <path d="M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" />
      <path d="M9 12h6M9 16h6M9 8h2" />
    </>
  ),
  tag: (
    <>
      <path d="M20.6 12.4 12.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2a2 2 0 0 1 0-2.8L10.6 2.4a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v6.6a2 2 0 0 1-.4 1.4Z" />
      <circle cx="15" cy="7" r="1.5" />
    </>
  ),
  support: (
    <>
      <path d="M3 12a9 9 0 0 1 18 0v6a2 2 0 0 1-2 2h-2v-7h4M3 18a2 2 0 0 0 2 2h2v-7H3v5Z" />
    </>
  ),
  refresh: (
    <>
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8M3 12a9 9 0 0 0 15.3 6.4L21 16" />
      <path d="M21 3v5h-5M3 21v-5h5" />
    </>
  ),
};

export default function FeatureIcon({ name }: { name: keyof typeof paths }) {
  return (
    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple/10 text-purple">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  );
}
