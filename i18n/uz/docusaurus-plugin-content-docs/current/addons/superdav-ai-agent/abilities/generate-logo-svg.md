---
title: Logotip SVG yaratish
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG yaratish

**Logo SVG yaratish** qobiliyati Theme Builder’ga avtomatik namespace-xavfsiz sanitisation bilan maxsus logo SVG’larini bevosita WordPress saytingizga yaratish va joylashtirish imkonini beradi.

## Umumiy ko‘rinish {#overview}

Bu qobiliyat saytingizning brending yo‘nalishi va dizayn afzalliklari asosida kengaytiriladigan vektor grafikasi (SVG) logolarini yaratadi. Yaratilgan SVG’lar vizual yaxlitlikni saqlagan holda WordPress’da foydalanish uchun xavfsiz bo‘lishini ta’minlash maqsadida avtomatik sanitisation qilinadi.

## Parametrlar {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Logo yaratiladigan sayt nomi |
| `style` | string | Yes | Dizayn uslubi (masalan, "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Logoda ishlatiladigan hex rang kodlari massivi (masalan, `["#678233", "#ffffff"]`) |
| `width` | number | No | SVG kengligi pikselda (standart: 200) |
| `height` | number | No | SVG balandligi pikselda (standart: 200) |
| `include_text` | boolean | No | Sayt nomini logoda matn sifatida kiritish-kiritmaslik (standart: true) |

## Chiqish formati {#output-format}

Qobiliyat quyidagi tuzilishga ega SVG satrini qaytaradi:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG sanitisation xatti-harakati {#svg-sanitisation-behaviour}

Yaratilgan SVG’lar quyidagilar uchun avtomatik namespace-xavfsiz sanitisation’dan o‘tadi:

- **Xavfsiz bo‘lmagan atributlarni olib tashlash** — event handler’lar, skriptlar va potensial xavfli atributlarni olib tashlaydi
- **Namespace’larni saqlash** — to‘g‘ri render qilish uchun SVG namespace’larini (xmlns, xlink) saqlab qoladi
- **Tuzilmani tekshirish** — SVG W3C standartlariga mos kelishini ta’minlaydi
- **Entity’larni kodlash** — matn kontentidagi maxsus belgilarni to‘g‘ri escape qiladi
- **Tashqi havolalarni olib tashlash** — tashqi stylesheets va rasm havolalarini olib tashlaydi

Bu SVG’ni qo‘shimcha sanitisation talab qilmasdan bevosita WordPress ichiga joylashtirish uchun xavfsiz bo‘lishini ta’minlaydi.

## Foydalanish namunasi {#usage-example}

**Prompt:**
```
"CloudSync" deb nomlangan tech startup’im uchun ko‘k va oq ranglardan foydalangan holda zamonaviy logo yarating.
```

**Natija:**
Qobiliyat quyidagilarga ega SVG logo yaratadi:
- "CloudSync" sayt nomini o‘z ichiga oladi
- Belgilangan ko‘k va oq rang sxemasidan foydalanadi
- Zamonaviy dizayn tamoyillariga amal qiladi
- Avtomatik sanitisation qilingan va foydalanishga tayyor bo‘ladi

## Theme Builder bilan integratsiya {#integration-with-theme-builder}

Theme Builder’ning dizayn yo‘nalishini tanlashidan foydalanganda, Logo SVG yaratish qobiliyati:

1. Dizayn yo‘nalishingiz va rang palitrangizni tahlil qiladi
2. Afzalliklaringizga mos maxsus SVG logo yaratadi
3. Logoni avtomatik ravishda saytingiz header/brending hududiga joylashtiradi
4. SVG’ni WordPress media’da maxsus logo sifatida saqlaydi

## Eng yaxshi amaliyotlar {#best-practices}

- **Aniq uslub afzalliklarini bering** — xohlagan dizayn uslubingizni tasvirlang (zamonaviy, klassik, o‘ynoqi va hokazo)
- **Ranglarni belgilang** — izchillik uchun brend ranglaringizni kiriting
- **Render qilishni sinab ko‘ring** — logo turli ekran o‘lchamlarida to‘g‘ri ko‘rinishini tekshiring
- **Yanada moslang** — o‘lcham va joylashuvni sozlash uchun WordPress’ning logo moslash vositalaridan foydalaning

## Cheklovlar {#limitations}

- SVG logolar statik grafika sifatida yaratiladi (animatsiyali emas)
- Ko‘p elementli murakkab logolar qo‘lda takomillashtirishni talab qilishi mumkin
- Maxsus shriftlar qo‘llab-quvvatlanmaydi; matn tizim shriftlaridan foydalanadi
- Juda katta yoki juda kichik o‘lchamlar sifatga ta’sir qilishi mumkin

## Bog‘liq qobiliyatlar {#related-abilities}

- [Palitra kontrastini tekshirish](./validate-palette-contrast.md) — accessibility uchun rang kontrastini tekshiring
- [Menu yaratish](./create-menu.md) — saytingiz uchun navigatsiya menyularini yarating
