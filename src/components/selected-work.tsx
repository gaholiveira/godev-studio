import Image from "next/image";

export function SelectedWork() {
  return (
    <section className="py-24 bg-zinc-950">
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
              <p className="text-zinc-400">
                Plataforma D2C completa com gestão de estoque e checkout
                otimizado.
              </p>
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
              <p className="text-zinc-400">
                Landing Page de alta performance focada em conversão de leads
                B2B.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
