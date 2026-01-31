const diferenciais = [
  {
    title: "Caminhao equipado",
    description:
      "Veiculos com cinto de amarracao, cobertores e protecao completa para seus pertences.",
  },
  {
    title: "Equipe treinada",
    description:
      "Profissionais cuidadosos e experientes no manuseio de moveis e objetos frageis.",
  },
  {
    title: "Preco transparente",
    description:
      "Orcamento detalhado com cada item explicado. Voce sabe exatamente pelo que esta pagando.",
  },
  {
    title: "Pontualidade",
    description:
      "Compromisso com horarios. Chegamos no combinado para voce nao perder tempo.",
  },
  {
    title: "Atendimento direto",
    description:
      "Fale diretamente com a equipe pelo WhatsApp. Sem call center, sem espera.",
  },
  {
    title: "Cobertura regional",
    description:
      "Atendemos Curitiba, regiao metropolitana e viagens para todo o Parana.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)]">
            Nossos diferenciais
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-dark)] sm:text-3xl">
            Por que escolher a Rick Fretes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item) => (
            <div
              key={item.title}
              className="border-l-4 border-[var(--color-brand)] bg-white py-5 pr-6 pl-5"
            >
              <h3 className="text-sm font-bold text-[var(--color-dark)]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
