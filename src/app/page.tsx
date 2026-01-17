import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { SelectedWork } from "@/components/selected-work";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <SelectedWork />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
