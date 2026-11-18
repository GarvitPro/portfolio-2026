"use client";

import React from "react";
import { Mail, MapPin, Github, Linkedin, QrCode } from "lucide-react";
import { profileData } from "@/data/profile";
import { experiencesData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";
import {
  AsteriskMascot,
  HeartMascot,
} from "@/components/graphics/ScrapbookElements";

function NavyPillHeader({ title }: { title: string }) {
  return (
    <div className="mb-3 inline-block rounded-full bg-navy px-4 py-1 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-sm">
      {title}
    </div>
  );
}

const hardSkillBadges = [
  { abbr: "Py", name: "Python", bg: "bg-[#1E293B]", text: "text-[#38BDF8]", border: "border-[#38BDF8]" },
  { abbr: "Pt", name: "PyTorch", bg: "bg-[#3B130B]", text: "text-[#F97316]", border: "border-[#F97316]" },
  { abbr: "Cv", name: "OpenCV", bg: "bg-[#0F291E]", text: "text-[#4ADE80]", border: "border-[#4ADE80]" },
  { abbr: "Ts", name: "TypeScript", bg: "bg-[#0F2442]", text: "text-[#60A5FA]", border: "border-[#60A5FA]" },
  { abbr: "Nx", name: "Next.js", bg: "bg-[#18225F]", text: "text-[#FFFFFF]", border: "border-[#FFFFFF]" },
  { abbr: "Sq", name: "SQL / DB", bg: "bg-[#31102F]", text: "text-[#F472B6]", border: "border-[#F472B6]" },
];

export function About() {
  return (
    <section id="about" className="relative w-full py-20 text-navy">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Top Floating Heart Mascot */}
        <div className="mb-4 flex justify-center">
          <HeartMascot className="h-14 w-14 -rotate-6" />
        </div>

        {/* Main 4-Column Behance Y2K Phone + 3-Column CV Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN (4 Cols): Photorealistic Purple Y2K Feature Phone Framing Garvit's Real Cutout Photo */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative">
              {/* Sky Blue Asterisk Mascot peeking from the left of the phone (Exact match to Behance!) */}
              <AsteriskMascot
                color="#74B9EB"
                className="absolute -left-10 top-1/3 z-20 h-24 w-24 -rotate-12"
              />

              {/* Purple Metallic Y2K Feature Phone Body */}
              <div className="relative w-[275px] sm:w-[295px] rounded-[46px] border-4 border-navy bg-gradient-to-b from-[#7E72E8] via-[#5E52C6] to-[#42369E] p-5 shadow-[0_24px_45px_rgba(34,48,125,0.38)]">
                {/* Inner Bezel Highlight */}
                <div className="rounded-[36px] border-2 border-white/35 p-3">
                  {/* Top Earpiece Speaker Slot */}
                  <div className="mx-auto mb-3 h-3 w-2.5 rounded-full bg-navy shadow-inner" />

                  {/* Phone Screen With Die-Cut Sticker Cutout of Garvit Arora */}
                  <div className="relative aspect-[3/3.6] w-full overflow-hidden rounded-2xl border-4 border-[#362B85] bg-navy p-2 shadow-inner">
                    {/* Starry Y2K Navy Screen Wallpaper */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-graph-grid bg-[size:20px_20px] opacity-30"
                    />
                    <span className="absolute top-2 left-2 z-20 text-marker text-sm">
                      ★
                    </span>
                    <span className="absolute top-3 right-3 z-20 text-y2k-pink text-xs">
                      ✿
                    </span>
                    <span className="absolute bottom-3 left-3 z-20 text-y2k-sky text-xs">
                      ✦
                    </span>

                    {/* Garvit's Real Photo with Thick White Die-Cut Sticker Border */}
                    <div className="relative z-10 h-full w-full overflow-hidden rounded-xl border-4 border-white shadow-lg bg-navy">
                      <img
                        src="/images/garvit-portrait.jpg"
                        alt="Garvit Arora — AI Engineer and Software Developer"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Y2K Phone Navigation D-Pad & Call/End Keys */}
                  <div className="mt-5 flex items-center justify-center gap-2 px-2 pb-1">
                    {/* Left Call / Softkeys */}
                    <div className="flex flex-col gap-2">
                      <div className="flex h-7 w-10 items-center justify-center rounded-l-xl border-2 border-navy bg-[#8E84EE] shadow-sm">
                        <span className="h-1 w-4 rounded-full bg-navy" />
                      </div>
                      <div className="flex h-7 w-10 items-center justify-center rounded-l-xl border-2 border-navy bg-[#8E84EE] shadow-sm">
                        <span className="text-[10px] font-bold text-navy">✆</span>
                      </div>
                    </div>

                    {/* Center Square D-Pad Button */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-navy bg-[#9C93F5] shadow-md">
                      <div className="h-7 w-7 rounded-lg border-2 border-navy bg-[#7367D8]" />
                    </div>

                    {/* Right End / Softkeys */}
                    <div className="flex flex-col gap-2">
                      <div className="flex h-7 w-10 items-center justify-center rounded-r-xl border-2 border-navy bg-[#8E84EE] shadow-sm">
                        <span className="h-1 w-4 rounded-full bg-navy" />
                      </div>
                      <div className="flex h-7 w-10 items-center justify-center rounded-r-xl border-2 border-navy bg-[#8E84EE] shadow-sm">
                        <span className="text-[10px] font-bold text-navy">✕</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 8 COLUMNS: 3-Column Behance CV Grid with Navy Pill Headers & Yellow Highlighter Accents */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
            {/* CV COLUMN 1: CONTACT, LANGUAGE, EDUCATION, HARD SKILLS, GITHUB QR */}
            <div className="space-y-6">
              {/* CONTACT */}
              <div>
                <NavyPillHeader title="CONTACT" />
                <ul className="space-y-2 font-sans text-xs sm:text-[13px] font-medium text-navy">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-navy" />
                    <span>{profileData.hometown}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-navy" />
                    <a
                      href={`mailto:${profileData.email}`}
                      className="highlighter-strip font-bold hover:underline"
                    >
                      {profileData.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Github className="h-3.5 w-3.5 shrink-0 text-navy" />
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                    >
                      github.com/GarvitPro
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Linkedin className="h-3.5 w-3.5 shrink-0 text-navy" />
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline font-semibold"
                    >
                      in/garvit-arora2005
                    </a>
                  </li>
                </ul>
              </div>

              {/* LANGUAGE */}
              <div>
                <NavyPillHeader title="LANGUAGE" />
                <p className="font-sans text-xs sm:text-[13px] text-navy">
                  <strong className="block font-extrabold">
                    ENGLISH &amp; HINDI:
                  </strong>
                  Professional working &amp; native proficiency
                </p>
              </div>

              {/* EDUCATION */}
              <div>
                <NavyPillHeader title="EDUCATION" />
                <div className="font-sans text-xs sm:text-[13px] text-navy space-y-1">
                  <p className="font-extrabold">{profileData.degree}</p>
                  <p>{profileData.institution}, Kattankulathur</p>
                  <p className="pt-1">
                    <span className="highlighter-strip font-extrabold">
                      CGPA: {profileData.cgpa} (Class of 2027)
                    </span>
                  </p>
                </div>
              </div>

              {/* HARD SKILLS (Square App Icons like Ai/Ps/Id in Behance) */}
              <div>
                <NavyPillHeader title="HARD SKILLS" />
                <div className="grid grid-cols-3 gap-2.5 max-w-[180px]">
                  {hardSkillBadges.map((b) => (
                    <div
                      key={b.abbr}
                      title={b.name}
                      className={`flex h-12 w-12 flex-col items-center justify-center rounded-xl border-2 ${b.bg} ${b.text} ${b.border} shadow-md`}
                    >
                      <span className="font-display text-base font-black leading-none">
                        {b.abbr}
                      </span>
                      <span className="mt-0.5 font-mono text-[7px] opacity-90">
                        {b.name.slice(0, 6)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* GitHub Badge Box (Matches "My Behance: lemihh_grafiker" QR block) */}
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2.5 rounded-md border border-navy/25 bg-white/80 p-2 shadow-sm hover:border-navy"
                >
                  <QrCode className="h-9 w-9 text-navy" />
                  <div className="font-sans text-[11px] leading-tight text-navy">
                    <span className="block text-navy/70">My GitHub:</span>
                    <strong className="font-extrabold">GarvitPro</strong>
                  </div>
                </a>
              </div>
            </div>

            {/* CV COLUMN 2: EXPERIENCE, CERTIFICATE, SOFT SKILLS */}
            <div className="space-y-6">
              {/* EXPERIENCE */}
              <div>
                <NavyPillHeader title="EXPERIENCE" />
                <div className="space-y-3.5 font-sans text-xs sm:text-[13px] text-navy">
                  {experiencesData.map((exp, idx) => (
                    <div key={exp.id} className="grid grid-cols-12 gap-2">
                      <div className="col-span-4 font-mono text-[10px] font-bold text-navy/75 leading-tight">
                        {exp.duration.replace("October ", "Oct ").replace("December ", "Dec ").replace("January ", "Jan ")}
                      </div>
                      <div className="col-span-8 leading-snug">
                        <span
                          className={
                            idx < 2 ? "highlighter-strip font-extrabold" : "font-extrabold"
                          }
                        >
                          {exp.role}
                        </span>
                        <span className="block text-navy/85 mt-0.5">
                          at {exp.shortName} ({exp.location})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CERTIFICATE */}
              <div>
                <NavyPillHeader title="CERTIFICATE" />
                <div className="space-y-3 font-sans text-xs sm:text-[13px] text-navy">
                  {certificationsData.map((cert, i) => (
                    <div key={cert.id} className="grid grid-cols-12 gap-2">
                      <div className="col-span-4 font-mono text-[10px] font-bold text-navy/75">
                        {cert.date.split(" ")[1] || "2026"}
                      </div>
                      <div className="col-span-8 leading-snug">
                        <span
                          className={
                            i === 0 || i === 3
                              ? "highlighter-strip font-bold"
                              : "font-bold"
                          }
                        >
                          {cert.title}
                        </span>
                        <span className="block text-[11px] text-navy/75">
                          Issuer: {cert.issuer} ({cert.date})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOFT SKILLS */}
              <div>
                <NavyPillHeader title="SOFT SKILLS" />
                <ul className="space-y-1 font-sans text-xs sm:text-[13px] text-navy">
                  <li>Analytical Problem-Solving</li>
                  <li>
                    <span className="highlighter-strip font-bold">
                      Systems &amp; Business Thinking
                    </span>
                  </li>
                  <li>Technical Research &amp; Experimentation</li>
                  <li>Root-Cause Gap Analysis</li>
                  <li>Cross-Functional Collaboration</li>
                  <li>Rapid Full-Stack Prototyping</li>
                </ul>
              </div>
            </div>

            {/* CV COLUMN 3: KEY HIGHLIGHTS, OBJECTIVE, INTERESTS & Purple Asterisk Mascot */}
            <div className="space-y-6 relative">
              {/* KEY HIGHLIGHTS */}
              <div>
                <NavyPillHeader title="HIGHLIGHTS" />
                <div className="space-y-3 font-sans text-xs sm:text-[13px] text-navy">
                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-3 font-mono text-[11px] font-bold">
                      2026
                    </span>
                    <div className="col-span-9">
                      <span className="highlighter-strip font-bold">
                        DRDO — IRDE Defence Research
                      </span>
                      <p className="mt-0.5 text-[11px] text-navy/85">
                        Underwater periscope image restoration &amp; super-resolution pipeline.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2">
                    <span className="col-span-3 font-mono text-[11px] font-bold">
                      2026
                    </span>
                    <div className="col-span-9">
                      <span className="highlighter-strip font-bold">
                        Self-Pruning Neural Network
                      </span>
                      <p className="mt-0.5 text-[11px] text-navy/85">
                        33.42% weight sparsity &amp; 54.19% accuracy on CIFAR-10 at λ = 1e-4.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* OBJECTIVE */}
              <div>
                <NavyPillHeader title="OBJECTIVE" />
                <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-navy/90">
                  I&apos;m{" "}
                  <span className="highlighter-strip font-bold">
                    Garvit Arora
                  </span>
                  , a Computer Science &amp; Business Systems undergraduate at
                  SRMIST. My goal is to engineer{" "}
                  <span className="highlighter-strip font-bold">
                    intelligent AI systems
                  </span>{" "}
                  and full-stack software that bridge deep technical research
                  with real-world business impact.
                </p>
              </div>

              {/* INTERESTS / HOBBY */}
              <div>
                <NavyPillHeader title="INTERESTS" />
                <ul className="space-y-1 font-sans text-xs sm:text-[13px] text-navy">
                  <li>
                    <span className="highlighter-strip font-bold">
                      Deep Learning Architectures
                    </span>
                  </li>
                  <li>Computer Vision &amp; Restoration</li>
                  <li>Enterprise ERP &amp; Decision Logic</li>
                  <li>Hackathons &amp; Product Building</li>
                  <li>Financial ML &amp; Data Journalism</li>
                  <li> Late-Night Coffee &amp; Shipping Code</li>
                </ul>
              </div>

              {/* Floating Purple Asterisk Mascot at bottom right (Exact match to Behance!) */}
              <div className="pt-2 flex justify-end">
                <AsteriskMascot color="#897EE8" className="h-16 w-16 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
