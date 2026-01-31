export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center pt-14"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-truck.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[var(--color-dark)]/80" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-brand-light)]">
            Curitiba e Regiao Metropolitana
          </p>

          <h1 className="text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Fretes e Mudancas Residenciais, Comerciais e Viagens
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
            Ha mais de 5 anos atendendo Curitiba e regiao com seguranca,
            pontualidade e cuidado com seu patrimonio. Receba um orcamento
            estimado agora mesmo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#calculadora"
              className="inline-block rounded bg-[var(--color-brand)] px-7 py-3.5 text-center text-sm font-bold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              Solicitar orcamento
            </a>
            <a
              href="https://wa.me/5541999127274?text=Ola%2C%20gostaria%20de%20um%20orcamento%20de%20frete."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded border border-[var(--color-muted)]/40 px-7 py-3.5 text-center text-sm font-bold text-[var(--color-muted)] transition-colors hover:border-white/60 hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex gap-8 border-t border-white/15 pt-6">
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-[var(--color-muted)]">Mudancas realizadas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-xs text-[var(--color-muted)]">Nota no Google</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-xs text-[var(--color-muted)]">Anos de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
