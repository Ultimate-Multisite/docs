---
title: ڕێگای سەرەتایی Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Flowa Yeknîna Theme Builder-e

Superdav AI Agent v1.12.0 introduces një **flow të udhëhequr të onboarding-it për Theme Builder** që ju ndihmon të krijoni një temë bloku të personalizuar gjatë konfigurimit fillestar. Kjo zëvendëson modin e mëparshëm Site Builder me një qasje më fleksibël, mbështetur nga agenti.

## Çfarë është Flowa e Onboarding-it për Theme Builder?

Flowa e onboarding-it për Theme Builder është një wizard konfigurimi interaktiv që:

- Ju udhëheq përmes vendimeve të dizajnit (ngjyrat, tipografia, ndarja)
- Përpunon preferencat tuaja të identitetit vizual të faqes suaj
- Krijon një temë bloku të personalizuar që është e përshtatur për nevojat tuaja
- Aktivizon temën automatikisht kur përfundon

Flowa varet nga **agent-i i ndihmës së konfigurimit (Setup Assistant agent)**, i cili pyet pyetje klare dhe ndërton temën tuaj hapi pas hapi.

## Fillimi i Onboarding-it për Theme Builder

### Konfigurimi Fillestar (First-Run Setup)

Kur fillon Superdav AI Agent për herë të parë në një instalim të ri WordPress, do të shihni:

```
Mirëseja te Superdav AI Agent!

Çfarë dëshironi të bëni?
1. Krijoni një temë të personalizuar (Theme Builder)
2. Përdorni një temë ekzistuese
3. Shkopi konfigurimin për tani
```

Zgjidhni **"Krijoni një temë të personalizuar"** për të hyrë në flow-in e onboarding-it për Theme Builder.

### Aktivizimi Manual

Ju mund të filloni onboarding-in e Theme Builder edhe në çdo kohë duke kërkuar:

```
"Start the Theme Builder onboarding"
```

ose

```
"Help me create a custom theme"
```

## Hapat e Onboarding-it

### Hapi 1: Zgjidhja e Modit (Mode Selection)

Agent-i i ndihmës së konfigurimit pyet për preferencën tuaj:

```
Si dëshironi të ndërtoni temën tuaj?
- Udhëhequr (Unë do të bëj pyetje dhe do ta ndërtoj për ju)
- Praktikues (Unë do t'ju trego opsionet dhe ju vendosni)
```

**Modi udhëhequr (Guided mode)** rekomandohet për shumic të përdoruesve; agent-i bën sugjerime dizajni bazuar në industrinë dhe qëllimet tuaja.

### Hapi 2: Specifikimi i Faqes (Site Specification)

Ju do të kërkohet informacion rreth faqes suaj:

- **Maksadê site**: E-commerce, blog, portfolio, SaaS, û min hûn?
- **Gavaştên hedef**: Kîjan nêzikanên we ne?
- **Rengên brand**: Rengên esasî û dikare (an jî "min ne tu dikarim")
- **Ton**: Pefşîvan, yarativ, çeleng, minimal, an jî min hûn?

Ev maghsalê li **site_brief** yê we de hatibe, ku ajanên di seansên din de ji ew têne şerêkirin.

### Pasê 3: Kararên Sistema Tasîg (Design System)

Ajanê we li seçinjiyên design token re re bêje:

- **Tipografiyê**: Famîliya fon (serif, sans-serif, monospace) û pîşteriya wê
- **Paleta reng**: Rengên esasî، dikare، پاشڤە و ne-esase
- **Mevlaya (Spacing)**: Layoutên kompakt، normal an jî mezin
- **Hareketi (Motion)**: Animasyon û geçişان (heger hûn dixwazin)

### Pasê 4: Çêkirina Theme (Theme Generation)

Ajanê Setup Assistant theme-a custom ya we bi:

- `theme.json` ku hemû design tokenên we hene
- Template'y ji bo layoutên hevpar (homepage, blog, contact)
- Stilên block ji bo sistema tasîgê ya we
- Metadata yê theme û raxeştên WordPress

### Pasê 5: Aktivekirin û Ra têkînîna (Activation and Verification)

Theme bi xwe aktife dikeve, û hûn vê yekê dibînin:

```
✓ Theme custom ya we niha ji aliyê we hat!
  Navê theme: Theme [Navê Site-a We]
  Rengên: [Esase] / [Dikare]
  Tipografiyê: [Famîliya Fon]

  Ji bo dîtina design-a nû, site-a xwe bipeyivî.
```

Dîrokê hûn dikarin ji site-a xwe bipeyivî ku têkînîna theme we rast e.

## Teyarekirina Site û Maghsalê site_brief (site_brief Memory)

Di van seansên din de, ajanên ji **site_brief** yê we şerê dikin ji bo:

- Maksad û hedeflên site
- Gavaştên hedef
- Rengên brand û ton
- Pêşyeberiyên design (Design preferences)
- Struktura materyal (Content structure)

### Neden site_brief girîng e

Di seansên din de, ajanên ji **site_brief** yê we şerê dikin ji bo:

### پارامترەکان بۆ سەرنجراوێکردن (Maintain design consistency across changes)

*   دڵنیابConvertTo بە شێوەیەکی یەکگرتوو بێت لە هەموو گۆڕانکارییەکاندا.

### پێشنیارکردنی تایبەتمەندییەکان کە لەگەڵ مەبەستی سایتەکەت دەگونجێن (Suggest features aligned with your site's purpose)

*   تایبەتمەندییەکانی دیکە پێشنیار بکە کە بە شێوەیەکی باش لەگەڵ مەبەست و ئامانجەکەت بۆ سایتەکەدا بێت.

### پێشنیاری پڕۆژەی تێگەیشتن لە دۆخەکە (Provide context-aware recommendations)

*   پێناسنامەکانی تایبەت بدە بەو ئەو شتە کە ئێستا دەبینیت و دۆخی ئێستای سایتەکەت بۆ باشتر ڕێنمایی بکات.

### گۆڕینی پرسیارە سیستەماتییەکان لەسەر پێشوەختنی سەرەتایی (Avoid repeating setup questions)

*   پێویست نییە دووبارە ئەو پرسیارانەی کە لە کاتی سەرەتای تنظیموونی سایتەکەدا دەپرسیت، دڵنیا بیت.

### تانە: بینینی پوختەی سایتەکەت (Viewing Your site_brief)

دەتوانی بەم شێوەیە پرسیار بکە:

```
"Show me my site brief"
```

یان

```
"What do you know about my site?"
```

ئەژمارەکە دەتوانێت تایبەتمەندییەکانی دیاریکراوی سایتەکەت نیشان بدات.

## گۆڕینی پاش سەرەتایی (Customizing After Onboarding)

پاش تەواو بوونی ڕێنمایی Theme Builder، دەتوانیت:

### بەکارهێنانی توانای ڕەنگ و شێوەی دیزاین (Use the Design System Aesthetics Skill)

خوازی لێکۆڵینەوەی دیزاینی پێشکەش بکە:

```
"Refine the typography to be more modern"
```

یان

```
"Adjust the color palette to be warmer"
```

**توانای ڕەنگ و شێوەی دیزاین (Design System Aesthetics skill)** دەتوانیت بەم شێوەیە بەرەو نوێکردنەوەی دیزاینی تایبەت بدات.

### دەستکاری ورد لە theme.json (Edit theme.json Directly)

بۆ ئەوانەی زۆر پیشەسپان، `/wp-content/themes/[theme-name]/theme.json` دەتوانیت بگۆڕیت بۆ گۆڕینی:

*   تایبەتمەندیی ڕەنگەکان (Color tokens)
*   پێچەوانە و پۆلەکانی تایپوگرافی (Typography scales)
*   تایبەتمەندیی فاصلەکان (Spacing values)
*   دۆخی سێڵ و شاتۆ (Border and shadow definitions)

### دروستکردنی قالبە نوی بۆ بلوکەکان (Create Custom Block Templates)

بەکارهێنانی ویرتۆر WordPress بۆ دروستکردنی قالبە تایبەت بۆ:

*   ڕێکخستنەکانی سەرەکی سایت (Homepage layouts)
*   لاگەکانی پۆست بلاگ (Blog post pages)
*   لاگەکانی بەرهەم (Product pages)
*   فۆرمەکانی پەیوەندی (Contact forms)

## تێگەیشتن: کۆنەکە بەرامبەر نوێی سەرەتایی (Comparison: Old vs. New Onboarding)

| تایبەتمەندی | Site Builder (کۆنەکە) | Theme Builder (نوێی) |
| :--- | :--- | :--- |
| ڕێگەی تنظیموون | فۆرمێکی پڕۆسەی سەرەوە | گفتوگۆی ڕێنمایی شدہ لەلایەن Agent |
| دروستکردنی قالب | قالبەکان بە شێوەیەکی سنووردار | پێکهاتەیەکی تایبەت (Custom scaffolding) |
| تانەکانی دیزاین | دەستکاری دەستکرد | بڕیارە ڕێنمایی شدہ |
| گۆڕانکاری | هەڵبژاردنەکان بە شێوەیەکی فیکس | بگۆڕانکارییەکان لە site_brief دابنێریت |

## چارەسەرکردنی کێشەکان (Troubleshooting)

**پاش سەرەتاییەکە تەواو نەبووە (The onboarding flow didn't complete)**
*   دوبارە دەستپێبکە: "Start the Theme Builder onboarding"
*   دڵنیا بە لەوە کە PHP و WordPress-ەکەت نوێیە.
*   تێبینی بکە کە Setup Assistant Agent چالاکە.

**site_brief شما استفاده نمی‌شود**
- تأیید کنید که عامل به حافظه دسترسی دارد
- از عامل بخواهید «خلاصه سایت من را یادآوری کند»
- بررسی کنید که آیا حافظه در تنظیمات شما فعال است یا خیر

**قالب تولید شده با ترجیحات من مطابقت ندارد**
- از مهارت Design System Aesthetics برای اصلاح آن استفاده کنید
- از عامل بخواهید «قالب را با [تغییرات خاص] بازتولید کند»
- مستقیماً فایل theme.json را ویرایش کنید تا کنترل دقیق‌تری داشته باشید

## مراحل بعدی

پس از تکمیل آموزش Theme Builder:

۱. **سایت خود را بررسی کنید**: به سایت خود بروید تا قالب جدید را ببینید
۲. **طراحی را اصلاح کنید**: برای تنظیمات، از مهارت Design System Aesthetics استفاده کنید
۳. **محتوا اضافه کنید**: شروع به ساخت محتوای سایت خود کنید
۴. **قابلیت‌ها را کشف کنید**: در مورد قابلیت‌های دیگر عامل مانند scaffold-block-theme و activate-theme بیاموزید
