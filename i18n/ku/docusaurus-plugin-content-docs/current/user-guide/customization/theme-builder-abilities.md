---
title: توانایەکانی Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# توانایەتی Theme Builder: Scaffold و Activation Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 دو توانایەتێکی بەهێز دەبەخشێت کە ڕێگە بدات تۆ دەقی سەرەکی (block themes) تایبەت بە خۆت لە ناو چاتەکەدا دروست بکەیت و گەیەنیت.

## نووسینەوەی گشتی (Overview) {#overview}

توانایەتی **scaffold-block-theme** و **activate-theme** ڕێگە دەدەن ئەژمارەکان بۆ ئەوەی:
- لەسەر بنەمای پێداویستییەکانت، یەکەکانی سەرەکی (production-ready) یان تەواو دروست بکەن.
- بە شێوەیەکی ئۆتۆماتیک، دەقەکان لەسەر سایتەکەت فعال بکەن بدون ئەوەی خۆت کارێک بکەیت.
- ڕێگەی دیزاینکراوی بەڕێوەبەران بۆ دروستکردنی ناسنامەیەکی بینراو و یەکگرتوو دابنێتەوە.

## Scaffold Block Theme (دروستکردنی Template) {#scaffold-block-theme}

توانایەتی **scaffold-block-theme** دەقە سەرەکییەکی WordPress نوێی دروست دەکات کە پێکهاتەی تەواوی template یەکە، لەوانەش:

- ڕێکخستنی `theme.json` لەگەڵ design tokens (تۆکنەکانی دیزاین)
- فایلەکانی template بۆ لایەنە باوەکان (common layouts)
- ستاایل و جۆرەکانی تایبەت بە block هاوبەشی (custom block styles and variations)
- Metadata یەکەی theme و ڕاگەیاندنی پشتگیریکەکان

### چۆن بەکاربهێنیت؟ {#how-to-invoke}

لە چاتەکەت لەگەڵ Superdav AI Agent، دەتوانی داواکاریی دروستکردنی template بکەیت:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

ئەژمارەکە ئەنجام دەدات:
1. پێداویستی دیزاینت لە ڕێگەی گفتوگۆوەیەوە کۆدەکاتەوە.
2. پێکهاتەی تەواوی template یەکە دروست دەکات.
3. هەموو فایلە پێویستەکانی template دروست دەکات.
4. template یەکە بۆ فعالکردن ئامادە دەکات.

### ئەنجامی پێشبینیکراو (Expected Output) {#expected-output}

کاتێک توانایەتی بە سەرکەوتنییەوە کار دەکات، تۆ دەبینیت:

- ڕاگەیاندنی سەرکەوتنی scaffold کردن ی template یەکە.
- ناوی template و شوێنی لەسەر سایتەکە.
- پوختەیەکی دیزاین (design tokens) کە بەکارھێنراون (ڕەنگەکان، تایپۆگرافی، فاصلەکان).
- ئامادەیی بۆ فعالکردن.

نموونەی ئەنجام:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme (فعالکردنی Template) {#activate-theme}

قابلیتی **activate-theme** سایت شما را به یک قالب بلوکی جدید یا موجود تغییر می‌دهد.

### نحوه فراخوانی (Invoke) {#how-to-invoke-1}

بعد از ساختن یک قالب، می‌توانید آن را بلافاصله فعال کنید:

```
"فعال‌سازی قالب Modern Agency"
```

یا هر قالبی که قبلاً وجود دارد را فعال کنید:

```
"تغییر به قالب Twentytwentyfour"
```

### خروجی مورد انتظار {#expected-output-1}

هنگامی که فعال‌سازی با موفقیت انجام شد:

- تأیید قالب فعال شده
- نام قالب قبلی (برای مرجع)
- آدرس سایت جایی که قالب اکنون فعال است
- هر نکته تنظیمات خاص قالب

مثال خروجی:
```
✓ قالب با موفقیت فعال شد
  قالب فعال: Modern Agency
  قالب قبلی: Twentytwentyfour
  فعال در: https://yoursite.com
  نکته: برای تأیید طرح، صفحه اصلی خود را بررسی کنید
```

## گردش کار: ساخت و فعال‌سازی (Scaffold and Activate) {#workflow-scaffold-and-activate}

یک گردش کار معمول ترکیبی از هر دو قابلیت است:

۱. **درخواست تولید قالب**: "یک قالب بلوکی برای صفحه فرود SaaS من بساز"
۲. **Agent قالب را می‌سازد (scaffolds)**: فایل‌ها و توکن‌های طراحی را تولید می‌کند
۳. **بررسی و اصلاح**: در صورت نیاز، تغییرات طراحی را بحث کنید
۴. **فعال‌سازی**: "قالب را اکنون فعال کن"
۵. **تأیید**: برای اطمینان از اینکه طرح جدید فعال شده است، به سایت خود مراجعه کنید

## توکن‌های طراحی و سفارشی‌سازی (Design Tokens and Customization) {#design-tokens-and-customization}

قالب‌هایی که ساخته می‌شوند از توکن‌های طراحی وردپرس (از طریق `theme.json`) برای موارد زیر استفاده می‌کنند:

- **رنگ‌ها**: پالت اصلی، ثانویه، تأکیدی، خنثی
- **تایپوگرافی**: خانواده فونت، اندازه‌ها، وزن‌ها، ارتفاع خطوط
- **فاصله ها**: حاشیه (padding)، مارجین و مقیاس فاصله ها (gap scales)
- **حاشیه‌ها**: توکن‌های شعاع و عرض
- **سایه‌ها**: سطوح بالا بودن (Elevation levels)

این توکن‌ها در `theme.json` متمرکز هستند، به طوری که تنظیم کل سیستم طراحی خود را از یک فایل راحت تغییر دهید.

## محدودیت‌ها و نکات {#limitations-and-notes}

- Themes لە `/wp-content/themes/` دابەزراون و دەبێت پابەند بن بە ڕێزمانی ناونیشانەکانی WordPress
- چالاککردنەوەی (Activation) پێویستی بە ڕێگەپێدانی گونجاو لەسەر سایتەکەت هەیە

کۆدی PHP ی تایبەت لە ناو Theme'ەکاندا کەمە؛ بۆ کارکردنی ئاڵۆز، لە جیاتی ئەوە بەکاری دەهێنە **plugin** (پلانگین).
Theme-ی پۆلێمبلاک (Block themes) باشترین کاراییان لەگەڵ WordPress 5.9 و بەرزتردا دەبن.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

**Theme دوای دابەزراون نیشان得ێت**
- بڕیار بدات کە دۆ렉تۆری Themeەکە هەیە و ڕێگەپێدانی دروست هەیە.
- چاک بکە ئایا `theme.json` فۆرماتی JSON گونجاوە.
- دڵنیابەرەوە کە ناوی Themeەکە لەگەڵ Themeیەکانی دیکەی نەبێت.

**چالاککردنەوە شکست دەدات (Activation fails)**
- پشتڕاست بکەرەوە ئایا ڕێگەی Administrator هەیە.
- چاک بکە ئایا دۆ렉تۆری Themeەکە بۆ WordPress بەڕێوەدەچێت (readable).
- لە Error logs ی WordPress بۆ وردەکارییەکان دەبینەوە.

**Design tokens نیشان得ێن (Apply ناکەن)**
- فۆرماتی `theme.json` دروستەیت بەپێی ڕێزمانی گونجاو بڕوانە.
- هەر pluginێکی Caching یی پاک بکەرەوە.
- چاک بکە ئایا وەرگرتنی WordPress پاڵپشتی ئەو tokensانەی کە بەکاری دەهێنیت.

## هەنگاوەکانی دواتر (Next Steps) {#next-steps}

دایە لە کاتێکدا Themeەکە چالاک دەکەی، بتوانیت:
- لە **Design System Aesthetics skill** بەکاربهێنیت بۆ ڕێکخستنی تایپۆگرافی (typography)، ڕەنگەکان و فاصلەکان.
- ستاایلەکانی بلوکە تاکەکەسییەکان بگۆڕیت لە ڕێگەی WordPress block editorدا.
- CSS تایبەت زیاد بکە لە فایل `style.css` ی Themeەکەدا.
- Template (نموونەی) بلوکی تایبەتی دروست بکە بۆ جۆرەکانی پەڕە دیاریکراو.
