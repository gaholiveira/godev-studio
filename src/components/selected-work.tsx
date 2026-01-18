import Image from "next/image";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="tracking-widest text-xs font-semibold text-emerald-500 uppercase mb-4">
            SELECTED WORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Software com alma.
          </h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Projeto 1: VIOS */}
          <div className="group border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden">
            {/* Área da Imagem */}
            <div className="aspect-video relative overflow-hidden bg-zinc-950">
              <Image
                src="/Images/mockvioslabs.png"
                alt="Dashboard da plataforma Vios Labs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Rodapé do Card */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">VIOS Labs</h3>
              <p className="text-zinc-400 mb-3">
                Plataforma D2C completa com gestão de estoque e checkout
                otimizado.
              </p>
              {/* Stack de Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Next.js
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Supabase
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Stripe
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Projeto 2: Uplevel */}
          <div className="group border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden">
            {/* Área da Imagem */}
            <div className="aspect-video relative overflow-hidden bg-zinc-950">
              <Image
                src="/Images/mockuplevelmktp.png"
                alt="Landing page Uplevel Marketplaces"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Rodapé do Card */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Uplevel Marketplaces
              </h3>
              <p className="text-zinc-400 mb-3">
                Landing Page de alta performance focada em conversão de leads
                B2B.
              </p>
              {/* Stack de Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Next.js
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Supabase
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Tailwind CSS
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  React
                </span>
              </div>
            </div>
          </div>

          {/* Projeto 3: GoDev SaaS Infrastructure */}
          <div className="group border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden md:col-span-2">
            {/* Área da Imagem */}
            <div className="aspect-video relative overflow-hidden bg-zinc-950">
              <Image
                src="/Images/mockdash.png"
                alt="Dashboard da infraestrutura SaaS GoDev"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Rodapé do Card */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  GoDev SaaS Infrastructure
                </h3>
                <span className="text-xs font-medium text-emerald-500/80 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                  INTERNAL
                </span>
              </div>
              <p className="text-zinc-400 mb-3">
                Desenvolvemos esta infraestrutura interna para validar
                integrações complexas de pagamentos, dashboards dinâmicos e
                arquitetura multi-tenant. Esta base funciona como um acelerador
                tecnológico para projetos personalizados da GoDev Studio,
                garantindo segurança e escalabilidade desde o primeiro dia.
              </p>
              {/* Stack de Tecnologias */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Next.js
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Stripe API
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Tailwind CSS
                </span>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Auth.js
                  </span>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded border border-zinc-700/30">
                  Supabase
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
