---
title: Baliozkotu paletaren kontrastea
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Balioztatu paletaren kontrastea

**Validate Palette Contrast** gaitasunak zure diseinu-paletan dauden kolore-bikoteak WCAG (Web Content Accessibility Guidelines) betetzen duten egiaztatzen du, zure theme-n aplikatu aurretik.

## Ikuspegi orokorra {#overview}

Gaitasun honek zure site-ren kolore-eskemak irisgarritasun-estandarrak betetzen dituela ziurtatzen du, testuaren eta atzeko planoaren koloreen arteko kontraste-ratioak balioztatuz. Ikusmen-urritasuna duten erabiltzaileentzat irakurtzeko zailak izan daitezkeen kolore-konbinazioak saihesten laguntzen du.

## Sarrera-formatua {#input-format}

Gaitasunak kolore-paleta bat onartzen du sarrera gisa:

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

### Parametroak {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Bai | `name` eta `hex` propietateak dituzten kolore-objektuen array-a |
| `wcag_level` | string | Ez | WCAG betetze-maila: "A", "AA" (lehenetsia), edo "AAA" |
| `pairs_to_check` | array | Ez | Balioztatu beharreko kolore-bikote zehatzak (adib., `["primary-text", "background-text"]`) |

## Egiaztatutako WCAG mailak {#wcag-levels-checked}

Gaitasunak kontraste-ratioak WCAG estandarren arabera balioztatzen ditu:

| Maila | Testu normala | Testu handia | Gutxieneko ratioa |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Testu normala** — 18pt baino txikiagoa den testua (edo 14pt lodia)
- **Testu handia** — 18pt edo handiagoa den testua (edo 14pt lodia edo handiagoa)

## Irteera-eskema {#output-schema}

Gaitasunak balioztatze-txosten xehea itzultzen du:

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

### Irteerako eremuak {#output-fields}

| Eremua | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Paleta osoak zehaztutako WCAG maila betetzen duen ala ez |
| `wcag_level` | string | Egiaztatu den WCAG maila |
| `pairs` | array | Kolore-bikote bakoitzerako emaitza xeheak |
| `contrast_ratio` | number | Kalkulatutako kontraste-ratioa (1:1etik 21:1era) |
| `status` | string | Bikote bakoitzerako "pass" edo "fail" |
| `recommendations` | array | Huts egiten duten bikoteak hobetzeko iradokizunak |

## Erabilera-adibidea {#usage-example}

**Prompt:**
```
Egiaztatu nire kolore-paletak WCAG AA estandarrak betetzen dituen. Kolore nagusia #678233 da, testu-kolorea #ffffff, eta atzeko planoa #f5f5f5.
```

**Emaitza:**
Gaitasunak kolore-konbinazio guztiak balioztatzen ditu eta hau itzultzen du:
- ✅ Nagusia + testua: 5.2:1 ratioa (WCAG AA gainditzen du)
- ✅ Atzeko planoa + testua: 12.1:1 ratioa (WCAG AAA gainditzen du)
- Orokorra: WCAG AA betetzen du

## Integrazioa Theme Builder-ekin {#integration-with-theme-builder}

Theme Builder-en diseinu-norabidearen hautaketa erabiltzean, Validate Palette Contrast gaitasunak:

1. Hautatutako kolore-paleta aztertzen du
2. Testu-atzeko plano konbinazio guztiak egiaztatzen ditu
3. Zuk aukeratutako WCAG mailaren aurka balioztatzen du
4. Betetzen ez duten bikoteetarako gomendioak ematen ditu
5. Irisgarriak ez diren kolore-eskemak aplikatzea eragozten du

## Jardunbide egokiak {#best-practices}

- **Hasi AA mailarekin** — WCAG AA da webgune gehienetarako estandarra
- **Probatu aplikatu aurretik** — balioztatu zure paleta diseinu batekin konpromisoa hartu aurretik
- **Egiaztatu konbinazio guztiak** — ziurtatu testuak, estekek eta UI elementuek estandarrak betetzen dituztela
- **Kontuan hartu erabiltzaileen lehentasunak** — erabiltzaile batzuek koloreekiko sentikortasun gehigarria izan dezakete
- **Erabili kontraste-egiaztatzaileak** — konbinatu gaitasun hau nabigatzaileko tresnekin egiaztapenerako

## Huts egiten duten bikoteak eta gomendioak {#failing-pairs-and-recommendations}

Kolore-bikote batek balioztatzea gainditzen ez badu, gaitasunak gomendioak ematen ditu:

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

## Lotutako gaitasunak {#related-abilities}

- [Sortu logo SVG](./generate-logo-svg.md) — sortu logoak balioztatutako kolore-paletarekin
- [Sortu menua](./create-menu.md) — eraiki nabigazioa kolore irisgarriekin
