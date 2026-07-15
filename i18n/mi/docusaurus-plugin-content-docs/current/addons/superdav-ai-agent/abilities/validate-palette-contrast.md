---
title: Manatoko i te Tauaro o te Papatae
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Whakamana i te Kanorau o te Papatae

Ka tirohia e te āheinga **Whakamana i te Kanorau o te Papatae** ngā takirua tae i tō papatae hoahoa mō te tautukunga ki te WCAG (Ngā Aratohu Urutanga Ihirangi Tukutuku) i mua i te hoatutanga ki tō kaupapa.

## Tirohanga Whānui {#overview}

Ka whakarite tēnei āheinga kia tutuki te kaupapa tae o tō pae i ngā paerewa urutanga mā te whakamana i ngā ōwehenga kanorau i waenga i ngā tae kuputuhi me ngā tae papamuri. Ka āwhina ki te ārai i ngā huinga tae ka uaua pea te pānui mā ngā kaiwhakamahi whai waimaero ā-tirohanga.

## Hōputu Tāuru {#input-format}

Ka whakaae te āheinga ki tētahi papatae tae hei tāuru:

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

### Ngā Tawhā {#parameters}

| Tawhā | Momo | E hiahiatia ana | Whakaahuatanga |
|-----------|------|----------|-------------|
| `colors` | array | Āe | Huinga ahanoa tae me ngā āhuatanga `name` me `hex` |
| `wcag_level` | string | Kāo | Taumata tautukunga WCAG: "A", "AA" (taunoa), "AAA" rānei |
| `pairs_to_check` | array | Kāo | Ngā takirua tae motuhake hei whakamana (hei tauira, `["primary-text", "background-text"]`) |

## Ngā Taumata WCAG ka Tirohia {#wcag-levels-checked}

Ka whakamana te āheinga i ngā ōwehenga kanorau e ai ki ngā paerewa WCAG:

| Taumata | Kuputuhi Pūnoa | Kuputuhi Nui | Ōwehenga Iti Rawa |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Kuputuhi Pūnoa** — he kuputuhi iti iho i te 18pt (14pt miramira rānei)
- **Kuputuhi Nui** — he kuputuhi 18pt, nui ake rānei (14pt miramira, nui ake rānei)

## Aronui Huaputa {#output-schema}

Ka whakahoki te āheinga i tētahi pūrongo whakamana taipitopito:

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

### Ngā Āpure Huaputa {#output-fields}

| Āpure | Momo | Whakaahuatanga |
|-------|------|-------------|
| `compliant` | boolean | Mēnā e tutuki ana te papatae katoa i te taumata WCAG kua tohua |
| `wcag_level` | string | Te taumata WCAG i tirohia |
| `pairs` | array | Ngā hua taipitopito mō ia takirua tae |
| `contrast_ratio` | number | Te ōwehenga kanorau kua tātaihia (1:1 ki te 21:1) |
| `status` | string | "pass", "fail" rānei mō ia takirua |
| `recommendations` | array | Ngā tūtohutanga hei whakapai ake i ngā takirua kāore e tutuki |

## Tauira Whakamahi {#usage-example}

**Tohuaki:**
```
Tirohia mēnā e tutuki ana taku papatae tae i ngā paerewa WCAG AA. Kei ahau te tae matua #678233, te tae kuputuhi #ffffff, me te papamuri #f5f5f5.
```

**Hua:**
Ka whakamana te āheinga i ngā huinga tae katoa, ā, ka whakahoki:
- ✅ Matua + Kuputuhi: ōwehenga 5.2:1 (ka tutuki i te WCAG AA)
- ✅ Papamuri + Kuputuhi: ōwehenga 12.1:1 (ka tutuki i te WCAG AAA)
- Katoa: E tautuku ana ki te WCAG AA

## Tuitui ki te Theme Builder {#integration-with-theme-builder}

Ina whakamahi i te kōwhiringa ahunga-hoahoa a Theme Builder, ka mahia e te āheinga Whakamana i te Kanorau o te Papatae:

1. Ka tātari i tō papatae tae kua tīpakohia
2. Ka tirohia ngā huinga kuputuhi-papamuri katoa
3. Ka whakamana ki tō taumata WCAG kua kōwhiria
4. Ka whakarato tūtohutanga mō ngā takirua kāore e tautuku
5. Ka ārai i te hoatu i ngā kaupapa tae kāore e taea te uru

## Ngā Tikanga Pai {#best-practices}

- **Tīmata ki te taumata AA** — ko WCAG AA te paerewa mō te nuinga o ngā pae tukutuku
- **Whakamātauria i mua i te hoatu** — whakamana tō papatae i mua i te ū ki tētahi hoahoa
- **Tirohia ngā huinga katoa** — whakarite kia tutuki katoa ngā kuputuhi, ngā hononga, me ngā huānga UI i ngā paerewa
- **Whakaarohia ngā manakohanga kaiwhakamahi** — tērā pea he tairongo tae tāpiri tō ētahi kaiwhakamahi
- **Whakamahia ngā kaitirotiro kanorau** — whakakotahitia tēnei āheinga me ngā taputapu pūtirotiro hei whakaū

## Ngā Takirua Ka Rahua me Ngā Tūtohutanga {#failing-pairs-and-recommendations}

Ki te rahua te whakamana o tētahi takirua tae, ka whakarato tūtohutanga te āheinga:

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

## Ngā Āheinga E Hāngai Ana {#related-abilities}

- [Hanga Logo SVG](./generate-logo-svg.md) — waihangatia ngā moko me tō papatae tae kua whakamanatia
- [Waihanga Tahua](./create-menu.md) — hanga whakatere me ngā tae e taea ana te uru
