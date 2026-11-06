"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Check } from "./Icons";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] outline-none transition placeholder:text-ink/35 hover:border-ink/20 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

const TYPES = ["Dealer enquiry", "Project quotation", "Bulk supply", "Technical query"];

function Field({ label, required, className = "", children }) {
  return (
    <label className={`grid grid-cols-1 gap-2 ${className}`}>
      <span className="text-sm font-medium text-ink/80">
        {label} {required && <span className="text-brand-500">*</span>}
      </span>
      {children}
    </label>
  );
}

// No backend (static site) — the enquiry opens in the visitor's email client,
// addressed to the sales team. Swap for an API route / form service when ready.
export default function ContactForm({ to }) {
  const params = useSearchParams();
  const product = params.get("product") ?? "";
  const [type, setType] = useState(product ? "Project quotation" : TYPES[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const subject = `${type}${data.product ? ` — ${data.product}` : ""} from ${data.name}`;
    const body = [
      `Enquiry type: ${type}`,
      `Name: ${data.name}`,
      `Company: ${data.company || "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Product: ${data.product || "-"}`,
      "",
      data.message,
    ].join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium text-ink/80">I&apos;m interested in</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                type === t ? "border-brand-500 bg-brand-500 text-white shadow-[0_8px_20px_-10px_rgba(11,107,203,0.8)]" : "border-line bg-white text-ink/70 hover:border-brand-200 hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <Field label="Full name" required>
        <input name="name" required autoComplete="name" className={field} placeholder="Your full name" />
      </Field>
      <Field label="Company">
        <input name="company" autoComplete="organization" className={field} placeholder="Firm / organisation" />
      </Field>
      <Field label="Email" required>
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </Field>
      <Field label="Phone" required>
        <input name="phone" type="tel" required autoComplete="tel" pattern="[0-9+\-\s]{8,}" className={field} placeholder="+91" />
      </Field>
      <Field label="Product of interest" className="sm:col-span-2">
        <input name="product" defaultValue={product} className={field} placeholder="e.g. 1.5 mm² FRLS house wire, 90 m × 50 coils" />
      </Field>
      <Field label="Your requirement" required className="sm:col-span-2">
        <textarea name="message" required rows={5} className={`${field} resize-y`} placeholder="Sizes, cores, quantity, delivery location…" />
      </Field>

      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs text-ink/50">
          <Check className="h-4 w-4 text-brand-500" /> Opens your email app with the enquiry pre-filled.
        </p>
        <button type="submit" className="btn-blue !px-8 !py-4 !text-base">
          {sent ? <><Check className="h-4 w-4" /> Opened in email</> : <>Send enquiry <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
    </form>
  );
}
