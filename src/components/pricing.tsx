import { Badge } from "@/components/ui/badge";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
      {/* Glow verde sutil no fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Investimento transparente e estratégico.
          </h2>
          <p className="text-zinc-400">
            Flexibilidade total. Pause quando necessário.
          </p>
        </div>

        {/* Cards de Preço */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Card 1: Standard */}
          <div className="border border-zinc-800 bg-zinc-900/50 rounded-lg p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">R$ 4.990</span>
                <span className="text-zinc-400">/mês</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">1 solicitação por vez</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">Entrega média em 48h</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">
                  Stack: Next.js + Tailwind + Supabase
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">
                  Gestão assíncrona (Trello)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">Pause quando quiser</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/5kQ14nbbh17a0ji2e8dMI00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] h-11 px-4 py-2 rounded-md border border-zinc-700 bg-transparent text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all font-medium text-sm flex items-center justify-center active:scale-95"
            >
              Iniciar Projeto
            </a>
          </div>

          {/* Card 2: Pro - DESTAQUE */}
          <div className="border border-emerald-500/50 bg-zinc-900 rounded-lg p-8 flex flex-col relative">
            {/* Badge */}
            <Badge
              className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-black border-emerald-500"
            >
              Maior Velocidade
            </Badge>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">R$ 8.990</span>
                <span className="text-zinc-400">/mês</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">
                  2 solicitações simultâneas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">
                  Entrega prioritária (24-48h)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">
                  Consultoria de Arquitetura quinzenal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">Code Review avançado</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-zinc-300">
                  Canal de Slack dedicado (Opcional)
                </span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/7sY3cva7d8zC2rq1a4dMI01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] h-11 bg-white text-black hover:bg-emerald-400 hover:text-black transition-all rounded-md px-4 py-2 font-medium text-sm flex items-center justify-center active:scale-95"
            >
              Explorar Pro
            </a>
          </div>
        </div>

        {/* Texto abaixo dos cards */}
        <p className="text-center text-sm text-zinc-500 mt-12">
          Soluções customizadas para Enterprise?{" "}
          <a
            href="https://cal.com/gabriel-oliveira-8ajlid/discovery-call-godev-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-all underline min-h-[44px] inline-flex items-center active:scale-95"
          >
            Agendar Discovery.
          </a>
        </p>
      </div>
    </section>
  );
}
