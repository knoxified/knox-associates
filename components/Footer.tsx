'use client';

import React from 'react';
import Link from 'next/link';
import { Scale, ShieldCheck, MapPin, Phone, Mail, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onOpenIntake?: () => void;
}

export default function Footer({ onOpenIntake }: FooterProps) {
  // JSON-LD structured data for Google SEO (Nigerian Legal Entity)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Knox & Associates',
    url: 'https://knox.associates',
    description: 'Premier Nigerian law firm providing corporate M&A, petroleum & energy transactions, and commercial litigation counsel.',
    telephone: '+234-1-295-0199',
    email: 'info@knox.associates',
    priceRange: '₦₦₦₦',
    currenciesAccepted: 'NGN, USD',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Kingsway Tower, 11th Floor, Alfred Rewane Road, Ikoyi',
        addressLocality: 'Lagos',
        addressRegion: 'Lagos State',
        postalCode: '101233',
        addressCountry: 'NG'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 1083, Central Business District',
        addressLocality: 'Abuja',
        addressRegion: 'Federal Capital Territory',
        addressCountry: 'NG'
      }
    ]
  };

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-prominent)] text-[var(--text-secondary)] font-sans-legal text-xs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Global & Nigerian Chambers */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] text-[var(--accent-gold)]">
                <Scale className="h-4 w-4" />
              </div>
              <span className="font-cinzel text-base font-bold text-[var(--text-primary)]">
                KNOX &amp; ASSOCIATES
              </span>
            </Link>
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              Premier commercial law firm headquartered in Ikoyi, Lagos, advising multinational corporations, commercial banks, energy producers, and private clients across Nigeria and West Africa.
            </p>
            <div className="text-[11px] text-[var(--accent-gold)] space-y-1">
              <div>Authorized Domain: <span className="underline decoration-dotted font-mono">knox.associates</span></div>
              <div className="text-[10px] text-[var(--text-muted)] pt-1 space-y-0.5">
                <div>General: <a href="mailto:info@knox.associates" className="text-zinc-300 hover:text-[var(--accent-gold)]">info@knox.associates</a></div>
                <div>Chambers Admin: <a href="mailto:admin@knox.associates" className="text-zinc-300 hover:text-[var(--accent-gold)]">admin@knox.associates</a></div>
                <div>Client Services: <a href="mailto:customer@knox.associates" className="text-zinc-300 hover:text-[var(--accent-gold)]">customer@knox.associates</a></div>
              </div>
            </div>
          </div>

          {/* Lagos Principal Headquarters */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
              Lagos (Principal Headquarters)
            </div>
            <address className="not-italic text-[11px] text-[var(--text-muted)] space-y-1">
              <div>Kingsway Tower, 11th Floor</div>
              <div>Alfred Rewane Road, Ikoyi</div>
              <div>Lagos, Nigeria</div>
              <div>Tel: +234 (1) 295-0199 / 0800-KNOX-LAW</div>
              <div>Direct: lagos@knox.associates</div>
            </address>
          </div>

          {/* Abuja FCT Office */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
              Abuja (Federal Regulatory &amp; Supreme Court)
            </div>
            <address className="not-italic text-[11px] text-[var(--text-muted)] space-y-1">
              <div>Plot 1083, Constitution Avenue</div>
              <div>Central Business District (CBD)</div>
              <div>Abuja, FCT, Nigeria</div>
              <div>Direct: abuja@knox.associates</div>
            </address>
          </div>

          {/* Port Harcourt & London Corridors */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
              Port Harcourt &amp; London Desk
            </div>
            <address className="not-italic text-[11px] text-[var(--text-muted)] space-y-1">
              <div>Energy Hub: Trans-Amadi, Port Harcourt</div>
              <div>London Desk: 1 Chancery Lane, WC2A 1LF</div>
              <div>Arbitration &amp; Dual-Qualified Practice</div>
              <div>Direct: london@knox.associates</div>
            </address>
          </div>
        </div>

        {/* Firm Pages Navigation */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4 text-xs border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-6 text-[var(--text-muted)]">
            <Link href="/about" className="hover:text-white transition-colors">About Chambers</Link>
            <Link href="/practice-areas" className="hover:text-white transition-colors">Practice Disciplines</Link>
            <Link href="/attorneys" className="hover:text-white transition-colors">Partners &amp; SANs</Link>
            <Link href="/conflict-check" className="hover:text-white transition-colors">Conflict Screening</Link>
            <Link href="/fees" className="hover:text-white transition-colors">Scale of Fees</Link>
            <Link href="/briefs" className="hover:text-white transition-colors">Legal Briefs</Link>
            <Link href="/careers" className="hover:text-white transition-colors">Pupillage &amp; Careers</Link>
            <Link href="/pro-bono" className="hover:text-white transition-colors">Pro Bono &amp; CSR</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Offices &amp; Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <Link href="/privacy" className="hover:text-[var(--accent-gold)] transition-colors">
              Privacy Policy (NDPA 2023)
            </Link>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <Link href="/terms" className="hover:text-[var(--accent-gold)] transition-colors">
              Terms of Engagement &amp; Disclaimers
            </Link>
          </div>
        </div>

        {/* Mandatory Nigerian Bar (NBA) Disclaimers */}
        <div className="pt-8 space-y-4 text-[10px] text-[var(--text-muted)] leading-relaxed">
          <div className="font-semibold text-zinc-400 uppercase tracking-widest text-[9px]">
            Regulatory Notice: Nigerian Bar Association &amp; Rules of Professional Conduct (RPC 2023)
          </div>

          <p>
            <strong className="text-zinc-300">REGULATORY DISCLOSURE PURSUANT TO RULE 39 OF THE RPC 2023:</strong> This website is published by Knox &amp; Associates, a partnership of Barristers and Solicitors of the Supreme Court of Nigeria. In compliance with the Legal Practitioners Act (Cap L11 LFN 2004) and Rule 39 of the Rules of Professional Conduct for Legal Practitioners (RPC 2023), the factual statements of transaction volumes and representative matters are accurate, unembellished records of past briefs. Past success does not guarantee an identical result in future litigation or corporate transactions.
          </p>

          <p>
            <strong className="text-zinc-300">NO BARRISTER-CLIENT RELATIONSHIP:</strong> Transmission or receipt of electronic communications via this website or through the preliminary conflict screening tool does not establish a Barrister-Client or Solicitor-Client relationship. Privileged disclosures should not be provided until formal conflict clearance is certified and a written letter of engagement is executed by a partner in our Lagos Chambers.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-zinc-500">
            <div>
              &copy; {new Date().getFullYear()} Knox &amp; Associates. All rights reserved. Registered domain: knox.associates. Headquarters: Lagos, Nigeria.
            </div>
            <div className="flex items-center gap-4">
              <span>NBA Registered Chambers</span>
              <span>Senior Advocate of Nigeria (SAN) Led</span>
              <span>SCUML &amp; AML Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
