---
title: Kontrasta paletê piştrast bike
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Berevajîtiya Paletê Erê Bike

Şiyana **Berevajîtiya Paletê Erê Bike** cotên rengî di paleta sêwirana te de ji bo lihevhatina WCAG (Rêbernameyên Gihîştinê yên Naveroka Webê) kontrol dike berî ku wan li theme-a te bi kar bîne.

## Nêrîna Giştî {#overview}

Ev şiyan piştrast dike ku pergala rengên malpera te bi standardên gihîştinê re li hev tê, bi erêkirina rêjeyên berevajîtiyê di navbera nivîs û rengên paşxaneyê de. Ew alîkar dike ku têkelên rengî yên ku dibe ji bo bikarhênerên xwedî astengiyên dîtinê xwendina wan zehmet be neyên çêkirin.

## Forma Têketinê {#input-format}

Ev şiyan paletek rengî wek têketin qebûl dike:

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

### Parametre {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Erê | Array-a tiştên rengî bi taybetmendiyên `name` û `hex` |
| `wcag_level` | string | Na | Asta lihevhatina WCAG: "A", "AA" (standard), an "AAA" |
| `pairs_to_check` | array | Na | Cotên rengî yên taybet ji bo erêkirinê (mînak, `["primary-text", "background-text"]`) |

## Astên WCAG Yên Têne Kontrolkirin {#wcag-levels-checked}

Ev şiyan rêjeyên berevajîtiyê li gor standardên WCAG erê dike:

| Ast | Nivîsa Asayî | Nivîsa Mezin | Rêjeya Herî Kêm |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Nivîsa Asayî** — nivîsa ji 18pt biçûktir (an 14pt qelew)
- **Nivîsa Mezin** — nivîsa 18pt an mezintir (an 14pt qelew an mezintir)

## Şemaya Derketinê {#output-schema}

Ev şiyan raporek erêkirinê ya bi hûrgilî vedigerîne:

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

### Qadên Derketinê {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Ka tevahiya paletê asta WCAG ya diyarkirî pêk tîne an na |
| `wcag_level` | string | Asta WCAG ya ku hate kontrolkirin |
| `pairs` | array | Encamên hûrgilî ji bo her cotek rengî |
| `contrast_ratio` | number | Rêjeya berevajîtiyê ya hesabkirî (1:1 heta 21:1) |
| `status` | string | Ji bo her cotê "pass" an "fail" |
| `recommendations` | array | Pêşniyar ji bo baştirkirina cotên têkçûyî |

## Mînaka Bikaranînê {#usage-example}

**Daxwaz:**
```
Kontrol bike ka paleta rengên min standardên WCAG AA pêk tîne an na. Renga min a sereke #678233 e, renga nivîsê #ffffff e, û paşxane #f5f5f5 e.
```

**Encam:**
Ev şiyan hemû têkelên rengî erê dike û vedigerîne:
- ✅ Sereke + Nivîs: rêjeya 5.2:1 (WCAG AA derbas dike)
- ✅ Paşxane + Nivîs: rêjeya 12.1:1 (WCAG AAA derbas dike)
- Giştî: Bi WCAG AA re lihevhatî ye

## Yekbûn bi Theme Builder re {#integration-with-theme-builder}

Dema hilbijartina arasteya-sêwiranê ya Theme Builder bi kar tînî, şiyana Berevajîtiya Paletê Erê Bike:

1. Paleta rengî ya ku te hilbijartiye analîz dike
2. Hemû têkelên nivîs-paşxane kontrol dike
3. Li dijî asta WCAG ya ku te hilbijartiye erê dike
4. Ji bo cotên ne-lihevhatî pêşniyaran dide
5. Pêşî li bikaranîna pergalên rengî yên negihîştbar digire

## Kiryarên Herî Baş {#best-practices}

- **Bi asta AA dest pê bike** — WCAG AA ji bo piraniya malperan standard e
- **Berî bikaranînê test bike** — berî ku bi sêwiranê ve girêdayî bibî, paleta xwe erê bike
- **Hemû têkelan kontrol bike** — piştrast bike ku nivîs, girêdan, û hêmanên UI hemû standardan pêk tînin
- **Vebijarkên bikarhêneran li ber çavan bigire** — hinek bikarhêner dibe hestiyariya rengî ya zêdetir hebin
- **Kontrolkerên berevajîtiyê bi kar bîne** — vê şiyanê bi amûrên gerokê re ji bo piştrastkirinê bikar bîne

## Cotên Têkçûyî û Pêşniyar {#failing-pairs-and-recommendations}

Heke cotek rengî erêkirinê têk bibe, ev şiyan pêşniyaran dide:

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

## Şiyanên Têkildar {#related-abilities}

- [SVG-ya Logo-yê Çêke](./generate-logo-svg.md) — bi paleta rengî ya erêkirî logo çêke
- [Menu Çêke](./create-menu.md) — bi rengên gihîştbar navîgasyon ava bike
