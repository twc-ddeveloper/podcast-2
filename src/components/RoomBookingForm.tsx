"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function RoomBookingForm({ roomNames }: { roomNames: string[] }) {
  const { t } = useLanguage();
  const r = t.roomsPage;
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-black/10 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] sm:p-10">
      <h3 className="mb-6 font-heading text-2xl font-medium text-ink">{r.formTitle}</h3>

      {submitted ? (
        <div className="rounded-2xl bg-purple/10 px-5 py-6 text-center text-sm font-medium text-purple">{r.formSuccess}</div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid gap-4 sm:grid-cols-2"
        >
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
            {r.formName}
            <input required type="text" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {r.formEmail}
            <input required type="email" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {r.formPhone}
            <input type="tel" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {r.formDate}
            <input required type="date" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {r.formTime}
            <input required type="time" className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
            {r.formGuests}
            <input type="number" min={1} defaultValue={2} className="rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <select required defaultValue="" className="rounded-xl border border-black/10 px-4 py-3 text-sm text-ink outline-none focus:border-purple">
            <option value="" disabled>
              {roomNames[0].split(" ")[0]}
            </option>
            {roomNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
            {r.formNote}
            <textarea rows={3} className="resize-none rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-purple" />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-[#0d0d0d] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-black sm:col-span-2"
          >
            {r.formSubmit}
          </button>
        </form>
      )}
    </div>
  );
}
