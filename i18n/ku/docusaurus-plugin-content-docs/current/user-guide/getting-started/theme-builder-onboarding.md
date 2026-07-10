---
title: ڕێڕەوی دەستپێکردنی Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# ڕێکارەکانی سەرەتایی Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 پێشکەشکردنی **Theme Builder onboarding flow**ی ڕێنماییکراو دەبەخشێت کە یارمەتیت دەدات بۆ دروستکردنی themeێکی تایبەت لە کاتی سیستەمی سەرەتایی خۆت. ئەمە جۆری Site Builder کۆنەکە وەک پێشتر بەکارخستاو، بە شێوازێکی پیاوازی زیاتر و پشتگیریکردنی ئەژمار (agent-assisted) گۆڕانکاری دەکات.

## Theme Builder Onboarding Flow چییە؟ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow یەکێکە لە ڕێگاکانی سیستراوکردنی کارپێکردن کە ئەم کارانە دەکات:

- تۆ دەبەیتە سەر بڕیارەکانی دیزاین (رنگەکان، تایپۆگرافی، پێکهاتەکان)
- پێداویستییە ڕووناکی ناسینی بینراوەکەت لەسەر سایتەکە وەردەگرێت
- themeێکی custom دروست دەکات کە بۆ پێداویستییەکانی تۆ دیزاین کراوە
- کاتێک تەواو بوو، theme یەکە بە شێوەیەکی ئۆتۆماتیک چالاک دەبێت

ئەم flow بە **Setup Assistant agent** پشتیوانی دەکرێت، کە پرسیارە ڕوونكەرەوەکان دەکات و theme یەکەت بە شێوەیەکی تدریجی دروست دەکات.

## دەستپێکردنی Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### سیستەمی سەرەتایی (First-Run Setup) {#first-run-setup}

کاتێک یەکەم جار Superdav AI Agent لەسەر جێبەجێکردنی WordPress نوێی کارپێدەکەیت، ئەمە دەبینیت:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

بۆ دەستپێکردنی Theme Builder onboarding، هەڵبژێرە **"Build a custom theme"**.

### چالاککردن بە شێوەیەکی دەستکرد (Manual Activation) {#manual-activation}

تۆ دەتوانی هەر کاتێک بەدوای ئەمە بگەڕێیت بۆ دەستپێکردنی Theme Builder onboarding:

```
"Start the Theme Builder onboarding"
```

یان

```
"Help me create a custom theme"
```

## هەنگاوەکان بۆ Onboarding {#the-onboarding-steps}

### هەنگاوی یەکەم: هەڵبژاردنی Mode (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent دەپرسێت کە چۆن دەتەوێت theme یەکەت دروست بکەیت:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** بۆ زۆربەی بەکارهێنەران پێشنیار دەکرێت؛ agent لەسەر بنەمای سێبەری کار و ئامانجەکانت، پێشنیاری دیزاین دەکات.

### هەنگاوی دووەم: وردبینی سایت (Site Specification) {#step-2-site-specification}

لە تۆ دەپرسێت سەبارەت بە سایتەکەت:

* **موضوع سایت**: تجارت الکترونیک، وبلاگ، پورتفولیو، SaaS و غیره.
* **مخاطب هدف**: بازدیدکنندگان شما چه کسانی هستند؟
* **رنگ‌های برند**: رنگ‌های اصلی و ثانویه (یا "مطمئن نیستم").
* **لحن**: حرفه‌ای، خلاقانه، بازیگوش، مینیمال و غیره.

این اطلاعات در حافظه **site_brief** شما ذخیره می‌شود که عامل‌ها در جلسات بعدی به آن ارجاع می‌دهند.

### مرحله ۳: تصمیمات سیستم طراحی (Design System Decisions) {#step-3-design-system-decisions}

عامل راهنمای شما را در انتخاب توکن‌های طراحی هدایت می‌کند:

- **تایپوگرافی**: خانواده فونت (سریف، سنس سریف، مونوسپیس) و مقیاس اندازه.
- **پالت رنگی**: رنگ‌های اصلی، ثانویه، تأکیدی و خنثی.
- **فاصله‌گذاری (Spacing)**: طرح‌بندی فشرده، معمولی یا فضای زیاد.
- **حرکت (Motion)**: انیمیشن‌ها و انتقال‌ها (در صورت تمایل).

### مرحله ۴: تولید قالب (Theme Generation) {#step-4-theme-generation}

عامل دستیار را با موارد زیر برای قالب بلوک سفارشی شما آماده می‌کند:

- `theme.json` که شامل تمام توکن‌های طراحی شماست.
- الگوهای بلوک برای طرح‌بندی‌های رایج (صفحه اصلی، وبلاگ، تماس).
- استایل‌های بلوک سفارشی متناسب با سیستم طراحی شما.
- فراداده قالب و اعلامیه‌های پشتیبانی وردپرس.

### مرحله ۵: فعال‌سازی و تأیید (Activation and Verification) {#step-5-activation-and-verification}

قالب به صورت خودکار فعال می‌شود و شما موارد زیر را خواهید دید:

```
✓ قالب سفارشی شما اکنون زنده است!
  نام قالب: قالب [نام سایت شما]
  رنگ‌ها: [اصلی] / [ثانویه]
  تایپوگرافی: [خانواده فونت]

  برای مشاهده طراحی جدید به سایت خود مراجعه کنید.
```

سپس می‌توانید از سایت خود بازدید کنید تا تأیید نمایید که قالب به درستی نمایش داده می‌شود.

## مشخصات سایت و حافظه site_brief {#site-specification-and-sitebrief-memory}

در هنگام شروع کار (Onboarding)، عامل مشخصات سایت شما را در دسته حافظه **site_brief** ثبت می‌کند. این شامل موارد زیر است:

- هدف و اهداف سایت
- مخاطب هدف
- رنگ‌های برند و لحن
- ترجیحات طراحی
- ساختار محتوا

### چرا site_brief مهم است؟ {#why-sitebrief-matters}

در جلسات بعدی، عامل‌ها به site_brief شما ارجاع می‌دهند تا بتوانند موارد زیر را انجام دهند:

### حفظ تناسق طراحی در طول تغییرات {#viewing-your-sitebrief}

*   از پیشنهاد ویژگی‌هایی که با هدف سایت شما همخوانی دارند، استفاده کنید.
*   توصیه‌هایی را ارائه دهید که متناسب با زمینه (Context) سایت هستند.
*   از تکرار سوالات تنظیم اولیه خودداری کنید.

### مشاهده خلاصه سایت_brief (site\_brief) {#customizing-after-onboarding}

می‌توانید از اِژنت (agent) بپرسید:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

اِژنت مشخصات ذخیره شده سایت شما را نمایش می‌دهد.

## سفارشی‌سازی پس از شروع کار (Onboarding) {#use-the-design-system-aesthetics-skill}

بعد از اتمام فرآیند Onboarding Theme Builder، می‌توانید کارهای زیر را انجام دهید:

### استفاده از مهارت زیبایی سیستم طراحی (Design System Aesthetics Skill) {#edit-themejson-directly}

برای درخواست اصلاحات طراحی:

```
"Refine the typography to be more modern"
```

یا

```
"Adjust the color palette to be warmer"
```

**مهارت زیبایی سیستم طراحی** شما را در به‌روزرسانی‌های طراحی هدفمند راهنمایی می‌کند.

### ویرایش مستقیم theme.json {#create-custom-block-templates}

برای کاربران حرفه‌ای، فایل `/wp-content/themes/[theme-name]/theme.json` را برای تنظیم موارد زیر ویرایش کنید:

*   توکن‌های رنگی (Color tokens)
*   مقیاس‌های تایپوگرافی (Typography scales)
*   مقادیر فاصله (Spacing values)
*   تعاریف حاشیه و سایه (Border and shadow definitions)

### ایجاد قالب‌های بلوک سفارشی (Custom Block Templates) {#comparison-old-vs-new-onboarding}

از ویرایشگر بلوک وردپرس برای ساخت قالب‌های سفارشی برای موارد زیر استفاده کنید:

*   طرح صفحه اصلی (Homepage layouts)
*   صفحات پست وبلاگ (Blog post pages)
*   صفحات محصول (Product pages)
*   فرم‌های تماس (Contact forms)

## مقایسه: روش قدیمی در مقابل جدید Onboarding {#troubleshooting}

| ویژگی | Site Builder (قدیمی) | Theme Builder (جدید) |
| :--- | :--- | :--- |
| روش تنظیم اولیه | فرم مبتنی بر ویزارد (Wizard-based form) | مکالمه هدایت شده توسط اِژنت (Agent-guided conversation) |
| تولید قالب | قالب‌های محدود | اسکلت‌بندی سفارشی (Custom scaffolding) |
| توکن‌های طراحی | ورود دستی (Manual entry) | تصمیمات هدایت شده (Guided decisions) |
| انعطاف‌پذیری | گزینه‌های ثابت | قابل تنظیم (Customizable) |
| به‌روزرسانی‌های آینده | ارجاع داده نمی‌شود | در site\_brief ذخیره می‌شود |

## عیب‌یابی (Troubleshooting) {#next-steps}

**فرآیند Onboarding کامل نشد**
*   فرآیند را دوباره شروع کنید: "Start the Theme Builder onboarding"
*   بررسی کنید که نصب وردپرس شما به‌روز است.
*   تأیید کنید که اِژنت دستیار تنظیمات (Setup Assistant agent) فعال است.

**site_brief من بەکار نییە**
- دڵنیابە کە ئەژمارەکە دەستگەیشت بە بیرەوەری (memory)
- داوا بکە لە ئەژمارەکە "بیرەوەی پڕۆفایل سایتەکەم" (recall my site brief)
- چاک بکە کە بیرەوەری لە ڕێگەی تنظیماتەکانی تۆدا چالاکە

**دیزاینی دروستکراوە لەگەڵ پێداویستی مندا یەک نییە**
- توانای Design System Aesthetics بەکاربهێنە بۆ پۆلشینی (refine) ئەو دیزاینە
- داوا بکە لە ئەژمارەکە "پێوەرەوەی دیزاینەکە بە [گۆڕانکاریی تایبەت]" (regenerate the theme with [specific changes])
- دەستبەجێ `theme.json` دەستکاری بکە بۆ کۆنترۆڵی ورد

## هەنگاوەکانی دواتر

پاش تەواوکردنی ڕاهێنانی Theme Builder:

1. **سایتەکەت بڕیار بدە**: سەردانی سایتەکەت بکە بۆ بینینی دیزاینی نوێ
2. **دیزایینەکە پۆلشین بکە**: توانای Design System Aesthetics بەکاربهێنە بۆ گۆڕانکارییەکان
3. **تێکست زیاد بکە**: دەستپێبکە دروستکردنی ناوەڕۆکی سایتەکەت
4. **تواناکانی زیاتر بیر بکەرەوە**: لەسەر تواناکانی دیکە وەک scaffold-block-theme و activate-theme فێربەین
