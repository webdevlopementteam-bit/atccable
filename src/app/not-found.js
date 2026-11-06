import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-white px-4 pt-32 pb-20 text-center">
      <div className="relative">
        <p className="font-mono text-sm tracking-[0.3em] text-brand-500">ERROR 404</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight md:text-7xl">Circuit not found.</h1>
        <p className="mx-auto mt-5 max-w-md text-ink/60">The page you&apos;re looking for has moved or no longer exists.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">Back to home <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/products" className="btn-outline">Browse products</Link>
        </div>
      </div>
    </section>
  );
}
