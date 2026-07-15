---
title: Addon Template
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template sa Addon

Addon Template — Ultimate Multisite.

## Mga Kinahanglanon {#requirements}

- WordPress 5.3 o mas taas pa
- PHP 7.4 o mas taas pa
- Multisite Ultimate plugin (aktibo)

## Pag-instalar {#installation}

1. I-upload ang mga file sa addon ngadto sa imong `/wp-content/plugins/` directory
2. I-activate ang plugin pinaagi sa 'Plugins' menu sa WordPress
3. I-configure ang setting sa addon didto sa network admin

## Pagpalambo (Development) {#development}

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

### Project Structure {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes ug mga kasagarang file (includes)
│   ├── class-multisite-ultimate-updater.php  # Handler sa pag-update
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # Pangunang functionality
├── tests/                        # Unit tests
│   ├── bootstrap.php            # Test bootstrap
│   ├── class-*-base.php         # Base test class
│   └── class-*-test.php         # Mga kaso sa pag-test (Test cases)
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

### Pag-test (Testing) {#testing}

Ang addon naglakip og kumpleto nga testing framework:

- **Unit Tests**: Mga test base sa PHPUnit uban ang WordPress test suite
- **Base Test Class**: Naghatag og mga helper method para sa kasagarang sitwasyon sa pag-test
- **Test Coverage**: Gi-configure aron masubay ang code coverage
- **Multisite Testing**: Ang mga test nagpadagan sa multisite environment

### Code Standards {#code-standards}

- **WordPress Coding Standards**: Gipahigpit pinaagi sa PHPCS
- **PHP 7.4+ Compatibility**: Gisuportahan ang modernong features sa PHP
- **Static Analysis**: Integrasyon sa PHPStan para sa type checking
- **Code Modernization**: Mga rules gikan sa Rector alang sa pag-upgrade sa PHP

### Build System {#build-system}

- **Asset Processing**: Minification (pagpaminus) para sa CSS/JS files
- **Translation**: Paghimo og POT file
- **Packaging**: Pagmugna og archive para sa pag-distribute
- **Development Mode**: Dili minified nga assets para sa debugging

## Configuration {#configuration}

Ang addon nagsuporta sa lainlaing configuration options nga makita pinaagi sa network admin interface.

## Hooks ug Filters {#hooks-and-filters}

### Actions (Mga Aksyon) {#actions}

- `ultimate-multisite-addon-template_init` - Mogadagan pagkahuman sa inisyal nga setup sa addon
- `ultimate-multisite-addon-template_loaded` - Mogadagan pagkahuman ma-load ang tanang file sa addon

### Filters (Mga Filter) {#filters}

- `ultimate-multisite-addon-template_settings` - Pag-usab sa setting sa addon
- `ultimate-multisite-addon-template_enabled` - Pag-override sa status kung naka-enable o disabled ang addon

## License {#license}

Kini nga addon gihatag og lisensya ubos sa GPL v3 or later.

## Suporta (Support) {#support}

Alang sa suporta ug dokumentasyon, bisita sa [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog {#changelog}

- Version 1.0.1 (2025-09-28): giusab ang prefix ngadto sa ultimate-multisite; gi-update ang text domain; version bump.


- Version  (2025-09-28): giusab ang prefix ngadto sa ultimate-multisite; gi-update ang text domain; version bump.
