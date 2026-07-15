---
title: Genereer Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Genereer Logo SVG

Die vermoë **Generate Logo SVG** laat Theme Builder toe om aangepaste logo SVG's te skep en direk in u WordPress-webwerf in te bed met outomatiese namespace-veilige sanitisering.

## Oorsig {#overview}

Hierdie vermoë genereer skaalbare vektorgrafika (SVG) logo's gebaseer op u webwerf se handelsmerkbepaling en ontwerpvoorkeure. Die gegenereerde SVG's word outomaties gesanitiseer om te verseker dat dit veilig is vir gebruik in WordPress terwyl die visuele integriteit behoue bly.

## Parameters {#parameters}

| Parameter | Tipe | Vereis | Beskrywing |
|-----------|------|----------|-------------|
| `site_name` | string | Ja | Die naam van die webwerf waarvoor die logo gegenereer moet word |
| `style` | string | Ja | Die ontwerpstyl (bv. "modern", "klassiek", "minimalisties", "speels") |
| `colors` | array | Nee | 'n Array van hex-kleurkoedes om in die logo te gebruik (bv. `["#678233", "#ffffff"]`) |
| `width` | number | Nee | SVG-breedte in pixels (standaard: 200) |
| `height` | number | Nee | SVG-hoogte in pixels (standaard: 200) |
| `include_text` | boolean | Nee | Of die webwerf se naam as teks in die logo ingesluit moet word (standaard: true) |

## Uitvoerformaat {#output-format}

Die vermoë keer 'n SVG-string terug met die volgende struktuur:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisering Gedrag {#svg-sanitisation-behaviour}

Die gegenereerde SVG's ondergaan outomatiese namespace-veilige sanitisering om:

- **Onveilige eienskappe te verwyder** — verwyder gebeurtenisbehandlers, skripte, en moontlik gevaarlike eienskappe
- **Namespaces te behou** — handhaaf SVG namespaces (xmlns, xlink) vir korrekte rendering
- **Struktuur te valideer** — verseker dat die SVG voldoen aan W3C-standaarde
- **Entiteite te kodeer** — spesialek karakters in teksinhoud korrek te ontsnap
- **Eksterne verwysings te verwyder** — verwyder eksterne stylbladsye en beeldverwysings

Dit verseker dat die SVG veilig is om direk in WordPress in te bed sonder dat ekstra sanitisering benodig word.

## Gebruiksvoorbeeld {#usage-example}

**Opdrag:**
```
Genereer 'n moderne logo vir my tegnologie-startup genaamd "CloudSync" met blou en wit kleure.
```

**Resultaat:**
Die vermoë skep 'n SVG-logo wat:
- Die webwerf se naam "CloudSync" insluit
- Die gespesifiseerde blou en wit kleurepalet gebruik
- Moderne ontwerpbeginspeke volg
- Outomaties gesanitiseer en gereed vir gebruik is

## Integrasie met Theme Builder {#integration-with-theme-builder}

Wanneer u Theme Builder se ontwerprigting-keuse gebruik, dan:

1. Analiseer u ontwerprigting en kleurepalet
2. Genereer 'n aangepaste SVG-logo wat by u voorkeure pas
3. Beddie die logo outomaties in u webwerf se kop/handelsmerkbepaling
4. Stoor die SVG as 'n aangepaste logo in WordPress media

## Beste Praktyke {#best-practices}

- **Verskaf duidelike stylvoorkeure** — beskryf die ontwerpstyl wat u wil hê (modern, klassiek, speels, ens.)
- **Spesifiseer kleure** — sluit u handelsmerkkleure in vir konsekwentheid
- **Test rendering** — verifieer dat die logo korrek op verskillende skermgroottes vertoon word
- **Verder aanpas** — gebruik WordPress se logo-aanpasgereedskap om grootte en plasing aan te pas

## Beperkings {#limitations}

- SVG-logo's word as statiese grafika gegenereer (nie geanimeer nie)
- Komplekse logo's met baie elemente mag handmatige verfynings vereis
- Aangepaste lettertipes word nie ondersteun nie; teks gebruik stelsellettertipes
- Baie groot of baie klein dimensies kan die gehalte beïnvloed

## Verwante Verneemings {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — kontras van kleure vir toeganklikheid nagaan
- [Create Menu](./create-menu.md) — navigasie-menu's vir u webwerf skep
