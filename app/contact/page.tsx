import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import { SITE, whatsappHref } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${SITE.name}: offices in ${SITE.offices.map((o) => o.city).join(' and ')}, telephone, email and an online enquiry form.`,
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  const wa = whatsappHref();
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <PageHeader eyebrow="Contact" title="Get in Touch" intro="Send us a short description of your matter. We respond to enquiries within one business day." />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <section id="enquiry" aria-labelledby="enquiry-h" className="rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] p-6 sm:p-8 lg:col-span-3">
            <h2 id="enquiry-h" className="mb-6 font-cinzel text-2xl font-bold text-white">Enquiry Form</h2>
            <ContactForm kind="enquiry" />
          </section>

          <div className="space-y-8 lg:col-span-2">
            {SITE.offices.map((o) => (
              <address key={o.id} className="space-y-2 not-italic">
                <h2 className="font-cinzel text-lg font-bold text-white">{o.city} <span className="font-sans-legal text-xs font-normal text-[var(--accent-gold)]">· {o.label}</span></h2>
                <p className="flex items-start gap-2 font-sans-legal text-sm text-[var(--text-secondary)]">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-gold)]" aria-hidden="true" />{o.address}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans-legal text-xs font-semibold uppercase tracking-wider text-[var(--accent-gold)] hover:underline"
                >
                  Open in Maps <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </address>
            ))}

            <div className="space-y-3 border-t border-[var(--border-subtle)] pt-6 font-sans-legal text-sm text-[var(--text-secondary)]">
              <a href={`tel:${SITE.phone.tel}`} className="flex items-center gap-2 hover:text-[var(--accent-gold)]"><Phone className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />{SITE.phone.display}</a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-[var(--accent-gold)]"><Mail className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />{SITE.email}</a>
              {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--accent-gold)]"><MessageCircle className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />Chat on WhatsApp</a>}
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-[var(--accent-gold)]" aria-hidden="true" />{SITE.hours}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
