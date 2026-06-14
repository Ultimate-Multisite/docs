---
title: Dizayn tizimi estetikasi ko'nikmasi
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Dizayn Tizimi Estetika Ko'nikmasi

**Dizayn Tizimi Estetika ko'nikmasi** — bu saytingiz vizual identifikatorini takomillashtirish uchun yo'naltirilgan yondashuvdir. U sizga dizayn tizimingizni belgilaydigan tipografiya, ranglar, bo'shliq va harakat (motion) tokenlari haqida bir xil qaror qabul qilishda yordam beradi.

## Dizayn Tizimi Estetika nima?

Dizayn Tizimi Estetika — bu quyidagilarni o'z ichiga olgan tuzilgan ko'nikmadir:

- **Tipografiya**: Font oilalari, o'lchamlari, og'irliklari va qator balandliklari
- **Ranglar**: Asosiy, ikkilangan, aksent va neytral palitrasi
- **Bo'shliq (Spacing)**: Padding, margin va bo'shliq miqyoslari
- **Cheklovlar (Borders)**: Radiusi va kenglik tokenlari
- **Soyalar (Shadows)**: Yuqori joylashuv va chuqurlik tokenlari
- **Harakat (Motion)**: Animatsiyalar va o'tish effektlari

Bu qarorlar sizning tema faylingizdagi `theme.json` faylida qayd etiladi va uyg'un vizual tizimni yaratadi.

## Nega Dizayn Tizimi Estetikasidan Foydalanish Kerak?

### Bir xillik (Consistency)

Dizayn tizimi quyidagilarni ta'minlaydi:

- Barcha matnlar bir xil tipografiya miqyosidan foydalanadi
- Ranglar saytingiz bo'ylab bir xil ishlatiladi
- Bo'shliq bashorat qilinadigan tartibga amal qiladi
- Harakatlar birlashtirilgan hisoblanadi

### Samaradorlik (Efficiency)

Sahifa sahifa dizayn qarorlari qilish o'rniga, siz:

- Tokenlarni bir marta belgilaysiz
- Ularni hamma joyda qo'llaysiz
- Bitta qiymatni o'zgartirish orqali global darajada yangilaysiz

### Moslashuvchanlik (Flexibility)

Siz quyidagilarni qila olasiz:

- Butun dizayn tizimingizni tez sozlashingiz mumkin
- Turli estetikalar bilan tajriba qilish
- O'zgarishlar bilan brendning bir xilligini saqlab qolish

## Dizayn Tizimi Estetika Ko'nikmasini Faollashtirish

### Qo'lda Faollashtirish (Manual Activation)

Siz ko'rsatgan vaqtda ko'nikmani boshlashingiz mumkin:

```
"Menga dizayn tizimimni takomillashtirishga yordam bering"
```

yoki

```
"Saytning estetikalarini yaxshilaylik"
```

yoki

```
"Dizayn tizimi qarorlari bo'yicha menga yo'l ko'rsating"
```

### Avtomatik Takliflar (Automatic Suggestions)

Agent siz quyidagi holatlarda ko'nikmadan foydalanishni taklif qilishi mumkin:

- Dizaynda o'zgarish so'raganingizda
- "zamonaviy" yoki "professional" qayta loyiha talab qilganingizda
- Vizual bir xillikni yaxshilashni istasangiz
- Saytingizni yakunlashga tayyor bo'lganingizda

## Dizayn Tizimi Estetika Jarayoni

### 1-Qadam: Tipografiya

Agent sizdan shrift tanlovingiz haqida so'raydi:

```
Sizning afzal ko'rgan tipografiya uslubingiz qaysi?
- Serif (an'anaviy, nafis)
- Sans-serif (zamonaviy, toza)
- Monospace (texnik, kodga yo'naltirilgan)

Sarlavha shrifti uchun:
- Siz ajralib turuvchi sarlavha shriftini xohlaysizmi, yoki matn shrifti bilan bir xilidan foydalanasizmi?
- Afzallik: qalin, nafis, o'yinchoq, minimal?

Matn shrifti uchun:
- O'qilishi asosiy ahamiyatga ega. Siz quyidagilardan qaysi biri afzal ko'rasiz:
  - Kattaroq, kengroq matn
  - Qisqa, samarali matn
  - Standart o'lchamlar
```

Keyin agent quyidagilarni belgilaydi:

- **Sarlavha shrifti**: Sarlavhalar va sarlavhalar uchun asosiy shrift
- **Matn shrifti**: Paragraflar va asosiy matn uchun shrift
- **Monospace shrifti**: Kodlar va texnik kontent uchun shrift
- **O'lcham skalasi (Size scale)**: Oldindan belgilangan o'lchamlar (kichik, asosiy, katta, XL va h.k.)
- **Og'irlik skalasi (Weight scale)**: Shrift og'irligi (oddiy, o'rta, qalin va h.k.)
- **Qator balandligi (Line height)**: O'qilishi uchun qatorlar orasidagi masofa

### 2-Qadam: Rang Palitrasi

```
Rang palitrasini belgilaylik.

Asosiy rang (sizning brend rangi):
- Hozirgi: [mavjud rang ko'rsatiladi]
- O'zgartirish uchun: [rang tanlovchi yoki hex kodi]

Ikkinchi rang (qo'llab-quvvatlovchi rang):
- Hozirgi: [mavjud rang ko'rsatiladi]
- O'zgartirish uchun: [rang tanlovchi yoki hex kodi]

Aksent rangi (ajratuvchilar va CTAlar):
- Hozirgi: [mavjud rang ko'rsatiladi]
- O'zgartirish uchun: [rang tanlovchi yoki hex kodi]

Neutra palitra (matn, chegaralar, fonlar uchun kulranglar):
- Yengil: [rang]
- O'rta: [rang]
- Qorong'i: [rang]
```

Agent quyidagilarni o'z ichiga olgan to'liq palitrani yaratadi:

- Asosiy, ikkinchi va aksent ranglar
- Neutra kulranglar (yengil, o'rta, qorong'i)
- Semantik ranglar (muvaffaqiyatli, ogohlantirish, xato)
- Hover va faol holatlar

### 3-Qadam: Bo'shliqlar (Spacing)

Qancha bo'shliq (breathing room) xohlasangiz?

Bo'shliq miqyosini afzal ko'rganingiz:
- Qisqa (siqilgan, samarali loyihalar)
- Normal (taqqoslanadigan bo'shliqlar)
- Keng (ko'p bo'sh joy)

Bu quyidagilarga ta'sir qiladi:
- Tugmalar va kartalardagi padding (ichki bo'shliq)
- Bo'limlar orasidagi margin (chegara)
- Grid elementlari orasidagi gap

Agent bu tokenlarni belgilaydi:

- Asos birlik (odatda 4px yoki 8px)
- Miqyos: xs, sm, md, lg, xl, 2xl
- Padding, margin va gap uchun aniq qiymatlar

### 4-Qadam: Chegaralar va Soyalar (Borders and Shadows)

```
Vizual chuqurlik va belgilanish:

Border radius afzalligi:
- Keskin (burilish yo'q)
- Nozik (kichik radius)
- Yumshoq (o'rta radius)
- Juda yumshoq (katta radius)

Soyaning chuqurligi:
- Yassis (soyalar yo'q)
- Nozik (yengil soyalar)
- Aniqlangan (kuchli soyalar)
```

Agent quyidagilarni yaratadi:

- Border radius tokenlari (tugmalar, kartalar, kiritmalar uchun)
- Yuqori darajadagi ko'tarilishlar (elevation levels) uchun soya tokenlari
- Border kengligi tokenlari

### 5-Qadam: Harakat va Animatsiya (Motion and Animation)

```
Saytingiz interaktiv bo'lganda qanday his qilishi kerak?

Animatsiya afzalligi:
- Minimal (animatsiyalar yo'q)
- Nozik (yumshoq o'tishlar)
- O'yinchoq (seziladigan animatsiyalar)

Maxsus animatsiyalar:
- Sahifa o'tishlari: fade (yo'qilish), slide (o'tish) yoki yo'qmi?
- Tugma hover (ko'tarilganda): scale (katta-kichrayish), rang o'zgarishi yoki ikkalasi?
- Yuklash holatlari: spinner, skeleton (skelet) yoki progress bar?
```

Agent quyidagilarni belgilaydi:

- O'tish davrlari (tez, normal, sekin)
- Easing funksiyalari (ease-in, ease-out, ease-in-out)
- Umumiy interaktivliklar uchun animatsiya keyframe'lari

## Dizayn tizim estetikalarini qo'llash

### Avtomatik Qo'llash

Ko'nikmangizni yakunlaganingizdan so'ng, agent:

1. Sizning temangizdagi `theme.json` faylini barcha tokenlar bilan yangilaydi
2. Dizayn tizimini faol temangizga qo'llaydi
3. Yangi tizimga mos keladigan blok uslublarini qayta yaratadi
4. Yangilangan temani faollashtiradi

### Qo'lda Qo'llash

Siz shuningdek, `theme.json` faylini bevosita tahrirlashingiz mumkin:

## Dizayn Tizimni Ko'rish

### Agentga So'rashingiz mumkin

```
"Menga dizayn tizimimni ko'rsating"
```

yoki

```
"Hozirgi dizayn tokenlarim nimalar?"
```

Agent sizning tipografiyangiz, ranglaringiz, bo'shliq (spacing) va boshqa tokenlarni ko'rsatadi.

### theme.jsonni Ko'rish

Tokenlarni to'g'ridan-to'g'ri ko'rish uchun `/wp-content/themes/[theme-name]/theme.json` faylini matn muharririda oching.

## Dizayn Tizimini Yangilash

### Tezkor Yangilanishlar

Agentdan aniq o'zgarishlar so'rashingiz mumkin:

```
"Asosiy rangni qorong'iroq qiling"
```

yoki

```
"Bo'shliq skalasini 20% oshiring"
```

yoki

```
"Sarlavha shriftini serifga o'zgartiring"
```

### To'liq Qayta Dizayn

Dizayn Tizimi Estetikas (Design System Aesthetics) ko'nikmasini qayta ishga tushiring:

```
"Mening butun dizayn tizimimni qayta loyihalashimiz kelsin"
```

Bu sizga hozirgi qiymatlaringizdan boshlab barcha qarorlar bo'yicha yo'l ko'rsatadi.

### Qisman Yangilanishlar

Aniqlik jihatlarini yangilang:

```
"Faqat rang palitkasini yangilang, qolgan barchasini o'zgarmaslikka qo'ying"
```

## Dizayn Tizimi Eng Yaxshi Amaliyotlari (Best Practices)

### Birjiy Ishlatish (Consistency)

- Barcha joylarda bir xil tokenlardan foydalaning.
- Bir martalik ranglar yoki o'lchamlar yaratmang.
- Qiymatlarni qattiq kodlash o'rniga tokenlarni ishlating.

### Nomlash

Aniqlik va ma'noli nomlardan foydalaning:

- ✓ `primary`, `secondary`, `accent` (asosiy, ikkilangan, urg'u)
- ✗ `blue`, `color-1`, `main` (ko'k, rang-1, asosiy)

- ✓ `heading-lg`, `body-sm` (sarlavha-katta, tananing kichik)
- ✗ `font-size-24`, `text-large` (shrift o'lchami-24, katta matn)

### Kengaytirish Imkoniyati (Scalability)

### Dokumentatsiya

O'zingizning dizayn tizimingizni hujjatlashtiring:

- Nega ma'lum ranglarni tanladingiz?
- Har bir tokenni qachon ishlatish kerak?
- Istisnoliliklar va cheklovli holatlar.

## Umumiy Dizayn Tizimining Naqshlari (Common Design System Patterns)

### Zamonaviy Minimalist

- Sans-serif tipografiya (Inter, Helvetica).
- Cheklangan rang palitrasi (2-3 ta rang).
- Keng bo'sh joy.
- Nozik soya (shadows).
- Silliq, tez animatsiyalar.

### Issiq va Do'stona

- Serif va sans-serif tipografiyasining aralashmasi.
- Issiq ranglar palitrasi (oltalar, issiq kulranglar).
- Yumshoq burchaklar.
- Yumshoq soya.
- O'yin-damli animatsiyalar.

### Professional Korporativ

- Toza sans-serif (Roboto, Open Sans).
- Aksent rangi bilan neytral palitra.
- Tuzilgan bo'sh joy.
- Minimal soya.
- Nozik o'tishlar (transitions).

### Ijodkor va Kuchli

- O'ziga xos tipografiya.
- Kuchli ranglar palitrasi.
- Turli bo'sh joylar.
- Kuchli soya.
- E'tibor tortadigan animatsiyalar.

## Muammolarni Hal Qilish (Troubleshooting)

**Mening dizayn tizimimning o'zgarishlari ko'rinmayapti**
- Brauzer keshini tozalang.
- Agar statik generatordan foydalanayotgan bo'lsangiz, saytingizni qayta qurib ko'ring.
- `theme.json` ning valid JSON ekanligini tekshiring.
- Tema faol ekanligini tasdiqlang.

**Ranglar turli sahifalarda boshqacha ko'rinadi**
- Pluginlardagi ziddiyatli CSS (CSS conflicts) bormi tekshiring.
- Barcha sahifalar bir xil temadan foydalanayotganligini tasdiqlang.
- Har qanday caching pluginlarini tozalang.

**Men oldingi dizayn tizimiga qaytmoqchiman**
- Agentga murojaat qiling: "Menga mening dizayn tizimining tarixini ko'rsating" (Show me my design system history).
- `theme.json` ni avvalgi qiymatlarga qo'lda tahrirlang.
- Turli tanlovlar bilan skilli qayta ishga tushiring.

## Keyingi Qadamlar (Next Steps)

Dizayn tizimingizni belgilagandan so'ng:

1. **Saytingizni ko'rib chiqing**: Yangi dizaynni ko'rish uchun saytingizga tashrif buyuring.
2. **Qo'shimcha takomillashtiring**: Qobiliyatingizdan foydalanib o'zgartirishlar qiling.
3. **Shablonlarni yaratish**: Dizayn tokenlaringiz yordamida maxsus blok shablonlarini qurib chiqing.
4. **Dokumentatsiya qiling**: O'zingizning dizayn tizimingizni jamoa a'zolari bilan baham ko'ring.
