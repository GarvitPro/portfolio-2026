"use client";

import React from "react";
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";
import {
  GaScriptSticker,
  AsteriskMascot,
  FlowerSticker,
  HeartMascot,
} from "@/components/graphics/ScrapbookElements";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 text-navy">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        {/* Taped Yellow "THE END" Badge (Exact match to Behance Closing Slide!) */}
        <div className="mb-10 flex justify-center">
          <div className="relative inline-block border-2 border-navy/20 bg-marker px-8 py-2.5 shadow-md">
            <span className="scotch-tape absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24" />
            <span className="font-display text-2xl sm:text-3xl font-black uppercase tracking-widest text-navy">
              THE END
            </span>
          </div>
        </div>

        {/* Open Empty Cardboard Box Holding the Huge Die-Cut "ga*" Sticker & Yellow Sticky Note */}
        <div className="relative mx-auto max-w-3xl">
          {/* Top Open Cardboard Flap */}
          <div className="mx-auto w-[86%] h-16 rounded-t-sm border-4 border-b-0 border-kraft-dark bg-kraft shadow-md bg-cardboard-ribs" />

          <div className="relative flex items-center justify-center">
            {/* Left Side Cardboard Flap */}
            <div className="hidden sm:block h-72 w-20 rounded-l-sm border-4 border-r-0 border-kraft-dark bg-kraft shadow-lg bg-cardboard-ribs -skew-y-6" />

            {/* Deep Interior of the Empty Cardboard Box */}
            <div className="relative flex-1 rounded-sm border-8 border-kraft-dark bg-[#A5753B] p-8 sm:p-14 shadow-[inset_0_20px_50px_rgba(70,40,10,0.55),0_25px_50px_rgba(130,82,24,0.38)] bg-cardboard-ribs">
              {/* Vertical Interior Box Crease Lines */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-1/3 w-0.5 bg-kraft-dark/60"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-1/3 w-0.5 bg-kraft-dark/60"
              />

              {/* Giant Die-Cut Script "ga*" Sticker + Yellow Sticky Note Taped on Top (Exact match to Behance!) */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6">
                <div className="-rotate-6 scale-125 sm:scale-150">
                  <GaScriptSticker size="xl" />
                </div>

                {/* Yellow Sticky Note Taped Directly Over the Sticker */}
                <div className="relative z-20 -mt-10 rotate-12 rounded-sm border-2 border-navy/25 bg-[#F4E38A] p-4 sm:p-5 text-center shadow-2xl max-w-xs">
                  <span className="scotch-tape absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-24 -rotate-6" />
                  <p className="font-sans text-[11px] sm:text-xs font-extrabold uppercase tracking-wide text-navy leading-snug">
                    <span className="highlighter-strip">
                      FROM A HEART FULL OF
                    </span>
                    <br />
                    <span className="highlighter-strip">
                      DEADLINES, AI AND CAFFEINE
                    </span>
                  </p>
                  <p className="mt-2 font-display text-xl sm:text-2xl font-black uppercase text-navy">
                    THANK YOU !!!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Cardboard Flap */}
            <div className="hidden sm:block h-72 w-20 rounded-r-sm border-4 border-l-0 border-kraft-dark bg-kraft shadow-lg bg-cardboard-ribs skew-y-6" />
          </div>

          {/* Bottom Open Cardboard Flap */}
          <div className="mx-auto w-[86%] h-20 rounded-b-sm border-4 border-t-0 border-kraft-dark bg-kraft shadow-xl bg-cardboard-ribs" />
        </div>

        {/* Direct Contact & Resume Download Cards Taped to the Graph Paper Below the Box */}
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative rounded-md border-3 border-navy bg-white/95 p-6 sm:p-8 shadow-[8px_8px_0px_#22307D]">
            <span className="scotch-tape absolute -top-3 left-10 h-6 w-24 -rotate-6" />
            <span className="scotch-tape absolute -top-3 right-10 h-6 w-24 rotate-6" />
            <AsteriskMascot
              color="#74B9EB"
              className="hidden md:block absolute -left-8 -bottom-8 h-20 w-20 -rotate-12"
            />
            <FlowerSticker className="hidden md:block absolute -right-6 -top-6 h-14 w-14 rotate-12" />

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <HeartMascot className="h-8 w-8" />
                <span className="highlighter-strip font-mono text-xs font-bold uppercase">
                  OPEN FOR AI &amp; SOFTWARE ENGINEERING ROLES
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-navy">
                LET&apos;S BUILD SOMETHING MEANINGFUL.
              </h2>
              <p className="mt-2 font-sans text-sm text-navy/85 max-w-xl mx-auto">
                {profileData.contactCopy.join(" ")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="group flex flex-col justify-between rounded-md border-2 border-navy bg-marker p-4 text-navy shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Mail className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="mt-3">
                  <span className="block font-mono text-[10px] font-bold uppercase">
                    SEND EMAIL
                  </span>
                  <span className="font-sans text-xs font-extrabold break-all">
                    {profileData.email}
                  </span>
                </div>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-md border-2 border-navy bg-cream p-4 text-navy shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Github className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="mt-3">
                  <span className="block font-mono text-[10px] font-bold uppercase">
                    GITHUB
                  </span>
                  <span className="font-sans text-xs font-extrabold">
                    github.com/GarvitPro
                  </span>
                </div>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-md border-2 border-navy bg-y2k-sky/35 p-4 text-navy shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <Linkedin className="h-5 w-5" />
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="mt-3">
                  <span className="block font-mono text-[10px] font-bold uppercase">
                    LINKEDIN
                  </span>
                  <span className="font-sans text-xs font-extrabold">
                    in/garvit-arora2005
                  </span>
                </div>
              </a>

              <a
                href={profileData.resumeUrl}
                download="Garvit_Arora_Resume.pdf"
                className="group flex flex-col justify-between rounded-md border-2 border-navy bg-y2k-purple p-4 text-white shadow-[3px_3px_0px_#22307D] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <FileText className="h-5 w-5 text-marker" />
                  <ArrowUpRight className="h-4 w-4 text-marker" />
                </div>
                <div className="mt-3">
                  <span className="block font-mono text-[10px] font-bold text-marker uppercase">
                    RESUME (PDF)
                  </span>
                  <span className="font-sans text-xs font-extrabold">
                    Download Official CV
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
