'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import type { Insight } from '../lib/data/insights';

export default function InsightsList({ items }: { items: Insight[] }) {
  const cats = useMemo(() => Array.from(new Set(items.map((i) => i.category))), [items]);
  const [cat, setCat] = useState<string>('all');
  const [q, setQ] = useState('');

  const shown = items.filter(
    (i) => (cat === 'all' || i.category === cat) && `${i.title} ${i.abstract} ${i.author}`.toLowerCase().includes(q.trim().toLowerCase())
  );
  const chip = (active: boolean) =>
    `rounded-sm border px-3 py-1.5 font-sans-legal text-[11px] font-semibold uppercase tracking-wider transition-colors ${active ? 'border-[var(--accent-gold)] bg-[var(--accent-gold)] text-[#0b0c10]' : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--accent-gold)]'}`;

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          <button type="button" className={chip(cat === 'all')} aria-pressed={cat === 'all'} onClick={() => setCat('all')}>All</button>
          {cats.map((c) => <button key={c} type="button" className={chip(cat === c)} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <label className="relative block md:w-72">
          <span className="sr-only">Search insights</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" aria-hidden="true" />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search insights" className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-2.5 pl-9 pr-3 font-sans-legal text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent-gold)] focus:outline-none" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2" aria-live="polite">
        {shown.map((i) => (
          <Link key={i.id} href={`/insights/${i.id}/`} className="group flex flex-col justify-between gap-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-7 transition-colors hover:border-[var(--accent-gold)]">
            <div className="space-y-3">
              <div className="font-sans-legal text-[11px] uppercase tracking-wider text-[var(--accent-gold)]">{i.category}</div>
              <h2 className="font-cinzel text-lg font-bold leading-snug text-white group-hover:text-[var(--accent-gold)]">{i.title}</h2>
              <p className="font-sans-legal text-xs leading-relaxed text-[var(--text-secondary)]">{i.abstract}</p>
            </div>
            <div className="font-sans-legal text-[11px] text-[var(--text-muted)]">{i.author} · {i.date} · {i.readTime}</div>
          </Link>
        ))}
        {shown.length === 0 && <p className="font-sans-legal text-sm text-[var(--text-muted)]">No insights match your search.</p>}
      </div>
    </div>
  );
}
