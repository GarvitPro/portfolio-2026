# Garvit Arora — Portfolio 2026/27

**Editorial Design × Cinematic Scrolling × AI Engineering**

An interactive, Behance-inspired editorial digital publication and engineering portfolio for **Garvit Arora** (`B.Tech in Computer Science and Business Systems` at **SRM Institute of Science and Technology, Kattankulathur**, CGPA `9.11/10`).

---

## Creative & Technical Architecture

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling & Editorial System**: Tailwind CSS with custom Near-Black Ink (`#0B0B0F`), Charcoal (`#17171D`), Graphite (`#24232D`), Violet (`#8B5CF6`), Lilac (`#B69DFF`), and Warm Magazine Paper (`#F3EEE6`) contrast spreads
- **Typography**: `Syne` (Display), `Instrument Serif` (Editorial Italic Accent), `Plus Jakarta Sans` (Body Copy), and `JetBrains Mono` (Technical Telemetry & Coordinates)
- **Cinematic Scrolling & Motion**: GSAP + GSAP ScrollTrigger + Lenis Smooth Scrolling + Custom Pointer-Fine Magnetic Cursor + Reduced-Motion Accessibility Support

---

## Chapters & Information Architecture

1. **`00 / PORTFOLIO COVER`**: Full-screen magazine issue cover (`GARVIT ARORA.`), architectural monogram collage, self-drawing violet annotation rule, and divergent scroll-out choreography.
2. **`01 / EDITORIAL INDEX`**: Warm-paper interactive table of contents (`01 — About` through `06 — Contact`) with live chapter preview telemetry.
3. **`02 / ABOUT ME`**: *"MORE THAN JUST CODE."* featuring a 4-frame scroll/tabbed thesis banner (`COMPUTER SCIENCE.` → `ARTIFICIAL INTELLIGENCE.` → `BUSINESS SYSTEMS.` → `"WHERE TECHNOLOGY MEETS BUSINESS."`) and full two-page editorial biography spread.
4. **`03 / PROFESSIONAL EXPERIENCE`**: *"THE JOURNEY SO FAR."* Scroll-illuminated vertical timeline with a recruiter quick-skim selector and custom technical diagrams across all 4 internships:
   - **Inventic.ai** — AI Engineer Intern (*Oct 2026 – Present*)
   - **DRDO — IRDE** — AI & Computer Vision Intern (*Jun 2026 – Jul 2026*)
   - **Greenheck Pvt. Ltd.** — Product & Systems Intern (*Dec 2025 – Jan 2026*)
   - **Sambandh Health Foundation** — Operations & Data Intern (*Jun 2025*)
5. **`04 / SELECTED WORK`**: *"IDEAS INTO SYSTEMS."* Desktop scroll-driven horizontal magazine exhibition (and responsive vertical stack on mobile) with direct project tab switching across 5 featured projects:
   - **01 — Self-Pruning Neural Network** (`PyTorch`, `CIFAR-10`, documented report metrics at $\lambda = 10^{-4}$: `54.19%` test accuracy, `33.42%` sparsity)
   - **02 — AtomQuest** (`Next.js`, `TypeScript`, `Tailwind CSS`, `NextAuth`, `Recharts`, `Zod`, live Vercel demo)
   - **03 — Credit Card Fraud Detection** (`Python`, `Scikit-learn`, `Random Forest`, `SMOTE`)
   - **04 — DeepSafe** (`Python`, `OpenCV`, `TensorFlow`, `Streamlit` — transparently documented as a research prototype)
   - **05 — Fitness Lifestyle Impact Analyzer** (`React`, `TypeScript`, `Node.js`, `Express`, `PostgreSQL`, `Tableau`)
6. **`05 / DEDICATED PROJECT CASE STUDIES`**: Dynamic `/projects/[slug]` magazine articles structured into `01 Overview`, `02 The Problem`, `03 The Approach`, `04 Architecture / Workflow`, `05 Implementation`, `06 Verified Outcomes`, and `07 Reflections`.
7. **`06 / TECHNICAL UNIVERSE`**: *"THE TOOLS BEHIND THE WORK."* Interactive orbital telemetry network and 6 categorized skill sectors differentiating resume-stated skills from GitHub project-demonstrated technologies (with zero arbitrary skill percentage bars).
8. **`07 / EDUCATION`**: *"THE FOUNDATION."* Warm-paper academic spread with scroll-parting `20 | 27` display typography, degree details, and `9.11/10` CGPA readout.
9. **`08 / CERTIFICATIONS`**: *"CONTINUOUSLY LEARNING."* 4 editorial credential cards (Google Data Analytics, Salesforce Tableau Desktop Foundation, Advanced SQL & DBMS, and SAP Generative AI Developer preserving its `March 2026 – March 2027` window).
10. **`09 / CONTACT`**: *"LET'S BUILD SOMETHING MEANINGFUL."* Direct channels for Email, GitHub, LinkedIn, and a privacy-sanitized Resume PDF (with phone number completely omitted).

---

## Local Development Instructions

1. **Install dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

3. **Create a production build**:
   ```bash
   npm run build
   npm start
   ```

4. **Regenerate the privacy-sanitized Resume PDF** (if you update resume details):
   ```bash
   node scripts/generate-sanitized-resume.js
   ```

---

## Vercel Deployment Instructions

1. Push this repository to your GitHub account (`https://github.com/GarvitPro`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New → Project**.
3. Import your portfolio repository.
4. Vercel automatically detects **Next.js**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install --legacy-peer-deps`
5. Click **Deploy**. Open Graph images, `sitemap.xml`, `robots.txt`, and static `/projects/[slug]` case study routes are pre-configured out of the box.
