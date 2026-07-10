---
title: Cloudways 통합
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration {#cloudways-integration}

## مروری (Overview) {#overview}
Cloudways یو مدیریت شوی cloud hosting platform دی چې تاسو ته اجازه ورکوي WordPress sa مختلف cloud providers لکه DigitalOcean، AWS، Google Cloud او نورو کې deploy کړئ. دا integration د Ultimate Multisite او Cloudways ترمنځ خودکار domain syncing او SSL certificate management فعالوي.

## خوندګې (Features) {#features}
- خودکار domain syncing
- SSL certificate management
- اضافي domains لپاره دعم (Support for extra domains)
- SSL certificates لپاره DNS validation

## اړتیاوې (Requirements) {#requirements}
لاندې constants باید په `wp-config.php` فایل کې تعریف شوي وي:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

په اختیاري ډول، تاسو کولی شئ دا هم تعریف کړئ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## تنظیم کولو لارښوونې (Setup Instructions) {#setup-instructions}

### ۱. خپل Cloudways API Credentials ترلاسه کړئ {#1-get-your-cloudways-api-credentials}

۱. خپل Cloudways dashboard मा لاگ او ورسېږئ.
۲. "Account" > "API Keys" ته जानुहोस्.
۳. که تاسو پہلے له هغې نه لرئ، یو API key تولید کړئ.
۴. خپل email او API key کپی کړئ.

### ۲. خپل Server او Application IDs ترلاسه کړئ {#2-get-your-server-and-application-ids}

۱. په Cloudways dashboard کې، "Servers" ته ورسئ.
۲. هغه server غوره کړئ چې ستاسو WordPress multisite върху یې host شوی دی.
۳. Server ID په URL کې ښکاره ده: `https://platform.cloudways.com/server/{SERVER_ID}`
۴. "Applications" ته जानुहोस् او خپل WordPress application غوره کړئ.
۵. App ID په URL کې ښکاره ده: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ۳. Constants د wp-config.php मा اضافه کړئ {#3-add-constants-to-wp-configphp}

لاندې constants ته خپل `wp-config.php` فایل کې اضافه کړئ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

যদি আপনার এমন কোনো **বাহ্যিক** ডোমেইন থাকে (যা আপনার মাল্টিসাইট নেটওয়ার্কের বাইরে) যা সর্বদা Cloudways aliases লিস্টে রাখা উচিত:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning আপনার নিজের নেটওয়ার্কের ওয়াইল্ডকার্ড অন্তর্ভুক্ত করবেন না
`WU_CLOUDWAYS_EXTRA_DOMAINS`-এ `*.your-network.com` (বা আপনার নিজের নেটওয়ার্কের যেকোনো সাবডোমেইন প্যাটার্ন) যোগ করবেন না। কেন এটি প্রতি-টেন্যান্ট SSL সার্টিফিকেট ইস্যু করা প্রতিরোধ করে, তার জন্য নিচের [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall) দেখুন।
:::

### ৪. ইন্টিগ্রেশন সক্ষম করুন {#4-enable-the-integration}

১. আপনার ওয়ার্ডপ্রেস অ্যাডমিন থেকে, Ultimate Multisite > Settings এ যান
২. "Domain Mapping" ট্যাবে যান
৩. নিচে স্ক্রল করে "Host Integrations"-এ যান
৪. Cloudways ইন্টিগ্রেশন চালু করুন
৫. "Save Changes" ক্লিক করুন

## এটি কিভাবে কাজ করে {#how-it-works}

### ডোমেইন সিঙ্কিং {#domain-syncing}

যখন Ultimate Multisite-এ একটি ডোমেইন ম্যাপ করা হয়:

১. ইন্টিগ্রেশন বর্তমানে ম্যাপ করা সমস্ত ডোমেইন পুনরুদ্ধার করে
২. এটি নতুন ডোমেইনটিকে লিস্টে যোগ করে (যদি প্রযোজ্য হয় তবে www সংস্করণ সহ)
৩. এটি সম্পূর্ণ তালিকাটি API এর মাধ্যমে Cloudways-এ পাঠায়
৪. Cloudways আপনার অ্যাপ্লিকেশনের জন্য ডোমেইন aliases আপডেট করে

দ্রষ্টব্য: Cloudways API প্রতিবার শুধুমাত্র পৃথক ডোমেইন যোগ বা সরানোর পরিবর্তে সম্পূর্ণ ডোমেইনের তালিকা পাঠানোর প্রয়োজন হয়।

### SSL সার্টিফিকেট ব্যবস্থাপনা {#ssl-certificate-management}

ডোমেইন সিঙ্ক করার পরে:

১. ইন্টিগ্রেশন পরীক্ষা করে দেখে কোন ডোমেইনগুলির DNS রেকর্ডগুলি আপনার সার্ভারের দিকে সঠিকভাবে নির্দেশ করছে
২. এটি সেই ডোমেইনগুলির জন্য Let's Encrypt SSL সার্টিফিকেট ইনস্টল করতে Cloudways-এ একটি অনুরোধ পাঠায়
৩. Cloudways SSL সার্টিফিকেট ইস্যু এবং ইনস্টলেশন পরিচালনা করে

هميشه هم آنیک整合 **standard** (غیر wild card) Let's Encrypt certificates را از Cloudways درخواست می‌کند. اگر در `WU_CLOUDWAYS_EXTRA_DOMAINS` یک الگوی wildcard ارائه شود، قبل از درخواست SSL، ابتدای `*.` حذف می‌شود — این integration هرگز خود wildcard را نصب نمی‌کند. برای استفاده از گواهی wildcard روی Cloudways باید آن را به صورت دستی نصب کنید، اما انجام این کار باعث مسدود شدن صدور Let's Encrypt برای دامنه‌های سفارشی نگاشت شده (see the pitfall below) می‌شود.

## Extra Domains (دامنه‌های اضافی) {#extra-domains}

ثابت `WU_CLOUDWAYS_EXTRA_DOMAINS` به شما اجازه می‌دهد دامنه‌های **خارجی** دیگری را مشخص کنید که همیشه باید در لیست آدرس‌های مستعار (aliases list) برنامه Cloudways باقی بمانند. از آن برای موارد زیر استفاده کنید:

- دامنه‌های خارجی که توسط Ultimate Multisite مدیریت نمی‌شوند (مثلاً یک سایت بازاری جداگانه که از همان برنامه Cloudways استفاده می‌کند).
- دامنه‌های پارک شده یا استیجینگ که می‌خواهید در لیست آدرس‌های مستعار برنامه باقی بمانند.

**از این ثابت برای wildcard زیردامنه شبکه خود استفاده نکنید** (مثلاً `*.your-network.com`). به نکته مربوط به مشکل SSL wildcard زیر مراجعه کنید.

## مهم — مشکل SSL wildcard {#important--wildcard-ssl-pitfall}

یک اشتباه رایج هنگام دنبال کردن تنظیمات پیش‌فرض Cloudways، اضافه کردن یک wildcard مانند `*.your-network.com` به `WU_CLOUDWAYS_EXTRA_DOMAINS` یا نصب دستی یک گواهی SSL wildcard برای Cloudways برای آن wildcard است.

**اگر این کار را انجام دهید، Cloudways از صدور گواهی‌های Let's Encrypt برای دامنه‌های سفارشی هر مستأجر که Ultimate Multisite نگاشت می‌کند، خودداری خواهد کرد.** Cloudways هر بار گواهی SSL فعال روی برنامه را جایگزین می‌کند، و یک گواهی wildcard از قبل موجود روی برنامه مانع صدور Let's Encrypt مخصوص هر دامنه می‌شود که این integration به آن وابسته است.

### تنظیمات پیشنهادی SSL Cloudways برای شبکه Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

۱. در تب **SSL Certificate**嘅 اپلیکیشن Cloudways، یو **standard Let's Encrypt certificate** نصب गर्नुहोस् چې فقط `your-network.com` र `www.your-network.com` کور بند کړي — **نه** wildcard (مانند `*.your-network.com`).
۲. ازرو `*.your-network.com` (یا هر نمونې د خپل شبکې د زیرمجموعو لپاره) په `WU_CLOUDWAYS_EXTRA_DOMAINS` کې نه کړئ. دا ثابت هم vir (constant) یوازې **خارجی** domenونو لپاره محفوظ کړئ.
۳. پر **DNS** سطحमा فقط هر Tenant-specific subdomain wildcard جوړ کړئ (یو `A` record د `*.your-network.com` لپاره چې خپل Cloudways server IP ته اشاره کوي)، ترڅو زیرمجموعې حل شي. د个ه وروسته، د یو个ی مېپ شوي custom domains لپاره SSL د Let's Encrypt له لارې د integration له خوا خودکار ورکړل کیږي.

که د ستوندو custom domains په SSL کې بند وي، Cloudways SSL تب ته وګورئ. که त्य there wildcard certificate فعال وي، هغه ومیرئ، یوه standard Let's Encrypt certificate فقط اصلي شبکې domain لپاره بیا ورکړئ، او `WU_CLOUDWAYS_EXTRA_DOMAINS` څخه هر ډول wildcard ننوتل ومیرئ. وروسته یو domain mapping (یا د پخوانی انتظار وکړئ) پر عمل پیل کیږي او integration بیا په هر domain کې certificates ورکول پیل کوي.

## مشکې حل (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- ډاډ ترلاسه کړئ چې ستاسو ایمیل او API key صحیح دي
- وګورئ چې ستاسو server او application IDs صحیح دي
- ډاډ ترلاسه کړئ چې ستاسو Cloudways account ته اړین پرمېشنونه (permissions) موجوده دي

### مسائلی په SSL سرتیفیکات (SSL Certificate Issues) {#ssl-certificate-issues}
- Cloudways باید قبل از اینکه سرتیفیکات SSL ورکړی شي، ډامینونه باید DNS رکوردونه لري چې ورته سرور ته اشاره وکړي.
- دا سیستم د SSL سرتیفیکاتو غوښتنه کولو وروسته هم DNS رکوردونه چکوي.
- که SSL سرتیفیکات ورکړل نه کیږي، وګورئ چې آیا ډامینونه په سمه توګه د خپل سرور IP ته اشاره کوي.
- **د هر کارونکي لپاره جوړ شوي (Per-tenant custom domains) چې بدون SSL و ایستلي دي؟** Cloudways اپلیکیشنको SSL Certificate ټب چیک کړئ. که یو ویلډ کیټسرتیفیکات (wildcard certificate - manuallly installed, or covering `*.your-network.com`) فعال وي، نو Cloudways په انفرادي रूपमा مېپ شوي ډامینونه د Let's Encrypt سرتیفیکات ورکونل نه دی. यसलाई एउटा मानक Let's Encrypt سرتیفیکेटले बदल्नुहोस् چې মাত্ৰ اصلي شبکه डोमेन (`your-network.com`, `www.your-network.com`) लाई समेटे, र `WU_CLOUDWAYS_EXTRA_DOMAINS` बाट कुनै पनि ویلډ کیټسرتیفیکاتको प्रविधिकو حذف کړئ। त्यसपछि एउटा डोमेन म्यापिङ फेरि uruchas (trigger) کړئ (یا अर्कोको लागि انتظار وکړئ) او دا هميشه چې سیستمले प्रत्येक डोमेनको लागि سرتیفیکेट غواړي.

### डोमेन اضافه نه भएको छ (Domain Not Added) {#domain-not-added}
- कुनै पनि غلط پیغامहरूको लागि Ultimate Multisite лоجز (logs) जाँच गर्नुहोस्।
- पुष्टि गर्नुहोस् कि डोमेन अघिल्लो पटक Cloudways मा थपिएको छैन।
- सुनिश्चित गर्नुहोस् कि 귀하को Cloudways प्लानले तपाईंले जोड्ने डोमेनहरूको संख्यालाई समर्थन गर्छ.
