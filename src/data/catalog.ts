/** DEMONSTRATION DATA ONLY — Seema Healthcare client demo. */

export type Category = {
  slug: string;
  name: string;
  icon: string;
  blurb: string;
};

export const categories: Category[] = [
  { slug: "prescription-medicines", name: "Prescription Medicines", icon: "Pill", blurb: "Rx verified by our pharmacists" },
  { slug: "otc-products", name: "OTC Products", icon: "Tablets", blurb: "Everyday relief essentials" },
  { slug: "personal-care", name: "Personal Care", icon: "Sparkles", blurb: "Daily hygiene and grooming" },
  { slug: "vitamins-supplements", name: "Vitamins & Supplements", icon: "Leaf", blurb: "Immunity and nutrition" },
  { slug: "diabetes-care", name: "Diabetes Care", icon: "Activity", blurb: "Monitors, strips and more" },
  { slug: "healthcare-devices", name: "Healthcare Devices", icon: "Stethoscope", blurb: "BP monitors, nebulisers" },
  { slug: "mother-baby-care", name: "Mother & Baby Care", icon: "Baby", blurb: "Gentle care for little ones" },
  { slug: "skin-care", name: "Skin Care", icon: "Droplets", blurb: "Dermatologist favourites" },
  { slug: "hair-care", name: "Hair Care", icon: "Scissors", blurb: "Anti-hairfall and scalp care" },
  { slug: "oral-care", name: "Oral Care", icon: "Smile", blurb: "Toothpaste, rinses, brushes" },
  { slug: "elderly-care", name: "Elderly Care", icon: "HeartHandshake", blurb: "Comfort and mobility aids" },
  { slug: "first-aid", name: "First Aid", icon: "BriefcaseMedical", blurb: "Dressings and antiseptics" },
  { slug: "ayurvedic-wellness", name: "Ayurvedic Wellness", icon: "Flower2", blurb: "Traditional formulations" },
  { slug: "homeopathic", name: "Homeopathic Products", icon: "FlaskConical", blurb: "Classical dilutions" },
];

export const brands = [
  "MediCore",
  "AquaLife",
  "VitaPure",
  "DermaSeal",
  "OrthoPlus",
  "NutriWell",
  "CareOne",
  "HerbaVeda",
];

export const manufacturers = [
  "Seema Pharma Labs",
  "Northline Formulations",
  "BlueLeaf Biotech",
  "Sunrise Life Sciences",
  "Aster Remedies",
  "Ganges Healthcare",
];

export const healthConcerns = [
  "Fever & Pain",
  "Diabetes",
  "Heart Health",
  "Immunity",
  "Digestive Care",
  "Skin & Hair",
  "Bone & Joint",
  "Child Care",
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  composition: string;
  brand: string;
  manufacturer: string;
  category: string;
  packSize: string;
  mrp: number;
  price: number;
  rx: boolean;
  stock: number;
  rating: number;
  reviews: number;
  concern: string;
  tags: ("popular" | "deal" | "bestseller" | "new" | "referral")[];
  image: string;
  images: string[];
  description: string;
  uses: string;
  directions: string;
  safety: string;
  storage: string;
};

type ArtworkTheme = {
  bg1: string;
  bg2: string;
  accent: string;
  accent2: string;
  ink: string;
  surface: string;
};

type ArtworkScene =
  | "blister"
  | "tablet"
  | "bottle"
  | "tube"
  | "device"
  | "jar"
  | "herbal"
  | "baby"
  | "dropper"
  | "sachet";

const photoPool = [
  "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&dpr=1&h=750&w=1260",
  "https://images.pexels.com/photos/16304370/pexels-photo-16304370.jpeg?cs=srgb&dl=pexels-introspectivedsgn-16304370.jpg&fm=jpg",
  "https://images.pexels.com/photos/8670204/pexels-photo-8670204.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8670204.jpg&fm=jpg",
  "https://images.pexels.com/photos/7795687/pexels-photo-7795687.jpeg?cs=srgb&dl=pexels-alesiakozik-7795687.jpg&fm=jpg",
  "https://images.pexels.com/photos/5207306/pexels-photo-5207306.jpeg?cs=srgb&dl=pexels-karola-g-5207306.jpg&fm=jpg",
  "https://images.pexels.com/photos/11931275/pexels-photo-11931275.jpeg?cs=srgb&dl=pexels-towfiqu-barbhuiya-3440682-11931275.jpg&fm=jpg",
  "https://images.pexels.com/photos/11361813/pexels-photo-11361813.jpeg?cs=srgb&dl=pexels-towfiqu-barbhuiya-3440682-11361813.jpg&fm=jpg",
  "https://images.pexels.com/photos/31406904/pexels-photo-31406904.jpeg?cs=srgb&dl=pexels-deise-elen-2149983761-31406904.jpg&fm=jpg",
] as const;

const photoAt = (index: number, offset = 0) => photoPool[(index + offset) % photoPool.length]!;
const photoVariants = (index: number, count: number) => Array.from({ length: count }, (_, offset) => photoAt(index, offset));

const artworkThemes: ArtworkTheme[] = [
  { bg1: "#F7FBFF", bg2: "#E7F4FF", accent: "#176BCE", accent2: "#16B8A6", ink: "#12263A", surface: "#FFFFFF" },
  { bg1: "#FFF8F1", bg2: "#FFE9D6", accent: "#FF8A34", accent2: "#16A36A", ink: "#12263A", surface: "#FFFFFF" },
  { bg1: "#F5FFFC", bg2: "#DDF8F2", accent: "#16B8A6", accent2: "#176BCE", ink: "#12263A", surface: "#FFFFFF" },
  { bg1: "#F8F8FF", bg2: "#E9E8FF", accent: "#6B8CFF", accent2: "#176BCE", ink: "#12263A", surface: "#FFFFFF" },
  { bg1: "#FFF8FB", bg2: "#FCE3EE", accent: "#E86AA8", accent2: "#FF8A34", ink: "#12263A", surface: "#FFFFFF" },
  { bg1: "#F7FFF4", bg2: "#DFF8D8", accent: "#59B84A", accent2: "#16A36A", ink: "#12263A", surface: "#FFFFFF" },
];

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const sceneFor = (seed: { category: string; pack: string; rx: boolean }): ArtworkScene => {
  const category = seed.category;
  const pack = seed.pack.toLowerCase();
  if (category === "healthcare-devices") return "device";
  if (category === "mother-baby-care") return "baby";
  if (category === "skin-care") return "jar";
  if (category === "hair-care" || category === "oral-care") return "tube";
  if (category === "ayurvedic-wellness") return "herbal";
  if (category === "homeopathic") return "dropper";
  if (pack.includes("sachet")) return "sachet";
  if (pack.includes("bottle") || pack.includes("jar")) return "bottle";
  return seed.rx ? "blister" : "tablet";
};

const pillGrid = (x: number, y: number, cols: number, rows: number, size: number, gap: number, fill: string) => {
  const parts: string[] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      parts.push(
        `<circle cx="${x + col * (size + gap)}" cy="${y + row * (size + gap)}" r="${size / 2}" fill="${fill}" opacity="0.92" />`,
      );
    }
  }
  return parts.join("");
};

const renderBottle = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, label: string) => `
  <g>
    <rect x="${x + w * 0.28}" y="${y - h * 0.12}" width="${w * 0.44}" height="${h * 0.12}" rx="${w * 0.08}" fill="${theme.ink}" />
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w * 0.18}" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.1" />
    <rect x="${x + w * 0.14}" y="${y + h * 0.25}" width="${w * 0.72}" height="${h * 0.48}" rx="${w * 0.07}" fill="${theme.accent}" opacity="0.12" />
    <rect x="${x + w * 0.18}" y="${y + h * 0.33}" width="${w * 0.64}" height="${h * 0.26}" rx="${w * 0.04}" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.08" />
    <text x="${x + w * 0.5}" y="${y + h * 0.45}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(16, w * 0.08)}" font-weight="700" fill="${theme.ink}">${label}</text>
    <text x="${x + w * 0.5}" y="${y + h * 0.59}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(9, w * 0.035)}" fill="${theme.accent}">Demo pack</text>
  </g>
`;

const renderTube = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, label: string) => `
  <g>
    <path d="M ${x + w * 0.18} ${y + h * 0.05} L ${x + w * 0.86} ${y + h * 0.18} L ${x + w * 0.76} ${y + h * 0.88} L ${x + w * 0.08} ${y + h * 0.75} Z" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.1" />
    <path d="M ${x + w * 0.84} ${y + h * 0.16} L ${x + w * 0.98} ${y + h * 0.08} L ${x + w * 1.02} ${y + h * 0.72} L ${x + w * 0.88} ${y + h * 0.83} Z" fill="${theme.accent2}" />
    <rect x="${x + w * 0.18}" y="${y + h * 0.22}" width="${w * 0.46}" height="${h * 0.34}" rx="${w * 0.06}" fill="${theme.accent}" opacity="0.18" />
    <text x="${x + w * 0.38}" y="${y + h * 0.44}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(14, w * 0.08)}" font-weight="700" fill="${theme.ink}">${label}</text>
  </g>
`;

const renderDevice = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, label: string) => `
  <g>
    <rect x="${x + w * 0.1}" y="${y + h * 0.14}" width="${w * 0.8}" height="${h * 0.56}" rx="${w * 0.08}" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.1" />
    <rect x="${x + w * 0.18}" y="${y + h * 0.2}" width="${w * 0.64}" height="${h * 0.34}" rx="${w * 0.05}" fill="${theme.accent}" opacity="0.18" />
    <circle cx="${x + w * 0.28}" cy="${y + h * 0.62}" r="${w * 0.05}" fill="${theme.accent}" />
    <circle cx="${x + w * 0.46}" cy="${y + h * 0.62}" r="${w * 0.05}" fill="${theme.accent2}" />
    <circle cx="${x + w * 0.64}" cy="${y + h * 0.62}" r="${w * 0.05}" fill="${theme.ink}" opacity="0.16" />
    <rect x="${x + w * 0.34}" y="${y + h * 0.7}" width="${w * 0.32}" height="${h * 0.1}" rx="${w * 0.04}" fill="${theme.ink}" opacity="0.18" />
    <text x="${x + w * 0.5}" y="${y + h * 0.4}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(14, w * 0.07)}" font-weight="700" fill="${theme.ink}">${label}</text>
  </g>
`;

const renderJar = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, label: string) => `
  <g>
    <ellipse cx="${x + w * 0.5}" cy="${y + h * 0.2}" rx="${w * 0.23}" ry="${h * 0.09}" fill="${theme.ink}" />
    <rect x="${x + w * 0.22}" y="${y + h * 0.16}" width="${w * 0.56}" height="${h * 0.52}" rx="${w * 0.11}" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.1" />
    <rect x="${x + w * 0.3}" y="${y + h * 0.3}" width="${w * 0.4}" height="${h * 0.18}" rx="${w * 0.04}" fill="${theme.accent}" opacity="0.16" />
    <text x="${x + w * 0.5}" y="${y + h * 0.43}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(14, w * 0.07)}" font-weight="700" fill="${theme.ink}">${label}</text>
  </g>
`;

const renderDropper = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, label: string) => `
  <g>
    <path d="M ${x + w * 0.54} ${y + h * 0.08} C ${x + w * 0.64} ${y + h * 0.02}, ${x + w * 0.78} ${y + h * 0.08}, ${x + w * 0.8} ${y + h * 0.18} L ${x + w * 0.88} ${y + h * 0.82} C ${x + w * 0.9} ${y + h * 0.9}, ${x + w * 0.78} ${y + h * 0.96}, ${x + w * 0.68} ${y + h * 0.94} L ${x + w * 0.38} ${y + h * 0.88} C ${x + w * 0.3} ${y + h * 0.86}, ${x + w * 0.26} ${y + h * 0.78}, ${x + w * 0.28} ${y + h * 0.7} L ${x + w * 0.4} ${y + h * 0.12} C ${x + w * 0.42} ${y + h * 0.08}, ${x + w * 0.48} ${y + h * 0.1}, ${x + w * 0.54} ${y + h * 0.08} Z" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.1" />
    <rect x="${x + w * 0.46}" y="${y + h * 0.04}" width="${w * 0.24}" height="${h * 0.08}" rx="${w * 0.04}" fill="${theme.accent2}" />
    <rect x="${x + w * 0.36}" y="${y + h * 0.2}" width="${w * 0.3}" height="${h * 0.34}" rx="${w * 0.05}" fill="${theme.accent}" opacity="0.16" />
    <text x="${x + w * 0.51}" y="${y + h * 0.4}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(13, w * 0.065)}" font-weight="700" fill="${theme.ink}">${label}</text>
  </g>
`;

const renderSachet = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, label: string) => `
  <g>
    <path d="M ${x + w * 0.1} ${y + h * 0.26} L ${x + w * 0.82} ${y + h * 0.12} L ${x + w * 0.9} ${y + h * 0.7} L ${x + w * 0.18} ${y + h * 0.82} Z" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.1" />
    <path d="M ${x + w * 0.16} ${y + h * 0.3} L ${x + w * 0.84} ${y + h * 0.16}" stroke="${theme.accent}" stroke-width="${Math.max(6, w * 0.02)}" opacity="0.35" />
    <text x="${x + w * 0.48}" y="${y + h * 0.48}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.max(12, w * 0.06)}" font-weight="700" fill="${theme.ink}">${label}</text>
  </g>
`;

const renderBlister = (theme: ArtworkTheme, x: number, y: number, w: number, h: number, cols = 4, rows = 2) => `
  <g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(w, h) * 0.12}" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.08" />
    ${pillGrid(x + w * 0.18, y + h * 0.34, cols, rows, Math.min(w / (cols + 1.8), h / (rows + 1.5)) * 0.54, Math.min(w / 18, h / 12), theme.accent)}
  </g>
`;

const buildArtwork = (seed: { name: string; category: string; pack: string; rx: boolean }, index: number, variant: number) => {
  const theme = artworkThemes[(index + variant) % artworkThemes.length]!;
  const scene = sceneFor(seed);
  const safeName = escapeXml(seed.name);
  const safePack = escapeXml(seed.pack);
  const brandMark = safeName.split(" ")[0]?.slice(0, 8).toUpperCase() || "SEEMA";
  const title = seed.rx ? "RX" : "OTC";

  const mainScene = {
    blister: renderBlister(theme, 66, 168, 238, 136) + renderBottle(theme, 320, 176, 160, 220, brandMark),
    tablet: renderBlister(theme, 74, 174, 210, 124) + renderBlister(theme, 292, 136, 194, 120) + renderBottle(theme, 328, 220, 152, 198, brandMark),
    bottle: renderBottle(theme, 258, 130, 180, 290, brandMark) + renderBlister(theme, 80, 182, 202, 118),
    tube: renderTube(theme, 210, 168, 280, 198, brandMark),
    device: renderDevice(theme, 180, 154, 320, 220, brandMark),
    jar: renderJar(theme, 228, 148, 240, 240, brandMark) + renderBlister(theme, 92, 284, 180, 106, 3, 2),
    herbal: renderBottle(theme, 262, 128, 176, 284, brandMark) + `<path d="M 182 392 C 238 322, 254 280, 210 220" stroke="${theme.accent2}" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.55" />`,
    baby: renderBottle(theme, 254, 138, 168, 266, brandMark) + `<rect x="102" y="282" width="150" height="116" rx="24" fill="${theme.surface}" stroke="${theme.ink}" stroke-opacity="0.08" />`,
    dropper: renderDropper(theme, 204, 132, 236, 288, brandMark),
    sachet: renderSachet(theme, 170, 194, 300, 166, brandMark) + renderBlister(theme, 78, 154, 178, 102, 3, 2),
  }[scene]!;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" role="img" aria-label="${safeName}">
      <defs>
        <linearGradient id="bg-${index}-${variant}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.bg1}" />
          <stop offset="100%" stop-color="${theme.bg2}" />
        </linearGradient>
        <filter id="shadow-${index}-${variant}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#12263A" flood-opacity="0.12" />
        </filter>
      </defs>
      <rect width="800" height="800" rx="44" fill="url(#bg-${index}-${variant})" />
      <circle cx="690" cy="120" r="96" fill="${theme.accent}" opacity="0.12" />
      <circle cx="118" cy="640" r="128" fill="${theme.accent2}" opacity="0.1" />
      <circle cx="102" cy="124" r="50" fill="${theme.surface}" opacity="0.6" />
      <circle cx="648" cy="676" r="72" fill="${theme.surface}" opacity="0.48" />
      <g filter="url(#shadow-${index}-${variant})">
        <rect x="48" y="56" width="704" height="688" rx="36" fill="${theme.surface}" opacity="0.8" />
        <rect x="88" y="100" width="624" height="560" rx="30" fill="${theme.surface}" opacity="0.48" />
        ${pillGrid(118, 170, 4, 2, 58, 22, theme.surface)}
        ${pillGrid(522, 164, 4, 2, 58, 22, theme.surface)}
        ${pillGrid(118, 458, 4, 2, 58, 22, theme.surface)}
        ${pillGrid(522, 452, 4, 2, 58, 22, theme.surface)}
        ${mainScene}
        <rect x="70" y="68" width="160" height="52" rx="18" fill="${theme.surface}" />
        <text x="150" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="${theme.accent}">${title}</text>
        <rect x="538" y="68" width="182" height="52" rx="18" fill="${theme.surface}" />
        <text x="629" y="102" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="${theme.ink}">${safePack}</text>
      </g>
    </svg>
  `;

  return svgToDataUri(svg);
};

const seeds: {
  name: string;
  composition: string;
  category: string;
  rx: boolean;
  concern: string;
  pack: string;
  mrp: number;
  off: number;
}[] = [
  { name: "Paracip 650 Tablet", composition: "Paracetamol 650 mg", category: "prescription-medicines", rx: true, concern: "Fever & Pain", pack: "Strip of 15", mrp: 62, off: 18 },
  { name: "Amoxilin 500 Capsule", composition: "Amoxicillin 500 mg", category: "prescription-medicines", rx: true, concern: "Fever & Pain", pack: "Strip of 10", mrp: 148, off: 12 },
  { name: "Pantomed 40 Tablet", composition: "Pantoprazole 40 mg", category: "prescription-medicines", rx: true, concern: "Digestive Care", pack: "Strip of 15", mrp: 176, off: 22 },
  { name: "Metfocare 500 SR", composition: "Metformin 500 mg SR", category: "diabetes-care", rx: true, concern: "Diabetes", pack: "Strip of 20", mrp: 98, off: 20 },
  { name: "Glimicare 2 Tablet", composition: "Glimepiride 2 mg", category: "diabetes-care", rx: true, concern: "Diabetes", pack: "Strip of 10", mrp: 112, off: 15 },
  { name: "Atorsafe 10 Tablet", composition: "Atorvastatin 10 mg", category: "prescription-medicines", rx: true, concern: "Heart Health", pack: "Strip of 15", mrp: 154, off: 25 },
  { name: "Telmicare 40 Tablet", composition: "Telmisartan 40 mg", category: "prescription-medicines", rx: true, concern: "Heart Health", pack: "Strip of 15", mrp: 168, off: 24 },
  { name: "Cetiwell 10 Tablet", composition: "Cetirizine 10 mg", category: "otc-products", rx: false, concern: "Immunity", pack: "Strip of 10", mrp: 38, off: 15 },
  { name: "Rantex Antacid Syrup", composition: "Magaldrate + Simethicone", category: "otc-products", rx: false, concern: "Digestive Care", pack: "200 ml bottle", mrp: 145, off: 18 },
  { name: "ORS Rehydrate Sachet", composition: "Oral rehydration salts", category: "otc-products", rx: false, concern: "Digestive Care", pack: "Pack of 10", mrp: 210, off: 20 },
  { name: "Cough Ease Syrup", composition: "Dextromethorphan + Menthol", category: "otc-products", rx: false, concern: "Fever & Pain", pack: "100 ml bottle", mrp: 132, off: 14 },
  { name: "Painex Gel", composition: "Diclofenac Diethylamine 1.16%", category: "otc-products", rx: false, concern: "Bone & Joint", pack: "30 g tube", mrp: 128, off: 16 },
  { name: "VitaPure D3 60K", composition: "Cholecalciferol 60000 IU", category: "vitamins-supplements", rx: false, concern: "Bone & Joint", pack: "Pack of 4", mrp: 240, off: 28 },
  { name: "Immuno C 1000", composition: "Vitamin C + Zinc", category: "vitamins-supplements", rx: false, concern: "Immunity", pack: "Bottle of 60", mrp: 480, off: 30 },
  { name: "Iron Boost Tablet", composition: "Ferrous ascorbate + Folic acid", category: "vitamins-supplements", rx: false, concern: "Immunity", pack: "Strip of 30", mrp: 320, off: 22 },
  { name: "Omega Heart 1000", composition: "Fish oil omega-3", category: "vitamins-supplements", rx: false, concern: "Heart Health", pack: "Bottle of 60", mrp: 720, off: 26 },
  { name: "Calci Strong Plus", composition: "Calcium carbonate + Vitamin D3", category: "vitamins-supplements", rx: false, concern: "Bone & Joint", pack: "Strip of 15", mrp: 195, off: 18 },
  { name: "Multivit Daily", composition: "Multivitamin multimineral", category: "vitamins-supplements", rx: false, concern: "Immunity", pack: "Bottle of 30", mrp: 399, off: 24 },
  { name: "Digital BP Monitor", composition: "Automatic upper arm monitor", category: "healthcare-devices", rx: false, concern: "Heart Health", pack: "1 unit", mrp: 2450, off: 32 },
  { name: "Glucometer Starter Kit", composition: "Meter + 25 strips + lancets", category: "diabetes-care", rx: false, concern: "Diabetes", pack: "1 kit", mrp: 1650, off: 35 },
  { name: "Glucose Test Strips", composition: "50 test strips", category: "diabetes-care", rx: false, concern: "Diabetes", pack: "Box of 50", mrp: 890, off: 20 },
  { name: "Fingertip Pulse Oximeter", composition: "SpO2 and pulse rate monitor", category: "healthcare-devices", rx: false, concern: "Heart Health", pack: "1 unit", mrp: 1290, off: 40 },
  { name: "Compact Nebuliser", composition: "Compressor nebuliser unit", category: "healthcare-devices", rx: false, concern: "Immunity", pack: "1 unit", mrp: 2150, off: 28 },
  { name: "Infrared Thermometer", composition: "Non-contact forehead thermometer", category: "healthcare-devices", rx: false, concern: "Fever & Pain", pack: "1 unit", mrp: 1450, off: 34 },
  { name: "Diabetic Foot Cream", composition: "Urea 10% + Ceramides", category: "diabetes-care", rx: false, concern: "Skin & Hair", pack: "75 g tube", mrp: 385, off: 18 },
  { name: "Sugar Free Sweetener", composition: "Sucralose tablets", category: "diabetes-care", rx: false, concern: "Diabetes", pack: "Pack of 300", mrp: 260, off: 15 },
  { name: "DermaSeal Moisturiser", composition: "Ceramide + Hyaluronic acid", category: "skin-care", rx: false, concern: "Skin & Hair", pack: "100 g jar", mrp: 640, off: 22 },
  { name: "Sunshield SPF 50 Gel", composition: "Broad spectrum sunscreen", category: "skin-care", rx: false, concern: "Skin & Hair", pack: "50 g tube", mrp: 520, off: 25 },
  { name: "Acne Control Face Wash", composition: "Salicylic acid 2%", category: "skin-care", rx: false, concern: "Skin & Hair", pack: "100 ml", mrp: 349, off: 20 },
  { name: "Anti-Hairfall Shampoo", composition: "Biotin + Caffeine", category: "hair-care", rx: false, concern: "Skin & Hair", pack: "200 ml", mrp: 480, off: 26 },
  { name: "Scalp Care Serum", composition: "Redensyl + Anagain", category: "hair-care", rx: false, concern: "Skin & Hair", pack: "60 ml", mrp: 890, off: 30 },
  { name: "Ketoclear Shampoo", composition: "Ketoconazole 2%", category: "hair-care", rx: true, concern: "Skin & Hair", pack: "100 ml", mrp: 415, off: 18 },
  { name: "Sensitive Toothpaste", composition: "Potassium nitrate 5%", category: "oral-care", rx: false, concern: "Skin & Hair", pack: "100 g", mrp: 190, off: 12 },
  { name: "Antiseptic Mouthwash", composition: "Chlorhexidine 0.2%", category: "oral-care", rx: false, concern: "Skin & Hair", pack: "250 ml", mrp: 175, off: 15 },
  { name: "Soft Bristle Toothbrush", composition: "Ergonomic soft brush", category: "oral-care", rx: false, concern: "Skin & Hair", pack: "Pack of 3", mrp: 149, off: 20 },
  { name: "Baby Gentle Lotion", composition: "Shea butter + Aloe", category: "mother-baby-care", rx: false, concern: "Child Care", pack: "200 ml", mrp: 310, off: 18 },
  { name: "Baby Diaper Pants M", composition: "Ultra absorbent pants", category: "mother-baby-care", rx: false, concern: "Child Care", pack: "Pack of 62", mrp: 999, off: 30 },
  { name: "Prenatal Care Tablet", composition: "DHA + Folic acid", category: "mother-baby-care", rx: false, concern: "Child Care", pack: "Strip of 30", mrp: 545, off: 22 },
  { name: "Baby Nasal Aspirator", composition: "Silicone tip aspirator", category: "mother-baby-care", rx: false, concern: "Child Care", pack: "1 unit", mrp: 420, off: 24 },
  { name: "Adult Diaper Large", composition: "Overnight absorbency", category: "elderly-care", rx: false, concern: "Bone & Joint", pack: "Pack of 10", mrp: 720, off: 20 },
  { name: "Walking Stick Adjustable", composition: "Aluminium support cane", category: "elderly-care", rx: false, concern: "Bone & Joint", pack: "1 unit", mrp: 890, off: 28 },
  { name: "Knee Support Brace", composition: "Elastic compression brace", category: "elderly-care", rx: false, concern: "Bone & Joint", pack: "1 unit", mrp: 650, off: 25 },
  { name: "Joint Relief Oil", composition: "Ayurvedic pain oil", category: "ayurvedic-wellness", rx: false, concern: "Bone & Joint", pack: "100 ml", mrp: 285, off: 20 },
  { name: "Ashwagandha Capsule", composition: "Withania somnifera 500 mg", category: "ayurvedic-wellness", rx: false, concern: "Immunity", pack: "Bottle of 60", mrp: 540, off: 30 },
  { name: "Chyawan Immunity Jam", composition: "Amla based rasayana", category: "ayurvedic-wellness", rx: false, concern: "Immunity", pack: "500 g jar", mrp: 320, off: 18 },
  { name: "Triphala Digestive Tablet", composition: "Triphala extract", category: "ayurvedic-wellness", rx: false, concern: "Digestive Care", pack: "Bottle of 60", mrp: 240, off: 16 },
  { name: "Arnica Relief Drops", composition: "Arnica montana 30C", category: "homeopathic", rx: false, concern: "Bone & Joint", pack: "30 ml", mrp: 165, off: 12 },
  { name: "Nux Vomica Dilution", composition: "Nux vomica 30C", category: "homeopathic", rx: false, concern: "Digestive Care", pack: "30 ml", mrp: 150, off: 10 },
  { name: "Cold Relief Homeo Tablet", composition: "Homeopathic complex", category: "homeopathic", rx: false, concern: "Immunity", pack: "Bottle of 25 g", mrp: 190, off: 14 },
  { name: "First Aid Home Kit", composition: "Dressings, antiseptic, tape", category: "first-aid", rx: false, concern: "Fever & Pain", pack: "1 kit", mrp: 850, off: 26 },
  { name: "Antiseptic Liquid", composition: "Chloroxylenol 4.8%", category: "first-aid", rx: false, concern: "Fever & Pain", pack: "500 ml", mrp: 235, off: 15 },
  { name: "Cotton Roll Sterile", composition: "Absorbent cotton", category: "first-aid", rx: false, concern: "Fever & Pain", pack: "500 g", mrp: 320, off: 18 },
  { name: "Crepe Bandage 10 cm", composition: "Elastic crepe bandage", category: "first-aid", rx: false, concern: "Bone & Joint", pack: "1 roll", mrp: 180, off: 20 },
  { name: "Hand Sanitiser Gel", composition: "Ethyl alcohol 70%", category: "personal-care", rx: false, concern: "Immunity", pack: "500 ml", mrp: 260, off: 22 },
  { name: "Surgical Face Mask", composition: "3-ply mask", category: "personal-care", rx: false, concern: "Immunity", pack: "Box of 50", mrp: 340, off: 35 },
  { name: "Intimate Wash", composition: "pH balanced cleanser", category: "personal-care", rx: false, concern: "Skin & Hair", pack: "200 ml", mrp: 285, off: 18 },
  { name: "Body Talc Prickly Heat", composition: "Cooling medicated talc", category: "personal-care", rx: false, concern: "Skin & Hair", pack: "150 g", mrp: 165, off: 14 },
  { name: "Protein Nutrition Powder", composition: "Whey protein blend", category: "vitamins-supplements", rx: false, concern: "Immunity", pack: "500 g", mrp: 1150, off: 28 },
  { name: "Electrolyte Energy Drink", composition: "Electrolyte powder", category: "otc-products", rx: false, concern: "Digestive Care", pack: "Pack of 6", mrp: 210, off: 16 },
  { name: "Thyronorm 50 Tablet", composition: "Thyroxine sodium 50 mcg", category: "prescription-medicines", rx: true, concern: "Heart Health", pack: "Strip of 30", mrp: 165, off: 15 },
  { name: "Montelair LC Tablet", composition: "Montelukast + Levocetirizine", category: "prescription-medicines", rx: true, concern: "Immunity", pack: "Strip of 10", mrp: 198, off: 20 },
  { name: "Insulin Pen Needles", composition: "31G pen needles", category: "diabetes-care", rx: false, concern: "Diabetes", pack: "Pack of 100", mrp: 1250, off: 22 },
  { name: "Weighing Scale Digital", composition: "Glass body digital scale", category: "healthcare-devices", rx: false, concern: "Heart Health", pack: "1 unit", mrp: 1350, off: 38 },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const products: Product[] = seeds.map((s, i) => {
  const price = Math.round(s.mrp * (1 - s.off / 100));
  const tags: Product["tags"] = [];
  if (i % 3 === 0) tags.push("popular");
  if (i % 7 === 0) tags.push("deal");
  if (i % 5 === 0) tags.push("bestseller");
  if (i >= seeds.length - 8) tags.push("new");
  if (i % 6 === 0) tags.push("referral");
  return {
    id: `SH-P${(1001 + i).toString()}`,
    slug: slugify(s.name),
    name: s.name,
    composition: s.composition,
    brand: brands[i % brands.length]!,
    manufacturer: manufacturers[i % manufacturers.length]!,
    category: s.category,
    packSize: s.pack,
    mrp: s.mrp,
    price,
    rx: s.rx,
    stock: i % 11 === 0 ? 0 : 12 + ((i * 7) % 90),
    rating: Math.round((3.7 + ((i * 13) % 13) / 10) * 10) / 10,
    reviews: 24 + ((i * 37) % 480),
    concern: s.concern,
    tags,
    image: photoAt(i),
    images: photoVariants(i, 4),
    description: `${s.name} is a demonstration catalogue item listed by Seema Healthcare. It contains ${s.composition} and is supplied in a ${s.pack.toLowerCase()}.`,
    uses: `Used as advised by your registered medical practitioner for conditions related to ${s.concern.toLowerCase()}.`,
    directions: "Use exactly as directed on the label or as prescribed. Do not change the prescribed dosage on your own.",
    safety: "Inform your doctor about existing conditions, allergies, pregnancy or other medicines you take. Consult your doctor or pharmacist before use.",
    storage: "Store below 30°C in a dry place, away from direct sunlight and out of the reach of children.",
  };
});

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);

export const hospitals = [
  { code: "SMH100", name: "Seema Multispeciality Hospital", city: "Nagpur", discount: 7, multiplier: 2, minOrder: 499, maxDiscount: 750 },
  { code: "CCH210", name: "City Care Hospital", city: "Nagpur", discount: 5, multiplier: 1.5, minOrder: 399, maxDiscount: 500 },
  { code: "SCD330", name: "Shree Clinic & Diagnostic Centre", city: "Wardha", discount: 5, multiplier: 1.5, minOrder: 299, maxDiscount: 400 },
  { code: "LCH440", name: "LifeCare Hospital", city: "Amravati", discount: 6, multiplier: 2, minOrder: 499, maxDiscount: 600 },
  { code: "SMC550", name: "Sunrise Medical Centre", city: "Bhandara", discount: 4, multiplier: 1.25, minOrder: 299, maxDiscount: 350 },
];

export const doctors = [
  "Dr. Anita Deshmukh — General Medicine",
  "Dr. Rajeev Kulkarni — Cardiology",
  "Dr. Priya Nair — Endocrinology",
  "Dr. Sameer Joshi — Orthopaedics",
  "Dr. Meera Rane — Paediatrics",
  "Dr. Vikas Patil — Dermatology",
  "Dr. Farida Sheikh — Gynaecology",
  "Dr. Arun Bhosale — Pulmonology",
  "Dr. Neha Agrawal — Nephrology",
  "Dr. Sunil Chavan — Neurology",
  "Dr. Kavita Rao — Ophthalmology",
  "Dr. Imran Qureshi — ENT",
];

export const coupons = [
  { code: "SEEMA10", title: "Flat 10% off on first order", benefit: "10% off up to ₹300", min: 499, max: 300, validity: "31 Dec 2026", scope: "All categories", type: "First order" },
  { code: "RXCARE15", title: "Prescription medicine savings", benefit: "15% off up to ₹500", min: 999, max: 500, validity: "30 Nov 2026", scope: "Prescription Medicines", type: "Category" },
  { code: "HOSPITAL7", title: "Hospital referral bonus", benefit: "Extra 7% off", min: 499, max: 750, validity: "31 Dec 2026", scope: "Referred customers", type: "Hospital" },
  { code: "FREESHIP", title: "Free delivery", benefit: "₹49 delivery waived", min: 399, max: 49, validity: "31 Dec 2026", scope: "All categories", type: "Delivery" },
  { code: "VITA25", title: "Vitamins & supplements fest", benefit: "25% off up to ₹600", min: 799, max: 600, validity: "15 Oct 2026", scope: "Vitamins & Supplements", type: "Category" },
  { code: "DEVICE20", title: "Healthcare devices offer", benefit: "20% off up to ₹1,000", min: 1499, max: 1000, validity: "20 Nov 2026", scope: "Healthcare Devices", type: "Category" },
  { code: "BABYLOVE", title: "Mother & baby care", benefit: "18% off up to ₹400", min: 699, max: 400, validity: "05 Dec 2026", scope: "Mother & Baby Care", type: "Category" },
  { code: "POINTS2X", title: "Double reward points weekend", benefit: "2x reward points", min: 299, max: 0, validity: "Every weekend", scope: "All categories", type: "Rewards" },
];

export const articles = [
  { slug: "manage-blood-sugar", title: "Five everyday habits that help you manage blood sugar", category: "Diabetes", author: "Seema Health Desk", reviewer: "Dr. Priya Nair", updated: "12 Jul 2026", read: "6 min", excerpt: "Small, consistent routines around meals, movement and monitoring can make daily diabetes management far less stressful." },
  { slug: "storing-medicines-safely", title: "How to store medicines safely at home", category: "Medicine Safety", author: "Seema Health Desk", reviewer: "Dr. Anita Deshmukh", updated: "28 Jun 2026", read: "4 min", excerpt: "Heat, humidity and sunlight can quietly reduce a medicine's effectiveness. Here is a simple home storage checklist." },
  { slug: "reading-your-prescription", title: "Reading your prescription: what each part means", category: "Prescriptions", author: "Seema Health Desk", reviewer: "Dr. Rajeev Kulkarni", updated: "19 Jun 2026", read: "5 min", excerpt: "Dosage, frequency and duration are written in a shorthand. Knowing it helps you ask better questions at the counter." },
  { slug: "monsoon-immunity", title: "Monsoon immunity: sensible steps for the whole family", category: "Immunity", author: "Seema Health Desk", reviewer: "Dr. Meera Rane", updated: "02 Jun 2026", read: "7 min", excerpt: "Hydration, hygiene and timely vaccination matter more than any single supplement during the rainy season." },
  { slug: "home-bp-monitoring", title: "Measuring blood pressure at home the right way", category: "Heart Health", author: "Seema Health Desk", reviewer: "Dr. Rajeev Kulkarni", updated: "21 May 2026", read: "5 min", excerpt: "Cuff position, posture and timing change your reading more than most people expect." },
  { slug: "elderly-medication-routine", title: "Building a medication routine for elderly parents", category: "Elderly Care", author: "Seema Health Desk", reviewer: "Dr. Sunil Chavan", updated: "09 May 2026", read: "6 min", excerpt: "Pill organisers, refill reminders and one written list can prevent most missed or doubled doses." },
];

export const faqs = [
  { q: "Do I need a prescription to order medicines?", a: "Products marked with an Rx badge require a valid doctor's prescription. Upload it during checkout and our pharmacist team reviews it before your order is dispatched." },
  { q: "How long does prescription review take?", a: "In this demonstration the stated review window is 30 to 60 minutes during working hours (9 am to 9 pm)." },
  { q: "How is my order value calculated after upload?", a: "Our pharmacist reads the prescription, matches each medicine to an in-stock item, and sends you a quotation with quantity, unit price, discount and delivery charge before anything is charged." },
  { q: "What is the hospital referral programme?", a: "If you were referred by an associated hospital, entering the hospital referral code gives you a signup point bonus plus a discount on eligible orders." },
  { q: "How many reward points can I redeem in one order?", a: "1 point equals ₹1, and you can redeem points against a maximum of 10% of your cart value." },
  { q: "Can I pay cash on delivery?", a: "Yes. UPI, cards, net banking, wallet and cash on delivery are all supported at checkout." },
  { q: "What are the delivery charges?", a: "Standard delivery is ₹49 and is free on orders above ₹499. Express delivery is available on selected PIN codes." },
  { q: "Can I return medicines?", a: "Sealed, unopened non-prescription products can be returned within 7 days. Temperature-sensitive and prescription items are non-returnable for safety reasons." },
];

export const testimonials = [
  { name: "Rohit Sharma", city: "Nagpur", text: "I uploaded my father's prescription at night and had the order value by the next morning. The pharmacist even flagged a duplicate medicine.", rating: 5 },
  { name: "Anjali Verma", city: "Wardha", text: "The hospital referral discount was applied automatically after my code was verified. Genuinely useful for monthly refills.", rating: 5 },
  { name: "Imran Khan", city: "Amravati", text: "Clear pricing and no surprise charges at checkout. Delivery tracking updated at every stage.", rating: 4 },
  { name: "Sunita Patil", city: "Bhandara", text: "Reordering my diabetes strips takes under a minute now. The reward points quietly add up.", rating: 5 },
  { name: "Deepak Rane", city: "Nagpur", text: "Support answered on WhatsApp within minutes when I needed a clearer prescription copy explained.", rating: 4 },
  { name: "Farhana Sheikh", city: "Nagpur", text: "Packaging was sealed and the invoice listed batch and expiry for every item. That builds trust.", rating: 5 },
];

export const banners = [
  { title: "Save up to 30% on monthly medicines", subtitle: "Subscribe to refills and never miss a dose", cta: "Shop medicines", to: "/products", accent: "primary" as const },
  { title: "Hospital referral rewards", subtitle: "100 bonus points on signup plus up to 7% off", cta: "Check eligibility", to: "/referral", accent: "teal" as const },
  { title: "Personal care festive offers", subtitle: "Flat 25% off across skin, hair and oral care", cta: "View offers", to: "/offers", accent: "accent" as const },
  { title: "Free delivery above ₹499", subtitle: "Same-day dispatch on orders placed before 4 pm", cta: "Start shopping", to: "/products", accent: "success" as const },
];

export const supportPhone = "1800 200 7788";
export const supportWhatsApp = "+91 98765 43210";
export const supportEmail = "care@seemahealthcare.demo";
