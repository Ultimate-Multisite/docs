---
title: Validar Contraste de Paleta
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validar el Contraste de la Paleta

La función **Validate Palette Contrast** comprueba los pares de colores de tu paleta de diseño para asegurar el cumplimiento de WCAG (Pautas de Accesibilidad al Contenido Web) antes de aplicarlos a tu tema.

## Resumen {#overview}

Esta función garantiza que el esquema de color de tu sitio cumpla con los estándares de accesibilidad al validar las proporciones de contraste entre los colores de texto y fondo. Esto ayuda a prevenir combinaciones de colores que podrían resultar difíciles de leer para usuarios con discapacidades visuales.

## Formato de Entrada {#input-format}

La función acepta una paleta de colores como entrada:

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

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|----------|-------------|
| `colors` | array | Sí | Array de objetos de color con propiedades `name` y `hex` |
| `wcag_level` | string | No | Nivel de cumplimiento WCAG: "A", "AA" (por defecto), o "AAA" |
| `pairs_to_check` | array | No | Pares de colores específicos a validar (ej.: `["primary-text", "background-text"]`) |

## Niveles WCAG Comprobados {#wcag-levels-checked}

La función valida las proporciones de contraste según los estándares WCAG:

| Nivel | Texto Normal | Texto Grande | Proporción Mínima |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Texto Normal** — texto más pequeño que 18pt (o 14pt en negrita)
- **Texto Grande** — texto de 18pt o más (o 14pt en negrita o más)

## Esquema de Salida {#output-schema}

La función devuelve un informe de validación detallado:

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

### Campos de Salida {#output-fields}

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `compliant` | boolean | Indica si toda la paleta cumple con el nivel WCAG especificado |
| `wcag_level` | string | El nivel WCAG que se comprobó |
| `pairs` | array | Resultados detallados para cada par de colores |
| `contrast_ratio` | number | La proporción de contraste calculada (de 1:1 a 21:1) |
| `status` | string | "pass" o "fail" para cada par |
| `recommendations` | array | Sugerencias para mejorar los pares que fallan |

## Ejemplo de Uso {#usage-example}

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Resultado:**
La función valida todas las combinaciones de color y devuelve:
- ✅ Primario + Texto: proporción de 5.2:1 (cumple con WCAG AA)
- ✅ Fondo + Texto: proporción de 12.1:1 (cumple con WCAG AAA)
- General: Cumple con WCAG AA

## Integración con Theme Builder {#integration-with-theme-builder}

Al usar la selección de dirección de diseño de Theme Builder, la función Validate Palette Contrast:

1. Analiza la paleta de colores seleccionada
2. Comprueba todas las combinaciones de texto y fondo
3. Valida contra el nivel WCAG elegido
4. Proporciona recomendaciones para los pares no conformes
5. Evita aplicar esquemas de color inaccesibles

## Mejores Prácticas {#best-practices}

- **Empieza con el nivel AA** — WCAG AA es el estándar para la mayoría de los sitios web
- **Prueba antes de aplicar** — valida tu paleta antes de comprometerte con un diseño
- **Comprueba todas las combinaciones** — asegúrate de que el texto, los enlaces y los elementos de la interfaz cumplan con los estándares
- **Considera las preferencias del usuario** — algunos usuarios pueden tener sensibilidad adicional al color
- **Usa verificadores de contraste** — combina esta función con herramientas del navegador para verificarlo

## Pares Fallidos y Recomendaciones {#failing-pairs-and-recommendations}

Si un par de colores falla la validación, la función proporciona recomendaciones:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Aclara el color del texto a #ffffff (la proporción sería de 5.2:1)",
    "Oscurece el color de fondo a #556b2f (la proporción sería de 4.8:1)",
    "Usa un color primario diferente como #4a6b1f (la proporción sería de 6.1:1)"
  ]
}
```

## Funciones Relacionadas {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — crea logos con tu paleta de colores validada
- [Create Menu](./create-menu.md) — construye la navegación con colores accesibles
