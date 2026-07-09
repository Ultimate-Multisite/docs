---
title: اضافي ٽيمپليٽ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# ايڊآن ٽيمپليٽ

{{ADDON_DESCRIPTION}}

## گهرجون

- WordPress 5.3 يا وڌيڪ
- PHP 7.4 يا وڌيڪ
- Multisite Ultimate plugin (فعال)

## انسٽاليشن

1. ايڊآن فائلون پنهنجي `/wp-content/plugins/` ڊائريڪٽري ۾ اپلوڊ ڪريو
2. WordPress ۾ 'Plugins' مينيو ذريعي plugin فعال ڪريو
3. نيٽ ورڪ ايڊمن ۾ ايڊآن سيٽنگون ترتيب ڏيو

## ترقي

### سيٽ اپ

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

### منصوبي جي جوڙجڪ

```
ultimate-multisite-addon-template/
├── inc/                          # PHP ڪلاس ۽ شاملات
│   ├── class-multisite-ultimate-updater.php  # اپڊيٽ سنڀاليندڙ
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # مکيه ڪارڪردگي
├── tests/                        # يونٽ ٽيسٽ
│   ├── bootstrap.php            # ٽيسٽ بوٽ اسٽريپ
│   ├── class-*-base.php         # بنيادي ٽيسٽ ڪلاس
│   └── class-*-test.php         # ٽيسٽ ڪيس
├── views/                       # ٽيمپليٽ فائلون
├── assets/                      # جامد اثاثا
│   ├── css/                     # اسٽائل شيٽون
│   ├── js/                      # JavaScript فائلون
│   └── images/                  # تصويرون
├── lang/                        # ٻولي فائلون
├── composer.json                # PHP انحصار
├── package.json                 # Node.js انحصار
├── phpunit.xml.dist             # PHPUnit ترتيب
├── .phpcs.xml.dist              # ڪوڊ معيارن جي ترتيب
└── rector.php                   # ڪوڊ جديد ڪرڻ جا قاعدا
```

### ٽيسٽنگ

ايڊآن ۾ هڪ جامع ٽيسٽنگ فريم ورڪ شامل آهي:

- **يونٽ ٽيسٽ**: WordPress ٽيسٽ سوٽ سان PHPUnit تي ٻڌل ٽيسٽ
- **بنيادي ٽيسٽ ڪلاس**: عام ٽيسٽ منظرنامن لاءِ مددگار طريقا مهيا ڪري ٿو
- **ٽيسٽ ڪوريج**: ڪوڊ ڪوريج کي ٽريڪ ڪرڻ لاءِ ترتيب ڏنل
- **Multisite ٽيسٽنگ**: ٽيسٽ multisite ماحول ۾ هلن ٿا

### ڪوڊ معيار

- **WordPress ڪوڊنگ معيار**: PHPCS ذريعي لاڳو ڪيل
- **PHP 7.4+ مطابقت**: جديد PHP خاصيتون سپورٽ ٿيل
- **جامد تجزيو**: قسم چيڪ ڪرڻ لاءِ PHPStan انٽيگريشن
- **ڪوڊ جديد ڪرڻ**: PHP اپگريڊن لاءِ Rector قاعدا

### بلڊ سسٽم

- **اثاثن جي پروسيسنگ**: CSS/JS فائلن لاءِ منيفڪيشن
- **ترجمو**: POT فائل جنريشن
- **پيڪيجنگ**: ورڇ لاءِ آرڪائيو ٺاهڻ
- **ترقي موڊ**: ڊي بگنگ لاءِ غير منيفائيڊ اثاثا

## ترتيب

ايڊآن مختلف ترتيب آپشنز کي سپورٽ ڪري ٿو، جيڪي نيٽ ورڪ ايڊمن انٽرفيس ذريعي رسائي لائق آهن.

## Hooks ۽ Filters

### ايڪشنز

- `ultimate-multisite-addon-template_init` - ايڊآن جي شروعات کان پوءِ فائر ٿئي ٿو
- `ultimate-multisite-addon-template_loaded` - سڀ ايڊآن فائلون لوڊ ٿيڻ کان پوءِ فائر ٿئي ٿو

### فلٽرز

- `ultimate-multisite-addon-template_settings` - ايڊآن سيٽنگون تبديل ڪريو
- `ultimate-multisite-addon-template_enabled` - ايڊآن جي فعال/غير فعال حالت کي اوور رائيڊ ڪريو

## لائسنس

هي ايڊآن GPL v3 يا ان کان پوءِ واري لائسنس تحت لائسنس ٿيل آهي.

## سپورٽ

سپورٽ ۽ دستاويزن لاءِ، [MultisiteUltimate.com](https://multisiteultimate.com) تي وڃو
## تبديلي لاگ

- نسخو 1.0.1 (2025-09-28): prefix کي ultimate-multisite ۾ نالو مٽايو؛ text domain اپڊيٽ ڪريو؛ نسخي ۾ واڌ.


- نسخو  (2025-09-28): prefix کي ultimate-multisite ۾ نالو مٽايو؛ text domain اپڊيٽ ڪريو؛ نسخي ۾ واڌ.
