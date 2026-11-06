import { Suspense } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import LocationMap from "@/components/LocationMap";
import { ArrowUpRight, Facebook, Mail, MapPin, Phone, Shield, Truck, Box } from "@/components/Icons";
import { company, locations, telHref } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: "Contact ATC Cable Pro — head office in Pitampura, three manufacturing units in Narela and Bawana, Delhi.",
};

const QUICK = [
  { icon: Phone, label: "Call us", value: company.phone, href: company.phoneHref, bg: "#e8f1fd", fg: "#0b6bcb" },
  { icon: Mail, label: "Email us", value: company.infoEmail, href: `mailto:${company.infoEmail}`, bg: "#e6f5e4", fg: "#3f9a2f" },
  { icon: MapPin, label: "Head office", value: locations[0].lines.join(", "), href: "#locations", bg: "#fdf2e0", fg: "#d48a12" },
];

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-white pt-28 pb-14 md:pt-40 md:pb-20">
        <svg className="pointer-events-none absolute top-24 right-0 hidden h-[320px] w-[320px] text-brand-200 lg:block" aria-hidden>
          <defs>
            <pattern id="contact-dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" opacity="0.55" />
        </svg>
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wider text-ink/40 uppercase">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span>/</span>
            <span className="text-ink/70">Contact</span>
          </nav>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/60 px-4 py-1.5 text-sm font-medium text-brand-700">
                <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_0_4px_rgba(166,190,27,0.25)]" />
                We usually reply within one working day
              </p>
              <h1 className="mt-6 font-display text-3xl leading-[1.1] font-semibold tracking-tight text-ink md:text-[2.6rem] xl:text-5xl">
                Let&apos;s power your{" "}
                <span className="relative inline-block text-brand-500">
                  next project.
                  <svg className="absolute -bottom-2.5 left-0 h-3.5 w-full text-lime-400" viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden>
                    <path d="M3 11 C 80 3, 200 3, 297 9" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink/60">
              Dealer enquiries, project quotations, bulk supply or technical questions — the ATC team is here to help you
              choose the right wire or cable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {QUICK.map(({ icon: Icon, label, value, href, bg, fg }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-3xl border border-line bg-white p-5 shadow-[0_18px_44px_-36px_rgba(10,18,34,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_28px_56px_-30px_rgba(11,107,203,0.35)] md:p-6"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl" style={{ background: bg, color: fg }}>
                  <Icon className="h-7 w-7" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold tracking-wider text-ink/45 uppercase">{label}</span>
                  <span className="mt-1 block font-display text-base leading-snug font-semibold [overflow-wrap:anywhere] text-ink md:text-[17px]">{value}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/30 transition-colors group-hover:text-brand-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1.45fr_1fr] lg:px-8">
          <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_30px_70px_-50px_rgba(10,18,34,0.45)] md:p-10">
            <p className="eyebrow">Enquiry form</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink">Send us an enquiry</h2>
            <p className="mt-2 mb-8 text-ink/55">Tell us what you need and we&apos;ll get back with pricing and availability.</p>
            <Suspense fallback={<div className="h-[520px] animate-pulse rounded-2xl bg-surface" />}>
              <ContactForm to={company.salesEmail} />
            </Suspense>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 p-7 text-white md:p-8">
              <span className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full border-[32px] border-white/10" aria-hidden />
              <p className="relative text-xs font-semibold tracking-[0.2em] text-lime-300 uppercase">Sales team</p>
              <ul className="relative mt-5 grid grid-cols-1 gap-2.5">
                {company.salesPhones.map((n) => (
                  <li key={n}>
                    <a href={telHref(n)} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 font-display text-lg font-semibold ring-1 ring-white/15 transition-colors hover:bg-white/20">
                      <Phone className="h-5 w-5 text-lime-300" /> {n}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="relative mt-7 text-xs font-semibold tracking-[0.2em] text-lime-300 uppercase">Customer care</p>
              <ul className="relative mt-4 space-y-2.5 text-[15px] text-white/85">
                <li>
                  <a href={company.mobileHref} className="flex items-center gap-2.5 hover:text-white"><Phone className="h-4 w-4 text-lime-300" /> {company.mobile}</a>
                </li>
                <li>
                  <a href={company.phoneHref} className="flex items-center gap-2.5 hover:text-white"><Phone className="h-4 w-4 text-lime-300" /> {company.phone}</a>
                </li>
                {[company.infoEmail, company.accountsEmail, company.email].map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="flex items-center gap-2.5 [overflow-wrap:anywhere] hover:text-white"><Mail className="h-4 w-4 shrink-0 text-lime-300" /> {e}</a>
                  </li>
                ))}
              </ul>
              <a href={company.whatsappHref} target="_blank" rel="noopener" className="relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime-400 px-5 py-3.5 font-semibold text-ink transition-colors hover:bg-lime-300">
                Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[2rem] border border-line p-7">
              <p className="font-display text-lg font-semibold text-ink">Why work with ATC</p>
              <ul className="mt-5 space-y-4">
                {[
                  { icon: Shield, t: "ISI-marked, BIS licensed products" },
                  { icon: Box, t: "Bulk supply in all sizes & specifications" },
                  { icon: Truck, t: "Quotes usually within one working day" },
                ].map(({ icon: Icon, t }) => (
                  <li key={t} className="flex items-center gap-3 text-[15px] text-ink/75">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-500"><Icon className="h-5 w-5" /></span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={company.facebook}
              target="_blank"
              rel="noopener"
              className="group flex items-center justify-between rounded-[2rem] border border-line p-6 transition-colors hover:border-brand-200"
            >
              <span className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e7f0fe] text-[#1877f2]"><Facebook className="h-6 w-6" /></span>
                <span>
                  <span className="block font-semibold text-ink">Follow us on Facebook</span>
                  <span className="block text-sm text-ink/50">facebook.com/atccables</span>
                </span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-ink/30 transition-colors group-hover:text-brand-500" />
            </a>
          </aside>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="scroll-mt-28 border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow">Our locations</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              Head office & <span className="text-brand-500">manufacturing units.</span>
            </h2>
            <p className="mt-4 text-ink/60">Select a location to see it on the map.</p>
          </div>
          <LocationMap locations={locations} />
        </div>
      </section>
    </>
  );
}
