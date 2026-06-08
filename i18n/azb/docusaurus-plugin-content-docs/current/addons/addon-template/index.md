---
title: Addon Template
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Requirements

- WordPress 5.3 ya usse naya version
- PHP 7.4 ya usse naya version
- Multisite Ultimate plugin (active hona chahiye)

## Installation

1. Addon files ko apne `/wp-content/plugins/` directory mein upload karein.
2. WordPress ke 'Plugins' menu se plugin ko activate karein.
3. Network admin mein addon ki settings configure karein.

## Development

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

### Project Structure

```
ultimate-multisite-addon-template/
├── inc/                          # PHP classes aur includes
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

### Testing

Is addon mein ek poora testing framework shamil hai:

- **Unit Tests**: WordPress test suite ke saath PHPUnit-based tests
- **Base Test Class**: Aam test scenarios ke liye helper methods provide karta hai
- **Test Coverage**: Code coverage track karne ke liye configure kiya gaya hai
- **Multisite Testing**: Tests multisite environment mein run hote hain

### Code Standards

- **WordPress Coding Standards**: PHPCS ke zariye enforce kiye jaate hain
- **PHP 7.4+ Compatibility**: Modern PHP features support kiye jaate hain
- **Static Analysis**: Type checking ke liye PHPStan integration
- **Code Modernization**: PHP upgrades ke liye Rector rules

### Build System

- **Asset Processing**: CSS/JS files ke liye Minification
- **Translation**: POT file generation
- **Packaging**: Distribution ke liye Archive creation
- **Development Mode**: Debugging ke liye Unminified assets

## Configuration

Addon network admin interface ke zariye kai tarah ke configuration options support karta hai.

## Hooks and Filters

### Actions

- `ultimate-multisite-addon-template_init` - Addon initialize hone ke baad fire hota hai
- `ultimate-multisite-addon-template_loaded` - Saare addon files load hone ke baad fire hota hai

### Filters

- `ultimate-multisite-addon-template_settings` - Addon settings ko modify karta hai
- `ultimate-multisite-addon-template_enabled` - Addon ke enable/disable status ko override karta hai

## License

Yeh addon GPL v3 ya usse naye version ke tahat licensed hai.

## Support

Support aur documentation ke liye, [MultisiteUltimate.com](https://multisiteultimate.com) par visit karein.
## Changelog

- Version 1.0.1 (2025-09-28): prefix ko ultimate-multisite mein rename kiya; text domain update kiya; version bump.


- Version (2025-09-28): prefix ko ultimate-multisite mein rename kiya; text domain update kiya; version bump.
