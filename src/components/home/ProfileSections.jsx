import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Board, Bolt, Braid, Bulb, CableEnd, Check, Coil, Flame, Flexible, Floodlight, Grid, HighBay, Home, Layers, Monitor, Shield,
  ShieldCheck, Strip, StreetLamp, Sun, Thermometer, Tube, Wall, Waves,
} from "../Icons";
import { atcPro, brands, clientHighlights, clients, exhibitions, mission, otherCertifications, productFamilies, vision } from "@/data/site";

function SectionTitle({ eyebrow, children, intro, center = false, light = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-display text-3xl leading-[1.12] tracking-tight text-balance text-ink ${light ? "font-semibold md:text-4xl" : "font-bold md:text-[2.75rem]"}`}>{children}</h2>
      {intro && <p className="mt-4 text-[17px] leading-relaxed text-ink/60">{intro}</p>}
    </div>
  );
}

// Product range cards — photo, accent, icons and CTA per family (same order as `productFamilies`)
const FAMILY_STYLE = [
  {
    image: "/images/profile/range-wires.webp", accent: "#0b6bcb", tint: "#e8f1fd", icon: Coil,
    sub: "Safe, durable wires for every home and building.",
    itemIcons: [Home, Flexible, Braid, Shield], cta: "Explore wires", href: "/products",
  },
  {
    image: "/images/profile/range-cables.webp", accent: "#1f9a6e", tint: "#e3f5ee", icon: CableEnd,
    sub: "High-performance cables for industry & infrastructure.",
    itemIcons: [Layers, Sun, Waves, Board], cta: "Explore cables", href: "/products",
  },
  {
    image: "/images/profile/range-led-indoor.webp", accent: "#e8930c", tint: "#fdf1df", icon: Bulb,
    sub: "Modern, efficient lighting for comfortable spaces.",
    itemIcons: [Bulb, Grid, Wall, Strip], cta: "Explore indoor lighting", href: "/catalogue#indoor-commercial-project",
  },
  {
    image: "/images/profile/range-led-industrial.webp", accent: "#7a3fd6", tint: "#efe8fc", icon: Monitor,
    sub: "Rugged, high-performance lighting for tough sites.",
    itemIcons: [Floodlight, StreetLamp, HighBay, Tube], cta: "Explore industrial lighting", href: "/catalogue#niwa-outdoor-landscape",
  },
];

/* Complete range: wires, industrial cables and both LED lighting families */
export function ProductFamilies() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="flex items-center justify-center gap-2.5 text-[11px] font-semibold tracking-[0.16em] whitespace-nowrap text-navy-800 uppercase md:gap-4 md:text-sm md:tracking-[0.3em]">
            <span className="h-px w-6 bg-brand-500 md:w-24" aria-hidden />
            Our brands & product range
            <span className="h-px w-6 bg-brand-500 md:w-24" aria-hidden />
          </p>
          <h2 className="mt-4 font-display text-[1.9rem] leading-[1.1] font-extrabold tracking-tight text-navy-900 uppercase md:text-5xl xl:text-[3.4rem] xl:whitespace-nowrap">
            Engineered for every <span className="text-brand-500">connection</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink/60 md:text-base">
            From reliable wires and industrial cables to advanced LED lighting solutions, ATC delivers quality, performance
            and innovation for a brighter, safer tomorrow.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-white lg:grid-cols-4" aria-label="Our brands">
          {brands.map((b, i) => (
            <li
              key={b.name}
              className={`flex flex-col items-center justify-between gap-3 border-line p-5 text-center md:px-8 ${i % 2 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
            >
              <div className="flex h-14 items-center justify-center">
                <Image src={b.logo} alt={b.name} width={240} height={90} unoptimized={b.logo.endsWith(".svg")} className={`w-auto max-w-full object-contain ${b.name === "ATCOM MEGA" ? "h-14" : "h-10 md:h-12"}`} />
              </div>
              <p className="text-[13px] leading-snug text-ink/55">{b.tag}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5 2xl:gap-6">
          {productFamilies.map((f, i) => {
            const st = FAMILY_STYLE[i];
            const Icon = st.icon;
            return (
              <article
                key={f.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_18px_44px_-30px_rgba(10,18,34,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(11,107,203,0.35)]"
              >
                <div className="relative aspect-[420/240] overflow-hidden">
                  <Image src={st.image} alt={f.title} fill sizes="(min-width: 1280px) 440px, (min-width: 640px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full px-4 py-1.5 text-sm font-semibold text-white shadow" style={{ background: st.accent }}>
                    0{i + 1}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col px-5 pb-7 xl:px-4 min-[1800px]:px-6">
                  <div className="-mt-7 flex items-start gap-2.5 min-[1800px]:-mt-8 min-[1800px]:gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-white shadow-sm min-[1800px]:h-20 min-[1800px]:w-20" style={{ background: st.tint, color: st.accent }}>
                      <Icon className="h-6 w-6 min-[1800px]:h-9 min-[1800px]:w-9" />
                    </span>
                    <div className="min-h-[7.25rem] pt-9 min-[1800px]:min-h-[7.5rem] min-[1800px]:pt-10">
                      <h3 className="font-display text-[16.5px] leading-tight font-semibold whitespace-nowrap text-navy-900 xl:text-[15.5px] min-[1800px]:text-xl">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-snug text-ink/55">{st.sub}</p>
                    </div>
                  </div>

                  <ul className="mt-4 flex-1 space-y-3">
                    {f.items.map((it, k) => {
                      const ItemIcon = st.itemIcons[k] ?? Check;
                      return (
                        <li key={it} className="flex gap-3 text-[14.5px] leading-snug whitespace-nowrap text-ink/75 xl:text-[13.5px] min-[1800px]:text-[14.5px]">
                          <span className="mt-px shrink-0" style={{ color: st.accent }}><ItemIcon className="h-5 w-5" /></span>
                          <span>{it}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href={st.href}
                    className="mt-7 inline-flex w-fit items-center gap-3 self-start rounded-full border-[1.5px] border-[var(--c)] px-6 py-3 text-xs font-semibold tracking-[0.14em] whitespace-nowrap xl:px-4 xl:text-[11px] xl:tracking-[0.08em] min-[1800px]:px-6 min-[1800px]:text-xs min-[1800px]:tracking-[0.14em] text-[var(--c)] uppercase transition-colors hover:bg-[var(--c)] hover:text-white"
                    style={{ "--c": st.accent }}
                  >
                    {st.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const PRO_ICONS = [ShieldCheck, Shield, Layers, Thermometer, Flame, Bolt];

/* ATC PRO — the upgraded premium copper cable brand */
export function AtcProSpotlight() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgba(11,107,203,0.55)] md:p-10">
            <Image src="/images/profile/brand-atc-pro.webp" alt="ATC PRO — Accurate Transmission Cable" width={709} height={179} className="mx-auto h-auto w-56 md:w-72" />
            <Image src="/images/profile/atc-pro-packs.webp" alt="ATC PRO FR PVC insulated cable packs" width={1600} height={1291} sizes="(min-width: 1024px) 560px, 90vw" className="mt-6 h-auto w-full" />
          </div>
          <span className="absolute -top-4 -right-2 rounded-full bg-lime-400 px-4 py-2 text-sm font-semibold text-ink shadow-lg md:-right-4">New look · Upgraded insulation</span>
        </div>
        <div>
          <SectionTitle eyebrow="Introducing ATC PRO" intro={atcPro.intro}>
            Premium copper cables, <span className="text-brand-500">now ATC PRO.</span>
          </SectionTitle>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {atcPro.points.map((p, i) => {
              const Icon = PRO_ICONS[i % PRO_ICONS.length];
              return (
                <div key={p.title} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500"><Icon className="h-6 w-6" /></span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href="/products/pvc-insulated-building-wires" className="btn-blue mt-10 !px-8 !py-4 !text-base">
            Explore ATC PRO wires <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Mission & vision */
export function MissionVision({ light = false }) {
  const blocks = [
    { title: "Our mission", items: mission, color: "#0b6bcb", tint: "#f6f9fe", border: "#e2ebf8" },
    { title: "Our vision", items: vision, color: "#3f9a2f", tint: "#f6fbf4", border: "#e1eedb" },
  ];
  return (
    <section className="border-t border-line bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionTitle center light={light} eyebrow="Mission & vision">
          Making ATC a <span className="text-brand-500">household name.</span>
        </SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-3xl border p-7 md:p-9" style={{ background: b.tint, borderColor: b.border }}>
              <h3 className="font-display text-2xl font-semibold" style={{ color: b.color }}>{b.title}</h3>
              <ol className="mt-6 space-y-4">
                {b.items.map((t, i) => (
                  <li key={t} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-semibold text-white" style={{ background: b.color }}>{i + 1}</span>
                    <span className="pt-1 text-[15px] leading-relaxed text-ink/75">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Clients & approvals marquee + certifications */
export function ClientsMarquee() {
  const row = [...clientHighlights, ...clientHighlights];
  return (
    <section className="border-t border-line bg-white py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionTitle center eyebrow="Our clients & approvals" intro={`Approved and supplied to ${clients.length}+ government departments, PSUs and institutions across India and Bhutan.`}>
          Trusted by <span className="text-brand-500">India&apos;s infrastructure leaders.</span>
        </SectionTitle>
      </div>
      <div className="relative mt-12 space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {[0, 1].map((r) => (
          <ul key={r} className="animate-marquee flex w-max gap-4" style={{ animationDuration: "60s", animationDirection: r ? "reverse" : "normal" }} aria-hidden={r === 1}>
            {(r ? [...row].reverse() : row).map((c, i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3.5 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-brand-500" />
                <span className="text-[15px] font-semibold text-ink/80">{c}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="mx-auto mt-12 flex w-full max-w-[1400px] flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
        {otherCertifications.map((c) => (
          <span key={c.title} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
            <ShieldCheck className="h-4 w-4" /> {c.title}
          </span>
        ))}
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
          <ShieldCheck className="h-4 w-4" /> 4 × ISI marks (BIS)
        </span>
      </div>
    </section>
  );
}

/* Exhibitions gallery */
export function ExhibitionsGallery({ light = false }) {
  const shown = exhibitions.filter((e) => e.image).slice(-6).reverse();
  return (
    <section className="border-t border-line bg-white py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle light={light} eyebrow="Exhibitions">
            Meet us at <span className="text-brand-500">India&apos;s leading expos.</span>
          </SectionTitle>
          <p className="max-w-md text-ink/60">From Pragati Maidan to Guwahati and Imphal — ATC and ATCOM have exhibited at {exhibitions.length} trade shows since 2015.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {shown.map((e, i) => (
            <figure key={e.image} className={`group relative overflow-hidden rounded-3xl ${i === 0 ? "col-span-2 row-span-2 md:col-span-2" : ""}`}>
              <div className={`relative ${i === 0 ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]" : "aspect-[4/3]"}`}>
                <Image src={e.image} alt={`${e.name}, ${e.place} ${e.date}`} fill sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur">
                <span className="block text-sm font-semibold text-ink">{e.name}</span>
                <span className="block text-xs text-ink/55">{e.place} · {e.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
