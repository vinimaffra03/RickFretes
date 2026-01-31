"use client";

import { useState, useMemo } from "react";
import {
  calcularOrcamento,
  formatarMoeda,
  gerarMensagemWhatsApp,
  type OrcamentoInput,
  type Moveis,
} from "@/lib/calcular-orcamento";

const MOVEIS_CONFIG: {
  key: keyof Moveis;
  label: string;
  categoria: string;
}[] = [
  { key: "geladeira", label: "Geladeira", categoria: "Grande" },
  { key: "sofa", label: "Sofa", categoria: "Grande" },
  { key: "guardaRoupa", label: "Guarda-roupa", categoria: "Grande" },
  { key: "camaBox", label: "Cama box", categoria: "Grande" },
  { key: "mesa", label: "Mesa", categoria: "Medio" },
  { key: "maquinaLavar", label: "Maq. de lavar", categoria: "Medio" },
  { key: "estante", label: "Estante", categoria: "Medio" },
  { key: "cadeiras", label: "Cadeiras", categoria: "Pequeno" },
  { key: "caixas", label: "Caixas", categoria: "Pequeno" },
];

const initialMoveis: Moveis = {
  geladeira: 0,
  sofa: 0,
  guardaRoupa: 0,
  camaBox: 0,
  mesa: 0,
  maquinaLavar: 0,
  estante: 0,
  cadeiras: 0,
  caixas: 0,
};

export default function Calculadora() {
  const [tipoServico, setTipoServico] = useState<OrcamentoInput["tipoServico"]>(
    "mudanca-residencial",
  );
  const [tipoTrajeto, setTipoTrajeto] =
    useState<OrcamentoInput["tipoTrajeto"]>("urbana");
  const [distanciaKm, setDistanciaKm] = useState(15);
  const [tipoImovel, setTipoImovel] =
    useState<OrcamentoInput["tipoImovel"]>("apartamento");
  const [moveis, setMoveis] = useState<Moveis>(initialMoveis);
  const [escadaOrigem, setEscadaOrigem] = useState(false);
  const [escadaDestino, setEscadaDestino] = useState(false);
  const [ajudanteExtra, setAjudanteExtra] = useState(false);
  const [embalagem, setEmbalagem] = useState(false);
  const [desmontagemMontagem, setDesmontagemMontagem] = useState(false);
  const [dataServico, setDataServico] = useState("");

  const input: OrcamentoInput = {
    tipoServico,
    tipoTrajeto,
    distanciaKm,
    tipoImovel,
    moveis,
    escadaOrigem,
    escadaDestino,
    ajudanteExtra,
    embalagem,
    desmontagemMontagem,
    dataServico,
  };

  const orcamento = useMemo(
    () => calcularOrcamento(input),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      tipoServico,
      tipoTrajeto,
      distanciaKm,
      tipoImovel,
      moveis,
      escadaOrigem,
      escadaDestino,
      ajudanteExtra,
      embalagem,
      desmontagemMontagem,
      dataServico,
    ],
  );

  function updateMovel(key: keyof Moveis, delta: number) {
    setMoveis((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  }

  function handleWhatsApp() {
    const msg = gerarMensagemWhatsApp(input, orcamento);
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/5541999127274?text=${encoded}`, "_blank");
  }

  const btnActive =
    "border-[var(--color-brand)] bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] font-semibold";
  const btnInactive = "border-gray-200 text-gray-600 hover:border-gray-300";

  return (
    <section id="calculadora" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)]">
            Orcamento online
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-dark)] sm:text-3xl">
            Calcule seu orcamento
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500">
            O valor e calculado com base na distancia (diesel), tempo de
            trabalho (diarias) e volume de moveis transportados.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="space-y-5 lg:col-span-3">
            {/* Tipo de servico */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Tipo de servico
              </label>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {(
                  [
                    ["frete-simples", "Frete simples"],
                    ["mudanca-residencial", "Mudanca residencial"],
                    ["mudanca-comercial", "Mudanca comercial"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTipoServico(value)}
                    className={`rounded border-2 px-3 py-2.5 text-sm transition-colors ${
                      tipoServico === value ? btnActive : btnInactive
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tipo de trajeto */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Tipo de trajeto
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    ["urbana", "Mudanca urbana"],
                    ["longa-distancia", "Viagem / longa distancia"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTipoTrajeto(value)}
                    className={`rounded border-2 px-3 py-2.5 text-sm transition-colors ${
                      tipoTrajeto === value ? btnActive : btnInactive
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Distancia */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Distancia (km)
              </label>
              <input
                type="number"
                min={1}
                max={2000}
                value={distanciaKm}
                onChange={(e) =>
                  setDistanciaKm(Math.max(1, Number(e.target.value)))
                }
                className="w-full rounded border-2 border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[var(--color-brand)]"
              />
            </div>

            {/* Tipo de imovel */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Tipo de imovel
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    ["kitnet", "Kitnet"],
                    ["apartamento", "Apartamento"],
                    ["casa", "Casa"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setTipoImovel(value)}
                    className={`rounded border-2 px-3 py-2.5 text-sm transition-colors ${
                      tipoImovel === value ? btnActive : btnInactive
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Moveis */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Moveis e itens
              </label>
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {MOVEIS_CONFIG.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between rounded border border-gray-200 px-3 py-2"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm text-gray-700">
                        {item.label}
                      </span>
                      <span
                        className={`rounded px-1 py-0.5 text-[10px] font-semibold ${
                          item.categoria === "Grande"
                            ? "bg-red-50 text-red-500"
                            : item.categoria === "Medio"
                              ? "bg-yellow-50 text-yellow-600"
                              : "bg-green-50 text-green-600"
                        }`}
                      >
                        {item.categoria === "Grande"
                          ? "R$40"
                          : item.categoria === "Medio"
                            ? "R$25"
                            : "R$10"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => updateMovel(item.key, -1)}
                        className="flex h-6 w-6 items-center justify-center rounded bg-gray-100 text-xs text-gray-600 hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-sm font-semibold text-gray-800">
                        {moveis[item.key]}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateMovel(item.key, 1)}
                        className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-brand-light)] text-xs text-[var(--color-brand-dark)] hover:bg-[var(--color-brand)]/20"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Escadas */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Escadas
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={escadaOrigem}
                    onChange={(e) => setEscadaOrigem(e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-brand)]"
                  />
                  Escada na origem (+R$ 50)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={escadaDestino}
                    onChange={(e) => setEscadaDestino(e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-brand)]"
                  />
                  Escada no destino (+R$ 50)
                </label>
              </div>
            </div>

            {/* Extras */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Servicos extras
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={ajudanteExtra}
                    onChange={(e) => setAjudanteExtra(e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-brand)]"
                  />
                  Ajudante extra (+R$ 80)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={embalagem}
                    onChange={(e) => setEmbalagem(e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-brand)]"
                  />
                  Embalagem (+R$ 120)
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={desmontagemMontagem}
                    onChange={(e) => setDesmontagemMontagem(e.target.checked)}
                    className="h-4 w-4 accent-[var(--color-brand)]"
                  />
                  Desmontagem/montagem (+R$ 100)
                </label>
              </div>
            </div>

            {/* Data */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-gray-500">
                Data do servico
              </label>
              <input
                type="date"
                value={dataServico}
                onChange={(e) => setDataServico(e.target.value)}
                className="w-full rounded border-2 border-gray-200 px-3 py-2.5 text-sm text-gray-800 outline-none focus:border-[var(--color-brand)]"
              />
            </div>
          </div>

          {/* Resumo */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 rounded border border-gray-200 bg-gray-50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold text-[var(--color-dark)]">
                  Resumo do orcamento
                </h3>
                <span className="rounded bg-[var(--color-brand)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Estimado
                </span>
              </div>

              <div className="space-y-2.5 text-sm">
                {orcamento.baseFixa > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Taxa minima (frete)</span>
                    <span className="font-medium">
                      {formatarMoeda(orcamento.baseFixa)}
                    </span>
                  </div>
                )}

                {orcamento.valorDiarias > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>
                      {orcamento.diarias} diaria{orcamento.diarias > 1 ? "s" : ""}{" "}
                      x R$ 400
                    </span>
                    <span className="font-medium">
                      {formatarMoeda(orcamento.valorDiarias)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>
                    {distanciaKm} km x {formatarMoeda(orcamento.taxaKm)}
                  </span>
                  <span className="font-medium">
                    {formatarMoeda(orcamento.valorKm)}
                  </span>
                </div>

                {orcamento.totalMoveis > 0 && (
                  <div>
                    <div className="flex justify-between text-gray-600">
                      <span>Moveis</span>
                      <span className="font-medium">
                        {formatarMoeda(orcamento.totalMoveis)}
                      </span>
                    </div>
                    <div className="mt-1 ml-3 space-y-0.5 text-xs text-gray-400">
                      {orcamento.detalheMoveis.grandes.quantidade > 0 && (
                        <div>
                          {orcamento.detalheMoveis.grandes.quantidade}x grande ={" "}
                          {formatarMoeda(orcamento.detalheMoveis.grandes.valor)}
                        </div>
                      )}
                      {orcamento.detalheMoveis.medios.quantidade > 0 && (
                        <div>
                          {orcamento.detalheMoveis.medios.quantidade}x medio ={" "}
                          {formatarMoeda(orcamento.detalheMoveis.medios.valor)}
                        </div>
                      )}
                      {orcamento.detalheMoveis.pequenos.quantidade > 0 && (
                        <div>
                          {orcamento.detalheMoveis.pequenos.quantidade}x pequeno
                          ={" "}
                          {formatarMoeda(
                            orcamento.detalheMoveis.pequenos.valor,
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {orcamento.taxaApartamento > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Taxa apartamento</span>
                    <span className="font-medium">
                      {formatarMoeda(orcamento.taxaApartamento)}
                    </span>
                  </div>
                )}

                {orcamento.escadas > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Escadas</span>
                    <span className="font-medium">
                      {formatarMoeda(orcamento.escadas)}
                    </span>
                  </div>
                )}

                {orcamento.extras > 0 && (
                  <div>
                    <div className="flex justify-between text-gray-600">
                      <span>Servicos extras</span>
                      <span className="font-medium">
                        {formatarMoeda(orcamento.extras)}
                      </span>
                    </div>
                    <div className="mt-1 ml-3 space-y-0.5 text-xs text-gray-400">
                      {orcamento.detalhesExtras.map((e) => (
                        <div key={e}>{e}</div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-bold text-[var(--color-dark)]">
                      Total estimado
                    </span>
                    <span className="text-xl font-extrabold text-[var(--color-brand)]">
                      {formatarMoeda(orcamento.total)}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[11px] leading-relaxed text-gray-400">
                Orcamento estimado com base em distancia, tempo e volume. A
                confirmacao final do valor e feita via WhatsApp apos avaliacao
                dos detalhes.
              </p>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded bg-green-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Enviar orcamento no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
