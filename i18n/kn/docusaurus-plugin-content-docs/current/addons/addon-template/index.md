---
title: ಸೇರ್ಪಡೆ ಮಾದರಿ
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## ಅಗತ್ಯತೆಗಳು (Requirements)

- WordPress 5.3 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಆವೃತ್ತಿ (version)
- PHP 7.4 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಆವೃತ್ತಿ
- Multisite Ultimate plugin (ಸಕ್ರಿಯವಾಗಿರಬೇಕು)

## ಅಳವಡಿಕೆ (Installation)

1. ಆಡ್-ಆನ್ ಫೈಲ್‌ಗಳನ್ನು ನಿಮ್ಮ `/wp-content/plugins/` ಡೈರೆಕ್ಟರಿಗೆ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ
2. WordPress ನಲ್ಲಿರುವ 'Plugins' ಮೆನುವಿನ ಮೂಲಕ plugin ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ (Activate ಮಾಡಿ)
3. ನೆಟ್‌ವರ್ಕ್ ಅಡ್ಮಿನ್‌ನಲ್ಲಿ ಆಡ್-ಆನ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಿ

## ಅಭಿವೃದ್ಧಿ (Development)

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

### Testing

ಈ ಆಡ್-ಆನ್ ಒಂದು ಸಮಗ್ರ ಟೆಸ್ಟಿಂಗ್ ಫ್ರೇಮ್‌ವರ್ಕ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ:

- **Unit Tests**: WordPress test suite ಜೊತೆಗೆ PHPUnit ಆಧಾರಿತ ಟೆಸ್ಟ್‌ಗಳು
- **Base Test Class**: ಸಾಮಾನ್ಯ ಟೆಸ್ಟ್ ಸನ್ನಿವೇಶಗಳಿಗೆ ಸಹಾಯ ಮಾಡುವ ವಿಧಾನಗಳನ್ನು (helper methods) ಒದಗಿಸುತ್ತದೆ
- **Test Coverage**: ಕೋಡ್ ಕವರೇಜ್ ಅನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗಿದೆ
- **Multisite Testing**: ಟೆಸ್ಟ್‌ಗಳು ಮಲ್ಟಿಸಿಟ್ ಎನ್ವಿರಾನ್‌ಮೆಂಟ್‌ನಲ್ಲಿ ನಡೆಯುತ್ತವೆ

### Code Standards

- **WordPress Coding Standards**: PHPCS ಮೂಲಕ ಜಾರಿಗೊಳಿಸಲಾಗುತ್ತದೆ (Enforced)
- **PHP 7.4+ Compatibility**: ಆಧುನಿಕ PHP ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ
- **Static Analysis**: ಟೈಪ್ ಚೆಕಿಂಗ್‌ಗಾಗಿ PHPStan ಅನ್ನು ಸಂಯೋಜಿಸಲಾಗಿದೆ (integration)
- **Code Modernization**: PHP ಅಪ್‌ಗ್ರೇಡ್‌ಗಾಗಿ Rector ನಿಯಮಗಳು

### Build System

- **Asset Processing**: CSS/JS ಫೈಲ್‌ಗಳಿಗೆ ಮಿನೀಫಿಕೇಶನ್ (Minification)
- **Translation**: POT ಫೈಲ್ ಉತ್ಪಾದನೆ (generation)
- **Packaging**: ವಿತರಣೆಗಾಗಿ ಆರ್ಕೈವ್ ರಚನೆ (Archive creation)
- **Development Mode**: ಡಿಬಗ್ಗಿಂಗ್‌ಗಾಗಿ ಮಿನೀಫೈ ಮಾಡದ ಆಸ್ಸೆಟ್‌ಗಳು (Unminified assets)

## Configuration

ಈ ಆಡ್-ಆನ್ ನೆಟ್‌ವರ್ಕ್ ಅಡ್ಮಿನ್ ಇಂಟರ್‌ಫೇಸ್ ಮೂಲಕ ಲಭ್ಯವಿರುವ ವಿವಿಧ ಕಾನ್ಫಿಗರೇಷನ್ ಆಯ್ಕೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.

## Hooks and Filters

### Actions

- `ultimate-multisite-addon-template_init` - ಆಡ್-ಆನ್ ಪ್ರಾರಂಭವಾದ ನಂತರ déclared (Fired) ಆಗುತ್ತದೆ
- `ultimate-multisite-addon-template_loaded` - ಎಲ್ಲಾ ಆಡ್-ಆನ್ ಫೈಲ್‌ಗಳು ಲೋಡ್ ಆದ ನಂತರ déclared ಆಗುತ್ತದೆ

### Filters

- `ultimate-multisite-addon-template_settings` - ಆಡ್-ಆನ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಮಾರ್ಪಡಿಸಲು
- `ultimate-multisite-addon-template_enabled` - ಆಡ್-ಆನ್ ಅನ್ನು ಆನ್/ಆಫ್ ಮಾಡುವ ಸ್ಥಿತಿಯನ್ನು ಬದಲಾಯಿಸಲು (Override)

## License

ಈ ಆಡ್-ಆನ್ GPL v3 ಅಥವಾ ನಂತರದ ಆವೃತ್ತಿಯ ಅಡಿಯಲ್ಲಿ ಲೈಸೆನ್ಸ್ ಆಗಿದೆ.

## Support

ಸಪೋರ್ಟ್ ಮತ್ತು ಡಾಕ್ಯುಮೆಂಟೇಶನ್‌ಗಾಗಿ, [MultisiteUltimate.com](https://multisiteultimate.com) ಗೆ ಭೇಟಿ ನೀಡಿ
## Changelog

- Version 1.0.1 (2025-09-28): rename prefix to ultimate-multisite; update text domain; version bump.


- Version  (2025-09-28): rename prefix to ultimate-multisite; update text domain; version bump.
