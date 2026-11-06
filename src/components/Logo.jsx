import Image from "next/image";
import Link from "next/link";

// ATC Cable Pro logo (from the 2026 company profile).
export default function Logo({ className = "h-11 w-auto md:h-14" }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="ATC Cable Pro — home">
      <Image src="/images/atc-pro-logo.webp" alt="ATC PRO — Accurate Transmission Cable" width={709} height={179} priority className={className} />
    </Link>
  );
}
