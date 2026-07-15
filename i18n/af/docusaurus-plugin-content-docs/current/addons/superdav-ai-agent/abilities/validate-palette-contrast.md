---
title: Valideer paletkontras
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valideer Paletkontras

Die **Validate Palette Contrast** vermoë kontroleer kleurpaare in jou ontwerppalet op nakoming van WCAG (Web Content Accessibility Guidelines) voordat dit op jou tema toegepas word.

## Oorsig {#overview}

Hierdie vermoë verseker dat jou webwerf se kleurskema toeganklikheidsstandaarde nakom deur kontrasverhoudings tussen teks- en agtergrondkleure te valideer. Dit help om kleurkombinasies te voorkom wat vir gebruikers met visuele beperkings moeilik kan wees om te lees.

## Invoerformaat {#input-format}

Die vermoë aanvaar 'n kleurpalet as invoer:

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

### Parameters {#parameters}

| Parameter | Tipe | Vereis | Beskrywing |
|-----------|------|----------|-------------|
| `colors` | array | Ja | 'n Array van kleurobjekte met `name` en `hex` eienskappe |
| `wcag_level` | string | Nee | WCAG-nakoomingsvlak: "A", "AA" (standaard), of "AAA" |
| `pairs_to_check` | array | Nee | Spesifieke kleurpaare om te valideer (bv. `["primary-text", "background-text"]`) |

## WCAG-Vlakke Gevalideer {#wcag-levels-checked}

Die vermoë valideer kontrasverhoudings volgens WCAG-standaarde:

| Vlak | Normale Teks | Groot Teks | Minimum Verhouding |
|-------|-------------|------------|--------------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normale Teks** — teks kleiner as 18pt (of 14pt vet)
- **Groot Teks** — teks van 18pt of groter (of 14pt vet of groter)

## Uitvoer Skema {#output-schema}

Die vermoë keer 'n gedetailleerde validasieverslag terug:

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

### Uitveld {#output-fields}

| Veld | Tipe | Beskrywing |
|-------|------|-------------|
| `compliant` | boolean | Of die hele palet die gespesifiseerde WCAG-vlak nakom |
| `wcag_level` | string | Die WCAG-vlak wat gecontroleer is |
| `pairs` | array | Gedetailleerde resultate vir elke kleurpaar |
| `contrast_ratio` | number | Die berekende kontrasverhouding (1:1 tot 21:1) |
| `status` | string | "pass" of "fail" vir elke paar |
| `recommendations` | array | Voorstelle vir die verbetering van mislukte pare |

## Gebruiksvoorbeeld {#usage-example}

**Vraag:**
```
Kontroleer of my kleurpalet aan WCAG AA-standaarde voldoen. Ek het primêrek kleur #678233, tekskleur #ffffff, en agtergrond #f5f5f5.
```

**Resultaat:**
Die vermoë valideer al die kleurkombinasies en keer terug:
- ✅ Primêr + Teks: 5.2:1 verhouding (kom WCAG AA)
- ✅ Agtergrond + Teks: 12.1:1 verhouding (kom WCAG AAA)
- Oor die algemeen: Nakoomend met WCAG AA

## Integrasie met Tema Bouer {#integration-with-theme-builder}

Wanneer jy die ontwykingsrigting-keuse van Theme Builder gebruik, sal die Validate Palette Contrast vermoë:

1. Jou gekose kleurpalet ontleed
2. Alle teks-agtergrondkombinasies kontroleer
3. Valideer teen jou gekose WCAG-vlak
4. Voorstelle verskaf vir nie-nakoomende pare
5. Voorkom die toepassing van ontoeganklike kleurskemas

## Beste Praktyke {#best-practices}

- **Begin met AA-vlak** — WCAG AA is die standaard vir die meeste webwerwe
- **Toets voordat jy toepas** — valideer jou palet voordat jy jou ontwerp bevestig
- **Kontroleer al die kombinasies** — verseker dat teks, skakels en UI-elemente almal aan die standaarde voldoen
- **Oorweeg gebruikersvoorkeure** — sommige gebruikers mag bykomende kleurgevoeligheid hê
- **Gebruik kontraskontroleerders** — kombineer hierdie vermoë met browsergereedskap vir verifikasie

## Mislukte Pare en Voorstelle {#failing-pairs-and-recommendations}

As 'n kleurpaar die validasie misluk, verskaf die vermoë voorstelle:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Ligte die tekskleur na #ffffff (verhouding sou 5.2:1 wees)",
    "Donker die agtergrondkleur na #556b2f (verhouding sou 4.8:1 wees)",
    "Gebruik 'n ander primêre kleur soos #4a6b1f (verhouding sou 6.1:1 wees)"
  ]
}
```

## Verwante Vermoë {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — skep logo's met jou gevalideerde kleurpalet
- [Create Menu](./create-menu.md) — bou navigasie met toeganklike kleure
