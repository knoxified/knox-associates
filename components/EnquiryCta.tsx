import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ENQUIRY_HREF } from '../lib/site';

export default function EnquiryCta({ title = 'Discuss your matter with us', text = 'Tell us what you need and we will respond within one business day.' }: { title?: string; text?: string }) {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] py-14">
      <div className="mx-auto max-w-3xl space-y-4 px-4 text-center">
        <h2 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="font-sans-legal text-sm text-[var(--text-secondary)]">{text}</p>
        <Link href={ENQUIRY_HREF} className="inline-flex items-center gap-2 rounded-sm bg-[var(--accent-gold)] px-7 py-3 font-sans-legal text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)]">
          Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
