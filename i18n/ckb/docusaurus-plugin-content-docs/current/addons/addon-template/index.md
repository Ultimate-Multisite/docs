---
title: قاڵبی Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# قاڵبی پێوەکراو

{{ADDON_DESCRIPTION}}

## پێداویستییەکان

- WordPress 5.3 یان بەرزتر
- PHP 7.4 یان بەرزتر
- پڵەگینی Multisite Ultimate (چالاک)

## دامەزراندن

1. پەڕگەکانی پێوەکراوەکە باربکە بۆ بوخچەی `/wp-content/plugins/`
2. پڵەگینەکە لە ڕێگەی مێنیوی 'Plugins' لە WordPress چالاک بکە
3. ڕێکخستنەکانی پێوەکراوەکە لە بەڕێوەبەری تۆڕدا ڕێکبخە

## پەرەپێدان

### ئامادەکردن

```bash
# Install dependencies
composer install
npm install

# Run tests
npm run test

# Run code standards checks
vendor/bin/phpcs
vendor/bin/phpstan

# Fix code style issues
vendor/bin/phpcbf

# Build for production
npm run build
```

### پێکهاتەی پڕۆژە

```
ultimate-multisite-addon-template/
├── inc/                          # پۆلەکانی PHP و هاوردەکان
│   ├── class-multisite-ultimate-updater.php  # مامەڵەکاری نوێکردنەوە
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # کارایی سەرەکی
├── tests/                        # تاقیکردنەوەی یەکەیی
│   ├── bootstrap.php            # دەستپێکردنی تاقیکردنەوە
│   ├── class-*-base.php         # پۆلی بنەڕەتی تاقیکردنەوە
│   └── class-*-test.php         # حاڵەتەکانی تاقیکردنەوە
├── views/                       # پەڕگەکانی قاڵب
├── assets/                      # سەرچاوە نەگۆڕەکان
│   ├── css/                     # Stylesheets
│   ├── js/                      # پەڕگەکانی JavaScript
│   └── images/                  # وێنەکان
├── lang/                        # پەڕگەکانی زمان
├── composer.json                # وابەستەییەکانی PHP
├── package.json                 # وابەستەییەکانی Node.js
├── phpunit.xml.dist             # ڕێکخستنی PHPUnit
├── .phpcs.xml.dist              # ڕێکخستنی ستانداردەکانی کۆد
└── rector.php                   # یاساکانی نوێکردنەوەی کۆد
```

### تاقیکردنەوە

پێوەکراوەکە چوارچێوەیەکی تاقیکردنەوەی گشتگیری تێدایە:

- **تاقیکردنەوەی یەکەیی**: تاقیکردنەوەکانی بنیاتنراو لەسەر PHPUnit لەگەڵ کۆمەڵەی تاقیکردنەوەی WordPress
- **پۆلی بنەڕەتی تاقیکردنەوە**: میتۆدە یارمەتیدەرەکان بۆ دۆخە باوەکانی تاقیکردنەوە دابین دەکات
- **داپۆشینی تاقیکردنەوە**: ڕێکخراوە بۆ شوێنکەوتنی داپۆشینی کۆد
- **تاقیکردنەوەی Multisite**: تاقیکردنەوەکان لە ژینگەی multisiteدا ئەنجام دەدرێن

### ستانداردەکانی کۆد

- **ستانداردەکانی کۆدنووسی WordPress**: لە ڕێگەی PHPCS جێبەجێ دەکرێت
- **گونجانی PHP 7.4+**: تایبەتمەندییە نوێیەکانی PHP پشتگیری دەکرێن
- **شیکاریی نەگۆڕ**: یەکخستنی PHPStan بۆ پشکنینی جۆر
- **نوێکردنەوەی کۆد**: یاساکانی Rector بۆ بەرزکردنەوەی PHP

### سیستەمی Build

- **پرۆسێسکردنی سەرچاوەکان**: بچووککردنەوە بۆ پەڕگەکانی CSS/JS
- **وەرگێڕان**: دروستکردنی پەڕگەی POT
- **پاکێجکردن**: دروستکردنی ئەرشیف بۆ دابەشکردن
- **دۆخی پەرەپێدان**: سەرچاوە بچووک‌نەکراوەکان بۆ هەڵەدۆزینەوە

## ڕێکخستن

پێوەکراوەکە پشتگیریی هەڵبژاردەی ڕێکخستنی جۆراوجۆر دەکات کە لە ڕووکاری بەڕێوەبەری تۆڕەوە دەستپێگەیشتوون.

## Hooks و Filters

### Actions

- `ultimate-multisite-addon-template_init` - دوای دەستپێکردنی پێوەکراوەکە کاردەکات
- `ultimate-multisite-addon-template_loaded` - دوای بارکردنی هەموو پەڕگەکانی پێوەکراوەکە کاردەکات

### Filters

- `ultimate-multisite-addon-template_settings` - گۆڕینی ڕێکخستنەکانی پێوەکراو
- `ultimate-multisite-addon-template_enabled` - تێپەڕاندنی دۆخی چالاککردن/ناچالاککردنی پێوەکراو

## مۆڵەت

ئەم پێوەکراوە بە GPL v3 یان دواتر مۆڵەتدراوە.

## پشتگیری

بۆ پشتگیری و بەڵگەنامە، سەردانی [MultisiteUltimate.com](https://multisiteultimate.com) بکە
## گۆڕانکارییەکان

- وەشانی 1.0.1 (2025-09-28): گۆڕینی ناوی پێشگر بۆ ultimate-multisite؛ نوێکردنەوەی text domain؛ بەرزکردنەوەی وەشان.


- وەشانی  (2025-09-28): گۆڕینی ناوی پێشگر بۆ ultimate-multisite؛ نوێکردنەوەی text domain؛ بەرزکردنەوەی وەشان.
