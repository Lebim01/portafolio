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
    '## Executive Profile & Value Proposition',
    `- **Role**: ${es.heroData.role} (${es.heroData.eyebrow})`,
    `- **Summary (ES)**: ${es.heroData.summary}`,
    `- **Summary (EN)**: ${en.heroData.summary}`,
    `- **Core Pillars**: ${es.heroData.floatingBadges.map((b) => `${b.name} (${b.category})`).join(' | ')}`,
    `- **Website (ES)**: https://victoralvarez.dev/`,
    `- **Website (EN)**: https://victoralvarez.dev/en`,
    `- **Sitemap**: https://victoralvarez.dev/sitemap.xml`,
    `- **Contact**: ${es.siteMetadata.email}`,
    `- **Operating Mode**: ${es.siteMetadata.location}`,
    '',
    '## Trajectory & Evolution (ES)',
    `- **Lead**: ${es.aboutData.lead}`,
    ...es.aboutData.milestones.map(
      (m) => `- **${m.stage} — ${m.title}** [${m.tags}]: ${m.description}`,
    ),
    '',
    '## Trajectory & Evolution (EN)',
    `- **Lead**: ${en.aboutData.lead}`,
    ...en.aboutData.milestones.map(
      (m) => `- **${m.stage} — ${m.title}** [${m.tags}]: ${m.description}`,
    ),
    '',
    '## Speaking, Global Networking & Lifestyle',
    `- **Countries Visited (${es.aboutData.lifestyle.countries.length})**: ${es.aboutData.lifestyle.countries.map((c) => c.name).join(', ')}`,
    ...es.aboutData.lifestyle.events.map(
      (ev) => `- **${ev.name} (${ev.role})**: ${ev.detail ? `${ev.detail} — ` : ''}${ev.url}`,
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
    `## All Production Ecosystems & Architectures (${es.projectsSection.items.length} Projects — ES)`,
    ...es.projectsSection.items.flatMap((p, idx) => [
      `### ${idx + 1}. ${p.title} (${p.dateRange})${p.featured ? ' [FEATURED]' : ''}`,
      `- Case Study URL: https://victoralvarez.dev/proyectos/${p.id}`,
      ...(p.liveUrl ? [`- Live Production URL: ${p.liveUrl}`] : []),
      `- Role: ${p.role}`,
      `- Category: ${p.category} | Status: ${p.statusLabel}`,
      `- Description: ${p.seoDescription}`,
      `- Summary: ${p.summary}`,
      `- Team & Coordination: ${p.ownership.teamScope}`,
      `- Personally Designed Modules & Technical Decisions: ${p.ownership.personalModules}`,
      `- Hardest Engineering Challenge Solved: ${p.ownership.hardestChallenge}`,
      `- Product & Business Impact: ${p.ownership.productImpact}`,
      `- Architecture: ${p.architectureNotes}`,
      `- Highlights: ${p.highlights.join(' | ')}`,
      `- Stack: ${p.stack.join(', ')}`,
      '',
    ]),
    `## All Production Ecosystems & Architectures (${en.projectsSection.items.length} Projects — EN)`,
    ...en.projectsSection.items.flatMap((p, idx) => [
      `### ${idx + 1}. ${p.title} (${p.dateRange})${p.featured ? ' [FEATURED]' : ''}`,
      `- Case Study URL: https://victoralvarez.dev/en/projects/${p.id}`,
      ...(p.liveUrl ? [`- Live Production URL: ${p.liveUrl}`] : []),
      `- Role: ${p.role}`,
      `- Category: ${p.category} | Status: ${p.statusLabel}`,
      `- Description: ${p.seoDescription}`,
      `- Summary: ${p.summary}`,
      `- Team & Coordination: ${p.ownership.teamScope}`,
      `- Personally Designed Modules & Technical Decisions: ${p.ownership.personalModules}`,
      `- Hardest Engineering Challenge Solved: ${p.ownership.hardestChallenge}`,
      `- Product & Business Impact: ${p.ownership.productImpact}`,
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

