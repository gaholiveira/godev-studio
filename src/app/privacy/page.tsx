export default function PrivacyPage() {
  return (
    <>
      <main className="min-h-screen bg-zinc-950 py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-zinc-400 text-lg">
              Transparência e Segurança de Dados
            </p>
          </div>

          {/* Conteúdo */}
          <div className="prose prose-invert prose-zinc max-w-none">
            <div className="space-y-8 text-zinc-300 leading-relaxed">
              <p className="text-zinc-300 leading-7 text-lg">
                A sua privacidade é prioridade para nós. Esta política explica
                como lidamos com as informações coletadas através dos nossos
                sites.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Coleta de Dados Minimalista
                </h2>
                <p className="text-zinc-300 leading-7">
                  Atualmente, nosso site não utiliza sistemas de login ou bancos
                  de dados internos para armazenamento de informações pessoais de
                  navegação. Coletamos apenas os dados estritamente necessários
                  para o funcionamento dos nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Processamento de Pagamentos (Stripe)
                </h2>
                <p className="text-zinc-300 leading-7">
                  Todas as transações financeiras são processadas pela plataforma
                  Stripe. Nós não temos acesso, não visualizamos e não
                  armazenamos os dados do seu cartão de crédito ou informações
                  sensíveis de pagamento. O Stripe atua como controlador desses
                  dados, operando sob os mais rígidos padrões de segurança
                  internacionais (PCI-DSS).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. Formulários de Contato e Leads
                </h2>
                <p className="text-zinc-300 leading-7">
                  Ao entrar em contato conosco via e-mail ou formulários futuros,
                  os dados fornecidos (nome, e-mail e mensagem) serão utilizados
                  exclusivamente para responder à sua solicitação e prestar o
                  serviço contratado. Não compartilhamos esses dados com
                  terceiros para fins de marketing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Cookies e Analytics
                </h2>
                <p className="text-zinc-300 leading-7">
                  Utilizamos cookies essenciais e ferramentas de análise (como
                  Google Analytics ou Vercel Analytics) para entender o
                  desempenho do site e melhorar sua experiência. Esses dados são
                  anonimizados e não permitem a identificação pessoal do usuário.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Seus Direitos (LGPD)
                </h2>
                <p className="text-zinc-300 leading-7">
                  Você tem o direito de solicitar o acesso, correção ou exclusão
                  de qualquer dado enviado através de nossos canais de contato.
                  Para isso, envie um e-mail para{" "}
                  <a
                    href="mailto:developergabrielh@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors underline"
                  >
                    developergabrielh@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
