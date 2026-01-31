const steps = [
  {
    number: "1",
    title: "Preencha o formulario",
    description:
      "Informe os detalhes do seu frete ou mudanca: tipo de servico, distancia, moveis e servicos extras.",
  },
  {
    number: "2",
    title: "Receba o orcamento",
    description:
      "O valor estimado e calculado na hora, com detalhamento de cada item. Sem surpresas.",
  },
  {
    number: "3",
    title: "Confirme pelo WhatsApp",
    description:
      "Envie o orcamento direto no WhatsApp e combine os detalhes com nossa equipe. Simples assim.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)]">
            Passo a passo
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-dark)] sm:text-3xl">
            Como funciona
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-dark)] text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--color-dark)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
