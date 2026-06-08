---
title: Template hori
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Ezpotegiak

- WordPress 5.3 edo bigu
- PHP 7.4 edo bigu
- Multisite Ultimate plugin (aktibo)

## Instalazioa

1. Addon fileak /wp-content/plugins/ direktori laure ditu
2. WordPress-en 'Plugins' menua belaun bidez aktibatu duzu
3. Network admin-eko konfiguratzen addon-ekoa

## Desenmendia

### Konfigurazioa

```bash
# Dependendiak instalatu
composer install
npm install

# Testak jarri eduki
npm run test

# Koda estandardiak kontrolatu
vendor/bin/phpcs
vendor/bin/phpstan

# Kodako estilo problemaak batzu
vendor/bin/phpcbf

# Produzioa-ren arteko build
npm run build
```

### Proyekto Estruktura

```
ultimate-multisite-addon-template/
├── inc/                          # PHP klaseak eta inkludioak
│   ├── class-multisite-ultimate-updater.php  # Update handler
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Main funcionalidad
├── tests/                        # Unit testak
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test klasea
│   └── class-*-test.php         # Test kasuak
├── views/                       # Template fileak
├── assets/                      # Estatik arteak
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript fileak
│   └── images/                  # Imazenak
├── lang/                        # Linguatutako fileak
├── composer.json                # PHP dependiak
├── package.json                 # Node.js dependiak
├── phpunit.xml.dist             # PHPUnit konfiguratazioa
├── .phpcs.xml.dist              # Koda standardak konfiguratazioa
└── rector.php                   # Koda modernizazio erdaleak
```

### Testoak

Addon-ek test framework bat dago:

- **Unit Tests**: WordPress test suitearekin PHPUnit-baztu testak
- **Base Test Class**: Komun test kasuak eta testak jarraituzko helper methodak ematen du
- **Test Coverage**: Koda kontzientzia egiteko konfiguratatu da
- **Multisite Testing**: Testak multisite erabilerapean jarraitzen dira

### Koda Standardak

**WordPress Koda Standardak:** PHPCS bidez erabiltzen da
**PHP 7.4+ Bidezkoak:** Modern PHP funtunaldiak suportatzen dira
**Ebaluazio Statikoa (Static Analysis):** Type checking-a planteatzeko PHPStan integrazioa
**Koda Modernizazioa:** PHP upgrade-etan Rector rules

### Build System (Gaurtzi Sistema)

- **Asset Processing (Artegia Prozesua)**: CSS/JS file-ek minifikazioa (minification)
- **Translation (Vertapena)**: POT file generatzea
- **Packaging (Paketatu)**: Distribuzio-eko arkibioak (archive) emateko
- **Development Mode (Gaitasun Modu)**: Debugging-eko artegiak minifikazioa ez duenak

## Configuration (Konfigurazioa)

Addon-ek network admin interface-en bidez erabiliko dituen berbagai konfiguratizio opsioak suportatzen du.

## Hooks and Filters (Hook-ak eta Filtra-ak)

### Actions (Aksioak)

- `ultimate-multisite-addon-template_init` - Addon-aren irakurri-dian ondoren emateko
- `ultimate-multisite-addon-template_loaded` - Addon-aren guztia file-ek irakurri-dian ondoren emateko

### Filters (Filtra-ak)

- `ultimate-multisite-addon-template_settings` - Addon-aren konfiguratizioak modifikatzeko
- `ultimate-multisite-addon-template_enabled` - Addon-aren aktibitatea/deaktibitatea superatzeko (override)

## License (Lizkia)

Addon-a GPL v3 edo geroago bidez lizkiatzen da.

## Support (Mendatutako Udalak)

Mendatutako udalak eta dokumentazioari, [MultisiteUltimate.com](https://multisiteultimate.com)-re joatu.
## Changelog (Aldaketa-lista)

- Version 1.0.1 (2025-09-28): prefixa "ultimate-multisite" irakurri; text domain update; version bidezkoa handitu.


- Version  (2025-09-28): prefixa "ultimate-multisite" irakurri; text domain update; version bidezkoa handitu.
