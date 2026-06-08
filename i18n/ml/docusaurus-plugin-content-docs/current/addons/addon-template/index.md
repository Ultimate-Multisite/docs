---
title: ആഡ്‌ഓൺ ടെംപ്ലേറ്റ്
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## ആവശ്യകതകൾ (Requirements)

- WordPress 5.3 അല്ലെങ്കിൽ അതിലും ഉയർന്നത്
- PHP 7.4 അല്ലെങ്കിൽ അതിലും ഉയർന്നത്
- Multisite Ultimate plugin (സജീവമായിരിക്കണം)

## ഇൻസ്റ്റാളേഷൻ (Installation)

1. ആഡ്‌ഓൺ ഫയലുകൾ നിങ്ങളുടെ `/wp-content/plugins/` ഡയറക്‌ടറിയിലേക്ക് അപ്‌ലോഡ് ചെയ്യുക.
2. WordPress-ലെ 'Plugins' മെനുവിലൂടെ പ്ലഗിൻ സജീവമാക്കുക (Activate ചെയ്യുക).
3. നെറ്റ്‌വർക്ക് അഡ്മിൻ വഴി ആഡ്‌ഓൺ സെറ്റിംഗ്‌സ് കോൺഫിഗർ ചെയ്യുക.

## ഡെവലപ്‌മെന്റ് (Development)

### സജ്ജീകരണം (Setup)

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

### പ്രോജക്റ്റ് ഘടന (Project Structure)

```
ultimate-multisite-addon-template/
├── inc/                          # PHP ക്ലാസുകളും ഉൾപ്പെടുത്തലുകളും (includes)
│   ├── class-multisite-ultimate-updater.php  # അപ്‌ഡേറ്റ് ഹാൻഡ്ലർ
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # പ്രധാന പ്രവർത്തനം (Main functionality)
├── tests/                        # യൂണിറ്റ് ടെസ്റ്റുകൾ (Unit tests)
│   ├── bootstrap.php            # ടെസ്റ്റ് ബൂട്ട്‌സ്‌ട്രോപ്പ്
│   ├── class-*-base.php         # അടിസ്ഥാന ടെസ്റ്റ് ക്ലാസ്
│   └── class-*-test.php         # ടെസ്റ്റ് കേസുകൾ
├── views/                       # ടെംപ്ലേറ്റ് ഫയലുകൾ
├── assets/                      # സ്റ്റാറ്റിക് ആസ്തികൾ (Static assets)
│   ├── css/                     # സ്റ്റൈൽഷീറ്റുകൾ
│   ├── js/                      # JavaScript ഫയലുകൾ
│   └── images/                  # ചിത്രങ്ങൾ
├── lang/                        # ഭാഷാ ഫയലുകൾ
├── composer.json                # PHP ഡിപൻഡൻസികൾ
├── package.json                 # Node.js ഡിപൻഡൻസികൾ
├── phpunit.xml.dist             # PHPUnit കോൺഫിഗറേഷൻ
├── .phpcs.xml.dist              # കോഡ് സ്റ്റാൻഡേർഡ്സ് കോൺഫിഗറേഷൻ
└── rector.php                   # കോഡ് ആധുനീകരണം (Code modernization) നിയമങ്ങൾ
```

### ടെസ്റ്റിംഗ് (Testing)

ഈ ആഡ്‌ഓണിൽ ഒരു സമഗ്രമായ ടെസ്റ്റിംഗ് ഫ്രെയിംവർക്ക് ഉൾപ്പെടുന്നു:

- **യൂണിറ്റ് ടെസ്റ്റുകൾ (Unit Tests)**: WordPress ടെസ്റ്റ് സ്യൂട്ട్‌യോടുകൂടിയ PHPUnit അടിസ്ഥാനമാക്കിയുള്ള ടെസ്റ്റുകൾ.
- **ബേസ് ടെസ്റ്റ് ക്ലാസ് (Base Test Class)**: പൊതുവായ ടെസ്റ്റ് സാഹചര്യങ്ങൾക്കായി സഹായ രീതികൾ (helper methods) നൽകുന്നു.
- **ടെസ്റ്റ് കവറേജ് (Test Coverage)**: കോഡ് കവറേജ് ട്രാക്ക് ചെയ്യാൻ കോൺഫിഗർ ചെയ്തിരിക്കുന്നു.
- **മൾട്ടിസൈറ്റ് ടെസ്റ്റിംഗ് (Multisite Testing)**: മൾട്ടിസൈറ്റ് എൻവയോൺമെന്റിൽ ടെസ്റ്റുകൾ പ്രവർത്തിപ്പിക്കുന്നു.

### കോഡ് സ്റ്റാൻഡേർഡുകൾ (Code Standards)

- **WordPress കോഡിംഗ് സ്റ്റാൻഡേർഡുകൾ**: PHPCS വഴി നിർബന്ധമാക്കുന്നു.
- **PHP 7.4+ അനുയോജ്യത**: ആധുനിക PHP ഫീച്ചറുകൾ പിന്തുണയ്ക്കുന്നു.
- **സ്റ്റാറ്റിക് അനാലിസിസ് (Static Analysis)**: ടൈപ്പ് ചെക്കിംഗിനായി PHPStan സംയോജിപ്പിക്കുന്നു.
- **കോഡ് ആധുനീകരണം (Code Modernization)**: PHP അപ്‌ഗ്രേഡുകൾക്കായി Rector നിയമങ്ങൾ ഉപയോഗിക്കുന്നു.

### ബിൽഡ് സിസ്റ്റം (Build System)

- **ആസ്തി പ്രോസസ്സിംഗ് (Asset Processing)**: CSS/JS ഫയലുകൾക്ക് മിനിഫൈ ചെയ്യൽ (Minification).
- **വിവർത്തനം (Translation)**: POT ഫയൽ ജനറേഷൻ.
- **പാക്കേജിംഗ് (Packaging)**: വിതരണത്തിനായി ആർക്കൈവ് സൃഷ്ടിക്കൽ.
- **ഡെവലപ്‌മെന്റ് മോഡ് (Development Mode)**: ഡീബഗ്ഗിംഗിനായി മിനിഫൈ ചെയ്യാത്ത ആസ്തികൾ.

## കോൺഫിഗറേഷൻ (Configuration)

നെറ്റ്‌വർക്ക് അഡ്മിൻ ഇന്റർഫേസ് വഴി ലഭ്യമായ വിവിധ കോൺഫിഗറേഷൻ ഓപ്ഷനുകൾ ഈ ആഡ്‌ഓൺ പിന്തുണയ്ക്കുന്നു.

## Hooks and Filters

### Actions (പ്രവർത്തനങ്ങൾ)

- `ultimate-multisite-addon-template_init` - ആഡ്‌ഓൺ ഇനിഷ്യലൈസേഷൻ കഴിഞ്ഞ ശേഷം പ്രവർത്തിക്കുന്നു.
- `ultimate-multisite-addon-template_loaded` - എല്ലാ ആഡ്‌ഓൺ ഫയലുകളും ലോഡ് ചെയ്ത ശേഷം പ്രവർത്തിക്കുന്നു.

### Filters (ഫിൽട്ടറുകൾ)

- `ultimate-multisite-addon-template_settings` - ആഡ്‌ഓൺ സെറ്റിംഗ്‌സ് മാറ്റാൻ ഉപയോഗിക്കുന്നു.
- `ultimate-multisite-addon-template_enabled` - ആഡ്‌ഓൺ പ്രവർത്തനക്ഷമമാക്കാനുള്ള/നിർത്താനുള്ള സ്റ്റാറ്റസ് മാറ്റാൻ ഉപയോഗിക്കുന്നു.

## ലൈസൻസ് (License)

ഈ ആഡ്‌ഓൺ GPL v3 അല്ലെങ്കിൽ അതിലും പുതിയ ലൈസൻസിന് കീഴിലാണ് നൽകുന്നത്.

## സപ്പോർട്ട് (Support)

സപ്പോർട്ട്, ഡോക്യുമെന്റേഷൻ എന്നിവയ്ക്കായി [MultisiteUltimate.com](https://multisiteultimate.com) സന്ദർശിക്കുക.
## Changelog

- Version 1.0.1 (2025-09-28): പ്രിഫിക്സ് ultimate-multisite എന്ന് മാറ്റുക; ടെക്സ്റ്റ് ഡൊമെയ്ൻ അപ്‌ഡേറ്റ് ചെയ്യുക; വേർഷൻ ബമ്പ്.


- Version (2025-09-28): പ്രിഫിക്സ് ultimate-multisite എന്ന് മാറ്റുക; ടെക്സ്റ്റ് ഡൊമെയ്ൻ അപ്‌ഡേറ്റ് ചെയ്യുക; വേർഷൻ ബമ്പ്.
