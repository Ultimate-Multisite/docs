---
title: অ্যাডঅন টেমপ্লেট
sidebar_position: 1
_i18n_hash: 8036666d38c392e40bfedcdc73a73c2a
---
# অ্যাডন টেমপ্লেট {#addon-template}

{{ADDON_DESCRIPTION}}

## প্রয়োজনীয়তা (Requirements) {#requirements}

- WordPress ৫.৩ বা তার পরবর্তী সংস্করণ
- PHP ৭.৪ বা তার পরবর্তী সংস্করণ
- Multisite Ultimate প্লাগইন (সক্রিয় থাকতে হবে)

## ইনস্টলেশন (Installation) {#installation}

১. অ্যাডন ফাইলগুলো আপনার `/wp-content/plugins/` ডিরেক্টরিতে আপলোড করুন।
২. ওয়ার্ডপ্রেসের 'Plugins' মেনু থেকে প্লাগইনটি সক্রিয় করুন।
৩. নেটওয়ার্ক অ্যাডমিনে অ্যাডন সেটিংস কনফিগার করুন।

## ডেভেলপমেন্ট (Development) {#development}

### সেটআপ (Setup) {#setup}

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

### প্রজেক্ট স্ট্রাকচার (Project Structure) {#project-structure}

```
ultimate-multisite-addon-template/
├── inc/                          # PHP ক্লাস এবং ইনক্লুড ফাইল
│   ├── class-multisite-ultimate-updater.php  # আপডেট হ্যান্ডলার
│   └── class-{{ADDON_SLUG_UNDERSCORE}}-main.php             # মূল কার্যকারিতা
├── tests/                        # ইউনিট টেস্ট
│   ├── bootstrap.php            # টেস্ট বুটস্ট্র্যাপ
│   ├── class-*-base.php         # বেস টেস্ট ক্লাস
│   └── class-*-test.php         # টেস্ট কেস
├── views/                       # টেমপ্লেট ফাইল
├── assets/                      # স্ট্যাটিক অ্যাসেট
│   ├── css/                     # স্টাইলশীট
│   ├── js/                      # জাভাস্ক্রিপ্ট ফাইল
│   └── images/                  # ছবি
├── lang/                        # ভাষা ফাইল
├── composer.json                # PHP নির্ভরতা (dependencies)
├── package.json                 # Node.js নির্ভরতা (dependencies)
├── phpunit.xml.dist             # PHPUnit কনফিগারেশন
├── .phpcs.xml.dist              # কোড স্ট্যান্ডার্ড কনফিগারেশন
└── rector.php                   # কোড আধুনিকীকরণের নিয়মাবলী
```

### টেস্টিং (Testing) {#testing}

এই অ্যাডনটিতে একটি সম্পূর্ণ টেস্টিং ফ্রেমওয়ার্ক রয়েছে:

- **ইউনিট টেস্ট (Unit Tests)**: ওয়ার্ডপ্রেস টেস্ট স্যুট সহ PHPUnit-ভিত্তিক টেস্ট।
- **বেস টেস্ট ক্লাস (Base Test Class)**: সাধারণ টেস্ট পরিস্থিতির জন্য সহায়ক পদ্ধতি (helper methods) সরবরাহ করে।
- **টেস্ট কভারেজ (Test Coverage)**: কোড কভারেজ ট্র্যাক করার জন্য কনফিগার করা হয়েছে।
- **মাল্টিসাইট টেস্টিং (Multisite Testing)**: মাল্টিসাইট পরিবেশে টেস্টগুলো চলে।

### কোড স্ট্যান্ডার্ডস (Code Standards) {#code-standards}

- **WordPress Coding Standards**: PHPCS এর মাধ্যমে প্রয়োগ করা হয়।
- **PHP ৭.৪+ সামঞ্জস্যতা (Compatibility)**: আধুনিক PHP বৈশিষ্ট্যগুলো সমর্থন করে।
- **স্ট্যাটিক অ্যানালাইসিস (Static Analysis)**: টাইপ চেকিংয়ের জন্য PHPStan ইন্টিগ্রেশন।
- **কোড আধুনিকীকরণ (Code Modernization)**: PHP আপগ্রেডের জন্য Rector নিয়মাবলী।

### বিল্ড সিস্টেম (Build System) {#build-system}

- **অ্যাসেট প্রসেসিং (Asset Processing)**: CSS/JS ফাইলগুলোর জন্য মিনিফিকেশন।
- **অনুবাদ (Translation)**: POT ফাইল তৈরি।
- **প্যাকেজিং (Packaging)**: বিতরণের জন্য আর্কাইভ তৈরি।
- **ডেভেলপমেন্ট মোড (Development Mode)**: ডিবাগিংয়ের জন্য মিনিফাই না করা অ্যাসেট।

## কনফিগারেশন (Configuration) {#configuration}

এই অ্যাডনটি নেটওয়ার্ক অ্যাডমিন ইন্টারফেসের মাধ্যমে অ্যাক্সেস করা বিভিন্ন কনফিগারেশন অপশন সমর্থন করে।

## হুকস এবং ফিল্টার (Hooks and Filters) {#hooks-and-filters}

### অ্যাকশনস (Actions) {#actions}

- `ultimate-multisite-addon-template_init` - অ্যাডন ইনিশিয়ালাইজ হওয়ার পরে এটি ফায়ার হয়।
- `ultimate-multisite-addon-template_loaded` - সমস্ত অ্যাডন ফাইল লোড হওয়ার পরে এটি ফায়ার হয়।

### ফিল্টারস (Filters) {#filters}

- `ultimate-multisite-addon-template_settings` - অ্যাডন সেটিংস পরিবর্তন করতে ব্যবহৃত হয়।
- `ultimate-multisite-addon-template_enabled` - অ্যাডন সক্রিয়/নিষ্ক্রিয় অবস্থা ওভাররাইড করতে ব্যবহৃত হয়।

## লাইসেন্স (License) {#license}

এই অ্যাডনটি GPL v3 বা তার পরবর্তী সংস্করণের অধীনে লাইসেন্সপ্রাপ্ত।

## সাপোর্ট (Support) {#support}

সাপোর্ট এবং ডকুমেন্টেশনের জন্য, ভিজিট করুন [MultisiteUltimate.com](https://multisiteultimate.com)
## চেঞ্জলগ (Changelog) {#changelog}

- Version 1.0.1 (2025-09-28): প্রিফিক্স ultimate-multisite এ পরিবর্তন; টেক্সট ডোমেইন আপডেট; সংস্করণ বৃদ্ধি।


- Version (2025-09-28): প্রিফিক্স ultimate-multisite এ পরিবর্তন; টেক্সট ডোমেইন আপডেট; সংস্করণ বৃদ্ধি।
