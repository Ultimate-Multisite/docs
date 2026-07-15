---
title: اضافي ٽيمپليٽ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# ايڊآن ٽيمپليٽ

اضافي ٽيمپليٽ — Ultimate Multisite.

## گهرجون {#requirements}

- WordPress 5.3 يا وڌيڪ
- PHP 7.4 يا وڌيڪ
- Multisite Ultimate plugin (فعال)

## انسٽاليشن {#installation}

1. ايڊآن فائلون پنهنجي `/wp-content/plugins/` ڊائريڪٽري ۾ اپلوڊ ڪريو
2. WordPress ۾ 'Plugins' مينيو ذريعي plugin فعال ڪريو
3. نيٽورڪ ايڊمن ۾ ايڊآن سيٽنگون ترتيب ڏيو

## ڊولپمينٽ {#development}

### سيٽ اپ {#setup}

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

### پروجيڪٽ جو ڍانچو {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP ڪلاسون ۽ انڪلوڊز
│   ├── class-multisite-ultimate-updater.php  # اپڊيٽ هينڊلر
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # مکيه ڪارڪردگي
├── tests/                        # يونٽ ٽيسٽون
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
└── rector.php                   # ڪوڊ جديدڪاري جا قاعدا
```

### ٽيسٽنگ {#testing}

ايڊآن ۾ هڪ جامع ٽيسٽنگ فريم ورڪ شامل آهي:

- **يونٽ ٽيسٽون**: PHPUnit تي ٻڌل ٽيسٽون WordPress ٽيسٽ سوٽ سان
- **بنيادي ٽيسٽ ڪلاس**: عام ٽيسٽ منظرنامن لاءِ مددگار طريقا مهيا ڪري ٿو
- **ٽيسٽ ڪوريج**: ڪوڊ ڪوريج ٽريڪ ڪرڻ لاءِ ترتيب ڏنل
- **Multisite ٽيسٽنگ**: ٽيسٽون multisite ماحول ۾ هلن ٿيون

### ڪوڊ معيار {#code-standards}

- **WordPress ڪوڊنگ معيار**: PHPCS ذريعي لاڳو ڪيل
- **PHP 7.4+ مطابقت**: جديد PHP خاصيتن جي حمايت
- **جامد تجزيو**: قسم چيڪنگ لاءِ PHPStan انٽيگريشن
- **ڪوڊ جديدڪاري**: PHP اپگريڊز لاءِ Rector قاعدا

### بلڊ سسٽم {#build-system}

- **اثاثن جي پروسيسنگ**: CSS/JS فائلن لاءِ منيفڪيشن
- **ترجمو**: POT فائل جنريشن
- **پيڪيجنگ**: ورڇ لاءِ آرڪائيو ٺاهڻ
- **ڊولپمينٽ موڊ**: ڊيبگنگ لاءِ غير منيفائيڊ اثاثا

## ترتيب {#configuration}

ايڊآن مختلف ترتيب اختيارن جي حمايت ڪري ٿو جيڪي نيٽورڪ ايڊمن انٽرفيس ذريعي رسائي لائق آهن.

## Hooks ۽ Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - ايڊآن جي شروعات کان پوءِ فائر ڪيو ويو
- `ultimate-multisite-addon-template_loaded` - سڀ ايڊآن فائلون لوڊ ٿيڻ کان پوءِ فائر ڪيو ويو

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - ايڊآن سيٽنگون تبديل ڪريو
- `ultimate-multisite-addon-template_enabled` - ايڊآن فعال/غير فعال حالت کي اوور رائيڊ ڪريو

## لائسنس {#license}

هي ايڊآن GPL v3 يا ان کان پوءِ واري تحت لائسنس يافته آهي.

## سپورٽ {#support}

سپورٽ ۽ دستاويزن لاءِ، [MultisiteUltimate.com](https://multisiteultimate.com) تي وڃو
## تبديلي لاگ {#changelog}

- ورزن 1.0.1 (2025-09-28): پريفڪس کي ultimate-multisite ۾ نالو تبديل ڪريو؛ ٽيڪسٽ ڊومين اپڊيٽ ڪريو؛ ورزن بمپ.


- ورزن  (2025-09-28): پريفڪس کي ultimate-multisite ۾ نالو تبديل ڪريو؛ ٽيڪسٽ ڊومين اپڊيٽ ڪريو؛ ورزن بمپ.
