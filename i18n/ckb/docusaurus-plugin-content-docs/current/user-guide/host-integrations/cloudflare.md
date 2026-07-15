---
title: یەکگرتووکردنی Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integration-awe Cloudflare

## Overview {#overview}
Cloudflare هي شبكة توصيل محتوى (CDN) ومزود أمان رائد يساعد في حماية وتسريع المواقع. هذا التكامل يتيح إدارة تلقائية للنطاقات بين Ultimate Multisite و Cloudflare، خاصة لتثبيتات مواقع فرعية متعددة النطاقات (subdomain multisite).

## Features {#features}
- إنشاء نطاقات فرعية تلقائيًا في Cloudflare
- دعم النطاقات الفرعية المُمررة (Proxied subdomain support)
- إدارة سجلات DNS
- عرض مُحسّن لسجلات DNS في لوحة تحكم Ultimate Multisite الإدارية

## Requirements {#requirements}
يجب تعريف الثوابت التالية في ملف `wp-config.php` الخاص بك:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Setup Instructions {#setup-instructions}

### 1. الحصول على مفتاح API الخاص بك من Cloudflare {#1-get-your-cloudflare-api-key}

1. سجل الدخول إلى لوحة تحكم Cloudflare الخاصة بك
2. اذهب إلى "My Profile" (انقر على بريدك الإلكتروني في الزاوية العلوية اليمنى)
3. اختر "API Tokens" من القائمة
4. أنشئ رمز API جديد مع الأذونات التالية:
   - Zone.Zone: قراءة (Read)
   - Zone.DNS: تعديل (Edit)
5. انسخ رمز API الخاص بك

### 2. الحصول على معرف النطاق (Zone ID) الخاص بك {#2-get-your-zone-id}

1. في لوحة تحكم Cloudflare الخاصة بك، اختر النطاق الذي تريد استخدامه
2. معرف النطاق (Zone ID) مرئي في علامة التبويب "Overview"، في الشريط الجانبي الأيمن تحت "API"
3. انسخ معرف النطاق

### 3. إضافة الثوابت إلى wp-config.php {#3-add-constants-to-wp-configphp}

أضف الثوابت التالية إلى ملف `wp-config.php` الخاص بك:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. تمكين التكامل {#4-enable-the-integration}

1. في لوحة تحكم WordPress الخاصة بك، اذهب إلى Ultimate Multisite > Settings
2. انتقل إلى علامة التبويب "Domain Mapping" (تخطيط النطاقات)
3. مرر لأسفل إلى "Host Integrations" (تكاملات المضيف)
4. قم بتمكين تكامل Cloudflare
5. انقر على "Save Changes" (حفظ التغييرات)

## How It Works {#how-it-works}

### إدارة النطاقات الفرعية (Subdomain Management) {#subdomain-management}

عند إنشاء موقع جديد في تثبيت مواقع فرعية متعددة النطاقات:

١. Integrationەکە بۆ APIی Cloudflare دا داواێک دەکات بۆ زیادکردنی تۆمارەیەکی CNAME بۆ زیرەکی (subdomain)
٢. زیرەکییەکە بە پێویست، بە شێوەیەکی پیش‌دۆزیش لەلایەن Cloudflareەوە پڕۆکس (proxy) دەکرێت (ئەمە دەتوانرێت بە فیلترەکان بگۆڕدرێت)
٣. کاتێک سایتێک دیار دەکرێت و لێ دەدرێت، integrationەکە زیرەکییەکە لە Cloudflare دەکاتەوە

### نیشاندانی تۆمارەی DNS (DNS Record Display) {#dns-record-display}

Integrationەکە نیشانکارییەکانی تۆمارەی DNS لە بەڕێوەبردنی Ultimate Multisite بە شێوەیەکی باشتر دەکات بە:

١. داواکردنی تۆمارەی DNS ڕاستەوخۆ لە Cloudflare
٢. نیشاندانی ئەوەی تۆمارە پڕۆکس (proxied)ن یان نییە
٣. نیشاندانی زانیاری زیاتر دەربارەی ئەو تۆمارە DNS-انە

## ناوی میزڵەکانی تایبەت لە Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**ناوی میزڵەکانی تایبەت لە Cloudflare** (کە پێشتر ناوی "Cloudflare for SaaS" بوو) کارامەیەک لە Cloudflare یە کە ڕێگە دەدات بە کڕیارەکان بەکارھێنانی ناوچەکانی خۆیان لەگەڵ SSL لە تۆڕی Multisiteی ئێوە. ئەمە ڕێنمایی پێکراوەیە بۆ دامەزراندنی Multisite کە پەیوەستن بە ناوی دۆمەین (domain-mapped) و بەکارهێنانی Cloudflare، چونکە Cloudflare بە شێوەیەکی ئۆتۆماتیک پڕۆسەی دەستکردنی گوازارنی SSL بۆ هەر ناوچێکی تایبەت بەڕێوە دەبات.

### جیاوازی لەگەڵ integrationی ستاندارد یەک {#how-it-differs-from-the-standard-cloudflare-integration}
| | Integrationی ستاندارد | Cloudflare Custom Hostnames |
|---|---|---|
| **بابەت** | ئۆتۆماتیک دروستکردنی تۆمارەی DNS بۆ زیرەکییەکان (subdomains) | ڕێنمایی بە ناوچەکانی تایبەت (mapped domains) لەگەڵ SSL کە لەلایەن Cloudflareەوە بەڕێوە دەبات |
| **باشترین بۆ** | Multisiteی پێکدۆشراو لەسەر زیرەکییەکان (Subdomain multisite) | Multisiteی پەیوەندیدار بە ناوچەکانی دۆمەین (Domain-mapped multisite) |
| **SSL** | بە شێوەیەکی جیاواز دەکرێت | ئۆتۆماتیک لەلایەن Cloudflareەوە بەڕێوەدەچێت |

### ڕێکخستنی Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

١. لە داش보ارەکەدا، زۆنی (zone) بۆ دۆمەینی سەرەکییەکەت بکەرەوە.
٢. بگواشبە **SSL/TLS > Custom Hostnames**.
٣. یەک سەرچاوەی پشتیوانی (fallback origin) زیاد بکە کە ئاماژەیە بۆ IP یان ناوی سروری تۆ.
٤. بۆ هەر دۆمەینی کڕیارێک کە لە Ultimate Multisite دا مێپکراوە، شتێکی Custom Hostname لە Cloudflare زیاد بکە. دەتوانی ئەم هەنگاوە بە شێوەیەکی ئۆتۆماتیک بەکاربهێنیت بە بەکارهێنانی Cloudflare API.
٥. Cloudflare بە شێوەیەکی خۆدەرەوە و تازەکردنەوەی گوازارەکانی TLS بۆ هەر ناوی Custom Hostname یەکێک ئەنجام دەدات لەو کاتەی DNSی کڕیارەکە ئاماژەیە بۆ تۆڕەکەت.

بۆ سەرچاوەی تەواوەکەی API، سەردانی [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) بکە.

:::note نوێکردنەوەی دەستەواژەکان
لە وەرگرتنی Ultimate Multisite v2.6.1ەوە، ئەم تایبەتمەندییە لە هەموو ڕێکخراوەکانی پڵۆگین و لیبڵەریدا بە **Cloudflare Custom Hostnames** ناودەبرێت. پێشتر، ئەو وەرگرتەی "Cloudflare for SaaS" بوو کە ناوی زیرەکی سەرەکییەکە بوو.
:::

## تێبینییە گرنگان {#important-notes}

لە نوێکردنەوەکانی تازەی Cloudflareدا، ئێستا گوازارکردنی wildcard proxy بۆ هەموو کڕیارەکان بەکار دەهێنرێت. ئەمە واتای ئەوەیە کە یەکگرتوویی DNSی ستاندارد لەگەڵ subdomain multisite installers زیاتر گرنگ نییە لە پێشتر، چونکە دەتوانی ببیت بە سادەیی تۆماری DNSێکی wildcard لە Cloudflare دروست بکەیت.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی API {#api-connection-issues}
- دڵنیا بەوەی کە توکن API یەکەت دروستە و ڕێگەپێردنی پێویست دەبێت
- چاک بکە کە ID ی زۆنەکەت دروستە
- دڵنیا بەوەی کە هەژمارەکەت لە Cloudflare ڕێگەپێردنی پێویست هەیە

### Subdomain زیاد نەکراوە {#subdomain-not-added}
- تۆڕەکانی Ultimate Multisite بۆ هەر پەیامێکی هەڵە چاک بکە
- دڵنیا بەوەی کە subdomainەکە لە Cloudflare دا پێشتر زیاد نییە
- دڵنیا بەوەی کە پلانی Cloudflare یەکەت پشتگیریکردنی ژمارەی تۆماری DNS کە دروست دەکەیت هەیە

### پروسی کردن مشکلات {#proxying-issues}

- اگر نمی‌خواهید زیردامنه‌ها پروسی شوند، می‌توانید از فیلتر `wu_cloudflare_should_proxy` استفاده کنید.
- برخی ویژگی‌ها ممکن است هنگام پروسی شدن به درستی کار نکنند (مثلاً برخی توابع مدیریت وردپرس).
- برای دور زدن کش برای صفحات مدیریت، استفاده از Page Rulesِ Cloudflare را در نظر بگیرید.
