// Site content. Sources: the 2026 ATC Company Profile (primary), plus the legacy
// atccable.com site, the ATC Product Manual PDF and the 01-11-2023 price list.
// Edit here to update the whole site.

export const company = {
  brand: "ATC Cable Pro",
  proBrand: "ATC PRO Cables",
  legalName: "ATC Cables Private Limited",
  formerName: "Active Industries",
  tagline: "Accurate Transmission Cable",
  founded: 1991,
  website: "www.atccable.com",
  phone: "011-47065208",
  phoneHref: "tel:+911147065208",
  mobile: "+91 78273 72271",
  mobileHref: "tel:+917827372271",
  whatsappHref: "https://wa.me/917827372271",
  email: "atc.cables@gmail.com",
  infoEmail: "info@atccable.com",
  accountsEmail: "accounts@atccable.com",
  // Enquiry form submissions go here (Customer Care in the company profile).
  salesEmail: "info@atccable.com",
  salesPhones: ["+91 93117 44487", "+91 87002 86202", "+91 99113 36006"],
  facebook: "https://www.facebook.com/atccables",
  // Add profile URLs here and the footer shows their icons automatically.
  linkedin: "",
  youtube: "",
  sisterBrands: [
    { name: "ATCOM LED", href: "http://www.atcomled.com" },
    { name: "ATC Lumen", href: "https://www.facebook.com/atclumen" },
  ],
};

export const telHref = (n) => "tel:" + n.replace(/[^\d+]/g, "");

export const locations = [
  {
    id: "head-office",
    label: "Head Office",
    name: "ATC Cable Pro",
    lines: ["396, Sainik Vihar, Pitampura", "Delhi 110034"],
    map: "https://www.google.com/maps/search/?api=1&query=396+Sainik+Vihar+Pitampura+Delhi+110034",
  },
  {
    id: "unit-1",
    label: "Unit 1 — Manufacturing",
    name: "ATC Cables Private Limited",
    lines: ["C-618, DSIIDC Industrial Area, Narela", "Delhi 110040"],
    email: "atc.cables@gmail.com",
    map: "https://www.google.com/maps/search/?api=1&query=C-618+DSIIDC+Industrial+Area+Narela+Delhi+110040",
  },
  {
    id: "unit-2",
    label: "Unit 2 — Manufacturing",
    name: "ATC Cable Pro",
    lines: ["B-16/17, Sector 5, DSIIDC Industrial Area, Bawana", "New Delhi 110039"],
    email: "info@atccable.com",
    map: "https://www.google.com/maps/search/?api=1&query=B-16%2F17+Sector+5+DSIIDC+Industrial+Area+Bawana+New+Delhi+110039",
  },
  {
    id: "unit-3",
    label: "Unit 3 — Manufacturing",
    name: "ATC Cable Pro",
    lines: ["DSIIDC Industrial Area, Narela", "Delhi 110040"],
    map: "https://www.google.com/maps/search/?api=1&query=DSIIDC+Industrial+Area+Narela+Delhi+110040",
  },
];

// Leadership (company profile, "The Organization")
export const directors = [
  {
    name: "Mr. Sunil Sood",
    role: "Chairman & Managing Director",
    photo: "/images/profile/leader-sunil-sood.webp",
    phone: "+91 99105 01899",
    email: "sunil.sood@atccable.com",
    message: [
      "The journey of over four decades would not have been as exciting and fulfilling without the unconditional support of our customers and sales partners — thank you for making ATC Cable one of the outstanding companies in our industry.",
      "Customer expectations have risen exponentially, and we are geared up to keep our customers totally satisfied. With new opportunities in the renewable energy sector, we have developed and delivered products for this segment while staying internationally competitive.",
      "We have identified our focus areas of growth for the next five years and beyond. We hope to improve each day to serve you better and to continue being the preferred brand in this competitive market.",
    ],
  },
  {
    name: "Mr. Varun Sood",
    role: "Director",
    photo: "/images/profile/leader-varun-sood.webp",
    message: [
      "I am proud of the strides ATC Cable has made in connecting communities, enabling businesses and shaping the future of connectivity.",
      "We have consistently evolved to meet the changing demands of the cable industry, and remain committed to reliable, cutting-edge solutions for our customers.",
      "None of this would be possible without the dedication of our employees and the trust of our partners. Together, we are forging a path towards a brighter, more connected future.",
    ],
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "1991", label: "Manufacturing since" },
  { value: "3", label: "Manufacturing units in Delhi" },
  { value: "4", label: "BIS licences (ISI)" },
  { value: "100%", label: "Spark-tested, every metre" },
];

export const standards = [
  { code: "IS 694:2010", cml: "CML 9641285", title: "Multi-strand wires", detail: "PVC insulated multi-strand building / house wiring and appliance wires, incl. FR and FRLS categories." },
  { code: "IS 1554 (Pt-1)", cml: "CML 9641487", title: "Power & control cables", detail: "PVC insulated power and control cables — armoured and unarmoured." },
  { code: "IS 7098 (Pt-1)", cml: "CML 9641386", title: "XLPE power cables", detail: "XLPE insulated power cables in copper and aluminium — armoured and unarmoured." },
  { code: "IS 14255", cml: "CML 4874990", title: "UV-protected XLPE cables", detail: "XLPE (UV-ray protective) power cables, including aerial bunched cables." },
];

// Other approvals listed in the company profile
export const otherCertifications = [
  { title: "ISO 9001", text: "Quality management system certified." },
  { title: "RoHS", text: "Certificate of compliance for restricted hazardous substances." },
  { title: "BIS — LED Lighting", text: "BIS compliant certificate for the ATCOM LED lighting range." },
];

export const britishStandards = ["BS 6500 / BS 6231", "BS 6346", "BS 6004"];

export const specialGrades = [
  { code: "FR", name: "Flame Retardant" },
  { code: "HRFR", name: "Heat Resistant Flame Retardant" },
  { code: "FR-LSH", name: "Flame Retardant Low Smoke & Halogen" },
  { code: "HFFR", name: "Halogen-Free Flame Retardant" },
  { code: "ZHLS", name: "Zero Halogen Low Smoke" },
  { code: "HR 105°C", name: "Heat Resistant" },
];

export const products = [
  {
    slug: "pvc-insulated-building-wires",
    name: "PVC Insulated Building Wires",
    category: "Building Wires",
    standard: "IS 694",
    voltage: "1100 V",
    featured: true,
    image: "/images/home-products/building-wires.webp",
    conductor: "Copper",
    summary:
      "Single-core, multi-strand copper house wires for conduit wiring — printed “ATC Cables 1100 V” with size marking on every metre.",
    description:
      "Manufactured to IS 694 with high-conductivity copper (Class 2, IS 8130) and a special grade PVC compound to IS 5831 offering high insulation resistance. Ideal for conduit wiring. Each metre passes through a high-voltage spark tester to ensure there is no weak spot in the insulation.",
    features: [
      "Sizes 0.75 mm² to 6 mm² and above",
      "Available in FR, FRLS, HFFR and heat-resistant PVC",
      "Colours: Red, Black, Blue, Yellow, Green (earthing)",
      "Supplied in 90 m coils in attractive packaging",
    ],
    applications: ["Residential wiring", "Commercial buildings", "Conduit & trunking", "Distribution boards"],
  },
  {
    slug: "panel-board-wiring",
    name: "PVC Insulated Panel Board Wiring",
    category: "Building Wires",
    standard: "IS 694",
    voltage: "1100 V",
    featured: true,
    image: "/images/home-products/multi-core.webp",
    conductor: "Copper",
    summary: "Flexible, finely stranded wires for neat, reliable internal wiring of control panels and switchgear.",
    description:
      "Finely stranded copper conductors with tough PVC insulation that bends easily around tight panel layouts. Resistant to acids, alkalis, oils and solvents for long service in industrial enclosures.",
    features: ["Finely stranded flexible conductor", "Easy routing in compact panels", "Multiple colour codes", "FR / FRLS options"],
    applications: ["Control panels", "Switchgear", "MCC & PCC panels", "OEM equipment"],
  },
  {
    slug: "submersible-cables",
    name: "PVC Insulated Submersible Cables",
    category: "Industrial",
    standard: "IS 694",
    voltage: "1100 V",
    featured: true,
    image: "/images/home-products/submersible.webp",
    conductor: "Copper",
    summary: "Flat three-core cables built for continuous immersion with submersible pumps in borewells.",
    description:
      "Designed for submersible pump motors, with insulation and sheath engineered for water immersion. Every batch passes the high-voltage water immersion test at our in-house laboratory.",
    features: ["Flat 3-core construction", "High-voltage water immersion tested", "Abrasion-resistant outer sheath", "Copper conductor"],
    applications: ["Borewell pumps", "Agriculture", "Water supply schemes", "Industrial pumping"],
  },
  {
    slug: "round-flexible-wires",
    name: "PVC Insulated Round Flexible Wires",
    category: "Building Wires",
    standard: "IS 694",
    voltage: "1100 V",
    featured: true,
    image: "/images/home-products/round-flexible.webp",
    conductor: "Copper",
    summary: "Multi-core sheathed flexible cables for appliances, extension leads and portable equipment.",
    description:
      "Multi-core round flexible cables with PVC insulated cores laid up and sheathed in tough PVC. Their inherent toughness and flexibility make them comfortable to use over a wide range of applications.",
    features: ["2, 3, 4 & 5 core", "Finely stranded copper", "Circular sheathed construction", "Twin twisted flexible also available"],
    applications: ["Home appliances", "Extension cords", "Portable tools", "Light fittings"],
  },
  {
    slug: "h05vv-f-flexible-cord",
    name: "H05VV-F Flexible Cord",
    category: "Building Wires",
    standard: "VDE · HAR · CE",
    voltage: "300 / 500 V",
    image: "/images/products/flexible-cord-h05vvf.webp",
    imageFit: "cover",
    conductor: "Copper",
    summary: "Harmonised 70 °C flexible PVC cordage for medium-duty electrical and electronic equipment.",
    description:
      "H05VV-F harmonised, 70 °C flexible PVC cordage designed for medium mechanical load in office equipment, appliances, computers, medical devices, heaters, cooking / baking / frying equipment and any type of medium-duty electrical or electronic equipment. Note: this product should not come in direct contact with high-temperature components.",
    features: [
      "Design: finely stranded copper, PVC insulation, talc, PVC jacket",
      "Bend radius: 5 × cable diameter",
      "Temperature rating: +5 °C to +70 °C",
      "Jacket: Black, Light Grey, Dark Grey, White (more on request)",
    ],
    applications: ["Office equipment", "Appliances & computers", "Medical devices", "Heaters & cooking equipment"],
    approvals:
      "Conforms to CE Low Voltage Directive, DIN 57281 / VDE 0281-5, HD 21.5 S3, IEC 227-5, BS 6500 (1975), IS 694 and IS 1554 of the Bureau of Indian Standards.",
    colorCode: [
      { cores: "3 cores", colors: "Blue, Brown, Green/Yellow" },
      { cores: "4 cores", colors: "Blue, Brown, Green/Yellow, Black" },
      { cores: "5 cores", colors: "Blue, Brown, Green/Yellow, Black" },
    ],
    table: {
      columns: ["Part No.", "Conductor size", "Stranding", "Approx. Ø min–max (mm)", "Approx. weight (lbs/mft)", "Cord spec"],
      rows: [
        ["IC-0102008", "2 × 0.75 mm²", "24 × 0.20 mm", "5.7 – 7.2", "41", "H05VV-F"],
        ["IC-0102006 (oval)", "2 × 0.75 mm²", "24 × 0.20 mm", "3.7×6.0 – 4.5×7.2", "46", "H05VVH2-F"],
        ["IC-0103008", "3 × 0.75 mm²", "24 × 0.20 mm", "6.0 – 7.6", "46", "H05VV-F"],
        ["IC-0104008", "4 × 0.75 mm²", "24 × 0.20 mm", "6.6 – 8.3", "50", "H05VV-F"],
        ["IC-0105008", "5 × 0.75 mm²", "24 × 0.20 mm", "7.4 – 9.3", "65", "H05VV-F"],
        ["IC-0102010", "2 × 1.0 mm²", "32 × 0.20 mm", "5.9 – 7.5", "42", "H05VV-F"],
        ["IC-0103010", "3 × 1.0 mm²", "32 × 0.20 mm", "6.3 – 8.0", "51", "H05VV-F"],
        ["IC-0104010", "4 × 1.0 mm²", "32 × 0.20 mm", "7.1 – 9.0", "58", "H05VV-F"],
        ["IC-0105010", "5 × 1.0 mm²", "32 × 0.20 mm", "7.8 – 9.8", "82", "H05VV-F"],
        ["IC-0102015", "2 × 1.5 mm²", "30 × 0.25 mm", "6.8 – 8.6", "57", "H05VV-F"],
        ["IC-0103015", "3 × 1.5 mm²", "30 × 0.25 mm", "7.4 – 9.4", "76", "H05VV-F"],
        ["IC-0104015", "4 × 1.5 mm²", "30 × 0.25 mm", "8.4 – 10.5", "88", "H05VV-F"],
        ["IC-0105015", "5 × 1.5 mm²", "30 × 0.25 mm", "9.3 – 11.6", "120", "H05VV-F"],
        ["IC-0102025", "2 × 2.5 mm²", "50 × 0.25 mm", "8.4 – 10.6", "91", "H05VV-F"],
        ["IC-0103025", "3 × 2.5 mm²", "50 × 0.25 mm", "9.2 – 11.4", "134", "H05VV-F"],
        ["IC-0104025", "4 × 2.5 mm²", "50 × 0.25 mm", "10.1 – 12.5", "162", "H05VV-F"],
        ["IC-0105025", "5 × 2.5 mm²", "50 × 0.25 mm", "11.2 – 13.9", "189", "H05VV-F"],
      ],
    },
  },
  {
    slug: "lt-xlpe-power-cables",
    name: "LT XLPE Insulated Power Cables",
    category: "Power Cables",
    standard: "IS 7098",
    voltage: "1.1 kV",
    image: "/images/home-products/single-core.webp",
    conductor: "Aluminium / Copper",
    summary: "Cross-linked polyethylene insulated LT power cables in copper and aluminium, armoured and unarmoured.",
    description:
      "XLPE insulated power cables manufactured to IS 7098 (Part-1). Offered as A2XFY / A2XWY (aluminium, armoured), A2XY (aluminium, unarmoured), 2XWY / 2XFY (copper, armoured) and 2XY (copper, unarmoured).",
    features: ["Copper or EC-grade aluminium", "Strip or round-wire armour", "Higher current rating than PVC", "Product code stencilled on drum flange"],
    applications: ["Power distribution", "Industrial plants", "Infrastructure projects", "Underground feeders"],
  },
  {
    slug: "pvc-power-control-cables",
    name: "PVC Power & Control Cables",
    category: "Power Cables",
    standard: "IS 1554 (Pt-1)",
    voltage: "1.1 kV",
    image: "/images/home-products/power-control.webp",
    conductor: "Aluminium / Copper",
    summary: "Copper and aluminium PVC power and control cables — armoured and unarmoured.",
    description:
      "Built to IS 1554 (Part-1) with EC-grade aluminium or high-conductivity copper conductors (IS 8130), PVC Type A/C insulation and ST1/ST2 inner and outer sheaths (IS 5831), with galvanised steel strip or round-wire armour (IS 3975).",
    features: ["Armoured & unarmoured", "Up to multi-core control cables", "Core colours as per IS 1554", "FRLS outer sheath available"],
    applications: ["Industrial power", "Motor feeders", "Control & interlocking", "Commercial complexes"],
  },
  {
    slug: "aerial-bunched-cables",
    name: "Aerial Bunched Cables",
    category: "Power Cables",
    standard: "IS 14255",
    voltage: "1.1 kV",
    image: "/images/home-products/aerial-bunched.webp",
    conductor: "Aluminium / Copper",
    summary: "XLPE insulated aerial bunched cables and conductors for safe, theft-resistant overhead distribution.",
    description:
      "Aerial bunched cables to IS 14255 — XLPE insulated phase conductors bunched around a messenger, reducing faults, power theft and right-of-way requirements compared to bare overhead lines.",
    features: ["XLPE insulated phase cores", "Messenger supported", "UV-resistant black insulation", "Reduced line losses & theft"],
    applications: ["Rural electrification", "Urban LT distribution", "Street lighting", "Utility networks"],
  },
  {
    slug: "telecom-switchboard-jumper-wires",
    name: "Telecom Switchboard & Jumper Wires",
    category: "Telecom & Signalling",
    standard: "I.T.D. Spec",
    voltage: "—",
    featured: true,
    image: "/images/home-products/telecom.webp",
    conductor: "Copper",
    summary: "Telephone switchboard cables, jumper wire, twin flat and drop wires to Indian Telecom specifications.",
    description:
      "ATC has manufactured telephone cables conforming to I.T.D. specifications since 1991 — including switchboard cables, jumper wires, twin flat wires and drop wires for exchange and subscriber wiring.",
    features: ["Switchboard cables", "Jumper wires", "Twin flat wires", "Drop wires"],
    applications: ["Telephone exchanges", "Intercom & EPABX", "Subscriber wiring", "Distribution frames"],
  },
  {
    slug: "instrumentation-railway-signalling",
    name: "Instrumentation & Railway Signalling Wires",
    category: "Telecom & Signalling",
    standard: "Shielded",
    voltage: "—",
    image: "/images/products/coaxial-cable.webp",
    conductor: "Copper",
    summary: "PVC insulated, shielded instrumentation cables and railway signalling wires for noise-free signals.",
    description:
      "Shielded instrumentation cables and railway signalling wires that protect low-level signals from electromagnetic interference in demanding industrial and railway environments.",
    features: ["Overall / pair shielding", "PVC insulated & sheathed", "Low-noise signal transmission", "Multi-pair constructions"],
    applications: ["Process instrumentation", "Railway signalling", "PLC & SCADA", "Control rooms"],
  },
  {
    slug: "multicore-industrial-wiring",
    name: "Multi-core Industrial Wiring",
    category: "Industrial",
    standard: "IS 694 / IS 1554",
    voltage: "1100 V",
    image: "/images/products/multicore-braided.webp",
    conductor: "Copper",
    summary: "All types of industrial wiring in multiple cores, built to order for machine and plant wiring.",
    description:
      "Multi-core industrial cables in a wide range of constructions. Where the number of cores exceeds five, two adjacent cores in each layer are blue (reference) and yellow (direction), with the remaining cores grey — as per IS 1554.",
    features: ["Wide range of core counts", "Copper conductors", "Special PVC grades on request", "Made to order"],
    applications: ["Machine tools", "Plant wiring", "Automation", "Cranes & hoists"],
  },
];

export const productCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export const qualityPolicy =
  "The Quality Policy of ATC is to ensure a high level of customer satisfaction through offering products and services meeting customer's standards of quality and performance at competitive prices.";

export const inspectionStages = [
  {
    stage: "Wire Conductor",
    checks: [
      "Diameter and surface finish",
      "Elongation / annealing test (copper conductor)",
      "Tensile strength and wrapping test (aluminium)",
      "Resistance of the wire",
    ],
  },
  { stage: "Bunching / Twisting", checks: ["Number of strands", "Dimension of conductor", "Lay length & direction of twist", "Resistance of bunched / twisted conductor"] },
  {
    stage: "Stranding",
    checks: ["Number of strands (bunched conductor)", "Surface of the conductor", "Dimension of the conductor", "Conductor resistance"],
  },
  {
    stage: "PVC Extrusion",
    checks: ["Thickness of insulation", "Surface and eccentricity", "Dimensions of insulated conductor", "Spark testing"],
  },
];

export const routineTests = ["Conductor resistance test", "High voltage test"];

export const typeTests = [
  { group: "Tests on conductor", items: ["Annealing test (copper)", "Tensile test (aluminium / copper)", "Wrapping test (aluminium)", "Conductor resistance test"] },
  { group: "Armour & dimensions", items: ["Test for armouring wires / strips", "Thickness of insulation and sheath"] },
  {
    group: "Physical tests — insulation & sheath",
    items: [
      "Tensile strength and elongation at break",
      "Ageing in air oven",
      "Shrinkage test",
      "Hot deformation",
      "Loss of mass in air oven",
      "Heat shock test",
      "Thermal stability test",
    ],
  },
  {
    group: "Electrical & fire",
    items: [
      "Insulation resistance test",
      "High voltage test at room temperature",
      "High voltage test (water immersion)",
      "Flammability test",
    ],
  },
];

export const certifications = [
  { id: 1, title: "BIS Approval", subtitle: "Performance licence", pdf: "/downloads/certificates/1.pdf", thumb: "/images/certificates/1.webp" },
  { id: 2, title: "Registration", subtitle: "REGN certificate", pdf: "/downloads/certificates/2.pdf", thumb: "/images/certificates/2.webp" },
  { id: 3, title: "Supply Orders", subtitle: "Government & institutional", pdf: "/downloads/certificates/3.pdf", thumb: "/images/certificates/3.webp" },
  { id: 4, title: "Type Test — IS 694", subtitle: "Building wires", pdf: "/downloads/certificates/4.pdf", thumb: "/images/certificates/4.webp" },
  { id: 5, title: "Type Test — IS 1554", subtitle: "Power & control cables", pdf: "/downloads/certificates/5.pdf", thumb: "/images/certificates/5.webp" },
  { id: 6, title: "Type Test — IS 7098", subtitle: "XLPE power cables", pdf: "/downloads/certificates/6.pdf", thumb: "/images/certificates/6.webp" },
];

export const downloads = [
  { title: "ATCOM Lighting Price List (Oct 2026 Volume-IV)", meta: "COB, Panel, Flood & Magnetic · 2.4 MB", href: "/downloads/atcom-lighting-catalogue.pdf" },
  { title: "ATCOM Indoor & Commercial Project Price List (2026 Volume-IX)", meta: "Magnetic Tracks & Downlights · 3.9 MB", href: "/downloads/atcom-indoor-project-pricelist-2026.pdf" },
  { title: "ATCOM Niwa Outdoor & Landscape Price List (Volume-I)", meta: "Spikes, Bollards & In-Ground · 5.1 MB", href: "/downloads/atcom-outdoor-pricelist.pdf" },
  { title: "Product Manual & Technical Specifications", meta: "28 pages · 4.0 MB", href: "/downloads/atc-product-manual.pdf" },
  { title: "Product & Pricing Manual (01-11-2023)", meta: "Latest price list · 0.6 MB", href: "/downloads/atc-price-list-2023.pdf" },
  { title: "Product & Pricing Manual (21-07-2014)", meta: "Price list · 1.2 MB", href: "/downloads/atc-pricing-manual-2014.pdf" },
];

// ---------- Technical specification tables (IS 694 / IS 1554) ----------

export const conductorConstruction = [
  ["Copper", "Up to and including 6 mm²", "Solid / Stranded", "Class 1 or Class 2 of IS 8130"],
  ["Copper", "Above 6 mm²", "Stranded", "Class 2 of IS 8130"],
  ["Aluminium", "Up to and including 6 mm²", "Solid / Stranded", "Class 1 or Class 2 of IS 8130"],
  ["Aluminium", "Above 6 mm²", "Stranded", "Class 2 of IS 8130"],
];

export const singleCoreUnsheathed = [
  ["1*", "0.7", "3.2"], ["1.5", "0.7", "3.4"], ["2.5", "0.8", "4.2"], ["4", "0.8", "4.8"],
  ["6", "0.8", "5.6"], ["10", "1.0", "7.0"], ["16", "1.0", "8.2"], ["25", "1.2", "10.0"],
  ["35", "1.2", "11.5"], ["50", "1.4", "13.0"], ["70", "1.4", "15.0"], ["95", "1.6", "17.5"],
  ["120", "1.6", "19.0"], ["150", "1.8", "21.0"], ["185", "2.0", "23.0"], ["240", "2.2", "26.5"],
  ["300", "2.4", "29.5"], ["400", "2.6", "33.5"], ["500", "2.8", "37.5"], ["600", "2.8", "42.0"],
];

export const sheathedCables = {
  columns: [
    "Area (mm²)", "Insulation (mm)",
    "Sheath · 1C", "Sheath · 2C", "Sheath · 3C", "Sheath · 4C",
    "OD · 1C", "OD · 2C round", "OD · 2C flat", "OD · 3C", "OD · 4C",
  ],
  rows: [
    ["1*", "0.6", "0.8", "0.9", "0.9", "0.9", "4.7", "8.2", "7.8 × 5.0", "8.6", "9.2"],
    ["1.5", "0.6", "0.8", "0.9", "0.9", "0.9", "5.0", "8.8", "8.4 × 5.4", "9.2", "10.0"],
    ["2.5", "0.7", "0.8", "1.0", "1.0", "1.0", "5.8", "10.5", "10.0 × 6.4", "11.0", "12.0"],
    ["4", "0.8", "0.9", "1.0", "1.1", "1.1", "6.8", "12.0", "11.5 × 7.2", "13.0", "14.0"],
    ["6", "0.8", "0.9", "1.1", "1.1", "1.2", "7.8", "13.5", "13.0 × 8.0", "14.5", "15.5"],
    ["10", "1.0", "0.9", "1.2", "1.2", "1.3", "8.8", "16.5", "16.0 × 9.6", "17.5", "19.5"],
    ["16", "1.0", "1.0", "1.3", "1.3", "1.4", "10.5", "19.0", "18.5 × 11.0", "20.0", "22.5"],
    ["25", "1.2", "1.1", "1.5", "1.5", "1.6", "12.5", "23.0", "22.0 × 13.0", "24.5", "27.5"],
    ["35", "1.2", "1.1", "1.6", "1.6", "1.7", "13.5", "25.5", "25.0 × 14.5", "27.5", "30.5"],
    ["50", "1.4", "1.2", "1.7", "1.7", "1.8", "15.5", "29.5", "29.0 × 16.5", "31.5", "35.0"],
  ],
};

export const houseWire1100V = {
  columns: [
    "Area (mm²)", "No. / dia. of wire (mm)", "Insulation (mm)", "Approx. OD (mm)",
    "In conduit / trunking (A)", "Clipped / on tray (A)", "Max. resistance @ 20 °C (Ω/km)",
  ],
  rows: [
    ["0.75", "24 / 0.20", "0.6", "2.4", "7", "—", "—"],
    ["1.0", "14 / 0.30", "0.7", "2.8", "11", "12", "18.1"],
    ["1.5", "22 / 0.30", "0.7", "3.1", "13", "16", "12.1"],
    ["2.5", "36 / 0.30", "0.8", "3.8", "18", "22", "7.41"],
    ["4.0", "56 / 0.30", "0.8", "4.4", "24", "29", "4.95"],
    ["6.0", "84 / 0.30", "0.8", "5.2", "31", "37", "3.30"],
  ],
  note:
    "Standard colours: Black, Red, Blue and Green (earthing). Supplied in 90 m lengths. Current ratings as per IS 3961 (Part V) 1968; conductor Class 2 of IS 8130.",
};

export const ratingAssumptions = [
  ["Maximum conductor temperature", "70 °C"],
  ["Thermal resistivity of soil", "150 °C cm/W"],
  ["Thermal resistivity of PVC", "650 °C cm/W"],
  ["Ground temperature", "30 °C"],
  ["Ambient air temperature", "40 °C"],
];

export const depthRating = {
  columns: ["Depth of laying (cm)", "75", "90", "105", "120", "150", "180+"],
  rows: [
    ["Up to 25 mm²", "1.00", "0.99", "0.98", "0.97", "0.96", "0.95"],
    ["25 – 300 mm²", "1.00", "0.98", "0.97", "0.96", "0.94", "0.93"],
    ["Above 300 mm²", "1.00", "0.97", "0.96", "0.95", "0.92", "0.91"],
  ],
};

export const groundTempRating = {
  columns: ["Ground temp. (°C)", "15", "20", "25", "30", "35", "40", "45", "50"],
  rows: [["Rating factor", "1.17", "1.12", "1.06", "1.00", "0.94", "0.87", "0.79", "0.71"]],
};

export const ambientTempRating = {
  columns: ["Ambient temp. (°C)", "20", "25", "30", "35", "40", "45", "50"],
  rows: [["Rating factor", "1.33", "1.25", "1.16", "1.09", "1.00", "0.90", "0.80"]],
};

export const coreColours = [
  ["Single core", ["Red", "Yellow", "Blue", "Black"]],
  ["2 core", ["Red", "Black"]],
  ["3 core", ["Red", "Yellow", "Blue"]],
  ["3½ core", ["Red", "Yellow", "Blue", "Black"]],
  ["4 core", ["Red", "Yellow", "Blue", "Black"]],
  ["5 core", ["Red", "Yellow", "Blue", "Black", "Grey"]],
];

export const productCodes = [
  ["A", "Aluminium conductor (no letter for copper)"],
  ["Y", "PVC insulation / PVC outer sheath"],
  ["2X", "XLPE insulation"],
  ["W", "Steel round wire armour"],
  ["F", "Steel strip armour"],
  ["WW", "Steel double round wire armour"],
  ["FF", "Steel double strip armour"],
  ["AW", "Aluminium wire armour"],
];

// ---------- Company Profile 2026 ----------

export const profileIntro = [
  "Started in 1991, ATC Cable Pro is one of India's leading electrical and power cable manufacturers. ATC has always believed in enhancing capabilities and augmenting the product basket — and in recent years has forayed into new segments, adding new products under the ATC brand.",
  "The company offers complete electrical solutions: electrical wires, 3-core flat cables, communication and telecommunication cables, flexible cables, auto cables, XLPE power cables and aerial bunched cables. ATC has established itself as an innovator by constantly upgrading technology, modernising facilities and maintaining the highest standards of quality and service.",
];

export const mission = [
  "Provide the most energy-efficient products that are affordable and best suited to consumers' needs.",
  "Manufacture and deliver high-quality electrical wires and cables that meet industry standards and customer expectations.",
  "Continuously enhance product capabilities and expand the range to serve broader electrical and power cable needs.",
  "Provide reliable, innovative solutions that support strong performance and safety in electrical installations.",
];

export const vision = [
  "Make ATC a household name as an electrical company and win customers' trust.",
  "Be recognised as a leading, trusted brand in electrical wires and cables across India.",
  "Expand market presence and the product portfolio to meet evolving infrastructure and power-distribution needs.",
  "Uphold innovation and reliability as the core hallmarks of our growth.",
];

// Product families (company profile, "Our Products" + "Product Range")
export const productFamilies = [
  {
    id: "wires",
    title: "Wires (Household)",
    image: "/images/profile/coloured-coils.webp",
    items: ["FR, HRFR, HFFR, FRLS & ZHLS wires", "Round flexible wires", "Braided copper cables", "PVC multicore control cables"],
  },
  {
    id: "cables",
    title: "Cables (Industrial)",
    image: "/images/profile/lt-cables.webp",
    items: ["XLPE / PVC power cables", "LT 1.1 kV & solar cables", "Submersible & panel wiring", "Instrumentation & telecom"],
  },
  {
    id: "led-indoor",
    title: "LED Lighting (Indoor)",
    image: "/images/profile/led-cob.webp",
    items: ["Bulbs, tubes & ceiling lights", "Panel lights & spotlights", "Architectural & decorative", "LED strips & profiles"],
  },
  {
    id: "led-industrial",
    title: "LED Lighting (Industrial)",
    image: "/images/profile/led-flood.webp",
    items: ["Modular & multi-lens flood lights", "Street lights", "High bay lights", "High-power tube lights"],
  },
];

export const brands = [
  { name: "ATC", tag: "Power Cables", logo: "/images/atc-logo.svg" },
  { name: "ATC PRO", tag: "Premium Copper Cables", logo: "/images/profile/brand-atc-pro.webp" },
  { name: "ATCOM LED", tag: "Lighting Products", logo: "/images/profile/brand-atcom-led.webp" },
  { name: "ATCOM MEGA", tag: "Premium Lighting Products", logo: "/images/profile/brand-atcom-mega.webp" },
];

export const atcPro = {
  intro: "ATC Cable is now ATC Cable Pro — with a new logo and upgraded insulation that is anti-rodent and anti-termite.",
  points: [
    { title: "Anti-rodent & anti-termite", text: "Upgraded insulation that protects wiring from rodent and termite damage." },
    { title: "Pioneer-grade PVC", text: "High-quality PVC compound from a pioneer Indian brand for super safety from fire and short circuit." },
    { title: "Safer outer skin", text: "The skin layer — first in contact with fire — is safer, and specially made to slide smoothly through conduits." },
    { title: "70 °C / 105 °C rated", text: "Base white insulation bears up to 70 °C with a high oxygen index; heat-resistant PVC up to 105 °C." },
    { title: "FR PVC", text: "Flame-retardant PVC — very safe for homes, offices and high-rise buildings." },
    { title: "Soft & flexible", text: "Multi-core round cables are made with soft PVC for easy, flexible installation." },
  ],
};

export const insulationTypes = [
  { code: "FR", title: "Flame Retardant", text: "ATC FR insulated cables for general wiring." },
  { code: "HRFR", title: "Heat Resistant Flame Retardant", text: "For installations exposed to higher operating temperatures." },
  {
    code: "FR-LSH",
    title: "Flame Retardant Low Smoke & Halogen",
    text: "Specially formulated PVC that restricts toxic gases and smoke, self-extinguishes and stops fire spreading — recommended for high-rise buildings, offices, malls and hospitals.",
  },
  { code: "ZHLS", title: "Zero Halogen Low Smoke", text: "A special compound with practically 0% halogen content and a very high oxygen index." },
];

export const clients = [
  "NTPC",
  "Military Engineer Services (MES), Army HQ, New Delhi",
  "National Hydroelectric Power Corp. (NHPC), Singtam, Gangtok",
  "NHPC, Loktak, Manipur",
  "Oil & Natural Gas Corporation (ONGC), Sibsagar & Agartala",
  "Numaligarh Refinery Ltd., Golaghat, Assam",
  "North Eastern Electric Power Corporation (NEEPCO)",
  "Department of Trade, Bhutan Standards, Thimphu",
  "Tala Hydroelectric Project Authority, Gedu, Bhutan",
  "Bhutan National Housing Development Corporation Ltd.",
  "Hindustan Latex Ltd., Kochi",
  "Travancore Cements Ltd., Kerala",
  "Rubber Board, Kochi",
  "Keltron Industries, Kerala",
  "Kerala State Electricity Board",
  "Tamil Nadu Electricity Board",
  "Himachal Pradesh Electricity Board (Regd. Vendor)",
  "Controller of Stores, Himachal Pradesh Government",
  "North Eastern Hill University (NEHU), Shillong",
  "Leh (Union Territory)",
  "P.W.D. Maharashtra (MHADA)",
  "P.W.D. Assam",
  "P.W.D. Manipur",
  "P.W.D. Himachal Pradesh",
  "P.W.D. Kerala",
  "P.W.D. Tripura",
  "Tripura State Electricity Corporation Ltd.",
  "Agartala Municipal Corporation, Tripura",
];

// Short names for the homepage client marquee
export const clientHighlights = ["NTPC", "MES — Indian Army", "NHPC", "ONGC", "Numaligarh Refinery", "NEEPCO", "Bhutan Standards", "Tala Hydroelectric", "Kerala SEB", "Tamil Nadu EB", "HP Electricity Board", "NEHU Shillong", "PWD Assam", "PWD Manipur", "PWD Tripura", "PWD Kerala", "MHADA Maharashtra", "Rubber Board Kochi"];

export const exhibitions = [
  { name: "Trade Fair", place: "Pragati Maidan, Delhi", date: "Nov 2015" },
  { name: "LED Expo", place: "Pragati Maidan, Delhi", date: "Dec 2015", image: "/images/profile/expo-led-2015.webp" },
  { name: "NSIC Expo", place: "NSIC Grounds, Delhi", date: "Feb 2016" },
  { name: "PWD Expo", place: "Bamuni Maidan, Guwahati", date: "Sep 2016" },
  { name: "Light India", place: "Pragati Maidan, Delhi", date: "Oct 2016", image: "/images/profile/expo-light-india-2016.webp" },
  { name: "LED Expo", place: "Pragati Maidan, Delhi", date: "Dec 2017", image: "/images/profile/expo-led-2017.webp" },
  { name: "Interior Expo", place: "Guwahati", date: "2018", image: "/images/profile/expo-guwahati-1.webp" },
  { name: "Architect Expo", place: "Imphal, Manipur", date: "2018", image: "/images/profile/expo-manipur-2.webp" },
  { name: "ACETECH", place: "New Delhi", date: "Dec 2018" },
  { name: "ACETECH", place: "Pragati Maidan, New Delhi", date: "2021", image: "/images/profile/expo-acetech-6.webp" },
  { name: "Electrofest", place: "Guwahati", date: "2026", image: "/images/profile/expo-electrofest-2.webp" },
];

export const turnover = [
  { value: "₹70 Cr", label: "Present group turnover" },
  { value: "₹100 Cr", label: "Estimated turnover 2026–27" },
  { value: "₹200 Cr", label: "Projected turnover 2027–28" },
];

// LED SKD partners ("Make in India")
export const ledPartners = [
  { name: "GR Optics", text: "World's 2nd-largest China-based manufacturer of optical parts for LED lights." },
  { name: "Hounertech", text: "USA-based manufacturer of chips for COB LED lights." },
  { name: "All Looking", text: "China-based manufacturer of smart drivers for automation." },
];

export const facilityImages = [
  { src: "/images/profile/coiling-machine.webp", label: "Coiling machine at work" },
  { src: "/images/profile/factory-floor.webp", label: "Production floor" },
  { src: "/images/profile/raw-copper.webp", label: "Copper raw material" },
  { src: "/images/profile/raw-aluminium.webp", label: "Aluminium raw material" },
  { src: "/images/profile/lab-1.webp", label: "Test laboratory" },
  { src: "/images/profile/led-lab-3.webp", label: "LED testing equipment" },
];
