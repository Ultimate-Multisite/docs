---
title: Addon Template
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# የአድ-ኦን አብነት {#addon-template}

{{ADDON_DESCRIPTION}}

## የሚያስፈልጉ ነገሮች {#requirements}

- WordPress 5.3 ወይም ከዚያ በላይ
- PHP 7.4 ወይም ከዚያ በላይ
- Multisite Ultimate plugin (በሥራ ላይ መሆን አለበት)

## መጫን {#installation}

1. የአድ-ኦን ፋይሎችን ወደ `/wp-content/plugins/` ዳይሬክቶሪዎ ይጫኑ።
2. በWordPress ውስጥ ባለው 'Plugins' ሜኑ አማካይነት 플uginን ያንቁ።
3. የአድ-ኦን ቅንብሮችን በኔትወርክ አስተዳዳሪ (network admin) ውስጥ ያዋቅሩ።

## ልማት {#development}

### ዝግጅት {#setup}

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

### የፕሮጀክት አወቃቀር {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # የPHP ክፍሎች እና ማካተት (includes)
│   ├── class-multisite-ultimate-updater.php  # የআপডেট አያያዥ (Update handler)
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ዋና ተግባር (Main functionality)
├── tests/                        # የዩኒት ሙከራዎች (Unit tests)
│   ├── bootstrap.php            # የሙከራ ማስጀመሪያ (Test bootstrap)
│   ├── class-*-base.php         # መሰረታዊ የሙከራ ክፍል (Base test class)
│   └── class-*-test.php         # የሙከራ ሁኔታዎች (Test cases)
├── views/                       # የቅብብት ፋይሎች (Template files)
├── assets/                      # ስታቲክ አሰልቺዎች (Static assets)
│   ├── css/                     # የቅጥ መጽሐፍት (Stylesheets)
│   ├── js/                      # የJavaScript ፋይሎች
│   └── images/                  # ምስሎች (Images)
├── lang/                        # የቋንቋ ፋይሎች (Language files)
├── composer.json                # የPHP ጥገኝነቶች (PHP dependencies)
├── package.json                 # የNode.js ጥገኝነቶች (Node.js dependencies)
├── phpunit.xml.dist             # የPHPUnit ቅንብር (PHPUnit configuration)
├── .phpcs.xml.dist              # የኮድ ደረጃዎች ቅንብር (Code standards configuration)
└── rector.php                   # የኮድ ዘመናዊነት ህጎች (Code modernization rules)
```

### ሙከራ (Testing) {#testing}

ይህ የአድ-ኦን አብነት ሁሉን አቀፍ የሙከራ ማዕቀፍን ያካትታል፡

- **የዩኒት ሙከራዎች (Unit Tests)**: በWordPress test suite ላይ የተመሰረቱ የPHPUnit ሙከራዎች።
- **መሰረታዊ የሙከራ ክፍል (Base Test Class)**: ለተለመዱ የሙከራ ሁኔታዎች የሚረዱ ረዳት ዘዴዎችን (helper methods) ይሰጣል።
- **የሙከራ ሽፋን (Test Coverage)**: የኮድ ሽፋን ለመከታተል ተዋቅሯል።
- **የማልቲሳይት ሙከራ (Multisite Testing)**: ሙከራዎች በமல்ቲሳይት አካባቢ ይሰራሉ።

### የኮድ ደረጃዎች (Code Standards) {#code-standards}

- **የWordPress የኮድ ደረጃዎች**: በPHPCS አማካይነት ይተገበራል።
- **PHP 7.4+ ተኳሃኝነት**: ዘመናዊ የPHP ባህሪያት ይደገፋሉ።
- **ስታቲክ ትንተና (Static Analysis)**: ለዓይነት ፍተሻ (type checking) የPHPStan ተቀላቅል ነው።
- **የኮድ ዘመናዊነት (Code Modernization)**: ለPHP ማሻሻያ የRector ህጎች።

### የማስገቢያ ሥርዓት (Build System) {#build-system}

- **የአሰልቺ ሂደት (Asset Processing)**: ለCSS/JS ፋይሎች ሚኒፋይ ማድረግ (Minification)።
- **ትርጉም (Translation)**: POT ፋይል መፍጠር።
- **ማሸግ (Packaging)**: ለማሰራጨት አርካይቭ መፍጠር።
- **የልማት ሁነታ (Development Mode)**: ለዲባጅንግ ያልተቀየሩ (unminified) አሰልቺዎች።

## ቅንብር (Configuration) {#configuration}

ይህ የአድ-ኦን አብነት በኔትወርክ አስተዳዳሪ በኩል ሊገኙ የሚችሉ የተለያዩ የቅንብር አማራጮችን ይደግፋል።

## ሁኮች እና ፊልተሮች (Hooks and Filters) {#hooks-and-filters}

### Actions (ተግባራት) {#actions}

- `ultimate-multisite-addon-template_init` - የአድ-ኦን አብነት መጀመር ከተጠናቀቀ በኋላ ይሰራል።
- `ultimate-multisite-addon-template_loaded` - ሁሉም የአድ-ኦን ፋይሎች ከተጫኑ በኋላ ይሰራል።

### Filters (ማጣሪያዎች) {#filters}

- `ultimate-multisite-addon-template_settings` - የአድ-ኦን ቅንብሮችን ለመቀየር።
- `ultimate-multisite-addon-template_enabled` - የአድ-ኦንን ማንቃት/ማጥፋት ሁኔታ ለመተካት።

## ፈቃድ (License) {#license}

ይህ የአድ-ኦን አብነት በGPL v3 ወይም ከዚያ በኋላ ፈቃድ ተሰጥቶታል።

## ድጋፍ (Support) {#support}

ለድጋፍ እና ሰነድ ለማግኘት [MultisiteUltimate.com](https://multisiteultimate.com) ይጎብኙ።
## የለውጥ መዝገብ (Changelog) {#changelog}

- Version 1.0.1 (2025-09-28): ቅድመ-ጽሑፍን (prefix) ወደ ultimate-multisite ተቀይሯል፤ የጽሑፍ ስፋት (text domain) ተዘምኗል፤ የversion ቁጥር ተጨመረ።


- Version (2025-09-28): ቅድመ-ጽሑፍን (prefix) ወደ ultimate-multisite ተቀይሯል፤ የጽሑፍ ስፋት (text domain) ተዘምኗል፤ የversion ቁጥር ተጨመረ።
