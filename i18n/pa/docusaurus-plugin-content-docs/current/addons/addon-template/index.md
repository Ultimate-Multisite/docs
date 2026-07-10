---
title: Addon Template
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template {#addon-template}

{{ADDON_DESCRIPTION}}

## ਲੋੜਾਂ (Requirements) {#requirements}

- WordPress 5.3 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ
- PHP 7.4 ਜਾਂ ਇਸ ਤੋਂ ਵੱਧ
- Multisite Ultimate plugin (active)

## ਇੰਸਟਾਲੇਸ਼ਨ (Installation) {#installation}

1. ਐਡਨ ਫਾਈਲਾਂ ਨੂੰ ਆਪਣੀ `/wp-content/plugins/` ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਅਪਲੋਡ ਕਰੋ।
2. WordPress ਵਿੱਚ 'Plugins' ਮੀਨੂ ਰਾਹੀਂ plugin ਨੂੰ ਐਕਟਿਵੇਟ ਕਰੋ।
3. ਨੈੱਟਵਰਕ ਐਡਮਿਨ ਵਿੱਚ ਐਡਨ ਸੈਟਿੰਗਜ਼ ਨੂੰ ਕਨਫਿਗਰ ਕਰੋ।

## ਡਿਵੈਲਪਮੈਂਟ (Development) {#development}

### ਸੈਟਅਪ (Setup) {#setup}

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

### ਪ੍ਰੋਜੈਕਟ ਸਟ੍ਰਕਚਰ (Project Structure) {#project-structure}

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

### ਟੈਸਟਿੰਗ (Testing) {#testing}

ਇਸ ਐਡਨ ਵਿੱਚ ਇੱਕ ਪੂਰਾ ਟੈਸਟਿੰਗ ਫਰੇਮਵਰਕ ਸ਼ਾਮਲ ਹੈ:

- **Unit Tests**: WordPress test suite ਨਾਲ PHPUnit-ਆਧਾਰਿਤ ਟੈਸਟ।
- **Base Test Class**: ਆਮ ਟੈਸਟ ਸਿਨੈਰੀਓਜ਼ ਲਈ ਹੈਲਪਰ ਮੈਥਡਜ਼ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।
- **Test Coverage**: ਕੋਡ ਕਵਰੇਜ ਨੂੰ ਟਰੈਕ ਕਰਨ ਲਈ ਕਨਫਿਗਰ ਕੀਤਾ ਗਿਆ।
- **Multisite Testing**: ਟੈਸਟ multisite environment ਵਿੱਚ ਚੱਲਦੇ ਹਨ।

### ਕੋਡ ਸਟੈਂਡਰਡਜ਼ (Code Standards) {#code-standards}

- **WordPress Coding Standards**: PHPCS ਰਾਹੀਂ ਲਾਗੂ ਕੀਤੇ ਗਏ।
- **PHP 7.4+ Compatibility**: ਆਧੁਨਿਕ PHP ਫੀਚਰ ਸਪੋਰਟ ਕੀਤੇ ਗਏ।
- **Static Analysis**: type checking ਲਈ PHPStan ইন্ਟੀਗ੍ਰੇਸ਼ਨ।
- **Code Modernization**: PHP ਅਪਗ੍ਰੇਡ ਲਈ Rector ਨਿਯਮ।

### ਬਿਲਡ ਸਿਸਟਮ (Build System) {#build-system}

- **Asset Processing**: CSS/JS ਫਾਈਲਾਂ ਲਈ ਮਿਨੀਫਾਈਕੇਸ਼ਨ।
- **Translation**: POT ਫਾਈਲ ਜਨਰੇਸ਼ਨ।
- **Packaging**: ਡਿਸਟ੍ਰੀਬਿਊਸ਼ਨ ਲਈ ਆਰਕਾਈਵ ਕ੍ਰिएशन।
- **Development Mode**: ਡੀਬੱਗਿੰਗ ਲਈ Unminified assets।

## ਕਨਫਿਗਰੇਸ਼ਨ (Configuration) {#configuration}

ਇਹ ਐਡਨ ਨੈੱਟਵਰਕ ਐਡਮਿਨ ਇੰਟਰਫੇਸ ਰਾਹੀਂ ਪਹੁੰਚਣ ਵਾਲੇ ਕਈ ਕਨਫਿਗਰੇਸ਼ਨ ਆਪਸ਼ਨ ਸਪੋਰਟ ਕਰਦਾ ਹੈ।

## ਹੁੱਕਸ ਅਤੇ ਫਿਲਟਰਸ (Hooks and Filters) {#hooks-and-filters}

### Actions {#actions}

- `ultimate-multisite-addon-template_init` - ਐਡਨ ਇਨੀਸ਼ੀਅਲਾਈਜ਼ ਹੋਣ ਤੋਂ ਬਾਅਦ ਚੱਲਦਾ ਹੈ।
- `ultimate-multisite-addon-template_loaded` - ਸਾਰੇ ਐਡਨ ਫਾਈਲਾਂ ਲੋਡ ਹੋਣ ਤੋਂ ਬਾਅਦ ਚੱਲਦਾ ਹੈ।

### Filters {#filters}

- `ultimate-multisite-addon-template_settings` - ਐਡਨ ਸੈਟਿੰਗਜ਼ ਨੂੰ ਮੋਡੀਫਾਈ ਕਰਦਾ ਹੈ।
- `ultimate-multisite-addon-template_enabled` - ਐਡਨ ਦੇ enable/disable ਸਟੇਟਸ ਨੂੰ ਓਵਰਰਾਈਡ ਕਰਦਾ ਹੈ।

## ਲਾਇਸੈਂਸ (License) {#license}

ਇਹ ਐਡਨ GPL v3 ਜਾਂ ਇਸ ਤੋਂ ਬਾਅਦ ਦੇ ਲਾਇਸੈਂਸ ਹੇਠ ਲਾਇਸੈਂਸ ਕੀਤਾ ਗਿਆ ਹੈ।

## ਸਪੋਰਟ (Support) {#support}

ਸਪੋਰਟ ਅਤੇ ਡਾਕੂਮੈਂਟੇਸ਼ਨ ਲਈ, [MultisiteUltimate.com](https://multisiteultimate.com) 'ਤੇ ਜਾਓ।
## ਚੇਂਜਲੌਗ (Changelog) {#changelog}

- Version 1.0.1 (2025-09-28): prefix ਨੂੰ ultimate-multisite ਵਿੱਚ rename ਕੀਤਾ; text domain ਨੂੰ update ਕੀਤਾ; version bump।


- Version (2025-09-28): prefix ਨੂੰ ultimate-multisite ਵਿੱਚ rename ਕੀਤਾ; text domain ਨੂੰ update ਕੀਤਾ; version bump।
