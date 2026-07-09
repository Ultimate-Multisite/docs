---
title: ایڈ آن ٹیمپلیٹ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# ایڈ آن ٹیمپلیٹ {#addon-template}

{{ADDON_DESCRIPTION}}

## ضروریات (Requirements) {#requirements}

- WordPress 5.3 یا اس سے زیادہ
- PHP 7.4 یا اس سے زیادہ
- Multisite Ultimate plugin (active)

## انسٹالیشن (Installation) {#installation}

1. ایڈ آن فائلوں کو اپنی `/wp-content/plugins/` ڈائریکٹری میں اپ لوڈ کریں۔
2. WordPress میں 'Plugins' مینیو کے ذریعے پلگ ان کو ایکٹیویٹ کریں۔
3. نیٹ ورک ایڈمن میں ایڈ آن کی سیٹنگز کو کنفیگر کریں۔

## ڈویلپمنٹ (Development) {#development}

### سیٹ اپ (Setup) {#setup}

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

### پروجیکٹ سٹرکچر (Project Structure) {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP کلاسز اور انکلڈز
│   ├── class-multisite-ultimate-updater.php  # اپ ڈیٹ ہینڈلر
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # بنیادی فنکشنلٹی
├── tests/                        # یونٹ ٹیسٹ
│   ├── bootstrap.php            # ٹیسٹ بوٹسٹریپ
│   ├── class-*-base.php         # بیس ٹیسٹ کلاس
│   └── class-*-test.php         # ٹیسٹ کیسز
├── views/                       # ٹیمپلیٹ فائلز
├── assets/                      # سٹیٹک اثاثے (Static assets)
│   ├── css/                     # اسٹائل شیٹس
│   ├── js/                      # جاوا سکرپٹ فائلز
│   └── images/                  # تصاویر
├── lang/                        # زبان کی فائلز
├── composer.json                # PHP ڈیپینڈنسیز
├── package.json                 # Node.js ڈیپینڈنسیز
├── phpunit.xml.dist             # PHPUnit کنفیگریشن
├── .phpcs.xml.dist              # کوڈ اسٹینڈرڈز کنفیگریشن
└── rector.php                   # کوڈ ماڈرنائزیشن کے اصول
```

### ٹیسٹنگ (Testing) {#testing}

اس ایڈ آن میں ایک مکمل ٹیسٹنگ فریم ورک شامل ہے:

- **Unit Tests**: WordPress ٹیسٹ سوٹ کے ساتھ PHPUnit پر مبنی ٹیسٹ
- **Base Test Class**: عام ٹیسٹ منظرناموں کے لیے مددگار طریقے (helper methods) فراہم کرتا ہے
- **Test Coverage**: کوڈ کی کوریج کو ٹریک کرنے کے لیے کنفیگر کیا گیا ہے
- **Multisite Testing**: ٹیسٹ ایک multisite ماحول میں چلتے ہیں

### کوڈ اسٹینڈرڈز (Code Standards) {#code-standards}

- **WordPress Coding Standards**: PHPCS کے ذریعے نافذ کیے گئے
- **PHP 7.4+ Compatibility**: جدید PHP فیچرز کو سپورٹ کرتا ہے
- **Static Analysis**: ٹائپ چیکنگ کے لیے PHPStan کا انٹیگریشن
- **Code Modernization**: PHP اپ گریڈ کے لیے Rector اصول

### بلڈ سسٹم (Build System) {#build-system}

- **Asset Processing**: CSS/JS فائلوں کے لیے مینیفیکیشن (Minification)
- **Translation**: POT فائل جنریشن
- **Packaging**: تقسیم کے لیے آرکائیو کی تخلیق
- **Development Mode**: ڈیبگنگ کے لیے غیر مینیفائیڈ اثاثے (Unminified assets)

## کنفیگریشن (Configuration) {#configuration}

یہ ایڈ آن نیٹ ورک ایڈمن انٹرفیس کے ذریعے قابل رسائی مختلف کنفیگریشن آپشنز کو سپورٹ کرتا ہے۔

## Hooks اور Filters {#hooks-and-filters}

### Actions (ایکشنز) {#actions}

- `ultimate-multisite-addon-template_init` - ایڈ آن کے شروع ہونے کے بعد چلتا ہے
- `ultimate-multisite-addon-template_loaded` - تمام ایڈ آن فائلوں کے لوڈ ہونے کے بعد چلتا ہے

### Filters (فلٹرز) {#filters}

- `ultimate-multisite-addon-template_settings` - ایڈ آن کی سیٹنگز کو تبدیل کرتا ہے
- `ultimate-multisite-addon-template_enabled` - ایڈ آن کے enable/disable اسٹیٹس کو اووررائڈ کرتا ہے

## لائسنس (License) {#license}

یہ ایڈ آن GPL v3 یا اس سے زیادہ کے تحت لائسنس شدہ ہے۔

## سپورٹ (Support) {#support}

سپورٹ اور دستاویزات کے لیے، [MultisiteUltimate.com](https://multisiteultimate.com) وزٹ کریں۔
## Changelog {#changelog}

- Version 1.0.1 (2025-09-28): پری فکس کو ultimate-multisite میں تبدیل کیا؛ ٹیکسٹ ڈومین کو اپ ڈیٹ کیا؛ ورژن بڑھایا۔


- Version (2025-09-28): پری فکس کو ultimate-multisite میں تبدیل کیا؛ ٹیکسٹ ڈومین کو اپ ڈیٹ کیا؛ ورژن بڑھایا۔
