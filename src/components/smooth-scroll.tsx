"use client";

import { useEffect, useRef } from "react";
import { setLenisInstance } from "@/components/smooth-scroll-link";

/** Detecta se é dispositivo touch (mobile) — Lenis mais leve nesses dispositivos */
function isTouchDevice() {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function SmoothScroll() {
  const rafId = useRef<number>(0);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const run = () => {
        import("lenis").then(({ default: Lenis }) => {
          const html = document.documentElement;
          html.classList.add("lenis", "lenis-smooth");

          const touch = isTouchDevice();
          const lenis = new Lenis({
            duration: touch ? 0.6 : 0.9,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: touch ? 0.8 : 1,
            infinite: false,
            touchMultiplier: 1.2,
          });

          setLenisInstance(lenis);

          function raf(time: number) {
            lenis.raf(time);
            rafId.current = requestAnimationFrame(raf);
          }

          rafId.current = requestAnimationFrame(raf);

          cleanupRef.current = () => {
            cancelAnimationFrame(rafId.current);
            lenis.destroy();
            setLenisInstance(null);
            html.classList.remove("lenis", "lenis-smooth");
          };
        });
      };

      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(run, { timeout: 300 });
      } else {
        setTimeout(run, 100);
      }
    });

    return () => {
      cancelAnimationFrame(id);
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return null;
}
