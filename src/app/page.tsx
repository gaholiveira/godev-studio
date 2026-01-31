"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/features/home/hero";
import { DeferredBelowFold } from "@/components/deferred-below-fold";

/** Seções abaixo do hero: chunks carregados após requestIdleCallback (fora do caminho crítico) */
const TechStack = dynamic(
  () => import("@/components/features/home/tech-stack").then((m) => ({ default: m.TechStack })),
  { ssr: false }
);

const ViosShowcase = dynamic(
  () => import("@/components/features/home/vios-showcase").then((m) => ({ default: m.ViosShowcase })),
  { ssr: false }
);

const BentoGrid = dynamic(
  () => import("@/components/features/home/bento-grid").then((m) => ({ default: m.BentoGrid })),
  { ssr: false }
);

const Pricing = dynamic(
  () => import("@/components/features/home/pricing").then((m) => ({ default: m.Pricing })),
  { ssr: false }
);

const FAQ = dynamic(
  () => import("@/components/features/home/faq").then((m) => ({ default: m.FAQ })),
  {
    ssr: false,
    loading: () => (
      <section
        id="faq"
        className="py-16 md:py-24 bg-zinc-950 min-h-[520px] contain-layout"
        aria-hidden="true"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="h-10 w-64 mx-auto bg-zinc-800/50 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 rounded-lg bg-zinc-900/30 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const CTA = dynamic(
  () => import("@/components/features/home/cta").then((m) => ({ default: m.CTA })),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative bg-black contain-layout">
      <Hero />
      <DeferredBelowFold>
        <TechStack />
        <ViosShowcase />
        <BentoGrid />
        <Pricing />
        <FAQ />
        <CTA />
      </DeferredBelowFold>
    </main>
  );
}
