/**
 * Run once to generate PNG/ICO icon files from favicon.svg.
 * Usage: node scripts/generate-icons.mjs
 */

import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const svgBuffer = readFileSync(path.join(root, 'public', 'favicon.svg'));

mkdirSync(path.join(root, 'public', 'icons'), { recursive: true });

// apple-touch-icon — iOS home screen (180x180)
await sharp(svgBuffer)
  .resize(180, 180)
  .png()
  .toFile(path.join(root, 'public', 'apple-touch-icon.png'));
console.log('✓ apple-touch-icon.png');

// Android PWA manifest icons
await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile(path.join(root, 'public', 'icons', 'icon-192.png'));
console.log('✓ icons/icon-192.png');

await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(path.join(root, 'public', 'icons', 'icon-512.png'));
console.log('✓ icons/icon-512.png');

// favicon.ico — 32x32 PNG wrapped in ICO format (replaces Astro default)
const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
writeFileSync(path.join(root, 'public', 'favicon.ico'), pngToIco(png32, 32));
console.log('✓ favicon.ico');

console.log('\nAll icons generated successfully.');

function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(1, 4); // image count: 1

  const dir = Buffer.alloc(16);
  dir.writeUInt8(size, 0);           // width
  dir.writeUInt8(size, 1);           // height
  dir.writeUInt8(0, 2);              // color palette count (0 = full color)
  dir.writeUInt8(0, 3);              // reserved
  dir.writeUInt16LE(1, 4);           // color planes
  dir.writeUInt16LE(32, 6);          // bits per pixel
  dir.writeUInt32LE(pngBuffer.length, 8);  // PNG data size
  dir.writeUInt32LE(6 + 16, 12);           // offset: header + directory

  return Buffer.concat([header, dir, pngBuffer]);
}
