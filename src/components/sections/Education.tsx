"use client";

import React from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { profileData } from "@/data/profile";
import {
  BubbleWrapSectionHeader,
  PlasticSleeve,
  FlowerSticker,
} from "@/components/graphics/ScrapbookElements";

export function Education() {
  return (
    <section id="education" className="relative w-full py-12 text-navy">
      <BubbleWrapSectionHeader
        cueText="Let's enjoy it together"
        number="05"
        packageTitle="EDUCATION"
        packageSubtitle="SRMIST KATTANKULATHUR // B.TECH CSBS (CGPA 9.11/10)"
        containerVariant="mailer"
      />

      <div className="mx-auto max-w-[1100px] px-4 sm:px-8">
        <PlasticSleeve label="ACADEMIC FOUNDATION // CLASS OF 2027">
          <div className="relative rounded-sm border-2 border-navy bg-cream p-6 sm:p-10">
            <FlowerSticker className="hidden sm:block absolute top-4 right-4 h-14 w-14 rotate-12" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 7 Cols: University & Degree */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-1 font-display text-xs font-black text-white uppercase">
                  <GraduationCap className="h-4 w-4 text-marker" />
                  BACHELOR OF TECHNOLOGY (2023 — 2027)
                </div>

                <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-navy leading-tight">
                  {profileData.institution}
                </h3>

                <div className="inline-block">
                  <span className="highlighter-strip font-display text-base sm:text-xl font-black uppercase">
                    Computer Science and Business Systems (CSBS)
                  </span>
                </div>

                <p className="font-sans text-sm sm:text-base text-navy/90 leading-relaxed">
                  &ldquo;{profileData.educationQuote}&rdquo;
                </p>

                <div className="flex items-center gap-2 font-mono text-xs font-bold text-navy/75">
                  <MapPin className="h-4 w-4 text-navy" />
                  <span>{profileData.institutionLocation}</span>
                </div>
              </div>

              {/* Right 5 Cols: Big Sticker Stamp for 9.11 / 10 CGPA & 2027 */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <div className="flex-1 rounded-md border-3 border-navy bg-marker p-6 text-center shadow-[6px_6px_0px_#22307D] -rotate-1">
                  <div className="flex items-center justify-center gap-1.5 font-mono text-xs font-bold text-navy uppercase">
                    <Award className="h-4 w-4" />
                    <span>CUMULATIVE GPA</span>
                  </div>
                  <div className="mt-1 font-display text-5xl sm:text-6xl font-black text-navy">
                    9.11
                    <span className="text-2xl font-bold"> / 10</span>
                  </div>
                </div>

                <div className="flex-1 rounded-md border-2 border-navy bg-y2k-purple p-4 text-center text-white shadow-[4px_4px_0px_#22307D] rotate-1">
                  <span className="block font-mono text-[10px] font-bold text-marker uppercase">
                    EXPECTED GRADUATION
                  </span>
                  <span className="font-pixel text-3xl sm:text-4xl font-bold text-white">
                    CLASS OF 2027
                  </span>
                </div>
              </div>
            </div>
          </div>
        </PlasticSleeve>
      </div>
    </section>
  );
}
