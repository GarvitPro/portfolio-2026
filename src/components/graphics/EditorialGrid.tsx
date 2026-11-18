import React from "react";
import { cn } from "@/lib/animations";

export function EditorialGrid({
  theme = "dark",
  className,
}: {
  theme?: "dark" | "paper";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* Fine coordinate grid */}
      <div
        className={cn(
          "absolute inset-0 bg-[size:64px_64px]",
          theme === "dark"
            ? "bg-editorial-grid-dark"
            : "bg-editorial-grid-paper"
        )}
      />

      {/* Vertical editorial column guide lines */}
      <div className="mx-auto flex h-full max-w-[1440px] justify-between px-6 md:px-12">
        <div
          className={cn(
            "h-full w-px",
            theme === "dark" ? "bg-white/[0.04]" : "bg-ink-paper/[0.06]"
          )}
        />
        <div
          className={cn(
            "hidden h-full w-px md:block",
            theme === "dark" ? "bg-white/[0.03]" : "bg-ink-paper/[0.05]"
          )}
        />
        <div
          className={cn(
            "hidden h-full w-px lg:block",
            theme === "dark" ? "bg-white/[0.03]" : "bg-ink-paper/[0.05]"
          )}
        />
        <div
          className={cn(
            "h-full w-px",
            theme === "dark" ? "bg-white/[0.04]" : "bg-ink-paper/[0.06]"
          )}
        />
      </div>
    </div>
  );
}
