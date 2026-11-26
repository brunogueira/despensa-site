# despensa-site

Landing page da Despensa: https://despensa.online

Astro 7.4.8, site estático, sem rastreadores, cookies nem scripts de terceiros.

```bash
npm install
npm run dev          # desenvolvimento
npm run build        # gera dist/ e confere que não há branco puro
npm run og           # regera og.png e favicons (ICONE=/caminho/icon.png para o apple-touch-icon)
```

- Capturas do app: `src/assets/telas/{ios,android}/<nome>.png` (a versão escura é `escuro-<nome>.png`); o componente `Tela` (dentro de `Phone`) gera webp otimizado. Guarde ali só as capturas que alguma página usa: o Astro copia para o build, sem otimizar, a captura que ninguém usa, e o `lint:colors` reprova o branco da barra de status. As de `public/telas/android/play` são as da ficha do Google Play.
- Cores: espelho de `src/theme/tokens.ts` do app (`src/styles/global.css`). Nada de branco puro (`npm run lint:colors`).
- `/privacidade` e `/termos` vêm de `src/content/*.md`, copiados de `docs/` do repositório do app (a fonte da verdade continua lá). Os `[A PREENCHER]` foram mantidos.
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`) para o GitHub Pages; domínio em `public/CNAME`.

