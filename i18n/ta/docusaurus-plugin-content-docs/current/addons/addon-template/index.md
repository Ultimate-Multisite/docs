---
title: கூங்கொடை டெம்ப்ளேட்
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## தேவைகள் (Requirements)

- WordPress 5.3 அல்லது அதற்கு மேல்
- PHP 7.4 அல்லது அதற்கு மேல்
- Multisite Ultimate plugin (செயல்படுத்தப்பட்டிருக்க வேண்டும்)

## நிறுவுதல் (Installation)

1. addon கோப்புகளை உங்கள் `/wp-content/plugins/` கோப்பகத்தில் (directory) பதிவேற்றவும் (Upload).
2. WordPress-ல் உள்ள 'Plugins' மெனு வழியாக plugin-ஐ செயல்படுத்தவும் (Activate).
3. network admin-ல் addon அமைப்புகளை (settings) கட்டமைக்கவும் (Configure).

## மேம்பாடு (Development)

### அமைப்பு (Setup)

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

### திட்ட அமைப்பு (Project Structure)

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

### சோதனை (Testing)

இந்த addon ஒரு விரிவான சோதனை கட்டமைப்பைக் (comprehensive testing framework) கொண்டுள்ளது:

- **Unit Tests**: WordPress test suite உடன் PHPUnit அடிப்படையிலான சோதனைகள்.
- **Base Test Class**: பொதுவான சோதனை சூழ்நிலைகளுக்கான உதவி முறைகளை (helper methods) வழங்குகிறது.
- **Test Coverage**: குறியீட்டு கவரேஜை (code coverage) கண்காணிக்க அமைக்கப்பட்டுள்ளது.
- **Multisite Testing**: சோதனைகள் multisite சூழலில் இயக்கப்படும்.

### குறியீட்டு தரநிலைகள் (Code Standards)

- **WordPress Coding Standards**: PHPCS மூலம் செயல்படுத்தப்படுகிறது.
- **PHP 7.4+ Compatibility**: நவீன PHP அம்சங்கள் ஆதரிக்கப்படுகின்றன.
- **Static Analysis**: வகைச் சரிபார்ப்புக்கு (type checking) PHPStan ஒருங்கிணைப்பு.
- **Code Modernization**: PHP மேம்படுத்தலுக்கான Rector விதிகள்.

### Build System

- **Asset Processing**: CSS/JS கோப்புகளுக்கு சுருக்கம் (Minification).
- **Translation**: POT கோப்பு உருவாக்கம்.
- **Packaging**: விநியோகத்திற்காக ஆர்கைவ் உருவாக்கம்.
- **Development Mode**: பிழைத்திருத்தத்திற்காக சுருக்கப்படாத (Unminified) சொத்துக்கள்.

## உள்ளமைவு (Configuration)

இந்த addon, network admin இடைமுகம் வழியாக அணுகக்கூடிய பல்வேறு உள்ளமைவு விருப்பங்களை ஆதரிக்கிறது.

## Hooks மற்றும் Filters

### Actions (செயல்கள்)

- `ultimate-multisite-addon-template_init` - addon துவக்கப்பட்ட பிறகு இயக்கப்படும்.
- `ultimate-multisite-addon-template_loaded` - அனைத்து addon கோப்புகளும் ஏற்றப்பட்ட பிறகு இயக்கப்படும்.

### Filters (ஃபில்டர்கள்)

- `ultimate-multisite-addon-template_settings` - addon அமைப்புகளை மாற்றியமைக்க.
- `ultimate-multisite-addon-template_enabled` - addon இயக்க/முடக்க நிலையை மாற்றியமைக்க.

## உரிமம் (License)

இந்த addon GPL v3 அல்லது அதற்குப் பிந்தைய உரிமத்தின் கீழ் உரிமம் பெற்றுள்ளது.

## ஆதரவு (Support)

ஆதரவு மற்றும் ஆவணங்களுக்காக, [MultisiteUltimate.com](https://multisiteultimate.com)-ஐப் பார்க்கவும்.
## Changelog

- Version 1.0.1 (2025-09-28): prefix-ஐ ultimate-multisite என்று பெயர் மாற்றம்; text domain-ஐ புதுப்பித்தல்; version அதிகரிப்பு.


- Version (2025-09-28): prefix-ஐ ultimate-multisite என்று பெயர் மாற்றம்; text domain-ஐ புதுப்பித்தல்; version அதிகரிப்பு.
