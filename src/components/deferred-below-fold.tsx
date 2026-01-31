"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Renderiza filhos apenas após requestIdleCallback para manter
 * as seções abaixo do hero fora da cadeia crítica de carregamento.
 */
export function DeferredBelowFold({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const cb = () => setReady(true);
    const id =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(cb, { timeout: 600 })
        : (setTimeout(cb, 150) as unknown as number);
    return () =>
      typeof requestIdleCallback !== "undefined"
        ? cancelIdleCallback(id)
        : clearTimeout(id);
  }, []);

  if (!ready) {
    return (
      <div className="min-h-[40vh] contain-layout" aria-hidden />
    );
  }

  return <>{children}</>;
}
