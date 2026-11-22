import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE } from '../lib/site';
import JsonLd from '../components/JsonLd';
import MobileActionBar from '../components/MobileActionBar';

const TITLE = `${SITE.name} | Commercial Lawyers in Lagos, Nigeria`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: TITLE, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: '/', types: { 'application/rss+xml': '/feed.xml' } },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: TITLE,
    description: SITE.description,
    url: SITE.url,
    locale: 'en_NG',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: SITE.description, images: ['/og.png'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#0b0c10', width: 'device-width', initialScale: 1 };

const sameAs = Object.values(SITE.social).filter(Boolean);

const legalService = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE.url}/#firm`,
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  telephone: SITE.phone.tel,
  email: SITE.email,
  image: `${SITE.url}/og.png`,
  areaServed: 'NG',
  ...(sameAs.length ? { sameAs } : {}),
  location: SITE.offices.map((o) => ({
    '@type': 'LegalService',
    name: `${SITE.name}, ${o.city}`,
    address: { '@type': 'PostalAddress', streetAddress: o.address, addressRegion: o.region, addressCountry: 'NG' },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* App Router: this is the root layout, so the font loads for every page. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@1,400&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={legalService} />
      </head>
      <body className="bg-[#0c0d10] pb-16 text-[#f4f3ef] antialiased selection:bg-[#c5a880] selection:text-[#0c0d10] md:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-[var(--accent-gold)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0b0c10]"
        >
          Skip to content
        </a>
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
