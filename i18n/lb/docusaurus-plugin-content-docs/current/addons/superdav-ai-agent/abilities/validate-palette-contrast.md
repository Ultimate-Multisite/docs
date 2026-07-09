---
title: Palette-Kontrast validéieren
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palette-Kontrast validéieren

D'Fäegkeet **Palette-Kontrast validéieren** iwwerpréift Faarfpuer an denger Design-Palette op WCAG (Web Content Accessibility Guidelines)-Konformitéit, ier se op däin theme ugewannt ginn.

## Iwwersiicht

Dës Fäegkeet suergt dofir, datt d'Faarfschema vun denger Säit Accessibilitéitsstandarden erfëllt, andeems Kontrastverhältnisser tëscht Text- an Hannergrondfaarwen validéiert ginn. Si hëlleft Faarfkombinatiounen ze vermeiden, déi fir Benotzer mat visuellen Aschränkunge schwéier ze liese kéinte sinn.

## Input-Format

D'Fäegkeet akzeptéiert eng Faarfpalette als Input:

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

### Parameteren

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array vu Faarfobjekter mat `name`- an `hex`-Eegenschaften |
| `wcag_level` | string | No | WCAG-Konformitéitsniveau: "A", "AA" (Standard), oder "AAA" |
| `pairs_to_check` | array | No | Spezifesch Faarfpuer fir ze validéieren (z. B. `["primary-text", "background-text"]`) |

## Iwwerpréift WCAG-Niveauen

D'Fäegkeet validéiert Kontrastverhältnisser no WCAG-Standarden:

| Niveau | Normalen Text | Groussen Text | Mindestverhältnis |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normalen Text** — Text méi kleng wéi 18pt (oder 14pt fett)
- **Groussen Text** — Text 18pt oder méi grouss (oder 14pt fett oder méi grouss)

## Output-Schema

D'Fäegkeet gëtt en detailléierte Validéierungsrapport zeréck:

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

### Output-Felder

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ob déi ganz Palette dem spezifizéierte WCAG-Niveau entsprécht |
| `wcag_level` | string | De WCAG-Niveau, deen iwwerpréift gouf |
| `pairs` | array | Detailléiert Resultater fir all Faarfpuer |
| `contrast_ratio` | number | Dat berechent Kontrastverhältnis (1:1 bis 21:1) |
| `status` | string | "pass" oder "fail" fir all Puer |
| `recommendations` | array | Virschléi fir feelerschloend Puer ze verbesseren |

## Benotzungsbeispill

**Prompt:**
```
Kuck, ob meng Faarfpalette de WCAG AA-Standarden entsprécht. Ech hunn d'Primärfaarf #678233, d'Textfaarf #ffffff, an den Hannergrond #f5f5f5.
```

**Resultat:**
D'Fäegkeet validéiert all Faarfkombinatiounen a gëtt zeréck:
- ✅ Primär + Text: Verhältnis 5.2:1 (besteet WCAG AA)
- ✅ Hannergrond + Text: Verhältnis 12.1:1 (besteet WCAG AAA)
- Am Ganzen: Konform mat WCAG AA

## Integratioun mam Theme Builder

Wann s du d'Design-Richtungs-Auswiel vum Theme Builder benotz, mécht d'Fäegkeet Palette-Kontrast validéieren Folgendes:

1. Analyséiert deng ausgewielt Faarfpalette
2. Iwwerpréift all Text-Hannergrond-Kombinatiounen
3. Validéiert géint däin ausgewielte WCAG-Niveau
4. Liwwert Recommandatioune fir net-konform Puer
5. Verhënnert d'Uwendung vun net accessibelen Faarfschemen

## Bescht Praktiken

- **Fänk mam AA-Niveau un** — WCAG AA ass de Standard fir déi meescht Websäiten
- **Test virum Uwenden** — validéier deng Palette, ier s du dech op en Design festleees
- **Iwwerpréif all Kombinatiounen** — suerg dofir, datt Text, Linken an UI-Elementer all d'Standarden erfëllen
- **Berécksiichteg Benotzerpreferenzen** — verschidde Benotzer kënnen zousätzlech Faarfsensibilitéit hunn
- **Benotz Kontrastchecker** — kombinéier dës Fäegkeet mat Browser-Tools fir d'Verifikatioun

## Feelerschloend Puer a Recommandatiounen

Wann e Faarfpuer d'Validéierung net besteet, liwwert d'Fäegkeet Recommandatiounen:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Lighten the text color to #ffffff (ratio would be 5.2:1)",
    "Darken the background color to #556b2f (ratio would be 4.8:1)",
    "Use a different primary color like #4a6b1f (ratio would be 6.1:1)"
  ]
}
```

## Verbonnen Fäegkeeten

- [Logo SVG generéieren](./generate-logo-svg.md) — Logoen mat denger validéierter Faarfpalette erstellen
- [Menü erstellen](./create-menu.md) — Navigatioun mat accessibele Faarwen opbauen
