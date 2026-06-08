---
title: Tilläggmall
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon-mall

{{ADDON_DESCRIPTION}}

## Krav

- WordPress 5.3 eller högre
- PHP 7.4 eller högre
- Ultimate Multisite-plugin (aktivt)

## Installation

1. Ladda upp addon-filerna till din `/wp-content/plugins/` katalog
2. Aktivera pluginet via menyn 'Plugins' i WordPress
3. Konfigurera addon-inställningarna i nätverksadministratören

## Utveckling

### Uppställning

```bash
# Installera beroenden
composer install
npm install

# Kör tester
npm run test

# Kör kontroller av kodstandarder
vendor/bin/phpcs
vendor/bin/phpstan

# Fixa problem med kodstil
vendor/bin/phpcbf

# Bygg för produktion
npm run build
```

### Projektstruktur

```
ultimate-multisite-addon-template/
├── inc/                          # PHP-klasser och inkluderade filer
│   ├── class-multisite-ultimate-updater.php  # Hanterare för uppdateringar
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Huvudfunktionalitet
├── tests/                        # Enhetstester
│   ├── bootstrap.php            # Test-bootstrap
│   ├── class-*-base.php         # Basklass för tester
│   └── class-*-test.php         # Testfall
├── views/                       # Mallfiler
├── assets/                      # Statiska resurser
│   ├── css/                     # Stilblad
│   ├── js/                      # JavaScript-filer
│   └── images/                  # Bilder
├── lang/                        # Språkfiler
├── composer.json                # PHP-beroenden
├── package.json                 # Node.js-beroenden
├── phpunit.xml.dist             # PHPUnit-konfiguration
├── .phpcs.xml.dist              # Konfiguration för kodstandarder
└── rector.php                   # Regler för modernisering av kod
```

### Testning

Addonet inkluderar ett omfattande testramverk:

- **Enhetstester (Unit Tests)**: Tester baserade på PHPUnit med WordPress test suite
- **Basklass (Base Test Class)**: Tillhandahåller hjälpfunktioner för vanliga testscenarier
- **Testtäckning (Test Coverage)**: Konfigurerad för att spåra kodtäckning
- **Multisite-testning**: Tester körs i en multisite-miljö

### Kodstandarder

- **WordPress Coding Standards**: Upprätthålls via PHPCS
- **PHP 7.4+ Kompatibilitet**: Stöder moderna PHP-funktioner
- **Statisk Analys (Static Analysis)**: PHPStan-integration för typkontroll
- **Kodmodernisering (Code Modernization)**: Rector-regler för PHP-uppgraderingar

### Byggsystem (Build System)

- **Resursbearbetning (Asset Processing)**: Minifiering av CSS/JS-filer
- **Översättning (Translation)**: Generering av POT-filer
- **Paketering (Packaging)**: Skapande av arkiv för distribution
- **Utvecklingsläge (Development Mode)**: Ominifierade resurser för felsökning

## Konfiguration

Addonet stöder olika konfigurationsalternativ som är tillgängliga via nätverksadministratörsgränssnittet.

## Hooks och Filters

### Actions (Åtgärder)

- `ultimate-multisite-addon-template_init` - Körs efter att addonet har initialiserats
- `ultimate-multisite-addon-template_loaded` - Körs efter att alla addon-filer har laddats

### Filters (Filter)

- `ultimate-multisite-addon-template_settings` - Modifiera addon-inställningarna
- `ultimate-multisite-addon-template_enabled` - Överskriva addonets aktiverings-/inaktiveringsstatus

## Licens

Detta addon är licensierat under GPL v3 eller senare.

## Support

För support och dokumentation, besök [MultisiteUltimate.com](https://multisiteultimate.com)
## Ändringslogg (Changelog)

- Version 1.0.1 (2025-09-28): bytte prefix till ultimate-multisite; uppdaterade textdomän; versionhöjning.


- Version (2025-09-28): bytte prefix till ultimate-multisite; uppdaterade textdomän; versionhöjning.
