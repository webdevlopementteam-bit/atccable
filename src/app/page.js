import Image from "next/image";
import Link from "next/link";
import CableMarquee from "@/components/CableMarquee";
import CountUp from "@/components/CountUp";
import HeroBanner from "@/components/HeroBanner";
import { AtcProSpotlight, BrandsStrip, ClientsMarquee, ExhibitionsGallery, MissionVision, ProductFamilies } from "@/components/home/ProfileSections";
import { CtaBand } from "@/components/ui";
import {
  ArrowRight, Award, Bolt, Building, Certificate, Check, Download, ExternalLink, Factory, File, Flame, Flask, Gear, Handshake, Home as HomeIcon,
  Layers, Network, PdfIcon, Shield, ShieldCheck, Tower, Users,
} from "@/components/Icons";
import {
  certifications, company, downloads, inspectionStages, products, standards, stats,
} from "@/data/site";

const reasons = [
  { icon: Shield, image: "isi", title: "ISI approved, every metre", text: "Made strictly to BIS standards and licensed to carry the ISI mark on every reel." },
  { icon: Bolt, image: "spark", title: "Spark tested", text: "Each metre passes a high-voltage spark tester — no weak spot in the insulation." },
  { icon: Flame, image: "pvc", title: "Special PVC grades", text: "FR, FRLS, halogen-free and heat-resistant up to 85 °C and 105 °C." },
  { icon: Layers, image: "flexible", title: "Tough & flexible", text: "Resistant to acids, alkalis, oils, solvents and fire." },
  { icon: Flask, image: "lab", title: "In-house laboratory", text: "Raw material, in-process and finished-cable testing under one roof." },
  { icon: Award, image: "pricing", title: "Fair pricing", text: "Quality and performance that meet your standards, at competitive prices." },
];

// About section highlights
const ABOUT_POINTS = [
  { icon: Building, text: "Three manufacturing units in Delhi", bg: "#e8f1fd", fg: "#0b6bcb" },
  { icon: Flask, text: "In-house testing laboratory", bg: "#fdf2e0", fg: "#e8890c" },
  { icon: Users, text: "Government & institutional supplies", bg: "#e6f5e4", fg: "#3f9a2f" },
  { icon: Network, text: "Dealer network across India", bg: "#efe9fd", fg: "#6a3fd6" },
];

// Intro stats — icon + tile colour per stat (same order as `stats`)
const STAT_STYLE = [
  { icon: Factory, bg: "#e8f1fd", fg: "#0b6bcb", note: "Delivering ISI-marked wires & cables from Delhi." },
  { icon: Building, bg: "#e6f5e4", fg: "#3f9a2f", note: "Relied on by dealers, builders and contractors." },
  { icon: Certificate, bg: "#fdf2e0", fg: "#d48a12", note: "IS 694, IS 1554, IS 7098 and IS 14255." },
  { icon: Bolt, bg: "#ecebfc", fg: "#3b3fc7", note: "High-voltage spark testing on every metre." },
];

// BIS licence cards — icon + colours per standard (same order as `standards`)
const LICENCE_STYLE = [
  { icon: HomeIcon, accent: "#0b6bcb", tint: "#f6f9fe", tile: "#e5effc", border: "#e2ebf8", num: "#d6e5fa" },
  { icon: Gear, accent: "#2f8a2a", tint: "#f6fbf4", tile: "#e3f2dc", border: "#e1eedb", num: "#d4ebcb" },
  { icon: Bolt, accent: "#e8890c", tint: "#fffaf3", tile: "#fdeedb", border: "#f8eadb", num: "#fbe1c0" },
  { icon: Tower, accent: "#6a3fd6", tint: "#f9f7fe", tile: "#ece6fc", border: "#ebe5f8", num: "#e0d6fa" },
];

// Process inspection — one colour + photo per stage
const STEP_COLORS = [
  { accent: "#1f5fbf", ring: "#e3edfb", tint: "#f4f8fe", panel: "#eaf1fc", border: "#dbe6f7" },
  { accent: "#f0a830", ring: "#fdf1dc", tint: "#fffaf1", panel: "#fef3e0", border: "#f8e8c8" },
  { accent: "#5aaa3c", ring: "#e6f3df", tint: "#f6fbf3", panel: "#ebf5e5", border: "#dcecd3" },
  { accent: "#d9343f", ring: "#fbe3e4", tint: "#fef5f5", panel: "#fcebec", border: "#f5d8da" },
];
const STEP_IMAGES = ["wire-conductor", "bunching", "stranding", "extrusion"].map((n) => `/images/process/${n}.webp`);

// Products shown on the homepage (2 rows of 4) — image, accent colour and tagline per card
const HOME_PRODUCTS = [
  { slug: "pvc-insulated-building-wires", image: "building-wires", w: 390, h: 239, color: "#1f5fbf", tint: "#eaf2fd", text: "Safe, durable and reliable wiring for homes and commercial buildings." },
  { slug: "submersible-cables", image: "submersible", w: 393, h: 239, color: "#2f8a2a", tint: "#e6f4e1", text: "High performance cables designed for pumps, submersible and industrial use." },
  { slug: "round-flexible-wires", image: "round-flexible", w: 392, h: 239, color: "#e46a0c", tint: "#fdeedd", text: "Flexible, easy to install and ideal for domestic and light industrial use." },
  { slug: "pvc-power-control-cables", image: "power-control", w: 409, h: 239, color: "#5b35d5", tint: "#ece7fc", text: "Engineered for safe and efficient power and control transmission." },
  { slug: "lt-xlpe-power-cables", image: "single-core", w: 390, h: 239, color: "#d1282f", tint: "#fde5e6", text: "High conductivity and superior performance for industrial applications." },
  { slug: "aerial-bunched-cables", image: "aerial-bunched", w: 393, h: 239, color: "#1f5fbf", tint: "#eaf2fd", text: "Rugged and reliable cables for critical infrastructure and overhead distribution." },
  { slug: "telecom-switchboard-jumper-wires", image: "telecom", w: 392, h: 239, color: "#2f8a2a", tint: "#e6f4e1", text: "Switchboard, jumper and drop wires built to I.T.D. specifications." },
  { slug: "panel-board-wiring", image: "multi-core", w: 409, h: 239, color: "#1f5fbf", tint: "#eaf2fd", text: "Made for modern electrical panels with superior safety." },
];

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function Heading({ children, className = "" }) {
  return (
    <h2 className={`mt-4 font-display text-3xl leading-[1.1] font-bold tracking-tight text-balance text-ink md:text-[2.75rem] ${className}`}>
      {children}
    </h2>
  );
}

export default function Home() {

  return (
    <>
      {/* BANNER — artwork carries the headline, shown uncropped */}
      <section className="bg-white pt-[72px] md:pt-[108px]">
        <h1 className="sr-only">When it&apos;s about life, trust only ATC — high quality electrical wires & cables</h1>
        <HeroBanner />
      </section>

      {/* STATS COUNTER */}
      <section className="border-b border-line bg-white">
        <dl className="mx-auto grid w-full max-w-[1400px] grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s, i) => {
            const { icon: Icon, fg } = STAT_STYLE[i];
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 border-line py-6 md:gap-4 md:py-8 ${i % 2 ? "border-l pl-4 md:pl-8" : "pr-4"} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-8" : ""} ${i === 0 ? "" : "lg:pl-8"}`}
              >
                <span className="shrink-0" style={{ color: fg }}><Icon className="h-8 w-8 md:h-9 md:w-9" /></span>
                <div className="min-w-0">
                  <dd className="font-display text-3xl leading-none font-bold tracking-tight text-ink md:text-4xl">
                    <CountUp value={s.value} />
                  </dd>
                  <dt className="mt-1.5 text-xs leading-snug text-ink/55 md:text-sm">{s.label}</dt>
                </div>
              </div>
            );
          })}
        </dl>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow justify-center">Product range</p>
            <h2 className="mt-4 font-display text-2xl leading-tight font-semibold tracking-tight text-ink md:text-3xl lg:text-[2.1rem] lg:whitespace-nowrap xl:text-[2.5rem]">
              From house wire to power cable — one trusted name.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink/60">ISI-marked wires and cables for homes, industry and infrastructure — available in FR, FRLS and heat-resistant grades.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_PRODUCTS.map(({ slug, image, h, color, tint, text }) => {
              const p = products.find((x) => x.slug === slug);
              return (
                <Link
                  key={slug}
                  href={`/products/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_14px_40px_-30px_rgba(10,18,34,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,107,203,0.4)]"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: `392 / ${h}` }}>
                    <Image
                      src={`/images/home-products/${image}.webp`}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-7 pt-5 pb-6">
                    <p className="text-[13px] font-medium tracking-[0.12em] text-ink/50 uppercase">{p.category}</p>
                    <h3 className="mt-1.5 font-display text-xl leading-snug font-semibold text-ink">{p.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/55">{text}</p>
                    <span className="mt-auto flex items-center gap-4 pt-5 font-semibold" style={{ color }}>
                      View details
                      <span className="grid h-10 w-10 place-items-center rounded-full transition-transform group-hover:translate-x-1" style={{ background: tint }}>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products" className="btn-blue !px-9 !py-4 !text-base">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CableMarquee variant="red" />

      {/* ABOUT */}
      <section className="relative overflow-hidden border-t border-line bg-white py-20 md:py-28">
        <span className="pointer-events-none absolute -top-40 -right-40 hidden h-[420px] w-[420px] rounded-full border-[56px] border-brand-50 lg:block" aria-hidden />
        <span className="pointer-events-none absolute -right-24 -bottom-48 hidden h-[360px] w-[520px] rounded-full border-[48px] border-brand-50/70 lg:block" aria-hidden />
        <div className="relative mx-auto grid grid-cols-1 w-full max-w-[1520px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 xl:gap-16">
          <div className="relative -mx-2 max-lg:order-2 [mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent),linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)] sm:mx-0">
            <Image
              src="/images/factory-unit.webp"
              alt="ATC Cable Pro manufacturing unit, Delhi"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 760px, 100vw"
              className="h-auto w-full"
            />
          </div>

          <div className="max-lg:contents">
            <div className="max-lg:order-1">
              <Eyebrow>About ATC</Eyebrow>
              <h2 className="mt-5 font-display text-[2rem] leading-[1.15] font-semibold tracking-tight text-ink md:text-5xl lg:font-bold xl:text-[3.4rem]">
                Three decades of <span className="block text-brand-500">accurate transmission.</span>
              </h2>
            </div>
            <div className="max-lg:order-3">
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/60 max-lg:mt-0">
              Started in {company.founded}, {company.brand} is one of India&apos;s leading electrical and power cable manufacturers —
              offering complete electrical solutions from building wires, flexible and flat cables to XLPE power, aerial bunched
              and telecom cables. We keep upgrading technology and modernising our facilities to maintain the highest
              standards of quality and service.
            </p>
            <ul className="mt-8 grid grid-cols-1 max-w-2xl gap-x-8 gap-y-6 sm:grid-cols-2">
              {ABOUT_POINTS.map(({ icon: Icon, text, bg, fg }) => (
                <li key={text} className="flex items-center gap-5">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl" style={{ background: bg, color: fg }}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="text-[16px] leading-snug text-ink/80">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/about" className="btn-blue !px-8 !py-4 !text-base">
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact#locations" className="btn-outline !px-8 !py-4 !text-base">
                View infrastructure <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>

      <AtcProSpotlight />

      <BrandsStrip />

      <ProductFamilies />

      <CableMarquee variant="black" />

      {/* WHY ATC */}
      <section className="overflow-hidden border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto grid grid-cols-1 w-full max-w-[1520px] items-center gap-12 px-4 sm:px-6 lg:px-8 xl:grid-cols-[0.85fr_1.3fr] xl:gap-12">
          <div className="min-w-0">
            <Eyebrow>Why choose ATC</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] font-bold tracking-tight text-balance text-ink max-sm:text-[5.6vw] max-sm:leading-[1.2] md:text-5xl 2xl:text-[3.4rem]">
              <span className="max-sm:block max-sm:whitespace-nowrap">Safety you can see printed on</span>{" "}
              <span className="text-brand-500 max-sm:block">every metre.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
              When you buy ATC, look for the printing of <strong className="text-ink">“ATC Cables 1100 V”</strong> with size
              marking on every metre — your assurance of a genuine, ISI-marked product.
            </p>
            <div className="relative -mx-4 mt-6 aspect-[830/440] max-w-3xl sm:-mx-6 lg:-mx-8 xl:mr-0 xl:-ml-24 xl:max-w-none [mask-image:linear-gradient(to_right,black_80%,transparent),linear-gradient(to_bottom,transparent,black_12%)] xl:[mask-image:linear-gradient(to_right,transparent,black_14%,black_80%,transparent),linear-gradient(to_bottom,transparent,black_12%)] [mask-composite:intersect]">
              <Image
                src="/images/why/cables-print.webp"
                alt="ATC cables printed “ATC CABLES · 1100V · ISI” with size marking"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {reasons.map(({ icon: Icon, image, title, text }) => (
              <div
                key={title}
                className="group relative flex min-h-[176px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_32px_-18px_rgba(10,18,34,0.22)] transition-shadow hover:shadow-[0_20px_40px_-18px_rgba(11,107,203,0.35)]"
              >
                <div className="relative z-10 flex w-[72%] gap-3 p-4 pr-1 sm:w-[68%] sm:gap-3.5 sm:p-5 sm:pr-2">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg leading-tight font-bold tracking-tight text-ink">{title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/60">{text}</p>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 w-[32%] sm:w-[36%] [clip-path:polygon(34%_0,100%_0,100%_100%,0_100%)]">
                  <Image
                    src={`/images/why/${image}.webp`}
                    alt=""
                    fill
                    sizes="220px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CableMarquee variant="yellow" />

      {/* PROCESS */}
      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Process inspection</Eyebrow>
              <Heading className="max-sm:text-[6vw] max-sm:leading-[1.2]">
                <span className="max-sm:block max-sm:whitespace-nowrap">Inspected at every stage,</span>{" "}
                <span className="max-sm:block max-sm:whitespace-nowrap">not just at the end.</span>
              </Heading>
            </div>
            <Link href="/quality" className="btn-outline shrink-0">
              Quality & testing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ol className="relative mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute top-[104px] right-[6%] left-[6%] hidden h-0.5 bg-brand-200 lg:block" aria-hidden />
            {inspectionStages.map((s, i) => {
              const c = STEP_COLORS[i];
              return (
                <li key={s.stage} className="relative flex flex-col items-center">
                  {i < inspectionStages.length - 1 && (
                    <span
                      className="absolute top-[104px] left-full z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy-700 text-white shadow-md ring-4 ring-white lg:ml-4 lg:grid"
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}

                  <div className="relative z-30 h-52 w-52 shrink-0 rounded-full p-2.5" style={{ background: c.ring }}>
                    <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] bg-white" style={{ borderColor: c.accent }}>
                      <Image src={STEP_IMAGES[i]} alt={s.stage} fill sizes="208px" className="scale-110 object-cover" />
                    </div>
                    <span
                      className="absolute top-1 left-1 grid h-14 w-14 place-items-center rounded-full border-4 border-white font-display text-2xl font-bold text-white shadow-lg"
                      style={{ background: c.accent }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <div
                    className="relative z-10 -mt-14 flex w-full flex-1 flex-col rounded-2xl border border-t-[3px] p-4 pt-[4.5rem] shadow-[0_18px_40px_-24px_rgba(10,18,34,0.25)]"
                    style={{ background: c.tint, borderColor: c.border, borderTopColor: c.accent }}
                  >
                    <h3 className="text-center font-display text-xl font-bold text-ink">{s.stage}</h3>
                    <ul className="mt-4 flex-1 space-y-3 rounded-xl p-4" style={{ background: c.panel }}>
                      {s.checks.map((check) => (
                        <li key={check} className="flex gap-3 text-[15px] leading-snug text-ink/75">
                          <span className="mt-px grid h-5 w-5 shrink-0 place-items-center rounded-full text-white" style={{ background: c.accent }}>
                            <Check className="h-3 w-3" />
                          </span>
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <MissionVision />

      <CableMarquee variant="blue" />

      {/* LICENCES */}
      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8">
          <Eyebrow>Licences & standards</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-[1.15] font-bold tracking-tight text-ink md:text-[2.75rem]">
            Licensed by the <span className="text-brand-500">Bureau of Indian Standards</span>.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink/60">
            Our wires and cables are manufactured as per BIS specifications, ensuring safety, reliability and long-term
            performance.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {standards.map((s, i) => {
              const { icon: Icon, accent, tint, tile, border, num } = LICENCE_STYLE[i];
              return (
                <div key={s.code} className="relative flex gap-5 overflow-hidden rounded-3xl border p-6" style={{ background: tint, borderColor: border }}>
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl" style={{ background: tile, color: accent }}>
                    <Icon className="h-8 w-8" />
                  </span>
                  <div className="min-w-0 pb-6">
                    <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold" style={{ background: tile, color: accent }}>
                      {s.cml}
                    </span>
                    <p className="mt-3 font-display text-2xl font-bold tracking-tight text-ink">{s.code}</p>
                    <p className="mt-0.5 font-medium text-ink/80">{s.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/55">{s.detail}</p>
                  </div>
                  <span className="pointer-events-none absolute right-5 bottom-3 font-display text-4xl font-bold" style={{ color: num }} aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1.07fr_1fr]">
            {/* Catalogue */}
            <div className="rounded-3xl border border-line bg-[#fbfcff] p-5 md:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <File className="h-8 w-8" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">Catalogue & price list</h3>
                    <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline">
                      View all documents <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-1 text-sm text-ink/60">Download our latest product catalogues, technical specifications and price lists.</p>
                </div>
              </div>
              <ul className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
                {downloads.map((d) => (
                  <li key={d.href} className="flex items-center gap-4 border-b border-line p-4 last:border-0 md:px-5">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-red-50">
                      <PdfIcon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{d.title}</p>
                      <p className="mt-0.5 text-sm text-ink/50">PDF · {d.meta}</p>
                    </div>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-50 px-4 py-2.5 text-sm font-medium text-brand-600 transition-colors hover:bg-brand-500 hover:text-white sm:px-6"
                    >
                      <Download className="h-4 w-4" /> <span className="hidden sm:inline">Download</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approvals */}
            <div className="flex flex-col rounded-3xl border border-[#dcecd3] bg-[#f6fbf3] p-5 max-sm:px-2.5 md:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#e3f2dc] text-[#3f9a2f]">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">Approvals & type tests</h3>
                    <Link href="/certifications" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:underline">
                      View all certificates <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-1 text-sm text-ink/60">
                    Our products are tested and approved by authorized laboratories and meet stringent BIS standards.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid flex-1 grid-cols-3 gap-3 max-sm:-mx-1.5 max-sm:gap-1.5 md:gap-4">
                {certifications.slice(0, 3).map((c) => (
                  <a
                    key={c.id}
                    href={c.pdf}
                    target="_blank"
                    rel="noopener"
                    className="group flex flex-col rounded-2xl border border-line bg-white p-2.5 shadow-[0_10px_24px_-18px_rgba(10,18,34,0.3)] transition-shadow hover:shadow-lg max-sm:rounded-xl max-sm:p-1.5 md:p-3"
                  >
                    <span className="relative block min-h-[120px] flex-1 overflow-hidden rounded-lg border border-line bg-white max-lg:aspect-[4/3.3] max-lg:flex-none">
                      <Image src={c.thumb} alt={c.title} fill sizes="220px" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    </span>
                    <span className="mt-3 flex items-center justify-between gap-2 px-0.5 max-sm:mt-2 max-sm:gap-0.5 max-sm:px-0">
                      <span className="text-[11px] leading-tight font-semibold whitespace-nowrap text-ink max-[359px]:text-[9.5px] max-[359px]:tracking-tight sm:truncate sm:text-xs md:text-sm">{c.title}</span>
                      <ExternalLink className="h-4 w-4 shrink-0 text-brand-500 max-sm:h-3 max-sm:w-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsMarquee />

      <ExhibitionsGallery />

      <CtaBand />
    </>
  );
}
