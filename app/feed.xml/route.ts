import { SITE } from '../../lib/site';
import { INSIGHTS } from '../../lib/data/insights';

export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = INSIGHTS.map((i) => {
    const link = `${SITE.url}/insights/${i.id}/`;
    const d = new Date(`1 ${i.date}`);
    return `<item><title>${esc(i.title)}</title><link>${link}</link><guid>${link}</guid>${
      isNaN(d.getTime()) ? '' : `<pubDate>${d.toUTCString()}</pubDate>`
    }<description>${esc(i.abstract)}</description></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${esc(SITE.name)} Insights</title><link>${SITE.url}/insights/</link><description>${esc(SITE.description)}</description><language>en-ng</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
