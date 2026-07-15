---
title: Gumawa ng Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generate Logo SVG

Ang kakayahan na **Generate Logo SVG** ay nagpapahintulot sa Theme Builder na gumawa at mag-embed ng custom logo SVG nang direkta sa iyong WordPress site, kasama ang awtomatikong *namespace-safe sanitisation*.

## Overview {#overview}

Ang kakayahang ito ay gumagawa ng *scalable vector graphics* (SVG) na logo batay sa *branding direction* at *design preferences* ng iyong site. Ang mga nabuong SVG ay awtomatikong *sanitise* upang matiyak na ligtas itong gamitin sa WordPress habang pinapanatili ang visual integrity.

## Parameters {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Ang pangalan ng site na gagamitin sa paggawa ng logo |
| `style` | string | Yes | Ang *design style* (hal., "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Array ng hex color codes na gagamitin sa logo (hal., `["#678233", "#ffffff"]`) |
| `width` | number | No | Lapad ng SVG sa pixels (default: 200) |
| `height` | number | No | Taas ng SVG sa pixels (default: 200) |
| `include_text` | boolean | No | Kung isasama ba ang pangalan ng site bilang text sa logo (default: true) |

## Output Format {#output-format}

Ang kakayahan ay nagbabalik ng isang SVG string na may ganitong istraktura:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisation Behaviour {#svg-sanitisation-behaviour}

Ang mga nabuong SVG ay sumasailalim sa awtomatikong *namespace-safe sanitisation* upang:

- **Tanggalin ang mga hindi ligtas na attributes** — tinatanggal nito ang mga *event handlers*, *scripts*, at mga posibleng mapanganib na *attributes*.
- **Panatilihin ang mga namespaces** — pinapanatili nito ang SVG namespaces (xmlns, xlink) para sa tamang pag-render.
- **I-validate ang istraktura** — sinisiguro nito na ang SVG ay sumusunod sa W3C standards.
- **I-encode ang mga entities** — tama nitong iniiwasan ang mga *special characters* sa text content.
- **Tanggalin ang mga external references** — tinatanggal nito ang mga *external stylesheets* at *image references*.

Tinitiyak nito na ligtas i-embed ang SVG nang direkta sa WordPress nang hindi na kailangan ng dagdag na *sanitisation*.

## Usage Example {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Result:**
Ang kakayahan ay lumilikha ng isang SVG logo na:
- Naglalaman ng pangalan ng site na "CloudSync"
- Gumagamit ng tinukoy na kulay na asul at puti
- Sumusunod sa modernong *design principles*
- Awtomatikong *sanitised* at handa nang gamitin

## Integration with Theme Builder {#integration-with-theme-builder}

Kapag ginagamit ang *design-direction selection* ng Theme Builder, ang Generate Logo SVG ability:

1. Sinusuri ang iyong *design direction* at *color palette*.
2. Gumagawa ng custom SVG logo na tumutugma sa iyong mga kagustuhan.
3. Awtomatikong ini-embed ang logo sa *header/branding area* ng iyong site.
4. Iniimbak ang SVG bilang custom logo sa WordPress media.

## Best Practices {#best-practices}

- **Magbigay ng malinaw na *style preferences*** — ilarawan ang *design style* na gusto mo (modern, classic, playful, atbp.).
- **Tukuyin ang mga kulay** — isama ang mga kulay ng iyong *brand* para sa pagkakapare-pareho.
- **Subukan ang pag-render** — i-verify na tama ang pagpapakita ng logo sa iba't ibang *screen sizes*.
- **Mag-customize pa** — gamitin ang mga *logo customization tools* ng WordPress para i-adjust ang laki at paglalagay.

## Limitations {#limitations}

- Ang mga SVG logo ay ginagawa bilang *static graphics* (hindi animated).
- Ang mga kumplikadong logo na may maraming elemento ay maaaring mangailangan ng *manual refinement*.
- Hindi sinusuportahan ang custom fonts; gumagamit ang text ng *system fonts*.
- Ang napakalaki o napakaliit na dimensyon ay maaaring makaapekto sa kalidad.

## Related Abilities {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — tingnan ang *color contrast* para sa *accessibility*.
- [Create Menu](./create-menu.md) — gumawa ng *navigation menus* para sa iyong site
