export interface Moveis {
  geladeira: number;
  sofa: number;
  guardaRoupa: number;
  camaBox: number;
  mesa: number;
  maquinaLavar: number;
  estante: number;
  cadeiras: number;
  caixas: number;
}

export interface OrcamentoInput {
  tipoServico: "frete-simples" | "mudanca-residencial" | "mudanca-comercial";
  tipoTrajeto: "urbana" | "longa-distancia";
  distanciaKm: number;
  tipoImovel: "kitnet" | "apartamento" | "casa";
  moveis: Moveis;
  escadaOrigem: boolean;
  escadaDestino: boolean;
  ajudanteExtra: boolean;
  embalagem: boolean;
  desmontagemMontagem: boolean;
  dataServico: string;
}

export interface OrcamentoDetalhado {
  baseFixa: number;
  diarias: number;
  valorDiarias: number;
  valorKm: number;
  taxaKm: number;
  totalMoveis: number;
  detalheMoveis: {
    grandes: { quantidade: number; valor: number };
    medios: { quantidade: number; valor: number };
    pequenos: { quantidade: number; valor: number };
  };
  taxaApartamento: number;
  escadas: number;
  extras: number;
  detalhesExtras: string[];
  total: number;
}

const PRECOS = {
  baseFixa: 150,
  diaria: 400,
  kmUrbana: 4.3,
  kmLongaDistancia: 3.5,
  movelGrande: 40,
  movelMedio: 25,
  movelPequeno: 10,
  escada: 50,
  ajudanteExtra: 80,
  embalagem: 120,
  desmontagemMontagem: 100,
  apartamento: 50,
} as const;

export function calcularOrcamento(input: OrcamentoInput): OrcamentoDetalhado {
  const isFreteSimples = input.tipoServico === "frete-simples";

  // Frete simples: taxa mínima R$150, sem diárias
  // Mudança residencial/comercial: diária R$400, sem base fixa
  const baseFixa = isFreteSimples ? PRECOS.baseFixa : 0;

  // Móveis grandes
  const grandes =
    input.moveis.geladeira +
    input.moveis.sofa +
    input.moveis.guardaRoupa +
    input.moveis.camaBox;

  // Móveis médios
  const medios =
    input.moveis.mesa +
    input.moveis.maquinaLavar +
    input.moveis.estante;

  // Móveis pequenos
  const pequenos = input.moveis.cadeiras + input.moveis.caixas;

  const totalItens = grandes + medios + pequenos;

  // Diárias (somente para mudanças)
  let diarias = 0;
  let valorDiarias = 0;
  if (!isFreteSimples) {
    diarias = input.distanciaKm <= 30 && totalItens <= 10 ? 1 : 2;
    valorDiarias = diarias * PRECOS.diaria;
  }

  // Km
  const taxaKm =
    input.tipoTrajeto === "urbana"
      ? PRECOS.kmUrbana
      : PRECOS.kmLongaDistancia;
  const valorKm = input.distanciaKm * taxaKm;

  // Móveis
  const valorGrandes = grandes * PRECOS.movelGrande;
  const valorMedios = medios * PRECOS.movelMedio;
  const valorPequenos = pequenos * PRECOS.movelPequeno;
  const totalMoveis = valorGrandes + valorMedios + valorPequenos;

  // Taxa apartamento
  const taxaApartamento = input.tipoImovel === "apartamento" ? PRECOS.apartamento : 0;

  // Escadas
  let escadas = 0;
  if (input.escadaOrigem) escadas += PRECOS.escada;
  if (input.escadaDestino) escadas += PRECOS.escada;

  // Extras
  let extras = 0;
  const detalhesExtras: string[] = [];
  if (input.ajudanteExtra) {
    extras += PRECOS.ajudanteExtra;
    detalhesExtras.push(`Ajudante extra: R$ ${PRECOS.ajudanteExtra}`);
  }
  if (input.embalagem) {
    extras += PRECOS.embalagem;
    detalhesExtras.push(`Embalagem: R$ ${PRECOS.embalagem}`);
  }
  if (input.desmontagemMontagem) {
    extras += PRECOS.desmontagemMontagem;
    detalhesExtras.push(
      `Desmontagem/montagem: R$ ${PRECOS.desmontagemMontagem}`
    );
  }

  const total =
    baseFixa + valorDiarias + valorKm + totalMoveis + taxaApartamento + escadas + extras;

  return {
    baseFixa,
    diarias,
    valorDiarias,
    valorKm,
    taxaKm,
    totalMoveis,
    detalheMoveis: {
      grandes: { quantidade: grandes, valor: valorGrandes },
      medios: { quantidade: medios, valor: valorMedios },
      pequenos: { quantidade: pequenos, valor: valorPequenos },
    },
    taxaApartamento,
    escadas,
    extras,
    detalhesExtras,
    total,
  };
}

export function formatarMoeda(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function gerarMensagemWhatsApp(
  input: OrcamentoInput,
  orcamento: OrcamentoDetalhado
): string {
  const tipoServicoLabel: Record<string, string> = {
    "frete-simples": "Frete Simples",
    "mudanca-residencial": "Mudanca Residencial",
    "mudanca-comercial": "Mudanca Comercial",
  };
  const tipoTrajetoLabel: Record<string, string> = {
    urbana: "Mudanca Urbana",
    "longa-distancia": "Viagem / Longa Distancia",
  };
  const tipoImovelLabel: Record<string, string> = {
    kitnet: "Kitnet",
    apartamento: "Apartamento",
    casa: "Casa",
  };

  const moveisLista: string[] = [];
  if (input.moveis.geladeira)
    moveisLista.push(`Geladeira: ${input.moveis.geladeira}`);
  if (input.moveis.sofa) moveisLista.push(`Sofa: ${input.moveis.sofa}`);
  if (input.moveis.guardaRoupa)
    moveisLista.push(`Guarda-roupa: ${input.moveis.guardaRoupa}`);
  if (input.moveis.camaBox)
    moveisLista.push(`Cama box: ${input.moveis.camaBox}`);
  if (input.moveis.mesa) moveisLista.push(`Mesa: ${input.moveis.mesa}`);
  if (input.moveis.maquinaLavar)
    moveisLista.push(`Maq. de lavar: ${input.moveis.maquinaLavar}`);
  if (input.moveis.estante)
    moveisLista.push(`Estante: ${input.moveis.estante}`);
  if (input.moveis.cadeiras)
    moveisLista.push(`Cadeiras: ${input.moveis.cadeiras}`);
  if (input.moveis.caixas)
    moveisLista.push(`Caixas: ${input.moveis.caixas}`);

  const extras: string[] = [];
  if (input.ajudanteExtra) extras.push("Ajudante extra");
  if (input.embalagem) extras.push("Embalagem");
  if (input.desmontagemMontagem) extras.push("Desmontagem/montagem");

  const msg = `Ola! Gostaria de um orcamento:

*Tipo de servico:* ${tipoServicoLabel[input.tipoServico]}
*Trajeto:* ${tipoTrajetoLabel[input.tipoTrajeto]}
*Distancia:* ${input.distanciaKm} km
*Tipo de imovel:* ${tipoImovelLabel[input.tipoImovel]}
*Moveis:* ${moveisLista.length > 0 ? moveisLista.join(", ") : "Nenhum"}
*Escada na origem:* ${input.escadaOrigem ? "Sim" : "Nao"}
*Escada no destino:* ${input.escadaDestino ? "Sim" : "Nao"}
*Extras:* ${extras.length > 0 ? extras.join(", ") : "Nenhum"}
*Data:* ${input.dataServico || "A definir"}

*Valor estimado: ${formatarMoeda(orcamento.total)}*`;

  return msg;
}
