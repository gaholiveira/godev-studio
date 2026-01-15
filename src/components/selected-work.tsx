import { LayoutTemplate } from "lucide-react";

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
          {/* Projeto 1: Fintech Dashboard */}
          <div className="group border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden">
            {/* Área da Imagem */}
            <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
              <div className="bg-zinc-950 rounded-lg m-4 w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <LayoutTemplate className="w-16 h-16 text-zinc-700" />
              </div>
            </div>

            {/* Rodapé do Card */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Neon Finance</h3>
              <p className="text-zinc-400">
                Real-time crypto dashboard with WebSockets.
              </p>
            </div>
          </div>

          {/* Projeto 2: AI Landing Page */}
          <div className="group border border-zinc-800 bg-zinc-900 rounded-lg overflow-hidden">
            {/* Área da Imagem */}
            <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
              <div className="bg-zinc-950 rounded-lg m-4 w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <LayoutTemplate className="w-16 h-16 text-zinc-700" />
              </div>
            </div>

            {/* Rodapé do Card */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Vision AI</h3>
              <p className="text-zinc-400">
                High-conversion landing page for LLM startup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
