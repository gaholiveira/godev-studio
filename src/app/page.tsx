"use client";

import { Hero } from "@/components/features/home/hero";
import { TechStack } from "@/components/features/home/tech-stack";
import { ViosShowcase } from "@/components/features/home/vios-showcase";
import { BentoGrid } from "@/components/features/home/bento-grid";
import { Pricing } from "@/components/features/home/pricing";
import { FAQ } from "@/components/features/home/faq";
import { CTA } from "@/components/features/home/cta";

export default function Home() {
  return (
    <main className="relative bg-black content-visibility-auto contain-layout">
      {/* Imagem de fundo: coloque em public/Images/ (ex: hero.jpg) e use: imageSrc="/Images/hero.jpg" imageAlt="GoDev Studio" */}
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
