import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink, Sparkles } from "@/components/Icons";

export default function CatalogueSection({ catalogue, isFirst = false }) {
  const {
    id,
    title,
    series,
    description,
    volumeBadge,
    volumeTag,
    heroHeadline,
    heroSub,
    heroImage,
    heroBadge = "Official Trade Edition",
    coverImage,
    pdfUrl,
    fileName,
    stats,
    primaryLink = "/catalogue",
    primaryLabel = "View Catalogue",
  } = catalogue;

  return (
    <section id={id} className="relative overflow-hidden border-t border-line bg-gradient-to-b from-white via-[#f6f9fe] to-white py-10 md:py-14">
      <div className="pointer-events-none absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-10 -right-48 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" aria-hidden />

      <div className="mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="eyebrow !text-brand-600">{series}</p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl lg:text-[2.4rem] xl:text-[2.6rem] xl:whitespace-nowrap">
            {title}
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink/65 md:text-base">
            {description}
          </p>
        </div>

        {/* Big Spotlight Banner / Interactive Preview */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-blue-100 bg-navy-950 text-white shadow-[0_30px_70px_-30px_rgba(11,107,203,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="p-6 sm:p-10 lg:col-span-7 xl:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-3.5 py-1 text-xs font-bold text-ink">
                  <Sparkles className="h-3.5 w-3.5" /> {volumeBadge}
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white/80">
                  {volumeTag}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                {heroHeadline}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {heroSub}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                    <p className={"font-display text-xl font-bold " + (s.color || "")}>{s.num}</p>
                    <p className="mt-1 text-xs text-white/70">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="btn-primary !px-6 !py-3 !text-sm"
                >
                  Download Catalogue <Download className="h-4 w-4" />
                </a>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <span>Preview Full Catalogue</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="relative h-64 sm:h-80 lg:col-span-5 lg:h-full min-h-[300px] overflow-hidden bg-gradient-to-tr from-navy-900 to-blue-900/50 flex items-center justify-center p-6">
              <div className="relative w-full max-w-md aspect-[4/3]">
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-transform duration-700 hover:scale-105"
                />
              </div>
              <span className="absolute bottom-4 right-4 rounded-full bg-navy-950/80 px-4 py-1.5 text-xs font-mono text-lime-400 backdrop-blur border border-white/10">
                {heroBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Catalogue Download Mini-Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-line bg-white p-5 shadow-sm md:p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-lg border border-line shadow-sm">
              <Image
                src={coverImage}
                alt="Catalogue cover"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                Official Trade Catalogue
              </p>
              <h4 className="font-display text-base font-bold text-ink">
                For more products, download our complete catalogue
              </h4>
              <p className="text-xs text-ink/60">
                PDF · {volumeTag} · Complete price list & specifications
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={pdfUrl}
              download={fileName}
              className="btn-primary w-full sm:w-auto !py-2.5 !px-5 !text-sm"
            >
              <Download className="h-4 w-4" /> Download Catalogue
            </a>
            <Link
              href={primaryLink || "/products"}
              className="btn-outline w-full sm:w-auto !py-2.5 !px-4 !text-sm whitespace-nowrap"
            >
              View Products Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
