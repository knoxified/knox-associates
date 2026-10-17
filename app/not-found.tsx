import React from 'react';
import Link from 'next/link';
import { Scale, ArrowRight, ShieldCheck } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e8eaed] flex flex-col justify-between font-sans">
      <header className="border-b border-[#c5a880]/20 py-4 px-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#c5a880]/40 bg-[#12141a] text-[#c5a880]">
              <Scale className="h-5 w-5" />
            </div>
            <span className="font-serif text-lg font-bold tracking-wider text-white">
              KNOX &amp; ASSOCIATES
            </span>
          </Link>
          <Link
            href="/conflict-check"
            className="text-xs font-semibold uppercase tracking-wider text-[#c5a880] hover:underline"
          >
            Conflict Screening Portal
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-[#c5a880]/30 bg-[#12141a] text-[#c5a880] text-xs font-mono uppercase tracking-widest">
            Error 404 · Record Not Found
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Brief Or Docket Unavailable
          </h1>

          <p className="text-sm text-zinc-400 leading-relaxed font-light">
            The legal brief, document, or chambers page requested could not be located in our active Lagos or Federal indices. You may return to the principal homepage or navigate to a specialized practice group.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[#c5a880] bg-[#c5a880] px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[#d8bc94] transition-colors"
            >
              <span>Return to Chambers</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/practice-areas"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm border border-[#c5a880]/20 bg-[#12141a] px-6 py-3 text-xs font-semibold text-zinc-300 hover:border-[#c5a880] hover:text-[#c5a880] transition-colors"
            >
              <span>Explore Practice Areas</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#c5a880]/20 py-4 px-6 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Knox &amp; Associates. Barristers, Solicitors &amp; Arbitrators · Lagos, Nigeria.
      </footer>
    </div>
  );
}
