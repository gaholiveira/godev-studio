export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Círculo de gradiente verde difuso no fundo */}
      <div className="bg-emerald-500/10 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none" />

      {/* Conteúdo */}
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
            Pronto para escalar sua engenharia?
          </h2>

          {/* Subtítulo */}
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            Apenas 1 vaga restante para início imediato em Janeiro. Garanta seu
            sprint.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#pricing"
              className="h-11 px-8 rounded-md bg-white text-black hover:bg-zinc-200 transition-colors font-medium text-sm flex items-center justify-center"
            >
              Assinar agora
            </a>
            <a
              href="https://cal.com/gabriel-oliveira-8ajlid/discovery-call-godev-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-8 rounded-md border border-zinc-800 bg-transparent text-white hover:bg-zinc-900 transition-colors font-medium text-sm flex items-center justify-center"
            >
              Agendar conversa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
