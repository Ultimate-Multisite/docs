---
title: قوشۇمچە دېتال قېلىپى
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# قوشۇمچە قېلىپى

{{ADDON_DESCRIPTION}}

## تەلەپلەر

- WordPress 5.3 ياكى ئۇنىڭدىن يۇقىرى
- PHP 7.4 ياكى ئۇنىڭدىن يۇقىرى
- Multisite Ultimate قىستۇرمىسى (ئاكتىپ)

## ئورنىتىش

1. قوشۇمچە ھۆججەتلەرنى `/wp-content/plugins/` مۇندەرىجىڭىزگە يۈكلەڭ
2. WordPress ئىچىدىكى 'Plugins' تىزىملىكى ئارقىلىق قىستۇرمىنى ئاكتىپلاڭ
3. قوشۇمچە تەڭشەكلىرىنى تور باشقۇرۇش قىسمىدا سەپلەڭ

## تەرەققىيات

### تەڭشەش

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

### تۈر قۇرۇلمىسى

```
ultimate-multisite-addon-template/
├── inc/                          # PHP سىنىپلىرى ۋە ئۆز ئىچىگە ئالغان ھۆججەتلەر
│   ├── class-multisite-ultimate-updater.php  # يېڭىلاش بىر تەرەپ قىلغۇچىسى
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # ئاساسىي ئىقتىدار
├── tests/                        # بىرلىك سىناقلىرى
│   ├── bootstrap.php            # سىناق bootstrap
│   ├── class-*-base.php         # ئاساسىي سىناق سىنىپى
│   └── class-*-test.php         # سىناق دېلولىرى
├── views/                       # قېلىپ ھۆججەتلىرى
├── assets/                      # تۇراقلىق بايلىقلار
│   ├── css/                     # ئۇسلۇب جەدۋەللىرى
│   ├── js/                      # JavaScript ھۆججەتلىرى
│   └── images/                  # رەسىملەر
├── lang/                        # تىل ھۆججەتلىرى
├── composer.json                # PHP بېقىندىلىقلىرى
├── package.json                 # Node.js بېقىندىلىقلىرى
├── phpunit.xml.dist             # PHPUnit سەپلىمىسى
├── .phpcs.xml.dist              # كود ئۆلچەملىرى سەپلىمىسى
└── rector.php                   # كودنى زامانىۋىلاشتۇرۇش قائىدىلىرى
```

### سىناق قىلىش

قوشۇمچە كەڭ دائىرىلىك سىناق رامكىسىنى ئۆز ئىچىگە ئالىدۇ:

- **بىرلىك سىناقلىرى**: WordPress سىناق يۈرۈشلۈكى بىلەن PHPUnit ئاساسىدىكى سىناقلار
- **ئاساسىي سىناق سىنىپى**: ئادەتتىكى سىناق ئەھۋاللىرى ئۈچۈن ياردەمچى ئۇسۇللارنى تەمىنلەيدۇ
- **سىناق قاپلىنىشى**: كود قاپلىنىشىنى ئىز قوغلاشقا سەپلەنگەن
- **Multisite سىناقلىرى**: سىناقلار multisite مۇھىتىدا ئىجرا قىلىنىدۇ

### كود ئۆلچەملىرى

- **WordPress كودلاش ئۆلچەملىرى**: PHPCS ئارقىلىق ئىجرا قىلىنىدۇ
- **PHP 7.4+ ماسلىقى**: زامانىۋى PHP ئىقتىدارلىرى قوللىنىدۇ
- **تۇراقلىق تەھلىل**: تۈر تەكشۈرۈش ئۈچۈن PHPStan بىرلەشتۈرۈلۈشى
- **كودنى زامانىۋىلاشتۇرۇش**: PHP يېڭىلاشلىرى ئۈچۈن Rector قائىدىلىرى

### قۇرۇش سىستېمىسى

- **بايلىق بىر تەرەپ قىلىش**: CSS/JS ھۆججەتلىرىنى كىچىكلىتىش
- **تەرجىمە**: POT ھۆججىتى ھاسىل قىلىش
- **ئوراش**: تارقىتىش ئۈچۈن ئارخىپ قۇرۇش
- **تەرەققىيات ھالىتى**: سازلاش ئۈچۈن كىچىكلىتىلمىگەن بايلىقلار

## سەپلىمە

قوشۇمچە تور باشقۇرۇش كۆرۈنمە يۈزى ئارقىلىق زىيارەت قىلغىلى بولىدىغان ھەر خىل سەپلىمە تاللانمىلىرىنى قوللايدۇ.

## Hooks ۋە Filters

### Actions

- `ultimate-multisite-addon-template_init` - قوشۇمچە باشلانغاندىن كېيىن قوزغىتىلىدۇ
- `ultimate-multisite-addon-template_loaded` - بارلىق قوشۇمچە ھۆججەتلەر يۈكلەنگەندىن كېيىن قوزغىتىلىدۇ

### Filters

- `ultimate-multisite-addon-template_settings` - قوشۇمچە تەڭشەكلىرىنى ئۆزگەرتىش
- `ultimate-multisite-addon-template_enabled` - قوشۇمچىنىڭ قوزغىتىش/چەكلەش ھالىتىنى بېسىپ ئۆزگەرتىش

## ئىجازەتنامە

بۇ قوشۇمچە GPL v3 ياكى ئۇنىڭدىن كېيىنكى نەشرى بويىچە ئىجازەتلەنگەن.

## قوللاش

قوللاش ۋە ھۆججەتلەر ئۈچۈن [MultisiteUltimate.com](https://multisiteultimate.com) نى زىيارەت قىلىڭ
## ئۆزگىرىش خاتىرىسى

- نەشرى 1.0.1 (2025-09-28): prefix نى ultimate-multisite غا ئۆزگەرتىش؛ text domain نى يېڭىلاش؛ نەشرىنى ئۆستۈرۈش.


- نەشرى  (2025-09-28): prefix نى ultimate-multisite غا ئۆزگەرتىش؛ text domain نى يېڭىلاش؛ نەشرىنى ئۆستۈرۈش.
