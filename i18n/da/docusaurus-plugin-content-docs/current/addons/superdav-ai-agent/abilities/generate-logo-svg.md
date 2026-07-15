---
title: Generér logo-SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generér logo-SVG

Funktionen **Generér logo-SVG** gør det muligt for Theme Builder at oprette og indlejre brugerdefinerede logo-SVG'er direkte på dit WordPress-websted med automatisk namespace-sikker sanitering.

## Oversigt {#overview}

Denne funktion genererer skalerbare vektorgrafiklogoer (SVG) baseret på dit websteds brandingretning og designpræferencer. De genererede SVG'er saniteres automatisk for at sikre, at de er sikre at bruge i WordPress, samtidig med at den visuelle integritet bevares.

## Parametre {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Navnet på det websted, som logoet skal genereres til |
| `style` | string | Yes | Designstilen (f.eks. "moderne", "klassisk", "minimalistisk", "legende") |
| `colors` | array | No | Array af hex-farvekoder, der skal bruges i logoet (f.eks. `["#678233", "#ffffff"]`) |
| `width` | number | No | SVG-bredde i pixels (standard: 200) |
| `height` | number | No | SVG-højde i pixels (standard: 200) |
| `include_text` | boolean | No | Om webstedets navn skal inkluderes som tekst i logoet (standard: true) |

## Outputformat {#output-format}

Funktionen returnerer en SVG-streng med følgende struktur:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG-saniteringsadfærd {#svg-sanitisation-behaviour}

De genererede SVG'er gennemgår automatisk namespace-sikker sanitering for at:

- **Fjerne usikre attributter** — fjerner event handlers, scripts og potentielt farlige attributter
- **Bevare namespaces** — opretholder SVG-namespaces (xmlns, xlink) for korrekt rendering
- **Validere struktur** — sikrer, at SVG'en overholder W3C-standarder
- **Kode entities** — escaper specialtegn korrekt i tekstindhold
- **Fjerne eksterne referencer** — fjerner eksterne stylesheets og billedreferencer

Dette sikrer, at SVG'en er sikker at indlejre direkte i WordPress uden at kræve yderligere sanitering.

## Brugseksempel {#usage-example}

**Prompt:**
```
Generér et moderne logo til min tech-startup kaldet "CloudSync" med blå og hvide farver.
```

**Resultat:**
Funktionen opretter et SVG-logo, der:
- Inkorporerer webstedsnavnet "CloudSync"
- Bruger det angivne blå og hvide farveskema
- Følger moderne designprincipper
- Er automatisk saniteret og klar til brug

## Integration med Theme Builder {#integration-with-theme-builder}

Når du bruger Theme Builder's valg af designretning, vil funktionen Generér logo-SVG:

1. Analysere din designretning og farvepalet
2. Generere et brugerdefineret SVG-logo, der matcher dine præferencer
3. Automatisk indlejre logoet i dit websteds header-/brandingområde
4. Gemme SVG'en som et brugerdefineret logo i WordPress-medier

## Bedste praksis {#best-practices}

- **Angiv klare stilpræferencer** — beskriv den designstil, du ønsker (moderne, klassisk, legende osv.)
- **Angiv farver** — inkluder dine brandfarver for konsistens
- **Test rendering** — kontrollér, at logoet vises korrekt på tværs af forskellige skærmstørrelser
- **Tilpas yderligere** — brug WordPress's værktøjer til logotilpasning til at justere størrelse og placering

## Begrænsninger {#limitations}

- SVG-logoer genereres som statisk grafik (ikke animeret)
- Komplekse logoer med mange elementer kan kræve manuel finpudsning
- Brugerdefinerede skrifttyper understøttes ikke; tekst bruger systemskrifttyper
- Meget store eller meget små dimensioner kan påvirke kvaliteten

## Relaterede funktioner {#related-abilities}

- [Valider paletkontrast](./validate-palette-contrast.md) — kontrollér farvekontrast for tilgængelighed
- [Opret menu](./create-menu.md) — opret navigationsmenuer til dit websted
