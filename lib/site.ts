/**
 * Single source of truth for firm details.
 * Everything marked CLIENT must be replaced with the client's real information before launch.
 * Optional blocks (stats, recognitions, memberships, testimonials) render ONLY when non-empty,
 * so nothing unverifiable is ever shown by default.
 */
export const SITE = {
  name: 'Knox & Associates', // CLIENT
  nameCaps: 'KNOX & ASSOCIATES', // CLIENT
  tagline: 'Barristers, Solicitors & Arbitrators', // CLIENT
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://knox.associates').replace(/\/$/, ''), // CLIENT (domain)
  description:
    'Nigerian commercial law firm in Ikoyi, Lagos advising on corporate and M&A, energy and petroleum, banking and finance, and commercial litigation and arbitration.', // CLIENT
  phone: { display: '+234 (1) 295-0199', tel: '+23412950199' }, // CLIENT
  whatsapp: '', // CLIENT: digits only with country code, e.g. '2348012345678'. Empty hides the WhatsApp buttons.
  email: 'info@knox.associates', // CLIENT
  careersEmail: 'info@knox.associates', // CLIENT (shown on careers page; delivery address lives in wrangler.jsonc)
  offices: [
    {
      id: 'lagos',
      city: 'Lagos',
      label: 'Head Office',
      address: 'Kingsway Tower, 11th Floor, Alfred Rewane Road, Ikoyi, Lagos', // CLIENT
      region: 'Lagos State',
      mapQuery: 'Kingsway Tower, Alfred Rewane Road, Ikoyi, Lagos',
    },
    {
      id: 'abuja',
      city: 'Abuja',
      label: 'Regional Office',
      address: 'Plot 1083, Central Business District, Abuja', // CLIENT
      region: 'Federal Capital Territory',
      mapQuery: 'Central Business District, Abuja',
    },
  ],
  social: {
    linkedin: '', // CLIENT: full URL. Empty hides the icon.
    instagram: '',
    x: '',
    facebook: '',
  },
  hours: 'Mon–Fri, 8:00am–6:00pm WAT', // CLIENT

  // ---- Optional trust blocks: leave empty until the client can substantiate each item ----
  stats: [] as { value: string; label: string; note?: string }[],
  recognitions: [] as { name: string; detail?: string; url?: string }[], // e.g. { name: 'Chambers Global 2026', detail: 'Band 2, Corporate/M&A' }
  memberships: [] as { name: string; url?: string }[], // e.g. { name: 'Nigerian Bar Association' }
  testimonials: [] as { quote: string; attribution: string }[],
} as const;

export const NAV = [
  { href: '/about', label: 'About' },
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/attorneys', label: 'Our Team' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
] as const;

export const ENQUIRY_HREF = '/contact/#enquiry';

export const whatsappHref = (text = 'Hello, I would like to make an enquiry.') =>
  SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}` : '';

/** Standard Nigerian-bar-friendly disclaimer shown beside every form. */
export const FORM_DISCLAIMER =
  'Submitting this form does not create a lawyer–client relationship. Please do not send confidential or time-critical information until we have confirmed that we can act for you.';
