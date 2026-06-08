---
title: Ellenőrizze a paletta kontrasztját
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Paletta Kontrasztának Ellenőrzése

A **Paletta Kontraszt Ellenőrző** funkció ellenőrzi a tervezési palettájukban lévő színek párokat WCAG (Web Content Accessibility Guidelines) megfelelőség szempontjából, mielőtt azok a témájára kerülnek.

## Áttekintés

Ez a funkció biztosítja, hogy az oldal színschema megfeleljen az hozzáférhetőségi (accessibility) előírásoknak, a szöveg és a háttér színei közötti kontrasztarányok ellenőrzésével. Ez segít elkerülni olyan színek kombinációit, amelyeket látási nehézségeket tapasztaló felhasználóknak nehéz olvasni.

## Input Formátum

A funkció egy színpalettát fogadott inputként:

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

### Paraméterek

| Paraméter | Típus | Kötelező | Leírás |
|-----------|------|----------|-------------|
| `colors` | array | Yes | Színszín objektumok tömbje, amelyeknek `name` és `hex` tulajdonságai vannak. |
| `wcag_level` | string | No | WCAG megfelelőségi szint: "A", "AA" (alapértelmezett), vagy "AAA". |
| `pairs_to_check` | array | No | Specifikus színek párokat a validációhoz (pl. `["primary-text", "background-text"]`). |

## Ellenőrzött WCAG Szintek

A funkció a WCAG előírások szerint ellenőrzi a kontrasztarányokat:

| Szint | Normál szöveg | Nagy szöveg | Minimális Arány |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normál szöveg** — szöveg, amely kisebb, mint 18pt (vagy 14pt bold).
- **Nagy szöveg** — szöveg, amely 18pt vagy nagyobb (vagy 14pt bold vagy nagyobb).

## Output Schema

A funkció részletes validációs jelentést ad vissza:

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

### Kimeneti Mezerek

| Mezerek | Típus | Leírás |
|-------|------|-------------|
| `compliant` | boolean | Megállapítja, hogy az egész paletta megfelel-e a megadott WCAG szintre. |
| `wcag_level` | string | Az ellenőrzött WCAG szint. |
| `pairs` | array | Részletes eredmények minden színek pára számára. |
| `contrast_ratio` | number | A kiszámított kontrasztarány (1:1-től 21:1-ig). |
| `status` | string | "pass" vagy "fail" minden pár számára. |
| `recommendations` | array | Javaslatok a hibás párokre javítására. |

## Használati Példa

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Result:**
A funkció ellenőrzi az összes színek kombinációját, és a következőket ad vissza:
- ✅ Primary + Text: 5.2:1 arány (megfelel WCAG AA-nak)
- ✅ Background + Text: 12.1:1 arány (megfelel WCAG AAA-nak)
- Overall: WCAG AA-hoz megfelel

## Integráció a Témaépítővel

Amikor a Témaépítő (Theme Builder) design-irányítási kiválasztását használja, a Paletta Kontraszt Ellenőrző funkció:

1. Elemzi a kiválasztott színpaletáját.
2. Ellenőrzi az összes szöveg-háttér kombinációját.
3. Validálja a kiválasztott WCAG szintre.
4. Javaslatokat ad a nem megfelelők párokre.
5. Megakadályozza a hozzáférhetetlen színschemáinak alkalmazását.

## Legjobb Gyakorlatok

- **Kezdje az AA szinttel** — WCAG AA az legtöbb weboldalra vonatkozó standard.
- **Tesztelje az alkalmazás előtt** — validálja a palettáját, mielőtt elkötelezővé válik egy design mellett.
- **Ellenőrizze az összes kombinációt** — győződjön róla, hogy a szöveg, a linkek és az UI elemek mind megfelelnek az előírásoknak.
- **Font vegye figyelembe a felhasználói preferenciákat** — egyes felhasználóknak lehet színsérzébségük.
- **Használjon kontraszt ellenőzőt** — kombinálja ezt a funkciót böngésző eszközökkel a megerősítéshez.

## Hibás Párok és Javaslatok

Ha egy színek pára nem felel meg a validációnek, a funkció javaslatokat ad:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Hasítsa világosabbra a szöveg színt, hogy #ffffff legyen (az arány 5.2:1 lenne)",
    "Sötéltesse el a háttér színt, hogy #556b2f legyen (az arány 4.8:1 lenne)",
    "Használjon egy másikat primary színt, például #4a6b1f (az arány 6.1:1 lenne)"
  ]
}
```

## Kapcsolódó Funkciók

- [Generate Logo SVG](./generate-logo-svg.md) — képeket hozz létre a validált színpaletájával
- [Create Menu](./create-menu.md) — építsen navigációt hozzáférhető színekkel
