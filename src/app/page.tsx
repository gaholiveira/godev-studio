"use client";

import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { FeaturedCase } from "@/components/featured-case";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { useRef } from "react";
import { useFooterHeight } from "@/hooks/use-footer-height";

export default function Home() {
  const footerRef = useRef<HTMLElement>(null);
  const footerHeight = useFooterHeight(footerRef);

  return (
    <>
      <main 
        className="relative bg-black"
        style={{ 
          zIndex: 10,
          marginBottom: `${footerHeight}px`
        }}
      >
        <Hero />
        <TechStack />
        <FeaturedCase />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer ref={footerRef} />
    </>
  );
}
