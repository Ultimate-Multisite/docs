---
title: Genzura itandukaniro ry’amabara y’urutonde rw’amabara
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Kugenzura Itandukaniro ry'Amabara ya Palette

Ubushobozi bwa **Validate Palette Contrast** bugenzura amabara abiri abiri muri palette y'igishushanyo cyawe kugira ngo bwemeze ko yubahiriza WCAG (Web Content Accessibility Guidelines) mbere yo kuyashyira kuri theme yawe.

## Incamake

Ubu bushobozi bwemeza ko gahunda y'amabara y'urubuga rwawe yujuje ibipimo by'ubugerwaho, bugenzura ibipimo by'itandukaniro hagati y'amabara y'inyandiko n'ay'inyuma. Bufasha gukumira ihuriro ry'amabara rishobora kugora abakoresha bafite ubumuga bwo kubona gusoma.

## Imiterere y'Ibyinjizwa

Ubu bushobozi bwakira palette y'amabara nk'icyinjizwa:

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

### Ibigenderwaho

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Urutonde rw'ibintu by'amabara bifite imiterere ya `name` na `hex` |
| `wcag_level` | string | No | Urwego rwo kubahiriza WCAG: "A", "AA" (rusanzwe), cyangwa "AAA" |
| `pairs_to_check` | array | No | Amabara abiri abiri yihariye yo kugenzura (urugero, `["primary-text", "background-text"]`) |

## Inzego za WCAG Zigenzurwa

Ubu bushobozi bugenzura ibipimo by'itandukaniro hakurikijwe ibipimo bya WCAG:

| Urwego | Inyandiko Isanzwe | Inyandiko Nini | Ikigereranyo Gito Cyemewe |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Inyandiko Isanzwe** — inyandiko ntoya kurusha 18pt (cyangwa 14pt iri bold)
- **Inyandiko Nini** — inyandiko ya 18pt cyangwa irenze (cyangwa 14pt iri bold cyangwa irenze)

## Imiterere y'Ibisohoka

Ubu bushobozi busubiza raporo irambuye y'igenzura:

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

### Imyanya y'Ibisohoka

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Niba palette yose yujuje urwego rwa WCAG rwasobanuwe |
| `wcag_level` | string | Urwego rwa WCAG rwagenzuwe |
| `pairs` | array | Ibisubizo birambuye kuri buri mabara abiri |
| `contrast_ratio` | number | Ikigereranyo cy'itandukaniro cyabazwe (1:1 kugeza 21:1) |
| `status` | string | "pass" cyangwa "fail" kuri buri mabara abiri |
| `recommendations` | array | Inama zo kunoza amabara abiri atatsinze |

## Urugero rw'Imikoreshereze

**Prompt:**
```
Reba niba palette y'amabara yanjye yujuje ibipimo bya WCAG AA. Mfite ibara ry'ibanze #678233, ibara ry'inyandiko #ffffff, n'inyuma #f5f5f5.
```

**Igisubizo:**
Ubu bushobozi bugenzura ihuriro ry'amabara yose maze bugasubiza:
- ✅ Ibanze + Inyandiko: ikigereranyo cya 5.2:1 (bitsinda WCAG AA)
- ✅ Inyuma + Inyandiko: ikigereranyo cya 12.1:1 (bitsinda WCAG AAA)
- Muri rusange: Byubahiriza WCAG AA

## Kwihuza na Theme Builder

Iyo ukoresha ihitamo ry'icyerekezo cy'igishushanyo rya Theme Builder, ubushobozi bwa Validate Palette Contrast:

1. Busesengura palette y'amabara wahisemo
2. Bugenzura ihuriro ryose ry'inyandiko n'inyuma
3. Bubyemeza bugereranyije n'urwego rwa WCAG wahisemo
4. Butanga inama ku mabara abiri atubahiriza ibisabwa
5. Bukumira gushyiraho gahunda z'amabara zitagerwaho neza

## Imikorere Myiza

- **Tangira ku rwego rwa AA** — WCAG AA ni cyo gipimo ku mbuga nyinshi
- **Gerageza mbere yo gushyiraho** — genzura palette yawe mbere yo kwiyemeza igishushanyo
- **Genzura ihuriro ryose** — menya ko inyandiko, amahuza, n'ibice bya UI byose byujuje ibipimo
- **Zirikana amahitamo y'abakoresha** — bamwe mu bakoresha bashobora kugira kumva amabara birenzeho
- **Koresha ibigenzura itandukaniro** — huza ubu bushobozi n'ibikoresho bya browser kugira ngo wemeze

## Amabara Abiri Atatsinze n'Inama

Niba amabara abiri atsinzwe mu igenzura, ubu bushobozi butanga inama:

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

## Ubushobozi Bifitanye Isano

- [Gukora Logo SVG](./generate-logo-svg.md) — kora logo ukoresheje palette y'amabara yawe yagenzuwe
- [Gukora Menu](./create-menu.md) — kubaka inzira zo kuyobora ukoresheje amabara agerwaho
