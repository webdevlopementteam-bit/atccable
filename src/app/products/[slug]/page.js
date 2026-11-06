import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CtaBand, ProductCard, SpecTable } from "@/components/ui";
import { ArrowRight, Check, Download } from "@/components/Icons";
import { products, specialGrades } from "@/data/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  // Studio photos (with their own tinted background) fill the frame; scanned ones sit on white.
  const hq = product.image.includes("/home-products/") || product.imageFit === "cover";
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);
  const facts = [
    ["Standard", product.standard],
    ["Voltage grade", product.voltage],
    ["Category", product.category],
    ["Conductor", product.conductor],
  ];

  return (
    <>
      <section className="relative border-b border-line bg-white pt-32 pb-14 md:pt-44 md:pb-16">
        <div className="container-x relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-wider text-ink/40 uppercase">
            <Link href="/" className="hover:text-ink">Home</Link><span>/</span>
            <Link href="/products" className="hover:text-ink">Products</Link><span>/</span>
            <span className="text-ink/70">{product.name}</span>
          </nav>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow animate-fade-up">{product.category}</p>
              <h1 className="animate-fade-up mt-5 font-display text-3xl leading-[1.05] font-semibold tracking-tight text-balance text-ink md:text-5xl [animation-delay:80ms]">
                {product.name}
              </h1>
              <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink/60 [animation-delay:160ms]">{product.summary}</p>
              <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
                <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn-primary">
                  Request a quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="/downloads/atc-product-manual.pdf" target="_blank" rel="noopener" className="btn-outline">
                  <Download className="h-4 w-4" /> Product manual
                </a>
              </div>
            </div>
            <div
              className={`relative mx-auto w-full overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_40px_80px_-40px_rgba(11,107,203,0.35)] ${
                hq ? "aspect-[392/239] max-w-xl" : "aspect-square max-w-md"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className={hq ? "object-cover object-left" : "object-contain p-8"}
              />
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white md:grid-cols-4">
            {facts.map(([k, v], i) => (
              <div key={k} className={`p-5 md:p-6 ${i ? "border-l border-line" : ""} ${i === 2 ? "max-md:border-l-0 max-md:border-t" : ""} ${i === 3 ? "max-md:border-t" : ""}`}>
                <dt className="font-mono text-[10px] tracking-wider text-ink/40 uppercase">{k}</dt>
                <dd className="mt-1.5 font-display text-lg font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow">Overview</p>
            <p className="mt-5 text-xl leading-relaxed text-ink/75">{product.description}</p>

            <h2 className="mt-14 font-display text-2xl font-semibold tracking-tight">Key features</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-2xl border border-line p-4 text-sm text-ink/75">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500"><Check className="h-3.5 w-3.5" /></span>
                  {f}
                </li>
              ))}
            </ul>

            {product.colorCode && (
              <>
                <h2 className="mt-14 font-display text-2xl font-semibold tracking-tight">Colour code</h2>
                <div className="mt-6"><SpecTable columns={["Cores", "Colours"]} rows={product.colorCode.map((c) => [c.cores, c.colors])} /></div>
              </>
            )}
            {product.approvals && (
              <div className="mt-10 rounded-2xl bg-surface p-6">
                <p className="font-mono text-[11px] tracking-wider text-brand-500 uppercase">Approvals</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{product.approvals}</p>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-7">
              <p className="eyebrow">Applications</p>
              <ul className="mt-5 divide-y divide-line">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-center justify-between py-3 text-sm font-medium">
                    {a} <ArrowRight className="h-4 w-4 text-ink/25" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-brand-50 p-7">
              <p className="eyebrow">Available in</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {specialGrades.map((g) => (
                  <span key={g.code} className="rounded-full border border-brand-200 bg-white px-3 py-1 font-mono text-[11px] text-ink/75" title={g.name}>{g.code}</span>
                ))}
              </div>
              <Link href="/catalogue#atc-power-cables-manual" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline">
                Technical manual & specs <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>

        {product.table && (
          <div className="container-x mt-20">
            <p className="eyebrow">Specifications</p>
            <h2 className="mt-4 mb-8 font-display text-3xl font-semibold tracking-tight">Part numbers & dimensions</h2>
            <SpecTable columns={product.table.columns} rows={product.table.rows} caption={`${product.name} specifications`} />
          </div>
        )}
      </section>

      {related.length > 0 && (
        <section className="border-t border-line bg-white py-20 md:py-24">
          <div className="container-x">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight">Related products</h2>
              <Link href="/products" className="text-sm font-semibold text-brand-500 hover:underline">All products</Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
