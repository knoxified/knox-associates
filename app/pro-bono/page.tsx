import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { HeartHandshake, Shield, Scale, Users, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pro Bono & Social Responsibility | Knox & Associates · Lagos, Nigeria',
  description: 'Our commitment to public interest law, prison decongestion in Lagos, and fundamental human rights enforcement.',
};

export default function ProBonoPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-sans-legal text-[var(--accent-gold)] tracking-widest uppercase">
              <HeartHandshake className="h-4 w-4" />
              <span>Public Interest &amp; Access to Justice</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Pro Bono Advocacy &amp; Social Responsibility
            </h1>
            <p className="font-sans-legal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
              We believe that an elite legal practice owes an indissoluble duty to the public good. Knox &amp; Associates dedicates substantial partner and associate hours annually to defending indigent litigants and strengthening the rule of law in Nigeria.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans-legal">
            
            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="font-cinzel text-lg font-bold text-white">Fundamental Rights Enforcement</h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Invoking the Fundamental Rights (Enforcement Procedure) Rules to challenge unlawful detention, police overreach, and property dispossession before the Federal and Lagos State High Courts.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="font-cinzel text-lg font-bold text-white">Lagos Correctional Decongestion</h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In partnership with the Lagos State Judiciary and the Office of the Public Defender (OPD), our litigation teams represent pre-trial detainees languishing at Ikoyi and Kirikiri Medium Security Custodial Centres.
              </p>
            </div>

            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-primary)] text-[var(--accent-gold)]">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="font-cinzel text-lg font-bold text-white">SME &amp; Female Founder Clinics</h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Providing free legal structuring, CAC registration, and intellectual property trademarking to female entrepreneurs and young Nigerian technology innovators.
              </p>
            </div>

          </div>

          <div className="mt-16 p-8 rounded-sm bg-[var(--bg-secondary)] border border-[var(--border-subtle)] font-sans-legal text-xs text-zinc-300 space-y-4">
            <h3 className="font-cinzel text-lg font-bold text-white">
              The Knox Pro Bono Mandate
            </h3>
            <p className="leading-relaxed">
              Every lawyer in our Chambers—from pupil to Senior Advocate of Nigeria—is required to dedicate a minimum of 50 billable-equivalent hours annually to pro bono matters approved by our Pro Bono Committee. All pro bono briefs receive the identical standard of rigorous research, trial preparation, and senior partner oversight as institutional commercial mandates.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-[var(--accent-gold)] font-bold hover:underline"
              >
                Submit a Public Interest Matter for Committee Review &rarr;
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
