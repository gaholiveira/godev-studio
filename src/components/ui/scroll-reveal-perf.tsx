"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealPerfProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Se true, reduz ou desativa animação (prefers-reduced-motion) */
  reducedMotion?: boolean;
}

/**
 * Scroll reveal leve: CSS + Intersection Observer.
 * Usa apenas transform e opacity (GPU) — sem will-change persistente.
 * Boas práticas para Lighthouse 100 e fluidez.
 */
export function ScrollRevealPerf({
  children,
  className,
  delay = 0,
  reducedMotion = false,
}: ScrollRevealPerfProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6",
        className
      )}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
