import { Magnetic } from "@/components/magnetic";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

export function Hero() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-950 pt-14 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(24, 24, 27, 0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
        {/* Badge */}
        <div className="mb-8 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur-sm">
          Disponibilidade limitada para Janeiro
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 max-w-4xl text-center leading-tight md:leading-tight">
          Seu Parceiro Estratégico de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Engenharia
          </span>{" "}
          de Produto.
        </h1>

        {/* Subheadline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl text-center mt-6 leading-relaxed md:leading-normal">
          Performance instantânea para seu SaaS, MVP ou ecossistema interno.
          Expertise sênior dedicada. Investimento transparente.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
          <Magnetic strength={0.3}>
            <SmoothScrollLink
              href="#pricing"
              className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black transition-all hover:bg-zinc-200 active:scale-95 min-h-[44px] min-w-[160px] flex items-center justify-center"
            >
              Iniciar Projeto
            </SmoothScrollLink>
          </Magnetic>
          <Magnetic strength={0.3}>
            <SmoothScrollLink
              href="#work"
              className="rounded-lg border border-zinc-800 bg-transparent px-6 py-3 text-base font-medium text-zinc-300 transition-all hover:bg-zinc-900 hover:text-white active:scale-95 min-h-[44px] min-w-[160px] flex items-center justify-center"
            >
              Explorar Expertise
            </SmoothScrollLink>
          </Magnetic>
        </div>
      </div>
    </main>
  );
}
