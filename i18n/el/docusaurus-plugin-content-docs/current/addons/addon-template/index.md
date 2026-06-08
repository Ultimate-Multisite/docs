---
title: Επεκτατικό Πρότυπο
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Template Addon

{{ADDON_DESCRIPTION}}

## Απαιτήσεις

- WordPress 5.3 ή νεότερη έκδοση
- PHP 7.4 ή νεότερη έκδοση
- Plugin Ultimate Multisite (ενεργοποιημένο)

## Εγκατάσταση

1. Ανεβάστε τα αρχεία του addon στον κατάλογο `/wp-content/plugins/`
2. Ενεργοποιήστε το plugin μέσω του μενού 'Plugins' στο WordPress
3. Διαμορφώστε τις ρυθμίσεις του addon στον network admin

## Ανάπτυξη

### Ρύθμιση

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

### Δομή Έργου

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

### Δοκιμή (Testing)

Το addon περιλαμβάνει ένα ολοκληρωμένο πλαίσιο δοκιμών:

- **Unit Tests**: Δοκιμές βασισμένες στο PHPUnit με το WordPress test suite
- **Base Test Class**: Παρέχει βοηθητικές μεθόδους για συνηθισμένα σενάρια δοκιμών
- **Test Coverage**: Ρυθμισμένο για παρακολούθηση της κάλυψης του κώδικα
- **Multisite Testing**: Οι δοκιμές εκτελούνται σε περιβάλλον multisite

### Κωδικοί Κανονισμοί (Code Standards)

- **WordPress Coding Standards**: Εφαρμόζονται μέσω PHPCS
- **PHP 7.4+ Compatibility**: Υποστηρίζονται σύγχρονα χαρακτηριστικά PHP
- **Static Analysis**: Ενσωμάτωση PHPStan για έλεγχο τύπων (type checking)
- **Code Modernization**: Κανόνες Rector για αναβάθμιση PHP

### Σύστημα Build (Build System)

- **Asset Processing**: Minification για αρχεία CSS/JS
- **Translation**: Δημιουργία αρχείων POT
- **Packaging**: Δημιουργία αρχείου archive για κατανομή
- **Development Mode**: Αρχεία χωρίς minification για debugging

## Διαμόρφωση (Configuration)

Το addon υποστηρίζει διάφορες επιλογές διαμόρφωσης που είναι προσβάσιμες μέσω της διεπαφής του network admin.

## Hooks και Filters

### Actions

- `ultimate-multisite-addon-template_init` - Εκτελείται μετά την αρχικοποίηση του addon
- `ultimate-multisite-addon-template_loaded` - Εκτελείται μετά το φόρτωση όλων των αρχείων του addon

### Filters

- `ultimate-multisite-addon-template_settings` - Για τη τροποποίηση των ρυθμίσεων του addon
- `ultimate-multisite-addon-template_enabled` - Για την αντικατάσταση της κατάστασης ενεργοποίησης/απενεργοποίησης του addon

## Άδεια Χρήσης (License)

Αυτό το addon έχει άδεια χρήσης βάσει GPL v3 ή νεότερη.

## Υποστήριξη (Support)

Για υποστήριξη και τεκμηρίωση, επισκεφθείτε το [MultisiteUltimate.com](https://multisiteultimate.com)
## Changelog

- Version 1.0.1 (2025-09-28): ανατοπισμός prefix σε ultimate-multisite· ενημέρωση text domain· αύξηση έκδοσης.


- Version (2025-09-28): ανατοπισμός prefix σε ultimate-multisite· ενημέρωση text domain· αύξηση έκδοσης.
