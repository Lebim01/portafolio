import type { APIRoute } from 'astro';
import { getPortfolioContent } from '../data/portfolio';

export const prerender = false;

export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://victoralvarez.dev')).toString().replace(/\/$/, '');
  const es = getPortfolioContent('es');

  const routePairs = [
    {
      esUrl: `${origin}/`,
      enUrl: `${origin}/en`,
      priority: '1.0',
      changefreq: 'weekly',
    },
    ...es.projectsSection.items.map((proj) => ({
      esUrl: `${origin}/proyectos/${proj.id}`,
      enUrl: `${origin}/en/projects/${proj.id}`,
      priority: proj.featured ? '0.9' : '0.8',
      changefreq: 'monthly',
    })),
  ];

  const urlEntries = routePairs.flatMap((pair) => [
    `  <url>
    <loc>${pair.esUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${pair.esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${pair.enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${pair.esUrl}" />
    <changefreq>${pair.changefreq}</changefreq>
    <priority>${pair.priority}</priority>
  </url>`,
    `  <url>
    <loc>${pair.enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${pair.esUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${pair.enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${pair.esUrl}" />
    <changefreq>${pair.changefreq}</changefreq>
    <priority>${pair.priority}</priority>
  </url>`,
  ]);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};

