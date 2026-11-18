"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink, Github } from "lucide-react";
import { ProjectEntry } from "@/data/projects";
import { ProjectIllustration } from "@/components/graphics/ProjectIllustrations";
import {
  CornerMarkers,
  TapeStrip,
} from "@/components/graphics/TechnicalAnnotations";

export function ProjectSpread({ project }: { project: ProjectEntry }) {
  const isPaper = project.theme === "paper";

  return (
    <article
      id={`project-${project.slug}`}
      className={`relative flex h-full w-full flex-col justify-between border transition-transform duration-300 ${
        isPaper
          ? "bg-paper text-ink-paper border-ink-paper/30 shadow-[12px_12px_0px_#151419]"
          : "bg-ink-charcoal text-text-light border-white/20 shadow-[12px_12px_0px_rgba(139,92,246,0.28)]"
      } p-6 sm:p-10`}
    >
      <CornerMarkers theme={project.theme} />
      <TapeStrip
        position="top-right"
        variant={isPaper ? "violet" : "translucent"}
        label={`SPREAD // ${project.index}`}
      />

      {/* Top Editorial Spread Metadata Bar */}
      <div>
        <div
          className={`mb-6 flex flex-wrap items-center justify-between gap-3 border-b pb-4 ${
            isPaper ? "border-ink-paper/15" : "border-white/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="bg-violet px-2.5 py-1 font-mono text-xs font-bold tracking-[0.2em] text-text-light">
              PROJECT {project.index}
            </span>
            <span
              className={`font-mono text-xs tracking-[0.18em] uppercase ${
                isPaper ? "text-ink-paper/80 font-semibold" : "text-violet-lilac"
              }`}
            >
              // {project.category}
            </span>
          </div>

          <span
            className={`px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase border ${
              isPaper
                ? "border-ink-paper/25 bg-paper-warm text-ink-paper"
                : "border-violet/40 bg-violet/15 text-violet-lilac"
            }`}
          >
            {project.statusBadge}
          </span>
        </div>

        {/* Main Two-Column Spread Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 6 Cols: Oversized Title, Summary, Technical Bullets & Metrics */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-[-0.03em] leading-[0.92]">
                {project.title}
              </h3>
              {project.subtitle && (
                <p
                  className={`mt-2 font-serif italic text-xl ${
                    isPaper ? "text-violet-deep" : "text-violet-lilac"
                  }`}
                >
                  {project.subtitle}
                </p>
              )}
            </div>

            <p
              className={`font-sans text-base leading-relaxed ${
                isPaper ? "text-ink-paper/90" : "text-text-light/90"
              }`}
            >
              {project.summary}
            </p>

            {/* Documented Metrics if present (e.g. Self-Pruning NN) */}
            {project.metrics && (
              <div
                className={`grid grid-cols-1 sm:grid-cols-3 gap-3 border p-3.5 ${
                  isPaper
                    ? "border-ink-paper/20 bg-paper-warm"
                    : "border-violet/40 bg-ink"
                }`}
              >
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="block font-mono text-[9px] tracking-[0.18em] text-text-muted uppercase">
                      {m.label}
                    </span>
                    <span className="mt-0.5 block font-display text-xl font-black text-violet-lilac">
                      {m.value}
                    </span>
                    <span className="block font-mono text-[9px] text-text-muted/80">
                      {m.note}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Technical Bullets */}
            <ul className="space-y-2 font-sans text-xs sm:text-sm leading-relaxed">
              {project.technicalDetails.slice(0, 4).map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-violet" />
                  <span
                    className={
                      isPaper ? "text-ink-paper/85" : "text-text-muted"
                    }
                  >
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            {/* Technology Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 font-mono text-[10px] tracking-wider uppercase ${
                    isPaper
                      ? "border border-ink-paper/20 bg-white text-ink-paper"
                      : "border border-white/15 bg-ink text-text-light"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right 6 Cols: Interactive Custom Project Graphic & Caption */}
          <div className="lg:col-span-6 space-y-3">
            <ProjectIllustration type={project.visualType} />
            <p
              className={`font-mono text-[10px] tracking-[0.14em] uppercase ${
                isPaper ? "text-ink-paper/70" : "text-text-muted"
              }`}
            >
              {project.visualDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Footer: Full Case Study Page, GitHub Repository, Live Demo */}
      <div
        className={`mt-8 flex flex-wrap items-center justify-between gap-4 border-t pt-5 ${
          isPaper ? "border-ink-paper/15" : "border-white/10"
        }`}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            data-cursor-label="CASE STUDY"
            className="inline-flex items-center gap-2 bg-violet px-5 py-2.5 font-mono text-xs font-semibold tracking-[0.18em] text-text-light uppercase transition-colors hover:bg-violet-deep"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Read Editorial Case Study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="GITHUB"
              className={`inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-xs tracking-[0.16em] uppercase transition-colors ${
                isPaper
                  ? "border-ink-paper bg-transparent text-ink-paper hover:bg-ink-paper hover:text-text-light"
                  : "border-white/25 bg-white/[0.03] text-text-light hover:border-violet hover:bg-violet/15"
              }`}
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
              data-cursor-label="DEMO"
              className={`inline-flex items-center gap-2 border px-4 py-2.5 font-mono text-xs tracking-[0.16em] uppercase transition-colors ${
                isPaper
                  ? "border-violet bg-violet/10 text-violet-deep font-semibold hover:bg-violet hover:text-text-light"
                  : "border-violet/50 bg-violet/15 text-violet-lilac hover:bg-violet hover:text-text-light"
              }`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          )}
        </div>

        <span
          className={`font-mono text-[10px] tracking-[0.2em] uppercase ${
            isPaper ? "text-ink-paper/60" : "text-text-muted"
          }`}
        >
          SPREAD {project.index} / 05
        </span>
      </div>
    </article>
  );
}
