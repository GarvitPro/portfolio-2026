"use client";

import React from "react";
import { Award, Calendar } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import {
  BubbleWrapSectionHeader,
  PlasticSleeve,
  HeartMascot,
} from "@/components/graphics/ScrapbookElements";

export function Certifications() {
  return (
    <section id="certifications" className="relative w-full py-12 text-navy">
      <BubbleWrapSectionHeader
        cueText="Let's feel the last one <3"
        number="06"
        packageTitle="CERTIFICATIONS"
        packageSubtitle="COURSERA (GOOGLE) · SALESFORCE (TABLEAU) · SCALER · SAP"
        containerVariant="foil"
      />

      <div className="mx-auto max-w-[1150px] px-4 sm:px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <HeartMascot className="h-12 w-12 mb-2" />
          <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-navy">
            CONTINUOUSLY LEARNING
          </h3>
          <span className="highlighter-strip mt-2 font-sans text-xs sm:text-sm font-extrabold uppercase">
            VERIFIED TECHNICAL CREDENTIALS RECORDED ON RESUME
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certificationsData.map((cert, i) => (
            <PlasticSleeve
              key={cert.id}
              label={`CREDENTIAL 0${i + 1} // ${cert.issuer.toUpperCase()}`}
            >
              <div className="rounded-sm border-2 border-navy bg-cream p-5 shadow-[4px_4px_0px_#22307D]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="highlighter-strip font-mono text-[10px] font-bold uppercase">
                      {cert.domainTag}
                    </span>
                    <h4 className="mt-3 font-display text-2xl font-black uppercase text-navy">
                      {cert.title}
                    </h4>
                    <p className="mt-1 font-sans text-sm font-bold text-navy/80">
                      Issued by: <span className="underline">{cert.issuer}</span>
                    </p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-marker">
                    <Award className="h-6 w-6 text-navy" />
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-navy/15 pt-3 font-mono text-xs font-bold text-navy">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {cert.date}
                  </span>
                  {cert.statusNote && (
                    <span className="rounded-sm bg-y2k-purple px-2 py-0.5 text-[10px] text-white">
                      Mar 2026 – Mar 2027
                    </span>
                  )}
                </div>
              </div>
            </PlasticSleeve>
          ))}
        </div>
      </div>
    </section>
  );
}
