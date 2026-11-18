"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/data/profile";
import { TopStickerBanner } from "@/components/graphics/ScrapbookElements";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full text-navy">
      <TopStickerBanner />
      <div className="bg-navy py-6 text-cream">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <img
              src="/images/garvit-portrait.jpg"
              alt="Garvit Arora"
              className="h-10 w-10 rounded-full border-2 border-white object-cover object-top"
            />
            <div>
              <span className="block font-display text-sm font-black text-white uppercase">
                {profileData.name}
              </span>
              <span className="block font-mono text-[10px] text-marker">
                PORTFOLIO 2026/27 — AI ENGINEER &amp; SOFTWARE DEVELOPER
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-marker px-4 py-1.5 font-display text-xs font-black text-navy uppercase shadow-md hover:bg-marker-bright"
          >
            BACK TO TOP BOX
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
