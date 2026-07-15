---
title: Addon-sjabloon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Sjabloon

Addon-sjabloon — Ultimate Multisite.

## Vereisten {#requirements}

- WordPress 5.3 of hoger
- PHP 7.4 of hoger
- Multisite Ultimate plugin (actief)

## Installatie {#installation}

1. Upload de addon-bestanden naar je `/wp-content/plugins/` directory
2. Activeer de plugin via het 'Plugins' menu in WordPress
3. Configureer de addon-instellingen in de netwerkbeheerder

## Ontwikkeling {#development}

### Setup {#setup}

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

### Projectstructuur {#project-structure}

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

### Testen {#testing}

De addon bevat een uitgebreid testframework:

- **Unit Tests**: PHPUnit-gebaseerde tests met de WordPress test suite
- **Base Test Class**: Biedt hulpmethoden voor veelvoorkomende testscenario's
- **Test Coverage**: Geconfigureerd om code coverage te volgen
- **Multisite Testing**: Tests draaien in een multisite-omgeving

### Code Standaarden {#code-standards}

- WordPress Coding Standards: Afgedwongen via PHPCS
- PHP 7.4+ Compatibiliteit: Moderne PHP-functies ondersteund
- Statische Analyse: PHPStan-integratie voor typechecking
- Code Modernization: Rector-regels voor PHP-upgrades

### Build Systeem {#build-system}

- Assetverwerking: Minificatie voor CSS/JS-bestanden
- Vertaling: POT-bestandsgeneratie
- Pakket: Archiefcreatie voor distributie
- Ontwikkelingsmodus: Onminified assets voor debugging

## Configuratie {#configuration}

De addon ondersteunt verschillende configuratieopties die toegankelijk zijn via de netwerkbeheerinterface.

## Hooks en Filters {#hooks-and-filters}

### Acties {#actions}

- `ultimate-multisite-addon-template_init` - Wordt geactiveerd na addon-initialisatie
- `ultimate-multisite-addon-template_loaded` - Wordt geactiveerd na het laden van alle addon-bestanden

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Wijzig addon-instellingen
- `ultimate-multisite-addon-template_enabled` - Overschrijf addon inschakelen/uitschakelen status

## Licentie {#license}

Deze addon is gelicentieerd onder de GPL v3 of later.

## Ondersteuning {#support}

Voor ondersteuning en documentatie, bezoek [MultisiteUltimate.com](https://multisiteultimate.com)

## Wijzigingslog {#changelog}

- Versie 1.0.1 (2025-09-28): prefix hernoemen naar ultimate-multisite; tekstdomein bijwerken; versie verhogen.
- Versie (2025-09-28): prefix hernoemen naar ultimate-multisite; tekstdomein bijwerken; versie verhogen.
