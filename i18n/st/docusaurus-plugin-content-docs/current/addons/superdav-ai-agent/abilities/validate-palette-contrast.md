---
title: Netefatsa Konterase ea Phalete
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Netefatsa Phapang ya Palette {#validate-palette-contrast}

Bokgoni ba **Validate Palette Contrast** bo lekola dipara tsa mebala ho palette ya moralo wa hao bakeng sa ho ikamahanya le WCAG (Web Content Accessibility Guidelines) pele bo di sebedisa ho theme ya hao.

## Kakaretso {#overview}

Bokgoni bona bo netefatsa hore leano la mebala la sebaka sa hao le fihlela maemo a phihlello ka ho netefatsa dikarolelano tsa phapang pakeng tsa mongolo le mebala ya bokamorao. Bo thusa ho thibela metswako ya mebala e ka bang thata ho balwa ke basebedisi ba nang le mathata a pono.

## Sebopeho sa Kenyo {#input-format}

Bokgoni bo amohela palette ya mebala e le kenyo:

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

### Dipharamitha {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ya dintho tsa mebala tse nang le dithoto tsa `name` le `hex` |
| `wcag_level` | string | No | Boemo ba ho ikamahanya le WCAG: "A", "AA" (ya kamehla), kapa "AAA" |
| `pairs_to_check` | array | No | Dipara tse itseng tsa mebala tse lokelang ho netefatswa (mohl., `["primary-text", "background-text"]`) |

## Maemo a WCAG a Lekolwang {#wcag-levels-checked}

Bokgoni bo netefatsa dikarolelano tsa phapang ho ya ka maemo a WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Mongolo o Tlwaelehileng** — mongolo o monyane ho feta 18pt (kapa 14pt o motenya)
- **Mongolo o Moholo** — mongolo wa 18pt kapa ho feta (kapa 14pt o motenya kapa ho feta)

## Schema ya Sephetho {#output-schema}

Bokgoni bo kgutlisa tlaleho e qaqileng ya netefatso:

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

### Masimo a Sephetho {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Hore na palette yohle e fihlela boemo ba WCAG bo boletsweng |
| `wcag_level` | string | Boemo ba WCAG bo ileng ba lekolwa |
| `pairs` | array | Diphetho tse qaqileng bakeng sa para ka nngwe ya mebala |
| `contrast_ratio` | number | Karolelano ya phapang e balilweng (1:1 ho ya ho 21:1) |
| `status` | string | "pass" kapa "fail" bakeng sa para ka nngwe |
| `recommendations` | array | Ditlhahiso tsa ho ntlafatsa dipara tse hlolehang |

## Mohlala wa Tshebediso {#usage-example}

**Tshusumetso:**
```
Lekola hore na palette ya ka ya mebala e fihlela maemo a WCAG AA. Ke na le mmala wa mantlha #678233, mmala wa mongolo #ffffff, le bokamorao #f5f5f5.
```

**Sephetho:**
Bokgoni bo netefatsa metswako yohle ya mebala mme bo kgutlisa:
- ✅ Mantlha + Mongolo: karolelano ya 5.2:1 (e feta WCAG AA)
- ✅ Bokamorao + Mongolo: karolelano ya 12.1:1 (e feta WCAG AAA)
- Ka kakaretso: E ikamahanya le WCAG AA

## Kopanyo le Theme Builder {#integration-with-theme-builder}

Ha o sebedisa kgetho ya tataiso ya moralo ya Theme Builder, bokgoni ba Validate Palette Contrast bo:

1. Sekaseka palette ya mebala eo o e kgethileng
2. Lekola metswako yohle ya mongolo le bokamorao
3. Netefatsa kgahlanong le boemo ba WCAG boo o bo kgethileng
4. Fana ka ditlhahiso bakeng sa dipara tse sa ikamahanyeng
5. Thibela ho sebedisa meralo ya mebala e sa fihlelleheng

## Mekgwa e Metle {#best-practices}

- **Qala ka boemo ba AA** — WCAG AA ke tekanyetso bakeng sa diwebosaete tse ngata
- **Leka pele o sebedisa** — netefatsa palette ya hao pele o itlama ho moralo
- **Lekola metswako yohle** — netefatsa hore mongolo, dilinki, le dikarolo tsa UI kaofela di fihlela maemo
- **Nahana ka dikgetho tsa basebedisi** — basebedisi ba bang ba ka ba le kutlo e eketsehileng ya mebala
- **Sebedisa disebediswa tsa ho lekola phapang** — kopanya bokgoni bona le disebediswa tsa sebatli bakeng sa netefatso

## Dipara tse Hlolehang le Ditlhahiso {#failing-pairs-and-recommendations}

Haeba para ya mebala e hloleha netefatso, bokgoni bo fana ka ditlhahiso:

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

## Bokgoni bo Amanang {#related-abilities}

- [Hlahisa Logo SVG](./generate-logo-svg.md) — bopa dilogo ka palette ya hao ya mebala e netefaditsweng
- [Bopa Menu](./create-menu.md) — haha tsamaiso ya ho tsamaya ka mebala e fihlellehang
