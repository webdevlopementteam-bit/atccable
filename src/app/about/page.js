import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { CtaBand } from "@/components/ui";
import {
  ArrowRight, ArrowUpRight, Award, Bolt, Certificate, Check, Factory, Flame, Flask, Gauge, Gear, Home as HomeIcon,
  Layers, Mail, MapPin, Phone, Shield, ShieldCheck, Thermometer, Tower,
} from "@/components/Icons";
import { ExhibitionsGallery, MissionVision } from "@/components/home/ProfileSections";
import {
  britishStandards, clients, company, directors, facilityImages, inspectionStages, ledPartners, locations, profileIntro, qualityPolicy, routineTests, specialGrades, standards, stats,
  telHref, turnover, typeTests,
} from "@/data/site";

export const metadata = {
  title: "About Us & Quality Assurance",
  description: "Since 1991, ATC has manufactured ISI-marked PVC & XLPE wires and cables in Delhi with rigorous quality control, in-house laboratory testing and 4 BIS licences.",
};

const STAT_STYLE = [
  { icon: Factory, bg: "#e8f1fd", fg: "#0b6bcb" },
  { icon: Factory, bg: "#e6f5e4", fg: "#3f9a2f" },
  { icon: Certificate, bg: "#fdf2e0", fg: "#d48a12" },
  { icon: Bolt, bg: "#ecebfc", fg: "#3b3fc7" },
];

const PILLARS = [
  {
    icon: Shield,
    title: "Complete safety",
    text: "ISI approval means protection against electrical shocks, short circuits and fires — on every reel we ship.",
    bg: "#e8f1fd",
    fg: "#0b6bcb",
  },
  {
    icon: Bolt,
    title: "Spark-tested, every metre",
    text: "Each metre passes a high-voltage spark tester, so there is no weak spot anywhere in the insulation.",
    bg: "#ecebfc",
    fg: "#3b3fc7",
  },
  {
    icon: Layers,
    title: "Special-grade PVC",
    text: "Insulated with PVC compound to IS 5831 for high insulation resistance — ideal for conduit wiring.",
    bg: "#e6f5e4",
    fg: "#3f9a2f",
  },
  {
    icon: Flame,
    title: "Built for tough conditions",
    text: "Resistant to acids, alkalis, oils, solvents and fire, with inherent toughness and flexibility.",
    bg: "#fdf2e0",
    fg: "#d48a12",
  },
];

const TIMELINE = [
  { tag: "1991", title: "The beginning", text: "ATC begins manufacturing PVC insulated building wires and telephone cables under the registered brand ATC." },
  { tag: "ISI", title: "BIS licensed", text: "Licensed by the Bureau of Indian Standards to mark every metre of cable with the ISI mark." },
  { tag: "Growth", title: "A wider range", text: "Expands into power & control (IS 1554), XLPE (IS 7098) and aerial bunched cables (IS 14255)." },
  { tag: "Today", title: "ATC Cable Pro", text: "Three manufacturing units in Delhi, ISO 9001 & RoHS certified — now ATC Cable Pro and ATCOM LED lighting." },
];

const LICENCE_STYLE = [
  { icon: HomeIcon, accent: "#0b6bcb", tint: "#f6f9fe", tile: "#e5effc", border: "#e2ebf8" },
  { icon: Gear, accent: "#2f8a2a", tint: "#f6fbf4", tile: "#e3f2dc", border: "#e1eedb" },
  { icon: Bolt, accent: "#e8890c", tint: "#fffaf3", tile: "#fdeedb", border: "#f8eadb" },
  { icon: Tower, accent: "#6a3fd6", tint: "#f9f7fe", tile: "#ece6fc", border: "#ebe5f8" },
];

// Quality Framework
const FRAMEWORK = [
  { icon: Flask, title: "Raw material", text: "Copper and aluminium conductors to IS 8130; PVC compound to IS 5831." },
  { icon: Gauge, title: "In-process", text: "Dimensions, surface and resistance checked at every production stage." },
  { icon: Bolt, title: "Spark testing", text: "Every metre passes a high-voltage spark tester — no weak spots." },
  { icon: ShieldCheck, title: "Final testing", text: "Routine tests on every drum and type tests in our laboratory." },
];

const STAGE_ICONS = [Layers, Gauge, Shield, Bolt];
const TEST_ICONS = [Gauge, Layers, Thermometer, Flame];

const COMPLIANCE = [
  { code: "IS 8130", text: "Conductors" },
  { code: "IS 5831", text: "PVC compound" },
  { code: "IS 694", text: "Multi-strand wires" },
  { code: "IS 1554", text: "Power & control" },
  { code: "IS 7098", text: "XLPE power" },
  { code: "IS 14255", text: "UV-protected XLPE" },
  { code: "ISO 9001", text: "Quality system" },
  { code: "RoHS", text: "Compliance" },
];

export default function AboutPage() {
  const totalTypeTests = typeTests.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-white pt-28 pb-16 md:pt-40 md:pb-24">
        <svg className="pointer-events-none absolute top-24 right-0 hidden h-[360px] w-[360px] text-brand-200 lg:block" aria-hidden>
          <defs>
            <pattern id="about-dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dots)" opacity="0.55" />
        </svg>

        <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium tracking-wider text-ink/40 uppercase">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span>/</span>
              <span className="text-ink/70">About</span>
            </nav>
            <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-brand-100 bg-brand-50/60 py-1.5 pr-4 pl-1.5 text-sm font-medium text-brand-700">
              <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">Since {company.founded}</span>
              {company.tagline}
            </p>
            <h1 className="mt-6 font-display text-3xl leading-[1.1] font-semibold tracking-tight text-ink md:text-[2.6rem] xl:text-5xl">
              Engineering safe power{" "}
              <span className="relative inline-block text-brand-500">
                transmission
                <svg className="absolute -bottom-2.5 left-0 h-3.5 w-full text-lime-400" viewBox="0 0 240 12" fill="none" preserveAspectRatio="none" aria-hidden>
                  <path d="M3 9C60 3 180 3 237 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>{" "}
              for over 3 decades.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              From building wires to power cables and energy-efficient lighting, ATC has powered Indian infrastructure
              since 1991. Every product is engineered to BIS specifications and spark-tested to guarantee complete safety.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-blue">
                Explore products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#quality" className="btn-outline">
                Quality & testing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_40px_80px_-40px_rgba(11,107,203,0.45)]">
              <Image src="/images/factory-unit.webp" alt="ATC Cables manufacturing unit, Delhi" fill priority sizes="(min-width: 1024px) 640px, 90vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-line bg-white p-5 shadow-xl sm:left-6">
              <p className="font-display text-2xl font-bold text-ink">3 manufacturing units</p>
              <p className="mt-0.5 text-xs text-ink/55">Narela & Bawana industrial areas, Delhi</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-line bg-white py-12 md:py-16">
        <dl className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => {
            const { icon: Icon, fg, bg } = STAT_STYLE[i];
            return (
              <div key={s.label} className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl" style={{ background: bg, color: fg }}>
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <dd className="font-display text-3xl font-bold text-ink md:text-4xl"><CountUp value={s.value} /></dd>
                  <dt className="text-xs text-ink/55 md:text-sm">{s.label}</dt>
                </div>
              </div>
            );
          })}
        </dl>
      </section>

      {/* COMPANY STORY / PROFILE INTRO */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">The organization</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              From Delhi to national infrastructure: <span className="text-brand-500">our journey.</span>
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center text-lg leading-relaxed text-ink/70">
            {profileIntro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS OF EXCELLENCE */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">What sets us apart</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              Safety engineered into <span className="text-brand-500">every single metre.</span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl" style={{ background: p.bg, color: p.fg }}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink/60">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Milestones</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              Over three decades of <span className="text-brand-500">steady progress.</span>
            </h2>
          </div>
          <ol className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <li key={t.tag} className="relative flex flex-col rounded-3xl border border-line bg-white p-7">
                <span className="font-mono text-xs font-semibold tracking-wider text-brand-600 uppercase">{t.tag}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.text}</p>
                <span className="mt-auto pt-6 font-display text-4xl font-bold text-ink/10">0{i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* LEADERSHIP / DIRECTORS */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Leadership</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              Guided by four decades of <span className="text-brand-500">industry experience.</span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {directors.map((d) => (
              <article key={d.name} className="flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-7 md:p-10 shadow-sm">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-line">
                    <Image src={d.photo} alt={d.name} fill sizes="96px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink">{d.name}</h3>
                    <p className="text-sm font-medium text-brand-600">{d.role}</p>
                    <div className="mt-2 flex flex-wrap gap-4 text-xs text-ink/60">
                      {d.phone && <a href={telHref(d.phone)} className="hover:text-ink">{d.phone}</a>}
                      {d.email && <a href={`mailto:${d.email}`} className="hover:text-ink">{d.email}</a>}
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-3 border-t border-line pt-6 text-[15px] leading-relaxed text-ink/70">
                  {d.message.map((m, i) => (
                    <p key={i}>{m}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUALITY & TESTING SECTION (MERGED DIRECTLY INTO ABOUT) */}
      {/* ========================================================================= */}
      <section id="quality" className="scroll-mt-24 border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Quality Control &amp; Assurance</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-5xl">
              Rigorous testing, from raw copper <span className="text-brand-500">to finished reel.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-ink/60">
              A structured quality framework across 4 checkpoints with in-house laboratory testing so every ATC cable delivers complete safety.
            </p>
          </div>

          {/* Quality Framework Steps */}
          <ol className="relative mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FRAMEWORK.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="relative rounded-2xl border border-line bg-white p-6 pt-0 text-center shadow-sm">
                <span className="relative mx-auto -mt-0 grid h-16 w-16 -translate-y-1/2 place-items-center rounded-2xl bg-brand-500 text-white shadow-[0_12px_24px_-10px_rgba(11,107,203,0.7)] ring-8 ring-white">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="-mt-3 text-xs font-semibold tracking-[0.2em] text-brand-600 uppercase">Step 0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{text}</p>
              </li>
            ))}
          </ol>

          {/* Process inspection table */}
          <div className="mt-16 overflow-hidden rounded-3xl border border-line bg-surface p-6 md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">Process inspection</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Stage-wise checks on the shop floor</h3>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-ink/55">Each production stage is verified before material moves to the next.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 divide-y divide-line rounded-2xl border border-line bg-white md:grid-cols-2 md:divide-y-0 xl:grid-cols-4 xl:divide-x">
              {inspectionStages.map((s, i) => {
                const Icon = STAGE_ICONS[i];
                return (
                  <div key={s.stage} className={`p-6 ${i % 2 ? "md:border-l md:border-line xl:border-l-0" : ""} ${i > 1 ? "md:border-t md:border-line xl:border-t-0" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-500"><Icon className="h-5 w-5" /></span>
                      <span className="font-display text-2xl font-semibold text-ink/15">0{i + 1}</span>
                    </div>
                    <h4 className="mt-4 font-display text-base font-semibold text-ink">{s.stage}</h4>
                    <ul className="mt-3 space-y-2.5">
                      {s.checks.map((c) => (
                        <li key={c} className="flex gap-2 text-xs leading-snug text-ink/70">
                          <span className="mt-0.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-brand-500 text-white"><Check className="h-2 w-2" /></span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* In-House Laboratory testing */}
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="flex flex-col rounded-3xl bg-navy-900 p-7 text-white md:p-8">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-lime-300"><Bolt className="h-6 w-6" /></span>
              <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-lime-300 uppercase">Routine tests</p>
              <h3 className="mt-2 font-display text-2xl font-semibold">On every drum, before dispatch</h3>
              <ul className="mt-6 space-y-3">
                {routineTests.map((t) => (
                  <li key={t} className="flex items-center gap-3 border-t border-white/10 pt-3 text-[15px] text-white/85">
                    <Check className="h-4 w-4 text-lime-300" /> {t}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <p className="font-display text-5xl font-semibold">{totalTypeTests}</p>
                <p className="text-sm text-white/60">type tests performed in-house</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
              {typeTests.map((g, i) => {
                const Icon = TEST_ICONS[i % TEST_ICONS.length];
                return (
                  <div key={g.group} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-500"><Icon className="h-5 w-5" /></span>
                      <h4 className="flex-1 font-display text-[15px] leading-snug font-semibold text-ink">{g.group}</h4>
                      <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-ink/60">{g.items.length}</span>
                    </div>
                    <ul className="mt-4 space-y-2 border-t border-line pt-4">
                      {g.items.map((t) => (
                        <li key={t} className="flex gap-2.5 text-xs text-ink/70">
                          <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compliance standards grid */}
          <div className="mt-14">
            <div className="text-center">
              <p className="eyebrow justify-center">Recognised Standards</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">Built and tested to standard specifications</h3>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {COMPLIANCE.map((c) => (
                <li key={c.code} className="rounded-2xl border border-line bg-white px-4 py-4 text-center shadow-2xs">
                  <Certificate className="mx-auto h-5 w-5 text-brand-500" />
                  <p className="mt-2.5 font-display text-sm font-semibold text-ink">{c.code}</p>
                  <p className="mt-0.5 text-[11px] text-ink/55">{c.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FACILITIES & INFRASTRUCTURE */}
      <section className="border-t border-line bg-surface py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Facilities & infrastructure</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              Three units in Delhi, <span className="text-brand-500">fully equipped.</span>
            </h2>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {turnover.map((t, i) => (
              <div key={t.label} className={`rounded-3xl border p-7 ${i === 0 ? "border-brand-500 bg-brand-500 text-white" : "border-line bg-white"}`}>
                <dd className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${i === 0 ? "text-white" : "text-brand-600"}`}>{t.value}</dd>
                <dt className={`mt-2 text-sm ${i === 0 ? "text-white/80" : "text-ink/55"}`}>{t.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
            {facilityImages.map((f) => (
              <figure key={f.src} className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-white">
                <Image src={f.src} alt={f.label} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 px-3 py-2 text-xs font-semibold text-ink shadow md:text-sm">{f.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((l) => (
              <a
                key={l.id}
                href={l.map}
                target="_blank"
                rel="noopener"
                className="group flex items-start gap-4 rounded-3xl border border-line bg-white p-6 transition-colors hover:border-brand-200"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500">
                  {l.id === "head-office" ? <MapPin className="h-6 w-6" /> : <Factory className="h-6 w-6" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold tracking-wider text-brand-600 uppercase">{l.label}</span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-ink/70">{l.lines.join(", ")}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/30 transition-colors group-hover:text-brand-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAKE IN INDIA — LED SKD */}
      <section className="border-t border-line bg-white py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow">Make in India</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              LED SKD for <span className="text-brand-500">Indian manufacturers.</span>
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink/60">
              As part of the Prime Minister&apos;s &ldquo;Make in India&rdquo; campaign, ATC also deals in LED SKD (semi-knocked-down)
              kits for LED manufacturers, through global component partners.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ledPartners.map((p) => (
              <li key={p.name} className="rounded-3xl border border-line bg-white p-6">
                <p className="font-display text-lg font-semibold text-ink">{p.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ExhibitionsGallery light />

      {/* CLIENTS */}
      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Our clients & approvals</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-semibold tracking-tight text-ink md:text-4xl">
              Supplied to <span className="text-brand-500">{clients.length} institutions.</span>
            </h2>
            <p className="mt-4 text-ink/60">Government departments, PSUs, utilities and institutions across India and Bhutan.</p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-[15px] text-ink/75">
                <span className="mt-0.5 shrink-0 text-brand-500"><Check className="h-4 w-4" /></span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
