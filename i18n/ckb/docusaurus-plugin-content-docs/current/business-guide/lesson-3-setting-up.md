---
title: 'پۆلێسە ٣: ڕێکخستنی تۆڕەکەت'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# سبق ٣: راکردن تۆڕەکەت

کاتییە بۆ دروستکردن. لەم وانەدا Ultimate Multisite دەدات و بنەمای FitSite networkەکە ڕێکدەخەیت. هەموو بڕیارێک لێرەدا بە دۆخی فێرتکردن (fitness niche) لەبەرچاو دەدرێت.

## لە کوێدا لە کۆتایی داین؟ {#where-we-left-off}

ئەو ماڵپەڕە فێستۆکان وەک نیشتەنی ئێمە هەڵبژاردن کرد و دەرفەتەکە بە ڕاستی پشکنین کردەوە. ئێستا ئەو بیرۆکەیە دەگۆڕین بۆ پلاتفۆرمێکی کارلێک.

## هەڵبژاردنی هاستکردن (Hosting) {#choosing-your-hosting}

هەڵبژاردنی هاستکردنت زیاتر گرنگە بۆ پلاتفۆرمێکی نیشتەجێردراوە لە比ستێکداوە لەسەر یەک ماڵپەڕ. تۆ یەک سایت هاوڵاتی ناکەیت -- تۆ تۆڕێک هاوڵاتی دەکەیت کە دەتوانێت بگاتە چەندین یان سەدان سایت.

### چی لێی بگەڕێیتەوە؟ {#what-to-look-for}

- **پشتیوانی WordPress Multisite**: هەموو هاستکردنەکان بە باشی کار ناکەن لەگەڵ multisite
- **Wildcard SSL**: بۆ تۆڕە پێکدێشتراوەکانی subdomain، زۆر گرنگە
- **سەرچاوە بتوانێن (Scalable resources)**: پێویستە فێری گەشەکردن بەبێ ئەوەی دەبێت بگۆڕیت
- **Integracija Ultimate Multisite**: مۆدالکردنی دۆمەین و SSL بە شێوەیەکی ئۆتۆماتیک هەوڵەکانی کار زیاد دەکات

### ڕێنمایی پێشنیارکراو {#recommended-approach}

لە لیستەکەی [Compatible Providers](/user-guide/host-integrations/closte) هاستکردنێک هەڵبژێرە. ئەمانە لەگەڵ Ultimate Multisite پشکنین کراون و ئەو یەکگرتنە دەدەن کە پێویستت بۆ مۆدالکردنی دۆمەین و ئۆتۆماتیککردنی SSL هەیە.

بۆ FitSite، ئێمە وردبینی subdomain بەکار دەهێنین. ئەمە واتای ئەوەیە کە سایتەکانی کڕی لە سەرەتادا وەک `studioname.fitsite.com` دەردەکەون پێش ئەوەی خۆیان دۆمەین هەڵبژێرن.

## دامەزراندنی WordPress Multisite {#installing-wordpress-multisite}

ئەگەر ئێستا وردبینی WordPress Multisite نییە:

١. WordPress-ی خۆت لە پڕۆڤایدرەکەت دامەزرێنە
٢. ڕێنمایی [چۆنی WordPress Multisite دامەزرێنیت](/user-guide/getting-started/how-to-install-wordpress-multisite) بەدوای بخوێنەوە
٣. کاتێک پرسیار دەکەیت، **ڕێگەی subdomain** هەڵبژێرە

:::tip بۆچی Subdomains؟
Subdomains بەشێک لە سایتەکانی کڕیەرەکەت پیتێکی تایبەتی خۆیان دەدات (`studio.fitsite.com`) لەبری ڕێگای یەک (path) (`fitsite.com/studio`). ئەمە بۆ کڕیەرەکانت پڕۆفیشناڵترە و لەو کاتەدا زووبکەوتنی permalink هاوڕێییان پێشێت. بۆ تێبینییەکی ورد زیاتر ببینە [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## دامەزراندنی Ultimate Multisite {#installing-ultimate-multisite}

لە ڕێنمایی [دامەزراندنی Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) بەدوای ئەم کارانە بخوێنەوە:

١. پڕۆژەکەی (plugin network-wide) هەڵبژێرە و چالاک بکەرەوە
٢. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) بەکاربهێنە

لە کاتی Setup Wizardەکەدا، لە یاد دەهێڵە niche-ی FitSite:

- **Currency**: بۆ ئەو دراوەیەی کە کڕیەرانی ستۆدیۆکەت بەکاری دێنن دیاری بکە
- **Company name**: "FitSite" (یان ناوی براندەکەت)
- **Company logo**: لوگۆی براندەکەت هەڵبژێرە -- ئەمە لەسەر فاکچورەکان و ئیمێلەکانیش دەردەکەوێت

## ڕێکخستنی بۆ niche-ی وەرزشکردن (Fitness Niche) {#configuring-for-the-fitness-niche}

داتوان لەگەڵ دامەزراندنی Ultimate Multisite، ئەم هەڵبژاردنە تایبەت بە niche یەک ئەنجام بدەن:

### Settingsی گشتی {#general-settings}

بڕۆ بۆ **Ultimate Multisite > Settings** و ڕێکخستنی ئەم بابەتان بکە:

- **ناوی سایت**: FitSite
- **دۆخی سەرەکی**: Administrator -- خاوەنی ستودیوەکانی فیتنس پێویستیان بە کۆنترۆڵی تەواو لە ناوەڕۆکی سایتەکەیان هەیە

### ڕێکخستنی ئیمیل (Email Configuration) {#email-configuration}

ئیمیلەکانی سیستەمەکە دەبێت زمانی تایبەت بە ئەو ناوچەیەی کە کار دەکەیت، بڵێ. بگاتە **Ultimate Multisite > Settings > Emails** و پێکهاتەکەت بدۆزەوە:

- زمانێکی جیاواز و گشتی وەک "سایتی نوێی تۆ" بگۆڕە بۆ پەیامێکی تایبەت بە فیتنس
- نموونەی سابژماری سەرنجراوە: "وێبگێزنی ستودیو فیتنسەکەت ئامادەیە"
- نموونەی ناوەڕۆکی سابژمار: ئاماژە بە ستودیۆکانیان، خزمەتگوزارییەکان و دەستپێکردن لەگەڵ سایت فیتنسەکەت

لە وانەی 8 (Onboarding مانا کڕیار) زیاتر ڕێکدەینەوە، بەڵام ئێستا دیاریکردنی توندی ئەو شتە دەکات کە هەوڵەکانی تۆم پێشوەخت دەبینن.

### ڕێکخستنی دامێنی (Domain Configuration) {#domain-configuration}

ئەگەر لەگەڵ پڕۆڤایدرێکی هاوسەنگی یان بەکارهێنانی مۆدێلێکی هاوشاڵ، ئێستا مامەڵەی پەیوەندی نێوان دامەنێت بکە:

1. بگاتە **Ultimate Multisite > Settings > Domain Mapping**
2. ڕێنماییی یەکگرتوو بۆ پڕۆڤایدری تایبەت بە تۆ بەدوێنەوە
3. تاقی بکەرەوە کە سایتەکانی نوێ بە ئۆتۆ SSL وەردەگرن

ئەم کارە دڵنیابوون دەدات لە کاتی دەستپێکردنی دروستکردنی template و سایتەทดسەکانی وانەی داهاتوودا، هەموو شتێک بە تەواوی کار بکات.

## تۆڕی FitSite تا ئێستا چییە {#the-fitsite-network-so-far}

لە کۆتایی ئەم وانەیەدا، ئەوەیە کە ئێستا دەتوانیت:

FitSite Network
├── WordPress Multisite (mode subdomain)
├── Ultimate Multisite (نصب و پیکربندی شده)
├── میزبانی با SSL wildcard
├── نگاشت دامنه تنظیم شده
├── قالب‌های ایمیل مخصوص هر حوزه (اولیه)
└── آماده برای قالب‌های سایت (درس بعدی)

## چه چیزی را در این درس ساختیم {#what-we-built-this-lesson}

- نصب یک **WordPress Multisite** کارآمد در حالت زیردامنه.
- نصب و پیکربندی **Ultimate Multisite** با برندینگ FitSite.
- تنظیمات **میزبانی و SSL** برای یک شبکه در حال رشد.
- تنظیم **نگاشت دامنه** برای ارائه‌دهنده میزبانی شما.
- تعیین لحن ایمیل مخصوص هر حوزه از روز اول.

---

**بعدی:** [درس ۴: ساخت قالب‌های تخصصی](lesson-4-templates) -- ما قالب‌های سایت را می‌سازیم که صاحبان استودیوهای تناسب اندام واقعاً بخواهند از آن‌ها استفاده کنند.
