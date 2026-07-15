---
title: Môdely Fanampiny
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Lasitra Tovan

Môdely Fanampiny — Ultimate Multisite.

## Fepetra takiana {#requirements}

- WordPress 5.3 na ambony
- PHP 7.4 na ambony
- Tovan Multisite Ultimate (mavitrika)

## Fametrahana {#installation}

1. Ampidiro ao amin'ny lahatahiry `/wp-content/plugins/` anao ny rakitry ny tovan
2. Ampandehano amin'ny alalan'ny menio 'Tovan' ao amin'ny WordPress ny tovan
3. Amboary ao amin'ny mpitantana tambajotra ny firafitry ny tovan

## Fampivoarana {#development}

### Fanomanana {#setup}

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

### Rafitry ny Tetikasa {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Kilasy PHP sy rakitra ampidirina
│   ├── class-multisite-ultimate-updater.php  # Mpitantana fanavaozana
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Fiasa fototra
├── tests/                        # Fitsapana singa
│   ├── bootstrap.php            # Fanombohana fitsapana
│   ├── class-*-base.php         # Kilasy fitsapana fototra
│   └── class-*-test.php         # Tranga fitsapana
├── views/                       # Rakitra lasitra
├── assets/                      # Loharano statika
│   ├── css/                     # Stylesheet
│   ├── js/                      # Rakitra JavaScript
│   └── images/                  # Sary
├── lang/                        # Rakitra fiteny
├── composer.json                # Fiankinan-doha PHP
├── package.json                 # Fiankinan-doha Node.js
├── phpunit.xml.dist             # Firafitra PHPUnit
├── .phpcs.xml.dist              # Firafitra fenitra kaody
└── rector.php                   # Fitsipika fanavaozana kaody
```

### Fitsapana {#testing}

Ny tovan dia ahitana rafitra fitsapana feno:

- **Fitsapana Singa**: Fitsapana mifototra amin'ny PHPUnit miaraka amin'ny andiana fitsapana WordPress
- **Kilasy Fitsapana Fototra**: Manome fomba mpanampy ho an'ny toe-javatra fitsapana mahazatra
- **Fandrakofana Fitsapana**: Voarindra hanara-maso ny fandrakofana kaody
- **Fitsapana Multisite**: Mihazakazaka ao amin'ny tontolo multisite ny fitsapana

### Fenitra Kaody {#code-standards}

- **Fenitra Fanoratana Kaody WordPress**: Ampiharina amin'ny alalan'ny PHPCS
- **Fifanarahana amin'ny PHP 7.4+**: Tohanana ny endri-javatra PHP maoderina
- **Famakafakana Statika**: Fampidirana PHPStan ho an'ny fanamarinana karazana
- **Fanavaozana Kaody**: Fitsipika Rector ho an'ny fanavaozana PHP

### Rafitra Fananganana {#build-system}

- **Fanodinana Loharano**: Fampihenana haben'ny rakitra CSS/JS
- **Fandikana**: Famoronana rakitra POT
- **Fanamboarana Fonosana**: Famoronana arisiva ho an'ny fizarana
- **Fomba Fampivoarana**: Loharano tsy nohamaivanina ho an'ny debugging

## Firafitra {#configuration}

Manohana safidy firafitra isan-karazany azo idirana amin'ny alalan'ny sehatr'asa mpitantana tambajotra ny tovan.

## Hook sy Sivana {#hooks-and-filters}

### Action {#actions}

- `ultimate-multisite-addon-template_init` - Alefa aorian'ny fanombohana ny tovan
- `ultimate-multisite-addon-template_loaded` - Alefa rehefa voafeno avokoa ny rakitra tovan rehetra

### Sivana {#filters}

- `ultimate-multisite-addon-template_settings` - Ovao ny firafitry ny tovan
- `ultimate-multisite-addon-template_enabled` - Soloy ny satan'ny fampandehanana/famonoana ny tovan

## Lisansa {#license}

Ity tovan ity dia omena lisansa araka ny GPL v3 na aoriana.

## Fanohanana {#support}

Ho an'ny fanohanana sy tahirin-kevitra, tsidiho ny [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Version 1.0.1 (2025-09-28): ovay ho ultimate-multisite ny prefix; havaozy ny text domain; fampiakarana version.


- Version  (2025-09-28): ovay ho ultimate-multisite ny prefix; havaozy ny text domain; fampiakarana version.
