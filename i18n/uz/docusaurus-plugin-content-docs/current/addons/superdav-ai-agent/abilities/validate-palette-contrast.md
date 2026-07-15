---
title: Palitra kontrastini tekshirish
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palitra kontrastini tekshirish

**Validate Palette Contrast** qobiliyati dizayn palitrangizdagi rang juftliklarini theme'ingizga qo‘llashdan oldin WCAG (Web Content Accessibility Guidelines) talablariga muvofiqligini tekshiradi.

## Umumiy ko‘rinish {#overview}

Bu qobiliyat matn va fon ranglari orasidagi kontrast nisbatlarini tekshirish orqali site'ingiz rang sxemasi maxsus imkoniyatlar standartlariga mos kelishini ta’minlaydi. U ko‘rishida nuqsoni bo‘lgan foydalanuvchilar uchun o‘qish qiyin bo‘lishi mumkin bo‘lgan rang kombinatsiyalarining oldini olishga yordam beradi.

## Kiritish formati {#input-format}

Qobiliyat kirish sifatida rang palitrasini qabul qiladi:

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

### Parametrlar {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `colors` | array | Yes | `name` va `hex` xususiyatlariga ega rang obyektlari massivi |
| `wcag_level` | string | No | WCAG muvofiqlik darajasi: "A", "AA" (standart) yoki "AAA" |
| `pairs_to_check` | array | No | Tekshiriladigan aniq rang juftliklari (masalan, `["primary-text", "background-text"]`) |

## Tekshiriladigan WCAG darajalari {#wcag-levels-checked}

Qobiliyat kontrast nisbatlarini WCAG standartlariga muvofiq tekshiradi:

| Daraja | Oddiy matn | Katta matn | Minimal nisbat |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Oddiy matn** — 18pt dan kichik matn (yoki 14pt qalin)
- **Katta matn** — 18pt yoki undan katta matn (yoki 14pt qalin yoki undan katta)

## Chiqish sxemasi {#output-schema}

Qobiliyat batafsil tekshiruv hisobotini qaytaradi:

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

### Chiqish maydonlari {#output-fields}

| Field | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Butun palitra ko‘rsatilgan WCAG darajasiga mos keladimi |
| `wcag_level` | string | Tekshirilgan WCAG darajasi |
| `pairs` | array | Har bir rang juftligi bo‘yicha batafsil natijalar |
| `contrast_ratio` | number | Hisoblangan kontrast nisbati (1:1 dan 21:1 gacha) |
| `status` | string | Har bir juftlik uchun "pass" yoki "fail" |
| `recommendations` | array | Muvaffaqiyatsiz juftliklarni yaxshilash bo‘yicha tavsiyalar |

## Foydalanish misoli {#usage-example}

**Prompt:**
```
Rang palitram WCAG AA standartlariga mos kelishini tekshiring. Menda asosiy rang #678233, matn rangi #ffffff va fon #f5f5f5 bor.
```

**Natija:**
Qobiliyat barcha rang kombinatsiyalarini tekshiradi va qaytaradi:
- ✅ Asosiy + matn: 5.2:1 nisbat (WCAG AA dan o‘tadi)
- ✅ Fon + matn: 12.1:1 nisbat (WCAG AAA dan o‘tadi)
- Umumiy: WCAG AA ga mos

## Theme Builder bilan integratsiya {#integration-with-theme-builder}

Theme Builder'ning dizayn-yo‘nalish tanlovidan foydalanganda, Validate Palette Contrast qobiliyati:

1. Tanlangan rang palitrangizni tahlil qiladi
2. Barcha matn-fon kombinatsiyalarini tekshiradi
3. Tanlangan WCAG darajangizga nisbatan tekshiradi
4. Mos kelmaydigan juftliklar uchun tavsiyalar beradi
5. Maxsus imkoniyatlarga mos bo‘lmagan rang sxemalarini qo‘llashning oldini oladi

## Eng yaxshi amaliyotlar {#best-practices}

- **AA darajasidan boshlang** — WCAG AA aksariyat website'lar uchun standartdir
- **Qo‘llashdan oldin sinab ko‘ring** — dizaynga yakuniy qaror qilishdan oldin palitrangizni tekshiring
- **Barcha kombinatsiyalarni tekshiring** — matn, havolalar va UI elementlarining barchasi standartlarga mos kelishiga ishonch hosil qiling
- **Foydalanuvchi afzalliklarini hisobga oling** — ayrim foydalanuvchilarda qo‘shimcha rang sezgirligi bo‘lishi mumkin
- **Kontrast tekshiruvchilaridan foydalaning** — tasdiqlash uchun bu qobiliyatni brauzer vositalari bilan birga qo‘llang

## Muvaffaqiyatsiz juftliklar va tavsiyalar {#failing-pairs-and-recommendations}

Agar rang juftligi tekshiruvdan o‘tmasa, qobiliyat tavsiyalar beradi:

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

## Bog‘liq qobiliyatlar {#related-abilities}

- [Logo SVG yaratish](./generate-logo-svg.md) — tekshirilgan rang palitrangiz bilan logotiplar yarating
- [Menu yaratish](./create-menu.md) — maxsus imkoniyatlarga mos ranglar bilan navigatsiya yarating
