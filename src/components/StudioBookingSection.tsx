import Link from "next/link";
import PillButton from "./PillButton";

const rooms = [
  {
    name: "Podcast Room",
    desc: "Fully equipped recording booth with pro mics, acoustic treatment, and multi-cam setup.",
    price: "$45",
    unit: "/ hour",
    tags: ["Up to 4 guests", "4K cameras", "Sound-treated"],
    from: "#5a4636",
    to: "#1c150f",
  },
  {
    name: "Meeting Room",
    desc: "Bright, quiet room for team syncs, client calls, and hybrid meetings with a big screen.",
    price: "$30",
    unit: "/ hour",
    tags: ["Up to 8 people", "Video conferencing", "Whiteboard"],
    from: "#3a4a5a",
    to: "#12181f",
  },
  {
    name: "Shooting Room",
    desc: "Green screen and lighting rig ready for video shoots, interviews, and product content.",
    price: "$55",
    unit: "/ hour",
    tags: ["Green screen", "Studio lighting", "Teleprompter"],
    from: "#3d5a4a",
    to: "#101a14",
  },
];

export default function StudioBookingSection() {
  return (
    <section className="bg-white px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="mb-4 inline-flex items-center rounded-full bg-purple/10 px-3 py-1.5 text-xs font-semibold text-purple">
              STUDIO SPACE
            </span>
            <h2 className="max-w-lg font-heading text-[34px] font-medium leading-tight text-ink sm:text-[42px]">
              Book a room. Walk in. Hit record.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
              Reserve a physical studio room in minutes — for a podcast session, a client
              meeting, or a full video shoot. Pick a room, pick a time, you&rsquo;re booked.
            </p>
          </div>
          <Link href="#" className="text-sm font-semibold text-ink underline underline-offset-4">
            View all rooms
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {rooms.map((r) => (
            <div
              key={r.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
            >
              <div
                className="aspect-[4/3]"
                style={{ background: `linear-gradient(160deg, ${r.from}, ${r.to})` }}
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-ink">{r.name}</h3>
                  <p className="text-sm font-semibold text-ink">
                    {r.price}
                    <span className="font-normal text-ink/40">{r.unit}</span>
                  </p>
                </div>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-ink/60">{r.desc}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-ink/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <PillButton href="#" variant="dark" size="sm" className="w-full">
                  Book Now
                </PillButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 rounded-2xl bg-purple/5 px-5 py-4 text-sm text-ink/60">
          <span className="text-purple">●</span>
          Live availability, instant confirmation, and calendar sync — coming soon to your
          dashboard.
        </div>
      </div>
    </section>
  );
}
