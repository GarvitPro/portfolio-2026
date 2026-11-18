"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectIllustration } from "@/components/graphics/ProjectIllustrations";
import {
  BubbleWrapSectionHeader,
  PlasticSleeve,
  BehanceCaseHeader,
  AsteriskMascot,
  FlowerSticker,
  HeartMascot,
} from "@/components/graphics/ScrapbookElements";

export function SelectedWork() {
  const aiProjects = projectsData.filter((p) =>
    ["self-pruning-neural-network", "credit-card-fraud-detection", "deepsafe"].includes(
      p.slug
    )
  );
  const fullStackProjects = projectsData.filter((p) =>
    ["atomquest", "fitness-lifestyle-impact-analyzer"].includes(p.slug)
  );

  return (
    <section id="work" className="relative w-full py-12 text-navy">
      {/* SECTION 02: AI & MACHINE LEARNING RESEARCH (Silver Foil Package) */}
      <BubbleWrapSectionHeader
        cueText="let's open the next one."
        number="02"
        packageTitle="AI & DEEP LEARNING"
        packageSubtitle="PYTORCH · COMPUTER VISION · IMBALANCE-AWARE ML"
        containerVariant="foil"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 space-y-24">
        {aiProjects.map((project, idx) => (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className="relative"
          >
            {idx === 0 && (
              <AsteriskMascot
                color="#74B9EB"
                className="hidden md:block absolute -top-6 left-4 h-16 w-16 -rotate-12"
              />
            )}
            {idx === 1 && (
              <FlowerSticker className="hidden md:block absolute -top-6 right-6 h-14 w-14 rotate-12" />
            )}
            {idx === 2 && (
              <HeartMascot className="hidden md:block absolute -top-6 left-6 h-14 w-14 -rotate-6" />
            )}

            {/* Exact Behance 3-Column Project Header: BRIEF | ENGINEERING IDEA | TOOLS USED & PROJECT TYPE */}
            <BehanceCaseHeader
              title={project.title}
              subtitle={`${project.category} — ${project.subtitle || project.statusBadge}`}
              brief={project.caseStudy.problem}
              designIdea={project.caseStudy.approach}
              toolsUsed={project.technologies}
              projectType={[project.category, project.statusBadge]}
            />

            {/* Plastic Cellophane Sleeve 1: System Architecture & Visual Diagram */}
            <div className="mx-auto mt-8 max-w-4xl space-y-10">
              <PlasticSleeve label={`ARCHITECTURE & EXPERIMENT BOARD // ${project.title}`}>
                <div className="rounded-sm bg-ink p-3 text-text-light">
                  <ProjectIllustration type={project.visualType} />
                </div>

                {/* Documented Metrics Strip (e.g. Self-Pruning NN 54.19% accuracy & 33.42% sparsity) */}
                {project.metrics && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-sm border-2 border-navy bg-marker/40 p-3 text-center"
                      >
                        <span className="block font-mono text-[10px] font-bold text-navy/75 uppercase">
                          {m.label}
                        </span>
                        <span className="mt-1 block font-display text-2xl font-black text-navy">
                          {m.value}
                        </span>
                        <span className="block font-sans text-[11px] font-semibold text-navy/85">
                          {m.note}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </PlasticSleeve>

              {/* Plastic Cellophane Sleeve 2: 4-Stage Process Progression (Moodboard/Input -> Pipeline -> Evaluation -> Final) */}
              <PlasticSleeve label="PROCESS & IMPLEMENTATION STAGES">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.caseStudy.architectureSteps.map((step, sIdx) => (
                    <div
                      key={step.step}
                      className={`rounded-sm border-2 border-navy p-3.5 ${
                        sIdx % 2 === 0 ? "bg-cream" : "bg-white"
                      } shadow-[3px_3px_0px_#22307D]`}
                    >
                      <span className="highlighter-strip font-mono text-[10px] font-bold">
                        STAGE {step.step}
                      </span>
                      <h4 className="mt-2 font-display text-base font-black text-navy uppercase">
                        {step.title}
                      </h4>
                      <p className="mt-1 font-sans text-xs text-navy/85 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons Taped inside the bottom of the Sleeve */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-navy/20 pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-marker px-5 py-2 font-display text-xs sm:text-sm font-black text-navy uppercase shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-0.5"
                    >
                      <BookOpen className="h-4 w-4" />
                      Open Full Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-white px-4 py-2 font-display text-xs sm:text-sm font-black text-navy uppercase shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-0.5"
                      >
                        <Github className="h-4 w-4" />
                        GitHub Repo
                      </a>
                    )}
                  </div>

                  <span className="font-mono text-[10px] font-bold text-navy/70 uppercase">
                    {project.visualDisclaimer}
                  </span>
                </div>
              </PlasticSleeve>
            </div>
          </article>
        ))}
      </div>

      {/* SECTION 03: FULL-STACK & ENTERPRISE SOFTWARE (Clear Cassette Tape Package) */}
      <BubbleWrapSectionHeader
        cueText="Let's turn it on !"
        number="03"
        packageTitle="FULL-STACK SYSTEMS"
        packageSubtitle="NEXT.JS · TYPESCRIPT · POSTGRESQL · TABLEAU"
        containerVariant="cassette"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 space-y-24">
        {fullStackProjects.map((project) => (
          <article
            key={project.slug}
            id={`project-${project.slug}`}
            className="relative"
          >
            <BehanceCaseHeader
              title={project.title}
              subtitle={`${project.category} — ${project.subtitle || project.statusBadge}`}
              brief={project.caseStudy.problem}
              designIdea={project.caseStudy.approach}
              toolsUsed={project.technologies}
              projectType={[project.category, project.statusBadge]}
            />

            <div className="mx-auto mt-8 max-w-4xl space-y-10">
              <PlasticSleeve label={`INTERFACE & SYSTEM ARCHITECTURE // ${project.title}`}>
                <ProjectIllustration type={project.visualType} />

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {project.caseStudy.architectureSteps.map((step, sIdx) => (
                    <div
                      key={step.step}
                      className={`rounded-sm border-2 border-navy p-3.5 ${
                        sIdx % 2 === 0 ? "bg-marker/30" : "bg-white"
                      } shadow-[3px_3px_0px_#22307D]`}
                    >
                      <span className="highlighter-strip font-mono text-[10px] font-bold">
                        STAGE {step.step}
                      </span>
                      <h4 className="mt-2 font-display text-base font-black text-navy uppercase">
                        {step.title}
                      </h4>
                      <p className="mt-1 font-sans text-xs text-navy/85 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Links */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t-2 border-dashed border-navy/20 pt-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-marker px-5 py-2 font-display text-xs sm:text-sm font-black text-navy uppercase shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-0.5"
                    >
                      <BookOpen className="h-4 w-4" />
                      Open Full Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-white px-4 py-2 font-display text-xs sm:text-sm font-black text-navy uppercase shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-0.5"
                      >
                        <Github className="h-4 w-4" />
                        GitHub Repo
                      </a>
                    )}

                    {project.demoUrl && project.demoOperational && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-y2k-purple px-5 py-2 font-display text-xs sm:text-sm font-black text-white uppercase shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-0.5"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Launch Live Vercel Demo
                      </a>
                    )}
                  </div>

                  <span className="font-mono text-[10px] font-bold text-navy/70 uppercase">
                    {project.visualDisclaimer}
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
