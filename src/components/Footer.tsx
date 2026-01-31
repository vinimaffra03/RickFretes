export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[var(--color-dark)] py-6 text-center text-xs text-gray-500">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          &copy; {new Date().getFullYear()} Rick Fretes — Fretes e Mudancas em
          Curitiba e Regiao. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          CNPJ: 57.732.745/0001-00 | Rua Maria Celestina Monteiro dos Santos,
          284 - Sítio Cercado, Curitiba - PR, 81920-710
        </p>
      </div>
    </footer>
  );
}
