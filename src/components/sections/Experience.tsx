"use client";

import React from "react";
import { MapPin, Calendar } from "lucide-react";
import { experiencesData, ExperienceEntry } from "@/data/experience";
import {
  BubbleWrapSectionHeader,
  PlasticSleeve,
  BehanceCaseHeader,
  FlowerSticker,
  HeartMascot,
} from "@/components/graphics/ScrapbookElements";

function ExperienceSleeveVisual({ entry }: { entry: ExperienceEntry }) {
  if (entry.editorialType === "network") {
    return (
      <div className="rounded-sm border-2 border-navy/20 bg-cream/90 p-4">
        <svg
          viewBox="0 0 600 180"
          className="w-full h-auto"
          role="img"
          aria-label="Applied AI workflow diagram for Inventic.ai"
        >
          <g stroke="#22307D" strokeWidth="2" strokeDasharray="4 4">
            <line x1="85" y1="90" x2="220" y2="45" />
            <line x1="85" y1="90" x2="220" y2="135" />
            <line x1="220" y1="45" x2="380" y2="45" />
            <line x1="220" y1="135" x2="380" y2="135" />
            <line x1="220" y1="45" x2="380" y2="135" />
            <line x1="380" y1="45" x2="515" y2="90" />
            <line x1="380" y1="135" x2="515" y2="90" />
          </g>
          {[
            { x: 85, y: 90, label: "REAL-WORLD BRIEF", fill: "#F5D74D" },
            { x: 220, y: 45, label: "AI PROTOTYPING", fill: "#74B9EB" },
            { x: 220, y: 135, label: "EXPERIMENTATION", fill: "#F494B5" },
            { x: 380, y: 45, label: "MODEL EVALUATION", fill: "#92D263" },
            { x: 380, y: 135, label: "ITERATIVE TUNING", fill: "#F5D74D" },
            { x: 515, y: 90, label: "APPLIED SOLUTION", fill: "#5E52C6" },
          ].map((node, i) => (
            <g key={i}>
              <rect
                x={node.x - 56}
                y={node.y - 20}
                width="112"
                height="40"
                rx="8"
                fill={node.fill}
                stroke="#22307D"
                strokeWidth="2.5"
              />
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fill={node.fill === "#5E52C6" ? "#FFFFFF" : "#22307D"}
                fontSize="9"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  }

  if (entry.editorialType === "vision") {
    return (
      <div className="rounded-sm border-2 border-navy/20 bg-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-sm border-2 border-dashed border-navy/40 bg-cream p-3">
            <span className="highlighter-strip font-mono text-[10px] font-bold">
              STAGE 01 // PREPROCESS
            </span>
            <p className="mt-2 font-display text-base font-black text-navy">
              Underwater Periscope Input
            </p>
            <p className="mt-1 font-sans text-xs text-navy/80">
              Python pipeline handling noise, turbidity &amp; contrast degradation.
            </p>
          </div>

          <div className="rounded-sm border-2 border-navy bg-y2k-sky/25 p-3">
            <span className="highlighter-strip font-mono text-[10px] font-bold">
              STAGE 02 // RESTORATION
            </span>
            <p className="mt-2 font-display text-base font-black text-navy">
              Enhancement &amp; Super-Resolution
            </p>
            <p className="mt-1 font-sans text-xs text-navy/80">
              Structured experimentation across varying underwater conditions.
            </p>
          </div>

          <div className="rounded-sm border-2 border-navy bg-marker/40 p-3">
            <span className="highlighter-strip font-mono text-[10px] font-bold">
              STAGE 03 // VALIDATION
            </span>
            <p className="mt-2 font-display text-base font-black text-navy">
              Comparative Quality Audit
            </p>
            <p className="mt-1 font-sans text-xs text-navy/80">
              Benchmarking outputs with DRDO — IRDE research team members.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (entry.editorialType === "blueprint") {
    return (
      <div className="rounded-sm border-2 border-navy/20 bg-cream p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="rounded-sm border-2 border-navy bg-white p-3">
            <span className="highlighter-strip font-mono text-[10px] font-bold">
              01 // SAP ERP WORKFLOW
            </span>
            <p className="mt-2 font-display text-base font-black text-navy">
              Bill of Materials (BOM)
            </p>
            <p className="mt-1 font-sans text-xs text-navy/80">
              Analyzed manufacturing configuration scenarios &amp; validation gaps.
            </p>
          </div>

          <div className="rounded-sm border-2 border-navy bg-y2k-mint/35 p-3">
            <span className="highlighter-strip font-mono text-[10px] font-bold">
              02 // ROOT-CAUSE RCA
            </span>
            <p className="mt-2 font-display text-base font-black text-navy">
              Decision Logic Design
            </p>
            <p className="mt-1 font-sans text-xs text-navy/80">
              Engineered rule-based checks to eliminate recurring config errors.
            </p>
          </div>

          <div className="rounded-sm border-2 border-navy bg-white p-3">
            <span className="highlighter-strip font-mono text-[10px] font-bold">
              03 // DATA CONSISTENCY
            </span>
            <p className="mt-2 font-display text-base font-black text-navy">
              Stakeholder Alignment
            </p>
            <p className="mt-1 font-sans text-xs text-navy/80">
              Translated engineering requirements into structured ERP rules.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-sm border-2 border-navy/20 bg-white p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="rounded-sm border-2 border-navy/40 bg-cream p-3">
          <span className="highlighter-strip font-mono text-[10px] font-bold">
            01 // MULTI-SOURCE DATA
          </span>
          <p className="mt-2 font-display text-base font-black text-navy">
            Cleaning &amp; Transformation
          </p>
          <p className="mt-1 font-sans text-xs text-navy/80">
            Standardized raw operational feeds for accurate reporting.
          </p>
        </div>

        <div className="rounded-sm border-2 border-navy bg-y2k-pink/30 p-3">
          <span className="highlighter-strip font-mono text-[10px] font-bold">
            02 // EXPLORATORY EDA
          </span>
          <p className="mt-2 font-display text-base font-black text-navy">
            Bottleneck Investigation
          </p>
          <p className="mt-1 font-sans text-xs text-navy/80">
            Root-cause analysis of data inconsistencies &amp; delays.
          </p>
        </div>

        <div className="rounded-sm border-2 border-navy bg-marker/40 p-3">
          <span className="highlighter-strip font-mono text-[10px] font-bold">
            03 // DECISION SUPPORT
          </span>
          <p className="mt-2 font-display text-base font-black text-navy">
            Operational Analytics
          </p>
          <p className="mt-1 font-sans text-xs text-navy/80">
            Structured reporting enabling data-informed leadership decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative w-full py-12 text-navy">
      {/* Section 01 Bubble-Wrap + Cardboard Container Header */}
      <BubbleWrapSectionHeader
        cueText="let's unbox this first."
        number="01"
        packageTitle="EXPERIENCE"
        packageSubtitle="4× INTERNSHIPS // INVENTIC.AI · DRDO · GREENHECK · SAMBANDH"
        containerVariant="cardboard"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 space-y-20">
        {experiencesData.map((exp, idx) => (
          <article key={exp.id} id={`exp-${exp.id}`} className="relative">
            {/* Floating Decorative Stickers */}
            {idx % 2 === 0 ? (
              <FlowerSticker className="hidden md:block absolute -top-4 right-8 h-12 w-12 rotate-12" />
            ) : (
              <HeartMascot className="hidden md:block absolute -top-4 left-8 h-12 w-12 -rotate-12" />
            )}

            {/* Behance 3-Column Case Study Header */}
            <BehanceCaseHeader
              title={exp.organization}
              subtitle={`${exp.role} — ${exp.duration} (${exp.location})`}
              brief={exp.responsibilities.slice(0, 2).join(" ")}
              designIdea={exp.responsibilities.slice(2).join(" ")}
              toolsUsed={exp.skillsDemonstrated}
              projectType={[exp.role, `${exp.location} (${exp.duration})`]}
            />

            {/* Plastic Cellophane Sleeve Wrapping the Responsibilities & Process Board */}
            <div className="mx-auto mt-6 max-w-4xl">
              <PlasticSleeve label={`INTERNSHIP WORKFLOW & DELIVERABLES // ${exp.shortName}`}>
                <ExperienceSleeveVisual entry={exp} />

                {/* Detailed Bullet Points inside the sleeve */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 border-t-2 border-dashed border-navy/15 pt-4">
                  {exp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-sm bg-cream/70 p-2.5 text-xs sm:text-sm text-navy"
                    >
                      <span className="highlighter-strip font-mono text-[10px] font-bold">
                        0{i + 1}
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] font-bold text-navy/70">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-navy" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-navy" />
                    {exp.location}
                  </span>
                </div>
              </PlasticSleeve>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
