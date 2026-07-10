---
title: ئامۆژاری لە بەڕێوەبردنی شوێنەکە (Site Builder Mode)
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# یادداشت درباره حذف حالت سازنده سایت (Site Builder Mode) {#site-builder-mode-removal-notice}

**حالت Site Builder در نسخه Superdav AI Agent v1.12.0 حذف شده است.** اگر از حالت Site Builder استفاده می‌کردید، باید برای ساخت قالب و راه‌اندازی سایت به **Setup Assistant agent** منتقل شوید.

## چه اتفاقی افتاد؟ {#what-happened}

### حالت Site Builder (قدیمی) {#site-builder-mode-legacy}

حالت Site Builder یک رابط کاربری مبتنی بر راهنما بود که برای کارهای زیر استفاده می‌شد:

- ساخت سایت‌ها از قالب‌ها
- تنظیم تنظیمات اولیه
- انتخاب تم (Theme)
- راه‌اندازی محتوای اولیه

### چه چیزی جایگزین آن شد؟ {#what-replaced-it}

**Setup Assistant agent** اکنون تمام قابلیت‌های Site Builder را با موارد زیر مدیریت می‌کند:

- تنظیم انعطاف‌پذیرتر و هدایت شده توسط Agent
- گزینه‌های سفارشی‌سازی تم بهتر
- ادغام با فرآیند آشنایی Theme Builder (Theme Builder onboarding)
- حافظه پایدار `site_brief` برای جلسات بعدی

## اگر از حالت Site Builder استفاده می‌کردید {#if-you-were-using-site-builder-mode}

### سایت‌های شما امن هستند {#your-sites-are-safe}

- سایت‌هایی که قبلاً با Site Builder ساخته شده بودند، همچنان کار می‌کنند.
- هیچ داده‌ای از دست نمی‌رود یا سایتی دچار اختلال نمی‌شود.
- می‌توانید به طور عادی مدیریت سایت‌های خود را ادامه دهید.

### به Setup Assistant agent منتقل شوید {#migrate-to-setup-assistant-agent}

برای راه‌اندازی سایت جدید یا تغییر تم، از Setup Assistant agent استفاده کنید:

```
"Help me set up a new site"
```

یا

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent همان قابلیت‌ها را با انعطاف‌پذیری بیشتر ارائه می‌دهد.

## مقایسه: Site Builder در مقابل Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| ویژگی | Site Builder (حذف شده) | Setup Assistant (جدید) |
|---------|----------------------|----------------------|
| روش تنظیم | فرم راهنما (Wizard form) | مکالمه با Agent |
| انتخاب تم | قالب‌های از پیش تعریف شده | تولید سفارشی |
| سفارشی‌سازی | گزینه‌های محدود | سیستم طراحی کامل |
| خلاصه سایت (Site brief) | ذخیره نمی‌شود | حافظه پایدار |
| جلسات بعدی | تنظیم مجدد تکراری | استفاده از site_brief ذخیره شده |
| انعطاف‌پذیری | گردش کار ثابت | مکالمه سازگار و متغیر |

## مهاجرت به Setup Assistant agent {#migrating-to-setup-assistant-agent}

### برای سایت‌های جدید {#for-new-sites}

لەبری بەکارهێنانی Site Builder mode:

۱. داواکاری: "کمک بکە من سایتێکی نوێ ڕابگرێزم"
۲. Agent ی یاریدەدەری سیسترا (Setup Assistant) دەبێت لێبکاتەوە لەسەر:
   - مەبەستی و ئامانجەکانی سایتەکە
   - خەڵکی نیشاندنی (Target audience)
   - ناسنامەی براندەکە (Brand identity)
   - دروستکردنی Theme (قالب)
   - ڕێکخستنی سەرەتایی

### بۆ سایتەکان کە پێشتر لە Site Builder mode هەبوون {#for-existing-sites}

ئەگەر سایتێکی ئێستایەک لە Site Builder mode هەبێت:

۱. دەتوانیت بەو شێوەیە بەردەوام بیت بە بەکارهێنانی ئەوە وەک خۆی
۲. بۆ نوێکردنەوەی Theme، داواکاری بکە: "سایتی من دەستکاری بکە"
۳. Agent ی یاریدەدەری سیسترا یارمەتیت دەدات بۆ دروستکردنی Themeیەکی نوێ
۴. داتاکانی سایتەکە گۆڕاوە

### بۆ گۆڕانکارییەکانی Theme {#for-theme-changes}

لەبری هەڵبژاردنی Theme لە Site Builder mode:

۱. داواکاری بکە: "Theme ی من بگۆڕم"
۲. Agent ی یاریدەدەری سیسترا ئەنجام دەدات:
   - پرسیار بکات دەربارەی پێداچوونەوەکانی دیزاینت (design preferences)
   - Themeیەکی تایبەت دروست بکات
   - لەسەر سایتەکە چالاک بکات

## جیاوازییە سەرەکییەکان {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. هەڵبژاردنی Template (نموونەی پێشوەخت)
2. هەڵبژاردنی Theme
3. ڕێکخستنی سیستەمی بنەڕەتی (Basic settings)
4. تەواو بوو
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. مەبەستی سایتەکەت باس بکە
2. خەڵکی نیشاندنی خۆت دیاری بکە
3. پێداچوونەوەکانی دیزاینت هەڵبژێرە
4. Agent Theme تایبەتی دروست دەکات
5. Agent Theme ی چالاک دەکات
6. کورتەی سایتەکە بۆ جلسەکانی داهاتووی هەڵگرتراوە (stored)
```

## سوودەکانی Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### زیاتر ئاسانکاری (More Flexible) {#more-flexible}

- سایتەکەت بە زمانی سروشتی باس بکە
- پێشنیاری تایبەتی وەربگرە
- بۆ پێداچوونەوەکانی تایبەتت گۆڕانکاری بکە

### تایبەتمەندیی زیاتری ڕێکخستن (Better Customization) {#better-customization}

- دروستکردنی Theme تایبەت
- بڕیارەکانی سیستەمی دیزاین (Design system decisions)
- تۆکنە دیزاینی بەردەوام (Persistent design tokens)

### بیرەوەری بەردەوام (Persistent Memory) {#persistent-memory}

- `site_brief` ی سایتەکەت هەڵگرتراوە
- Agentی داهاتوو سایتەکەت دەزانێت
- پێویستی بە دووبارێژکردنی زانیاری ڕێکخستن نییە

### کارگێڕێکی یەکگرتوو (Integrated Workflow) {#integrated-workflow}

- سەرەتایی دروستکردنی Theme (Theme Builder onboarding)
- توانای فنۆری دیزاین سیستەم (Design System Aesthetics skill)
- توانای کۆنتڕۆڵی بینراو (Ability Visibility controls)
- هەموویان بە شێوەیەکی یەکگرتوو کار دەکەن

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### ناتوانم Site Builder mode بکەمەڕوو {#i-cant-find-site-builder-mode}

Site Builder mode لەناوچوون. لەبری ئەوە، Agent ی Setup Assistant بەکاربهێنە:

"کمک کن من سایتێکی نو ڕابگرێنم"

### من ده‌مەوێت سایتێک لەسەر بنووسمەوە لە Site Builder-ی پێشوو {#i-want-to-recreate-a-site-from-site-builder}

تۆ دەتوانی بە ئامۆژگاری Setup Assistant ئەم کارە تکرار بکەیت:

1. داواکاری: "کمک کن من سایتێکی نوێ ڕابگرێنم"
2. مەبەست و دیزاینی سایتەکەت پێشوو باس بکە
3. ئەو Agent دەتوانێت قالبێکی دوێنێ بەشێوەیەکی نزیک دروست بکات
4. `site_brief` ی تۆ بۆ ئامادەکردنی داهاتووی هەڵگرتراوە

### سایتەکە من لە Site Builder-ی پێشوو کار ناکات {#my-existing-site-builder-site-isnt-working}

سایتی نوێ کە بە Mode-ی Site Builder دروستکراون بەردەوام دەبن کە کار دەکەن. ئەگەر کێشەیەک هەست دەکەیت:

1. چاک بکە ئایا قالبەکەت هێشتا چالاکە
2. گۆڕینی پڵگینەکانت لە چالاککردنەوەی ورد بکە
3. تۆمارەکانی هەڵگرتراو (error logs) ی WordPress دەبینیت
4. ئەگەر کێشە بەردەوام بوون، پەیوەندی بە پشتیوانی داوا بکە

### ئایا من دەتوانم لەسەر پێوانە کۆنەکانی Site Builder بەکاربهێنم؟ {#can-i-still-use-my-old-site-builder-templates}

پێوانەکانی Site Builder زیاتر نییە. بەڵام:

- سایتەکانت کە هەیان پێیان بوون بەردەوام دەبن کە کار دەکەن
- دەتوانی سایتە نزیکەکانی تکرار بکەیت بە یارمەتی Setup Assistant Agent
- Setup Assistant Agent هەڵبژاردنی زیاتر بۆ تۆ دەدات

## هەنگاوەکانی دوای ئەمە (Next Steps) {#next-steps}

1. **بۆ سایتە نوێکان**: بەکاربهێنە Setup Assistant agent
2. **بۆ سایتە کۆنەکان**: بەکاری بهێنە وەک خۆیان
3. **بۆ گۆڕینی قالب**: داواکاری یارمەتی لە Setup Assistant agent بکە
4. **بۆ باشترکردنی دیزاین**: توانای Design System Aesthetics بەکاربهێنە

## بابەتەکانی پەیوەندیدار (Related Topics) {#related-topics}

- **Theme Builder Onboarding**: ئامۆژگاریی سیستەم بۆ قالبە تایبەتەکان
- **Setup Assistant Agent**: دامەزراندنی سایت بە ڕێنمایی Agent
- **Site Specification Skill**: ئامادەکردنی ئامانج و خەڵکی سایتەکەت
- **Design System Aesthetics Skill**: باشترکردنی ناسنامەی بینراووی سایتەکەت
