import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 py-20">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Ícone de Sucesso */}
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-emerald-500" />
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
          Bem-vindo ao GoDev Studio.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto">
          Sua assinatura foi confirmada. Estamos prontos para escalar seu
          projeto.
        </p>

        {/* Card de Próximos Passos */}
        <div className="border border-zinc-800 bg-zinc-900/50 rounded-lg p-8 mt-12 text-left">
          <h2 className="text-xl font-semibold text-white mb-6">
            Próximos Passos
          </h2>
          <ol className="space-y-6">
            {/* Passo 1 */}
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  Verifique seu E-mail
                </h3>
                <p className="text-zinc-400 text-sm">
                  Enviamos o convite do seu Quadro de Projetos exclusivo.
                </p>
              </div>
            </li>

            {/* Passo 2 */}
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  Acesse o Painel
                </h3>
                <p className="text-zinc-400 text-sm">
                  Aceite o convite para entrar no seu board de gestão.
                </p>
              </div>
            </li>

            {/* Passo 3 */}
            <li className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-500 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">
                  Crie sua primeira tarefa
                </h3>
                <p className="text-zinc-400 text-sm">
                  Descreva o que precisamos fazer e iniciaremos em até 24h.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Botão de Ação */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-block rounded-lg bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    </main>
  );
}
