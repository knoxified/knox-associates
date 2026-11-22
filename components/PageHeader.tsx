import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb { label: string; href?: string }

export default function PageHeader({
  eyebrow, title, intro, crumbs,
}: { eyebrow?: string; title: string; intro?: string; crumbs?: Crumb[] }) {
  return (
    <div className="max-w-3xl space-y-4">
      {crumbs && (
        <nav aria-label="Breadcrumb" className="font-sans-legal text-[11px] text-[var(--text-muted)]">
          <ol className="flex flex-wrap items-center gap-1">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
                {c.href ? <Link href={c.href} className="hover:text-[var(--accent-gold)]">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <div className="font-sans-legal text-xs uppercase tracking-widest text-[var(--accent-gold)]">{eyebrow}</div>}
      <h1 className="font-cinzel text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">{title}</h1>
      {intro && <p className="font-sans-legal text-base font-light leading-relaxed text-[var(--text-secondary)] sm:text-lg">{intro}</p>}
    </div>
  );
}
