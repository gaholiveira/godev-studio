"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

/** Chunks carregados só após load para não disputar LCP */
const SmoothScroll = dynamic(
  () => import("@/components/smooth-scroll").then((m) => ({ default: m.SmoothScroll })),
  { ssr: false }
);

const DeferredCursor = dynamic(
  () => import("@/components/deferred-cursor").then((m) => ({ default: m.DeferredCursor })),
  { ssr: false }
);

/** Monta Lenis e Cursor apenas após window.load para ficarem fora do caminho crítico */
export function DeferredScripts() {
  const [loadComplete, setLoadComplete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.readyState === "complete") {
      setLoadComplete(true);
      return;
    }
    const onLoad = () => setLoadComplete(true);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!loadComplete) return null;

  return (
    <>
      <SmoothScroll />
      <DeferredCursor />
    </>
  );
}
