import PillButton from "./PillButton";

const topFeatures = [
  {
    title: "Stream everywhere. All at once.",
    desc: "Go live in full HD to LinkedIn, Youtube, Instagram, Twitch, and more.",
  },
  {
    title: "Connect with your audience",
    desc: "Take audience call-ins, host Q&As, and manage all chats in one place.",
  },
  {
    title: "Add custom branding",
    desc: "Use your own overlays, colors, logo, and more to stay on-brand.",
  },
];

const bottomFeatures = [
  {
    title: "Turn one webinar into weeks of content",
    desc: "Your webinar is recorded in high quality and instantly turns into clips, summaries and more.",
  },
  {
    title: "Connect to Hubspot",
    desc: "Registrant details are automatically synced for effortless lead generation.",
  },
  {
    title: "Boost attendance",
    desc: "Get built-in registration with automated email reminders to increase turnout.",
  },
];

const chat = [
  { name: "Dylan", msg: "Is there a way to create different dashboards for departments?" },
  { name: "Stephen", msg: "These updates are going to make my life so much easier!!" },
  { name: "Colin", msg: "That's super cool!" },
  { name: "Galiet", msg: "Can we automate weekly reports so they go directly to stakeholders?" },
];

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="mb-1.5 text-lg font-semibold text-white">{title}</h3>
      <p className="max-w-xs text-sm leading-relaxed text-white/60">{desc}</p>
    </div>
  );
}

export default function WebinarSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <h2 className="max-w-2xl font-heading text-[34px] font-medium leading-tight text-white sm:text-[42px]">
          Run all your webinars &amp; live events like a pro.
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {topFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#141414]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <span className="font-semibold text-white">Jason&rsquo;s Studio</span>
              <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> LIVE
              </span>
              <span className="text-white/40">00:24:12</span>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/70">
              Invite
            </span>
          </div>
          <div className="grid sm:grid-cols-[1fr_260px]">
            <div className="relative aspect-video bg-gradient-to-br from-[#1f6d5a] to-[#0e2b23] p-6">
              <p className="font-heading text-2xl font-semibold text-white/90 sm:text-3xl">
                Business
                <br />
                Matters
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 rounded bg-white/10 px-2 py-1 text-xs font-semibold text-white">
                Live Webinar
              </span>
              <div className="absolute right-6 top-6 h-16 w-24 rounded-lg bg-white/10 sm:h-20 sm:w-28" />
            </div>
            <div className="flex flex-col border-t border-white/10 sm:border-l sm:border-t-0">
              <div className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white">
                Public chat
              </div>
              <div className="flex-1 space-y-3 overflow-hidden p-4">
                {chat.map((c) => (
                  <div key={c.name} className="text-xs">
                    <span className="font-semibold text-white">{c.name} </span>
                    <span className="text-white/60">{c.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {bottomFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-white">
            &ldquo;The Full HD streaming and real-time engagement elevated the event&hellip; and
            the overall quality was outstanding.&rdquo;
          </p>
          <p className="mt-4 text-sm text-white/50">
            Julie Bergstein | Senior Brand Marketing Manager
          </p>
          <div className="mt-8">
            <PillButton href="#">Start for Free</PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
