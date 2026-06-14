---
title: Tema Qurilishi Oqimi
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 sizga dastlabki sozlash jarayonida maxsus blok temani yaratishingizda yordam beradigan yo‘naltirilgan **Theme Builder onboarding flow**ni taqdim etadi. Bu eski Site Builder rejimini yanada moslashuvchan, agent yordamida ishlaydigan yondashuv bilan almashtiradi.

## Theme Builder Onboarding Flow nima?

Theme Builder onboarding flow bu interaktiv sozlash wizardidir va u quyidagilarni amalga oshiradi:

- Dizayn qarorlari (ranglar, tipografiya, layout) bo‘yicha sizni yo‘l ko‘rsatadi
- Saytingizning vizual identitet afzalliklarini qayd etadi
- Sizning ehtiyojlaringizga moslashtirilgan maxsus blok temani yaratadi
- Tayyor bo‘lgach temani avtomatik faollashtiradi

Bu flow **Setup Assistant agent** tomonidan amalga oshiriladi, u tushuntiruvchi savollarni beradi va temani bosqichma-bosqich qurib boradi.

## Theme Builder Onboardingni boshlash

### Birinchi ishga tushirish sozlamasi (First-Run Setup)

Superdav AI Agentni yangi WordPress o‘rnatmasida birinchi marta ishga tushirganda, siz quyidagilarni ko‘rasiz:

```
Superdav AI Agent'ga xush kelibsiz!

Nima qilishni xohlaysiz?
1. Maxsus tema yaratish (Theme Builder)
2. Mavjud temadan foydalanish
3. Hozircha sozlashdan o‘tish
```

Theme Builder onboarding flowiga kirish uchun **"Maxsus tema yaratish"** ni tanlang.

### Qo‘lda faollashtirish (Manual Activation)

Siz istalgan vaqtda ham quyidagilarni so‘rab Theme Builder onboardingni boshlashingiz mumkin:

```
"Start the Theme Builder onboarding"
```

yoki

```
"Help me create a custom theme"
```

## Onboarding bosqichlari

### 1-bosqich: Rejim tanlash (Mode Selection)

Setup Assistant agent sizning afzalligingiz haqida so‘raydi:

```
Temangizni qanday yaratmoqchisiz?
- Yo‘naltirilgan (Men savollar beraman va siz uchun quraman)
- Amaliyotda (Men sizga variantlarni ko‘rsataman va siz qaror berasiz)
```

**Yo‘naltirilgan rejim** deyarli barcha foydalanuvchilar uchun tavsiya etiladi; agent sizning sanoatingiz va maqsadlaringiz asosida dizayn tavsiyalari beradi.

### 2-bosqich: Sayt ko‘rsatmalari (Site Specification)

Siz saytingiz haqida ma'lumot berishingiz so‘raladi:

- **Sayt maqsadi**: E-commerce, blog, portfolio, SaaS va boshqalar.
- **Maqsadli auditoriya**: Sizning tashrif buyuruvchilaringiz kimlar?
- **Brend ranglari**: Asosiy va ikkilangan (yoki "ani emasman") ranglar.
- **Ton**: Professional, ijodiy, o'yin-damli, minimal va boshqalar.

Bu ma'lumotlarning barchasi sizning **site_brief** xotirangizda saqlanadi va agentlar kelajak sessiyalarda shu yerga murojaat qiladi.

### 3-Qadam: Dizayn tizimi qarorlari (Design System Decisions)

Agent sizni dizayn tokenlarini tanlash jarayonida yo'l ko'rsatadi:

- **Tipografiya**: Font oilasi (serif, sans-serif, monospace) va o'lchamlar skalasi
- **Rang palitrasi**: Asosiy, ikkilangan, urg'u (accent) va neytral ranglar
- **Bo'shliq (Spacing)**: Qisqa, oddiy yoki keng bo'sh joyli layoutlar
- **Haraka (Motion)**: Animatsiyalar va o'tish effektlari (agar istasangiz)

### 4-Qadam: Tema yaratish (Theme Generation)

Setup Assistant agent sizning maxsus blok temangizni quyidagilar bilan tuzib beradi:

- Barcha dizayn tokenlaringizni o'z ichiga olgan `theme.json`
- Odatdagi layoutlar uchun blok shablonlari (sahifa, blog, aloqa)
- Dizayn tizimingizga mos keladigan maxsus blok uslublari
- Tema metadata va WordPress qo'llab-quvvatlash deklaratsiyalari

### 5-Qadam: Faollashtirish va tekshirish (Activation and Verification)

Tema avtomatik ravishda faollashtiriladi va siz quyidagilarni ko'rasiz:

```
✓ Sizning maxsus temangiz endi ishlayapti!
  Tema nomi: [Sizning Saytingiz Nomi] Tema
  Ranglar: [Asosiy] / [Ikkilangan]
  Tipografiya: [Font Oilasi]

  Yangi dizaynni ko'rish uchun saytingizga tashrif buyuring.
```

Keyin siz temani to'g'ri ko'rsatayotganini tekshirish uchun saytingizga kirishingiz mumkin.

## Sayt ko'rsatmalari va site_brief xotirasi (Site Specification and site_brief Memory)

Onboarding davrida agent saytingizning ko'rsatmalari **site_brief** xotira kategoriyasiga yozib oladi. Bunga quyidagilar kiradi:

- Sayt maqsadi va hets-markazlar
- Maqsadli auditoriya
- Brend ranglari va toni
- Dizayn afzalliklari
- Kontent tuzilishi

### Nega site_brief muhim?

Kelajak sessiyalarda agentlar sizning site_briefingizga murojaat qilib quyidagilarni amalga oshiradi:

### Siteni ko'rish (site\_brief)

Agentga quyidagicha so'rishingiz mumkin:

```
"Show me my site brief"
```

yoki

```
"What do you know about my site?"
```

Agent siz saqlab qo'ygan sayt spesifikatsiyasini ko'rsatadi.

## Onboardingdan keyin sozlash

Theme Builder onboarding tugagandan so'ng, siz quyidagilarni qila olasiz:

### Dizayn tizimi estetikasi ko'nikmasidan foydalanish

Dizaynni takomillashtirish uchun so'rov bering:

```
"Refine the typography to be more modern"
```

yoki

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** sizga aniq dizayn yangilanishlari bo'yicha yo'l ko'rsatadi.

### theme.json faylini bevosita tahrirlash

Katta foydalanuvchilar uchun, quyidagilarni sozlash uchun `/wp-content/themes/[theme-name]/theme.json` faylini tahrirlang:

- Rang tokenlari
- Tipografiya skalalari
- Bo'shliq qiymatlari
- Chegara va soya (border and shadow) ta'riflari

### Maxsus blok shablonlarini yaratish

WordPress bloklar muharriridan foydalanib quyidagilar uchun maxsus shablonlarni yarating:

- Bosh sahifa tuzilmalari
- Blog post sahifalari
- Mahsulot sahifalari
- Kontakt formlari

## Qiyinchiliklarni hal qilish (Troubleshooting)

**Onboarding jarayoni tugamadı**
- Jarayonni qayta boshlang: "Start the Theme Builder onboarding"
- WordPress o'rnatishingizning yangil ekanligini tekshiring
- Setup Assistant agenti faolligida ekanligini tasdiqlang

**Mening site_brief ishlatilmayapti**
- Agentning xotiraga kirishi mumkinligini tasdiqlang
- Agentdan "mening site briefimni eslab qo'yishni" so'rang
- Xususiyatlaringizda xotira yoqilganligini tekshiring

**Yaratilgan tema mening afzalliklarimga mos kelmaydi**
- Uni aniqlashtirish uchun Design System Aesthetics ko'nikmasidan foydalaning
- Agentdan "[maxsus o'zgarishlar bilan] temani qayta yaratishni" so'rang
- Aniqlik uchun theme.json faylini bevosita tahrirlang

## Keyingi qadamlar

Theme Builder (Tema Quruvchi) sozlamalarini yakunlagandan so'ng:

1. **Sajhni tekshiring**: Yangi temani ko'rish uchun saytingizga tashrif buyuring
2. **Dizaynni takomillashtiring**: Sozlashlar uchun Design System Aesthetics ko'nikmasidan foydalaning
3. **Kontent qo'shishni boshlang**: Saytningiz kontentini qurishni boshlang
4. **Qobiliyatlarni o'rganing**: scaffold-block-theme va activate-theme kabi boshqa agent qobiliyatlarini o'rganing
