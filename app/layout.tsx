import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Knox & Associates | Premier Legal Counsel & Advocates · Lagos, Nigeria',
  description: 'Premier Nigerian commercial law firm headquartered in Ikoyi, Lagos. Corporate M&A (CAMA 2020), energy & petroleum (PIA 2021), and commercial litigation. Based at knox.associates.',
  openGraph: {
    title: 'Knox & Associates | Premier Legal Counsel & Advocates · Lagos, Nigeria',
    description: 'Premier Nigerian commercial law firm headquartered in Ikoyi, Lagos. Corporate M&A (CAMA 2020), energy & petroleum (PIA 2021), and commercial litigation. Based at knox.associates.',
    type: 'website',
    url: 'https://knox.associates',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Knox & Associates | Premier Legal Counsel & Advocates · Lagos, Nigeria',
    description: 'Premier Nigerian commercial law firm headquartered in Ikoyi, Lagos. Corporate M&A (CAMA 2020), energy & petroleum (PIA 2021), and commercial litigation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0d10] text-[#f4f3ef] antialiased selection:bg-[#c5a880] selection:text-[#0c0d10]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
