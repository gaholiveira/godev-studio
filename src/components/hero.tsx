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
          ✨ Vagas abertas para Janeiro
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 max-w-4xl text-center leading-tight">
          Seu Parceiro de{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
            Engenharia
          </span>{" "}
          de Produto Sob Demanda.
        </h1>

        {/* Subheadline */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl text-center mt-6">
          Cancele as reuniões intermináveis. Tenha um Sênior construindo seu
          SaaS, MVP ou Ferramenta Interna. Preço fixo, pausa quando quiser.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#pricing"
            className="rounded-lg bg-white px-6 py-3 text-base font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Começar projeto
          </a>
          <a
            href="#work"
            className="rounded-lg border border-zinc-800 bg-transparent px-6 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Ver portfólio
          </a>
        </div>
      </div>
    </main>
  );
}
