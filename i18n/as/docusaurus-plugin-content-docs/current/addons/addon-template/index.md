---
title: Addon Template
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# Addon Template

{{ADDON_DESCRIPTION}}

## প্ৰয়োজনীয়তা (Requirements)

- WordPress ৫.৩ বা তাৰ অধিক
- PHP ৭.৪ বা তাৰ অধিক
- Multisite Ultimate plugin (সক্ৰিয়)

## স্থাপন (Installation)

১. addon ফাইলবোৰ আপোনাৰ `/wp-content/plugins/` ডাইৰেক্টৰীত আপলোড কৰক।
২. WordPress-ৰ 'Plugins' মেনুৰ মাজেৰে plugin টি সক্ৰিয় কৰক।
৩. নেটৱৰ্ক এডমিনত addon ছেটিংবোৰ কনফিগাৰ কৰক।

## বিকাশ (Development)

### সেটআপ (Setup)

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

### প্ৰজেক্টৰ গঠন (Project Structure)

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

### পৰীক্ষা (Testing)

এই addon ত এটা সম্পূৰ্ণ পৰীক্ষাৰ কাঠামো (testing framework) অন্তৰ্ভুক্ত কৰা হৈছে:

- **Unit Tests**: WordPress test suite লৈ PHPUnit-ভিত্তিক পৰীক্ষা।
- **Base Test Class**: সাধাৰণ পৰীক্ষাৰ পৰিস্থিতিৰ বাবে সহায়ক পদ্ধতি (helper methods) প্ৰদান কৰে।
- **Test Coverage**: কোড কভাৰেজ (code coverage) ট্ৰেক কৰিবলৈ কনফিগাৰ কৰা হৈছে।
- **Multisite Testing**: এই পৰীক্ষাসমূহক multisite পৰিৱেশত চલા位 কৰা হয়।

### কোড মানদণ্ড (Code Standards)

- **WordPress Coding Standards**: PHPCS ৰ জৰিয়তে বলবৎ কৰা হয়।
- **PHP ৭.৪+ সামঞ্জস্যতা (Compatibility)**: আধুনিক PHP বৈশিষ্ট্যসমূহ সমৰ্থন কৰে।
- **Static Analysis**: টাইপ চেকিংৰ বাবে PHPStan ইন্টিগ্ৰেচন।
- **Code Modernization**: PHP আপগ্রেডৰ বাবে Rector নিয়ম।

### বিল্ড ছিষ্টেম (Build System)

- **Asset Processing**: CSS/JS ফাইলৰ বাবে মিনিফিকাচন (Minification)।
- **Translation**: POT ফাইলৰ সৃষ্টি।
- **Packaging**: বিতৰণৰ বাবে আৰ্কাইভ সৃষ্টি।
- **Development Mode**: ডিবাগিংৰ বাবে মিনিফিকা নোহোৱা সম্পদ (Unminified assets)।

## কনফিগাৰেশ্যন (Configuration)

এই addon ত নেটৱৰ্ক এডমিন ইন্টাৰফেচৰ মাজেৰে উপলব্ধ বিভিন্ন কনফিগাৰেশ্যন বিকল্প সমৰ্থন কৰে।

## Hooks and Filters

### Actions

- `ultimate-multisite-addon-template_init` - addon ইনিশ্বিয়ালাইজেশ্যন হোৱাৰ পিছত ট্ৰিগাৰ হয়।
- `ultimate-multisite-addon-template_loaded` - সকলো addon ফাইল লোড হোৱাৰ পিছত ট্ৰিগাৰ হয়।

### Filters

- `ultimate-multisite-addon-template_settings` - addon ছেটিংছ সলনি কৰিবলৈ।
- `ultimate-multisite-addon-template_enabled` - addon সক্ষম/নিষ্ক্ষম স্থিতি (status) ওপৰত কাৰ্য কৰিবলৈ।

## লাইচেঞ্চ (License)

এই addon টি GPL v3 বা তাৰ অধিকৰ অধীনত লাইচেঞ্চ কৰা হৈছে।

## সহায় (Support)

সহায় আৰু ডকুমেন্টেশ্যনৰ বাবে, [MultisiteUltimate.com](https://multisiteultimate.com) লভিজিট কৰক।
## Changelog

- Version 1.0.1 (2025-09-28): prefix लाई ultimate-multisite লৈ নাম সলনি কৰা হ'ল; text domain আপডেট কৰা হ'ল; version বৃদ্ধি কৰা হ'ল।


- Version (2025-09-28): prefix लाई ultimate-multisite লৈ নাম সলনি কৰা হ'ল; text domain আপডেট কৰা হ'ল; version বৃদ্ধি কৰা হ'ল।
