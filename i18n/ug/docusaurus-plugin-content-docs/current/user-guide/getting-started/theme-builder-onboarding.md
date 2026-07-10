---
title: Tema Builder Giriş Akışı
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# قالب ساز راهنمای شروع کار {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 یک **جریان راهنمای شروع کار Theme Builder** را معرفی می‌کند که در تنظیمات اولیه شما به ساختن یک قالب بلوک سفارشی کمک می‌کند. این روش جایگزین حالت قدیمی Site Builder شده و رویکردی انعطاف‌پذیرتر با کمک عامل (agent) است.

## جریان راهنمای شروع کار Theme Builder چیست؟ {#what-is-the-theme-builder-onboarding-flow}

جریان راهنمای شروع کار Theme Builder یک wizard تنظیمات تعاملی است که کارهای زیر را برای شما انجام می‌دهد:

- در مورد تصمیمات طراحی (رنگ‌ها، تایپوگرافی، چیدمان) راهنمایی می‌کند.
- ترجیحات هویت بصری سایت شما را ثبت می‌کند.
- یک قالب بلوک سفارشی متناسب با نیازهای شما تولید می‌کند.
- پس از تکمیل، قالب به صورت خودکار فعال می‌شود.

این جریان توسط **Setup Assistant agent** پشتیبانی می‌شود که سوالات روشن‌کننده می‌پرسد و قالب شما را به صورت مرحله‌ای می‌سازد.

## شروع راهنمای Theme Builder {#starting-the-theme-builder-onboarding}

### تنظیم اولیه (First-Run Setup) {#first-run-setup}

وقتی برای اولین بار Superdav AI Agent را روی یک نصب جدید وردپرس اجرا می‌کنید، این پیام‌ها را خواهید دید:

```
به Superdav AI Agent خوش آمدید!

چه کاری می‌خواهید انجام دهید؟
۱. ساخت قالب سفارشی (Theme Builder)
۲. استفاده از یک قالب موجود
۳. فعلاً تنظیمات را رد کنید
```

برای ورود به جریان راهنمای Theme Builder، روی **"ساخت قالب سفارشی"** کلیک کنید.

### فعال‌سازی دستی {#manual-activation}

شما همچنین می‌توانید هر زمان که بخواهید با درخواست زیر شروع راهنمای Theme Builder کنید:

```
"Start the Theme Builder onboarding"
```

یا

```
"Help me create a custom theme"
```

## مراحل راهنما (Onboarding Steps) {#the-onboarding-steps}

### مرحله ۱: انتخاب حالت (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent در مورد ترجیح شما می‌پرسد:

```
می‌خواهید قالب خود را چگونه بسازید؟
- هدایت شده (من سوالات خواهم پرسید و برای شما آن را می‌سازم)
- عملی (من گزینه‌ها را به شما نشان می‌دهم و شما تصمیم می‌گیرید)
```

**Guided mode** برای اکثر کاربران توصیه می‌شود؛ عامل بر اساس صنعت و اهداف شما، توصیه‌های طراحی ارائه می‌دهد.

### مرحله ۲: مشخصات سایت (Site Specification) {#step-2-site-specification}

از شما در مورد سایتتان سوال خواهد پرسید:

- **Sayt maqsadi**: E-commerce (online savd), blog (maqala platformasi), portfolio (portfolyo), SaaS (xizmat ko'rsatish tizimi) va boshqalar.
- **Maqsadli auditoriya**: Sizning tashrif buyuruvchilaringiz kimlar?
- **Brend ranglari**: Asosiy va ikkilangan ranglar (yoki "ani bilmayman").
- **Ton**: Professional, ijodiy, o'yin-damli, minimal va boshqalar.

Bu ma'lumotlar sizning **site_brief** xotirangizda saqlanadi va kelgusi sessiyalarda agentlar ularga murojaat qiladi.

### 3-Qadam: Dizayn Tizimini (Design System) Tanlash Qarorlari {#step-3-design-system-decisions}

Agent sizga dizayn tokenlarini tanlash bo'yicha yo'l ko'rsatadi:

- **Tipografiya**: Font oilasi (serif, sans-serif, monospace) va o'lchamlari skalasi
- **Rang palitrasi**: Asosiy, ikkilangan, urg'u (accent) va neytral ranglar
- **Bo'shliq (Spacing)**: Qisqa, oddiy yoki keng bo'sh joyli tuzilmalar
- **Haraka (Motion)**: Animatsiyalar va o'tish effektlari (agar istasangiz)

### 4-Qadam: Tema Generatsiyasi {#step-4-theme-generation}

Setup Assistant agent sizning maxsus blok temangizni quyidagilar bilan quradi:

- Barcha dizayn tokenlaringizni o'z ichiga olgan `theme.json`
- Odatdagi tuzilmalar uchun blok shablonlari (sahifa, blog, aloqa)
- Dizayn tizimingizga mos keladigan maxsus blok uslublari
- Tema ma'lumotlari va WordPress qo'llab-quvvatlash e'lonlari

### 5-Qadam: Faollashtirish va Tasdiqlash {#step-5-activation-and-verification}

Tema avtomatik ravishda faollashtiriladi va siz quyidagilarni ko'rasiz:

```
✓ Sizning maxsus temangiz endi ishlayapti!
  Tema nomi: [Sizning Saytingiz Nomi] Tema
  Ranglar: [Asosiy] / [Ikkilangan]
  Tipografiya: [Font Oilasi]

  Yangi dizaynni ko'rish uchun saytingizga tashrif buyuring.
```

Keyin siz temani to'g'ri ko'rsatayotganini tekshirish uchun saytingizga kirishingiz mumkin.

## Sayt Ko'rsatmalari va site_brief Xotirasi {#site-specification-and-sitebrief-memory}

Onboarding (birinchi sozlash) davrida, agent saytingizning ko'rsatmalari **site_brief** xotira kategoriyasiga yozib oladi. Bunga quyidagilar kiradi:

- Sayt maqsadi va maqsadlar
- Maqsadli auditoriya
- Brend ranglari va toni
- Dizayn afzalliklari
- Kontent tuzilishi

### Nega site_brief Muhim? {#why-sitebrief-matters}

Kelgusi sessiyalarda agentlar sizning site_brief xotirangizga murojaat qilib quyidagilarni amalga oshiradi:

تصميم تغییرات در همه جا یکسان نگه دارید
ویژگی‌هایی را پیشنهاد دهید که با هدف سایت شما همخوانی داشته باشد
توصیه‌هایی متناسب با زمینه ارائه دهید
از تکرار سوالات تنظیم اولیه خودداری کنید

### مشاهده خلاصه سایت (site_brief) شما {#viewing-your-sitebrief}

می‌توانید از عامل (agent) بپرسید:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

عامل مشخصات ذخیره شده سایت شما را نمایش می‌دهد.

## شخصی‌سازی بعد از شروع کار (Onboarding) {#customizing-after-onboarding}

بعد از اتمام آموزش Theme Builder، می‌توانید کارهای زیر را انجام دهید:

### استفاده از مهارت زیبایی سیستم طراحی (Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

درخواست‌های اصلاح طراحی کنید:

```
"Refine the typography to be more modern"
```

یا

```
"Adjust the color palette to be warmer"
```

**مهارت زیبایی سیستم طراحی** شما را در به‌روزرسانی‌های طراحی هدفمند راهنمایی می‌کند.

### ویرایش مستقیم theme.json {#edit-themejson-directly}

برای کاربران حرفه‌ای، فایل `/wp-content/themes/[theme-name]/theme.json` را برای تنظیم موارد زیر ویرایش کنید:

- توکن‌های رنگی (Color tokens)
- مقیاس‌های تایپوگرافی (Typography scales)
- مقادیر فاصله (Spacing values)
- تعریف حاشیه و سایه (Border and shadow definitions)

### ایجاد قالب‌های بلوک سفارشی (Custom Block Templates) {#create-custom-block-templates}

از ویرایشگر بلوک وردپرس برای ساخت قالب‌های سفارشی برای موارد زیر استفاده کنید:

- طرح‌بندی صفحه اصلی (Homepage layouts)
- صفحات پست وبلاگ (Blog post pages)
- صفحات محصول (Product pages)
- فرم‌های تماس (Contact forms)

## مقایسه: روش قدیمی در مقابل جدید شروع کار (Onboarding) {#comparison-old-vs-new-onboarding}

| ویژگی | سازنده سایت (Legacy Site Builder) | Theme Builder (جدید) |
|---|---|---|
| روش تنظیم اولیه | فرم مبتنی بر راهنما (Wizard-based form) | مکالمه هدایت شده توسط عامل (Agent-guided conversation) |
| تولید قالب | قالب‌های محدود | اسکلت سفارشی (Custom scaffolding) |
| توکن‌های طراحی | ورود دستی (Manual entry) | تصمیمات هدایت شده (Guided decisions) |
| انعطاف‌پذیری | گزینه‌های ثابت (Fixed options) | قابل تنظیم (Customizable) |
| به‌روزرسانی‌های آینده | ارجاع داده نمی‌شدند | در site_brief ذخیره می‌شوند |

## عیب‌یابی (Troubleshooting) {#troubleshooting}

**فرآیند شروع کار کامل نشد**
- جریان را دوباره شروع کنید: "Start the Theme Builder onboarding"
- بررسی کنید که نصب وردپرس شما به‌روز است.
- تأیید کنید که عامل دستیار تنظیمات (Setup Assistant agent) فعال است.

**من سايت_brief مى استفاده نمى بشه**
- تأیید کنید که عامل به حافظه دسترسی دارد
- از عامل بخواهید "my site brief" را یادآوری کند (recall)
- بررسی کنید که آیا حافظه در تنظیمات شما فعال است یا نه

**قالب تولید شده با ترجیحات من مطابقت ندارد**
- از مهارت Design System Aesthetics برای اصلاح آن استفاده کنید
- از عامل بخواهید "regenerate the theme with [specific changes]" (قالب را با [تغییرات خاص] بازسازی کند)
- مستقیماً فایل theme.json را ویرایش کنید تا کنترل دقیق داشته باشید

## گام‌های بعدی {#next-steps}

بعد از اتمام آموزش Theme Builder:

1. **ساخت سایت خود را بررسی کنید**: به سایت خود بروید و قالب جدید را ببینید
2. **طراحی را اصلاح کنید**: برای تنظیمات، از مهارت Design System Aesthetics استفاده کنید
3. **محتوا اضافه کنید**: شروع به ساخت محتوای سایت خود کنید
4. **قابلیت‌ها را کشف کنید**: در مورد قابلیت‌های دیگر عامل مانند scaffold-block-theme و activate-theme بیاموزید
