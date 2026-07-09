---
title: د اضافې کينډۍ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# د اضافې کينډۍ {#addon-template}

{{ADDON_DESCRIPTION}}

## اړتیاوې {#requirements}

- WordPress 5.3 یا لوړ
- PHP 7.4 یا لوړ
- Multisite Ultimate plugin (فعال)

## نصب {#installation}

1. د اضافې فایلونه خپل `/wp-content/plugins/` ډایرکټرۍ ته پورته کړئ
2. plugin په WordPress کې د 'Plugins' مېنو له لارې فعال کړئ
3. د شبکې د اډمين په برخه کې د اضافې امستنې عیارې کړئ

## پراختیا {#development}

### چمتووالی {#setup}

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

### د پروژې جوړښت {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP ټولګي او شاملونې
│   ├── class-multisite-ultimate-updater.php  # د تازه‌کولو سمبالوونکی
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # اصلي فعالیت
├── tests/                        # واحد ازموینې
│   ├── bootstrap.php            # د ازموینې bootstrap
│   ├── class-*-base.php         # د بنسټیزې ازموینې ټولګی
│   └── class-*-test.php         # د ازموینې قضیې
├── views/                       # د کينډۍ فایلونه
├── assets/                      # ثابتې شتمنۍ
│   ├── css/                     # د سټایل پاڼې
│   ├── js/                      # JavaScript فایلونه
│   └── images/                  # انځورونه
├── lang/                        # د ژبې فایلونه
├── composer.json                # PHP تړاوونه
├── package.json                 # Node.js تړاوونه
├── phpunit.xml.dist             # د PHPUnit سازونه
├── .phpcs.xml.dist              # د کوډ معیارونو سازونه
└── rector.php                   # د کوډ عصري کولو قواعد
```

### ازموینه {#testing}

اضافه د ازموینې یو هر اړخیز چوکاټ لري:

- **واحد ازموینې**: د WordPress ازموینې ټولګې سره د PHPUnit پر بنسټ ازموینې
- **د بنسټیزې ازموینې ټولګی**: د عامو ازموینې سناریوګانو لپاره مرستندوی مېتودونه برابروي
- **د ازموینې پوښښ**: د کوډ پوښښ د څارلو لپاره عیار شوی
- **Multisite ازموینه**: ازموینې په multisite چاپېریال کې چلېږي

### د کوډ معیارونه {#code-standards}

- **د WordPress د کوډ لیکلو معیارونه**: د PHPCS له لارې پلي کېږي
- **د PHP 7.4+ سازګاري**: د PHP عصري ځانګړنې ملاتړ کېږي
- **ثابته شننه**: د ډول کتنې لپاره د PHPStan ادغام
- **د کوډ عصري کول**: د PHP لوړونو لپاره د Rector قواعد

### د جوړولو سیستم {#build-system}

- **د شتمنیو پروسس**: د CSS/JS فایلونو کمول
- **ژباړه**: د POT فایل جوړول
- **بسته‌بندي**: د وېش لپاره د ارشیف جوړول
- **د پراختیا حالت**: د ستونزو موندلو لپاره نه‌کمې شوې شتمنۍ

## سازونه {#configuration}

دا اضافه بېلابېل سازندوی غوراوي ملاتړ کوي چې د شبکې د اډمين مخ‌لید له لارې لاسرسی ورته کېږي.

## Hooks او Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - د اضافې له پيلېدو وروسته فعالېږي
- `ultimate-multisite-addon-template_loaded` - وروسته له دې فعالېږي چې د اضافې ټول فایلونه پورته شي

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - د اضافې امستنې بدل کړئ
- `ultimate-multisite-addon-template_enabled` - د اضافې د فعال/غیرفعال حالت ځایناستی کړئ

## جواز {#license}

دا اضافه د GPL v3 یا وروسته نسخې لاندې جواز لري.

## ملاتړ {#support}

د ملاتړ او مستنداتو لپاره، [MultisiteUltimate.com](https://multisiteultimate.com) ته ورشئ
## د بدلونونو یادښت {#changelog}

- نسخه 1.0.1 (2025-09-28): prefix ultimate-multisite ته بدلول؛ text domain تازه کول؛ د نسخې لوړول.


- نسخه  (2025-09-28): prefix ultimate-multisite ته بدلول؛ text domain تازه کول؛ د نسخې لوړول.
