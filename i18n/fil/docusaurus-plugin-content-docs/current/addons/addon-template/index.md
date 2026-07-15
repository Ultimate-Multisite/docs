---
title: Template ng Addon
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template ng Addon

Template ng Addon — Ultimate Multisite.

## Mga Kinakailangan (Requirements) {#requirements}

- WordPress 5.3 o mas mataas
- PHP 7.4 o mas mataas
- Multisite Ultimate plugin (aktibo)

## Pag-install (Installation) {#installation}

1. I-upload ang mga file ng addon sa iyong `/wp-content/plugins/` directory
2. I-activate ang plugin sa pamamagitan ng 'Plugins' menu sa WordPress
3. I-configure ang mga setting ng addon sa network admin

## Pagbuo (Development) {#development}

### Pag-set Up (Setup) {#setup}

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

### Istruktura ng Proyekto (Project Structure) {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # Mga PHP class at kasama (includes)
│   ├── class-multisite-ultimate-updater.php  # Handler para sa pag-update
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Pangunahing functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Test cases
├── views/                       # Mga template file
├── assets/                      # Static assets
│   ├── css/                     # Stylesheets
│   ├── js/                      # JavaScript files
│   └── images/                  # Mga larawan
├── lang/                        # Mga file ng wika
├── composer.json                # PHP dependencies
├── package.json                 # Node.js dependencies
├── phpunit.xml.dist             # PHPUnit configuration
├── .phpcs.xml.dist              # Code standards configuration
└── rector.php                   # Code modernization rules
```

### Pag-test (Testing) {#testing}

Ang addon na ito ay may kumpletong testing framework:

- **Unit Tests**: Mga test na gumagamit ng PHPUnit at WordPress test suite
- **Base Test Class**: Nagbibigay ng mga helper method para sa mga karaniwang sitwasyon ng pag-test
- **Test Coverage**: Nakakonfigura para subaybayan ang code coverage
- **Multisite Testing**: Ang mga test ay tumatakbo sa multisite environment

### Code Standards {#code-standards}

- **WordPress Coding Standards**: Ipinapatupad gamit ang PHPCS
- **PHP 7.4+ Compatibility**: Sinusuportahan ang modernong features ng PHP
- **Static Analysis**: Integrasyon ng PHPStan para sa type checking
- **Code Modernization**: Mga patakaran ng Rector para sa pag-upgrade ng PHP

### Build System {#build-system}

- **Asset Processing**: Minification para sa mga CSS/JS file
- **Translation**: Pagbuo ng POT file
- **Packaging**: Paglikha ng archive para sa pamamahagi
- **Development Mode**: Hindi minified na assets para sa pag-debug

## Pag-configure (Configuration) {#configuration}

Sinusuportahan ng addon ang iba't ibang opsyon sa pag-configure na makikita sa network admin interface.

## Hooks at Filters {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - Tumutunog pagkatapos i-initialize ang addon
- `ultimate-multisite-addon-template_loaded` - Tumutunog pagkatapos ma-load ang lahat ng file ng addon

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - Para baguhin ang mga setting ng addon
- `ultimate-multisite-addon-template_enabled` - Para i-override ang status ng pag-enable/disable ng addon

## Lisensya (License) {#license}

Ang addon na ito ay may lisensya sa ilalim ng GPL v3 o mas bago.

## Suporta (Support) {#support}

Para sa suporta at dokumentasyon, bisitahin ang [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Version 1.0.1 (2025-09-28): pinalitan ang prefix ng ultimate-multisite; in-update ang text domain; version bump.


- Version (2025-09-28): pinalitan ang prefix ng ultimate-multisite; in-update ang text domain; version bump.
