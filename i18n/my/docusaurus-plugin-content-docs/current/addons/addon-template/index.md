---
title: အပိုထည့်သွင်းပုံစံ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

အပိုထည့်သွင်းပုံစံ — Ultimate Multisite.

## လိုအပ်ချက်များ (Requirements) {#requirements}

- WordPress 5.3 သို့မဟုတ် အထက်
- PHP 7.4 သို့မဟုတ် အထက်
- Multisite Ultimate plugin (အသက်ဝင်ရမည်)

## တပ်ဆင်ခြင်း (Installation) {#installation}

1. addon ဖိုင်များကို သင့်ရဲ့ `/wp-content/plugins/` directory ထဲသို့ တင်ပေးပါ။
2. WordPress ရဲ့ 'Plugins' menu မှတစ်ဆင့် plugin ကို activate လုပ်ပါ။
3. network admin မှာ addon settings တွေကို configure လုပ်ပါ။

## ဖွံ့ဖြိုးတိုးတက်မှု (Development) {#development}

### စတင်ပြင်ဆင်ခြင်း (Setup) {#setup}

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

### ပရောဂျက်ဖွဲ့စည်းပုံ (Project Structure) {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP class များနှင့် includes များ
│   ├── class-multisite-ultimate-updater.php  # Update ကို ကိုင်တွယ်သူ
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # အဓိက လုပ်ဆောင်ချက်
├── tests/                        # Unit test များ
│   ├── bootstrap.php            # Test အတွက် စတင်မှု
│   ├── class-*-base.php         # အခြေခံ test class
│   └── class-*-test.php         # Test အခြေအနေများ
├── views/                       # Template ဖိုင်များ
├── assets/                      # Static assets များ
│   ├── css/                     # Stylesheets များ
│   ├── js/                      # JavaScript ဖိုင်များ
│   └── images/                  # ပုံများ
├── lang/                        # ဘာသာစကား ဖိုင်များ
├── composer.json                # PHP dependencies များ
├── package.json                 # Node.js dependencies များ
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### စမ်းသပ်ခြင်း (Testing) {#testing}

ဤ addon တွင် အပြည့်အဝ စမ်းသပ်မှု စနစ် (testing framework) ပါဝင်သည်-

- **Unit Tests**: WordPress test suite နှင့် အသုံးပြုသည့် PHPUnit အခြေခံ စမ်းသပ်မှုများ
- **Base Test Class**: အဖြစ်များသော test အခြေအနေများအတွက် အထောက်အကူပြု လုပ်ဆောင်ချက်များ ပေးသည်။
- **Test Coverage**: code coverage ကို ခြေရာခံရန် စီစဉ်ထားသည်။
- **Multisite Testing**: multisite ပတ်ဝန်းကျင်တွင် စမ်းသပ်မှုများ ပြုလုပ်သည်။

### Code Standards (ကုဒ် စံနှုန်းများ) {#code-standards}

- **WordPress Coding Standards**: PHPCS မှတစ်ဆင့် အကောင်အထည်ဖော်သည်။
- **PHP 7.4+ Compatibility**: ခေတ်မီ PHP အင်္ဂါရပ်များကို ပံ့ပိုးထားသည်။
- **Static Analysis**: type checking အတွက် PHPStan ကို ပေါင်းစပ်ထားသည်။
- **Code Modernization**: PHP upgrade အတွက် Rector rules များ။

### Build System (တည်ဆောက်မှုစနစ်) {#build-system}

- **Asset Processing**: CSS/JS ဖိုင်များအတွက် Minification လုပ်ခြင်း။
- **Translation**: POT file ထုတ်ပေးခြင်း။
- **Packaging**: ဖြန့်ဝေရန် archive ဖိုင် ဖန်တီးခြင်း။
- **Development Mode**: debug လုပ်ရန်အတွက် Minify မလုပ်ထားသော assets များ။

## Configuration (ဖွဲ့စည်းပုံ) {#configuration}

ဤ addon သည် network admin interface မှတစ်ဆင့် ဝင်ရောက်နိုင်သော ဖွဲ့စည်းပုံ ရွေးချယ်မှု အမျိုးမျိုးကို ပံ့ပိုးပေးသည်။

## Hooks and Filters (အကောင်အထည်ဖော်မှုများနှင့် စစ်ထုတ်မှုများ) {#hooks-and-filters}

### Actions (လုပ်ဆောင်ချက်များ) {#actions}

- `ultimate-multisite-addon-template_init` - addon ကို စတင်အသုံးပြုပြီးနောက် အလုပ်လုပ်သည်။
- `ultimate-multisite-addon-template_loaded` - addon ဖိုင်အားလုံး load လုပ်ပြီးနောက် အလုပ်လုပ်သည်။

### Filters (စစ်ထုတ်မှုများ) {#filters}

- `ultimate-multisite-addon-template_settings` - addon settings များကို ပြုပြင်နိုင်သည်။
- `ultimate-multisite-addon-template_enabled` - addon ဖွင့်/ပိတ် အခြေအနေကို အစားထိုးနိုင်သည်။

## License (လိုင်စင်) {#license}

ဤ addon ကို GPL v3 သို့မဟုတ် နောက်ပိုင်းဗားရှင်းအောက်တွင် လိုင်စင်ပေးထားသည်။

## Support (အကူအညီ) {#support}

အကူအညီနှင့် စာရွက်စာတမ်းများအတွက် [MultisiteUltimate.com](https://multisiteultimate.com) သို့ ဝင်ရောက်ကြည့်ရှုပါ။
## Changelog (ပြောင်းလဲမှုမှတ်တမ်း) {#changelog}

- Version 1.0.1 (2025-09-28): prefix ကို ultimate-multisite အဖြစ် ပြောင်းလဲခြင်း၊ text domain ကို update လုပ်ခြင်း၊ version တိုးမြှင့်ခြင်း။


- Version (2025-09-28): prefix ကို ultimate-multisite အဖြစ် ပြောင်းလဲခြင်း၊ text domain ကို update လုပ်ခြင်း၊ version တိုးမြှင့်ခြင်း။
