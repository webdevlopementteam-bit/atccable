import Link from "next/link";
import ProductCatalogueBrowser from "@/components/ProductCatalogueBrowser";
import { ArrowRight } from "@/components/Icons";
import { CtaBand } from "@/components/ui";
import { catalogueGroups, catalogueProducts } from "@/data/catalogueProducts";
import { catalogues } from "@/data/catalogues";
import { products } from "@/data/site";

export const metadata = {
  title: "Products",
  description: "Browse ATC PRO wires and cables and ATCOM LED lighting from all six ATC catalogues: building wires, power and control cables, submersible cables, COB downlights, magnetic track systems and outdoor lighting.",
};

const browserCatalogues = catalogues.map(({ id, title, series, coverImage, pdfUrl }) => ({
  id,
  title,
  series,
  coverImage,
  pdfUrl,
  group: catalogueGroups[id],
  products: catalogueProducts[id],
}));

export default function ProductsPage() {
  return (
    <>
      <ProductCatalogueBrowser catalogues={browserCatalogues} />

      <section className="border-t border-line bg-white py-14 md:py-20">
        <div className="container-x">
          <p className="eyebrow">Technical data</p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">Full cable specifications</h2>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={`/products/${p.slug}`} className="group flex items-center justify-between gap-4 py-3.5 text-sm font-medium text-ink/80 hover:text-brand-600">
                  {p.name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
