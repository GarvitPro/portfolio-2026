"use client";

import React, { useEffect, useState } from "react";

const chapters = [
  { id: "cover", number: "00", label: "UNBOXING COVER" },
  { id: "index", number: "BOX", label: "FLAT-LAY ASSETS" },
  { id: "about", number: "CV", label: "ABOUT ME / PHONE" },
  { id: "experience", number: "01", label: "EXPERIENCE" },
  { id: "work", number: "02", label: "AI & PROJECTS" },
  { id: "skills", number: "04", label: "TECH UNIVERSE" },
  { id: "education", number: "05", label: "EDUCATION" },
  { id: "certifications", number: "06", label: "CERTIFICATIONS" },
  { id: "contact", number: "END", label: "THANK YOU BOX" },
];

export function ChapterIndicator() {
  const [active, setActive] = useState(chapters[0]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMiddle = window.innerHeight * 0.42;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportMiddle) {
            setActive(chapters[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Current section sticker"
      className="pointer-events-none fixed bottom-5 left-5 z-40 hidden md:flex items-center gap-2 rounded-full border-2 border-navy bg-marker px-4 py-1.5 text-navy shadow-[3px_3px_0px_#22307D]"
    >
      <span className="font-mono text-xs font-black uppercase">
        [{active.number}]
      </span>
      <span className="font-display text-xs font-black uppercase tracking-wider">
        {active.label}
      </span>
    </aside>
  );
}
