'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SITE, NAV, ENQUIRY_HREF } from '../lib/site';

export default function Navbar() {
  const pathname = usePathname() || '/';
  // Menu is open only for the route it was opened on, so navigating closes it without an effect.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const hq = SITE.offices[0];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');
  const linkCls = (href: string) =>
    `transition-colors hover:text-[var(--text-primary)] ${isActive(href) ? 'text-[var(--accent-gold)]' : ''}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-md">
      <div className="border-b border-[var(--border-subtle)]/50 bg-[var(--bg-secondary)]/90 px-4 py-2 text-xs text-[var(--text-muted)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="flex items-center gap-1.5 font-sans-legal tracking-wide">
            <MapPin className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
            <span className="truncate">{hq.address.split(',').slice(-2).join(',').trim()}</span>
            {SITE.offices.length > 1 && (
              <span className="hidden md:inline">
                {' · '}
                {SITE.offices.slice(1).map((o) => o.city).join(' · ')}
              </span>
            )}
          </span>
          <div className="flex items-center gap-4 text-[11px] font-sans-legal">
            <a href={`tel:${SITE.phone.tel}`} className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
              <Phone className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
              <span className="hidden sm:inline">{SITE.phone.display}</span>
              <span className="sm:hidden sr-only">Call us</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
              <Mail className="h-3 w-3 text-[var(--accent-gold)]" aria-hidden="true" />
              <span className="hidden sm:inline">{SITE.email}</span>
              <span className="sm:hidden sr-only">Email us</span>
            </a>
          </div>
        </div>
      </div>

      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-sm p-1 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--accent-gold)]">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] text-[var(--accent-gold)] transition-colors group-hover:border-[var(--accent-gold)]">
            <Scale className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <span className="block font-cinzel text-lg font-bold tracking-wider text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-gold)] sm:text-xl">
              {SITE.nameCaps}
            </span>
            <span className="hidden sm:block font-sans-legal text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
              {SITE.tagline}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 font-sans-legal text-xs font-medium uppercase tracking-wider text-[var(--text-secondary)] lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={linkCls(n.href)} aria-current={isActive(n.href) ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
          <Link
            href={ENQUIRY_HREF}
            className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-4 py-2.5 font-bold text-[#0b0c10] transition-colors hover:bg-[var(--accent-gold-light)]"
          >
            Request Consultation <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="rounded-sm border border-[var(--border-subtle)] p-2 text-[var(--text-primary)] lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col font-sans-legal text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`block border-b border-[var(--border-subtle)] py-3.5 ${isActive(n.href) ? 'text-[var(--accent-gold)]' : 'text-[var(--text-primary)]'}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={ENQUIRY_HREF}
            className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-[var(--accent-gold)] px-4 py-3.5 font-sans-legal text-xs font-bold uppercase tracking-wider text-[#0b0c10]"
          >
            Request Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      )}
    </header>
  );
}
