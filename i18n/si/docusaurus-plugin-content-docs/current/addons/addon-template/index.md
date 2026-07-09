---
title: ඇඩෝන අච්චුව
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# ඇඩෝන අච්චුව {#addon-template}

{{ADDON_DESCRIPTION}}

## අවශ්‍යතා {#requirements}

- WordPress 5.3 හෝ ඊට වැඩි
- PHP 7.4 හෝ ඊට වැඩි
- Multisite Ultimate plugin (සක්‍රිය)

## ස්ථාපනය {#installation}

1. ඇඩෝන ගොනු ඔබේ `/wp-content/plugins/` නාමාවලියට උඩුගත කරන්න
2. WordPress තුළ 'Plugins' මෙනුව හරහා plugin සක්‍රිය කරන්න
3. ජාල පරිපාලනය තුළ ඇඩෝන සැකසුම් වින්‍යාස කරන්න

## සංවර්ධනය {#development}

### සැකසුම {#setup}

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

### ව්‍යාපෘති ව්‍යුහය {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP පන්ති සහ ඇතුළත් කිරීම්
│   ├── class-multisite-ultimate-updater.php  # යාවත්කාලීන හසුරුවනය
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ප්‍රධාන ක්‍රියාකාරිත්වය
├── tests/                        # ඒකක පරීක්ෂණ
│   ├── bootstrap.php            # පරීක්ෂණ ආරම්භකය
│   ├── class-*-base.php         # මූලික පරීක්ෂණ පන්තිය
│   └── class-*-test.php         # පරීක්ෂණ සිද්ධි
├── views/                       # අච්චු ගොනු
├── assets/                      # ස්ථිතික සම්පත්
│   ├── css/                     # ශෛලි පත්‍ර
│   ├── js/                      # JavaScript ගොනු
│   └── images/                  # රූප
├── lang/                        # භාෂා ගොනු
├── composer.json                # PHP යැපීම්
├── package.json                 # Node.js යැපීම්
├── phpunit.xml.dist             # PHPUnit වින්‍යාසය
├── .phpcs.xml.dist              # කේත ප්‍රමිතීන් වින්‍යාසය
└── rector.php                   # කේත නවීකරණ නීති
```

### පරීක්ෂා කිරීම {#testing}

ඇඩෝනය සම්පූර්ණ පරීක්ෂණ රාමුවක් ඇතුළත් කරයි:

- **ඒකක පරීක්ෂණ**: WordPress පරීක්ෂණ කට්ටලය සමඟ PHPUnit-පාදක පරීක්ෂණ
- **මූලික පරීක්ෂණ පන්තිය**: සාමාන්‍ය පරීක්ෂණ අවස්ථා සඳහා උපකාරක ක්‍රම සපයයි
- **පරීක්ෂණ ආවරණය**: කේත ආවරණය හඹා යාමට වින්‍යාස කර ඇත
- **Multisite පරීක්ෂණ**: පරීක්ෂණ multisite පරිසරයක ධාවනය වේ

### කේත ප්‍රමිතීන් {#code-standards}

- **WordPress කේත ප්‍රමිතීන්**: PHPCS හරහා බලාත්මක කරයි
- **PHP 7.4+ අනුකූලතාව**: නවීන PHP විශේෂාංග සඳහා සහාය ඇත
- **ස්ථිතික විශ්ලේෂණය**: වර්ග පරීක්ෂා කිරීම සඳහා PHPStan ඒකාබද්ධ කිරීම
- **කේත නවීකරණය**: PHP උත්ශ්‍රේණි කිරීම් සඳහා Rector නීති

### ගොඩනැගීමේ පද්ධතිය {#build-system}

- **සම්පත් සැකසීම**: CSS/JS ගොනු සඳහා කුඩාකරණය
- **පරිවර්තනය**: POT ගොනු ජනනය
- **ඇසුරුම් කිරීම**: බෙදාහැරීම සඳහා සංරක්ෂිත ගොනු සෑදීම
- **සංවර්ධන ප්‍රකාරය**: දෝෂ නිදොස්කරණය සඳහා කුඩා නොකළ සම්පත්

## වින්‍යාසය {#configuration}

ඇඩෝනය ජාල පරිපාලන අතුරුමුහුණත හරහා ප්‍රවේශ විය හැකි විවිධ වින්‍යාස විකල්ප සඳහා සහාය දක්වයි.

## Hooks සහ Filters {#hooks-and-filters}

### ක්‍රියා {#actions}

- `ultimate-multisite-addon-template_init` - ඇඩෝනය ආරම්භ කිරීමෙන් පසු ක්‍රියාත්මක වේ
- `ultimate-multisite-addon-template_loaded` - සියලු ඇඩෝන ගොනු පූරණය වූ පසු ක්‍රියාත්මක වේ

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - ඇඩෝන සැකසුම් වෙනස් කරන්න
- `ultimate-multisite-addon-template_enabled` - ඇඩෝනය සක්‍රිය/අක්‍රිය තත්ත්වය අභිබවා යන්න

## බලපත්‍රය {#license}

මෙම ඇඩෝනය GPL v3 හෝ ඊට පසු අනුවාදයක් යටතේ බලපත්‍රගත කර ඇත.

## සහාය {#support}

සහාය සහ ලේඛන සඳහා, [MultisiteUltimate.com](https://multisiteultimate.com) වෙත පිවිසෙන්න
## වෙනස්කම් සටහන {#changelog}

- අනුවාදය 1.0.1 (2025-09-28): උපසර්ගය ultimate-multisite ලෙස නැවත නම් කිරීම; පෙළ ඩොමේනය යාවත්කාලීන කිරීම; අනුවාදය ඉහළ දැමීම.


- අනුවාදය  (2025-09-28): උපසර්ගය ultimate-multisite ලෙස නැවත නම් කිරීම; පෙළ ඩොමේනය යාවත්කාලීන කිරීම; අනුවාදය ඉහළ දැමීම.
