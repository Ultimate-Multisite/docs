---
title: یکردنەوەی cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Integrationi cPanel

## Pêşknowsî (Overview)
cPanel ewerî ji ek bira panela kontrolî web hosting ye ku gelek pênasekên hostingên payewe (shared) û dede (dedicated) li parastina ve yên gelek kes hatine li ser. Ev integrasyon gelek xwediyê ye ku ji bo hinekî bi rastî (automatic) bikin domain alias û subdomain ji bo hesabê cPanel yê we bi rastî zêde bikin.

## Xwediyariyên (Features)
- Çêkirina otomatik addon domain di cPanel de
- Çêkirina otomatik subdomain di cPanel de (bo li ser enstalevanên subdomain multisite)
- Hêzbûnê ji berdexabûna mappings (domain alias'ên)

## Pêşrevî (Requirements)
Pêşkoşên lêkolîn yên diove neviştin di dosyeya `wp-config.php` de:

```php
define('WU_CPANEL_USERNAME', 'username_yê_cpanel');
define('WU_CPANEL_PASSWORD', 'password_yê_cpanel');
define('WU_CPANEL_HOST', 'host_yê_cpanel');
```

Bi rêkî (optionally), tu dikarin jî dê vê yekê deyn bikin:

```php
define('WU_CPANEL_PORT', 2083); // Rêveke ji 2083 e
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Rêveka ji /public_html e
```

## Nîşankirina (Setup Instructions)

### 1. Xwata xwe yên cPanel bidin

1. Username û password yê cPanel-ê xwe ji pênasekên hostingê xwe ji we re bipêjin.
2. Host yê cPanel yê we debaşa bixwazin (bi gelemeyî `cpanel.yourdomain.com` an jî `yourdomain.com:2083`).

### 2. Konstanta di wp-config.php de bişorîn bikin

Konstanta yên lêkolîn de li dosyeya `wp-config.php` de bişorîn bikin:

```php
define('WU_CPANEL_USERNAME', 'username_yê_cpanel');
define('WU_CPANEL_PASSWORD', 'password_yê_cpanel');
define('WU_CPANEL_HOST', 'host_yê_cpanel');
```

Bi rêkî (optionally), tu dikarin port û root directory bişorîn bikin:

```php
define('WU_CPANEL_PORT', 2083); // Eguverê ji bo gelekên cPanel ku hevbeş ne
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Eguverê ji bo root directory yê dökümanan
```

### 3. Integrasyonê vekirin

١. لە ئیدارەی WordPress، بگواشبە Ultimate Multisite > Settings (سەرکردایەتی)
٢. بۆ لایەنەکە بگواشبە "Domain Mapping" (پێناسەکردنی دامێنی)
٣. نزیک بکە دەستی خوارەوە بۆ "Host Integrations" (یەکگرتوو لەگەڵ هاستکردن)
٤. Enable the cPanel integration (فعۆڕ کردن یەکگرتووی cPanel)
٥. Click "Save Changes" (گواهی گۆڕانکارییەکان هەڵبژێرە)

## چۆنیوە کار دەکات

### Addon Domains (دامێنیی پاشەکەوتکراو)

کاتێک دامێنێکی لە Ultimate Multisite دا پێناسە دەکرێت:

١. یەکگرتوو داواکارییەک بۆ APIی cPanel دەبینێت تا ئەو دامێنە وەک addon domain زیاد بکات
٢. دامێنەکە ڕێکدەخرێت کە ئاماژەی بە دایرێکتۆری سەرەکی (root directory) بدات
٣. کاتێک پێناسەکردنی دامێنی لەناوچێت، یەکگرتوو ئەو addon domainە لە cPanel دەداتەوە

### Subdomains (دامێنەکانی ژێرنووس)

بۆ جۆرەکانی Multisite کە بە subdomain کار دەکەیت، کاتێک سایتێکی نوێ دروست دەکەیت:

١. یەکگرتوو بەشی subdomain-ی دامێنەکە لە دامێنی تەواوەکە دەداتەوە
٢. داواکارییەک بۆ APIی cPanel دەبینێت تا ئەو subdomainە زیاد بکات
٣. subdomainەکە ڕێکدەخرێت کە ئاماژەی بە دایرێکتۆری سەرەکی (root directory) بدات

## تێبینییە گرنگان

- یەکگرتوو لە کارکردن لەگەڵ API2ی cPanel بۆ پەیوەندی لەگەڵ هەژمارەکەت بەکاردێت
- هەژمارەکەی cPanel دەبێت ڕێگەپێردنی زیادکردنی addon domains و subdomains هەبێت
- چەندین پڕۆڤایدر هاستکردن دەتوانن ژمارەی addons یان subdomainەکانت سنووردار بکەن کە دەتوانیت دروست بکەیت
- یەکگرتوو بەڕێوەبردنی DNS (DNS configuration) ناکات؛ تۆ هێشتا دەبێت دامێنەکانت بۆ IPی خەریکی خۆت ڕێکبخەیت

## چارەسەرکردنی کێشەکان (Troubleshooting)

### کێشەی پەیوەندی بە API

- دڵنیا بەوەی کە ناوی کاربری و وشکەری cPanel دروستنە
- چاک بکە کە هاستکردنی cPanel تۆ دروستە و دەتوانیت بەکاری بهێنیت
- دڵنیا بەوەی کە هەژمارەکەی cPanel ڕێگەپێردنی پێویست هەیە

### دامێنەکە زیاد نەکراوە

- لە لاگەکانی Ultimate Multisite بۆ هەر پەیامێکی هەڵە چاک بکە
- دڵنیا بەوەی کە دامێنەکە پێشتر لە cPanel دا زیاد نییە
- دڵنیا بەوەی کە هەژمارەکەی cPanel سنوور بۆ addon domains یان subdomain هاودا ناییکراوە

### پروبیز سسڵ سرتیفیکات (SSL Certificate Issues)
- ئەم یەکۆلینە ئەو کارانەی کە بەدەستهێنانەوەی SSL certificate ناهێنێت.
- بۆ ئەوەی SSL certificates بۆ دۆمەینەکانت دەستنیشانی، پێویستە لە ئامرازەکانی cPanel یان تایبەتمەندی AutoSSL بەکاربهێنیت.
- بە شێوەیەکی دیکە، دەتوانیت سیستیمی وەک Let's Encrypt بەکاربهێنیت لەگەڵ AutoSSLی cPanelدا.
