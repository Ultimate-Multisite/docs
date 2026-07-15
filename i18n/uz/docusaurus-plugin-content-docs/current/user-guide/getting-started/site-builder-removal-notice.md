---
title: Sayt Quruvchi Rejimdan Chiqarish Eslami
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Sayt Quruvchi Rejamsizligi Haqida Eslatma

**Site Builder rejimi Superdav AI Agent v1.12.0 da olib tashlandi.** Agar siz Site Builder rejimidan foydalanayotgan bo'lsangiz, tema yaratish va sayt sozlamalari uchun **Setup Assistant agentiga** o'tishingiz kerak.

## Nima Bo'ldi? {#what-happened}

### Site Builder Rejimi (Eski) {#site-builder-mode-legacy}

Site Builder rejimi quyidagilar uchun wizard asosidagi interfeys edi:

- Shablondan saytlar yaratish
- Asosiy sozlamalarni konfiguratsiya qilish
- Tema tanlash
- Dastlabki kontentni sozlash

### Uni Nima Almashtirdi? {#what-replaced-it}

**Setup Assistant agenti** endi quyidagilar bilan barcha Site Builder funksionalligini boshqaradi:

- Ko'proq moslashuvchan, agent tomonidan yo'naltirilgan sozlash
- Tema uchun yaxshiroq sozlash variantlari
- Theme Builder (Tema Quruvchi) bilan integratsiya
- Kelajak sessiyalar uchun doimiy `site_brief` xotirasi

## Agar Siz Site Builder Rejimidan Foydalanayotgan Bo'lsangiz {#if-you-were-using-site-builder-mode}

### Saytlaringiz Xavfsiz {#your-sites-are-safe}

- Site Builder rejimi bilan yaratilgan mavjud saytlar ishlayveradi
- Ma'lumot yo'qotilishi yoki sayt buzilishi yo'q
- Siz saytlaringizni odatdagidek boshqarishda davom etishingiz mumkin

### Setup Assistant Agentiga O'ting {#migrate-to-setup-assistant-agent}

Yangi sayt sozlash yoki tema o'zgarishlari uchun Setup Assistant agentidan foydalaning:

```
"Help me set up a new site"
```

yoki

```
"Start the Theme Builder onboarding"
```

Setup Assistant agenti ko'proq moslashuvchanlik bilan xuddi shu funksionallikni taqdim etadi.

## Qiyoslash: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Xususiyat | Site Builder (Olib tashlandi) | Setup Assistant (Yangi) |
|---------|----------------------|----------------------|
| Sozlash usuli | Wizard shakli | Agent suhbatlari |
| Tema tanlash | Oldindan belgilangan shablonlar | O'zgartirilgan yaratish |
| Moslashuvchanlik | Cheklangan variantlar | To'liq dizayn tizimi |
| Sayt xulosasi (brief) | Saqlanmaydi | Doimiy xotira |
| Kelajak sessiyalari | Takrorlanadigan sozlash | Saqlangan site_brief dan foydalanish |
| Moslashuvchanlik | Qat'iy ish oqimi | Moslashuvchan suhbat |

## Setup Assistant Agentiga O'tish {#migrating-to-setup-assistant-agent}

### Yangi Saytlar Uchun {#for-new-sites}

Sayt Quruvchi rejimidan foydalanish o'rniga:

1. So'rov: "Menga yangi sayt sozlashda yordam bering"
2. Sozlash Assistent agent sizga quyidagilarda yo'l ko'rsatadi:
   - Sayt maqsadi va hedeflari
   - Maqsadli auditoriya
   - Brend identifikatsiyasi (Brand identity)
   - Tema yaratish
   - Dastlabki sozlash

### Mavjud Saytlarga Uchun {#for-existing-sites}

Agar sizda Site Builder rejimidan mavjud saytingiz bo'lsa:

1. Uni hozirgi holatida davom ettirishingiz mumkin
2. Temani yangilash uchun so'rabbingiz kerak: "Saytimni qayta loyihalash" (Redesign my site)
3. Sozlash Assistent agent sizga yangi tema yaratishda yordam beradi
4. Sayt ma'lumotlaringiz o'zgarmay qoladi

### Tema O'zgarishlari Uchun {#for-theme-changes}

Site Builder rejimidagi tema tanlash o'rniga:

1. So'rov: "Temani o'zgartirishim kerak" (Change my theme)
2. Sozlash Assistent agent quyidagilarni qiladi:
   - Sizning dizayn afzalliklar haqida so'raydi
   - Maxsus temani yaratadi
   - Uni saytingizda faollashtiradi

## Asosiy Farqlar {#key-differences}

### Site Builder Rejimi {#site-builder-mode}

```
1. Shablondan tanlang
2. Temani tanlang
3. Asosiy sozlamalarni konfiguratsiya qiling
4. Bitti
```

### Sozlash Assistent Agent {#setup-assistant-agent}

```
1. Saytingizning maqsadi haqida tasvirlang
2. Maqsadli auditoriyangizni belgilang
3. Dizayn afzalliklarini tanlang
4. Agent maxsus temani yaratadi
5. Agent temani faollashtiradi
6. Kelajak sessiyalar uchun sayt xulosasi saqlanadi (Site brief stored for future sessions)
```

## Sozlash Assistent Agentning Afzalliklari {#benefits-of-setup-assistant-agent}

### Ko'proq Moslashuvchanlik {#more-flexible}

- Saytingizni tabiiy tilda tasvirlang
- Maxsus tavsiyalarni oling
- Sizning aniq ehtiyojlaringizga moslashish mumkin

### Yaxshil Moslashuvchanlik {#better-customization}

- Maxsus tema yaratish
- Dizayn tizimi qarorlari (Design system decisions)
- Doimiy dizayn tokenlari (Persistent design tokens)

### Doimiy Xotira {#persistent-memory}

- Sizning `site_brief` saqlanadi
- Kelajakdagi agentlar saytingizni tushunadi
- Sozlash ma'lumotlarini takrorlash shart emas

### Integratsiyalashgan Ishlash Jarayoni (Integrated Workflow) {#integrated-workflow}

- Tema qurish bo'yicha kirish (Theme Builder onboarding)
- Dizayn tizimi estetikasi ko'nikmasi (Design System Aesthetics skill)
- Ko'rinuv kontrollerini faollashtirish imkoniyati (Ability Visibility controls)
- Barcha ishlar silliq ravishda bir-biriga bog'liq

## Muammolarni Hal Qilish (Troubleshooting) {#troubleshooting}

### Site Builder rejimi topa olmayman {#i-cant-find-site-builder-mode}

Site Builder rejimi olib tashlandi. Endi Sozlash Assistent agentidan foydalaning:

"Menga yangi sayt yaratishga yordam bering"

### Site Builder danidan saytni qayta yaratmoqchiman {#i-want-to-recreate-a-site-from-site-builder}

Siz uni Setup Assistant agenti orqali qayta yaratishingiz mumkin:

1. So'rov: "Menga yangi saytni sozlashga yordam bering"
2. O'zingizning asl saytingiz maqsadini va dizaynini tasvirlang
3. Agent shunga o'xshash temani yaratadi
4. Sizning site_briefing'ingiz kelajak uchun ma'lumot sifatida saqlanadi

### Mavjud Site Builder saytim ishlamayapti {#my-existing-site-builder-site-isnt-working}

Site Builder rejimi bilan yaratilgan mavjud saytlar hali ham ishlaydi. Agar muammolarga duch kelsangiz:

1. Temangiz faol ekanligini tekshiring
2. Pluginlaringiz yoqilganligini tasdiqlang
3. WordPress xatolik yozuvlarini tekshiring
4. Muammolar davom etsa, qo'llab-quvvatlash bilan bog'lanishni soving

### Eski Site Builder shablonlarimdan foydalanish mumkinmi? {#can-i-still-use-my-old-site-builder-templates}

Site Builder shablonlari endi mavjud emas. Biroq:

- Mavjud saytlaringiz hali ham ishlaydi
- Siz Setup Assistant agenti orqali o'xshash saytlarni qayta yaratishingiz mumkin
- Setup Assistant agenti ko'proq sozlash imkoniyatlarini taqdim etadi

## Keyingi qadamlar {#next-steps}

1. **Yangi saytlar uchun**: Setup Assistant agentidan foydalaning
2. **Mavjud saytlar uchun**: Ulardan hozirgi holatida foydalanishda davom eting
3. **Tema o'zgarishlari uchun**: Setup Assistant agentidan yordam soving
4. **Dizaynni takomillashtirish uchun**: Design System Aesthetics ko'nikmasidan foydalaning

## Bog'liq mavzular {#related-topics}

- **Theme Builder Onboarding**: Maxsus temalar uchun yo'riqlar bilan sozlash
- **Setup Assistant Agent**: Agent tomonidan boshqariladigan sayt sozlash
- **Site Specification Skill**: Saytingizning maqsad va auditoriyasini belgilash
- **Design System Aesthetics Skill**: Saytingiz vizual identitetini takomillashtirish
