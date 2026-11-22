'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Send } from 'lucide-react';
import { SITE, ENQUIRY_HREF, whatsappHref } from '../lib/site';

/** Sticky call / WhatsApp / enquire bar, mobile only. The dominant way Nigerian clients first reach a firm. */
export default function MobileActionBar() {
  const wa = whatsappHref();
  const cls = 'flex flex-1 items-center justify-center gap-2 py-3.5 font-sans-legal text-xs font-semibold uppercase tracking-wider';
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[var(--border-prominent)] bg-[var(--bg-secondary)]/95 backdrop-blur md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a href={`tel:${SITE.phone.tel}`} className={`${cls} text-[var(--text-primary)]`}>
        <Phone className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" /> Call
      </a>
      {wa && (
        <a href={wa} target="_blank" rel="noopener noreferrer" className={`${cls} border-l border-[var(--border-subtle)] text-[var(--text-primary)]`}>
          <MessageCircle className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" /> WhatsApp
        </a>
      )}
      <Link href={ENQUIRY_HREF} className={`${cls} bg-[var(--accent-gold)] text-[#0b0c10]`}>
        <Send className="h-4 w-4" aria-hidden="true" /> Enquire
      </Link>
    </nav>
  );
}
