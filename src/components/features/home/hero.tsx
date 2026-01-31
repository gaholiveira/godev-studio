import { cn } from "@/lib/utils";
import { HeroContent } from "@/components/features/home/hero-content";

export function Hero() {
  return (
    <section
      className={cn(
        "relative flex min-h-svh-stable flex-col items-center justify-center",
        "bg-zinc-950 px-4 py-20 md:py-32",
        "overflow-hidden",
        "contain-layout",
      )}
      aria-label="Hero"
    >
      {/* Um único raio de sol: superior direito → centro do hero (metálica, intenso) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 140% 120% at 100% -5%, rgba(255,255,255,0.28) 0%, rgba(228,228,231,0.14) 28%, rgba(113,113,122,0.06) 52%, transparent 72%)",
        }}
      />

      <HeroContent />
    </section>
  );
}
