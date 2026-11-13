// Falha se encontrar branco puro no código-fonte, no build ou em PNG.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const alvos = ['src', 'public', 'dist'].filter(existsSync);
const re = /#fff(?![0-9a-f])|#ffffff(?![0-9a-f])|(?<![\w-])white(?![\w-])|rgba?\(\s*255\s*,\s*255\s*,\s*255\b/gi;
const textos = new Set(['.astro', '.css', '.html', '.md', '.svg', '.ts', '.mjs', '.js', '.json', '.xml', '.txt']);
let erros = 0;

function* arquivos(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) yield* arquivos(p); else yield p;
  }
}
for (const alvo of alvos) {
  for (const f of arquivos(alvo)) {
    const ext = extname(f);
    if (textos.has(ext)) {
      const m = readFileSync(f, 'utf8').match(re);
      if (m) { console.error(`Branco puro em ${f}: ${m[0]}`); erros++; }
    } else if (ext === '.png' && !/[\\/]telas[\\/]/.test(f)) {
      // Capturas reais do app (public/telas) ficam de fora: trazem a interface do iOS (barra de status, chaves), que tem branco puro e não é cor nossa.
      const { data, info } = await sharp(f).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 255 && data[i + 1] === 255 && data[i + 2] === 255 && data[i + 3] > 0) {
          console.error(`Pixel branco puro em ${f}`); erros++; break;
        }
      }
    }
  }
}
if (erros) process.exit(1);
console.log('Cores ok: nenhum branco puro.');
