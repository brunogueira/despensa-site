// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://despensa.brunocnog.com.br',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
