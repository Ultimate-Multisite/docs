---
title: צוגאב־מוסטער
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# אַדאָן מוסטער

צוגאב־מוסטער — Ultimate Multisite.

## פֿאָדערונגען {#requirements}

- WordPress 5.3 אָדער העכער
- PHP 7.4 אָדער העכער
- Multisite Ultimate פּלוגין (אַקטיוו)

## אינסטאַלאַציע {#installation}

1. לאָדט אַרויף די אַדאָן־טעקעס אין אײַער `/wp-content/plugins/` וועגווײַזער
2. אַקטיווירט דעם פּלוגין דורך דעם 'Plugins' מעניו אין WordPress
3. קאָנפֿיגורירט די אַדאָן־אײַנשטעלונגען אין דעם נעץ־אַדמין

## אַנטוויקלונג {#development}

### אויפֿשטעל {#setup}

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

### פּראָיעקט־סטרוקטור {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP קלאַסן און אַרײַננעמונגען
│   ├── class-multisite-ultimate-updater.php  # דערהײַנטיקונג־באַהאַנדלער
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # הויפּט־פֿונקציאָנאַליטעט
├── tests/                        # איינס־טעסטן
│   ├── bootstrap.php            # טעסט־אָנלאָד
│   ├── class-*-base.php         # באַזע־טעסט־קלאַס
│   └── class-*-test.php         # טעסט־פֿאַלן
├── views/                       # מוסטער־טעקעס
├── assets/                      # סטאַטישע אַסעטן
│   ├── css/                     # סטיל־בלעטער
│   ├── js/                      # JavaScript טעקעס
│   └── images/                  # בילדער
├── lang/                        # שפּראַך־טעקעס
├── composer.json                # PHP אָפּהענגיקייטן
├── package.json                 # Node.js אָפּהענגיקייטן
├── phpunit.xml.dist             # PHPUnit קאָנפֿיגוראַציע
├── .phpcs.xml.dist              # קאָד־סטאַנדאַרטן קאָנפֿיגוראַציע
└── rector.php                   # קאָד־מאָדערניזאַציע כּללים
```

### טעסטינג {#testing}

דער אַדאָן נעמט אַרײַן אַ ברייטפֿאַסנדיקן טעסטינג־ראַם:

- **איינס־טעסטן**: PHPUnit־באַזירטע טעסטן מיט WordPress טעסט־סוויט
- **באַזע־טעסט־קלאַס**: גיט הילף־מעטאָדן פֿאַר געוויינטלעכע טעסט־סצענאַרן
- **טעסט־דעקונג**: קאָנפֿיגורירט צו נאָכפֿאָלגן קאָד־דעקונג
- **Multisite טעסטינג**: טעסטן לויפֿן אין אַ multisite סבֿיבֿה

### קאָד־סטאַנדאַרטן {#code-standards}

- **WordPress קאָדיר־סטאַנדאַרטן**: דורכגעפֿירט דורך PHPCS
- **PHP 7.4+ קאַמפּאַטיביליטעט**: מאָדערנע PHP פֿעיִקייטן ווערן געשטיצט
- **סטאַטישע אַנאַליז**: PHPStan אינטעגראַציע פֿאַר טיפּ־קאָנטראָל
- **קאָד־מאָדערניזאַציע**: Rector כּללים פֿאַר PHP דערהײַנטיקונגען

### בוי־סיסטעם {#build-system}

- **אַסעט־באַאַרבעטונג**: מיניפֿיקאַציע פֿאַר CSS/JS טעקעס
- **איבערזעצונג**: POT טעקע־גענעראַציע
- **פּאַקירונג**: אַרכיוו־שאַפֿונג פֿאַר פֿאַרשפּרייטונג
- **אַנטוויקלונג־מאָדוס**: ניט־מיניפֿיצירטע אַסעטן פֿאַר דעבאַגירן

## קאָנפֿיגוראַציע {#configuration}

דער אַדאָן שטיצט פֿאַרשיידענע קאָנפֿיגוראַציע־אָפּציעס, צוטריטלעך דורך דעם נעץ־אַדמין צובינד.

## הוקס און פֿילטערס {#hooks-and-filters}

### אַקציעס {#actions}

- `ultimate-multisite-addon-template_init` - אויסגעפֿירט נאָך אַדאָן־איניציאַליזאַציע
- `ultimate-multisite-addon-template_loaded` - אויסגעפֿירט נאָך דעם וואָס אַלע אַדאָן־טעקעס זענען געלאָדן

### פֿילטערס {#filters}

- `ultimate-multisite-addon-template_settings` - ענדערט אַדאָן־אײַנשטעלונגען
- `ultimate-multisite-addon-template_enabled` - איבערשרײַבט אַדאָן־אײַנ/אויס־סטאַטוס

## ליצענץ {#license}

דער אַדאָן איז ליצענצירט אונטער GPL v3 אָדער שפּעטער.

## שטיצע {#support}

פֿאַר שטיצע און דאָקומענטאַציע, באַזוכט [MultisiteUltimate.com](https://multisiteultimate.com)
## ענדערונג־לאָג {#changelog}

- ווערסיע 1.0.1 (2025-09-28): איבערנעמען דעם פּרעפֿיקס צו ultimate-multisite; דערהײַנטיקן דעם טעקסט־דאָמיין; ווערסיע־העכערונג.


- ווערסיע  (2025-09-28): איבערנעמען דעם פּרעפֿיקס צו ultimate-multisite; דערהײַנטיקן דעם טעקסט־דאָמיין; ווערסיע־העכערונג.
