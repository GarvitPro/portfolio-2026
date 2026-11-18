"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isHovering, setIsHovering] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const media = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(media.matches);
    if (!media.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const labeledEl = target?.closest("[data-cursor-label]") as HTMLElement | null;
      const interactiveEl = target?.closest("a, button, [role='button']");

      if (labeledEl) {
        setCursorLabel(labeledEl.getAttribute("data-cursor-label") || "VIEW");
        setIsHovering(true);
      } else if (interactiveEl) {
        setCursorLabel("");
        setIsHovering(true);
      } else {
        setCursorLabel("");
        setIsHovering(false);
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReduced]);

  if (!isPointerDevice || prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden hidden lg:block"
    >
      {/* Inner precise violet tracking point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-violet transition-opacity duration-150"
      />
      {/* Outer ring / VIEW badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border transition-all duration-200 ${
          cursorLabel
            ? "-ml-10 -mt-10 h-20 w-20 border-violet bg-violet/90 text-text-light shadow-[0_0_24px_rgba(139,92,246,0.5)]"
            : isHovering
            ? "-ml-6 -mt-6 h-12 w-12 border-violet/80 bg-violet/10"
            : "-ml-4 -mt-4 h-8 w-8 border-white/25 bg-transparent"
        }`}
      >
        {cursorLabel && (
          <span className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}
