---
title: Tilleggmalplate
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon-mal

{{ADDON_DESCRIPTION}}

## Krav

- WordPress 5.3 eller høyere
- PHP 7.4 eller høyere
- Ultimate Multisite plugin (aktiv)

## Installasjon

1. Last opp addon-filene til katalogen din `/wp-content/plugins/`
2. Aktiver pluginet via menyen 'Plugins' i WordPress
3. Konfigurer addon-innstillingene i nettverksadministratoren

## Utvikling

### Oppsett

```bash
# Installer avhengigheter
composer install
npm install

# Kjør tester
npm run test

# Kjør sjekker for kodekrav
vendor/bin/phpcs
vendor/bin/phpstan

# Rett opp kodeformatfeil
vendor/bin/phpcbf

# Bygg for produksjon
npm run build
```

### Prosjektstruktur

```
ultimate-multisite-addon-template/
├── inc/                          # PHP-klasser og inkluderinger
│   ├── class-multisite-ultimate-updater.php  # Håndterer oppdateringer
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Hovedfunksjonalitet
├── tests/                        # Enhetstester
│   ├── bootstrap.php            # Test-bootstrap
│   ├── class-*-base.php         # Basis testklasse
│   └── class-*-test.php         # Testtilfeller
├── views/                       # Malfiler
├── assets/                      # Statiske ressurser
│   ├── css/                     # Stilark
│   ├── js/                      # JavaScript-filer
│   └── images/                  # Bilder
├── lang/                        # Språkfiler
├── composer.json                # PHP-avhengigheter
├── package.json                 # Node.js-avhengigheter
├── phpunit.xml.dist             # PHPUnit-konfigurasjon
├── .phpcs.xml.dist              # Kodekrav-konfigurasjon
└── rector.php                   # Regler for kodeoppgradering
```

### Testing

Addonet inkluderer et omfattende testrammeverk:

- **Enhetstester (Unit Tests)**: PHPUnit-baserte tester med WordPress test suite
- **Basis Testklasse (Base Test Class)**: Gir hjelpefunksjoner for vanlige testscenarioer
- **Testdekning (Test Coverage)**: Konfigurert for å spore kodekdekning
- **Multisite Testing**: Tester kjøres i et multisite-miljø

### Kodekrav

- **WordPress Coding Standards**: Håndheves via PHPCS
- **PHP 7.4+ Kompatibilitet**: Støtter moderne PHP-funksjoner
- **Statisk Analyse**: PHPStan-integrasjon for typesjekking
- **Kodeoppgradering**: Rector-regler for PHP-oppgraderinger

### Byggsystem (Build System)

- **Asset-behandling**: Minifisering av CSS/JS-filer
- **Oversettelse**: Generering av POT-filer
- **Pakking**: Opprettelse av arkiver for distribusjon
- **Utviklingsmodus**: Ikke-minifiserte ressurser for feilsøking

## Konfigurasjon

Addonet støtter ulike konfigurasjonsalternativer som er tilgjengelige via nettverksadministratorgrensesnittet.

## Hooks og Filtre

### Handlinger (Actions)

- `ultimate-multisite-addon-template_init` - Utløses etter addon-initialisering
- `ultimate-multisite-addon-template_loaded` - Utløses etter at alle addon-filer er lastet

### Filtre (Filters)

- `ultimate-multisite-addon-template_settings` - Endre addon-innstillinger
- `ultimate-multisite-addon-template_enabled` - Overstyre addon-aktiveringsstatus

## Lisens

Dette addonet er lisensiert under GPL v3 eller nyere.

## Support

For support og dokumentasjon, besøk [MultisiteUltimate.com](https://multisiteultimate.com)
## Endringslogg (Changelog)

- Versjon 1.0.1 (2025-09-28): omdøper prefiks til ultimate-multisite; oppdaterer tekstdomene; versjonsøkning.


- Versjon (2025-09-28): omdøper prefiks til ultimate-multisite; oppdaterer tekstdomene; versjonsøkning.
