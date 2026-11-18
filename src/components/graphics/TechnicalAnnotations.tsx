import React from "react";
import { cn } from "@/lib/animations";

export function ChapterStamp({
  number,
  title,
  theme = "dark",
  meta,
  className,
}: {
  number: string;
  title: string;
  theme?: "dark" | "paper";
  meta?: string;
  className?: string;
}) {
  const isDark = theme === "dark";
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 border-b pb-4 mb-10",
        isDark ? "border-white/15" : "border-ink-paper/20",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center bg-violet px-2.5 py-1 font-mono text-[11px] font-semibold tracking-[0.2em] text-text-light uppercase">
          CH. {number}
        </span>
        <span
          className={cn(
            "font-mono text-xs tracking-[0.22em] uppercase",
            isDark ? "text-text-light" : "text-ink-paper font-medium"
          )}
        >
          / {title}
        </span>
      </div>
      {meta && (
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-violet" />
          <span
            className={cn(
              "font-mono text-[11px] tracking-[0.18em] uppercase",
              isDark ? "text-text-muted" : "text-ink-paper/70"
            )}
          >
            {meta}
          </span>
        </div>
      )}
    </div>
  );
}

export function CornerMarkers({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "paper";
  className?: string;
}) {
  const strokeColor =
    theme === "dark" ? "border-violet/60" : "border-ink-paper/45";
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <span
        className={cn("absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2", strokeColor)}
      />
      <span
        className={cn("absolute top-0 right-0 h-3 w-3 border-t-2 border-r-2", strokeColor)}
      />
      <span
        className={cn("absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2", strokeColor)}
      />
      <span
        className={cn("absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2", strokeColor)}
      />
    </div>
  );
}

export function TapeStrip({
  position = "top-left",
  variant = "translucent",
  label,
  className,
}: {
  position?: "top-left" | "top-right" | "top-center" | "bottom-right";
  variant?: "translucent" | "violet";
  label?: string;
  className?: string;
}) {
  const posClasses = {
    "top-left": "-top-3 left-6 -rotate-6",
    "top-right": "-top-3 right-6 rotate-6",
    "top-center": "-top-3.5 left-1/2 -translate-x-1/2 -rotate-2",
    "bottom-right": "-bottom-3 right-8 -rotate-3",
  }[position];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-20 flex h-7 min-w-[92px] items-center justify-center px-3 shadow-sm backdrop-blur-[2px]",
        variant === "translucent"
          ? "bg-[#E6DEC8]/75 border-x border-dashed border-ink-paper/25 text-ink-paper/80"
          : "bg-violet/85 border-x border-dashed border-white/30 text-text-light",
        posClasses,
        className
      )}
    >
      {label && (
        <span className="font-mono text-[9px] font-semibold tracking-[0.22em] uppercase">
          {label}
        </span>
      )}
    </div>
  );
}

export function RegistrationCross({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 text-violet/70", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <circle cx="12" cy="12" r="6" />
      <line x1="12" y1="0" x2="12" y2="24" />
      <line x1="0" y1="12" x2="24" y2="12" />
    </svg>
  );
}
