---
title: Validar contraste da paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validar Contraste da Paleta {#validate-palette-contrast}

A capacidade **Validate Palette Contrast** verifica pares de cores na sua paleta de design quanto à conformidade com WCAG (Web Content Accessibility Guidelines) antes de os aplicar ao seu tema.

## Visão geral {#overview}

Esta capacidade garante que o esquema de cores do seu site cumpre as normas de acessibilidade ao validar as proporções de contraste entre texto e cores de fundo. Ajuda a prevenir combinações de cores que possam ser difíceis de ler para utilizadores com deficiências visuais.

## Formato de entrada {#input-format}

A capacidade aceita uma paleta de cores como entrada:

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
|-----------|------|----------|-------------|
| `colors` | array | Sim | Array de objetos de cor com propriedades `name` e `hex` |
| `wcag_level` | string | Não | Nível de conformidade WCAG: "A", "AA" (predefinição), ou "AAA" |
| `pairs_to_check` | array | Não | Pares de cores específicos a validar (por exemplo, `["primary-text", "background-text"]`) |

## Níveis WCAG verificados {#wcag-levels-checked}

A capacidade valida as proporções de contraste de acordo com as normas WCAG:

| Nível | Texto normal | Texto grande | Proporção mínima |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Texto normal** — texto menor que 18pt (ou 14pt em negrito)
- **Texto grande** — texto de 18pt ou maior (ou 14pt em negrito ou maior)

## Esquema de saída {#output-schema}

A capacidade devolve um relatório de validação detalhado:

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

### Campos de saída {#output-fields}

| Campo | Tipo | Descrição |
|-------|------|-------------|
| `compliant` | boolean | Se toda a paleta cumpre o nível WCAG especificado |
| `wcag_level` | string | O nível WCAG que foi verificado |
| `pairs` | array | Resultados detalhados para cada par de cores |
| `contrast_ratio` | number | A proporção de contraste calculada (1:1 a 21:1) |
| `status` | string | "pass" ou "fail" para cada par |
| `recommendations` | array | Sugestões para melhorar pares que falham |

## Exemplo de utilização {#usage-example}

**Prompt:**
```
Verifique se a minha paleta de cores cumpre as normas WCAG AA. Tenho a cor primária #678233, cor de texto #ffffff e fundo #f5f5f5.
```

**Resultado:**
A capacidade valida todas as combinações de cores e devolve:
- ✅ Primária + Texto: proporção de 5.2:1 (passa WCAG AA)
- ✅ Fundo + Texto: proporção de 12.1:1 (passa WCAG AAA)
- Geral: Em conformidade com WCAG AA

## Integração com Theme Builder {#integration-with-theme-builder}

Ao usar a seleção de direção de design do Theme Builder, a capacidade Validate Palette Contrast:

1. Analisa a sua paleta de cores selecionada
2. Verifica todas as combinações texto-fundo
3. Valida em relação ao nível WCAG escolhido
4. Fornece recomendações para pares não conformes
5. Impede a aplicação de esquemas de cores inacessíveis

## Boas práticas {#best-practices}

- **Comece pelo nível AA** — WCAG AA é a norma para a maioria dos sites
- **Teste antes de aplicar** — valide a sua paleta antes de se comprometer com um design
- **Verifique todas as combinações** — garanta que texto, links e elementos de UI cumprem todos as normas
- **Considere as preferências dos utilizadores** — alguns utilizadores podem ter sensibilidade adicional à cor
- **Use verificadores de contraste** — combine esta capacidade com ferramentas do navegador para verificação

## Pares que falham e recomendações {#failing-pairs-and-recommendations}

Se um par de cores falhar a validação, a capacidade fornece recomendações:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## Capacidades relacionadas {#related-abilities}

- [Gerar Logo SVG](./generate-logo-svg.md) — crie logótipos com a sua paleta de cores validada
- [Criar Menu](./create-menu.md) — construa navegação com cores acessíveis
