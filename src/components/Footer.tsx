import Link from "next/link";
import Logo from "./Logo";

const columns: Record<string, string[]> = {
  Company: ["About Us", "Careers", "Partners", "Affiliate Program", "Creator Partnerships"],
  Product: ["Why Riverside", "Pricing", "For Business", "Mac App", "Mobile Apps", "FAQ", "Support"],
  Features: [
    "Recording",
    "Livestream",
    "Editor",
    "Hosting",
    "AI Co-Creator",
    "Magic Clips",
    "Transcriptions",
    "Captions",
    "Magic Audio",
    "AI Show Notes",
    "Teleprompter",
    "Async Recording",
    "Media Board",
    "Clean Up",
    "Overlays",
    "Studio Branding",
    "AI Translation",
    "All AI Features",
  ],
  "Use Cases": [
    "Video Marketing",
    "Tutorial Videos",
    "Virtual Events",
    "Podcasts",
    "Learning & Development",
    "Internal Communications",
    "Webinars",
    "Customer Testimonials",
    "Virtual Conferences",
    "Live Show",
    "Split-Screen Video",
  ],
  Tools: [
    "Podcast Maker",
    "Podcast Recorder",
    "Live Podcast",
    "YouTube Video Maker",
    "Screen Recorder",
    "Video Compressor",
    "WAV To MP3",
    "Podcast Name Generator",
    "YouTube Name Generator",
    "Mic Test",
    "Webcam Test",
    "YouTube Transcript Generator",
    "Top Podcast Charts",
    "Free Podcast Music",
    "All Tools",
  ],
  Solutions: ["Podcasters", "Producers", "Marketers"],
};

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#f4f2ee] px-6 pt-20 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-ink">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-sm text-ink/55 hover:text-ink">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-3 lg:col-span-6">
            <h4 className="mb-4 text-sm font-semibold text-ink">Resources</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {[
                "Riverside University",
                "Recorded On Riverside",
                "Help Center",
                "Case Studies",
                "Blog",
                "Creators Newsletter",
                "Masterclass",
                "Community Hub",
                "Video Editing Glossary",
              ].map((item) => (
                <Link key={item} href="#" className="text-sm text-ink/55 hover:text-ink">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-sm rounded-2xl border border-ink/10 bg-white p-5">
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-purple/10 text-purple">
                ♪
              </span>
              Podcast guides
            </p>
            <ul className="space-y-2 text-sm text-ink/55">
              <li>How to Start a Podcast in 2026: The Complete 10-Step Guide</li>
              <li>How to Start a Podcast on YouTube: 6 Steps [2026]</li>
              <li>How to Record a Podcast Remotely: 4 Methods Compared</li>
              <li>Video Podcast Software: Top Tools to Record, Edit &amp; Publish</li>
            </ul>
          </div>
          <div className="flex items-center rounded-lg border border-ink/20 px-3 py-2 text-xs font-medium text-ink/70">
            ▶ Google Play
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ink/10 py-8 sm:flex-row">
          <div className="flex items-center gap-6">
            <Logo />
            <span className="text-sm text-ink/50">© 2026 RiversideFM, Inc.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-ink/60">
            <span className="flex items-center gap-1.5">🌐 English</span>
            <Link href="#" className="hover:text-ink">
              Terms
            </Link>
            <Link href="#" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ink">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
