---
title: Qinisekisa umahluko wephalethi
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Qinisekisa Umahluko wePalette

Isakhono se-**Validate Palette Contrast** sijonga izibini zemibala kwi-palette yoyilo lwakho ukuze zihambelane ne-WCAG (Web Content Accessibility Guidelines) ngaphambi kokuzisebenzisa kwi-theme yakho.

## Isishwankathelo {#overview}

Esi sakhono siqinisekisa ukuba iskimu semibala sesayithi yakho siyahlangabezana nemigangatho yokufikeleleka ngokuvavanya imilinganiselo yomahluko phakathi kombala wombhalo nombala ongasemva. Sinceda ukunqanda indibaniselwano yemibala enokuba nzima ukuyifunda kubasebenzisi abanokuphazamiseka kokubona.

## Ifomathi yeNgeniso {#input-format}

Esi sakhono samkela i-palette yemibala njengengeniso:

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

### Iiparamitha {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Uluhlu lwezinto zemibala ezineempawu `name` kunye `hex` |
| `wcag_level` | string | No | Inqanaba lokuhambelana ne-WCAG: "A", "AA" (elisisiseko), okanye "AAA" |
| `pairs_to_check` | array | No | Izibini ezithile zemibala ekufuneka ziqinisekiswe (umz., `["primary-text", "background-text"]`) |

## Amanqanaba e-WCAG Ajongiweyo {#wcag-levels-checked}

Esi sakhono siqinisekisa imilinganiselo yomahluko ngokwemigangatho ye-WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Umbhalo Oqhelekileyo** — umbhalo omncinci kune-18pt (okanye 14pt bold)
- **Umbhalo Omkhulu** — umbhalo oyi-18pt okanye omkhulu (okanye 14pt bold okanye omkhulu)

## Isikimu seMveliso {#output-schema}

Esi sakhono sibuyisa ingxelo eneenkcukacha yokuqinisekisa:

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

### Iindawo zeMveliso {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Nokuba i-palette iyonke iyahlangabezana nenqanaba le-WCAG elichaziweyo |
| `wcag_level` | string | Inqanaba le-WCAG elijongiweyo |
| `pairs` | array | Iziphumo ezineenkcukacha zesibini ngasinye semibala |
| `contrast_ratio` | number | Umlinganiselo womahluko obaliweyo (1:1 ukuya ku-21:1) |
| `status` | string | "pass" okanye "fail" kwisibini ngasinye |
| `recommendations` | array | Iingcebiso zokuphucula izibini ezingaphumeleliyo |

## Umzekelo Wokusetyenziswa {#usage-example}

**Prompt:**
```
Jonga ukuba i-palette yam yemibala iyahlangabezana nemigangatho ye-WCAG AA. Ndinombala ophambili #678233, umbala wombhalo #ffffff, kunye nomva #f5f5f5.
```

**Isiphumo:**
Esi sakhono siqinisekisa zonke iindibaniselwano zemibala size sibuyise:
- ✅ Ophambili + Umbhalo: umlinganiselo 5.2:1 (uyapasa i-WCAG AA)
- ✅ Umva + Umbhalo: umlinganiselo 12.1:1 (uyapasa i-WCAG AAA)
- Ngokubanzi: Iyahambelana ne-WCAG AA

## Udibaniso ne-Theme Builder {#integration-with-theme-builder}

Xa usebenzisa ukhetho lwendlela-yoyilo lwe-Theme Builder, isakhono se-Validate Palette Contrast:

1. Sihlalutya i-palette yemibala oyikhethileyo
2. Sijonga zonke iindibaniselwano zombhalo-nomva
3. Siqinisekisa ngokuchasene nenqanaba le-WCAG olikhethileyo
4. Sinika iingcebiso ngezibini ezingahambelaniyo
5. Sithintela ukusetyenziswa kwezikimu zemibala ezingafikelelekiyo

## Iindlela Ezilungileyo {#best-practices}

- **Qala ngenqanaba le-AA** — i-WCAG AA ngumgangatho wezona webhusayithi zininzi
- **Vavanya ngaphambi kokusebenzisa** — qinisekisa i-palette yakho ngaphambi kokuzibophelela kuyilo
- **Jonga zonke iindibaniselwano** — qinisekisa ukuba umbhalo, amakhonkco, nezinto ze-UI zonke ziyahlangabezana nemigangatho
- **Qwalasela izinto ezikhethwa ngabasebenzisi** — abanye abasebenzisi banokuba novakalelo olongezelelekileyo kumbala
- **Sebenzisa izixhobo zokujonga umahluko** — dibanisa esi sakhono nezixhobo zebhrawuza ukuze uqinisekise

## Izibini Ezingaphumeleliyo kunye neZingcebiso {#failing-pairs-and-recommendations}

Ukuba isibini semibala siyasilela ukuqinisekiswa, esi sakhono sinika iingcebiso:

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

## Izakhono Ezihambelanayo {#related-abilities}

- [Yenza i-Logo SVG](./generate-logo-svg.md) — dala iilogo usebenzisa i-palette yakho yemibala eqinisekisiweyo
- [Yenza iMenu](./create-menu.md) — yakha ukuhamba ngembala efikelelekayo
