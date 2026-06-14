---
title: Tema quruvchi qobiliyatlar
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Tema Quruvchi Qobiliyatlar: Blok Temalarni Skaffoldlash va Faollashtirish

Superdav AI Agent v1.12.0 sizga chat interfeysidan bevosita maxsus blok temalarni yaratish va joylashtirish imkonini beradigan ikki kuchli qobiliyatni taqdim etadi.

## Umumiy Ko'rinish

**scaffold-block-theme** va **activate-theme** qobiliyatlari agentlarga quyidagilarni amalga oshirish imkonini beradi:
- Sizning ko'rsatmalaringiz asosida to'liq, ishlab chiqarishga tayyor blok temalarni yaratish
- Manuel aralashuvsiz temalarni saytingizda avtomatik faollashtirish
- Yo'naltirilgan dizayn qarorlari orqali uyg'un vizual identitetlar yaratish

## Blok Temani Skaffoldlash (Scaffold Block Theme)

**scaffold-block-theme** qobiliyati sizga to'liq tema tuzilishi bilan yangi WordPress blok temasini yaratadi, unda quyidagilar bo'ladi:

- `theme.json` konfiguratsiyasi va dizayn tokenlari
- Umumiy layoutlar uchun blok shablon fayllari
- Maxsus blok stili va variantlari
- Tema metadata va qo'llab-quvvatlash deklaratsiyalari

### Qanday ishlatish

Superdav AI Agent bilan suhbatda tema yaratishni so'rashingiz mumkin:

```
"Modern Agency nomli, ko'k va oq ranglar sxemasi, sans-serif tipografiya va professional layoutga ega blok temani yarating"
```

Agent quyidagilarni qiladi:
1. Suhbat orqali sizning dizayn afzalliklaringizni yig'adi
2. To'liq tema tuzilmasini yaratadi
3. Barcha kerakli tema fayllarini tayyorlaydi
4. Temani faollashtirish uchun tayyorlaydi

### Kutilayotgan natija

Imkonlik muvaffaqiyatli bajarilganda, siz quyidagilarni ko'rasiz:

✓ Tema "Modern Agency" muvaffaqiyatli tuzilgan
  Joylashuv: /wp-content/themes/modern-agency/
  Ranglar: Asosiy #0066CC, Ikkinchi #FFFFFF
  Tipografiya: Inter (sans-serif)
  Holat: Faollashishga tayyor

## Temani faollashtirish

**activate-theme** imkoniyati sizning saytingizni yangi tuzilgan yoki mavjud blok temaga o'tkazadi.

### Qanday ishlatiladi

Tema tuzilgandan so'ng, uni darhol faollashtirishingiz mumkin:

```
"Modern Agency temani faollashtirish"
```

Yoki mavjud har qanday temaga o'tish uchun:

```
"Twentytwentyfour temasiga o'tish"
```

### Kutilayotgan natija

Faollashtirish muvaffaqiyatli yakunlanganda:

```
✓ Tema muvaffaqiyatli faollashtirildi
  Faol tema: Modern Agency
  Oldingi tema: Twentytwentyfour
  Joyf bo'yicha: https://yoursite.com
  Izoh: Layoutni tekshirish uchun veb-saytingizning bosh sahifasiga kiring

## Ishlash jarayoni: Scaffold va Faollashtirish

Oddiy ishjarasi ikkala imkoniyatni birlashtiradi:

1. **Tema yaratish so'rovi**: "Mening SaaS landing sahifam uchun blok temani yarating"
2. **Agent tema scaffold qiladi**: fayllar va dizayn tokenlarini yaratadi
3. **Tekshirish va takomillashtirish**: Kerak bo'lsa, dizayn o'zgarishlari haqida gaplashish
4. **Faollashtirish**: "Temani hozir faollashtiring"
5. **Tekshirish**: Yangi dizayning ishlayotganligini tasdiqlash uchun veb-saytingizga tashrif buyuring

## Dizayn tokenlari va sozlash

Scaffolded temalar WordPress dizayn tokenlaridan ( `theme.json` orqali) foydalanadi:

- **Ranglar**: Asosiy, ikkilangan, aksent, neytral palitra
- **Tipografi**: Font oilalari, o'lchamlari, vaznlari, qator balandliklari
- **Bo'shliqlar (Spacing)**: Padding, margin, gap skalalari
- **Cheklovlar (Borders)**: Radiusi va kenglik tokenlari
- **Soyalar (Shadows)**: Yuqori darajalar

Bu tokenlar `theme.json` faylida markazlashtirilgan bo'ladi, bu esa butun dizayn tizimingizni bitta fayldan oson sozlash imkonini beradi.

## Cheklovlar va Eslatmalar

- Temalar `/wp-content/themes/` papkasida scaffold qilinadi va WordPress nomlash qoidalariga rioya qilish kerak
- Faollashtirish uchun WordPress saytingizda tegishli ruxsatlarga ega bo'lish kerak
- Temalardagi maxsus PHP kodi minimal darajada bo'ladi; murakkab funksionallik uchun pluginlardan foydalaning
- Blok temalar WordPress 5.9 va undan keyingi versiyalar bilan eng yaxshi ishlaydi

## Muammolarni Qayta Ko'rib Chiqish (Troubleshooting)

**Scaffoldingdan keyin tema ko'rinmaydi**
- Tema katalogining mavjudligini va uning to'g'ri ruxsatlarga ega ekanligini tekshiring.
- `theme.json` faylining to'g'ri JSON formatida ekanligini tekshiring.
- Tema nomining mavjud temalar bilan to'qnashmasligiga ishonch hosil qiling.

**Faollashish muvaffaqiyatsiz bo'lyapti**
- Sizda administrator huquqlari borligini tasdiqlang.
- Tema katalogining WordPress tomonidan o'qilishi mumkinligini tekshiring.
- Batafsillar uchun WordPress xatolik yozuvlarini ko'rib chiqing.

**Design tokens qo'llanilmayapti**
- `theme.json` sintaksisining to'g'ri ekanligini tasdiqlang.
- Barcha caching pluginlarni o'chiring (clear).
- WordPress versiyang foydalanayotgan tokenlarni qo'llab-quvvatlayotganini tekshiring.

## Keyingi qadamlar

Tema faollashtirilgandan so'ng siz quyidagilarni qila olasiz:
- Matnlar, ranglar va bo'shliq (spacing)ni takomillashtirish uchun **Design System Aesthetics** ko'nikmasidan foydalanishingiz mumkin.
- WordPress bloklar muharriri orqali har bir blokning uslubini o'zgartirishingiz mumkin.
- Tema `style.css` faylida maxsus CSS qo'shishingiz mumkin.
- Ma'lum bir sahifa turlari uchun maxsus blok shablonlarini yaratishingiz mumkin.
