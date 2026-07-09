---
title: ServerPilot সংহতিকৰণ
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ইন্টিগ্ৰেচন {#serverpilot-integration}

## সামগ্ৰিক আভাস (Overview) {#overview}
ServerPilot হৈছে DigitalOcean, Amazon, Google, বা আন কোনো সার্ভার প্ৰোভাইডৰৰ সার্ভৰত WordPress আৰু আন PHP ওয়েবসাইট হোষ্ট কৰাৰ বাবে এটা ক্লাউড সেৱা। এই ইন্টিগ্ৰেচনটোৱে Ultimate Multisite আৰু ServerPilotৰ মাজত স্বয়ংক্রিয় ডোমেইন Syncing আৰু SSL সার্টিফিকেট ব্যৱস্থাপনা (management) সক্ষম কৰে।

## বৈশিষ্ট্যসমূহ (Features) {#features}
- স্বয়ংক্রিয় ডোমেইন Syncing
- Let's Encrypt ব্যৱহাৰ কৰি SSL সার্টিফিকেট ব্যৱস্থাপনা
- স্বয়ংক্রিয় SSL পুনৰীক্ষণ (renewal)

## প্ৰয়োজনীয়তা (Requirements) {#requirements}
আপোনাৰ `wp-config.php` ফাইলত তলৰ ধ্ৰুৱক (constants) সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## সেটআপ কৰাৰ পদ্ধতি (Setup Instructions) {#setup-instructions}

### ১. আপোনাৰ ServerPilot API Credentials লাভ কৰক {#1-get-your-serverpilot-api-credentials}

১. আপোনাৰ ServerPilot ড্যাশবৰ্ডলৈ লগ ইন কৰক
২. "Account" > "API" লৈ যাওক
৩. যদি আপোনাৰ ইতিমধ্যে কোনো API key নাই, তেন্তে এটা নতুন API key সৃষ্টি কৰক
৪. আপোনাৰ Client ID আৰু API Key কপি কৰক

### ২. আপোনাৰ App ID লাভ কৰক {#2-get-your-app-id}

১. আপোনাৰ ServerPilot ড্যাশবৰ্ডত, "Apps" লৈ যাওক
২. য'ত আপোনাৰ WordPress multisite হোষ্ট কৰা আছে, সেই App টি বাছি লওক
৩. App ID টি URL ত দেখা যায়: `https://manage.serverpilot.io/apps/{APP_ID}`

### ৩. wp-config.php ত ধ্ৰুৱক যোগ কৰক {#3-add-constants-to-wp-configphp}

তলৰ ধ্ৰুৱকসমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰক:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ৪. ইন্টিগ্ৰেচনটো সক্ষম কৰক {#4-enable-the-integration}

১. আপোনাৰ WordPress admin ত, Ultimate Multisite > Settings লৈ যাওক
২. "Domain Mapping" টোৱেৰে লৈ যাওক
৩. "Host Integrations" লৈ তললৈ নামি যাওক
৪. ServerPilot ইন্টিগ্ৰেচনটো সক্ষম কৰক
৫. "Save Changes" ক্লিক কৰক

## ই কেনেকৈ কাম কৰে (How It Works) {#how-it-works}

### ডোমেইন Syncing (Domain Syncing) {#domain-syncing}

যদি Ultimate Multisite ত এটা ডোমেইন ম্যাপ কৰা হয়:

১. ইন্টিগ্ৰেচনটোৱে ServerPilotৰ পৰা ডোমেইনৰ বৰ্তমানৰ তালিকাখন লৈ আহে
২. ই নতুন ডোমেইনটো তালিকাখনত যোগ কৰে (যদি প্ৰযোজ্য হয় তেন্তে www সংস্কৰণৰ সৈতে)
৩. ই আপডেট কৰা তালিকাখন API মাজেৰে ServerPilotলৈ প্ৰেণ কৰে
৪. ServerPilot আপোনাৰ অ্যাপ্লিকেশনৰ বাবে ডোমেইন তালিকাখন আপডেট কৰে

### SSL সার্টিফিকেট ব্যৱস্থাপনা (SSL Certificate Management) {#ssl-certificate-management}

ডোমেইন Sync হোৱাৰ পিছত:

১. ইন্টিগ্ৰেচনটোৱে স্বয়ংক্রিয়ভাৱে আপোনাৰ অ্যাপ্লিকেশনৰ বাবে AutoSSL সক্ষম কৰে
২. ServerPilot Let's Encrypt ব্যৱহাৰ কৰি SSL সার্টিফিকেট জাৰি কৰা আৰু স্থাপন কৰাৰ দায়িত্ব লয়
৩. ServerPilot SSL সার্টিফিকেটসমূহৰ স্বয়ংক্রিয় পুনৰীক্ষণৰো দায়িত্ব লয়

## SSL সার্টিফিকেট প্ৰমাণীকৰণ (SSL Certificate Verification) {#ssl-certificate-verification}

ServerPilot-ৰ বাবে SSL সার্টিফিকেট প্ৰমাণীকৰণৰ চেষ্টাৰ সংখ্যা বৃদ্ধি কৰিবলৈ ইন্টিগ্ৰেচনটো কনফিগাৰেট কৰা হৈছে, কাৰণ ServerPilot-ৰ বাবে SSL সার্টিফিকেট জাৰি কৰা আৰু স্থাপন কৰাত কিছু সময় লাগিব পাৰে। ডিফল্টভাৱে, ই ৫ বৰযন্তৰ চেষ্টা কৰিব, কিন্তু এইটো ফিল্টাৰ (filters) ব্যৱহাৰ কৰি পৰিষ্কাৰ কৰিব পাৰি।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API সংযোগ সমস্যা (API Connection Issues) {#api-connection-issues}
- নিশ্চিত কৰক যে আপোনাৰ Client ID আৰু API Key সঠিক।
- পৰীক্ষা কৰক যে আপোনাৰ App ID সঠিক।
- নিশ্চিত কৰক যে আপোনাৰ ServerPilot একাউণ্টত প্ৰয়োজনীয় অনুমতি (permissions) আছে।

### SSL সার্টিফিকেট সমস্যা (SSL Certificate Issues) {#ssl-certificate-issues}
- SSL সার্টিফিকেট জাৰি কৰাৰ আগতে ServerPilot-ৰ বাবে ডোমেইনসমূহে আপোনাৰ সার্ভৰলৈ বৈধ DNS record থকাটো প্ৰয়োজন।
- যদি SSL সার্টিফিকেট জাৰি নহয়, তেন্তে পৰীক্ষা কৰক যে আপোনাৰ ডোমেইনসমূহ সঠিকভাৱে আপোনাৰ সার্ভৰৰ IP address লৈ আঙুলিয়াই আছে নেকি।
- ServerPilot-ৰ বাবে SSL সার্টিফিকেট জাৰি কৰা আৰু স্থাপন কৰাত কিছু সময় লাগিব পাৰে (সাধাৰণতে ৫-১৫ মিনিট)।

### ডোমেইন যোগ নহ'লে (Domain Not Added) {#domain-not-added}
- কোনো ভুল বাণীবীক্ষণ (error messages) পোৱাৰ বাবে Ultimate Multisite logs পৰীক্ষা কৰক।
- নিশ্চিত কৰক যে ডোমেইনটো ইতিমধ্যে ServerPilotত যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ ServerPilot plan ত আপুনি যোগ কৰা ডোমেইনৰ সংখ্যা সমৰ্থন কৰে।

### ডোমেইন আঁতৰোৱা (Domain Removal) {#domain-removal}
- বৰ্তমান, ServerPilot API ত এটা এটা ডোমেইন আঁতৰোৱাৰ কোনো উপায় নাই।
- যদি Ultimate Multisite ত ডোমেইন ম্যপিং আঁতৰোৱা হয়, তেন্তে ইন্টিগ্ৰেচনটোৱে আঁতৰোৱা ডোমেইনটো বাদ দি ServerPilotত ডোমেইন তালিকাখন আপডেট কৰিব।
