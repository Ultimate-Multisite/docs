---
title: एडऑन टेम्पलेट
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Requirements

- WordPress 5.3 या इससे उच्च संस्करण
- PHP 7.4 या इससे उच्च संस्करण
- Multisite Ultimate plugin (सक्रिय)

## Installation

1. addon फ़ाइलों को अपने `/wp-content/plugins/` डायरेक्टरी में अपलोड करें
2. WordPress में 'Plugins' मेनू के माध्यम से plugin को सक्रिय करें
3. नेटवर्क एडमिन में addon सेटिंग्स को कॉन्फ़िगर करें

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

addon में एक व्यापक testing framework शामिल है:

- **Unit Tests**: WordPress test suite के साथ PHPUnit-आधारित टेस्ट
- **Base Test Class**: सामान्य test scenarios के लिए helper methods प्रदान करता है
- **Test Coverage**: code coverage को ट्रैक करने के लिए कॉन्फ़िगर किया गया है
- **Multisite Testing**: टेस्ट multisite environment में चलते हैं

### Code Standards

- **WordPress Coding Standards**: PHPCS के माध्यम से लागू किया गया है
- **PHP 7.4+ Compatibility**: आधुनिक PHP सुविधाओं का समर्थन करता है
- **Static Analysis**: टाइप चेकिंग के लिए PHPStan इंटीग्रेशन
- **Code Modernization**: PHP अपग्रेड के लिए Rector rules

### Build System

- **Asset Processing**: CSS/JS फ़ाइलों के लिए मिनिफिकेशन (Minification)
- **Translation**: POT फ़ाइल जनरेशन
- **Packaging**: वितरण के लिए archive बनाना
- **Development Mode**: debugging के लिए अनमिनिफाइड assets

## Configuration

addon विभिन्न कॉन्फ़िगरेशन विकल्प प्रदान करता है, जिन्हें network admin interface के माध्यम से एक्सेस किया जा सकता है।

## Hooks and Filters

### Actions

- `ultimate-multisite-addon-template_init` - addon initialization के बाद ट्रिगर होता है
- `ultimate-multisite-addon-template_loaded` - सभी addon फ़ाइलें लोड होने के बाद ट्रिगर होता है

### Filters

- `ultimate-multisite-addon-template_settings` - addon सेटिंग्स को संशोधित करता है
- `ultimate-multisite-addon-template_enabled` - addon के enable/disable status को ओवरराइड करता है

## License

यह addon GPL v3 या बाद के संस्करण के तहत लाइसेंस प्राप्त है।

## Support

support और documentation के लिए, [MultisiteUltimate.com](https://multisiteultimate.com) पर जाएँ
## Changelog

- Version 1.0.1 (2025-09-28): prefix को ultimate-multisite में rename किया गया; text domain अपडेट किया गया; version bump।


- Version (2025-09-28): prefix को ultimate-multisite में rename किया गया; text domain अपडेट किया गया; version bump।
