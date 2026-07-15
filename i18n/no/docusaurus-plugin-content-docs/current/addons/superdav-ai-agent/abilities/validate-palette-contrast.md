---
title: Valider palettkontrast
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valider palettkontrast

Funksjonen **Valider palettkontrast** sjekker fargeparene i designpaletten din for WCAG (Web Content Accessibility Guidelines) samsvar før de brukes i temaet ditt.

## Oversikt {#overview}

Denne funksjonen sikrer at nettstedets fargeskjema oppfyller tilgjengelighetsstandarder ved å validere kontrastforholdet mellom tekst- og bakgrunnsfarger. Dette hjelper til med å forhindre fargekombinasjoner som kan være vanskelige for brukere med synshemming å lese.

## Inputformat {#input-format}

Funksjonen tar imot en fargepalett som input:

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

### Parametere {#parameters}

| Parameter | Type | Påkrevd | Beskrivelse |
|-----------|------|----------|-------------|
| `colors` | array | Ja | Array av fargeobjekter med `name` og `hex`-egenskaper |
| `wcag_level` | string | Nei | WCAG-samsvarsnivå: "A", "AA" (standard), eller "AAA" |
| `pairs_to_check` | array | Nei | Spesifikke fargepar som skal valideres (f.eks. `["primary-text", "background-text"]`) |

## WCAG-nivåer sjekket {#wcag-levels-checked}

Funksjonen validerer kontrastforholdene i henhold til WCAG-standardene:

| Nivå | Normal tekst | Stor tekst | Minimumsforhold |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal tekst** — tekst mindre enn 18pt (eller 14pt fet)
- **Stor tekst** — tekst 18pt eller større (eller 14pt fet eller større)

## Output-skjema {#output-schema}

Funksjonen returnerer en detaljert valideringsrapport:

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

### Felt i output {#output-fields}

| Felt | Type | Beskrivelse |
|-------|------|-------------|
| `compliant` | boolean | Om hele paletten oppfyller det spesifiserte WCAG-nivået |
| `wcag_level` | string | WCAG-nivået som ble sjekket |
| `pairs` | array | Detaljerte resultater for hvert fargepar |
| `contrast_ratio` | number | Det beregnede kontrastforholdet (1:1 til 21:1) |
| `status` | string | "pass" eller "fail" for hvert par |
| `recommendations` | array | Forslag for å forbedre feilaktige par |

## Brukseksempel {#usage-example}

**Prompt:**
```
Sjekk om fargepaletten min oppfyller WCAG AA-standarder. Jeg har primærfargen #678233, tekstfargen #ffffff, og bakgrunnen #f5f5f5.
```

**Resultat:**
Funksjonen validerer alle fargekombinasjoner og returnerer:
- ✅ Primær + Tekst: 5.2:1 forhold (består WCAG AA)
- ✅ Bakgrunn + Tekst: 12.1:1 forhold (består WCAG AAA)
- Totalt: Samsvarer med WCAG AA

## Integrasjon med Theme Builder {#integration-with-theme-builder}

Når du bruker designretningsvalget i Theme Builder, vil funksjonen Valider palettkontrast:

1. Analysere den valgte fargepaletten din
2. Sjekke alle tekst-bakgrunns-kombinasjoner
3. Validere mot ditt valgte WCAG-nivå
4. Gi anbefalinger for ikke-samsvarige par
5. Forhindre at du anvender utilgjengelige fargeskjemaer

## Beste praksis {#best-practices}

- **Start med AA-nivå** — WCAG AA er standarden for de fleste nettsteder
- **Test før du anvender** — valider paletten din før du forplikter deg til et design
- **Sjekk alle kombinasjoner** — sørg for at tekst, lenker og UI-elementer alle oppfyller standardene
- **Vurder brukerpreferanser** — noen brukere kan ha ekstra fargefølsomhet
- **Bruk kontrastsjekkere** — kombiner denne funksjonen med nettleserverktøy for verifisering

## Feilaktige par og anbefalinger {#failing-pairs-and-recommendations}

Hvis et fargepar feiler valideringen, gir funksjonen anbefalinger:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lys opp tekstfargen til #ffffff (forholdet ville vært 5.2:1)",
    "Mørk bakgrunnsfargen til #556b2f (forholdet ville vært 4.8:1)",
    "Bruk en annen primærfarge som #4a6b1f (forholdet ville vært 6.1:1)"
  ]
}
```

## Relaterte funksjoner {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — lag logoer med din validerte fargepalett
- [Create Menu](./create-menu.md) — bygg navigasjon med tilgjengelige farger
