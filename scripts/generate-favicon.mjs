import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Keep the supplied emblem intact; trim only its surrounding black margin.
const source = new URL('../public/astron-logo-exact.png', import.meta.url);
const square = await sharp(fileURLToPath(source))
  .extract({ left: 24, top: 32, width: 235, height: 235 })
  .resize(64, 64)
  .png()
  .toBuffer();
await writeFile(new URL('../public/astron-favicon.png', import.meta.url), square);

// Modern browsers support PNG images inside an ICO container.
const ico = Buffer.alloc(22);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(1, 4);
ico[6] = 64;
ico[7] = 64;
ico.writeUInt16LE(1, 10);
ico.writeUInt16LE(32, 12);
ico.writeUInt32LE(square.length, 14);
ico.writeUInt32LE(22, 18);
await writeFile(new URL('../public/favicon.ico', import.meta.url), Buffer.concat([ico, square]));
await writeFile(new URL('../public/favicon.svg', import.meta.url),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><image width="64" height="64" href="data:image/png;base64,${square.toString('base64')}"/></svg>\n`);
