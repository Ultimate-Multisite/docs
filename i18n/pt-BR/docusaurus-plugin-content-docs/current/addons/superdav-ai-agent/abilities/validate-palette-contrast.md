---
title: Validar Contraste da Paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validar Contraste da Paleta {#validate-palette-contrast}

A funcionalidade **Validar Contraste da Paleta** verifica os pares de cores na sua paleta de design em busca de conformidade com as WCAG (Web Content Accessibility Guidelines) antes de aplicá-las ao seu tema.

## Visão Geral {#overview}

Esta funcionalidade garante que o esquema de cores do seu site atenda aos padrões de acessibilidade, validando as razões de contraste entre as cores de texto e fundo. Isso ajuda a evitar combinações de cores que podem ser difíceis de ler para usuários com deficiências visuais.

## Formato de Entrada {#input-format}

A funcionalidade aceita uma paleta de cores como entrada:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parâmetros {#parameters}

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-------------|
| `colors` | array | Sim | Array de objetos de cor com propriedades `name` e `hex` |
| `wcag_level` | string | Não | Nível de conformidade WCAG: "A", "AA" (padrão) ou "AAA" |
| `pairs_to_check` | array | Não | Pares de cores específicos para validar (ex: `["primary-text", "background-text"]`) |

## Níveis WCAG Verificados {#wcag-levels-checked}

A funcionalidade valida as razões de contraste de acordo com os padrões WCAG:

| Nível | Texto Normal | Texto Grande | Razão Mínima |
|-------|--------------|--------------|--------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Texto Normal** — texto menor que 18pt (ou 14pt em negrito)
- **Texto Grande** — texto de 18pt ou maior (ou 14pt em negrito ou maior)

## Schema de Saída {#output-schema}

A funcionalidade retorna um relatório de validação detalhado:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Campos de Saída {#output-fields}

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `compliant` | boolean | Se toda a paleta atende ao nível WCAG especificado |
| `wcag_level` | string | O nível WCAG que foi verificado |
| `pairs` | array | Resultados detalhados para cada par de cores |
| `contrast_ratio` | number | A razão de contraste calculada (1:1 a 21:1) |
| `status` | string | "pass" ou "fail" para cada par |
| `recommendations` | array | Sugestões para melhorar pares que falharam |

## Exemplo de Uso {#usage-example}

**Prompt:**
```
Verifique se minha paleta de cores atende aos padrões WCAG AA. Tenho a cor primária #678233, a cor do texto #ffffff e o fundo #f5f5f5.
```

**Resultado:**
A funcionalidade valida todas as combinações de cores e retorna:
- ✅ Primário + Texto: razão de 5.2:1 (passa WCAG AA)
- ✅ Fundo + Texto: razão de 12.1:1 (passa WCAG AAA)
- Geral: Conforme WCAG AA

## Integração com Theme Builder {#integration-with-theme-builder}

Ao usar a seleção de direção de design do Theme Builder, a funcionalidade Validar Contraste da Paleta:

1. Analisa a paleta de cores selecionada
2. Verifica todas as combinações de texto e fundo
3. Valida em relação ao nível WCAG escolhido
4. Fornece recomendações para pares não conformes
5. Impede a aplicação de esquemas de cores inacessíveis

## Melhores Práticas {#best-practices}

- **Comece pelo nível AA** — WCAG AA é o padrão para a maioria dos sites
- **Teste antes de aplicar** — valide sua paleta antes de se comprometer com um design
- **Verifique todas as combinações** — garanta que texto, links e elementos de UI atendam aos padrões
- **Considere as preferências do usuário** — alguns usuários podem ter sensibilidade adicional a cores
- **Use verificadores de contraste** — combine esta funcionalidade com ferramentas de navegador para verificação

## Pares com Falha e Recomendações {#failing-pairs-and-recommendations}

Se um par de cores falhar na validação, a funcionalidade fornece recomendações:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Clareie a cor do texto para #ffffff (a razão seria de 5.2:1)",
    "Escureça a cor de fundo para #556b2f (a razão seria de 4.8:1)",
    "Use uma cor primária diferente, como #4a6b1f (a razão seria de 6.1:1)"
  ]
}
```

## Funcionalidades Relacionadas {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — crie logos com sua paleta de cores validada
- [Create Menu](./create-menu.md) — construa navegação com cores acessíveis
