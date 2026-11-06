import Link from "next/link";
import Logo from "./Logo";
import CurrentYear from "./CurrentYear";
import { ArrowRight, Check, Mail, MapPin, Phone } from "./Icons";
import { company, locations, nav, products, standards } from "@/data/site";

function FacebookLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1877f2" />
      <path d="M15.1 15.5 15.6 12.3h-3.1v-2c0-.9.4-1.7 1.8-1.7h1.4V5.8s-1.3-.2-2.5-.2c-2.5 0-4.2 1.5-4.2 4.3v2.4H6.3v3.2H9V24h3.5v-8.5h2.6Z" fill="#fff" />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#0a66c2" />
      <path d="M7 9.5h2.8V18H7zM8.4 5.5a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM11.5 9.5h2.7v1.2c.4-.7 1.3-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.3V18h-2.8v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2V18h-2.8z" fill="#fff" />
    </svg>
  );
}

function YouTubeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#ff0000" />
      <path d="m10 8.8 5.6 3.2-5.6 3.2z" fill="#fff" />
    </svg>
  );
}

function ColumnHeading({ children }) {
  return (
    <h3 className="text-sm font-medium tracking-[0.2em] text-ink/60 uppercase">
      {children}
      <span className="mt-3 block h-0.5 w-12 rounded-full bg-brand-500" aria-hidden />
    </h3>
  );
}

function ArrowLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="group flex items-center justify-between gap-3 py-1.5 text-[15px] xl:whitespace-nowrap text-ink/80 transition-colors hover:text-brand-600">
        {children}
        <ArrowRight className="h-4 w-4 shrink-0 text-ink/40 transition-all group-hover:translate-x-0.5 group-hover:text-brand-500" />
      </Link>
    </li>
  );
}

export default function Footer() {
  const socials = [
    { href: company.facebook, label: "Facebook", Brand: FacebookLogo },
    { href: company.linkedin, label: "LinkedIn", Brand: LinkedInLogo },
    { href: company.youtube, label: "YouTube", Brand: YouTubeLogo },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden border-t border-line bg-white text-ink">
      {/* Decorative waves (solid fills) */}
      <svg className="pointer-events-none absolute inset-x-0 bottom-[72px] h-56 w-full" viewBox="0 0 1440 220" preserveAspectRatio="none" aria-hidden>
        <path d="M0 40 C 260 160, 520 210, 820 190 S 1250 150, 1440 170 V220 H0Z" fill="#f3f7fd" />
        <path d="M0 90 C 240 190, 560 220, 900 205 S 1300 190, 1440 200 V220 H0Z" fill="#e8f0fb" />
        <path d="M0 120 C 200 200, 420 215, 640 214" fill="none" stroke="#d7e5f7" strokeWidth="2" />
      </svg>
      <svg className="pointer-events-none absolute right-0 bottom-[72px] hidden h-36 w-[26rem] md:block" viewBox="0 0 420 160" preserveAspectRatio="none" aria-hidden>
        <path d="M40 160 C 220 140, 340 90, 420 10 V160Z" fill="#8cc63f" />
        <path d="M100 160 C 250 146, 350 110, 420 55 V160Z" fill="#1f5fbf" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1520px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 pt-16 pb-28 md:grid-cols-2 xl:grid-cols-[1.1fr_0.7fr_1.3fr_1.15fr] xl:gap-0 xl:pb-32">
          {/* Brand */}
          <div className="xl:pr-10">
            <Logo className="h-16 w-auto" />
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/60">
              ISI-marked PVC & XLPE wires and cables, engineered in Delhi since {company.founded}. Every metre is
              spark-tested so you get complete safety — against shocks, short circuits and fire.
            </p>
            <ul className="mt-7 flex max-w-sm flex-wrap gap-3">
              {standards.map((s) => (
                <li key={s.code} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm text-ink/80">
                  <Check className="h-4 w-4 text-brand-500" /> {s.code}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="xl:border-l xl:border-line xl:px-6 2xl:px-10">
            <ColumnHeading>Company</ColumnHeading>
            <ul className="mt-8 space-y-2.5">
              {nav.slice(1).map((n) => <ArrowLink key={n.label} href={n.href}>{n.label}</ArrowLink>)}
              <ArrowLink href="/privacy">Privacy Policy</ArrowLink>
            </ul>
          </div>

          {/* Products */}
          <div className="xl:border-l xl:border-line xl:px-6 2xl:px-10">
            <ColumnHeading>Products</ColumnHeading>
            <ul className="mt-8 space-y-2.5">
              <ArrowLink href="/catalogue#volume-iv">ATCOM Lighting (LED & COB)</ArrowLink>
              {products.slice(0, 6).map((p) => <ArrowLink key={p.slug} href={`/products/${p.slug}`}>{p.name}</ArrowLink>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="xl:border-l xl:border-line xl:pl-6 2xl:pl-10">
            <ColumnHeading>Get in touch</ColumnHeading>
            <ul className="mt-8 space-y-5 text-[15px] text-ink/80">
              <li className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500"><MapPin className="h-6 w-6" /></span>
                <a href={locations[0].map} target="_blank" rel="noopener" className="hover:text-brand-600">{locations[0].lines.join(", ")}</a>
              </li>
              <li className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500"><Phone className="h-6 w-6" /></span>
                <span className="flex flex-col gap-1">
                  <a href={company.phoneHref} className="hover:text-brand-600">{company.phone}</a>
                  <a href={company.mobileHref} className="hover:text-brand-600">{company.mobile}</a>
                </span>
              </li>
              <li className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-500"><Mail className="h-6 w-6" /></span>
                <span className="flex min-w-0 flex-col gap-1">
                  <a href={`mailto:${company.infoEmail}`} className="break-all hover:text-brand-600">{company.infoEmail}</a>
                  <a href={`mailto:${company.email}`} className="break-all hover:text-brand-600">{company.email}</a>
                </span>
              </li>
            </ul>
            {socials.length > 0 && (
              <div className="mt-7 border-t border-line pt-6">
                <p className="text-sm font-medium tracking-[0.2em] text-ink/60 uppercase">Follow us</p>
                <div className="mt-4 flex gap-3">
                  {socials.map(({ href, label, Brand }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener"
                      aria-label={label}
                      className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 transition-transform hover:-translate-y-0.5"
                    >
                      <Brand />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative bg-[#eef4fc]">
        <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-3 px-4 py-6 text-[15px] text-ink/75 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© <CurrentYear /> {company.brand}. All rights reserved.</p>
          <p className="text-sm text-ink/60 md:order-last">
            Design & developed by{" "}
            <a href="https://cybertricksmedia.com" target="_blank" rel="noopener" className="font-semibold text-brand-600 hover:underline">
              cybertricksmedia.com
            </a>
          </p>
          <nav className="flex items-center gap-6 md:ml-auto md:gap-0" aria-label="Legal">
            <Link href="/privacy" className="hover:text-brand-600 md:border-l md:border-ink/20 md:px-8">Privacy Policy</Link>
            <a href="/sitemap.xml" className="hover:text-brand-600 md:border-l md:border-ink/20 md:px-8">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
