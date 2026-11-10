# despensa-site

Landing page da Despensa: https://despensa.brunocnog.com.br

Astro 7.4.8, site estático, sem rastreadores, cookies nem scripts de terceiros.

```bash
npm install
npm run dev          # desenvolvimento
npm run build        # gera dist/ e confere que não há branco puro
npm run og           # regera og.png e favicons (ICONE=/caminho/icon.png para o apple-touch-icon)
```

- Cores: espelho de `src/theme/tokens.ts` do app (`src/styles/global.css`). Nada de branco puro (`npm run lint:colors`).
- `/privacidade` e `/termos` vêm de `src/content/*.md`, copiados de `docs/` do repositório do app (a fonte da verdade continua lá). Os `[A PREENCHER]` foram mantidos.
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`) para o GitHub Pages; domínio em `public/CNAME`.
