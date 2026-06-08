---
title: अ‍ॅडऑन टेम्पलेट
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## Requirements

- WordPress 5.3 किंवा त्याहून अधिक
- PHP 7.4 किंवा त्याहून अधिक
- Multisite Ultimate plugin (सक्रिय)

## Installation

1. ॲडऑन फाइल्स तुमच्या `/wp-content/plugins/` डिरेक्टरीमध्ये अपलोड करा
2. WordPress मधील 'Plugins' मेनूद्वारे प्लगइन सक्रिय करा
3. नेटवर्क ॲडमिनमध्ये ॲडऑनची सेटिंग्ज कॉन्फिगर करा

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

ॲडऑनमध्ये एक सर्वसमावेशक टेस्टिंग फ्रेमवर्क (testing framework) समाविष्ट आहे:

- **Unit Tests**: WordPress test suite सह PHPUnit-आधारित टेस्ट्स
- **Base Test Class**: सामान्य टेस्ट परिस्थितींसाठी मदतनीस मेथड्स (helper methods) पुरवते
- **Test Coverage**: कोड कव्हरेज (code coverage) ट्रॅक करण्यासाठी कॉन्फिगर केले आहे
- **Multisite Testing**: टेस्ट्स मल्टीसाइट वातावरणात चालतात

### Code Standards

- **WordPress Coding Standards**: PHPCS द्वारे लागू केले जातात
- **PHP 7.4+ Compatibility**: आधुनिक PHP वैशिष्ट्ये समर्थित आहेत
- **Static Analysis**: टाइप चेकिंगसाठी PHPStan इंटिग्रेशन
- **Code Modernization**: PHP अपग्रेडसाठी Rector नियम

### Build System

- **Asset Processing**: CSS/JS फाइल्ससाठी मिनिफिकेशन (Minification)
- **Translation**: POT फाइल जनरेशन
- **Packaging**: वितरणासाठी आर्काइव्ह (Archive) तयार करणे
- **Development Mode**: डीबगिंगसाठी अनमिनिफाइड ॲसेट्स (Unminified assets)

## Configuration

ॲडऑन नेटवर्क ॲडमिन इंटरफेसद्वारे उपलब्ध असलेल्या विविध कॉन्फिगरेशन पर्याय (configuration options) समर्थन करते.

## Hooks and Filters

### Actions

- `ultimate-multisite-addon-template_init` - ॲडऑन सुरू झाल्यावर ट्रिगर होते
- `ultimate-multisite-addon-template_loaded` - सर्व ॲडऑन फाइल्स लोड झाल्यावर ट्रिगर होते

### Filters

- `ultimate-multisite-addon-template_settings` - ॲडऑन सेटिंग्जमध्ये बदल करण्यासाठी
- `ultimate-multisite-addon-template_enabled` - ॲडऑन सक्षम/अक्षम स्थिती (enable/disable status) ओव्हरराईड करण्यासाठी

## License

हा ॲडऑन GPL v3 किंवा त्यापुढील अंतर्गत परवानाकृत (licensed) आहे.

## Support

समर्थन आणि दस्तऐवजीकरणासाठी (documentation), [MultisiteUltimate.com](https://multisiteultimate.com) ला भेट द्या
## Changelog

- Version 1.0.1 (2025-09-28): prefix 'ultimate-multisite' मध्ये बदल केला; text domain अपडेट केला; व्हर्जन वाढवले.


- Version (2025-09-28): prefix 'ultimate-multisite' मध्ये बदल केला; text domain अपडेट केला; व्हर्जन वाढवले.
