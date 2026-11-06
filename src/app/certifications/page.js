import Image from "next/image";
import { CtaBand, DownloadRow, PageHero, SectionHeading } from "@/components/ui";
import { ArrowUpRight, ShieldCheck } from "@/components/Icons";
import { certifications, downloads, otherCertifications, standards } from "@/data/site";

export const metadata = {
  title: "Certifications",
  description: "BIS licences, registration, supply orders and type test certificates for ATC wires and cables.",
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certification"
        title="Approved, registered and independently type-tested."
        intro="ATC cables carry four ISI marks under BIS licences, are ISO 9001 and RoHS certified, and our range is type-tested to IS 694, IS 1554 and IS 7098. View the original documents below."
        crumbs={[{ label: "Certifications" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {standards.map((s) => (
            <span key={s.code} className="rounded-2xl border border-line bg-white px-4 py-3">
              <span className="block font-display font-bold text-ink">{s.code}</span>
              <span className="block font-mono text-[10px] text-brand-500">{s.cml}</span>
            </span>
          ))}
        </div>
      </PageHero>

      <section className="border-t border-line bg-white py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <a
                key={c.id}
                href={c.pdf}
                target="_blank"
                rel="noopener"
                className="group overflow-hidden rounded-3xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(11,107,203,0.35)]"
              >
                <div className="relative grid aspect-[4/3] place-items-center overflow-hidden border-b border-line bg-white">
                  <div className="relative h-[78%] aspect-[3/4] rotate-[-3deg] overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black/5 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                    <Image src={c.thumb} alt={`${c.title} certificate`} fill sizes="240px" className="object-cover" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h2 className="font-display text-lg font-semibold">{c.title}</h2>
                    <p className="text-sm text-ink/50">{c.subtitle}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-colors group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-20 md:pt-28">
        <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <SectionHeading eyebrow="Documents" title="Manuals & price lists" intro="Download the complete ATC product manual with technical specifications and the latest pricing manual." />
          <div className="space-y-3">
            {downloads.map((d) => <DownloadRow key={d.href} item={d} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-16 md:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="More approvals" title="ISO, RoHS & BIS for LED lighting." />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {otherCertifications.map((c) => (
              <div key={c.title} className="flex items-start gap-4 rounded-3xl border border-line bg-white p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500"><ShieldCheck className="h-6 w-6" /></span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{c.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
