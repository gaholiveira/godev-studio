"use client";

import { useRef, useEffect, useCallback } from "react";
import { useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const SPOTLIGHT_SIZE = 480;
const SPRING = { stiffness: 150, damping: 25 };

function useIsMobile() {
  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === "undefined") return () => {};
    const q1 = window.matchMedia("(max-width: 768px)");
    const q2 = window.matchMedia("(pointer: coarse)");
    q1.addEventListener("change", onStoreChange);
    q2.addEventListener("change", onStoreChange);
    return () => {
      q1.removeEventListener("change", onStoreChange);
      q2.removeEventListener("change", onStoreChange);
    };
  };
  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(max-width: 768px)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    );
  };
  const getServerSnapshot = () => false;
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function HeroCursorReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, SPRING);
  const springY = useSpring(mouseY, SPRING);

  const spotlightX = useTransform(springX, [0, 1], [-120, 120]);
  const spotlightY = useTransform(springY, [0, 1], [-100, 100]);

  const updatePosition = useCallback(
    (e: { clientX: number; clientY: number }) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    if (isMobile) return;
    document.addEventListener("pointermove", updatePosition as (e: PointerEvent) => void, { passive: true });
    document.addEventListener("pointerdown", updatePosition as (e: PointerEvent) => void, { passive: true });
    document.addEventListener("mousemove", updatePosition as (e: MouseEvent) => void, { passive: true });
    return () => {
      document.removeEventListener("pointermove", updatePosition as (e: PointerEvent) => void);
      document.removeEventListener("pointerdown", updatePosition as (e: PointerEvent) => void);
      document.removeEventListener("mousemove", updatePosition as (e: MouseEvent) => void);
    };
  }, [isMobile, updatePosition]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-1 overflow-hidden",
        "pointer-events-none"
      )}
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: SPOTLIGHT_SIZE, height: SPOTLIGHT_SIZE }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12]"
            style={{
              width: SPOTLIGHT_SIZE,
              height: SPOTLIGHT_SIZE,
              x: spotlightX,
              y: spotlightY,
              background:
                "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(56,189,248,0.08) 40%, transparent 70%)",
            }}
        />
      </div>
    </div>
  );
}
