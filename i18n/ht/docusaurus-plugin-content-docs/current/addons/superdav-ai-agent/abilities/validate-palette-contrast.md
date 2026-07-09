---
title: Valide kontras palèt la
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valide Kontras Palèt {#validate-palette-contrast}

Kapasite **Validate Palette Contrast** la tcheke pè koulè nan palèt konsepsyon ou pou konfòmite ak WCAG (Web Content Accessibility Guidelines) anvan li aplike yo sou theme ou.

## Apèsi {#overview}

Kapasite sa a asire konbinezon koulè sit ou a satisfè estanda aksesibilite yo lè li valide rapò kontras ant koulè tèks ak koulè fon. Li ede anpeche konbinezon koulè ki ta ka difisil pou itilizatè ki gen pwoblèm vizyèl li.

## Fòma Antre {#input-format}

Kapasite a aksepte yon palèt koulè kòm antre:

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

### Paramèt {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Lis objè koulè ki gen pwopriyete `name` ak `hex` |
| `wcag_level` | string | No | Nivo konfòmite WCAG: "A", "AA" (default), oswa "AAA" |
| `pairs_to_check` | array | No | Pè koulè espesifik pou valide (pa egzanp, `["primary-text", "background-text"]`) |

## Nivo WCAG yo Tcheke {#wcag-levels-checked}

Kapasite a valide rapò kontras yo dapre estanda WCAG:

| Nivo | Tèks Nòmal | Gwo Tèks | Rapò Minimòm |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Tèks Nòmal** — tèks ki pi piti pase 18pt (oswa 14pt an gra)
- **Gwo Tèks** — tèks 18pt oswa pi gwo (oswa 14pt an gra oswa pi gwo)

## Chema Sòti {#output-schema}

Kapasite a retounen yon rapò validasyon detaye:

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

### Chan Sòti {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Si tout palèt la satisfè nivo WCAG ki espesifye a |
| `wcag_level` | string | Nivo WCAG ki te tcheke a |
| `pairs` | array | Rezilta detaye pou chak pè koulè |
| `contrast_ratio` | number | Rapò kontras ki kalkile a (1:1 rive 21:1) |
| `status` | string | "pass" oswa "fail" pou chak pè |
| `recommendations` | array | Sijesyon pou amelyore pè ki echwe yo |

## Egzanp Itilizasyon {#usage-example}

**Prompt:**
```
Tcheke si palèt koulè mwen an satisfè estanda WCAG AA. Mwen gen koulè prensipal #678233, koulè tèks #ffffff, ak fon #f5f5f5.
```

**Rezilta:**
Kapasite a valide tout konbinezon koulè yo epi li retounen:
- ✅ Prensipal + Tèks: rapò 5.2:1 (pase WCAG AA)
- ✅ Fon + Tèks: rapò 12.1:1 (pase WCAG AAA)
- An jeneral: Konfòm ak WCAG AA

## Entegrasyon ak Theme Builder {#integration-with-theme-builder}

Lè w ap itilize seleksyon direksyon-konsepsyon Theme Builder la, kapasite Validate Palette Contrast la:

1. Analize palèt koulè ou chwazi a
2. Tcheke tout konbinezon tèks-fon yo
3. Valide kont nivo WCAG ou chwazi a
4. Bay rekòmandasyon pou pè ki pa konfòm yo
5. Anpeche aplikasyon konbinezon koulè ki pa aksesib

## Pi Bon Pratik {#best-practices}

- **Kòmanse ak nivo AA** — WCAG AA se estanda a pou pifò sit entènèt
- **Teste anvan ou aplike** — valide palèt ou anvan ou angaje w nan yon konsepsyon
- **Tcheke tout konbinezon yo** — asire tèks, lyen, ak eleman UI yo tout satisfè estanda yo
- **Konsidere preferans itilizatè yo** — kèk itilizatè ka gen plis sansiblite ak koulè
- **Sèvi ak zouti tcheke kontras** — konbine kapasite sa a ak zouti navigatè pou verifikasyon

## Pè ki Echwe ak Rekòmandasyon {#failing-pairs-and-recommendations}

Si yon pè koulè echwe validasyon, kapasite a bay rekòmandasyon:

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

## Kapasite Ki Gen Rapò {#related-abilities}

- [Jenere Logo SVG](./generate-logo-svg.md) — kreye logo ak palèt koulè valide ou a
- [Kreye Meni](./create-menu.md) — bati navigasyon ak koulè aksesib
