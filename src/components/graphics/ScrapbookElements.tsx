"use client";

import React from "react";
import { cn } from "@/lib/animations";

/* 1. Die-cut Script Logo Sticker ("ga*" like "lm*") */
export function GaScriptSticker({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeClasses = {
    sm: "text-2xl px-3 py-1",
    md: "text-4xl px-4 py-1.5",
    lg: "text-6xl px-6 py-2",
    xl: "text-7xl sm:text-8xl px-8 py-3",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center font-script font-bold text-navy select-none die-cut-sticker",
        sizeClasses,
        className
      )}
    >
      ga<span className="text-marker-amber ml-0.5 text-2xl">★</span>
    </span>
  );
}

/* 2. 6-Armed Asterisk Mascot Sticker (Blue or Purple with cute eyes) */
export function AsteriskMascot({
  color = "#74B9EB",
  className,
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("h-20 w-20 die-cut-sticker", className)}
      aria-hidden="true"
    >
      <g stroke="#22307D" strokeWidth="3.5" strokeLinejoin="round">
        {/* 6 intersecting asterisk arms */}
        <rect
          x="46"
          y="8"
          width="28"
          height="104"
          rx="8"
          fill={color}
        />
        <rect
          x="46"
          y="8"
          width="28"
          height="104"
          rx="8"
          fill={color}
          transform="rotate(60 60 60)"
        />
        <rect
          x="46"
          y="8"
          width="28"
          height="104"
          rx="8"
          fill={color}
          transform="rotate(120 60 60)"
        />
        {/* Center cover so internal lines disappear */}
        <circle cx="60" cy="60" r="24" fill={color} stroke="none" />
      </g>
      {/* Cute Eyes & "3" mouth */}
      <ellipse cx="49" cy="58" rx="6" ry="4" fill="#FFFFFF" stroke="#22307D" strokeWidth="2.5" />
      <circle cx="49" cy="58" r="2.2" fill="#22307D" />
      <ellipse cx="71" cy="58" rx="6" ry="4" fill="#FFFFFF" stroke="#22307D" strokeWidth="2.5" />
      <circle cx="71" cy="58" r="2.2" fill="#22307D" />
      <path
        d="M 55 66 Q 57.5 70 60 66 Q 62.5 70 65 66"
        fill="none"
        stroke="#22307D"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* 3. Red Kissing Heart Mascot Sticker */
export function HeartMascot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 90"
      className={cn("h-14 w-14 die-cut-sticker", className)}
      aria-hidden="true"
    >
      <path
        d="M50 82 C50 82 12 58 12 30 C12 16 24 8 36 8 C44 8 50 14 50 20 C50 14 56 8 64 8 C76 8 88 16 88 30 C88 58 50 82 50 82 Z"
        fill="#E85342"
        stroke="#22307D"
        strokeWidth="3.5"
      />
      <ellipse cx="38" cy="36" rx="7" ry="4.5" fill="#FFFFFF" stroke="#22307D" strokeWidth="2.2" />
      <circle cx="38" cy="36" r="2.2" fill="#22307D" />
      <ellipse cx="62" cy="36" rx="7" ry="4.5" fill="#FFFFFF" stroke="#22307D" strokeWidth="2.2" />
      <circle cx="62" cy="36" r="2.2" fill="#22307D" />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill="#22307D"
        fontSize="14"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        3
      </text>
    </svg>
  );
}

/* 4. 5-Petal Retro Flower Sticker */
export function FlowerSticker({
  color = "#F5D74D",
  centerColor = "#F39237",
  className,
}: {
  color?: string;
  centerColor?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-14 w-14 die-cut-sticker", className)}
      aria-hidden="true"
    >
      <g fill={color} stroke="#22307D" strokeWidth="3.5">
        <circle cx="50" cy="24" r="16" />
        <circle cx="75" cy="42" r="16" />
        <circle cx="66" cy="72" r="16" />
        <circle cx="34" cy="72" r="16" />
        <circle cx="25" cy="42" r="16" />
      </g>
      <circle
        cx="50"
        cy="49"
        r="14"
        fill={centerColor}
        stroke="#22307D"
        strokeWidth="3.5"
      />
    </svg>
  );
}

/* 5. Top Navy Marquee / Sticker Banner */
export function TopStickerBanner() {
  return (
    <div className="relative w-full overflow-hidden border-y-2 border-navy bg-navy py-2.5 text-cream shadow-md">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[0, 1, 2].map((loop) => (
          <div key={loop} className="flex items-center gap-8">
            <span className="highlighter-strip font-sans text-xs font-extrabold tracking-wide">
              Born to build. Raised by deadlines
            </span>
            <GaScriptSticker size="sm" />
            <HeartMascot className="h-9 w-9" />
            <span className="highlighter-strip font-sans text-xs font-extrabold tracking-wide">
              An AI Engineer &amp; Builder with a heart full of caffeine
            </span>
            <AsteriskMascot color="#74B9EB" className="h-10 w-10" />
            <span className="rounded-full border-2 border-white bg-y2k-purple px-3.5 py-1 font-display text-xs font-bold tracking-wider text-white uppercase">
              GARVIT.AI ★ 2026
            </span>
            <FlowerSticker className="h-9 w-9" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* 6. Realistic Bubble-Wrap + Yellow Section Number Divider ("let's unbox this first. 01") */
export function BubbleWrapSectionHeader({
  cueText,
  number,
  packageTitle,
  packageSubtitle,
  containerVariant = "cardboard",
}: {
  cueText: string;
  number: string;
  packageTitle: string;
  packageSubtitle: string;
  containerVariant?: "cardboard" | "foil" | "cassette" | "cd" | "mailer";
}) {
  const containerStyles = {
    cardboard:
      "bg-kraft border-4 border-kraft-dark text-cream shadow-[0_14px_28px_rgba(130,82,24,0.28)] bg-cardboard-ribs",
    foil:
      "bg-gradient-to-br from-slate-200 via-white to-slate-300 border-4 border-slate-400 text-navy shadow-[0_14px_28px_rgba(34,48,125,0.18)]",
    cassette:
      "bg-cream/90 border-4 border-navy text-navy shadow-[0_14px_28px_rgba(34,48,125,0.2)]",
    cd:
      "bg-y2k-purple border-4 border-navy text-white shadow-[0_14px_28px_rgba(34,48,125,0.25)]",
    mailer:
      "bg-y2k-sky border-4 border-navy text-navy shadow-[0_14px_28px_rgba(34,48,125,0.2)]",
  }[containerVariant];

  return (
    <div className="relative my-16 w-full">
      {/* Full-width translucent Bubble-Wrap strip */}
      <div className="relative mx-auto max-w-[1360px] overflow-hidden rounded-sm border-y-2 border-white/90 bg-white/45 py-10 px-4 shadow-inner backdrop-blur-[2px]">
        {/* Bubble wrap circular texture overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-bubble-dots bg-[size:22px_22px] opacity-80"
        />
        {/* Glossy plastic reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/60"
        />

        {/* Yellow Taped Cue + Distressed Big Numeral */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="relative inline-block bg-marker px-6 py-2 shadow-md -rotate-1 border border-navy/15">
            <span className="font-sans italic text-lg sm:text-xl font-extrabold text-navy">
              {cueText}
            </span>
          </div>

          <div className="relative -mt-1 flex h-28 w-36 items-center justify-center bg-marker/85 shadow-md">
            <span className="font-display text-7xl sm:text-8xl font-black tracking-tight text-navy drop-shadow-[2px_2px_0px_#FFFFFF]">
              {number}
            </span>
          </div>
        </div>

        {/* Physical Container Package Banner */}
        <div className="relative z-10 mx-auto mt-4 max-w-3xl">
          <div
            className={cn(
              "relative rounded-md p-6 sm:p-8 text-center transition-transform hover:scale-[1.01]",
              containerStyles
            )}
          >
            {/* Scotch Tape Strips holding the container */}
            <span className="scotch-tape absolute -top-3 left-8 h-7 w-24 -rotate-6" />
            <span className="scotch-tape absolute -top-3 right-8 h-7 w-24 rotate-6" />

            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="highlighter-strip font-mono text-xs font-bold uppercase">
                {packageSubtitle}
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-wider drop-shadow-sm">
              {packageTitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 7. Clear Plastic Cellophane Sleeve Wrapper with Scotch Tape Corners */
export function PlasticSleeve({
  label,
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative pt-5", className)}>
      {/* Optional Yellow Highlighter Label taped at top center */}
      {label && (
        <div className="relative z-20 mx-auto -mb-3 w-max">
          <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold tracking-wider text-navy uppercase border border-navy/15">
            {label}
          </span>
        </div>
      )}

      {/* Clear Plastic Bag / Sleeve */}
      <div className="plastic-sleeve relative rounded-sm p-4 sm:p-6">
        {/* 4 Translucent Diagonal Scotch Tape Corners */}
        <span
          aria-hidden="true"
          className="scotch-tape pointer-events-none absolute -top-3 -left-4 z-20 h-7 w-24 -rotate-45"
        />
        <span
          aria-hidden="true"
          className="scotch-tape pointer-events-none absolute -top-3 -right-4 z-20 h-7 w-24 rotate-45"
        />
        <span
          aria-hidden="true"
          className="scotch-tape pointer-events-none absolute -bottom-3 -left-4 z-20 h-7 w-20 rotate-45"
        />
        <span
          aria-hidden="true"
          className="scotch-tape pointer-events-none absolute -bottom-3 -right-4 z-20 h-7 w-20 -rotate-45"
        />

        {/* Top Zip-lock / Cellophane Seam line */}
        <div
          aria-hidden="true"
          className="mb-3 h-1.5 w-full border-y border-navy/15 bg-white/70"
        />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

/* 8. Behance 3-Column Project Brief / Design Idea / Tools Used Header */
export function BehanceCaseHeader({
  title,
  subtitle,
  brief,
  designIdea,
  toolsUsed,
  projectType,
}: {
  title: string;
  subtitle: string;
  brief: string;
  designIdea: string;
  toolsUsed: string[];
  projectType: string[];
}) {
  return (
    <div className="mx-auto max-w-4xl text-navy">
      {/* Centered Bold Navy Title + Yellow Highlighter Subtitle */}
      <div className="text-center mb-8">
        <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-wide text-navy">
          {title}
        </h3>
        <div className="mt-2.5 inline-block">
          <span className="highlighter-strip font-sans text-xs sm:text-sm font-extrabold tracking-wider uppercase">
            {subtitle}
          </span>
        </div>
      </div>

      {/* 3-Column BRIEF | DESIGN IDEA | TOOLS USED & PROJECT TYPE Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 text-left">
        <div>
          <h4 className="font-display text-lg font-black uppercase tracking-wide text-navy mb-2">
            BRIEF
          </h4>
          <p className="font-sans text-xs sm:text-sm leading-relaxed text-navy/90">
            {brief}
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-black uppercase tracking-wide text-navy mb-2 flex items-center gap-1.5">
            <span>ENGINEERING IDEA</span>
            <span className="text-marker-amber text-base">★</span>
          </h4>
          <p className="font-sans text-xs sm:text-sm leading-relaxed text-navy/90">
            {designIdea}
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-display text-lg font-black uppercase tracking-wide text-navy mb-1.5">
              TOOLS USED
            </h4>
            <p className="font-sans text-xs sm:text-sm leading-relaxed text-navy/90 font-medium">
              {toolsUsed.join(" · ")}
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-black uppercase tracking-wide text-navy mb-1.5">
              PROJECT TYPE
            </h4>
            <div className="space-y-1 font-sans text-xs sm:text-sm text-navy/90">
              {projectType.map((pt, idx) => (
                <div key={idx}>
                  <span
                    className={
                      idx === projectType.length - 1
                        ? "highlighter-strip font-bold"
                        : ""
                    }
                  >
                    *{pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
