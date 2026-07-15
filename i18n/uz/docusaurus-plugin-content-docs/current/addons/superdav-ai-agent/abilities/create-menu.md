---
title: Menyu yaratish
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menyu yaratish

**Menyu yaratish** qobiliyati sahifa sarlavhalaridan alohida bo‘lgan farqli navigatsiya yorliqlarini qo‘llab-quvvatlagan holda WordPress navigatsiya menyularini yaratadi.

## Umumiy ko‘rinish {#overview}

Bu qobiliyat standart menyu yaratish funksionalligini `navigation_label` parametrini ko‘rsatish imkoniyati bilan kengaytiradi. Bu navigatsiyada ko‘rsatiladigan yorliq sahifa sarlavhasidan farq qiladigan menyular yaratishga imkon beradi va site tuzilmasi hamda foydalanuvchi tajribasida ko‘proq moslashuvchanlik ta’minlaydi.

## Parametrlar {#parameters}

| Parametr | Tur | Majburiy | Tavsif |
|-----------|------|----------|-------------|
| `name` | string | Ha | Menyu nomi, masalan, `Primary Navigation` |
| `location` | string | Yo‘q | Ushbu menyu biriktiriladigan theme joylashuvi, masalan, `primary` |
| `navigation_label` | string | Yo‘q | Navigatsiyada ko‘rsatiladigan yorliq (sahifa sarlavhasidan farqli) |

## Qaytariladigan qiymat {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigatsiya yorlig‘i va sahifa sarlavhasi {#navigation-label-vs-page-title}

`navigation_label` parametri ichki menyu nomini foydalanuvchilarga ko‘rsatiladigan yorliqdan ajratishga imkon beradi:

- **`name`** — WordPress tomonidan ishlatiladigan ichki menyu identifikatori (masalan, "Primary Navigation")
- **`navigation_label`** — Site tashrif buyuruvchilariga navigatsiyada ko‘rsatiladigan yorliq (masalan, "Main Menu")

Bu quyidagi hollarda foydali:
- Ichki nomlash qoidangiz foydalanuvchiga ko‘rinadigan yorliqlardan farq qilsa
- Navigatsiyada admin paneldagidan qisqaroq yorliqlarni xohlasangiz
- Turli yorliq uzunliklariga ega bir nechta tillarni qo‘llab-quvvatlashingiz kerak bo‘lsa
- Muayyan hududlar yoki foydalanuvchi guruhlari uchun menyular yaratayotgan bo‘lsangiz

## Foydalanish misollari {#usage-examples}

### 1-misol: Navigatsiya yorlig‘iga ega oddiy menyu {#example-1-simple-menu-with-navigation-label}

**So‘rov:**
```
"Main Navigation" deb nomlangan va navigatsiya yorlig‘i "Menu" bo‘lgan asosiy navigatsiya menyusini yarating.
```

**Natija:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 2-misol: Muayyan theme joylashuvi uchun menyu {#example-2-menu-for-specific-theme-location}

**So‘rov:**
```
"Footer Links" deb nomlangan, navigatsiya yorlig‘i "Quick Links" bo‘lgan footer menyusini yarating va uni footer joylashuviga biriktiring.
```

**Natija:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Theme Builder bilan integratsiya {#integration-with-theme-builder}

Theme Builder ishlatilganda, Menyu yaratish qobiliyati:

1. Mavjud theme menyu joylashuvlarini avtomatik aniqlaydi
2. Dizayningiz uchun mos navigatsiya yorliqlariga ega menyular yaratadi
3. Menyularni to‘g‘ri theme joylashuvlariga biriktiradi
4. Yaratilgandan keyin menyu elementlarini qo‘shishni qo‘llab-quvvatlaydi

## Bog‘liq qobiliyatlar {#related-abilities}

- **`add_menu_item`** — Mavjud menyuga elementlar qo‘shish
- **`update_menu`** — Menyu nomini o‘zgartirish yoki uni theme joylashuviga qayta biriktirish
- **`delete_menu`** — Site’ingizdan menyuni olib tashlash

## Eng yaxshi amaliyotlar {#best-practices}

- **Aniq navigatsiya yorliqlaridan foydalaning** — yorliqlarni foydalanuvchilar uchun ixcham va tavsifli qiling
- **Theme joylashuvlariga moslang** — to‘g‘ri ko‘rsatilishi uchun menyularni to‘g‘ri theme joylashuviga biriktiring
- **Menyu tuzilmasini rejalashtiring** — elementlarni yaratishdan oldin menyu ierarxiyangizni belgilang
- **Moslashuvchanlikni sinab ko‘ring** — menyular mobil qurilmalarda to‘g‘ri ko‘rsatilishini tekshiring
- **Yorliqlarni lokallashtiring** — turli til versiyalari uchun turli navigatsiya yorliqlaridan foydalaning

## Cheklovlar {#limitations}

- Navigatsiya yorliqlari faqat ko‘rsatish uchun; ichki `name` hali ham WordPress identifikatsiyasi uchun ishlatiladi
- Theme qo‘llab-quvvatlashi farq qiladi; barcha theme’lar barcha menyu joylashuvlarini qo‘llab-quvvatlamaydi
- Menyu elementlari menyu yaratilgandan keyin alohida qo‘shilishi kerak
- Navigatsiya yorlig‘ini o‘zgartirish menyuni yangilashni talab qiladi

## Bog‘liq qobiliyatlar {#related-abilities-1}

- [Logo SVG yaratish](./generate-logo-svg.md) — site header’i uchun logotiplar yaratish
- [Palitra kontrastini tekshirish](./validate-palette-contrast.md) — foydalanish uchun qulay rang sxemalarini ta’minlash
