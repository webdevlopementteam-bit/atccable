import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata = {
  metadataBase: new URL("https://atccable.com"),
  title: {
    default: "ATC Cable Pro — ISI Marked Wires, Power Cables & LED Lighting since 1991",
    template: "%s · ATC Cable Pro",
  },
  description:
    "ATC Cable Pro (Accurate Transmission Cable) manufactures ISI-marked PVC building wires, XLPE & PVC power and control cables, aerial bunched cables, submersible, telecom and solar cables, plus ATCOM LED lighting — manufactured in Delhi since 1991.",
  keywords: [
    "ATC Cable Pro", "ATC Cables", "ISI wires", "PVC building wires", "IS 694", "IS 1554", "IS 7098", "IS 14255",
    "aerial bunched cable", "XLPE cable", "submersible cable", "solar cable", "ATC PRO", "ATCOM LED", "cable manufacturer Delhi",
  ],
  openGraph: {
    title: "ATC Cable Pro — Accurate Transmission Cable",
    description: "ISI-marked wires, cables and LED lighting engineered in Delhi since 1991.",
    url: "https://atccable.com",
    siteName: "ATC Cable Pro",
    locale: "en_IN",
    type: "website",
    images: ["/images/hero-desktop.webp"],
  },
};

export const viewport = {
  themeColor: "#0b1730",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only z-[60] rounded bg-lime-400 px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
