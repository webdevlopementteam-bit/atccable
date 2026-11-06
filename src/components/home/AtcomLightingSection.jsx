import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bulb, Download, ExternalLink, ShieldCheck, Sparkles } from "@/components/Icons";
import { featuredProducts, lightingCatalogue } from "@/data/lighting";

export default function AtcomLightingSection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-gradient-to-b from-white via-[#f6f9fe] to-white py-20 md:py-28">
      {/* Decorative background glows */}
      <div className="pointer-events-none absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-10 -right-48 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" aria-hidden />

      <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow !text-brand-600">ATCOM Lighting · Volume-IV</p>
            <h2 className="mt-4 font-display text-3xl leading-[1.12] font-bold tracking-tight text-balance text-ink md:text-5xl lg:text-[3.2rem]">
              Smart Anti-Glare, Panel &{" "}
              <span className="text-brand-600">Architectural Lighting.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink/65">
              Engineered by <strong className="text-ink">ATC Cables Private Limited</strong>. Explore our high-performance
              range of anti-glare COB downlights, ultra-slim concealed panels, heavy-duty outdoor floodlights, and modular 24V
              magnetic track systems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/lighting"
              className="btn-blue !px-7 !py-4 !text-base shadow-lg shadow-brand-500/25"
            >
              Explore ATCOM Lighting <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={lightingCatalogue.pdfUrl}
              download={lightingCatalogue.fileName}
              className="btn-outline !px-6 !py-4 !text-base"
            >
              <Download className="h-4 w-4 text-brand-600" />
              <span>Download Catalogue (PDF)</span>
            </a>
          </div>
        </div>

        {/* Big Spotlight Banner / Interactive Preview */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-blue-100 bg-navy-950 text-white shadow-[0_30px_70px_-30px_rgba(11,107,203,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:col-span-7 xl:p-14">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-3.5 py-1 text-xs font-bold text-ink">
                  <Sparkles className="h-3.5 w-3.5" /> OCT 2026 EDITION
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white/80">
                  {lightingCatalogue.volume}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Precision Lighting for Modern Homes, Offices & Industry
              </h3>

              <p className="mt-4 text-base leading-relaxed text-white/70">
                Front-opening fixtures with deep anti-glare reflectors, high-PF flicker-free drivers, and tunable RF
                dimming. Manufactured strictly under stringent laboratory controls in Delhi.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="font-display text-2xl font-bold text-lime-400">COB</p>
                  <p className="mt-1 text-xs text-white/70">Smart Anti-Glare 7W – 30W</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="font-display text-2xl font-bold text-sky-400">Panels</p>
                  <p className="mt-1 text-xs text-white/70">Ultra-Slim Ruby & Concealed</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="font-display text-2xl font-bold text-amber-400">IP66</p>
                  <p className="mt-1 text-xs text-white/70">Optic Pro Floods & High Bays</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="font-display text-2xl font-bold text-purple-400">24V</p>
                  <p className="mt-1 text-xs text-white/70">Magnetic Profile Systems</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/lighting"
                  className="btn-primary !px-7 !py-3.5 !text-sm"
                >
                  View All 4 Featured Products <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={lightingCatalogue.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <span>Preview Full Catalogue (8 Pages)</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="relative h-72 sm:h-96 lg:col-span-5 lg:h-full min-h-[380px] overflow-hidden bg-gradient-to-tr from-navy-900 to-blue-900/50 flex items-center justify-center p-6">
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image
                  src={lightingCatalogue.heroImage}
                  alt="ATCOM Smart Anti Glare COB Lights"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105"
                />
              </div>
              <span className="absolute bottom-4 right-4 rounded-full bg-navy-950/80 px-4 py-1.5 text-xs font-mono text-lime-400 backdrop-blur border border-white/10">
                Front Opening · Anti-Glare Optic
              </span>
            </div>
          </div>
        </div>

        {/* 4 Products Preview Cards — clickable to /lighting */}
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Featured Products from Catalogue
            </h3>
            <Link
              href="/lighting"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <span>Explore all specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p, idx) => (
              <Link
                key={p.id}
                href={`/lighting#${p.id}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_12px_32px_-20px_rgba(10,18,34,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_25px_50px_-20px_rgba(11,107,203,0.3)]"
              >
                {/* Product image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#fafbfe] p-4 flex items-center justify-center border-b border-line">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={320}
                    height={240}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-108"
                  />
                  <span
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-sm"
                    style={{ background: p.accent }}
                  >
                    0{idx + 1}
                  </span>
                  <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-ink/70 shadow-sm backdrop-blur">
                    {p.cataloguePage}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold tracking-wider text-ink/50 uppercase">
                    {p.category}
                  </p>
                  <h4 className="mt-1 font-display text-base font-bold text-ink group-hover:text-brand-600 line-clamp-2">
                    {p.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-ink/60 line-clamp-2">
                    {p.headline}
                  </p>

                  <div className="mt-4 pt-4 border-t border-line/60 flex items-center justify-between text-xs">
                    <span className="font-medium text-ink/75">
                      Starting {p.variants[0].mrp}
                    </span>
                    <span className="font-semibold text-brand-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Details <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Catalogue Download Mini-Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-line bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded-lg border border-line shadow-sm">
              <Image
                src={lightingCatalogue.coverImage}
                alt="Catalogue cover"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                Official Trade Catalogue
              </p>
              <h4 className="font-display text-base font-bold text-ink sm:text-lg">
                For more products, download our complete catalogue
              </h4>
              <p className="text-xs text-ink/60">
                PDF · {lightingCatalogue.volume} · Complete price list & specs (8 pages)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={lightingCatalogue.pdfUrl}
              download={lightingCatalogue.fileName}
              className="btn-primary w-full sm:w-auto !py-3 !px-6 !text-sm"
            >
              <Download className="h-4 w-4" /> Download Catalogue
            </a>
            <Link
              href="/lighting"
              className="btn-outline w-full sm:w-auto !py-3 !px-5 !text-sm whitespace-nowrap"
            >
              View Products Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

