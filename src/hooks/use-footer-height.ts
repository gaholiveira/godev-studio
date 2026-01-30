"use client";

import { useEffect, useState, RefObject } from "react";

/** Usa ResizeObserver em vez de offsetHeight + MutationObserver para evitar reflow forçado */
export function useFooterHeight(footerRef: RefObject<HTMLElement | null>) {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const height = entry.contentRect.height;
        setFooterHeight(height);
      }
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [footerRef]);

  return footerHeight;
}
