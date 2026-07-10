---
title: Hostinger (hPanel) ইন্টিগ্ৰেচন
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ইন্টিগ্ৰেশ্যন {#hostinger-hpanel-integration}

## এক ঝলকে (Overview) {#overview}

Hostinger হৈছে এটা জনপ্রিয় web hosting প্ৰৱідাৰ যিটোৱে hPanel নামৰ এটা আধুনিক control panel ব্যৱহাৰ কৰে। Ultimate Multisite Hostinger ইন্টিগ্ৰেশ্যনটোৱে Ultimate Multisite আৰু Hostinger-ৰ hPanelৰ মাজত ডমেইনটো স্বয়ংক্রিয়ভাৱে সিঙ্কিং কৰাত সহায় কৰে। ইয়াৰ ফলত আপুনি নিজৰ WordPress adminৰ পৰাই ডমেইন ম্যাপিং (domain mappings) আৰু সাবডমেইন (subdomains) সহজে ব্যৱস্থাপনা কৰিব পাৰে।

## বৈশিষ্ট্যসমূহ (Features) {#features}

- hPanel-ত স্বয়ংক্রিয় addon domain সৃষ্টি।
- hPanel-ত স্বয়ংক্রিয় সাবডমেইন সৃষ্টি (সাবডমেইন মাল্টিসাইট ইনষ্টলেচনৰ বাবে)।
- ম্যাপিং ডিলিট কৰিলে ডমেইনটোও স্বয়ংক্রিয়ভাৱে আঁতৰাই দিয়া।
- hPanel-ৰ domain management API লগত নিৰৱচ্ছিন্ন ইন্টিগ্ৰেশ্যন।

## প্ৰয়োজনীয়তা (Requirements) {#requirements}

Hostinger ইন্টিগ্ৰেশ্যন ব্যৱহাৰ কৰিবলৈ, আপোনাৰ নিম্নলিখিতবোৰ প্ৰয়োজন:

1. hPanel অ্যাক্সেছ থকা এটা Hostinger একাউণ্ট।
2. Hostingerৰ পৰা এটা API টোকেন।
3. আপোনাৰ `wp-config.php` ফাইলত তলত দিয়া ধৰণৰ ধ্ৰুৱক (constants) সংজ্ঞায়িত কৰা:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ঐচ্ছিকভাৱে, আপুনি তলত দিয়াটোও সংজ্ঞায়িত কৰিব পাৰে:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // ডিফল্ট API endpoint
```

## সেটআপ নিৰ্দেশনা (Setup Instructions) {#setup-instructions}

### ১. আপোনাৰ Hostinger API টোকেন সৃষ্টি কৰক {#1-generate-your-hostinger-api-token}

1. আপোনাৰ Hostinger একাউণ্টত লগ ইন কৰক আৰু hPanel অ্যাক্সেছ কৰক।
2. **Account Settings** → **API Tokens** লৈ যোৱা।
3. **Create New Token** ক্লিক কৰক।
4. আপোনাৰ টোকেনলৈ এটা বৰ্ণনা কৰা নাম দিয়ক (উদাহৰণস্বৰূপে, "Ultimate Multisite")।
5. প্ৰয়োজনীয় অনুমতিসমূহ বাছি লওক:
   - Domain management
   - Subdomain management
6. সৃষ্টি কৰা টোকেনটো কপি কৰি ইয়াক নিৰাপদভাৱে সংৰক্ষণ কৰক।

### ২. আপোনাৰ একাউণ্ট ID বিচাৰক {#2-find-your-account-id}

1. hPanel-ত, **Account Settings** → **Account Information** লৈ যোৱা।
2. আপোনাৰ Account ID এই পৃষ্ঠাখনত প্ৰদৰ্শিত হ'ব।
3. এই ID টো কপি কৰি পৰৱৰ্তী পদক্ষেপৰ বাবে সংৰক্ষণ কৰক।

### ৩. wp-config.php ত ধ্ৰুৱক যোগ কৰক {#3-add-constants-to-wp-configphp}

আপোনাৰ `wp-config.php` ফাইলত তলত দিয়া ধৰণৰ ধ্ৰুৱক যোগ কৰক:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

যদি আপোনাৰ Hostinger একাউণ্টে বেলেগ API endpoint ব্যৱহাৰ কৰে, তেন্তে আপুনি ইয়াক কাস্টমাইজ কৰিব পাৰে:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ৪. ইন্টিগ্ৰেশ্যনটো সক্ষম কৰক {#4-enable-the-integration}

1. আপোনাৰ WordPress admin-ত, **Ultimate Multisite > Settings** লৈ যোৱা।
2. **Domain Mapping** টোৱে যোৱা।
3. **Host Integrations** লৈ তললৈ গলি যোৱা।
4. **Hostinger (hPanel)** ইন্টিগ্ৰেশ্যনটো সক্ষম কৰক।
5. **Save Changes** ক্লিক কৰক।

## ই কেনেকৈ কাম কৰে (How It Works) {#how-it-works}

### Addon Domains {#addon-domains}

যেতিয়া আপুনি Ultimate Multisite-ত এটা ডমেইন ম্যাপ কৰে:

1. ইন্টিগ্ৰেশ্যনটোৱে ডমেইনটো এটা addon domain হিচাপে যোগ কৰিবলৈ Hostinger-ৰ API লৈ এটা অনুৰোধ (request) প্ৰেণ কৰে।
2. ডমেইনটো আপোনাৰ root directory লৈ পয়েন্ট কৰিবলৈ কনফিগাৰ কৰা হয়।
3. যেতিয়া এটা ডমেইন ম্যাপিং আঁতৰাই দিয়া হয়, ইন্টিগ্ৰেশ্যনটোৱে স্বয়ংক্রিয়ভাৱে hPanelৰ পৰা addon domainটো আঁতৰাই দিয়ে।

### Subdomains {#subdomains}

সাবডমেইন মাল্টিসাইট ইনষ্টলেচনৰ বাবে, নতুন সাইট এটা সৃষ্টি কৰাৰ সময়ত:

1. ইন্টিগ্ৰেশ্যনটোৱে পূৰ্ণ ডমেইনৰ পৰা সাবডমেইন অংশটো নিষ্কাশন কৰে।
2. ই সাবডমেইনটো যোগ কৰিবলৈ Hostinger-ৰ API লৈ এটা অনুৰোধ প্ৰেণ কৰে।
3. সাবডমেইনটো আপোনাৰ root directory লৈ পয়েন্ট কৰিবলৈ কনফিগাৰ কৰা হয়।

## গুৰুত্বপূৰ্ণ টোকা (Important Notes) {#important-notes}

- ইন্টিগ্ৰেশ্যনটোৱে আপোনাৰ একাউণ্টৰ সৈতে যোগাযোগ কৰিবলৈ Hostinger-ৰ REST API ব্যৱহাৰ কৰে।
- আপোনাৰ API টোকেনত ডমেইন আৰু সাবডমেইন ব্যৱস্থাপনাৰ বাবে প্ৰয়োজনীয় অনুমতি থাকিব লাগিব।
- ইন্টিগ্ৰেশ্যনে DNS কনফিগাৰেচন (DNS configuration) ব্যৱহস্থ কৰে নাই; ডমেইনবোৰ ইতিমধ্যে আপোনাৰ Hostinger একাউণ্টলৈ পয়েন্ট কৰা থাকিব লাগিব।
- API অনুৰোধসমূহ HTTPS মাজেৰে নিৰাপদভাৱে কৰা হয়।
- আপোনাৰ API টোকেন নিৰাপদ ৰাখক আৰু ইয়াক কেতিয়াও জনপ্ৰিয়ভাৱে ভাগ নকৰিব।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API সংযোগ সমস্যা (API Connection Issues) {#api-connection-issues}

- পৰীক্ষা কৰক যে আপোনাৰ API টোকেনটো সঠিক আৰু মলাট (expired) হোৱা নাই।
- নিশ্চিত কৰক যে আপোনাৰ Account ID সঠিক।
- নিশ্চিত কৰক যে আপোনাৰ API টোকেনত ডমেইন ব্যৱস্থাপনাৰ বাবে প্ৰয়োজনীয় অনুমতি আছে।
- পৰীক্ষা কৰক যে আপোনাৰ Hostinger একাউণ্ট সক্ৰিয় আৰু ভাল অৱস্থাত আছে।

### ডমেইন যোগ নহ'ল (Domain Not Added) {#domain-not-added}

- কোনো ভুল বাণীবীক্ষণ (error messages) বিচাৰাবলৈ Ultimate Multisite logs পৰীক্ষা কৰক।
- পৰীক্ষা কৰক যে ডমেইনটো ইতিমধ্যে আপোনাৰ Hostinger একাউণ্টত যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ Hostinger একাউণ্ট addon domainৰ বাবে সীমা (limit) পাওঁনি।
- নিশ্চিত কৰক যে ডমেইনটো সঠিকভাৱে আপোনাৰ Hostinger nameservers লৈ পয়েন্ট কৰা আছে।

### SSL সার্টিফিকেট সমস্যা (SSL Certificate Issues) {#ssl-certificate-issues}

- ইন্টিগ্ৰেশ্যনে SSL সার্টিফিকেট জাৰী কৰা (issuance) ব্যৱস্থ কৰে নাই।
- Hostinger সাধাৰণতে AutoSSL মাজেৰে বিনামূলীয়া SSL সার্টিফিকেট প্ৰদান কৰে।
- আপুনি **SSL/TLS** তলত hPanel-ত পোনপটীয়াকৈ SSL সার্টিফিকেট ব্যৱস্থাপনা কৰিব পাৰে।
- বিকল্প হিচাপে, Hostinger-ৰ AutoSSL বৈশিষ্ট্যৰ সৈতে Let's Encrypt ব্যৱহাৰ কৰক।

## সহায় (Support) {#support}

Hostinger ইন্টিগ্ৰেশ্যনৰ বাবে অধিক সহায়ৰ বাবে, অনুগ্ৰহ কৰি তলত দিয়া স্থানসমূহলৈ চাওক:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
