"use client";

import { useEffect, useState } from "react";
import { CustomCursor } from "@/components/custom-cursor";

/** Monta o cursor customizado após first paint para não bloquear LCP */
export function DeferredCursor() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (typeof requestIdleCallback !== "undefined") {
        requestIdleCallback(() => setReady(true), { timeout: 400 });
      } else {
        setTimeout(() => setReady(true), 150);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return ready ? <CustomCursor /> : null;
}
