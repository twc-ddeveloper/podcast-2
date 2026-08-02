"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RoomBookingForm from "@/components/RoomBookingForm";
import { useLanguage } from "@/lib/LanguageContext";

const roomMeta = [
  { id: "podcast-odasi", images: ["1767474365536-ef81bfa24c8a", "1638389746813-5a5784e752f6"] },
  { id: "toplanti-odasi", images: ["1761735486549-7a6a04e67061", "1677100091678-1e96b3de3a38"] },
  { id: "cekim-odasi", images: ["1759784120360-8b5044b71f47", "1702669010428-0063fa6eb5ed"] },
];

export default function OdalarPage() {
  const { t } = useLanguage();
  const rooms = t.studioBooking.rooms;
  const r = t.roomsPage;

  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#0d0d0d] px-6 py-24 text-center lg:px-10">
          <span className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
            {t.studioBooking.badge}
          </span>
          <h1 className="mx-auto max-w-2xl font-heading text-[38px] font-medium leading-tight text-white sm:text-[50px]">{r.heading}</h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/60">{r.subheading}</p>
        </section>

        {rooms.map((room, i) => (
          <section key={room.name} id={roomMeta[i].id} className="scroll-mt-20 border-b border-black/5 bg-white px-6 py-20 lg:px-10">
            <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-2 lg:items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="grid grid-cols-3 gap-3">
                  <div
                    className="col-span-2 aspect-[4/3] rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-${roomMeta[i].images[0]}?w=900&q=80&auto=format&fit=crop)` }}
                  />
                  <div
                    className="aspect-[4/3] rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-${roomMeta[i].images[1]}?w=500&q=80&auto=format&fit=crop)` }}
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-[30px] font-medium leading-tight text-ink sm:text-[36px]">{room.name}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/60">{room.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {room.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-medium text-ink/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-2xl font-semibold text-ink">
                  {room.price}
                  <span className="text-base font-normal text-ink/40">{t.studioBooking.hour}</span>
                </p>
                <a
                  href="#rezervasyon"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-purple px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-purple-dark"
                >
                  {t.studioBooking.bookNow}
                </a>
              </div>
            </div>
          </section>
        ))}

        <section id="rezervasyon" className="scroll-mt-20 bg-[#f4f2ee] px-6 py-24 lg:px-10">
          <RoomBookingForm roomNames={rooms.map((r) => r.name)} />
        </section>
      </main>
      <Footer />
    </>
  );
}
