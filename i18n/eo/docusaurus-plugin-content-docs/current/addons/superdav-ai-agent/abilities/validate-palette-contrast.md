---
title: Validigi kontraston de paletro
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validigi Paletran Kontraston

La kapablo **Validate Palette Contrast** kontrolas kolorparojn en via dezajna paletro pri konformeco al WCAG (Web Content Accessibility Guidelines) antaŭ ol apliki ilin al via etoso.

## Superrigardo {#overview}

Ĉi tiu kapablo certigas, ke la kolorskemo de via retejo plenumas alireblecajn normojn per validigo de kontrastaj rilatumoj inter teksto kaj fonaj koloroj. Ĝi helpas malhelpi kolorajn kombinaĵojn, kiuj povus esti malfacile legeblaj por uzantoj kun vidaj handikapoj.

## Eniga Formato {#input-format}

La kapablo akceptas kolorpaletron kiel enigon:

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

### Parametroj {#parameters}

| Parametro | Tipo | Deviga | Priskribo |
|-----------|------|----------|-------------|
| `colors` | array | Jes | Tabelo de kolorobjektoj kun ecoj `name` kaj `hex` |
| `wcag_level` | string | Ne | WCAG-konformeca nivelo: "A", "AA" (defaŭlta), aŭ "AAA" |
| `pairs_to_check` | array | Ne | Specifaj kolorparoj por validigi (ekz., `["primary-text", "background-text"]`) |

## Kontrolataj WCAG-Niveloj {#wcag-levels-checked}

La kapablo validigas kontrastajn rilatumojn laŭ WCAG-normoj:

| Nivelo | Normala Teksto | Granda Teksto | Minimuma Rilatumo |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normala Teksto** — teksto pli malgranda ol 18pt (aŭ 14pt grasa)
- **Granda Teksto** — teksto 18pt aŭ pli granda (aŭ 14pt grasa aŭ pli granda)

## Eliga Skemo {#output-schema}

La kapablo redonas detalan validigan raporton:

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

### Eligaj Kampoj {#output-fields}

| Kampo | Tipo | Priskribo |
|-------|------|-------------|
| `compliant` | boolean | Ĉu la tuta paletro plenumas la specifitan WCAG-nivelon |
| `wcag_level` | string | La WCAG-nivelo, kiu estis kontrolita |
| `pairs` | array | Detalaj rezultoj por ĉiu kolorparo |
| `contrast_ratio` | number | La kalkulita kontrasta rilatumo (1:1 ĝis 21:1) |
| `status` | string | "pass" aŭ "fail" por ĉiu paro |
| `recommendations` | array | Sugestoj por plibonigi malsukcesajn parojn |

## Uzada Ekzemplo {#usage-example}

**Invito:**
```
Kontrolu ĉu mia kolorpaletro plenumas WCAG AA-normojn. Mi havas ĉefan koloron #678233, tekstokoloron #ffffff, kaj fonon #f5f5f5.
```

**Rezulto:**
La kapablo validigas ĉiujn kolorajn kombinaĵojn kaj redonas:
- ✅ Ĉefa + Teksto: rilatumo 5.2:1 (pasas WCAG AA)
- ✅ Fono + Teksto: rilatumo 12.1:1 (pasas WCAG AAA)
- Entute: Konforma al WCAG AA

## Integrado kun Theme Builder {#integration-with-theme-builder}

Kiam oni uzas la elekton de dezajna direkto de Theme Builder, la kapablo Validate Palette Contrast:

1. Analizas vian elektitan kolorpaletron
2. Kontrolas ĉiujn teksto-fonajn kombinaĵojn
3. Validigas kontraŭ via elektita WCAG-nivelo
4. Provizas rekomendojn por nekonformaj paroj
5. Malhelpas apliki nealireblajn kolorskemojn

## Plej Bonaj Praktikoj {#best-practices}

- **Komencu per AA-nivelo** — WCAG AA estas la normo por plej multaj retejoj
- **Testu antaŭ ol apliki** — validigu vian paletron antaŭ ol engaĝiĝi al dezajno
- **Kontrolu ĉiujn kombinaĵojn** — certigu, ke teksto, ligiloj kaj UI-elementoj ĉiuj plenumas normojn
- **Konsideru uzantajn preferojn** — iuj uzantoj eble havas plian kolorsentemon
- **Uzu kontrastokontrolilojn** — kombinu ĉi tiun kapablon kun retumilaj iloj por konfirmo

## Malsukcesaj Paroj kaj Rekomendoj {#failing-pairs-and-recommendations}

Se kolorparo malsukcesas validigon, la kapablo provizas rekomendojn:

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

## Rilataj Kapabloj {#related-abilities}

- [Generi Logotipan SVG](./generate-logo-svg.md) — krei logotipojn kun via validigita kolorpaletro
- [Krei Menuon](./create-menu.md) — konstrui navigadon kun alireblaj koloroj
