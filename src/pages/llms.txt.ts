import type { APIRoute } from 'astro';
import { getPortfolioContent } from '../data/portfolio';

export const prerender = false;

export const GET: APIRoute = () => {
  const es = getPortfolioContent('es');
  const en = getPortfolioContent('en');

  const lines: string[] = [
    `# ${es.siteMetadata.brandName} — ${es.siteMetadata.roleTitle}`,
    '',
    `> ${es.siteMetadata.description}`,
    `> ${en.siteMetadata.description}`,
    '',
    `- Website (ES): https://victoralvarez.dev/`,
    `- Website (EN): https://victoralvarez.dev/en`,
    `- Contact: ${es.siteMetadata.email}`,
    `- Operating Mode: ${es.siteMetadata.location}`,
    '',
    '## Trajectory & Evolution (ES)',
    ...es.aboutData.milestones.map(
      (m) => `- **${m.stage} — ${m.title}**: ${m.description}`,
    ),
    '',
    '## Trajectory & Evolution (EN)',
    ...en.aboutData.milestones.map(
      (m) => `- **${m.stage} — ${m.title}**: ${m.description}`,
    ),
    '',
    '## Industries & Technologies',
    `- Industries: ${es.servicesSection.tags
      .filter((t) => t.group === 'industry')
      .map((t) => t.label)
      .join(', ')}`,
    `- Implementations: ${es.servicesSection.tags
      .filter((t) => t.group === 'tech')
      .map((t) => t.label)
      .join(', ')}`,
    '',
    '## Featured Projects & Architectures (ES)',
    ...es.projectsSection.items.flatMap((p) => [
      `### ${p.title} (${p.dateRange})`,
      `- URL: https://victoralvarez.dev/proyectos/${p.id}`,
      `- Role: ${p.role}`,
      `- Category: ${p.category} | Status: ${p.statusLabel}`,
      `- Description: ${p.seoDescription}`,
      `- Architecture: ${p.architectureNotes}`,
      `- Highlights: ${p.highlights.join(' | ')}`,
      `- Stack: ${p.stack.join(', ')}`,
      '',
    ]),
    '## Featured Projects & Architectures (EN)',
    ...en.projectsSection.items.flatMap((p) => [
      `### ${p.title} (${p.dateRange})`,
      `- URL: https://victoralvarez.dev/en/projects/${p.id}`,
      `- Role: ${p.role}`,
      `- Category: ${p.category} | Status: ${p.statusLabel}`,
      `- Description: ${p.seoDescription}`,
      `- Architecture: ${p.architectureNotes}`,
      `- Highlights: ${p.highlights.join(' | ')}`,
      `- Stack: ${p.stack.join(', ')}`,
      '',
    ]),
  ];

  return new Response(lines.join('\n'), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};

