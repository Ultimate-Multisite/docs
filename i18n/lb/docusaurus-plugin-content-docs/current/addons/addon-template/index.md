---
title: Zousaz-Schabloun
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon-Schabloun

{{ADDON_DESCRIPTION}}

## Ufuerderungen

- WordPress 5.3 oder méi héich
- PHP 7.4 oder méi héich
- Multisite Ultimate plugin (aktiv)

## Installatioun

1. Luet d'Addon-Dateien an Ären `/wp-content/plugins/` Verzeechnes erop
2. Aktivéiert de plugin iwwer de Menü 'Plugins' a WordPress
3. Konfiguréiert d'Addon-Astellungen am Netzwierk-Admin

## Entwécklung

### Ariichten

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

### Projet-Struktur

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

### Testen

Den Addon enthält en ëmfaassenden Test-Framework:

- **Eenheetstester**: PHPUnit-baséiert Tester mat WordPress Test-Suite
- **Basis-Testklass**: Bitt Hëllefsmethoden fir üblech Test-Szenarien
- **Testofdeckung**: Konfiguréiert fir d'Code-Ofdeckung ze verfollegen
- **Multisite-Testen**: Tester lafen an enger Multisite-Ëmfeld

### Code-Standarden

- **WordPress Coding Standards**: Duerch PHPCS duerchgesat
- **PHP 7.4+ Kompatibilitéit**: Modern PHP-Funktioune ginn ënnerstëtzt
- **Statesch Analys**: PHPStan-Integratioun fir Typ-Iwwerpréiwung
- **Code-Moderniséierung**: Rector-Reegele fir PHP-Upgraden

### Build-System

- **Asset-Veraarbechtung**: Minifizéierung fir CSS/JS-Dateien
- **Iwwersetzung**: POT-Datei-Generatioun
- **Verpakung**: Archiv-Erstellung fir Verdeelung
- **Entwécklungsmodus**: Net minifizéiert Assets fir Debugging

## Konfiguratioun

Den Addon ënnerstëtzt verschidde Konfiguratiounsoptiounen, déi iwwer d'Netzwierk-Admin-Interface zougänglech sinn.

## Hooks a Filteren

### Aktiounen

- `ultimate-multisite-addon-template_init` - Ausgeléist no der Addon-Initialiséierung
- `ultimate-multisite-addon-template_loaded` - Ausgeléist nodeems all Addon-Dateie geluede sinn

### Filteren

- `ultimate-multisite-addon-template_settings` - Addon-Astellungen änneren
- `ultimate-multisite-addon-template_enabled` - Addon Aktivéieren/Desaktivéieren-Status iwwerschreiwen

## Lizenz

Dësen Addon ass ënner der GPL v3 oder méi spéit lizenzéiert.

## Support

Fir Support an Dokumentatioun, besicht [MultisiteUltimate.com](https://multisiteultimate.com)
## Ännerungsprotokoll

- Versioun 1.0.1 (2025-09-28): Prefix op ultimate-multisite ëmbenennen; Text-Domain aktualiséieren; Versiouns-Erhéijung.


- Versioun  (2025-09-28): Prefix op ultimate-multisite ëmbenennen; Text-Domain aktualiséieren; Versiouns-Erhéijung.
