---
title: Validar o contraste da paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validar o contraste da paleta {#validate-palette-contrast}

A capacidade **Validate Palette Contrast** comproba pares de cores na túa paleta de deseño para verificar o cumprimento das WCAG (Web Content Accessibility Guidelines) antes de aplicalos ao teu tema.

## Visión xeral {#overview}

Esta capacidade garante que o esquema de cores do teu sitio cumpra os estándares de accesibilidade validando as relacións de contraste entre as cores do texto e do fondo. Axuda a evitar combinacións de cores que poderían resultar difíciles de ler para usuarios con discapacidades visuais.

## Formato de entrada {#input-format}

A capacidade acepta unha paleta de cores como entrada:

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

### Parámetros {#parameters}

| Parámetro | Tipo | Obrigatorio | Descrición |
|-----------|------|----------|-------------|
| `colors` | array | Si | Array de obxectos de cor con propiedades `name` e `hex` |
| `wcag_level` | string | Non | Nivel de cumprimento WCAG: "A", "AA" (predeterminado) ou "AAA" |
| `pairs_to_check` | array | Non | Pares de cores específicos para validar (p. ex., `["primary-text", "background-text"]`) |

## Niveis WCAG comprobados {#wcag-levels-checked}

A capacidade valida as relacións de contraste segundo os estándares WCAG:

| Nivel | Texto normal | Texto grande | Relación mínima |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Texto normal** — texto máis pequeno ca 18pt (ou 14pt en negra)
- **Texto grande** — texto de 18pt ou máis (ou 14pt en negra ou máis grande)

## Esquema de saída {#output-schema}

A capacidade devolve un informe detallado de validación:

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

| Campo | Tipo | Descrición |
|-------|------|-------------|
| `compliant` | boolean | Se toda a paleta cumpre o nivel WCAG especificado |
| `wcag_level` | string | O nivel WCAG que se comprobou |
| `pairs` | array | Resultados detallados para cada par de cores |
| `contrast_ratio` | number | A relación de contraste calculada (1:1 a 21:1) |
| `status` | string | "pass" ou "fail" para cada par |
| `recommendations` | array | Suxestións para mellorar os pares que fallan |

## Exemplo de uso {#usage-example}

**Prompt:**
```
Comproba se a miña paleta de cores cumpre os estándares WCAG AA. Teño a cor primaria #678233, a cor do texto #ffffff e o fondo #f5f5f5.
```

**Resultado:**
A capacidade valida todas as combinacións de cores e devolve:
- ✅ Primaria + Texto: relación 5.2:1 (cumpre WCAG AA)
- ✅ Fondo + Texto: relación 12.1:1 (cumpre WCAG AAA)
- Global: cumpre WCAG AA

## Integración con Theme Builder {#integration-with-theme-builder}

Ao usar a selección de dirección de deseño de Theme Builder, a capacidade Validate Palette Contrast:

1. Analiza a paleta de cores seleccionada
2. Comproba todas as combinacións texto-fondo
3. Valida contra o nivel WCAG escollido
4. Proporciona recomendacións para pares non conformes
5. Impide aplicar esquemas de cores inaccesibles

## Boas prácticas {#best-practices}

- **Comeza co nivel AA** — WCAG AA é o estándar para a maioría dos sitios web
- **Proba antes de aplicar** — valida a túa paleta antes de comprometerte cun deseño
- **Comproba todas as combinacións** — asegúrate de que texto, ligazóns e elementos da UI cumpran todos os estándares
- **Considera as preferencias dos usuarios** — algúns usuarios poden ter sensibilidade adicional ás cores
- **Usa comprobadores de contraste** — combina esta capacidade con ferramentas do navegador para a verificación

## Pares que fallan e recomendacións {#failing-pairs-and-recommendations}

Se un par de cores falla a validación, a capacidade proporciona recomendacións:

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

- [Xerar Logo SVG](./generate-logo-svg.md) — crea logotipos coa túa paleta de cores validada
- [Crear menú](./create-menu.md) — constrúe a navegación con cores accesibles
