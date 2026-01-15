import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        {/* Cabeçalho */}
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Perguntas Frequentes
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="border border-zinc-800 rounded-lg px-6"
          >
            <AccordionTrigger className="text-white hover:no-underline py-6">
              Por que não contratar um desenvolvedor full-time?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-6">
              O custo anual de um Sênior ultrapassa R$ 150.000 (salário +
              benefícios), além do tempo de contratação. Com a GoDev, você tem
              expertise sênior imediata por uma fração do custo, com a
              flexibilidade de pausar quando o fluxo de trabalho diminuir.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border border-zinc-800 rounded-lg px-6"
          >
            <AccordionTrigger className="text-white hover:no-underline py-6">
              O que significa 'Pausar a assinatura'?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-6">
              Se você não tiver demandas no momento, pode pausar sua assinatura.
              Os dias restantes do seu ciclo de cobrança ficam guardados e você
              pode usá-los quando precisar voltar. Sem desperdício.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border border-zinc-800 rounded-lg px-6"
          >
            <AccordionTrigger className="text-white hover:no-underline py-6">
              Quão rápido vocês entregam?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-6">
              A maioria das solicitações é entregue em 48 horas ou menos.
              Tarefas complexas são quebradas em entregas menores para manter o
              fluxo constante.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border border-zinc-800 rounded-lg px-6"
          >
            <AccordionTrigger className="text-white hover:no-underline py-6">
              E se eu não gostar do código ou do resultado?
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 pb-6">
              O desenvolvimento é iterativo. Se não estiver 100% satisfeito,
              revisamos o código quantas vezes for necessário até ficar
              perfeito.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
