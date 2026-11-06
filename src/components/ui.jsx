import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Bank, Box, Download, Phone, ShieldCheck, Truck } from "./Icons";
import { company } from "@/data/site";

export function PageHero({ eyebrow, title, intro, crumbs = [], children, singleLine = false }) {
  return (
    <section className="relative border-b border-line bg-white pt-32 pb-14 md:pt-44 md:pb-16">
      <div className="container-x relative">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-wider text-ink/40 uppercase">
            <Link href="/" className="hover:text-ink">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span>/</span>
                {c.href ? <Link href={c.href} className="hover:text-ink">{c.label}</Link> : <span className="text-ink/70">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="eyebrow animate-fade-up">{eyebrow}</p>}
        <h1 className="animate-fade-up mt-5 max-w-4xl font-display text-3xl leading-[1.12] font-semibold tracking-tight text-balance text-ink md:text-[2.6rem] xl:max-w-none xl:text-[2.6rem] xl:whitespace-nowrap [animation-delay:80ms]">
          {title}
        </h1>
        {intro && (
          <p
            className={`animate-fade-up mt-6 text-lg leading-relaxed text-ink/60 [animation-delay:160ms] ${
              singleLine ? "max-w-2xl xl:max-w-none xl:whitespace-nowrap" : "max-w-2xl"
            }`}
          >
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left", dark = false, className = "" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "!text-lime-400" : ""} ${center ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-4 font-display text-[1.75rem] leading-[1.15] font-semibold tracking-tight text-balance md:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/60" : "text-ink/60"}`}>{intro}</p>}
    </div>
  );
}

export function ProductCard({ product, index }) {
  const hq = product.image.includes("/home-products/") || product.imageFit === "cover";
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-30px_rgba(11,107,203,0.35)]"
    >
      <div className="relative aspect-[392/239] overflow-hidden border-b border-line bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className={`transition-transform duration-700 group-hover:scale-105 ${hq ? "object-cover object-left" : "object-contain p-5"}`}
        />
        {!hq && index !== undefined && (
          <span className="absolute top-4 left-4 font-mono text-[11px] text-ink/40">{String(index + 1).padStart(2, "0")}</span>
        )}
        {!hq && (
          <span className="absolute top-4 right-4 rounded-full bg-brand-50 px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-brand-600 uppercase">
            {product.standard}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] tracking-wider text-ink/40 uppercase">{product.category}</p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">{product.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/60">{product.summary}</p>
        <span className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-brand-500">
          View specifications
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function SpecTable({ columns, rows, caption }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <div className="overflow-x-auto">
        <table className="spec-table">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr>{columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>{r.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CTA_POINTS = [
  { icon: Truck, title: "Quick Response", sub: "Quotes within 1 working day" },
  { icon: Box, title: "Bulk Supply", sub: "All sizes & specifications" },
  { icon: ShieldCheck, title: "Trusted by Professionals", sub: "Dealers, Builders, Contractors" },
  { icon: Bank, title: "Government Supplies", sub: "As per I.T.D. specifications" },
];

export function CtaBand() {
  return (
    <section className="bg-white py-7 md:py-20">
      <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_30px_60px_-35px_rgba(11,107,203,0.45)]">
          {/* Blue panel */}
          <div className="relative overflow-hidden bg-[#0356b0] text-white">
            <div className="relative z-10 px-6 pt-12 pb-10 sm:px-10 md:px-16 md:pt-16 md:pb-20 xl:w-[56%] xl:pr-0 2xl:w-[58%]">
              <p className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-lime-300 uppercase sm:text-sm">
                Dealers · Builders · Contractors · Government
                <span className="hidden h-0.5 w-16 bg-white/40 xl:block" aria-hidden />
              </p>
              <h2 className="mt-6 font-display text-3xl leading-[1.12] font-bold tracking-tight md:text-5xl xl:text-[2.75rem] 2xl:text-[3.4rem]">
                Need a quote or a <br className="hidden sm:block" />
                bulk supply? <span className="text-lime-300">Let&apos;s wire it up.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Share your size, core and quantity requirements — our team responds with pricing and availability,
                usually within one working day.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary !px-9 !py-4 !text-base shadow-[0_0_40px_-6px_rgba(191,215,48,0.75)]">
                  Request a quote <ArrowRight className="h-5 w-5" />
                </Link>
                <a href={company.phoneHref} className="btn-ghost !border-white/35 !px-9 !py-4 !text-base">
                  <Phone className="h-5 w-5" /> {company.phone}
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[864/514] max-w-3xl xl:absolute xl:inset-y-0 xl:right-0 xl:aspect-auto xl:w-[44%] xl:max-w-none 2xl:w-[45%] [mask-image:linear-gradient(to_bottom,transparent,black_18%)] xl:[mask-image:linear-gradient(to_right,transparent,black_14%)]">
              <Image
                src="/images/cta-cables.webp"
                alt="ATC copper power cables — reliable quality, ISI marked"
                fill
                sizes="(min-width: 1280px) 680px, 100vw"
                className="object-cover object-right"
              />
            </div>
          </div>

          {/* Highlights strip */}
          <ul className="relative z-10 -mt-6 grid grid-cols-1 gap-6 rounded-t-[2rem] bg-white px-6 py-8 sm:grid-cols-2 sm:px-10 md:px-12 lg:grid-cols-4 lg:gap-0 lg:px-10">
            {CTA_POINTS.map(({ icon: Icon, title, sub }, i) => (
              <li key={title} className={`flex items-center gap-3 lg:px-4 xl:gap-4 xl:px-6 2xl:px-8 ${i ? "lg:border-l lg:border-line" : "lg:pl-0"}`}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500 2xl:h-14 2xl:w-14">
                  <Icon className="h-6 w-6 2xl:h-7 2xl:w-7" />
                </span>
                <span>
                  <span className="block font-semibold text-ink lg:text-[15px] xl:text-base">{title}</span>
                  <span className="mt-0.5 block text-sm text-ink/55 lg:text-[13px] xl:text-sm">{sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function DownloadRow({ item, dark = false }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener"
      className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 transition-all ${
        dark ? "border-white/10 bg-white/5 hover:border-lime-400/60 hover:bg-white/10" : "border-line bg-white hover:border-brand-200 hover:shadow-lg"
      }`}
    >
      <span className="flex items-center gap-4">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${dark ? "bg-lime-400 text-ink" : "bg-brand-50 text-brand-500"}`}>
          <Download className="h-5 w-5" />
        </span>
        <span>
          <span className={`block font-semibold ${dark ? "text-white" : "text-ink"}`}>{item.title}</span>
          <span className={`mt-0.5 block font-mono text-[11px] ${dark ? "text-white/45" : "text-ink/45"}`}>PDF · {item.meta}</span>
        </span>
      </span>
      <ArrowUpRight className={`h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${dark ? "text-white/50" : "text-ink/40"}`} />
    </a>
  );
}
