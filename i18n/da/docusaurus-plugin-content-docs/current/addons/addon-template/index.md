---
title: Add-on Skabelon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Krav

- WordPress 5.3 eller højere
- PHP 7.4 eller højere
- Multisite Ultimate plugin (aktiv)

## Installation

1. Upload addon-filerne til din `/wp-content/plugins/` mappe
2. Aktiver plugin'et via 'Plugins'-menuen i WordPress
3. Konfigurer addon-indstillingerne i netværksadministratoren

## Udvikling

### Opsætning

```bash
# Installer afhængigheder
composer install
npm install

# Kør tests
npm run test

# Kør kode standardtjek
vendor/bin/phpcs
vendor/bin/phpstan

# Ret kode-stilproblemer
vendor/bin/phpcbf

# Byg til produktion
npm run build
```

### Projektstruktur

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klasser og includes
│   ├── class-multisite-ultimate-updater.php  # Opdateringshåndterer
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Hovedfunktionalitet
├── tests/                        # Enhedstests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Grundlæggende testklasse
│   └── class-*-test.php         # Testcases
├── views/                       # Template filer
├── assets/                      # Statiske aktiver
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript filer
│   └── images/                  # Billeder
├── lang/                        # Sprogfiler
├── composer.json                # PHP afhængigheder
├── package.json                 # Node.js afhængigheder
├── phpunit.xml.dist             # PHPUnit konfiguration
├── .phpcs.xml.dist              # Kode standardkonfiguration
└── rector.php                   # Kodemoderniseringsregler
```

### Testning

Add-onet inkluderer et omfattende testframework:

- **Enhedstests**: PHPUnit-baserede tests med WordPress testsuite
- **Grundlæggende testklasse**: Tilbyder hjælpefunktioner til almindelige testscenarier
- **Testdækning**: Konfigureret til at spore kode dækning
- **Multisite Testning**: Tests kører i multisite miljø

### Kode standarder

**WordPress Kodningsstandarder**: Håndhævet via PHPCS
**PHP 7.4+ Kompatibilitet**: Understøtter moderne PHP-funktioner
**Statisk Analyse**: PHPStan integration til type-tjek

### Byggesystem

- **Asset Processing**: Minificering af CSS/JS filer
- **Oversættelse**: Generering af POT fil
- **Pakning**: Arkivoprettelse til distribution
- **Udviklingsmode**: Uminificerede aktiveringer til debugging

## Konfiguration

Addon'et understøtter forskellige konfigurationsmuligheder, som er tilgængelige via netværksadministrator-grænsefladen.

## Hooks og Filters

### Actions (Handlinger)

- `ultimate-multisite-addon-template_init` - Udløses efter addon-initialisering
- `ultimate-multisite-addon-template_loaded` - Udløses efter at alle addon-filer er indlæst

### Filters (Filtre)

- `ultimate-multisite-addon-template_settings` - Ændrer addon-indstillingerne
- `ultimate-multisite-addon-template_enabled` - Overrider status for aktivering/deaktivering af addon'et

## Licens

Dette addon er licenseret under GPL v3 eller senere.

## Support

For support og dokumentation besøg [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog

- Version 1.0.1 (2025-09-28): omdøb præfiks til ultimate-multisite; opdater tekstdomæne; version opgradering.


- Version  (2025-09-28): omdøb præfiks til ultimate-multisite; opdater tekstdomæne; version opgradering.
