export default function Localizacao() {
  const address =
    "Rua Maria Celestina Monteiro dos Santos, 284 - Sítio Cercado, Curitiba - PR, 81920-710";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_API_KEY&q=${encodeURIComponent(address)}`;

  // Using a standard embed URL without API key for simplicity, or just the search results one
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.9575916320!2d-49.2562238!3d-25.5414845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf0f95b0f5b1d%3A0x88c88c88c88c88c8!2sR.%20Maria%20Celestina%20Monteiro%20dos%20Santos%2C%20284%20-%20S%C3%ADtio%20Cercado%2C%20Curitiba%20-%20PR%2C%2081920-710!5e0!3m2!1spt-BR!2sbr!4v1706714000000!5m2!1spt-BR!2sbr";

  return (
    <section id="localizacao" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)]">
            Localização
          </p>
          <h2 className="text-2xl font-bold text-(--color-dark) sm:text-3xl">
            Nossa base em Curitiba
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Estamos localizados estrategicamente para atender toda a capital e
            região metropolitana.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200">
          <div className="aspect-video w-full sm:aspect-21/9">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.956637821614!2d-49.25627742490518!3d-25.54151703750821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcf0f97a55f949%3A0xe54d6f830303e3a!2sR.%20Maria%20Celestina%20Monteiro%20dos%20Santos%2C%20284%20-%20S%C3%ADtio%20Cercado%2C%20Curitiba%20-%20PR%2C%2081920-710!5e0!3m2!1spt-BR!2sbr!4v1738345116788!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Floating Card - Similar to the example image */}
          <div className="absolute top-4 left-4 z-10 hidden max-w-[280px] rounded bg-white p-4 shadow-xl sm:block">
            <h3 className="text-sm font-bold text-[var(--color-dark)]">
              Rick Fretes
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Rua Maria Celestina Monteiro dos Santos, 284 - Sítio Cercado,
              Curitiba - PR
            </p>
            <div className="mt-3 flex items-center gap-2">
              <a
                href="https://www.google.com/maps/dir//R.+Maria+Celestina+Monteiro+dos+Santos,+284+-+S%C3%ADtio+Cercado,+Curitiba+-+PR,+81920-710/@-25.541517,-49.2537025,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94dcf0f97a55f949:0xe54d6f830303e3a!2m2!1d-49.2537025!2d-25.541517?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[var(--color-brand)] hover:underline"
              >
                Ver no Google Maps
              </a>
              <span className="text-gray-300">|</span>
              <a
                href="https://www.google.com/maps/dir//R.+Maria+Celestina+Monteiro+dos+Santos,+284+-+S%C3%ADtio+Cercado,+Curitiba+-+PR,+81920-710/@-25.541517,-49.2537025,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[var(--color-brand)] hover:underline"
              >
                Como chegar
              </a>
            </div>
          </div>
        </div>

        {/* Mobile address info */}
        <div className="mt-4 sm:hidden">
          <div className="rounded bg-gray-50 p-4 border border-gray-200">
            <h3 className="text-sm font-bold text-[var(--color-dark)] flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[var(--color-brand)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Rick Fretes
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Rua Maria Celestina Monteiro dos Santos, 284 - Sítio Cercado,
              Curitiba - PR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
