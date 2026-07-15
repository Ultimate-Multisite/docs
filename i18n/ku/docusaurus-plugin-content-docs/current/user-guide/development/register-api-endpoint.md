---
title: Registers API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# کۆتای APIی تۆڕی زۆر باش (Ultimate Multisite Register API endpoint)

لە ئەم ڕێنماییەدا، دەبێت فێر بیت چۆن بەکارهێنانی کۆتای APIی Ultimate Multisite /register بۆ دروستکردنی هەموو پڕۆسەی سەرەتایی (onboarding process) بۆ کڕیارێکی نوێ لە تۆڕەکەت و چۆن ئەوە بکەیت بە Zapier.

ئەم endpoint یەکێکە لە ڕێگاکان کە بە مێثۆدی POST کار دەکات و ناوی ئەو URLـیە **https://yoursite.com/wp-json/wu/v2/register**ـە. لەم داواکارییەدا، ٤ پڕۆسەیە لەناو تۆڕەکەت ئەنجام دەدرێن:

* یوزرێکی WordPressی نوێ دروست دەبێت یان بە ناساندنی یوزەر (user ID) دیاری دەکرێت.
* کڕیارێکی نوێ لە Ultimate Multisite دروست دەبێت یان بە ناساندنی کڕیار (customer ID) دیاری دەکرێت.
* سایتێکی نوێ لە تۆڕی WordPress دروست دەبێت.
* لە کۆتاییدا، یەکەم ئەندازی (Membership) لە Ultimate Multisite دروست دەبێت.

بۆ ئەم پڕۆسەیە، پێویستە بە مەرجەکانی APIی خۆت بیت. بۆ گرتنیان، بچیدە سەر پۆینتی ئیدارەی تۆڕەکەت (network admin panel)، بگوازرەوە بۆ **Ultimate Multisite > Settings** > **API & Webhooks** و لێبگرە بەشی تنظیمەکانی API (API Settings).

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

لێرەدا بینینی تەواوی لاپەڕەی تنظیمەکانی API دەبین:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** (کاردانەوەی API) هەڵبژێرە و مەرجەکانی APIی خۆت وەربگرە.

ئێستا، بیستنی endpointەکە و پاشان ایکشنێکی تۆمارکردن (registration action) لە Zapier دروست بکەین.

## پارامێترەکانی ناو دەقەکەی endpoint (Endpoint body parameters) {#endpoint-body-parameters}

بۆ ئەوەی بیرمان بکەینەوە لە باشترین زانیارییە بچووکە کە پێویستە بۆ ئەوەی بە endpointەکە بفرێین، لای کۆتایی ئەم بابەتە، داواکاری تەواوەکە دەبینیت.

### کڕیار (Customer) {#customer}

ئەمە ئەو زانیارییانن کە بۆ پڕۆسەی دروستکردنی یوزەر و کڕیاری Ultimate Multisite پێویستن:

"customer_id" : integer

ئایا دەتوانی IDی کڕیارەکەی کە لە تۆڕەکەت دروست کردووە، بۆ کڕیاری گونجاو بنێریت؟ ئەگەر نەنێرین، زانیاری خوارەوە بەکاردێت بۆ دروستکردنی کڕیارێکی نوێ و یوانێکی WordPress (WordPress user) نوێ. دەتوانیت IDی یوانەکەیش بە هەمان شێوەی کە IDی کڕیارەکە بنێریت.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **سەرکردایەتی (Membership)** {#membership}

تەنها یەک زانیارییەکی پێویستە لەناو ئەم ئۆبجێکتدا، ئەویش **Status**ی سەرکردایەتییە.

"membership" { "status" : "string", // یەکێک لە "pending" (چاوەڕوان)، "active" (چالاک)، "trialing" (تەست)، "expired" (پیربوونی)، "on-hold" (لە ڕێگەی وەستان)، "canceled" (بۆڕدران) }

### **بەرهەمەکان (Products)** {#products}

بەرهەمەکان دەدەکرێت بە ئارییەکی یان زیاتر لە یەک IDی بەرهەم لە تۆڕەکەت. ئاگادارم بکە، ئەم endpointە بەرهەم دروست ناکات. بۆ تێگەیشتنی باشتر لە endpointی دروستکردنی بەرهەم، سەرچاوەی Ultimate Multisite بخوێنەوە.

**"products" : [1,2],**

### **پامێر (Payment)** {#payment}

وەک لەگەڵ Membership، تەنها Statusەکەمان پێویستە.

**"payment" { "status" : "string", // یەکێک لە "pending" (چاوەڕوان)، "completed" (کەوا)، "refunded" (پێدابوونەوە)، "partially-refunded" (بەشیێدا پێدابوونەوە)، "partially-paid" (بەشیێدا پارەدان)، "failed" (نافس)، "canceled" (بۆڕدران) }**

### **سایتی (Site)** {#site}

و بۆ کۆتایی دابنێشتنی، پێویستە URL و ناونیشانی سایتەکە لەناو ئۆبجێکت Site-ەکەدا هەبێت.

**"site" : { "site_url" : "string", "site_title" : "string" }**

واتە، ئەنجامی register endpoint یەکێک دەبێت لەسەر ئاریەیەکی پێکهاتوو بە زانیاریی سەرکردایەتی نوێ دروستکراوەکان.

## دروستکردنی اکشایەک لە Zapierدا (Creating an action in Zapier) {#creating-an-action-in-zapier}

لەگەڵ پێشوازی ئەم endpointی نوێ و پڕ کاریگەر بۆ دروستکردنی ئەکاونت، دەتوانیت اکشای نوێیەک لە Zapierدا بەکاربهێنیت.

ئایا دەزانیت چۆن بەکاریان بهێنیت و هەموو ئەو شتانەی کە نسخه نوێی Zapier پێشکەش دەکات بەخێربیت؟ زیاتر بزانە لێرە. (لینک؟)

### دروستکردنی اکشایەک {#creating-an-action}

بۆ ئەوەی باشتر ڕوون بکەین چۆن بەکارهێنانی registration endpoint لەگەڵ Zapier، بیستنی یەکگرتوو (Google Forms) دروست دەکەین. هەمواری کاتێک ئەم فۆرمە پڕ دەکرێت و زانیارییەکان لە لایەنی جوابەکانی فۆرمەکەدا هەڵدەگیرێن، یەکگرتووی نوێیەک لە تۆڕی Ultimate Multisite دروست دەبێت.

لە Google Forms دا، فۆرمێک دروست بکە بە نیشینەی (fields) کەمترین پێویست بۆ دروستکردنی یەکگرتوویی نوێ لە تۆڕەکەدا.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

ئێستا لە Zapier دا، یەک Zap نوێ دروست بکە و فۆرمەکە کە لەسەر spreadsheet-ی جێگەی داتاکان هەڵگرتووە بە Google پەیوەندیش بکە.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

کەیت! فۆرمەکە لەگەڵ Zapier پەیوەندیش کراوە و ئامادەیە بۆ ئەوەی لەگەڵ تۆڕەکە یەکگرتوو بکرێت. ئێستا بچینە سەر Action (کردار) کە لە درێژەی Trigger (بۆری کارکردن) دەست پێدەکات کە Google Forms هەر کاتێک پڕ دەکرێت.

ئامێرەی Ultimate Multisite نوێیەکە بدۆزەوە و هەڵبگرە. بۆ ئەم جۆرە Zap یەک، آپشنەکە Register (Registration) هەڵبگرە.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

پاش ئەم هەنگاوە یەکەم، ئەو یەکگرتووە بکە کە دەبێت لەگەڵ ئەم Zap-ە پەیوەندیش بکرێت.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

ئەمە حساسترین بەشە لە هەموو پڕۆسەیەکە. پێویستە فیلداکان کە لە Google Forms دێن، لەگەڵ کەمترین فیلداکان بۆ registration endpoint یەکبکرێن، وەک لە بەشی پێشووی ئەم بابەتەدا نیشانکراوە.

لە ئەم نموونەیە، ئێمە تەنها دەبێت username (ناوی بەکارهێنەر)، email (پەیوەندی)، password (ڕەزامەندی)، name (ناونیشان) و URL (لینک)ی ماڵپەڕەکە دیاری بکەین. باقی کار لە پێشدا دیار دەکرێت بۆ ئەوەی هەموو یەکگرتووەکانی دروستکراوەکان لەسەر ئەم Google Forms، شێوازی هاوشێوەی بەرهەم و دۆخی (status) هەبێت.

<!-- Screenshot unavailable: مۆبایل فیلد مێپینگ لە نێوان Google Forms و کۆتایی register endpointی Ultimate Multisite -->

کاتێک زانیارییەکان ڕێکخستووە، بەدوای تاقیکردنەوەی کۆتایی دەبین. لە سەرەکیترین شاشەکەدا دەتوانیت هەموو فیلدەکانی نێردراون بۆ endpointیەکە، زانیارییەکەی و ئەو فیلدانەی کە بە خاڵ دەبن.<!-- Screenshot unavailable: شاشەی تاقیکردنەوەی Zapier کە هەموو فیلدەکانی پێویست بۆ register endpointی دەبینرێت -->

تاقیکردنی Zap نوێی خۆت بکە و ئەوە بە سەرکەوتوو تەواو دەبێت. ئەگەر هەر هەڵەیەکی ڕووبوون، هەموو فیلدەکان بزانە و ببینە ئایا بە دروستی دەنێردرێن. چونکە زانیاری زۆر هەیە، هەندێک شت لە نادانبووندا دەبێت.

### پارامێترەکانی endpointی تەواو {#complete-endpoint-parameters}

لێرەدا کۆمەڵەی تەواوی داواکاری و هەموو ئەگەری فیلدەکانی نەناردن دەبینرێت.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // یەکێک لە "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // یەکێک لە "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
