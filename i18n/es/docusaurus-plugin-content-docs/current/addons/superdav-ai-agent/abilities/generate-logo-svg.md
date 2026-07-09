---
title: Generar SVG de logotipo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generar SVG de Logo {#generate-logo-svg}

La funcionalidad **Generar SVG de Logo** permite a Theme Builder crear e incrustar SVGs de logo personalizados directamente en su sitio de WordPress con una sanitización automática segura de nombres de espacio.

## Resumen {#overview}

Esta funcionalidad genera logos vectoriales escalables (SVG) basados en la dirección de marca y las preferencias de diseño de su sitio. Los SVGs generados se sanitizan automáticamente para garantizar que sean seguros de usar en WordPress, manteniendo al mismo tiempo la integridad visual.

## Parámetros {#parameters}

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|----------|-------------|
| `site_name` | string | Sí | El nombre del sitio para el que se generará el logo |
| `style` | string | Sí | El estilo de diseño (ej., "moderno", "clásico", "minimalista", "juguetón") |
| `colors` | array | No | Array de códigos de color hexadecimales para usar en el logo (ej., `["#678233", "#ffffff"]`) |
| `width` | number | No | Ancho del SVG en píxeles (por defecto: 200) |
| `height` | number | No | Alto del SVG en píxeles (por defecto: 200) |
| `include_text` | boolean | No | Si se debe incluir el nombre del sitio como texto en el logo (por defecto: true) |

## Formato de Salida {#output-format}

La funcionalidad devuelve una cadena SVG con la siguiente estructura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamiento de Sanitización SVG {#svg-sanitisation-behaviour}

Los SVGs generados se someten a una sanitización automática segura de nombres de espacio para:

- **Eliminar atributos inseguros** — elimina manejadores de eventos, scripts y atributos potencialmente peligrosos
- **Conservar nombres de espacio** — mantiene los nombres de espacio SVG (xmlns, xlink) para un renderizado adecuado
- **Validar estructura** — asegura que el SVG cumple con los estándares W3C
- **Codificar entidades** — escapa correctamente caracteres especiales en el contenido de texto
- **Eliminar referencias externas** — elimina hojas de estilo e imágenes externas

Esto garantiza que el SVG sea seguro para incrustar directamente en WordPress sin requerir sanitización adicional.

## Ejemplo de Uso {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Resultado:**
La funcionalidad crea un logo SVG que:
- Incorpora el nombre del sitio "CloudSync"
- Utiliza la combinación de colores azul y blanco especificada
- Sigue principios de diseño modernos
- Está automáticamente sanitizado y listo para usar

## Integración con Theme Builder {#integration-with-theme-builder}

Al usar la selección de dirección de diseño de Theme Builder, la funcionalidad Generar SVG de Logo:

1. Analiza su dirección de diseño y paleta de colores
2. Genera un logo SVG personalizado que coincide con sus preferencias
3. Incrusta automáticamente el logo en el área de cabecera/marca de su sitio
4. Almacena el SVG como un logo personalizado en la biblioteca de medios de WordPress

## Mejores Prácticas {#best-practices}

- **Proporcione preferencias de estilo claras** — describa el estilo de diseño que desea (moderno, clásico, juguetón, etc.)
- **Especifique colores** — incluya los colores de su marca para mantener la coherencia
- **Pruebe el renderizado** — verifique que el logo se muestre correctamente en diferentes tamaños de pantalla
- **Personalice más** — use las herramientas de personalización de logos de WordPress para ajustar el tamaño y la ubicación

## Limitaciones {#limitations}

- Los logos SVG se generan como gráficos estáticos (no animados)
- Los logos complejos con muchos elementos pueden requerir un ajuste manual
- No se admiten fuentes personalizadas; el texto utiliza fuentes del sistema
- Dimensiones muy grandes o muy pequeñas pueden afectar la calidad

## Funcionalidades Relacionadas {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — compruebe el contraste de color para la accesibilidad
- [Create Menu](./create-menu.md) — cree menús de navegación para su sitio
