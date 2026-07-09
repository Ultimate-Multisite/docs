---
title: Template ng Add-on
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template ng Add-on

{{ADDON_DESCRIPTION}}

## Mga Kinakailangan

- WordPress 5.3 o mas mataas
- PHP 7.4 o mas mataas
- Multisite Ultimate plugin (aktibo)

## Pag-install

1. I-upload ang mga file ng add-on sa iyong directory na `/wp-content/plugins/`
2. I-activate ang plugin sa pamamagitan ng menu na 'Plugins' sa WordPress
3. I-configure ang mga setting ng add-on sa network admin

## Pag-develop

### Setup

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

### Estruktura ng Proyekto

```
ultimate-multisite-addon-template/
├── inc/                          # Mga PHP class at include
│   ├── class-multisite-ultimate-updater.php  # Tagapangasiwa ng update
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Pangunahing functionality
├── tests/                        # Mga unit test
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Mga test case
├── views/                       # Mga template file
├── assets/                      # Mga static asset
│   ├── css/                     # Mga stylesheet
│   ├── js/                      # Mga JavaScript file
│   └── images/                  # Mga larawan
├── lang/                        # Mga file ng wika
├── composer.json                # Mga PHP dependency
├── package.json                 # Mga Node.js dependency
├── phpunit.xml.dist             # Configuration ng PHPUnit
├── .phpcs.xml.dist              # Configuration ng mga pamantayan sa code
└── rector.php                   # Mga patakaran sa modernisasyon ng code
```

### Pagsubok

Kasama sa add-on ang komprehensibong framework sa pagsubok:

- **Mga Unit Test**: Mga test na batay sa PHPUnit gamit ang test suite ng WordPress
- **Base Test Class**: Nagbibigay ng mga helper method para sa karaniwang mga senaryo ng test
- **Saklaw ng Test**: Naka-configure upang subaybayan ang saklaw ng code
- **Pagsubok sa Multisite**: Tumatakbo ang mga test sa multisite environment

### Mga Pamantayan sa Code

- **WordPress Coding Standards**: Ipinapatupad sa pamamagitan ng PHPCS
- **Compatibility sa PHP 7.4+**: Sinusuportahan ang mga modernong feature ng PHP
- **Static Analysis**: Integrasyon ng PHPStan para sa pagsusuri ng type
- **Modernisasyon ng Code**: Mga panuntunan ng Rector para sa mga upgrade ng PHP

### Build System

- **Pagproseso ng Asset**: Minification para sa mga CSS/JS file
- **Pagsasalin**: Pagbuo ng POT file
- **Pag-package**: Paglikha ng archive para sa distribusyon
- **Development Mode**: Mga hindi na-minify na asset para sa debugging

## Configuration

Sinusuportahan ng add-on ang iba't ibang opsyon sa configuration na maa-access sa pamamagitan ng network admin interface.

## Mga Hook at Filter

### Mga Action

- `ultimate-multisite-addon-template_init` - Pinaandar pagkatapos ng initialization ng add-on
- `ultimate-multisite-addon-template_loaded` - Pinaandar pagkatapos ma-load ang lahat ng file ng add-on

### Mga Filter

- `ultimate-multisite-addon-template_settings` - Baguhin ang mga setting ng add-on
- `ultimate-multisite-addon-template_enabled` - I-override ang status ng pag-enable/disable ng add-on

## Lisensya

Ang add-on na ito ay lisensyado sa ilalim ng GPL v3 o mas bago.

## Suporta

Para sa suporta at dokumentasyon, bisitahin ang [MultisiteUltimate.com](https://multisiteultimate.com)
## Talaan ng Pagbabago

- Bersyon 1.0.1 (2025-09-28): palitan ang pangalan ng prefix sa ultimate-multisite; i-update ang text domain; pagtaas ng bersyon.


- Bersyon  (2025-09-28): palitan ang pangalan ng prefix sa ultimate-multisite; i-update ang text domain; pagtaas ng bersyon.
