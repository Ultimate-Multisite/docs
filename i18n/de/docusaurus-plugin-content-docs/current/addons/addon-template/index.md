---
title: Add-on-Vorlage
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon-Vorlage {#addon-template}

{{ADDON_DESCRIPTION}}

## Anforderungen {#requirements}

- WordPress 5.3 or higher
- PHP 7.4 or higher
- Multisite Ultimate plugin (active)

## Installation {#installation}

1. Upload the addon files to your `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Configure the addon settings in the network admin

## Entwicklung {#development}

### Einrichtung {#setup}

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

### Projektstruktur {#project-structure}

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

### Tests {#testing}

The addon includes a comprehensive testing framework:

- **Unit Tests**: PHPUnit-basierte Tests mit WordPress-Test-Suite
- **Base Test Class**: Bietet Hilfsmethoden für häufige Testszenarien
- **Test Coverage**: Konfiguriert, um Codeabdeckung zu verfolgen
- **Multisite Testing**: Tests laufen in einer Multisite-Umgebung

### Code-Standards {#code-standards}

- **WordPress Coding Standards**: Durch PHPCS durchgesetzt
- **PHP 7.4+ Kompatibilität**: Moderne PHP-Funktionen unterstützt
- **Statische Analyse**: PHPStan-Integration für Typprüfung
- **Code Modernisierung**: Rector-Regeln für PHP-Upgrades

### Build-System {#build-system}

- **Assetverarbeitung**: Minifizierung für CSS/JS-Dateien
- **Übersetzung**: POT-Datei-Generierung
- **Paketierung**: Archiv-Erstellung für Distribution
- **Entwicklungsmodus**: Unminifizierte Assets zum Debuggen

## Konfiguration {#configuration}

Das Addon unterstützt verschiedene Konfigurationsoptionen, die über die Netzwerk-Admin-Oberfläche zugänglich sind.

## Hooks und Filter {#hooks-and-filters}

### Aktionen {#actions}

- `ultimate-multisite-addon-template_init` - Ausgelöst nach Addon-Initialisierung
- `ultimate-multisite-addon-template_loaded` - Ausgelöst nach dem Laden aller Addon-Dateien

### Filter {#filters}

- `ultimate-multisite-addon-template_settings` - Addon-Einstellungen ändern
- `ultimate-multisite-addon-template_enabled` - Addon aktivieren/deaktivieren überschreiben

## Lizenz {#license}

Dieses Addon ist unter der GPL v3 oder später lizenziert.

## Support {#support}

Für Support und Dokumentation besuchen Sie [MultisiteUltimate.com](https://multisiteultimate.com)

## Änderungsprotokoll {#changelog}

- Version 1.0.1 (2025-09-28): Präfix in ultimate-multisite umbenennen; Textdomain aktualisieren; Versionssprung.

- Version (2025-09-28): Präfix in ultimate-multisite umbenennen; Textdomain aktualisieren; Versionssprung.
