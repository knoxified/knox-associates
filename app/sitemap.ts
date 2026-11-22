import type { MetadataRoute } from 'next';
import { SITE } from '../lib/site';
import { PRACTICES } from '../lib/data/practices';
import { ATTORNEYS } from '../lib/data/attorneys';
import { INSIGHTS } from '../lib/data/insights';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top = ['', '/about', '/practice-areas', '/attorneys', '/insights', '/careers', '/contact', '/pro-bono', '/privacy', '/terms'];
  return [
    ...top.map((p) => ({ url: `${SITE.url}${p}${p ? '/' : ''}`, lastModified: now, priority: p === '' ? 1 : 0.7 })),
    ...PRACTICES.map((p) => ({ url: `${SITE.url}/practice-areas/${p.id}/`, lastModified: now, priority: 0.8 })),
    ...ATTORNEYS.map((a) => ({ url: `${SITE.url}/attorneys/${a.id}/`, lastModified: now, priority: 0.6 })),
    ...INSIGHTS.map((i) => ({ url: `${SITE.url}/insights/${i.id}/`, lastModified: now, priority: 0.6 })),
  ];
}
