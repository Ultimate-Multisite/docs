---
title: Xerar SVG do logotipo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Xerar SVG de logotipo {#generate-logo-svg}

A capacidade **Generate Logo SVG** permite que Theme Builder cree e incorpore SVGs de logotipos personalizados directamente no teu sitio WordPress con saneamento automático seguro para espazos de nomes.

## Visión xeral {#overview}

Esta capacidade xera logotipos en gráficos vectoriais escalables (SVG) baseados na dirección de marca e nas preferencias de deseño do teu sitio. Os SVGs xerados saneanse automaticamente para garantir que son seguros para usar en WordPress mantendo a integridade visual.

## Parámetros {#parameters}

| Parámetro | Tipo | Obrigatorio | Descrición |
|-----------|------|----------|-------------|
| `site_name` | string | Si | O nome do sitio para o que xerar o logotipo |
| `style` | string | Si | O estilo de deseño (por exemplo, "moderno", "clásico", "minimalista", "lúdico") |
| `colors` | array | Non | Matriz de códigos de cor hexadecimais para usar no logotipo (por exemplo, `["#678233", "#ffffff"]`) |
| `width` | number | Non | Largura do SVG en píxeles (predeterminado: 200) |
| `height` | number | Non | Altura do SVG en píxeles (predeterminado: 200) |
| `include_text` | boolean | Non | Se incluír o nome do sitio como texto no logotipo (predeterminado: true) |

## Formato de saída {#output-format}

A capacidade devolve unha cadea SVG coa seguinte estrutura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamento do saneamento SVG {#svg-sanitisation-behaviour}

Os SVGs xerados sométense a un saneamento automático seguro para espazos de nomes para:

- **Eliminar atributos non seguros** — elimina controladores de eventos, scripts e atributos potencialmente perigosos
- **Preservar espazos de nomes** — mantén os espazos de nomes SVG (xmlns, xlink) para unha renderización correcta
- **Validar a estrutura** — garante que o SVG cumpre os estándares do W3C
- **Codificar entidades** — escapa correctamente os caracteres especiais no contido de texto
- **Eliminar referencias externas** — elimina follas de estilo externas e referencias a imaxes

Isto garante que o SVG sexa seguro para incorporalo directamente en WordPress sen requirir saneamento adicional.

## Exemplo de uso {#usage-example}

**Prompt:**
```
Xera un logotipo moderno para a miña startup tecnolóxica chamada "CloudSync" usando cores azul e branca.
```

**Resultado:**
A capacidade crea un logotipo SVG que:
- Incorpora o nome do sitio "CloudSync"
- Usa o esquema de cores azul e branco especificado
- Segue principios de deseño modernos
- Está automaticamente saneado e listo para usar

## Integración con Theme Builder {#integration-with-theme-builder}

Ao usar a selección de dirección de deseño de Theme Builder, a capacidade Generate Logo SVG:

1. Analiza a túa dirección de deseño e paleta de cores
2. Xera un logotipo SVG personalizado que coincide coas túas preferencias
3. Incorpora automaticamente o logotipo na área de cabeceira/marca do teu sitio
4. Almacena o SVG como logotipo personalizado nos medios de WordPress

## Boas prácticas {#best-practices}

- **Proporciona preferencias de estilo claras** — describe o estilo de deseño que queres (moderno, clásico, lúdico, etc.)
- **Especifica cores** — inclúe as cores da túa marca para manter a coherencia
- **Proba a renderización** — verifica que o logotipo se mostra correctamente en distintos tamaños de pantalla
- **Personaliza máis** — usa as ferramentas de personalización de logotipo de WordPress para axustar o tamaño e a colocación

## Limitacións {#limitations}

- Os logotipos SVG xéranse como gráficos estáticos (non animados)
- Os logotipos complexos con moitos elementos poden requirir refinamento manual
- Non se admiten tipos de letra personalizados; o texto usa tipos de letra do sistema
- Dimensións moi grandes ou moi pequenas poden afectar a calidade

## Capacidades relacionadas {#related-abilities}

- [Validar contraste da paleta](./validate-palette-contrast.md) — comprobar o contraste de cores para a accesibilidade
- [Crear menú](./create-menu.md) — crear menús de navegación para o teu sitio
