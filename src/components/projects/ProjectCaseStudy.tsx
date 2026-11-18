"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { ProjectEntry } from "@/data/projects";
import { ProjectIllustration } from "@/components/graphics/ProjectIllustrations";
import {
  BehanceCaseHeader,
  PlasticSleeve,
  AsteriskMascot,
  FlowerSticker,
} from "@/components/graphics/ScrapbookElements";

export function ProjectCaseStudy({
  project,
  nextProject,
  prevProject,
}: {
  project: ProjectEntry;
  nextProject: ProjectEntry;
  prevProject: ProjectEntry;
}) {
  return (
    <div className="relative min-h-screen w-full pt-24 pb-20 text-navy">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8">
        {/* Top Back Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b-2 border-navy/15 pb-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-marker px-4 py-1.5 font-display text-xs font-black text-navy uppercase shadow-[2px_2px_0px_#22307D] hover:-translate-y-0.5 transition-transform"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Unboxing Portfolio
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy bg-white px-4 py-1.5 font-display text-xs font-black text-navy uppercase shadow-[2px_2px_0px_#22307D]"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub Repo
              </a>
            )}
            {project.demoUrl && project.demoOperational && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy bg-y2k-purple px-4 py-1.5 font-display text-xs font-black text-white uppercase shadow-[2px_2px_0px_#22307D]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Behance 3-Column Case Study Header */}
        <div className="relative">
          <AsteriskMascot
            color="#74B9EB"
            className="hidden md:block absolute -top-4 left-2 h-16 w-16 -rotate-12"
          />
          <FlowerSticker className="hidden md:block absolute -top-4 right-2 h-14 w-14 rotate-12" />

          <BehanceCaseHeader
            title={project.title}
            subtitle={`${project.category} — ${project.subtitle || project.statusBadge}`}
            brief={project.caseStudy.problem}
            designIdea={project.caseStudy.approach}
            toolsUsed={project.technologies}
            projectType={[project.category, project.statusBadge]}
          />
        </div>

        {/* Plastic Cellophane Sleeve 1: System Diagram & Documented Metrics */}
        <div className="mx-auto mt-10 max-w-4xl space-y-12">
          <PlasticSleeve label="01 // SYSTEM ARCHITECTURE & VISUAL SCHEMATIC">
            <div className="rounded-sm bg-ink p-3 text-text-light">
              <ProjectIllustration type={project.visualType} />
            </div>

            {project.metrics && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-sm border-2 border-navy bg-marker/45 p-3.5 text-center"
                  >
                    <span className="block font-mono text-[10px] font-bold text-navy/75 uppercase">
                      {m.label}
                    </span>
                    <span className="mt-1 block font-display text-3xl font-black text-navy">
                      {m.value}
                    </span>
                    <span className="block font-sans text-xs font-semibold text-navy/85">
                      {m.note}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </PlasticSleeve>

          {/* Plastic Cellophane Sleeve 2: 4-Stage Pipeline */}
          <PlasticSleeve label="02 // 4-STAGE WORKFLOW PROGRESSION">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.caseStudy.architectureSteps.map((s, idx) => (
                <div
                  key={s.step}
                  className={`rounded-sm border-2 border-navy p-4 ${
                    idx % 2 === 0 ? "bg-cream" : "bg-white"
                  } shadow-[3px_3px_0px_#22307D]`}
                >
                  <span className="highlighter-strip font-mono text-[10px] font-bold">
                    STAGE {s.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-black text-navy uppercase">
                    {s.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs text-navy/85 leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </PlasticSleeve>

          {/* Plastic Cellophane Sleeve 3: Implementation, Outcomes & Reflections */}
          <PlasticSleeve label="03 // IMPLEMENTATION, OUTCOMES & KEY LEARNINGS">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-sm border-2 border-navy bg-cream p-5">
                <span className="highlighter-strip font-display text-sm font-black uppercase">
                  IMPLEMENTATION DETAILS
                </span>
                <ul className="mt-4 space-y-2.5 font-sans text-xs sm:text-sm text-navy">
                  {project.caseStudy.implementation.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold text-y2k-purple">★</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="rounded-sm border-2 border-navy bg-white p-5">
                  <span className="highlighter-strip font-display text-sm font-black uppercase">
                    VERIFIED OUTCOMES
                  </span>
                  <ul className="mt-3 space-y-2 font-sans text-xs sm:text-sm text-navy">
                    {project.caseStudy.outcomes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-navy">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-sm border-2 border-navy bg-marker/40 p-5">
                  <span className="highlighter-strip font-display text-sm font-black uppercase">
                    REFLECTIONS &amp; NEXT STEPS
                  </span>
                  <ul className="mt-3 space-y-2 font-sans text-xs sm:text-sm text-navy">
                    {project.caseStudy.reflections.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-navy">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </PlasticSleeve>
        </div>

        {/* Next / Previous Case Study Pagination */}
        <nav className="mx-auto mt-16 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="rounded-md border-2 border-navy bg-white p-5 shadow-[4px_4px_0px_#22307D] hover:-translate-y-0.5 transition-transform"
          >
            <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-navy/70 uppercase">
              <ArrowLeft className="h-3.5 w-3.5" />
              Previous Package ({prevProject.index})
            </span>
            <p className="mt-1 font-display text-xl font-black uppercase text-navy">
              {prevProject.title}
            </p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="rounded-md border-2 border-navy bg-marker p-5 text-right shadow-[4px_4px_0px_#22307D] hover:-translate-y-0.5 transition-transform"
          >
            <span className="inline-flex items-center justify-end gap-1.5 font-mono text-xs font-bold text-navy/75 uppercase">
              Next Package ({nextProject.index})
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <p className="mt-1 font-display text-xl font-black uppercase text-navy">
              {nextProject.title}
            </p>
          </Link>
        </nav>
      </div>
    </div>
  );
}
