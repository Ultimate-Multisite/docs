---
title: Tsimikizani Kusiyana kwa Paleti
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Tsimikizani Kusiyana kwa Palette {#validate-palette-contrast}

Luso la **Validate Palette Contrast** limayang'ana awiri a mitundu mu palette ya kapangidwe kanu kuti liwone ngati likutsatira WCAG (Web Content Accessibility Guidelines) musanaliike ku theme yanu.

## Chidule {#overview}

Lusoli limatsimikizira kuti dongosolo la mitundu la site yanu likukwaniritsa miyezo ya kupezeka mosavuta poyang'ana ma ratio a kusiyana pakati pa mawu ndi mitundu ya kumbuyo. Limathandiza kupewa kuphatikiza mitundu komwe kungakhale kovuta kuwerenga kwa ogwiritsa ntchito omwe ali ndi vuto la maso.

## Mtundu wa Zolowetsa {#input-format}

Lusoli limalandira palette ya mitundu monga cholowetsa:

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

### Ma Parameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Array ya zinthu za mitundu zokhala ndi katundu wa `name` ndi `hex` |
| `wcag_level` | string | No | Mulingo wotsatira WCAG: "A", "AA" (wokhazikika), kapena "AAA" |
| `pairs_to_check` | array | No | Awiri enieni a mitundu oti atsimikizidwe (mwachitsanzo, `["primary-text", "background-text"]`) |

## Milingo ya WCAG Yoyang'aniridwa {#wcag-levels-checked}

Lusoli limatsimikizira ma ratio a kusiyana molingana ndi miyezo ya WCAG:

| Level | Mawu Abwinobwino | Mawu Aakulu | Ratio Yochepera |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Mawu Abwinobwino** — mawu ang'ono kuposa 18pt (kapena 14pt bold)
- **Mawu Aakulu** — mawu a 18pt kapena akulu (kapena 14pt bold kapena akulu)

## Schema ya Zotuluka {#output-schema}

Lusoli limabwezera lipoti latsatanetsatane la kutsimikizira:

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

### Magawo a Zotuluka {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Kaya palette yonse ikukwaniritsa mulingo wa WCAG womwe wafotokozedwa |
| `wcag_level` | string | Mulingo wa WCAG womwe unayang'aniridwa |
| `pairs` | array | Zotsatira zatsatanetsatane za awiri aliwonse a mitundu |
| `contrast_ratio` | number | Ratio ya kusiyana yomwe yawerengedwa (1:1 mpaka 21:1) |
| `status` | string | "pass" kapena "fail" kwa awiri aliwonse |
| `recommendations` | array | Malingaliro okonza awiri omwe akulephera |

## Chitsanzo cha Kugwiritsa Ntchito {#usage-example}

**Prompt:**
```
Onani ngati palette yanga ya mitundu ikukwaniritsa miyezo ya WCAG AA. Ndili ndi mtundu woyambirira #678233, mtundu wa mawu #ffffff, ndi kumbuyo #f5f5f5.
```

**Zotsatira:**
Lusoli limatsimikizira kuphatikiza konse kwa mitundu ndipo limabwezera:
- ✅ Woyambirira + Mawu: ratio ya 5.2:1 (ikupambana WCAG AA)
- ✅ Kumbuyo + Mawu: ratio ya 12.1:1 (ikupambana WCAG AAA)
- Zonse pamodzi: Ikutsatira WCAG AA

## Kulumikizana ndi Theme Builder {#integration-with-theme-builder}

Mukamagwiritsa ntchito kusankha njira ya kapangidwe mu Theme Builder, luso la Validate Palette Contrast:

1. Limasanthula palette ya mitundu yomwe mwasankha
2. Limayang'ana kuphatikiza konse kwa mawu ndi kumbuyo
3. Limatsimikizira motsutsana ndi mulingo wa WCAG womwe mwasankha
4. Limapereka malingaliro kwa awiri omwe satsatira miyezo
5. Limalepheretsa kuyika madongosolo a mitundu omwe sapezeka mosavuta

## Njira Zabwino {#best-practices}

- **Yambani ndi mulingo wa AA** — WCAG AA ndi muyezo wa ma website ambiri
- **Yesani musanayike** — tsimikizirani palette yanu musanadzipereke ku kapangidwe
- **Yang'anani kuphatikiza konse** — onetsetsani kuti mawu, ma link, ndi zinthu za UI zonse zikukwaniritsa miyezo
- **Ganizirani zokonda za ogwiritsa ntchito** — ogwiritsa ntchito ena angakhale ndi kumva kwambiri mitundu
- **Gwiritsani ntchito zida zoyang'anira kusiyana** — phatikizani lusoli ndi zida za browser kuti mutsimikizire

## Awiri Olephera ndi Malingaliro {#failing-pairs-and-recommendations}

Ngati awiri a mitundu alephera kutsimikizidwa, lusoli limapereka malingaliro:

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

## Maluso Ofanana {#related-abilities}

- [Pangani Logo SVG](./generate-logo-svg.md) — pangani ma logo ndi palette yanu ya mitundu yomwe yatsimikizidwa
- [Pangani Menu](./create-menu.md) — pangani navigation yokhala ndi mitundu yopezeka mosavuta
