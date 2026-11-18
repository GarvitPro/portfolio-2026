"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

const navItems = [
  { label: "Unbox", href: "/#index" },
  { label: "About / CV", href: "/#about" },
  { label: "01. Experience", href: "/#experience" },
  { label: "02. Projects", href: "/#work" },
  { label: "04. Skills", href: "/#skills" },
  { label: "05. Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-navy bg-cream/95 py-2.5 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-4 sm:px-8">
        {/* Brand Sticker Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="inline-flex items-center rounded-full border-2 border-white bg-navy px-3 py-0.5 font-script text-lg text-white shadow-md">
            ga<span className="text-marker ml-0.5 text-sm">★</span>
          </span>
          <div className="flex flex-col">
            <span className="font-display text-xs sm:text-sm font-black tracking-wide text-navy uppercase leading-none">
              {profileData.name}
            </span>
            <span className="font-mono text-[9px] font-bold text-navy/70 uppercase">
              PORTFOLIO 2026 — AI &amp; SOFTWARE
            </span>
          </div>
        </Link>

        {/* Desktop Nav Pills */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-1 font-display text-xs font-bold uppercase text-navy transition-colors hover:bg-marker"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border-2 border-navy bg-white px-3 py-1 font-display text-xs font-black text-navy uppercase shadow-[2px_2px_0px_#22307D] hover:bg-cream"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={profileData.resumeUrl}
            download="Garvit_Arora_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-navy bg-marker px-3.5 py-1 font-display text-xs font-black text-navy uppercase shadow-[2px_2px_0px_#22307D] hover:bg-marker-bright"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className="flex lg:hidden h-9 w-9 items-center justify-center rounded-md border-2 border-navy bg-marker text-navy"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b-2 border-navy bg-cream px-6 py-5 shadow-xl">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-navy/15 pb-2 font-display text-base font-black text-navy uppercase"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-3">
              <a
                href={profileData.resumeUrl}
                download="Garvit_Arora_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-full border-2 border-navy bg-marker py-2.5 text-center font-display text-xs font-black text-navy uppercase shadow-[3px_3px_0px_#22307D]"
              >
                Download Resume PDF
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
