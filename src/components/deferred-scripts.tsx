"use client";

import dynamic from "next/dynamic";

/** Carrega só no cliente; reduz JS inicial e evita bloqueio de renderização */
const SmoothScroll = dynamic(
  () => import("@/components/smooth-scroll").then((m) => ({ default: m.SmoothScroll })),
  { ssr: false }
);

/** Carrega só no cliente; reduz JS inicial */
const DeferredCursor = dynamic(
  () => import("@/components/deferred-cursor").then((m) => ({ default: m.DeferredCursor })),
  { ssr: false }
);

export function DeferredScripts() {
  return (
    <>
      <SmoothScroll />
      <DeferredCursor />
    </>
  );
}
