"use client";

import React from "react";
import {
  GaScriptSticker,
  HeartMascot,
  FlowerSticker,
} from "@/components/graphics/ScrapbookElements";

export function EditorialIndex() {
  return (
    <section id="index" className="relative w-full py-16 text-navy">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-8">
        {/* Overhead Open Cardboard Box Wrapper */}
        <div className="relative mx-auto max-w-5xl">
          {/* Top Open Flap with taped yellow label: "My engineering and AI assets." */}
          <div className="mx-auto w-[88%] rounded-t-md border-4 border-b-0 border-kraft-dark bg-kraft py-6 px-4 text-center shadow-md bg-cardboard-ribs relative">
            <span className="scotch-tape absolute top-2 left-1/2 -translate-x-1/2 h-5 w-32" />
            <div className="inline-block space-y-1">
              <span className="highlighter-strip inline-block font-sans text-sm sm:text-base font-extrabold">
                My engineering, AI
              </span>
              <br />
              <span className="highlighter-strip inline-block font-sans text-sm sm:text-base font-extrabold">
                and software assets.
              </span>
            </div>
            <p className="mt-2 font-mono text-[11px] font-bold text-navy/80 uppercase">
              (CLICK ANY PACKAGED ITEM INSIDE THE BOX TO UNBOX THAT SECTION ↓)
            </p>
          </div>

          {/* Left & Right Cat Paws Holding the Side Flaps Open (Exact match to Behance Slide 3!) */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 z-30 items-center"
          >
            <div className="flex h-24 w-44 items-center justify-end rounded-r-full border-4 border-navy bg-slate-300 pr-4 shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="h-3 w-4 rounded-full bg-marker border border-navy" />
                <span className="h-3 w-5 rounded-full bg-marker border border-navy" />
                <span className="h-3 w-4 rounded-full bg-marker border border-navy" />
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 z-30 items-center"
          >
            <div className="flex h-24 w-44 items-center justify-start rounded-l-full border-4 border-navy bg-slate-300 pl-4 shadow-xl">
              <div className="flex flex-col gap-2">
                <span className="h-3 w-4 rounded-full bg-marker border border-navy" />
                <span className="h-3 w-5 rounded-full bg-marker border border-navy" />
                <span className="h-3 w-4 rounded-full bg-marker border border-navy" />
              </div>
            </div>
          </div>

          {/* Interior of the Cardboard Box Holding the 6 Physical Packaged Items */}
          <div className="relative rounded-md border-8 border-kraft-dark bg-[#9A6B32] p-5 sm:p-8 shadow-[0_25px_60px_rgba(130,82,24,0.42)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
              {/* ITEM 1: Silver Foil Pouch -> INTERNSHIPS / EXPERIENCE */}
              <a
                href="#experience"
                className="group md:col-span-4 relative flex flex-col justify-between rounded-sm border-2 border-slate-400 bg-gradient-to-br from-slate-200 via-white to-slate-300 p-5 text-navy shadow-lg transition-transform hover:-translate-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="highlighter-strip inline-block font-mono text-[10px] font-bold">
                      INVENTIC.AI
                    </span>
                    <br />
                    <span className="highlighter-strip inline-block font-mono text-[10px] font-bold">
                      DRDO — IRDE
                    </span>
                    <br />
                    <span className="highlighter-strip -rotate-3 inline-block font-mono text-[10px] font-bold">
                      GREENHECK &amp; SAMBANDH
                    </span>
                  </div>
                  <div className="rounded-sm bg-y2k-sky p-1.5 border border-navy text-center">
                    <GaScriptSticker size="sm" />
                  </div>
                </div>

                <div className="my-3 flex justify-center">
                  <HeartMascot className="h-11 w-11" />
                </div>

                <div className="text-right">
                  <span className="block font-mono text-[10px] font-bold text-navy/60">
                    PACKAGE 01 // FOIL POUCH
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-navy group-hover:text-y2k-purple">
                    EXPERIENCE
                  </span>
                </div>
              </a>

              {/* ITEM 2: Blue Bubble Mailer + Audio Cassette -> AI & DEEP LEARNING + SELECTED WORK */}
              <div className="md:col-span-5 flex flex-col gap-4">
                {/* Blue Scalloped Bubble Mailer -> AI & CV PROJECTS */}
                <a
                  href="#work"
                  className="group relative flex flex-col justify-between rounded-sm border-2 border-navy bg-y2k-purple p-4 text-navy shadow-lg transition-transform hover:-translate-y-1.5"
                >
                  <div className="rounded-xl border-2 border-dashed border-navy/40 bg-cream p-4 text-center">
                    <div className="flex items-center justify-between text-[9px] font-mono font-bold text-navy/70 mb-1">
                      <span>PYTORCH · CIFAR-10</span>
                      <span>OPENCV · SMOTE</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider text-navy group-hover:text-y2k-purple">
                      AI ★ PROJECTS
                    </h3>
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      <span className="highlighter-strip font-mono text-[9px] font-bold">
                        Self-Pruning NN
                      </span>
                      <span className="highlighter-strip font-mono text-[9px] font-bold">
                        DeepSafe CV
                      </span>
                      <span className="highlighter-strip font-mono text-[9px] font-bold">
                        Fraud ML
                      </span>
                    </div>
                  </div>
                </a>

                {/* Clear Audio Cassette Tape -> FULL-STACK & ENTERPRISE WORK */}
                <a
                  href="#work"
                  className="group relative rounded-sm border-2 border-navy bg-cream/95 p-4 text-navy shadow-lg transition-transform hover:-translate-y-1.5"
                >
                  <div className="border-2 border-navy bg-white p-3">
                    <div className="flex items-center justify-between">
                      <span className="highlighter-strip -rotate-3 font-mono text-[9px] font-bold">
                        ATOMQUEST
                      </span>
                      <span className="font-display text-xl font-black uppercase text-navy">
                        FULL-STACK
                      </span>
                      <FlowerSticker className="h-7 w-7" />
                    </div>

                    {/* Cassette Tape Reels */}
                    <div className="my-2 flex items-center justify-around rounded-full border-2 border-navy bg-navy/10 py-2 px-4">
                      <span className="h-6 w-6 rounded-full border-4 border-navy bg-white" />
                      <span className="h-4 w-12 bg-navy/80" />
                      <span className="h-6 w-6 rounded-full border-4 border-navy bg-white" />
                    </div>

                    <div className="flex items-center justify-between text-[9px] font-mono font-bold text-navy">
                      <span>SIDE A // NEXT.JS + ZOD</span>
                      <span className="highlighter-strip">FITNESS ANALYZER</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* ITEM 3: Vertical Kraft Cardboard Box -> TECHNICAL SKILLS */}
              <a
                href="#skills"
                className="group md:col-span-3 relative flex flex-col items-center justify-between rounded-sm border-2 border-kraft-dark bg-kraft p-4 text-cream shadow-lg transition-transform hover:-translate-y-1.5 bg-cardboard-ribs"
              >
                <div className="w-full flex items-center justify-between">
                  <span className="highlighter-strip font-mono text-[9px] font-bold">
                    PYTORCH
                  </span>
                  <span className="h-4 w-4 rounded-full bg-white border border-navy" />
                </div>

                <div className="my-4 flex flex-col items-center">
                  <span className="font-display text-3xl sm:text-4xl font-black uppercase tracking-widest text-cream drop-shadow-[2px_2px_0px_#825218] md:[writing-mode:vertical-rl]">
                    TECH STACK
                  </span>
                </div>

                <div className="w-full flex items-center justify-between">
                  <span className="highlighter-strip font-mono text-[9px] font-bold">
                    6 SECTORS
                  </span>
                  <span className="highlighter-strip font-mono text-[9px] font-bold">
                    SAP · SQL
                  </span>
                </div>
              </a>

              {/* BOTTOM ROW INSIDE BOX: Blue CD Case (EDUCATION) + Mini Y2K Phone (ABOUT ME) + White Snack Pouch (CERTIFICATIONS) */}
              <a
                href="#education"
                className="group md:col-span-5 relative flex flex-col justify-between rounded-sm border-2 border-navy bg-navy p-4 text-cream shadow-lg transition-transform hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-marker font-bold">
                    SRMIST KTR // 2027
                  </span>
                  <span className="text-marker text-lg">★</span>
                </div>
                <div className="my-2">
                  <span className="font-display text-3xl font-black uppercase tracking-wider text-white group-hover:text-marker">
                    EDUCATION
                  </span>
                  <p className="font-mono text-xs text-y2k-sky">
                    B.Tech CSBS — CGPA 9.11/10
                  </p>
                </div>

                {/* Mini Purple Y2K Phone + ID Card resting on the CD case */}
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border-2 border-white bg-y2k-purple px-3 py-1.5 shadow-md">
                    <span className="rounded-sm bg-cream px-2 py-0.5 font-script text-xs text-navy">
                      ga★
                    </span>
                    <span className="h-4 w-4 rounded-sm border border-white/60 bg-y2k-purpleLight" />
                  </div>
                  <div className="flex-1 rounded-sm border border-navy/20 bg-white p-2 text-navy">
                    <span className="block font-display text-[10px] font-black uppercase">
                      GARVIT ARORA
                    </span>
                    <span className="block font-mono text-[8px] text-navy/70">
                      garvit286@gmail.com
                    </span>
                  </div>
                </div>
              </a>

              {/* White Foil Snack Pouch -> CERTIFICATIONS & CONTACT */}
              <a
                href="#certifications"
                className="group md:col-span-7 relative flex flex-col justify-between rounded-sm border-2 border-slate-300 bg-gradient-to-r from-white via-slate-100 to-white p-5 text-navy shadow-lg transition-transform hover:-translate-y-1.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="highlighter-strip font-mono text-[10px] font-bold">
                    GOOGLE · TABLEAU · SCALER · SAP GEN-AI
                  </span>
                  <span className="font-mono text-[10px] font-bold text-navy/60">
                    PACKAGE 06 // FOIL PACK
                  </span>
                </div>

                <div className="my-3 flex items-center justify-between">
                  <span className="font-display text-2xl sm:text-4xl font-black uppercase tracking-wider text-navy group-hover:text-y2k-purple">
                    CERTIFICATIONS ★
                  </span>
                  <GaScriptSticker size="sm" />
                </div>

                <div className="flex items-center justify-between border-t border-navy/15 pt-2 font-mono text-[10px] text-navy/75">
                  <span>4 VERIFIED CREDENTIALS</span>
                  <span className="underline font-bold">CLICK TO UNPACK →</span>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Box Flap + Peeking "ABOUT ME" Envelope & Large Die-Cut "ga*" Sticker */}
          <div className="mx-auto w-[88%] rounded-b-md border-4 border-t-0 border-kraft-dark bg-kraft py-5 px-6 shadow-md bg-cardboard-ribs relative flex items-center justify-between">
            <a
              href="#about"
              className="group -mb-10 inline-flex flex-col rounded-sm border-2 border-white bg-navy px-6 py-3 text-white shadow-xl transition-transform hover:-translate-y-1"
            >
              <span className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider text-white group-hover:text-marker">
                ABOUT ME
              </span>
              <span className="font-sans text-[11px] text-cream/85">
                My name is Garvit Arora — AI Engineer &amp; Builder ↓
              </span>
            </a>

            <div className="relative -mb-8 rotate-6">
              <span className="scotch-tape absolute -top-2 left-6 h-5 w-16 -rotate-12" />
              <GaScriptSticker size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
