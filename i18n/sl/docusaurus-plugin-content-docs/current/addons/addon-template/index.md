---
title: Predloga dodatka
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Predloga dodatka {#addon-template}

{{ADDON_DESCRIPTION}}

## Zahteve {#requirements}

- WordPress 5.3 ali novejši
- PHP 7.4 ali novejši
- Vtičnik Multisite Ultimate (aktiven)

## Namestitev {#installation}

1. Naložite datoteke dodatka v svojo mapo `/wp-content/plugins/`
2. Aktivirajte vtičnik prek menija 'Plugins' v WordPress
3. Konfigurirajte nastavitve dodatka v omrežni administraciji

## Razvoj {#development}

### Nastavitev {#setup}

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

### Struktura projekta {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes and includes
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Template files
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Images
├── lang/                        # Language files
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### Testiranje {#testing}

Dodatek vključuje celovit okvir za testiranje:

- **Unit Tests**: Testi na osnovi PHPUnit s testno zbirko WordPress
- **Base Test Class**: Zagotavlja pomožne metode za pogoste testne scenarije
- **Test Coverage**: Konfigurirano za spremljanje pokritosti kode
- **Multisite Testing**: Testi se izvajajo v okolju multisite

### Standardi kode {#code-standards}

- **WordPress Coding Standards**: Uveljavljeni prek PHPCS
- **Združljivost s PHP 7.4+**: Podprte so sodobne funkcije PHP
- **Statična analiza**: Integracija PHPStan za preverjanje tipov
- **Modernizacija kode**: Pravila Rector za nadgradnje PHP

### Sistem gradnje {#build-system}

- **Obdelava sredstev**: Minifikacija datotek CSS/JS
- **Prevajanje**: Ustvarjanje datoteke POT
- **Pakiranje**: Ustvarjanje arhiva za distribucijo
- **Razvojni način**: Neminificirana sredstva za odpravljanje napak

## Konfiguracija {#configuration}

Dodatek podpira različne možnosti konfiguracije, dostopne prek vmesnika omrežne administracije.

## Hooks in filtri {#hooks-and-filters}

### Dejanja {#actions}

- `ultimate-multisite-addon-template_init` - Sproži se po inicializaciji dodatka
- `ultimate-multisite-addon-template_loaded` - Sproži se po nalaganju vseh datotek dodatka

### Filtri {#filters}

- `ultimate-multisite-addon-template_settings` - Spremeni nastavitve dodatka
- `ultimate-multisite-addon-template_enabled` - Prepiše stanje omogočenosti/onemogočenosti dodatka

## Licenca {#license}

Ta dodatek je licenciran pod GPL v3 ali novejšo različico.

## Podpora {#support}

Za podporo in dokumentacijo obiščite [MultisiteUltimate.com](https://multisiteultimate.com)
## Dnevnik sprememb {#changelog}

- Različica 1.0.1 (2025-09-28): preimenuj predpono v ultimate-multisite; posodobi text domain; povišanje različice.


- Različica  (2025-09-28): preimenuj predpono v ultimate-multisite; posodobi text domain; povišanje različice.
