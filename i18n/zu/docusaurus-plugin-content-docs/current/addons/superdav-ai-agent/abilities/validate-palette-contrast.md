---
title: Qinisekisa Ukugqama Kwephalethi
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Qinisekisa Ukugqama Kwe-Palette {#validate-palette-contrast}

Ikhono le-**Validate Palette Contrast** lihlola amapheya emibala ku-palette yakho yokudizayina ukuze ahambisane ne-WCAG (Web Content Accessibility Guidelines) ngaphambi kokuwasebenzisa ku-theme yakho.

## Ukubuka konke {#overview}

Leli khono liqinisekisa ukuthi uhlelo lwemibala lwesayithi lakho luhlangabezana namazinga okufinyeleleka ngokuhlola izilinganiso zokugqama phakathi kombhalo nemibala yangemuva. Lisiza ukuvimbela izinhlanganisela zemibala ezingase zibe nzima ukufundwa abasebenzisi abanokukhubazeka kokubona.

## Ifomethi Yokufaka {#input-format}

Ikhono lamukela i-palette yemibala njengokufaka:

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

### Amapharamitha {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | I-array yezinto zombala ezinezici ze-`name` ne-`hex` |
| `wcag_level` | string | No | Izinga lokuhambisana ne-WCAG: "A", "AA" (okuzenzakalelayo), noma "AAA" |
| `pairs_to_check` | array | No | Amapheya emibala athile okufanele aqinisekiswe (isb., `["primary-text", "background-text"]`) |

## Amazinga e-WCAG Ahlolwayo {#wcag-levels-checked}

Ikhono liqinisekisa izilinganiso zokugqama ngokwamazinga e-WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Umbhalo Ojwayelekile** — umbhalo omncane kuno-18pt (noma 14pt bold)
- **Umbhalo Omkhulu** — umbhalo ongu-18pt noma omkhulu (noma 14pt bold noma omkhulu)

## Isikimu Sokuphumayo {#output-schema}

Ikhono libuyisa umbiko wokuqinisekisa onemininingwane:

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

### Izinkambu Zokuphumayo {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ukuthi i-palette yonke iyahlangabezana yini nezinga le-WCAG elicacisiwe |
| `wcag_level` | string | Izinga le-WCAG elihloliwe |
| `pairs` | array | Imiphumela eningiliziwe yepheya ngalinye lombala |
| `contrast_ratio` | number | Isilinganiso sokugqama esibaliwe (1:1 kuya ku-21:1) |
| `status` | string | "pass" noma "fail" yepheya ngalinye |
| `recommendations` | array | Iziphakamiso zokuthuthukisa amapheya ahlulekayo |

## Isibonelo Sokusetshenziswa {#usage-example}

**Prompt:**
```
Hlola ukuthi i-palette yami yemibala iyahlangabezana yini namazinga e-WCAG AA. Nginombala oyinhloko #678233, umbala wombhalo #ffffff, kanye nengemuva #f5f5f5.
```

**Umphumela:**
Ikhono liqinisekisa zonke izinhlanganisela zemibala bese libuyisa:
- ✅ Oyinhloko + Umbhalo: isilinganiso esingu-5.2:1 (siyaphasa i-WCAG AA)
- ✅ Ingemuva + Umbhalo: isilinganiso esingu-12.1:1 (siyaphasa i-WCAG AAA)
- Sekukonke: Iyahambisana ne-WCAG AA

## Ukuhlanganiswa ne-Theme Builder {#integration-with-theme-builder}

Lapho usebenzisa ukukhetha kwesiqondiso sokudizayina kwe-Theme Builder, ikhono le-Validate Palette Contrast:

1. Lihlaziya i-palette yemibala oyikhethile
2. Lihlola zonke izinhlanganisela zombhalo nengemuva
3. Liqinisekisa ngokumelene nezinga le-WCAG olikhethile
4. Linikeza izincomo zamapheya angahambisani
5. Livimbela ukusebenzisa izinhlelo zemibala ezingafinyeleleki

## Izindlela Ezihamba Phambili {#best-practices}

- **Qala ngezinga le-AA** — i-WCAG AA iyindinganiso yamawebhusayithi amaningi
- **Hlola ngaphambi kokusebenzisa** — qinisekisa i-palette yakho ngaphambi kokuzibophezela kudizayini
- **Hlola zonke izinhlanganisela** — qinisekisa ukuthi umbhalo, izixhumanisi, nezinto ze-UI zonke zihlangabezana namazinga
- **Cabangela okuthandwa abasebenzisi** — abanye abasebenzisi bangase babe nokuzwela okwengeziwe kumbala
- **Sebenzisa izihloli zokugqama** — hlanganisa leli khono namathuluzi esiphequluli ukuze uqinisekise

## Amapheya Ahlulekayo Nezincomo {#failing-pairs-and-recommendations}

Uma ipheya lombala lihluleka ukuqinisekiswa, ikhono linikeza izincomo:

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

## Amakhono Ahlobene {#related-abilities}

- [Khiqiza i-Logo SVG](./generate-logo-svg.md) — dala ama-logo nge-palette yakho yemibala eqinisekisiwe
- [Dala Imenyu](./create-menu.md) — yakha ukuzulazula ngemibala efinyelelekayo
