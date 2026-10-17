'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Menu, X, Scale, MapPin, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenIntake?: () => void;
}

export default function Navbar({ onOpenIntake }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/95 backdrop-blur-md transition-colors duration-300">
      {/* Top Advisory Banner - Stately Nigerian Chambers Presence */}
      <div className="border-b border-[var(--border-subtle)]/50 bg-[var(--bg-secondary)]/90 px-4 py-2 text-xs text-[var(--text-muted)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c5a880]"></span>
            <span className="font-sans-legal tracking-wide flex items-center gap-1.5">
              <MapPin className="h-3 w-3 text-[var(--accent-gold)]" />
              <span>Headquarters: <strong className="text-[var(--text-primary)] font-medium">Kingsway Tower, Ikoyi, Lagos</strong></span>
            </span>
            <span className="hidden md:inline text-zinc-600" aria-hidden="true">·</span>
            <span className="hidden md:inline">Abuja (FCT) · Port Harcourt · London Desk</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-sans-legal">
            <a
              href="tel:+23412950199"
              className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
            >
              <Phone className="h-3 w-3 text-[var(--accent-gold)]" />
              <span className="hidden sm:inline">+234 (1) 295-0199</span>
            </a>
            <span aria-hidden="true" className="text-zinc-700 hidden sm:inline">|</span>
            <a
              href="mailto:info@knox.associates"
              className="flex items-center gap-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
            >
              <Mail className="h-3 w-3 text-[var(--accent-gold)]" />
              <span className="hidden sm:inline">info@knox.associates</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[var(--accent-gold)] rounded-sm p-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] text-[var(--accent-gold)] group-hover:border-[var(--accent-gold)] transition-colors shadow-sm">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <span className="block font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
              KNOX &amp; ASSOCIATES
            </span>
            <span className="block font-sans-legal text-[10px] tracking-widest uppercase text-[var(--text-muted)]">
              Barristers, Solicitors &amp; Arbitrators · Lagos, Nigeria
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 font-sans-legal text-sm text-[var(--text-secondary)]">
          <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">
            About Chambers
          </Link>
          <Link href="/practice-areas" className="hover:text-[var(--text-primary)] transition-colors">
            Practice Disciplines
          </Link>
          <Link href="/attorneys" className="hover:text-[var(--text-primary)] transition-colors">
            Partners &amp; SANs
          </Link>
          <Link href="/conflict-check" className="hover:text-[var(--text-primary)] transition-colors">
            Conflict Screening
          </Link>
          <Link href="/fees" className="hover:text-[var(--text-primary)] transition-colors">
            Scale of Fees
          </Link>
          <Link href="/briefs" className="hover:text-[var(--text-primary)] transition-colors">
            Legal Briefs
          </Link>
          <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">
            Offices &amp; Contact
          </Link>
        </div>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/conflict-check"
            className="flex items-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)]/10 px-4 py-2 font-sans-legal text-xs sm:text-sm font-semibold tracking-wide text-[var(--accent-gold)] hover:bg-[var(--accent-gold)] hover:text-[#0b0c10] transition-all duration-200 cursor-pointer shadow-sm"
          >
            <Shield className="h-4 w-4" />
            <span>Confidential Intake</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-sm border border-[var(--border-subtle)] p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-6 font-sans-legal text-sm">
          <div className="flex flex-col gap-4">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              About Chambers
            </Link>
            <Link
              href="/practice-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Practice Disciplines (CAMA &amp; PIA)
            </Link>
            <Link
              href="/attorneys"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Partners &amp; Senior Advocates of Nigeria (SAN)
            </Link>
            <Link
              href="/conflict-check"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Conflict Clearance Portal (RPC 2023)
            </Link>
            <Link
              href="/fees"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Scale of Fees &amp; Retainer Calculator
            </Link>
            <Link
              href="/briefs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Nigerian Law Briefs &amp; Statutory Commentary
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Pupillage &amp; Careers
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              Offices &amp; Contact
            </Link>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <Link
                href="/conflict-check"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-4 py-2.5 font-sans-legal text-xs font-semibold text-[#0b0c10]"
              >
                <Shield className="h-4 w-4" />
                <span>Begin Confidential Lagos Intake</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
