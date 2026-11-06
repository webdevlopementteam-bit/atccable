"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Close, Download, Menu, Phone } from "./Icons";
import { company, nav } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Menu remembers the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : href !== "#" && pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-navy-950 text-white/60 md:block">
        <div className="container-x flex h-9 items-center justify-between font-mono text-[11px] tracking-wide">
          <span>ISI marked · ISO 9001 · RoHS · Manufacturing since {company.founded}</span>
          <div className="flex items-center gap-6">
            <a href={company.phoneHref} className="hover:text-lime-400">{company.phone}</a>
            <a href={`mailto:${company.infoEmail}`} className="hover:text-lime-400">{company.infoEmail}</a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "border-b border-line bg-white/95 shadow-[0_10px_30px_-12px_rgba(10,18,34,0.18)] backdrop-blur-xl"
            : "border-b border-line bg-white"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors ${
                  isActive(item.href) ? "text-ink" : "text-ink/75 hover:text-ink"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contact" className="btn-primary !py-2.5">
              Get Quote
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink lg:hidden"
            onClick={() => setOpenOn(open ? null : pathname)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-white lg:hidden">
            <nav className="container-x flex flex-col py-6" aria-label="Mobile">
              {nav.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className={`animate-fade-up flex items-center justify-between border-b border-line py-4 font-display text-2xl font-semibold ${
                    isActive(item.href) ? "text-brand-500" : "text-ink"
                  }`}
                >
                  {item.label}
                  <span className="font-mono text-xs text-ink/30">0{i + 1}</span>
                </Link>
              ))}
              <div className="mt-8 grid grid-cols-1 gap-3">
                <Link href="/contact" className="btn-primary">
                  Get Quote
                </Link>
                <a href={company.phoneHref} className="btn-outline">
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
