// Products shown on /products, keyed by catalogue id from data/catalogues.js.
// Images were taken from each catalogue PDF; `pdfPage` is the PDF page the card opens.

const img = (catalogueId, slug) => `/images/products/catalogue/${catalogueId}/${slug}.webp`;

export const catalogueGroups = {
  "volume-iv": "lighting",
  "project-volume-ix": "lighting",
  "outdoor-volume-i": "lighting",
  "atc-pro-profile": "cables",
  "atc-power-cables-manual": "cables",
  "atc-wires-cables-pricelist": "cables",
};

export const catalogueProducts = {
  "volume-iv": [
    { id: "zx-cob", name: "ZX COB Downlight", category: "COB Lighting", specs: "7W / 12W / 18W · Cut-out 50–90 mm", image: img("volume-iv", "zx-cob"), pdfPage: 2 },
    { id: "zx-surface", name: "ZX Surface", category: "COB Lighting", specs: "7W / 12W / 18W · Surface mounted", image: img("volume-iv", "zx-surface"), pdfPage: 2 },
    { id: "liquid-beam", name: "Liquid Beam", category: "COB Lighting", specs: "8W / 12W / 18W · Cut-out 50–70 mm", image: img("volume-iv", "liquid-beam"), pdfPage: 2 },
    { id: "slim-surface-tiltable", name: "Slim Surface Tiltable (SST)", category: "COB Lighting", specs: "8W · Surface mounted · H 88 × W 75 mm", image: img("volume-iv", "slim-surface-tiltable"), pdfPage: 2 },
    { id: "pc-star-panel", name: "PC Star Panel", category: "Panel Lights", specs: "8W / 12W / 15W · Concealed + surface", image: img("volume-iv", "pc-star-panel"), pdfPage: 3 },
    { id: "optic-pro-flood", name: "Optic Pro Flood Light", category: "Flood Lights", specs: "30W / 50W / 100W / 200W", image: img("volume-iv", "optic-pro-flood"), pdfPage: 4 },
    { id: "high-bay-eco", name: "High Bay (ECO Lens) DOB", category: "High Bay Lights", specs: "50W / 100W / 200W", image: img("volume-iv", "high-bay-eco"), pdfPage: 4 },
    { id: "strips-24v", name: "Strips (24V IP20)", category: "Strip Lights", specs: "120L & 240L · Connectable and cuttable", image: img("volume-iv", "strips-24v"), pdfPage: 5 },
  ],
  "project-volume-ix": [
    { id: "magnetic-track-spot", name: "Magnetic Track Spot", category: "Magnetic Track 25mm", specs: "8W / 12W / 20W · On track", image: img("project-volume-ix", "magnetic-track-spot"), pdfPage: 3 },
    { id: "track-spot", name: "Track Spot", category: "Magnetic Track", specs: "7W · H 160 × W 35 mm · On track", image: img("project-volume-ix", "track-spot"), pdfPage: 7 },
    { id: "pendant-light", name: "Pendant Light", category: "Magnetic Track", specs: "7W · H 56 × W 52 mm · On track", image: img("project-volume-ix", "pendant-light"), pdfPage: 7 },
    { id: "mbx-30mm-linear", name: "MBX 30mm Linear", category: "Linear Lighting", specs: "5W / 10W / 18W · 3, 6 & 12 LED · Anti-glare", image: img("project-volume-ix", "mbx-30mm-linear"), pdfPage: 10 },
    { id: "mark-1", name: "Mark 1 Downlight", category: "Downlights", specs: "8W / 12W / 18W · Cut-out 45 mm", image: img("project-volume-ix", "mark-1"), pdfPage: 13 },
    { id: "xtd-surface", name: "XTD Surface Downlight", category: "Surface Down Lights", specs: "7W / 12W / 18W · Surface mounted", image: img("project-volume-ix", "xtd-surface"), pdfPage: 19 },
    { id: "slim-tiltable", name: "Slim Tiltable", category: "Surface Down Lights", specs: "8W · Surface mounted · H 162 × W 42 mm", image: img("project-volume-ix", "slim-tiltable"), pdfPage: 19 },
    { id: "blade-round", name: "Blade Round", category: "Architectural Lighting", specs: "8W–30W · Cut-out 75–205 mm", image: img("project-volume-ix", "blade-round"), pdfPage: 20 },
  ],
  "outdoor-volume-i": [
    { id: "ami", name: "Ami 3W", category: "In-Ground Lights", specs: "AMLB3W · 3W · Ø50 mm", image: img("outdoor-volume-i", "ami"), pdfPage: 8 },
    { id: "kai", name: "Kai 3W X4", category: "In-Ground Lights", specs: "AMLX4W · 3W · Ø30 mm", image: img("outdoor-volume-i", "kai"), pdfPage: 8 },
    { id: "keiko", name: "Keiko 3W", category: "Garden Spike", specs: "AML0156F · 3W · 45 × 45 × 50 mm", image: img("outdoor-volume-i", "keiko"), pdfPage: 13 },
    { id: "koji", name: "Koji 6W", category: "Surface Wall Lights", specs: "AML571 · 6W · 90 × 82 mm", image: img("outdoor-volume-i", "koji"), pdfPage: 22 },
    { id: "pillar-highlighter", name: "Pillar Highlighter", category: "Narrow Beam Spot", specs: "8W · 155 mm · Ø71 mm", image: img("outdoor-volume-i", "pillar-highlighter"), pdfPage: 27 },
    { id: "zoomable-spot", name: "Zoomable Spot", category: "Spot Lights", specs: "7W / 12W", image: img("outdoor-volume-i", "zoomable-spot"), pdfPage: 33 },
    { id: "cobra-flex", name: "Cobra Flex", category: "Flexible Linear", specs: "11.25W · 600 / 1200 mm · Side-bend", image: img("outdoor-volume-i", "cobra-flex"), pdfPage: 30 },
    { id: "medusa", name: "Medusa", category: "Modular Linear", specs: "6W per module · Die-cast aluminium", image: img("outdoor-volume-i", "medusa"), pdfPage: 31 },
  ],
  "atc-pro-profile": [
    { id: "wires-and-cables", name: "ATC PRO Wires & Cables", category: "Wires & Cables", specs: "Reliable connections for homes and industry", image: img("atc-pro-profile", "wires-and-cables"), pdfPage: 1 },
    { id: "building-wires", name: "Building Wires & Cables", category: "Building Wires", specs: "PVC insulated copper · IS:694/2010", image: img("atc-pro-profile", "building-wires"), pdfPage: 10 },
    { id: "round-flexible", name: "Round Flexible Wires", category: "Flexible Wires", specs: "Bare annealed copper conductor", image: img("atc-pro-profile", "round-flexible"), pdfPage: 9 },
    { id: "submersible", name: "Submersible Cables", category: "Submersible", specs: "Flat & round · 3 and 4 cores", image: img("atc-pro-profile", "submersible"), pdfPage: 11 },
    { id: "power-control", name: "Power & Control Cables", category: "Power Cables", specs: "PVC insulated heavy duty · IS 1554:1988", image: img("atc-pro-profile", "power-control"), pdfPage: 6 },
    { id: "aerial-bunched", name: "Aerial Bunched Cables", category: "ABC Cables", specs: "Up to 1100 V · IS:14255/1995", image: img("atc-pro-profile", "aerial-bunched"), pdfPage: 13 },
    { id: "telephone-switchboard", name: "Telephone & Switch Board Cables", category: "Telecom", specs: "Tele-communication cables", image: img("atc-pro-profile", "telephone-switchboard"), pdfPage: 5 },
  ],
  "atc-power-cables-manual": [
    { id: "lt-power-cable", name: "ATC PRO Power Cable", category: "Power Cables", specs: "PVC, XLPE and armoured constructions", image: img("atc-power-cables-manual", "lt-power-cable"), pdfPage: 1 },
    { id: "single-core-armoured", name: "Single Core Armoured Cable", category: "Armoured Cables", specs: "Copper conductor · Aluminium wire armour", image: img("atc-power-cables-manual", "single-core-armoured"), pdfPage: 19 },
    { id: "two-core", name: "2 Core Un-Armoured Cable", category: "PVC Insulated", specs: "1.1 kV · Al / Copper conductor", image: img("atc-power-cables-manual", "two-core"), pdfPage: 12 },
    { id: "three-core", name: "3 Core Un-Armoured Cable", category: "PVC Insulated", specs: "1.1 kV · Al / Copper conductor", image: img("atc-power-cables-manual", "three-core"), pdfPage: 14 },
    { id: "three-half-core", name: "3.5 Core Un-Armoured Cable", category: "PVC Insulated", specs: "1.1 kV · Al / Copper conductor", image: img("atc-power-cables-manual", "three-half-core"), pdfPage: 15 },
    { id: "four-core", name: "4 Core Un-Armoured Cable", category: "PVC Insulated", specs: "1.1 kV · Al / Copper conductor", image: img("atc-power-cables-manual", "four-core"), pdfPage: 17 },
    { id: "three-half-core-armoured", name: "3.5 Core Armoured Cable", category: "Armoured Cables", specs: "1.1 kV · Galvanized steel wire / strip", image: img("atc-power-cables-manual", "three-half-core-armoured"), pdfPage: 24 },
    { id: "control-armoured", name: "Armoured Control Cable", category: "Control Cables", specs: "1.1 kV · 1.5 sq mm copper conductor", image: img("atc-power-cables-manual", "control-armoured"), pdfPage: 27 },
  ],
  "atc-wires-cables-pricelist": [
    { id: "multi-strand-copper", name: "PVC Copper Multistrand Cables", category: "T-1", specs: "0.5–300 sq mm · Up to 1100 V", image: img("atc-wires-cables-pricelist", "multi-strand-copper"), pdfPage: 3 },
    { id: "round-flexible-multicore", name: "Round Flexible Multicores", category: "T-2", specs: "0.5–50 sq mm · 1100 V · IS:694/2010", image: img("atc-wires-cables-pricelist", "round-flexible-multicore"), pdfPage: 3 },
    { id: "super-flat-submersible", name: "Super Flat Submersible Cable", category: "T-3", specs: "1.5–50 sq mm", image: img("atc-wires-cables-pricelist", "super-flat-submersible"), pdfPage: 3 },
    { id: "speaker-wire", name: "Speaker Wires", category: "T-4", specs: "PVC insulated and sheathed", image: img("atc-wires-cables-pricelist", "speaker-wire"), pdfPage: 3 },
    { id: "coaxial-rg6", name: "Coaxial Cable RG-6", category: "T-5", specs: "1/.91 mm · Braided 128/96 · CC steel", image: img("atc-wires-cables-pricelist", "coaxial-rg6"), pdfPage: 3 },
    { id: "aluminium-cables", name: "Aluminium Conductor Cables", category: "T-8", specs: "Solid conductor · 1.5–10 sq mm", image: img("atc-wires-cables-pricelist", "aluminium-cables"), pdfPage: 4 },
    { id: "lt-power-armoured", name: "LT Aluminium Power Cables", category: "T-12", specs: "4–400 sq mm · Armoured / unarmoured", image: img("atc-wires-cables-pricelist", "lt-power-armoured"), pdfPage: 5 },
    { id: "copper-power", name: "Copper Power Cables", category: "T-13 / T-14", specs: "4–300 sq mm · XLPE insulated", image: img("atc-wires-cables-pricelist", "copper-power"), pdfPage: 5 },
  ],
};
