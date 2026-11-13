// Gera public/og.png (1200x630), favicon-32.png e apple-touch-icon.png a partir da arte da marca.
// Uso: npm run og  (precisa de ICONE=/caminho/icon.png para o apple-touch-icon; opcional)
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const path = readFileSync(new URL('../src/assets/glyph.svg', import.meta.url), 'utf8').match(/ d="([^"]+)"/)[1];
const bg = '#F3F1EC', soft = '#D6E4DC', primary = '#437059', text = '#22302B', text2 = '#5B5A50';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<rect width="1200" height="630" fill="${bg}"/>
<rect x="80" y="165" width="300" height="300" rx="64" fill="${soft}"/>
<g transform="translate(160 200) scale(.2)"><path d="${path}" transform="translate(-212 -140)" fill="${primary}" fill-rule="evenodd"/></g>
<text x="440" y="250" font-family="Helvetica, Arial, sans-serif" font-size="92" font-weight="700" fill="${text}">Despensa</text>
<text x="440" y="330" font-family="Helvetica, Arial, sans-serif" font-size="42" font-weight="700" fill="${primary}">Compre melhor.</text>
<text x="440" y="385" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="${text2}">Escaneie a nota, a Despensa</text>
<text x="440" y="430" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="${text2}">guarda os preços.</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);
const fav = readFileSync(new URL('../public/favicon.svg', import.meta.url));
await sharp(fav, { density: 600 }).resize(32, 32).png().toFile(new URL('../public/favicon-32.png', import.meta.url).pathname);
if (process.env.ICONE) {
  await sharp(process.env.ICONE).resize(180, 180).png().toFile(new URL('../public/apple-touch-icon.png', import.meta.url).pathname);
}
console.log('ok');
