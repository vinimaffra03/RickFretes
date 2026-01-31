export default function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)]">
              Quem somos
            </p>
            <h2 className="text-2xl font-bold text-[var(--color-dark)] sm:text-3xl">
              Uma empresa de confianca para cuidar do seu patrimonio
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              A Rick Fretes nasceu da experiencia de quem entende o dia a dia
              de quem precisa mudar de endereco ou transportar cargas com
              seguranca. Atuamos em Curitiba e regiao metropolitana com
              caminhao proprio, equipe treinada e compromisso com prazos.
            </p>
            <p className="mt-3 leading-relaxed text-gray-600">
              Nosso diferencial e simples: tratamos cada mudanca como se fosse
              a nossa. Cuidado com seus moveis, transparencia no preco e
              atendimento direto, sem burocracia.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                "Caminhao proprio e equipado",
                "Equipe uniformizada e treinada",
                "Seguro para sua carga",
                "Atendimento direto pelo WhatsApp",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <svg
                    className="h-4 w-4 shrink-0 text-[var(--color-brand)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] rounded bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                  <p className="mt-2 text-xs text-gray-400">
                    Insira aqui uma foto real da equipe ou do caminhao
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded bg-[var(--color-brand)] px-5 py-3 text-center text-white shadow-md">
                <div className="text-xl font-bold">5+</div>
                <div className="text-[10px] uppercase tracking-wider">Anos no mercado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
