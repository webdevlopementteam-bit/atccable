import Link from "next/link";
import { CtaBand } from "@/components/ui";
import { catalogues } from "@/data/catalogues";
import CatalogueSection from "@/components/home/CatalogueSection";

export const metadata = {
  title: "Product Catalogues & Price Lists",
  description: "Download official trade catalogues and price lists for ATC PRO Wires & Cables and ATCOM Lighting, including Power Cable manuals, corporate profile, Smart Anti-Glare COB & Panels, Project Volume-IX, and Niwa Outdoor Volume-I.",
};

export default function CataloguesPage() {
  return (
    <div className="pt-20 md:pt-28">
      {/* CATALOGUE SECTIONS */}
      {catalogues.map((cat, idx) => (
        <CatalogueSection key={cat.id} catalogue={cat} isFirst={idx === 0} />
      ))}

      <CtaBand />
    </div>
  );
}
