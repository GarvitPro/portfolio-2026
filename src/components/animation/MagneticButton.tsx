"use client";

import React, { useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/animations";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  onClick?: () => void;
  ariaLabel?: string;
  cursorLabel?: string;
}

export function MagneticButton({
  children,
  className,
  href,
  target,
  rel,
  download,
  onClick,
  ariaLabel,
  cursorLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const prefersReduced = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    "aria-label": ariaLabel,
    "data-cursor-label": cursorLabel,
    style: {
      transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    },
    className: cn(
      "inline-flex items-center justify-center transition-transform duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
      className
    ),
  };

  if (href) {
    return (
      <a
        {...sharedProps}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...sharedProps} onClick={onClick}>
      {children}
    </button>
  );
}
