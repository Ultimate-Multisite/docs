---
title: Qauv khoom ntxiv
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Tus Qauv Addon

Qauv khoom ntxiv — Ultimate Multisite.

## Yam Yuav Tsum Muaj {#requirements}

- WordPress 5.3 lossis siab dua
- PHP 7.4 lossis siab dua
- Multisite Ultimate plugin (qhib siv)

## Kev Nruab {#installation}

1. Upload cov ntaub ntawv addon mus rau koj phau ntawv `/wp-content/plugins/`
2. Qhib siv plugin ntawm 'Plugins' menu hauv WordPress
3. Teeb cov kev xaiv addon hauv network admin

## Kev Tsim Kho {#development}

### Kev Teeb {#setup}

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

### Cov Qauv Txheej Txheem Project {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes thiab cov ntaub ntawv suav nrog
│   ├── class-multisite-ultimate-updater.php  # Tus saib xyuas update
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Kev ua haujlwm tseem ceeb
├── tests/                        # Cov unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Cov test cases
├── views/                       # Cov ntaub ntawv template
├── assets/                      # Cov cuab tam static
│   ├── css/                     # Stylesheets
│   ├── js/                      # Cov ntaub ntawv JavaScript
│   └── images/                  # Duab
├── lang/                        # Cov ntaub ntawv lus
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Cov cai rau code modernization
```

### Kev Kuaj {#testing}

Addon no muaj ib lub framework kuaj uas dav heev:

- **Unit Tests**: Cov kev kuaj raws PHPUnit nrog WordPress test suite
- **Base Test Class**: Muab cov helper methods rau cov xwm txheej kuaj uas nquag siv
- **Test Coverage**: Teeb kom taug qab code coverage
- **Multisite Testing**: Cov kev kuaj khiav hauv multisite environment

### Cov Qauv Code {#code-standards}

- **WordPress Coding Standards**: Yuam siv los ntawm PHPCS
- **PHP 7.4+ Compatibility**: Txhawb cov yam ntxwv PHP tshiab
- **Static Analysis**: PHPStan integration rau kev kuaj hom
- **Code Modernization**: Rector rules rau kev hloov tshiab PHP

### Build System {#build-system}

- **Asset Processing**: Minification rau cov ntaub ntawv CSS/JS
- **Translation**: Tsim POT file
- **Packaging**: Tsim archive rau kev faib tawm
- **Development Mode**: Cov assets uas tsis tau minified rau debugging

## Configuration {#configuration}

Addon no txhawb ntau yam kev xaiv configuration uas nkag tau los ntawm network admin interface.

## Hooks thiab Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Raug hu tom qab addon initialization
- `ultimate-multisite-addon-template_loaded` - Raug hu tom qab tag nrho cov ntaub ntawv addon raug loaded

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Hloov cov kev teeb addon
- `ultimate-multisite-addon-template_enabled` - Override addon enable/disable status

## Daim Ntawv Tso Cai {#license}

Addon no tau tso cai raws li GPL v3 lossis tom qab ntawd.

## Kev Txhawb Nqa {#support}

Rau kev txhawb nqa thiab ntaub ntawv qhia, mus saib [MultisiteUltimate.com](https://multisiteultimate.com)
## Keeb Kwm Hloov {#changelog}

- Version 1.0.1 (2025-09-28): hloov npe prefix mus rau ultimate-multisite; hloov tshiab text domain; nce version.


- Version  (2025-09-28): hloov npe prefix mus rau ultimate-multisite; hloov tshiab text domain; nce version.
