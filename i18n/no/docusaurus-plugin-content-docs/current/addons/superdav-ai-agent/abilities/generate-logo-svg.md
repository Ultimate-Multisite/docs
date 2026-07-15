---
title: Generer Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generer logo SVG

Funksjonaliteten **Generer logo SVG** lar Theme Builder lage og innebygge tilpassede logo-SVG-er direkte i WordPress-nettstedet ditt, med automatisk, trygg sanering av navnerommet.

## Oversikt {#overview}

Denne funksjonaliteten genererer skalerbare vektorbaserte grafikk-logoer (SVG) basert på nettstedets merkevareretning og designpreferanser. De genererte SVG-ene saneres automatisk for å sikre at de er trygge å bruke i WordPress, samtidig som den visuelle integriteten opprettholdes.

## Parametere {#parameters}

| Parameter | Type | Påkrevd | Beskrivelse |
|-----------|------|----------|-------------|
| `site_name` | string | Ja | Navnet på nettstedet logoen skal genereres for |
| `style` | string | Ja | Designstilen (f.eks. "moderne", "klassisk", "minimalistisk", "lekende") |
| `colors` | array | Nei | Array av hex-fargel koder som skal brukes i logoen (f.eks. `["#678233", "#ffffff"]`) |
| `width` | number | Nei | SVG-bredde i piksler (standard: 200) |
| `height` | number | Nei | SVG-høyde i piksler (standard: 200) |
| `include_text` | boolean | Nei | Om nettstednavnet skal inkluderes som tekst i logoen (standard: true) |

## Utdataformat {#output-format}

Funksjonaliteten returnerer en SVG-streng med følgende struktur:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG-sanering {#svg-sanitisation-behaviour}

De genererte SVG-ene gjennomgår automatisk, trygg sanering av navnerommet for å:

- **Fjerne usikre attributter** — fjerner hendelseshåndterere, skript og potensielt farlige attributter
- **Beholde navnerom** — opprettholder SVG-navnerom (xmlns, xlink) for korrekt gjengivelse
- **Validere struktur** — sikrer at SVG-en overholder W3C-standarder
- **Kodingsentiteter** — koder spesialtegn i tekstinnholdet korrekt
- **Fjerne eksterne referanser** — fjerner eksterne stilark og bildereferanser

Dette sikrer at SVG-en er trygg å innebygge direkte i WordPress uten at det kreves ytterligere sanering.

## Brukseksempel {#usage-example}

**Prompt:**
```
Generer en moderne logo for mitt teknologiske oppstartselskap kalt "CloudSync" ved hjelp av blå og hvite farger.
```

**Resultat:**
Funksjonaliteten oppretter en SVG-logo som:
- Inkluderer nettstednavnet "CloudSync"
- Bruker den spesifiserte blå og hvite fargepaletten
- Følger moderne designprinsipper
- Er automatisk sanert og klar til bruk

## Integrasjon med Theme Builder {#integration-with-theme-builder}

Når du bruker designretningsvalget i Theme Builder, vil Generate Logo SVG-funksjonaliteten:

1. Analysere din designretning og fargepalett
2. Generere en tilpasset SVG-logo som matcher preferansene dine
3. Automatisk innebygge logoen i nettstedets header/merkevareområde
4. Lagre SVG-en som en tilpasset logo i WordPress media

## Beste praksis {#best-practices}

- **Gi klare stilpreferanser** — beskriv designstilen du ønsker (moderne, klassisk, lekende, osv.)
- **Spesifiser farger** — inkluder merkevarefargene dine for konsistens
- **Test gjengivelsen** — verifiser at logoen vises korrekt på forskjellige skjermstørrelser
- **Tilpass videre** — bruk WordPress's verktøy for logo-tilpasning for å justere størrelse og plassering

## Begrensninger {#limitations}

- SVG-logoer genereres som statiske grafikk (ikke animerte)
- Komplekse logoer med mange elementer kan kreve manuell finjustering
- Tilpassede fonter støttes ikke; tekst bruker systemfonter
- Svært store eller svært små dimensjoner kan påvirke kvaliteten

## Relaterte funksjonaliteter {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — sjekk fargekontrast for tilgjengelighet
- [Create Menu](./create-menu.md) — opprett navigasjonsmenyer for nettstedet ditt
