// Generates optimized brand assets from the master logo SVG.
//
// The master logo (src/assets/logo.svg) is a large traced bitmap, so it is
// never served directly. This script rasterizes it into the sizes the site
// actually needs and renders the social preview card.
//
// Usage: node scripts/generate-assets.mjs
// Requires sharp, which ships with Astro's image pipeline.

import { mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const masterLogo = resolve(root, "documents/brand/logo-master.svg");

const targets = [
  { out: "src/assets/logo-mark.png", size: 512 },
  { out: "public/apple-touch-icon.png", size: 180 },
  { out: "public/favicon-32x32.png", size: 32 },
  { out: "public/favicon-16x16.png", size: 16 },
];

async function renderLogo({ out, size }) {
  const abs = resolve(root, out);
  mkdirSync(dirname(abs), { recursive: true });
  await sharp(masterLogo)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 })
    .toFile(abs);
  console.log(`logo   ${out} (${size}px)`);
}

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
  <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="#0a0a0a"/>
  <rect x="0" y="0" width="${OG_WIDTH}" height="8" fill="#2efbfd"/>
  <circle cx="1050" cy="120" r="230" fill="#2efbfd" opacity="0.08"/>
  <circle cx="1120" cy="540" r="180" fill="#2efbfd" opacity="0.05"/>
  <g font-family="Helvetica, Arial, sans-serif">
    <text x="80" y="150" fill="#2efbfd" font-size="26" font-weight="700" letter-spacing="6">RIEF PRODUCTIONS LLC</text>
    <text x="80" y="300" fill="#fafafa" font-size="74" font-weight="700">Software engineering for</text>
    <text x="80" y="386" fill="#fafafa" font-size="74" font-weight="700">modern products and systems.</text>
    <text x="80" y="480" fill="#a3a3a3" font-size="30">Full-stack applications · Backend &amp; APIs · AI &amp; automation · Architecture</text>
    <line x1="80" y1="540" x2="520" y2="540" stroke="#2efbfd" stroke-width="3"/>
    <text x="80" y="588" fill="#737373" font-size="26">riefproductions.com</text>
  </g>
</svg>`;

async function renderOg() {
  const abs = resolve(root, "public/og-image.png");
  await sharp(Buffer.from(ogSvg)).png({ compressionLevel: 9 }).toFile(abs);
  console.log("og     public/og-image.png (1200x630)");
}

for (const target of targets) {
  await renderLogo(target);
}
await renderOg();
console.log("Done.");
