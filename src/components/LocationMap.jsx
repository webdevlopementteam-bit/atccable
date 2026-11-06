"use client";

import { useState } from "react";
import { ArrowUpRight, Factory, Mail, MapPin } from "./Icons";

// Location cards that switch the embedded Google Map.
export default function LocationMap({ locations }) {
  const [active, setActive] = useState(0);
  const loc = locations[active];
  const query = encodeURIComponent(loc.lines.join(", "));

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.6fr]">
      <ul className="grid grid-cols-1 gap-4">
        {locations.map((l, i) => {
          const on = i === active;
          return (
            <li key={l.id}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`flex w-full items-start gap-4 rounded-3xl border p-5 text-left transition-all md:p-6 ${
                  on ? "border-brand-500 bg-brand-50/60 shadow-[0_18px_40px_-28px_rgba(11,107,203,0.7)]" : "border-line bg-white hover:border-brand-200"
                }`}
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl transition-colors ${on ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-500"}`}>
                  {l.id === "head-office" ? <MapPin className="h-6 w-6" /> : <Factory className="h-6 w-6" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold tracking-wider text-brand-600 uppercase">{l.label}</span>
                  <span className="mt-1 block font-display text-lg font-semibold text-ink">{l.name}</span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-ink/65">{l.lines.join(", ")}</span>
                  {l.email && (
                    <span className="mt-2 flex items-center gap-1.5 text-sm text-ink/60">
                      <Mail className="h-4 w-4 text-brand-500" /> {l.email}
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="relative min-h-[360px] overflow-hidden rounded-3xl border border-line">
        <iframe
          key={loc.id}
          title={`Map — ${loc.label}`}
          src={`https://www.google.com/maps?q=${query}&output=embed`}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href={loc.map}
          target="_blank"
          rel="noopener"
          className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-lg hover:text-brand-600"
        >
          Get directions <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
