"use client";

import React from "react";
import { ArrowDown, FileText, PackageOpen } from "lucide-react";
import { profileData } from "@/data/profile";
import {
  TopStickerBanner,
  GaScriptSticker,
  AsteriskMascot,
  HeartMascot,
  FlowerSticker,
} from "@/components/graphics/ScrapbookElements";

export function CoverHero() {
  return (
    <section
      id="cover"
      className="relative w-full overflow-hidden pt-16 text-navy"
    >
      {/* Top Repeating Sticker Marquee Banner */}
      <TopStickerBanner />

      {/* STAGE 1: "UNBOXING MY........" Sealed Bubble-Wrapped Cardboard Shipping Box */}
      <div className="relative mx-auto max-w-[1280px] px-4 pt-12 pb-16 sm:px-8">
        <div className="relative flex flex-col items-center justify-center py-6">
          {/* Arched / Angled Pixel Display Headline */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-center">
            <span className="-rotate-6 font-pixel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-navy drop-shadow-[3px_3px_0px_#F5D74D]">
              UNBOXING
            </span>
            <span className="rotate-6 font-pixel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-navy drop-shadow-[3px_3px_0px_#F5D74D]">
              MY........
            </span>
          </div>

          {/* 3D Isometric / Tactile Cardboard Parcel Box with Stickers & Bubble Wrap */}
          <div className="relative mx-auto w-full max-w-3xl">
            {/* Horizontal Bubble Wrap Sheet draped over the parcel */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 top-10 bottom-4 z-20 rounded-md border-y-2 border-white/90 bg-white/30 bg-bubble-dots bg-[size:20px_20px] shadow-lg backdrop-blur-[1px]"
            />

            {/* Main Kraft Shipping Box */}
            <div className="relative z-10 mx-auto max-w-2xl rounded-md border-4 border-kraft-dark bg-kraft p-6 sm:p-10 shadow-[0_28px_50px_rgba(130,82,24,0.35)] bg-cardboard-ribs">
              {/* Top Navy Branded Packing Tape Strip running across the box */}
              <div className=" -mx-6 sm:-mx-10 mb-6 flex items-center justify-around border-y-2 border-navy bg-navy py-2 px-4 text-cream shadow-md">
                <span className="highlighter-strip font-sans text-[10px] font-extrabold uppercase">
                  Born to build
                </span>
                <GaScriptSticker size="sm" />
                <HeartMascot className="h-7 w-7" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-marker uppercase">
                  GARVIT ARORA // 2026—27
                </span>
                <GaScriptSticker size="sm" />
              </div>

              {/* Shipping Labels & Fragile Stickers on the Cardboard Box */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Left Stickers */}
                <div className="sm:col-span-4 flex flex-wrap sm:flex-col gap-3 items-start">
                  <div className="-rotate-6 rounded-sm border-2 border-y2k-pink bg-white px-3 py-1.5 shadow-md">
                    <span className="block font-display text-[11px] font-black text-y2k-coral uppercase leading-tight">
                      HIGH VALUE !!!
                    </span>
                    <span className="block font-display text-[11px] font-black text-navy uppercase leading-tight">
                      AI × SOFTWARE !!!
                    </span>
                    <span className="block font-display text-[11px] font-black text-y2k-purple uppercase leading-tight">
                      9.11 CGPA !!!
                    </span>
                  </div>

                  <div className="rotate-3 rounded-sm border-2 border-navy bg-y2k-mint px-3 py-1 font-display text-xs font-black text-navy uppercase shadow-md">
                    FRAGILE // HANDLE WITH LOVE
                  </div>
                </div>

                {/* Center Yellow Shipping Portfolio Label */}
                <div className="sm:col-span-5">
                  <div className="-rotate-2 rounded-md border-2 border-navy bg-marker p-4 text-navy shadow-[4px_4px_0px_#22307D]">
                    <div className="flex items-center justify-between border-b border-navy/25 pb-1 font-mono text-[10px] font-bold">
                      <span>PRIORITY PARCEL</span>
                      <span>★ 2026/27</span>
                    </div>
                    <p className="mt-2 font-pixel text-lg sm:text-xl font-bold uppercase leading-tight text-navy">
                      SHIPPING PORTFOLIO
                    </p>
                    <p className="mt-1 font-sans text-xs font-extrabold text-navy/85">
                      FROM: GARVIT ARORA (SRMIST KTR)
                    </p>
                  </div>
                </div>

                {/* Right Stickers */}
                <div className="sm:col-span-3 flex flex-wrap sm:flex-col items-end justify-between gap-3">
                  <div className="rotate-6 rounded-full border-3 border-white bg-navy px-4 py-1.5 font-display text-xs font-black text-white shadow-md">
                    GARVIT.AI ★
                  </div>
                  <AsteriskMascot color="#74B9EB" className="h-14 w-14" />
                  <span className="-rotate-3 font-display text-xs font-black uppercase tracking-wider text-navy">
                    ORGANIZED CODE
                  </span>
                </div>
              </div>

              {/* Bottom Box Edge Stamp */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t-2 border-dashed border-kraft-dark pt-4">
                <span className="font-display text-sm sm:text-base font-black uppercase tracking-wide text-cream drop-shadow-[1px_1px_0px_#825218]">
                  BORN TO BUILD. RAISED BY DEADLINES.
                </span>
                <div className="flex items-center gap-2">
                  <FlowerSticker className="h-10 w-10" />
                  <HeartMascot className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Interactive Unbox CTA Buttons */}
          <div className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#index"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-navy bg-marker px-6 py-3 font-display text-sm sm:text-base font-black text-navy uppercase shadow-[4px_4px_0px_#22307D] transition-transform hover:-translate-y-0.5"
            >
              <PackageOpen className="h-5 w-5" />
              Click to Unbox My Portfolio
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>

            <a
              href={profileData.resumeUrl}
              download="Garvit_Arora_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-white px-6 py-3 font-display text-sm sm:text-base font-black text-navy uppercase shadow-[4px_4px_0px_#22307D] transition-transform hover:-translate-y-0.5 hover:bg-cream"
            >
              <FileText className="h-4 w-4 text-y2k-purple" />
              Download Resume PDF
            </a>
          </div>
        </div>
      </div>

      {/* Middle Repeating Navy Sticker Marquee Divider */}
      <TopStickerBanner />

      {/* STAGE 2: Inside-the-Box View Looking Down at Garvit Peeking Over the Flap (Exact match to Behance Slide 2!) */}
      <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-8">
        <div className="relative overflow-hidden rounded-lg border-4 border-kraft-dark bg-kraft p-4 sm:p-10 shadow-2xl bg-cardboard-ribs">
          {/* 4 Angled Corrugated Cardboard Flaps Framing the Inner Graph-Paper Window */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 px-2">
            <div className="space-y-1">
              <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold">
                Born to create,
              </span>
              <br />
              <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold">
                Raised by deadlines
              </span>
            </div>

            <span className="font-sans text-xs font-bold tracking-widest text-marker uppercase">
              welcome to my portfolio
            </span>

            <div className="space-y-1 text-right">
              <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold">
                With a heart
              </span>
              <br />
              <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold">
                full of AI and caffeine
              </span>
            </div>
          </div>

          {/* Inner White/Cream Graph-Paper Opening with Pixel "PORTFOLIO" + Garvit's Real Photo Peeking Over the Box Edge */}
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-sm border-4 border-kraft-dark bg-cream bg-graph-grid bg-[size:36px_36px] pt-8 px-4 pb-0 shadow-inner">
            {/* Floating Mascots */}
            <AsteriskMascot
              color="#5E52C6"
              className="absolute top-4 left-6 h-10 w-10"
            />
            <AsteriskMascot
              color="#F39237"
              className="absolute top-6 right-8 h-10 w-10"
            />

            {/* Yellow Taped Subtitles */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
              <span className="highlighter-strip -rotate-6 font-sans text-xs sm:text-sm font-extrabold">
                AI Engineer
              </span>
              <span className="highlighter-strip rotate-3 font-sans text-xs sm:text-sm font-extrabold">
                and Software Developer
              </span>
            </div>

            {/* Huge Blue Pixel/Block "PORTFOLIO" Title */}
            <div className="relative z-10 mt-2 text-center">
              <h1 className="font-pixel text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider text-navy drop-shadow-[4px_4px_0px_#74B9EB]">
                PORTFOLIO
              </h1>
              <div className="-mt-3 flex items-center justify-between px-4 sm:px-14">
                <GaScriptSticker size="md" />
                <span className="rounded-full border-2 border-white bg-navy px-3.5 py-1 font-display text-xs font-black text-white shadow-md">
                  GARVIT.
                </span>
              </div>
            </div>

            {/* Garvit's Real Portrait Peeking Over the Cardboard Flap with Cartoon Hands */}
            <div className="relative z-10 mt-4 flex flex-col items-center">
              <div className="relative h-52 w-56 sm:h-64 sm:w-72 overflow-hidden rounded-t-full border-4 border-white shadow-xl bg-navy/10">
                <img
                  src="/images/garvit-peeking.jpg"
                  alt="Garvit Arora peeking into the portfolio box"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Two Illustrated Hands Gripping the Cardboard Flap Edge */}
              <div className="relative z-20 -mt-5 flex w-64 sm:w-80 items-center justify-between px-4">
                <div className="flex gap-1 rounded-xl border-2 border-navy bg-[#F2C29B] px-3 py-2 shadow-md">
                  <span className="h-5 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                  <span className="h-6 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                  <span className="h-6 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                  <span className="h-5 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                </div>
                <div className="flex gap-1 rounded-xl border-2 border-navy bg-[#F2C29B] px-3 py-2 shadow-md">
                  <span className="h-5 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                  <span className="h-6 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                  <span className="h-6 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                  <span className="h-5 w-2.5 rounded-full border border-navy/40 bg-[#E6B188]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cardboard Flap Bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 px-2">
            <div className="font-display text-2xl sm:text-3xl font-black text-marker leading-none">
              20
              <br />
              26—27
            </div>

            <div className="text-center font-sans text-xs font-extrabold text-cream uppercase tracking-wider">
              {profileData.primaryHeadline} — {profileData.institutionShort} (CGPA{" "}
              {profileData.cgpa})
            </div>

            <div className="space-y-1 text-right">
              <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold">
                Where technology
              </span>
              <br />
              <span className="highlighter-strip inline-block font-sans text-xs sm:text-sm font-extrabold">
                meets business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
