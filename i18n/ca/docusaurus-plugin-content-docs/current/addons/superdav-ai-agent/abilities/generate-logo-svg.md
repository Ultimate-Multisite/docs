---
title: Generar SVG de logo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generar Logo SVG

La capacidad **Generar Logo SVG** te permite al Theme Builder crear e incrustar archivos SVG de logo personalizados directamente en tu sitio de WordPress con una saneación automática y segura para el *namespace*.

## Resumen {#overview}

Esta funcionalidad genera gráficos vectoriales escalables (SVG) basados en la dirección de marca y las preferencias de diseño de tu sitio. Los SVGs generados se limpian automáticamente para asegurar que sean seguros para usar en WordPress, manteniendo al mismo tiempo su integridad visual.

## Parámetros {#parameters}

| Parámetro | Tipo | Requerido | Descripción |
|---|---|---|---|
| `site_name` | string | Sí | El nombre del sitio para el cual se generará el logo |
| `style` | string | Sí | El estilo de diseño (ej. "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Arreglo de códigos de color hexadecimales a usar en el logo (ej. `["#678233", "#ffffff"]`) |
| `width` | number | No | Ancho del SVG en píxeles (predeterminado: 200) |
| `height` | number | No | Alto del SVG en píxeles (predeterminado: 200) |
| `include_text` | boolean | No | Si incluir el nombre del sitio como texto en el logo (predeterminado: true) |

## Formato de Salida {#output-format}

La capacidad devuelve una cadena SVG con la siguiente estructura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamiento de Saneación SVG {#svg-sanitisation-behaviour}

Los SVGs generados se someten a una saneación automática y segura para el *namespace* con el fin de:

- **Eliminar atributos inseguros** — elimina manejadores de eventos, scripts y atributos potencialmente peligrosos
- **Preservar namespaces** — mantiene los namespaces SVG (xmlns, xlink) para un renderització correcta
- **Validar la estructura** — assegura que l'SVG sigui compatible amb els estàndards W3C
- **Codificar entitats** — escapa adequadament els caràcters especials del contingut de text
- **Eliminar referències externes** — elimina les feuilles de estilatge i les referències d'imatges externes

Això assegura que l'SVG és segur per a ser incorporat directament en WordPress sense necessitar saneig addicional.

## Exemple d'ús {#usage-example}

**Prompt:**
```
Genera un logo modern per la meva startup de tecnologia anomenada "CloudSync" utilitzant colors blau i blanc.
```

**Resultat:**
La possibilitat crea un logo SVG que:
- Incorpora el nom del lloc web "CloudSync"
- Utilitza el esquema de colors blau i blanc especificat
- Segueix els principis de disseny moderns
- És automàticament sanejat i està preparat per a ser utilitzat

## Integració amb Theme Builder {#integration-with-theme-builder}

Quan s'utilitza la selecció de direcció de disseny del Theme Builder, la possibilitat Generar SVG Logo:

1. Analitza la teva direcció de disseny i paleta de colors
2. Genera un logo SVG personal que coincideix amb els teus preferències
3. Incorpora automàticament el logo a l'àrea d'encapçament/branding del teu lloc web
4. Guarda l'SVG com un logo personal en els mèdia de WordPress

## Bones pràctiques {#best-practices}

- **Define preferències de estil clau** — descriu el estil de disseny que vols (modern, clàssic, juguet, etc.)
- **Especifica colors** — inclou els colors de la marca per mantenir la consistència
- **Prova la visualització** — verifica que el logo es mostra correctament en diferents dimensions d'esdeveniment
- **Personalitza més** — utilitza les eines de personalització del logo de WordPress per ajustar el mida i la ubicació

## Limitacions {#limitations}

- Els logos SVG es generen com a gràfics estàtics (no animats)
- Els logos complexes amb molts elements poden requerir refinament manual
- No es suporten fonts personalitzades; el text utilitza les fonts del sistema
- Dimensions molt grans o molt petites poden afectar la qualitat

## Capacitats Relacionades {#related-abilities}

- [Validar Contrast de Paleta](./validate-palette-contrast.md) — verifica el contrast de colors per a l'accessibilitat
- [Crear Menú](./create-menu.md) — crea menús de navegació per al teu site
