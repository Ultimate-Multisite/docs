---
title: Tema-ani hisobga olgan ko'nikmalar
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-Boshli Ko'nikmalar {#theme-aware-skills}

Superdav AI Agent v1.10.0 ning navbatdagi to'rtta yangi tema-boshli ko'nikmal (theme-aware skills) chiqarildi, ular sizning faol WordPress temangizga avtomatik moslashadi. Bu ko'nikmalar temangiz arxitekturasiga va xususiyatlariga moslashtirilgan maxsus yo'riqlar va imkoniyatlarni taqdim etadi.

## Tema-Boshli Ko'nikmalar Nima? {#what-are-theme-aware-skills}

Tema-boshli ko'nikmalar — bu AI yordamchisi sizning saytingizda hozir faol bo'lgan WordPress temasi asosida avtomatik tanlaydigan oldindan sozlanmagan bilim bazalari va vositalar to'plamlaridir. Temalar o'zgarganda, yordamchisining mavjud ko'nikmalari avtomatik yangilanadi — qo'lda sozlash talab qilinmaydi.

Har bir ko'nikmada quyidagilar bo'ladi:

- **Tema-specific hujjatlar** — temani ishlatish va unga moslashtirish bo'yicha yo'riqlar
- **Block va pattern havolalari** — mavjud bloklar, patternlar va dizayn variantlari
- **Moslashtirish misollari** — keng tarqalgan vazifalar uchun kod qismlari va konfiguratsiya shablonlari
- **Eng yaxshi amaliyotlar (Best practices)** — temaning arxitekturasiga va ish jarayoniga oid tavsiyalar

## Mavjud Tema-Boshli Ko'nikmalar {#available-theme-aware-skills}

### Blok Temalar {#block-themes}

**Qaysi temalarga tegishli:** WordPress blok asosidagi (Full Site Editing) arxitekturadan foydalanadigan temalar.

Blok Temalar ko'nikmas quyidagilarda yo'riq beradi:

- Blok muharriri yordamida shablonlarni yaratish va tahrirlash
- Blok patternlari va qayta ishlatiladigan bloklar bilan ishlash
- Umumiy uslublar (global styles) va theme.json sozlamalarini moslashtirish
- Tema bloklari va variantlaridan foydalanish
- Saytingiz uchun maxsus blok patternlarini qurish

**Qachon avtomatik faollashadi:** Faol temangiz blok temasi bo'lsa ( `block-templates` xususiyatini qo'llab-quvvatlaydi).

### Klassik Temalar {#classic-themes}

**Qaysi temalarga tegishli:** PHP shablonlari va klassik muharrirdan foydalanadigan an'anaviy WordPress temalari.

Klassik Temalar ko'nikmas quyidagilarda yo'riq beradi:

PHP шаблон dosyaları ve hook'lar ile çalışma
Tema görünümünü Customizer (Özelleştirici) vasitasi orqida o'zgartirish
Widget hududlari va sidebarlardan foydalanish
CSSni o'zgartirish va child theme rivojlanishi
Tema iyerarohini va template tag'larini tushunish

**Qachon avtomatik faollashadi:** Faol temangiz klassik (blocksiz) tema bo'lganda.

### Kadence Blocks {#kadence-blocks}

**Kimlar uchun mos keladi:** Katta blokli dizayn uchun Kadence Blocks pluginidan foydalanadigan saytlar.

Kadence Blocks ko'nikmasi quyidagilarda yo'l beradi:

- Kadencening ilgari blok kutubxonasidan (Hero, Testimonials, Narxlash va h.k.) foydalanish
- Kadence blok sozlamalarini va moslashuvchan variantlarini konfiguratsiya qilish
- Kadence ning grid va container bloklari yordamida maxsus layoutlar yaratish
- Kadence bloklarini o'zingizning temangiz bilan integratsiya qilish
- Kadence dizayn tizimidan va predsetlardan foydalanish

**Qachon avtomatik faollashadi:** Kadence Blocks pluginingiz saytingizda faol bo'lganda.

### Kadence Theme {#kadence-theme}

**Kimlar uchun mos keladi:** Blokli dizayn va sozlash uchun Kadence temadan foydalanadigan saytlar.

Kadence Theme ko'nikmasi quyidagilarda yo'l beradi:

- Global uslublar va theme.json orqali Kadence temani o'zgartirish
- Kadencening ichki blok namunalaridan va template'lardan foydalanish
- Kadence tema sozlamalarini va variantlarini konfiguratsiya qilish
- Kadence dizayn tizimi bilan maxsus dizaynlar yaratish
- Kadenceni mashhur pluginlar va vositalar bilan integratsiya qilish

**Qachon avtomatik faollashadi:** Kadence temangiz faol bo'lganda.

## Ko'nikmalar qanday tanlanadi {#how-skills-are-selected}

Assistent har bir xabarda sizning faol temangiz va o'rnatilgan pluginlaringizni avtomatik aniqlaydi. Mos keladigan tema-aniq ko'nikma mavjud bo'lsa, u avtomatik ravishda assistent kontekstiga yuklanadi. Ko'nikmalarni qo'lda faollashtirish yoki o'zgartirish shart emas.

### Bir nechta ko'nikmalar {#multiple-skills}

Agar saytingizga bir nechta ko'nikmalar tegishli bo'lsa (masalan, Kadence Blocks va Kadence Theme ham faol bo'lsa), yordamchi barcha tegishli ko'nikmalarga kirishi mumkin va har biridan yo'riqnomalardan foydalanishi mumkin.

### Temani o'zgartirish {#switching-themes}

Faol temangizni o'zgartirganingizda, yordamchining mavjud ko'nikmalari keyingi xabarda avtomatik ravishda yangilanadi. Masalan:

1. Siz **Block Themes** ko'nikmasi faol bo'lgan blok temani ishlatyapsiz.
2. Siz klassik temaga o'ting.
3. Keyingi xabaringizda, **Classic Themes** ko'nikmasi avtomatik yuklanadi va **Block Themes** ko'nikmasi endi mavjud emas.

## Temaga bog'liq ko'nikmalardan foydalanish {#using-theme-aware-skills}

Temaga bog'liq ko'nikmadan foydalanish uchun chat interfeysida nima qilishni xohlayotganingizni oddiygina tasvirlang. Yordamchi avtomatik ravishda tegishli ko'nikmaning yo'riqnomalaridan foydalanadi.

### Misollar {#example-prompts}

**Block Themes uchun:**
> "Blok shablonlari yordamida fon rasmi va markazlashtirilgan matn bilan hero bo'limini yarating."

**Classic Themes uchun:**
> "Bol temasi (child theme) yordamida menyu paneliga maxsus widget maydonini qo'shing."

**Kadence Blocks uchun:**
> "Kadence Testimonials blokidan foydalanib fikrlar bo'limini yarating."

**Kadence Theme uchun:**
> "Sarlavha (header) tuzilmasini va navigatsiya menyusi uslubini sozlang."

Yordamchi faol temangiz va plaginlaringizga mos keladigan temaga xos yo'riqnomalar va kod misollarini taqdim etadi.

:::note
Temaga bog'liq ko'nikmalar Superdav AI Agent v1.10.0 va undan keyingi versiyalarda avtomatik ravishda mavjud bo'ladi. Qo'shimcha sozlash yoki konfiguratsiya talab qilinmaydi.
:::
