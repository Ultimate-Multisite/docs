---
title: Byvoegsel Sjabloon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Sjabloon

{{ADDON_DESCRIPTION}}

## Vereistes

- WordPress 5.3 of hoger
- PHP 7.4 of hoger
- Multisite Ultimate plugin (aktive)

## Installasie

1. Laai die add-on lêers na jou `/wp-content/plugins/` gids
2. Aktiveer die plugin via die 'Plugins' kieslys in WordPress
3. Konfigureer die add-on instellings in die netwerk admin

## Ontwikkeling

### Opstelling

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

### Projekstruktuur

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

### Toetsing

Die add-on sluit 'n omvattende toetsraamwerk in:

- **Eenheidstoetsen**: PHPUnit-gebaseerde toets met WordPress toetsuite
- **Basis Toetsklas**: Verskaf hulpmetodes vir algemene toetsscenario's
- **Toetsdekking**: Geconfigureer om kode dekking te volg
- **Multisite Toetsing**: Toetsen loop in multisite-omgewing

### Kode-standaarde

- **WordPress Kode-standaarde**: Versterk via PHPCS
- **PHP 7.4+ Kompatibiliteit**: Moderne PHP-funksies ondersteun
- **Statiese Analise**: PHPStan integrasie vir tipe kontrole
- **Kode Modernisering**: Rector reëls vir PHP-opgrade

### Boustelsel

- **Assetverwerking**: Minifikasie vir CSS/JS-lêers
- **Vertaling**: POT-lêergenerering
- **Pakket**: Argiefskapie vir verspreiding
- **Ontwikkelingsmodus**: Onminifiseerde assets vir debugging

## Konfigurasie

Die add-on ondersteun verskeie konfigurasieopsies wat toeganklik is via die netwerk admin-koppelvlak.

## Hooiks en Filters

### Aktiwiteite

- `ultimate-multisite-addon-template_init` - Aktief na add-on initialisering
- `ultimate-multisite-addon-template_loaded` - Aktief na alle add-on lêers gelaai

### Filters

- `ultimate-multisite-addon-template_settings` - Verander add-on instellings
- `ultimate-multisite-addon-template_enabled` - Oorskryf add-on aktiveer/deaktiveer status

## Lisensie

Hierdie add-on is gelisensieer onder die GPL v3 of later.

## Ondersteuning

Vir ondersteuning en dokumentasie, besoek [MultisiteUltimate.com](https://multisiteultimate.com)

## Veranderingslog

- Versie 1.0.1 (2025-09-28): hernoem voorvoegsel na ultimate-multisite; werk teksdomein op; versienas.
- Versie (2025-09-28): hernoem voorvoegsel na ultimate-multisite; werk teksdomein op; versienas.
