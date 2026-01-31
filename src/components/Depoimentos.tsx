const depoimentos = [
  {
    nome: "Mariana S.",
    local: "Curitiba - PR",
    texto:
      "Fiz minha mudanca com a Rick Fretes e foi excelente. Equipe pontual, cuidadosa e o preco foi justo. Recomendo.",
    estrelas: 5,
  },
  {
    nome: "Carlos R.",
    local: "Sao Jose dos Pinhais - PR",
    texto:
      "Precisava de um frete urgente e eles me atenderam no mesmo dia. Caminhao limpo e organizado. Muito profissionais.",
    estrelas: 5,
  },
  {
    nome: "Fernanda L.",
    local: "Colombo - PR",
    texto:
      "Mudei de apartamento com escadas e a equipe subiu tudo com muito cuidado. Preco transparente, sem surpresas.",
    estrelas: 5,
  },
  {
    nome: "Roberto M.",
    local: "Araucaria - PR",
    texto:
      "Terceira vez que contrato. Sempre confiaveis e o orcamento pelo site bate com o valor final. Nota 10.",
    estrelas: 5,
  },
];

function Estrelas({ quantidade }: { quantidade: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: quantidade }).map((_, i) => (
        <svg
          key={i}
          className="h-3.5 w-3.5 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)]">
            Depoimentos
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-dark)] sm:text-3xl">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {depoimentos.map((dep) => (
            <div
              key={dep.nome}
              className="rounded border border-gray-200 bg-white p-5"
            >
              <Estrelas quantidade={dep.estrelas} />
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                &ldquo;{dep.texto}&rdquo;
              </p>
              <div className="mt-4 border-t border-gray-100 pt-3">
                <p className="text-sm font-semibold text-[var(--color-dark)]">
                  {dep.nome}
                </p>
                <p className="text-xs text-gray-400">{dep.local}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
