export function GET() {
  const base = 'https://despensa.brunocnog.com.br';
  const urls = ['/', '/planos', '/privacidade', '/termos'].map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
