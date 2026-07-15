---
title: Mehmondo‘stlik menyulari
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Mehmondo‘stlik menyulari

**Hospitality Menus** funksiyasi Theme Builder-ga tuzilmali taom va ichimlik menyu sahifalarini bevosita WordPress saytingizga yaratish va joylashtirish imkonini beradi.

## Umumiy ko‘rinish {#overview}

Theme Builder endi restoranlar, kafelar, barlar va catering xizmatlari kabi mehmondo‘stlik bizneslari uchun professional, tuzilmali menyu sahifalarini yaratishi mumkin. Bu menyular saytingiz dizayniga to‘liq integratsiya qilinadi va ularni oson yangilash hamda boshqarish mumkin.

## Qo‘llab-quvvatlanadigan mehmondo‘stlik turlari {#supported-hospitality-types}

- **Restoranlar** — to‘liq xizmat ko‘rsatiladigan ovqatlanish menyulari
- **Kafelar** — qahva va yengil taomlar menyulari
- **Barlar va lounge joylar** — ichimlik va yengil gazaklar menyulari
- **Nonvoyxonalar** — pishiriq va non menyulari
- **Catering xizmatlari** — tadbir menyusi variantlari
- **Food Trucklar** — ko‘chma ovqat xizmati menyulari
- **Pivo zavodlari va vinochilik xo‘jaliklari** — tavsiflari bilan ichimlik menyulari

## Menyu tuzilmasi {#menu-structure}

### Menyu toifalari {#menu-categories}

Menyular toifalarga ajratiladi:

- **Yengil gazaklar** — boshlang‘ich taomlar va kichik porsiyalar
- **Asosiy taomlar** — asosiy kurslar
- **Qo‘shimcha taomlar** — garnirlar va sabzavotlar
- **Desertlar** — shirin taomlar
- **Ichimliklar** — ichimliklar (alkogolli va alkogolsiz)
- **Maxsus takliflar** — kunlik yoki mavsumiy maxsus takliflar

### Menyu elementi formati {#menu-item-format}

Har bir menyu elementi quyidagilarni o‘z ichiga oladi:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Element maydonlari {#item-fields}

| Maydon | Tur | Tavsif |
|-------|------|-------------|
| `name` | string | Taom yoki ichimlik nomi |
| `description` | string | Elementning batafsil tavsifi |
| `price` | string | Narx (valyuta bilan formatlangan) |
| `dietary_info` | array | Parhezga oid atributlar (Vegan, Gluten-Free va h.k.) |
| `allergens` | array | Keng tarqalgan allergenlar (yong‘oqlar, dengiz qisqichbaqalari va h.k.) |
| `availability` | string | Qachon mavjudligi (kunlik, mavsumiy va h.k.) |

## Mehmondo‘stlik menyularini yaratish {#creating-hospitality-menus}

### 1-qadam: Menyu ma’lumotlarini taqdim eting {#step-1-provide-menu-information}

Theme Builder-ga menyuingiz haqida ayting:

```
Italiyan restoranım uchun appetizerlar, makaron taomlari, asosiy taomlar va desertlardan iborat restoran menyusini yarating. Narxlar va tavsiflarni kiriting.
```

### 2-qadam: Theme Builder menyuni yaratadi {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Tuzilmali menyu sahifasini yaratadi
2. Uni saytingiz theme-siga moslab dizayn qiladi
3. Elementlarni toifalarga ajratadi
4. Narxlar va tavsiflarni formatlaydi
5. Parhez va allergen ma’lumotlarini qo‘shadi

### 3-qadam: Ko‘rib chiqing va moslang {#step-3-review-and-customize}

Siz quyidagilarni qilishingiz mumkin:

1. Menyu elementlari va narxlarni tahrirlash
2. Toifalarni qo‘shish yoki olib tashlash
3. Toifalar ichida elementlar tartibini o‘zgartirish
4. Tavsiflar va parhez ma’lumotlarini yangilash
5. Uslub va joylashuvni sozlash

## Menyuni ko‘rsatish variantlari {#menu-display-options}

### To‘liq menyu sahifasi {#full-menu-page}

To‘liq menyuingizni ko‘rsatadigan alohida sahifa:

- Toifalar bo‘yicha tashkil etilgan
- Qidirish va filtrlash mumkin
- Chop etishga qulay joylashuv
- Mobil qurilmalarga mos dizayn

### Menyu vidjeti {#menu-widget}

Menyu bo‘limlarini boshqa sahifalarga joylashtiring:

- Bosh sahifada tavsiya etilgan elementlar
- Yon panelda kunlik maxsus takliflar
- Bar sahifasida ichimlik menyusi
- Footer-da desert namoyishi

### Menyu PDF {#menu-pdf}

Yuklab olinadigan PDF menyu yarating:

- Professional formatlash
- Chop etishga tayyor sifat
- Rasmlar va tavsiflarni o‘z ichiga oladi
- Ulashish va email orqali yuborish oson

## Parhez va allergen ma’lumotlari {#dietary-and-allergen-information}

### Parhez atributlari {#dietary-attributes}

Elementlarni parhez ma’lumotlari bilan belgilang:

- **Vegan** — hayvon mahsulotlari yo‘q
- **Vegetarian** — go‘sht yo‘q
- **Gluten-Free** — seliakiya kasalligi uchun xavfsiz
- **Dairy-Free** — sut mahsulotlari yo‘q
- **Nut-Free** — daraxt yong‘oqlari yoki yer yong‘oqlari yo‘q
- **Low-Carb** — uglevodlar kamaytirilgan
- **High-Protein** — oqsilga boy

### Allergen ogohlantirishlari {#allergen-warnings}

Keng tarqalgan allergenlarni kiriting:

- **Yong‘oqlar** — daraxt yong‘oqlari va yer yong‘oqlari
- **Dengiz qisqichbaqalari** — qisqichbaqasimonlar va mollyuskalar
- **Baliq** — barcha baliq turlari
- **Sut mahsulotlari** — sut va sut mahsulotlari
- **Tuxum** — tovuq tuxumlari
- **Soya** — soya mahsulotlari
- **Gluten** — bug‘doy va gluten saqlovchi donlar
- **Kunjut** — kunjut urug‘lari va yog‘i

## Menyu boshqaruvi {#menu-management}

### Narxlarni yangilash {#updating-prices}

Menyu narxlarini oson yangilang:

1. Menyu sahifasiga o‘ting
2. "Menyuni tahrirlash" tugmasini bosing
3. Elementlar uchun narxlarni yangilang
4. O‘zgarishlarni saqlang
5. O‘zgarishlar saytingizda darhol ko‘rinadi

### Mavsumiy elementlarni qo‘shish {#adding-seasonal-items}

Mavsumiy menyu variantlarini yarating:

1. Yangi menyu versiyasini yarating
2. Mavsumiy elementlarni qo‘shing
3. Elementlarni "Mavsumiy" deb belgilang
4. Mavjudlik sanalarini rejalashtiring
5. Mavsum davomida avtomatik ko‘rsating

### Maxsus takliflarni boshqarish {#managing-specials}

Kunlik yoki haftalik maxsus takliflarni ko‘rsating:

1. "Maxsus takliflar" toifasini yarating
2. Mavjudlik sanalari bilan elementlar qo‘shing
3. Maxsus takliflarni bosh sahifada ajratib ko‘rsating
4. Kunlik yoki haftalik yangilang
5. Eski maxsus takliflarni arxivlang

## Theme Builder bilan integratsiya {#integration-with-theme-builder}

Mehmondo‘stlik saytlari uchun Theme Builder-dan foydalanganda:

1. **Avtomatik menyu aniqlash** — oziq-ovqat/ichimlik biznesi ekaningizni aniqlaydi
2. **Menyu sahifasini yaratish** — professional menyu sahifalarini yaratadi
3. **Dizaynga moslash** — menyular saytingiz theme-siga mos keladi
4. **Mobil optimallashtirish** — menyular telefonlarda chiroyli ko‘rinadi
5. **SEO optimallashtirish** — menyular qidiruv tizimlariga mos

## Eng yaxshi amaliyotlar {#best-practices}

### Menyu dizayni {#menu-design}

- **Aniq tashkil etish** — mantiqiy toifa tuzilmasi
- **O‘qilishi oson tavsiflar** — ishtahani ochuvchi va ma’lumotli
- **Izchil narxlash** — aniq valyuta va formatlash
- **Professional fotosuratlar** — yuqori sifatli taom rasmlari
- **Bo‘sh joy** — sahifani haddan tashqari to‘ldirmang

### Kontent {#content}

- **Aniq tavsiflar** — elementlarni aniq tavsiflang
- **Maxsus takliflarni ajratib ko‘rsatish** — maxsus takliflar ko‘zga tashlansin
- **Allergenlarni kiriting** — allergenlarni doimo sanab o‘ting
- **Muntazam yangilang** — narxlar va elementlarni dolzarb saqlang
- **Ishtahani ochuvchi tildan foydalaning** — elementlar mazali eshitilsin

### Maxsus imkoniyatlar {#accessibility}

- **O‘qilishi oson shriftlar** — aniq, o‘qilishi qulay shriftlardan foydalaning
- **Yetarli kontrast** — matn o‘qilishi mumkinligiga ishonch hosil qiling
- **Parhez yorliqlari** — parhez variantlarini aniq belgilang
- **Allergen ogohlantirishlari** — allergenlarni yaqqol ko‘rsating
- **Mobilga mos** — barcha qurilmalarda sinab ko‘ring

## Misollar {#examples}

### Restoran menyusi tuzilmasi {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Kafe menyusi tuzilmasi {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Tegishli xususiyatlar {#related-features}

- [Menyu yaratish](../abilities/create-menu.md) — navigatsiya menyularini yarating
- [Dizayn yo‘nalishi](./design-direction.md) — saytingiz dizaynini moslashtiring
- [Kashfiyot suhbati](./discovery-interview.md) — saytingiz tuzilmasini rejalashtiring
