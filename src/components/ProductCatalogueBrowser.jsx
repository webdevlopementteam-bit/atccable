"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "./Icons";

const FILTERS = [
  { id: "all", label: "All products" },
  { id: "cables", label: "Wires & cables" },
  { id: "lighting", label: "LED lighting" },
];

function CatalogueProductCard({ product, pdfUrl }) {
  return (
    <a
      href={`${pdfUrl}#page=${product.pdfPage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_48px_-28px_rgba(11,107,203,0.4)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 290px, (min-width: 640px) 45vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <p className="text-[10px] font-medium tracking-wider text-brand-600 uppercase sm:text-[11px]">{product.category}</p>
        <h3 className="mt-1.5 text-sm leading-snug font-semibold text-ink sm:text-base">{product.name}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-ink/55 sm:text-[13px]">{product.specs}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-semibold text-brand-500 sm:text-sm">
          View in catalogue
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

export default function ProductCatalogueBrowser({ catalogues }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const total = catalogues.reduce((sum, c) => sum + c.products.length, 0);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogues
      .filter((c) => filter === "all" || c.group === filter)
      .map((c) => ({
        ...c,
        products: c.products.filter((p) => !q || `${p.name} ${p.category} ${p.specs}`.toLowerCase().includes(q)),
      }))
      .filter((c) => c.products.length > 0);
  }, [catalogues, filter, query]);

  const reset = () => {
    setFilter("all");
    setQuery("");
  };

  // The target section may be filtered out, so show everything first, then scroll.
  const jumpTo = (event, id) => {
    event.preventDefault();
    reset();
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  };

  return (
    <>
      {/* HERO */}
      <section className="grid-bg relative overflow-hidden bg-navy-950 pt-32 pb-14 text-white md:pt-44 md:pb-20">
        <div className="container-x relative grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[11px] tracking-wider text-white/45 uppercase">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-white/75">Products</span>
            </nav>
            <p className="eyebrow !text-lime-400">ATC PRO · ATCOM Lighting</p>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance md:text-5xl xl:text-[3.4rem]">
              Every product, straight from <span className="text-lime-400">our catalogues.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Wires, power cables and LED lighting from all {catalogues.length} ATC catalogues. Open any product to see its page in the catalogue.
            </p>
            <dl className="mt-9 flex gap-10">
              <div>
                <dt className="text-sm text-white/50">Products shown</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-white">{total}</dd>
              </div>
              <div className="border-l border-white/15 pl-10">
                <dt className="text-sm text-white/50">Catalogues</dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-white">{catalogues.length}</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {catalogues.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                onClick={(event) => jumpTo(event, c.id)}
                aria-label={`Jump to ${c.title}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-lime-400"
              >
                <Image src={c.coverImage} alt="" fill sizes="(min-width: 1024px) 180px, 30vw" className="object-cover" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-[72px] z-30 border-b border-line bg-white/95 backdrop-blur md:top-[108px]">
        <div className="container-x flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto" role="group" aria-label="Filter products">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f.id ? "bg-brand-500 text-white" : "bg-surface text-ink/70 hover:bg-brand-50 hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, e.g. flood, 4 core"
            aria-label="Search products"
            className="w-full rounded-full border border-line bg-white px-4 py-2 text-sm text-ink outline-none placeholder:text-ink/40 focus:border-brand-400 md:w-72"
          />
        </div>
      </div>

      {/* CATALOGUE SECTIONS */}
      <div className="bg-surface py-12 md:py-16">
        <div className="container-x space-y-14 md:space-y-20">
          {visible.map((c) => (
            <section key={c.id} id={c.id} aria-labelledby={`${c.id}-title`} className="scroll-mt-48">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="relative hidden h-20 w-[60px] shrink-0 overflow-hidden rounded-md border border-line bg-white sm:block">
                    <Image src={c.coverImage} alt="" fill sizes="60px" className="object-cover" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium tracking-wider text-brand-600 uppercase">{c.series}</p>
                    <h2 id={`${c.id}-title`} className="mt-1.5 font-display text-xl leading-snug font-semibold tracking-tight text-ink md:text-2xl">
                      {c.title}
                    </h2>
                  </div>
                </div>
                <a href={c.pdfUrl} target="_blank" rel="noopener noreferrer" className="btn-outline shrink-0 self-start bg-white sm:self-auto">
                  <Download className="h-4 w-4" /> Full catalogue
                </a>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                {c.products.map((p) => (
                  <CatalogueProductCard key={p.id} product={p} pdfUrl={c.pdfUrl} />
                ))}
              </div>
            </section>
          ))}

          {visible.length === 0 && (
            <div className="rounded-2xl border border-line bg-white px-6 py-16 text-center">
              <p className="font-semibold text-ink">No products match your search.</p>
              <button type="button" onClick={reset} className="mt-4 text-sm font-semibold text-brand-500 hover:underline">
                Show all products
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
