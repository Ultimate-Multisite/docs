---
title: Simbisa Kusiyana kweMuunganidzwa weMavara
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Simbisa Kusiyana kwePalette

Kugona kwe**Validate Palette Contrast** kunoongorora mapeya emavara mupalette yedhizaini yako kuti aenderane neWCAG (Web Content Accessibility Guidelines) usati waashandisa pa theme yako.

## Pfupiso

Kugona uku kunovimbisa kuti chirongwa chemavara chesaiti yako chinosangana nemiyero yekusvikirika nekusimbisa zviyero zvekusiyana pakati pemavara echinyorwa nemavara ekumashure. Kunobatsira kudzivirira misanganiswa yemavara inogona kuomera vashandisi vane matambudziko ekuona kuverenga.

## Chimiro cheInput

Kugona uku kunogamuchira palette yemavara seinput:

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

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array yezvinhu zvemavara zvine zvimiro zve`name` ne`hex` |
| `wcag_level` | string | No | Chikamu chekutevedzera WCAG: "A", "AA" (default), kana "AAA" |
| `pairs_to_check` | array | No | Mapeya emavara chaiwo ekusimbisa (semuenzaniso, `["primary-text", "background-text"]`) |

## Zvikamu zveWCAG Zvinoongororwa

Kugona uku kunosimbisa zviyero zvekusiyana zvinoenderana nemiyero yeWCAG:

| Chikamu | Chinyorwa Chajairika | Chinyorwa Chikuru | Chiyero Chishoma |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Chinyorwa Chajairika** — chinyorwa chidiki kupfuura 18pt (kana 14pt bold)
- **Chinyorwa Chikuru** — chinyorwa che18pt kana chikuru (kana 14pt bold kana chikuru)

## Schema yeOutput

Kugona uku kunodzosa rondedzero yakadzama yekusimbisa:

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

### Minda yeOutput

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Kana palette yose ichisangana nechikamu cheWCAG chakatarwa |
| `wcag_level` | string | Chikamu cheWCAG chakaongororwa |
| `pairs` | array | Mhedzisiro yakadzama yepeya imwe neimwe yemavara |
| `contrast_ratio` | number | Chiyero chekusiyana chakaverengwa (1:1 kusvika 21:1) |
| `status` | string | "pass" kana "fail" yepeya imwe neimwe |
| `recommendations` | array | Mazano ekuvandudza mapeya ari kukundikana |

## Muenzaniso Wekushandisa

**Prompt:**
```
Ongorora kana palette yangu yemavara ichisangana nemiyero yeWCAG AA. Ndine ruvara rwekutanga #678233, ruvara rwechinyorwa #ffffff, uye kumashure #f5f5f5.
```

**Mhedzisiro:**
Kugona uku kunosimbisa misanganiswa yose yemavara uye kunodzosa:
- ✅ Chekutanga + Chinyorwa: chiyero che5.2:1 (chinopfuura WCAG AA)
- ✅ Kumashure + Chinyorwa: chiyero che12.1:1 (chinopfuura WCAG AAA)
- Zvose: Zvinoenderana neWCAG AA

## Kubatanidzwa neTheme Builder

Paunenge uchishandisa kusarudza nzira yedhizaini muTheme Builder, kugona kweValidate Palette Contrast:

1. Kunoongorora palette yemavara yawakasarudza
2. Kunoongorora misanganiswa yose yechinyorwa-nekumashure
3. Kunosimbisa zvichienzaniswa nechikamu cheWCAG chawakasarudza
4. Kunopa mazano emapeya asingatevedzeri
5. Kunodzivirira kushandisa zvirongwa zvemavara zvisingasvikiriki

## Maitiro Akanakisisa

- **Tanga nechikamu cheAA** — WCAG AA ndiyo mwero wemawebhusaiti mazhinji
- **Edza usati washandisa** — simbisa palette yako usati wazvipira kudhizaini
- **Ongorora misanganiswa yose** — iva nechokwadi chekuti chinyorwa, zvinongedzo, uye zvinhu zveUI zvese zvinosangana nemiyero
- **Funga zvido zvevashandisi** — vamwe vashandisi vanogona kuva nekukanganiswa kwakawedzera nemavara
- **Shandisa maturusi ekuongorora kusiyana** — batanidza kugona uku nematurusi ebrowser kuti usimbise

## Mapeya Ari Kukundikana neMazano

Kana peya yemavara ikakundikana kusimbiswa, kugona uku kunopa mazano:

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

## Kugona Kune Hukama

- [Gadzira Logo SVG](./generate-logo-svg.md) — gadzira malogo uchishandisa palette yako yemavara yakasimbiswa
- [Gadzira Menu](./create-menu.md) — vaka navigation ine mavara anosvikirika
