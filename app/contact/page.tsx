'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { MapPin, Phone, Mail, Clock, Shield, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { generateIntakeReference, MatterType } from '../../lib/legal-engine';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inbox: 'info@knox.associates',
    practice: 'corporate_ma',
    office: 'lagos',
    message: '',
    urgency: 'standard'
  });
  const [dossierRef, setDossierRef] = useState('');

  const handleCopy = (email: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const ref = generateIntakeReference(formData.name, formData.practice as MatterType);
    setDossierRef(ref);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase">
              <MapPin className="h-4 w-4" />
              <span>Offices &amp; Chambers Directory</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Lagos Headquarters &amp; Regional Chambers
            </h1>
            <p className="font-sans-legal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
              We welcome clients at our principal chambers in Ikoyi, Lagos, as well as our regulatory liaison office in the Federal Capital Territory, Abuja, and our energy hub in Port Harcourt.
            </p>
          </div>

          {/* Offices Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans-legal">
            
            {/* Lagos Headquarters */}
            <div className="p-6 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] space-y-4 shadow-md relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                  Principal Chambers
                </span>
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              </div>
              <h2 className="font-cinzel text-xl font-bold text-white">Lagos Headquarters</h2>
              <address className="not-italic text-xs text-zinc-300 space-y-1.5 leading-relaxed">
                <div>Kingsway Tower, 11th &amp; 12th Floors</div>
                <div>Alfred Rewane Road, Ikoyi</div>
                <div>Lagos, Nigeria</div>
                <div className="pt-2 text-[var(--text-muted)]">Postal Code: 101233</div>
              </address>
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1 text-xs">
                <div>Tel: <a href="tel:+23412950199" className="text-white hover:text-[var(--accent-gold)] font-mono">+234 (1) 295-0199</a></div>
                <div>Emergency Lit: <span className="text-[var(--accent-gold)] font-mono">+234 800-KNOX-LAW</span></div>
                <div>Direct: <a href="mailto:lagos@knox.associates" className="text-zinc-300 hover:underline">lagos@knox.associates</a></div>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] pt-1">
                Hours: Mon – Fri: 8:00 AM – 7:00 PM (Emergency docket 24/7)
              </div>
            </div>

            {/* Abuja Office */}
            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Federal Regulatory &amp; Supreme Court
              </div>
              <h2 className="font-cinzel text-xl font-bold text-white">Abuja Chambers</h2>
              <address className="not-italic text-xs text-zinc-300 space-y-1.5 leading-relaxed">
                <div>Plot 1083, Constitution Avenue</div>
                <div>Central Business District (CBD)</div>
                <div>Abuja, Federal Capital Territory, Nigeria</div>
                <div className="pt-2 text-[var(--text-muted)]">Opposite Federal High Court HQ</div>
              </address>
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1 text-xs">
                <div>Tel: <span className="text-white font-mono">+234 (9) 291-8840</span></div>
                <div>Supreme Court Clerk: <span className="text-zinc-300">docket@knox.associates</span></div>
                <div>Direct: <a href="mailto:abuja@knox.associates" className="text-zinc-300 hover:underline">abuja@knox.associates</a></div>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] pt-1">
                Hours: Mon – Fri: 8:30 AM – 6:00 PM
              </div>
            </div>

            {/* Port Harcourt & London */}
            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Energy Hub &amp; International Desk
              </div>
              <h2 className="font-cinzel text-xl font-bold text-white">Port Harcourt &amp; London</h2>
              <address className="not-italic text-xs text-zinc-300 space-y-1.5 leading-relaxed">
                <div><strong>Port Harcourt:</strong> 14 Trans-Amadi Industrial Layout, Rivers State</div>
                <div className="pt-2"><strong>London Desk:</strong> 1 Chancery Lane, WC2A 1LF, United Kingdom</div>
              </address>
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1 text-xs">
                <div>Energy Desk: <span className="text-white font-mono">energy@knox.associates</span></div>
                <div>London Direct: <span className="text-white font-mono">+44 20 7946 0920</span></div>
                <div>Arbitration: <span className="text-zinc-300">arbitration@knox.associates</span></div>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] pt-1">
                Coordinates Upstream Oil &amp; Gas and International Arbitrations
              </div>
            </div>

          </div>

          {/* Direct Chambers Inboxes Section */}
          <div className="mt-12 space-y-4 font-sans-legal">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1">
                Chambers Electronic Inboxes
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                Direct Inquiries &amp; Departmental Correspondence
              </h2>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                For prompt triage, clients and counterparties may route electronic briefs directly to the designated chambers inbox:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* General Inquiries */}
              <div className="p-6 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] space-y-3 relative group hover:border-[var(--accent-gold)] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                    General Inquiries &amp; Mandates
                  </span>
                  <Mail className="h-4 w-4 text-[var(--accent-gold)]" />
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-white">
                  info@knox.associates
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  For new client representations, cross-border corporate mandates, practice area briefings, and general legal correspondence.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="mailto:info@knox.associates"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:underline"
                  >
                    <span>Send Message</span>
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('info@knox.associates')}
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white cursor-pointer"
                  >
                    {copiedEmail === 'info@knox.associates' ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Chambers Administration */}
              <div className="p-6 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] space-y-3 relative group hover:border-[var(--accent-gold)] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                    Chambers Administration
                  </span>
                  <Shield className="h-4 w-4 text-[var(--accent-gold)]" />
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-white">
                  admin@knox.associates
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  For chambers management, vendor accounts, partner secretariats, compliance audits, and institutional administration.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="mailto:admin@knox.associates"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:underline"
                  >
                    <span>Send Message</span>
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('admin@knox.associates')}
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white cursor-pointer"
                  >
                    {copiedEmail === 'admin@knox.associates' ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Client Services & Retainers */}
              <div className="p-6 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] space-y-3 relative group hover:border-[var(--accent-gold)] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                    Client Services &amp; Accounts
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent-gold)]" />
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-white">
                  customer@knox.associates
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Dedicated desk for active corporate clients, escrow retainer statements, billing reconciliations, and document courier tracking.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="mailto:customer@knox.associates"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--accent-gold)] hover:underline"
                  >
                    <span>Send Message</span>
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('customer@knox.associates')}
                    className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white cursor-pointer"
                  >
                    {copiedEmail === 'customer@knox.associates' ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Consultation Request Form */}
          <div className="mt-16 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] p-8 sm:p-10 font-sans-legal">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)] mb-1">
                Confidential Chambers Consultation
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Request an Initial Partner Briefing
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                All communications are received directly by our Practice Management Committee in Ikoyi under strict professional confidence pursuant to Rule 14 of RPC 2023.
              </p>
            </div>

            {submitted ? (
              <div className="mt-8 p-6 rounded border border-emerald-900/50 bg-emerald-950/20 space-y-4 animate-in fade-in">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">Consultation Request Logged</h3>
                    <p className="text-xs text-emerald-300">Assigned Dossier Reference: <span className="font-mono font-bold text-white">{dossierRef}</span></p>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry has been dispatched to <strong className="text-[var(--accent-gold)] font-mono">{formData.inbox}</strong> (Practice Management Lead for <strong className="text-white">{formData.practice}</strong> at our {formData.office.toUpperCase()} Chambers). You will receive formal chambers contact within {formData.urgency === 'immediate' ? '4 hours' : '24 hours'}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[var(--accent-gold)] hover:underline"
                  >
                    &larr; Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chief Adeleke Williams"
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Organization / Entity (CAC Registered Name)
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Niger Delta Gas Infrastructure Ltd"
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Corporate Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="counsel@enterprise.ng"
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Telephone / WhatsApp Direct
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 803 000 0000"
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label htmlFor="contact-inbox" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Chambers Inbox
                    </label>
                    <select
                      id="contact-inbox"
                      value={formData.inbox}
                      onChange={(e) => setFormData({ ...formData, inbox: e.target.value })}
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white focus:border-[var(--accent-gold)] focus:outline-none"
                    >
                      <option value="info@knox.associates">info@knox.associates (General &amp; Briefs)</option>
                      <option value="admin@knox.associates">admin@knox.associates (Administration)</option>
                      <option value="customer@knox.associates">customer@knox.associates (Client Services)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-practice" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Practice Discipline
                    </label>
                    <select
                      id="contact-practice"
                      value={formData.practice}
                      onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white focus:border-[var(--accent-gold)] focus:outline-none"
                    >
                      <option value="corporate_ma">Corporate M&amp;A (CAMA 2020)</option>
                      <option value="energy_natural_resources">Energy &amp; Petroleum (PIA 2021)</option>
                      <option value="commercial_litigation">Commercial Litigation &amp; Arbitration</option>
                      <option value="private_wealth">Private Client Wealth &amp; Trusts</option>
                      <option value="regulatory_defense">White-Collar &amp; EFCC Defense</option>
                      <option value="employment_executive">National Industrial Court Disputes</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-office" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Preferred Location
                    </label>
                    <select
                      id="contact-office"
                      value={formData.office}
                      onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white focus:border-[var(--accent-gold)] focus:outline-none"
                    >
                      <option value="lagos">Lagos HQ (Ikoyi)</option>
                      <option value="abuja">Abuja (CBD / Supreme Court)</option>
                      <option value="portharcourt">Port Harcourt Energy Hub</option>
                      <option value="london">London Desk</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-urgency" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                      Matter Urgency
                    </label>
                    <select
                      id="contact-urgency"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white focus:border-[var(--accent-gold)] focus:outline-none"
                    >
                      <option value="standard">Standard (Within 24 Hours)</option>
                      <option value="immediate">Immediate Hearing / Injunction</option>
                      <option value="prospective">Prospective Strategic Planning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                    Matter Outline (High-Level Only — No Trade Secrets)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide a general summary of the dispute, commercial transaction size, or regulatory inquiry."
                    className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-[var(--accent-gold)] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-[var(--accent-gold)] shrink-0" />
                    <span>Protected by Legal Practitioner Privilege pursuant to the Nigerian Evidence Act 2011.</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[var(--accent-gold)] bg-[var(--accent-gold)] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer shadow-md"
                  >
                    <span>Transmit Confidential Request</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
