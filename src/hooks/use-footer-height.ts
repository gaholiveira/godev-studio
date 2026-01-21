"use client";

import { useEffect, useState, RefObject } from "react";

export function useFooterHeight(footerRef: RefObject<HTMLElement | null>) {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    // Calcular altura inicial
    calculateHeight();

    // Recalcular em resize
    window.addEventListener("resize", calculateHeight);

    // Recalcular quando o conteúdo mudar (usando MutationObserver)
    const observer = new MutationObserver(calculateHeight);
    if (footerRef.current) {
      observer.observe(footerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"],
      });
    }

    return () => {
      window.removeEventListener("resize", calculateHeight);
      observer.disconnect();
    };
  }, [footerRef]);

  return footerHeight;
}
