export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Termos de Uso e Serviço
            </h1>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-invert prose-zinc max-w-none">
            <div className="space-y-8 text-zinc-300 leading-relaxed">
              <p className="text-zinc-300 leading-7 text-lg">
                Bem-vindo à nossa plataforma. Ao acessar este site, você concorda
                em cumprir estes termos de serviço.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Propriedade Intelectual
                </h2>
                <p className="text-zinc-300 leading-7">
                  Todo o conteúdo visual, marcas (VIOS e GoDev Studio), códigos e
                  design deste site são de propriedade exclusiva de seus
                  criadores. É proibida a reprodução ou uso sem autorização
                  prévia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Natureza do Serviço
                </h2>
                <p className="text-zinc-300 leading-7">
                  A GoDev Studio atua na prestação de serviços de tecnologia e
                  design. A VIOS Labs atua no comércio de produtos de suplementação
                  premium. Os prazos e entregas de cada projeto ou produto serão
                  acordados individualmente no momento da contratação/compra.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. Limitação de Responsabilidade
                </h2>
                <p className="text-zinc-300 leading-7">
                  Fazemos o máximo para garantir que as informações aqui contidas
                  sejam precisas e atualizadas. No entanto, não nos responsabilizamos
                  por interrupções temporárias de serviço causadas por falhas em
                  infraestruturas de terceiros (servidores de hospedagem ou
                  processadores de pagamento).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Pagamentos e Reembolsos
                </h2>
                <p className="text-zinc-300 leading-7">
                  Os pagamentos são realizados via Stripe. Políticas de reembolso
                  para serviços da GoDev Studio seguem o que for estabelecido em
                  contrato individual. Para produtos da VIOS Labs, respeitamos
                  integralmente o Código de Defesa do Consumidor (CDC) para trocas
                  e devoluções.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Foro
                </h2>
                <p className="text-zinc-300 leading-7">
                  Fica eleito o foro da comarca de Franca, SP, para dirimir
                  quaisquer dúvidas relativas a estes termos.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
