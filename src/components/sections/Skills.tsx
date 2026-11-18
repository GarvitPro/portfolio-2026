"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { skillsData, SkillItem } from "@/data/skills";
import {
  BubbleWrapSectionHeader,
  PlasticSleeve,
  AsteriskMascot,
} from "@/components/graphics/ScrapbookElements";

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(
    skillsData[1].skills[0]
  );

  return (
    <section id="skills" className="relative w-full py-12 text-navy">
      {/* Section 04 Bubble-Wrap + Blue CD Case Header */}
      <BubbleWrapSectionHeader
        cueText="Let's listen to what it says..."
        number="04"
        packageTitle="TECH UNIVERSE"
        packageSubtitle="6 SECTORS // RESUME & GITHUB PROJECT-VERIFIED SKILLS"
        containerVariant="cd"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="text-center mb-10">
          <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-navy">
            THE TOOLS BEHIND THE WORK
          </h3>
          <div className="mt-2 inline-block">
            <span className="highlighter-strip font-sans text-xs sm:text-sm font-extrabold uppercase">
              CLICK OR HOVER ANY SKILL STICKER TO SEE WHICH PROJECT OR INTERNSHIP PROVES IT ★
            </span>
          </div>
        </div>

        {/* Selected Skill Live Sticky-Note Callout */}
        <div className="mx-auto mb-10 max-w-3xl">
          <div className="relative rounded-sm border-2 border-navy bg-marker p-5 sm:p-6 shadow-[6px_6px_0px_#22307D]">
            <span className="scotch-tape absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-28" />
            <AsteriskMascot
              color="#74B9EB"
              className="hidden sm:block absolute -right-6 -bottom-6 h-16 w-16 rotate-12"
            />

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy/20 pb-2">
              <span className="font-mono text-xs font-bold uppercase text-navy">
                INSPECTING SKILL STICKER //{" "}
                <strong className="underline">{selectedSkill.name}</strong>
              </span>
              <span className="rounded-full bg-navy px-3 py-0.5 font-mono text-[10px] font-bold text-white uppercase">
                {selectedSkill.source === "both"
                  ? "RESUME + GITHUB PROJECT VERIFIED"
                  : selectedSkill.source === "project"
                  ? "GITHUB PROJECT DEMONSTRATED"
                  : "RESUME STATED"}
              </span>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="block font-mono text-[10px] font-bold text-navy/70 uppercase">
                  FEATURED PROJECT EVIDENCE:
                </span>
                {selectedSkill.linkedProjectTitle ? (
                  <div className="mt-1">
                    <p className="font-display text-base font-black text-navy">
                      ★ {selectedSkill.linkedProjectTitle}
                    </p>
                    {selectedSkill.linkedProjectSlug && (
                      <Link
                        href={`/projects/${selectedSkill.linkedProjectSlug}`}
                        className="mt-1 inline-flex items-center gap-1 font-sans text-xs font-extrabold text-y2k-purple underline"
                      >
                        Open Project Case Study
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                ) : (
                  <p className="mt-1 font-sans text-navy/80">
                    Core programming &amp; analytical foundation on official resume.
                  </p>
                )}
              </div>

              <div>
                <span className="block font-mono text-[10px] font-bold text-navy/70 uppercase">
                  INTERNSHIP / FIELD EVIDENCE:
                </span>
                <p className="mt-1 font-display text-base font-black text-navy">
                  {selectedSkill.linkedExperience ||
                    "SRMIST B.Tech CSBS Coursework & Labs"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Skill Sectors Wrapped in Tactile Plastic Binder Sleeves */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category) => (
            <PlasticSleeve
              key={category.id}
              label={`${category.index} // ${category.title}`}
            >
              <div className="flex flex-wrap gap-2.5 p-2">
                {category.skills.map((skill) => {
                  const isSelected = selectedSkill.name === skill.name;
                  const isProjectLinked =
                    skill.source === "project" || skill.source === "both";

                  return (
                    <button
                      key={`${category.id}-${skill.name}`}
                      type="button"
                      onMouseEnter={() => setSelectedSkill(skill)}
                      onFocus={() => setSelectedSkill(skill)}
                      onClick={() => setSelectedSkill(skill)}
                      className={`inline-flex items-center gap-1.5 rounded-full border-2 px-3.5 py-1.5 font-display text-xs sm:text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                        isSelected
                          ? "border-navy bg-navy text-white shadow-[3px_3px_0px_#F5D74D]"
                          : isProjectLinked
                          ? "border-navy bg-marker text-navy shadow-[2px_2px_0px_#22307D]"
                          : "border-navy/40 bg-white text-navy hover:border-navy"
                      }`}
                    >
                      <span>{skill.name}</span>
                      {isProjectLinked && (
                        <Sparkles
                          className={`h-3.5 w-3.5 ${
                            isSelected ? "text-marker" : "text-navy"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </PlasticSleeve>
          ))}
        </div>
      </div>
    </section>
  );
}
