'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GraduationCap, Briefcase, Award, CheckCircle2, Send, FileText } from 'lucide-react';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('pupillage');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <GraduationCap className="h-4 w-4" />
              <span>Talent &amp; Professional Growth</span>
            </div>
            <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Pupillage &amp; Legal Associate Recruitment
            </h1>
            <p className="font-sans-legal text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light">
              We cultivate exceptional legal talent. Our chambers provide intense courtroom advocacy training, cross-border corporate transaction exposure, and direct mentorship under Senior Advocates of Nigeria (SAN).
            </p>
          </div>

          {/* Programs Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-sans-legal">
            
            {/* Pupillage Program */}
            <div className="p-6 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] space-y-4 shadow-md">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                Graduate Intake (BL Holders)
              </div>
              <h2 className="font-cinzel text-xl font-bold text-white">Knox Pupillage Program</h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                An intensive 12-month program for newly called Barristers and Solicitors of the Supreme Court of Nigeria, including eligible candidates undertaking their National Youth Service Corps (NYSC) primary assignment in Lagos.
              </p>
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Rotation through Litigation &amp; Corporate M&amp;A</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Court appearance shadowing with Senior Advocates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Direct path to Tenancy / Associate retention</span>
                </div>
              </div>
            </div>

            {/* Lateral Associate Hiring */}
            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                Experienced Counsel (3-7 Years PQE)
              </div>
              <h2 className="font-cinzel text-xl font-bold text-white">Lateral Associates</h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                We seek sharp, commercial advocates with proven experience in energy (PIA 2021), banking &amp; project finance, telecommunications regulatory, or appellate commercial litigation before the Court of Appeal and Supreme Court.
              </p>
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Lead drafting of major transaction documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Competitive remuneration on international scale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Chambers committee leadership opportunities</span>
                </div>
              </div>
            </div>

            {/* Student Internships */}
            <div className="p-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)] space-y-4 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                University Undergraduates
              </div>
              <h2 className="font-cinzel text-xl font-bold text-white">Summer Clerkships</h2>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                6-week vacation clerkships for penultimate and final year law students from leading Nigerian universities (UNILAG, UI, OAU, ABU, UNN) and foreign accredited institutions.
              </p>
              <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Legal research for active dockets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Moot court &amp; brief writing workshops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent-gold)]" />
                  <span>Priority screening for future Pupillage</span>
                </div>
              </div>
            </div>

          </div>

          {/* Application Form */}
          <div className="mt-16 rounded-sm border border-[var(--border-prominent)] bg-[var(--bg-secondary)] p-8 sm:p-10 font-sans-legal max-w-3xl">
            <h2 className="font-cinzel text-2xl font-bold text-white mb-2">
              Submit Your Candidacy
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mb-6">
              Our Recruitment Committee reviews applications on a rolling quarterly cycle. Candidates must possess a minimum of Second Class (Upper Division) at LL.B and Nigerian Law School B.L.
            </p>

            {submitted ? (
              <div className="p-6 rounded bg-emerald-950/20 border border-emerald-900/40 text-xs text-zinc-300 space-y-2">
                <div className="font-bold text-emerald-400 text-sm">Application Dossier Received</div>
                <p>Thank you for your submission to Knox &amp; Associates. Our recruitment clerk will review your credentials and contact shortlisted applicants for chambers assessment interviews.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-semibold text-[var(--text-secondary)] mb-1">Full Legal Name *</label>
                    <input type="text" required placeholder="e.g. Favour Knox" className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block uppercase font-semibold text-[var(--text-secondary)] mb-1">Email Address *</label>
                    <input type="email" required placeholder="favour@alumni.edu" className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-semibold text-[var(--text-secondary)] mb-1">Program Applied For</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none">
                      <option value="pupillage">Pupillage Program (NYSC / Newly Called BL)</option>
                      <option value="associate">Lateral Associate (Commercial Litigation)</option>
                      <option value="energy">Lateral Associate (Energy &amp; Petroleum)</option>
                      <option value="internship">Undergraduate Vacation Clerkship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block uppercase font-semibold text-[var(--text-secondary)] mb-1">University &amp; Degree Classification</label>
                    <input type="text" placeholder="e.g. UNILAG (LL.B First Class), NLS (BL 2:1)" className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block uppercase font-semibold text-[var(--text-secondary)] mb-1">Cover Note / Professional Statement</label>
                  <textarea rows={3} placeholder="Summarize your academic distinction, law review experience, or commercial practice interests." className="w-full rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3.5 py-2 text-white focus:border-[var(--accent-gold)] focus:outline-none" />
                </div>

                <div className="pt-2">
                  <button type="submit" className="rounded-sm bg-[var(--accent-gold)] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0b0c10] hover:bg-[var(--accent-gold-light)] transition-colors cursor-pointer">
                    Submit Recruitment Profile
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
