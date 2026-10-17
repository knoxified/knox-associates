# Implementation Plan: Decomposed Multi-Page Architecture for Knox & Associates

Transition from the single-page scroll to a **clean, lightweight multi-page architecture** that drastically reduces cognitive load for prospective clients and corporate general counsels.

---

## 1. Problem Statement & Architecture Goal

* **Current State:** The homepage contains a dense, vertical stack of features (Hero, Practice Areas, Conflict Check Wizard, Fee Estimator, Statute Calculator, Attorneys Roster, Legal Briefs, Callout Banner, and Footer), resulting in information overload.
* **Target State:** 
  1. A **serene, focused homepage** (`/`) featuring the White-Shoe brand identity, 4 core institutional metrics, concise teasers for practice disciplines and SAN leadership, and clear portal routing.
  2. **Dedicated standalone pages** for each major function and interactive tool so the user focuses on one mental task at a time.

---

## 2. Proposed Site Page Map

| Route | Page Name | Primary Content & Cognitive Focus |
|---|---|---|
| `/` | **Home** | Stately hero, core metrics (₦4.2T+ advised), high-level practice overview cards linking to `/practice-areas`, partner leadership teaser, and clean action portals. |
| `/practice-areas` | **Practice Disciplines** | Deep dive into CAMA 2020 M&A, PIA 2021 Energy, Commercial Litigation, Banking/Fintech, White-Collar Defense, and Private Wealth. |
| `/attorneys` | **Partners & SANs** | Full profiles of Chief Sterling Knox, SAN, Eleanor Vance-Knox, BL, Babajide Thorne, BL, and Dr. Amina Bello-Lindholm, FCIArb. |
| `/conflict-check` | **Conflict Screening** | Focused, standalone step-by-step Ethical Clearance tool pursuant to Rule 17 of RPC 2023 with clearance tokens. |
| `/fees` | **Scale of Fees & Retainers** | Transparent interactive retainer calculator in Nigerian Naira (₦) with cross-border USD toggle and Legal Practitioners Remuneration Order rules. |
| `/briefs` | **Nigerian Legal Briefs** | Scholarly articles and statutory commentary (FCCPA 2018, PIA 2021, AMA 2023, CAMA 2020) with category filters. |
| `/about` | **About Chambers** | 30-year heritage, Senior Advocate leadership, and institutional affiliations (already built). |
| `/contact` | **Offices & Contact** | Lagos Ikoyi Headquarters, Abuja CBD, Port Harcourt, and London Desk with direct consultation booking (already built). |
| `/careers` | **Pupillage & Careers** | 12-month pupillage for BL/NYSC lawyers and associate tracks (already built). |
| `/pro-bono` | **Pro Bono & CSR** | Fundamental human rights and Lagos prison decongestion (already built). |
| `/privacy` | **Privacy Policy** | Nigeria Data Protection Act (NDPA 2023) compliance (already built). |
| `/terms` | **Terms of Engagement** | SCUML, AML, and RPC 2023 Rule 39 disclosures (already built). |

---

## 3. Step-by-Step Execution Plan

### Step 1: Create Dedicated Standalone Pages
1. **`/app/practice-areas/page.tsx`**: Host the full interactive practice disciplines cards, statutory frameworks, and modal briefings.
2. **`/app/attorneys/page.tsx`**: Host the full credentials, clerkships, admissions, and biographies of the Senior Advocates of Nigeria and partners.
3. **`/app/conflict-check/page.tsx`**: Host the dedicated Conflict-of-Interest clearance wizard in a distraction-free, privacy-first interface.
4. **`/app/fees/page.tsx`**: Host the interactive Nigerian Naira retainer calculator and procedural limitation period estimator.
5. **`/app/briefs/page.tsx`**: Host the full legal scholarship library with search and topic categorization.

### Step 2: Refactor Homepage (`/app/page.tsx`) into a Calming Executive Overview
1. Keep the Hero with White-Shoe obsidian & gold styling.
2. Present a curated 3-column practice area teaser linking to `/practice-areas`.
3. Present a partner spotlight teaser linking to `/attorneys`.
4. Provide clean action cards: "Screen for Conflicts" (`/conflict-check`) and "Estimate Retainer" (`/fees`).
5. Include the direct partner consultation banner and regulatory footer.
6. Remove all heavy calculators and long article texts from the homepage.

### Step 3: Update Navigation (`components/Navbar.tsx` & `components/Footer.tsx`)
1. Ensure navigation links seamlessly direct users to the dedicated pages (`/practice-areas`, `/attorneys`, `/conflict-check`, `/fees`, `/briefs`, `/about`, `/contact`).
2. Verify active route styling and mobile drawer navigation.

---

## 4. Verification & Testing Plan

* **Unit Tests (`npm test`):** Ensure all pure legal logic in `lib/legal-engine.ts` passes with zero regressions.
* **Compilation (`compile_applet`):** Verify clean compilation across all 12 routes.
* **Browser Automation (`playwright-cli`):**
  - Verify homepage visual balance and low cognitive load at 1440px desktop.
  - Test navigation flow: Home -> Practice Areas -> Conflict Check -> Fees -> Contact.
  - Verify mobile responsiveness at 390x844.
