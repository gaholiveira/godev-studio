"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/features/home/hero";

/** Seções abaixo do hero: JS em chunks separados, carregados quando necessário */
const TechStack = dynamic(
  () => import("@/components/features/home/tech-stack").then((m) => ({ default: m.TechStack })),
  { ssr: true }
);

const ViosShowcase = dynamic(
  () => import("@/components/features/home/vios-showcase").then((m) => ({ default: m.ViosShowcase })),
  { ssr: true }
);

const BentoGrid = dynamic(
  () => import("@/components/features/home/bento-grid").then((m) => ({ default: m.BentoGrid })),
  { ssr: true }
);

const Pricing = dynamic(
  () => import("@/components/features/home/pricing").then((m) => ({ default: m.Pricing })),
  { ssr: true }
);

const FAQ = dynamic(
  () => import("@/components/features/home/faq").then((m) => ({ default: m.FAQ })),
  { ssr: true }
);

const CTA = dynamic(
  () => import("@/components/features/home/cta").then((m) => ({ default: m.CTA })),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="relative bg-black content-visibility-auto contain-layout">
      <Hero imageSrc="/Images/hero.png" />
      <TechStack />
      <ViosShowcase />
      <BentoGrid />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
