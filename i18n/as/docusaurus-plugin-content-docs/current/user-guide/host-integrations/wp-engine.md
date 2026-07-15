---
title: WP Engine একীকরণ
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## সামগ্ৰিক ব্যৱস্থা (Overview) {#overview}
WP Engine হৈছে এটা প্ৰিমিয়াম ম্যনেজড WordPress হোস্টিং প্লেটফৰ্ম যিয়ে WordPress সাইটসমূহৰ বাবে অপটিমাইজড প্ৰফৰমেঞ্চ, সুৰক্ষা আৰু স্কেলিবিলিটি প্ৰদান কৰে। এই ইন্টিগ্ৰেচনটোৱে Ultimate Multisite আৰু WP Engine ৰ মাজত ডোমেইন স্বয়ংক্রিয়ভাৱে Sync কৰাত সহায় কৰে।

## বৈশিষ্ট্যসমূহ (Features) {#features}
- স্বয়ংক্রিয় ডোমেইন Syncing
- মাল্টিসাইট ইনষ্টলেচনৰ বাবে সাবডোমেইন সমৰ্থন (Subdomain support)
- WP Engine ৰ বিদ্যমান ব্যৱস্থাৰ সৈতে সহজে সংহতকৰণ (Seamless integration)

## প্ৰয়োজনীয়তা (Requirements) {#requirements}
এই ইন্টিগ্ৰেচনটোৱে স্বয়ংক্রিয়ভাৱে নিৰ্ণয় কৰে যে আপুনি WP Engine मा হোস্টিং কৰি আছে নেকি আৰু ইয়াৰ বাবে বিল্ট-ইন WP Engine API ব্যৱহাৰ কৰে। যদি WP Engine plugin active আৰু সঠিকভাৱে কনফিগাৰেট কৰা হৈ থাকে, তেন্তে কোনো এটা অতিৰিক্ত কনফিগাৰেচনৰ প্ৰয়োজন নহয়।

কিন্তু, যদি আপুনি ইন্টিগ্ৰেচনটো হাতেৰে কনফিগাৰেট কৰিবলগীয়া হয়, তেন্তে আপুনি এই ধ্ৰুৱকসমূহৰ (constants) ভিতৰত এটা `wp-config.php` ফাইলত সংজ্ঞায়িত কৰিব পাৰে:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## সেটআপ নিৰ্দেশনা (Setup Instructions) {#setup-instructions}

### ১. WP Engine Plugin পৰীক্ষা কৰক {#1-verify-wp-engine-plugin}

যদি আপুনি WP Engine मा হোস্টিং কৰি আছে, তেন্তে WP Engine plugin ইতিমধ্যে ইনষ্টল আৰু active হ'ব লাগিব। পৰীক্ষা কৰক যে:

১. WP Engine plugin active আছে।
২. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ফাইলটো বিদ্যমান।

### ২. ইন্টিগ্ৰেচনটো সক্ষম কৰক (Enable the Integration) {#2-enable-the-integration}

১. আপোনাৰ WordPress admin ত, Ultimate Multisite > Settings লৈ যাওক।
২. "Domain Mapping" ট্ৰি (tab) ত যাওক।
৩. "Host Integrations" লৈ তললৈ স্ক্রল কৰক।
৪. WP Engine ইন্টিগ্ৰেচনটো সক্ষম কৰক।
৫. "Save Changes" ক্লিক কৰক।

## ই কেনেকৈ কাম কৰে (How It Works) {#how-it-works}

### ডোমেইন Syncing (Domain Syncing) {#domain-syncing}

যদি Ultimate Multisite ত এটা ডোমেইন ম্যাপ কৰা হয়:

১. ইন্টিগ্ৰেচনটোৱে ডোমেইনটো WP Engine API ব্যৱহাৰ কৰি আপোনাৰ WP Engine ইনষ্টলেচনত যোগ কৰে।
২. WP Engine ডোমেইন কনফিগাৰেচন আৰু SSL সার্টিফিকেট জাৰী কৰে।
৩. যেতিয়া ডোমেইন ম্যপিংটো আঁতৰাই দিয়া হয়, ইন্টিগ্ৰেচনটোৱে WP Engine ৰ পৰা ডোমেইনটো আঁতৰাই দিয়ে।

### সাবডোমেইন সমৰ্থন (Subdomain Support) {#subdomain-support}

সাবডোমেইন মাল্টিসাইট ইনষ্টলেচনৰ বাবে:

১. নতুন সাইট এটা সৃষ্টি কৰাৰ সময়ত ইন্টিগ্ৰেচনটোৱে প্ৰতিটো সাবডোমেইন WP Engine লৈ যোগ কৰে।
২. WP Engine সাবডোমেইন কনফিগাৰেচনটো সামলায়।
৩. যেতিয়া এটা সাইট डिलিট কৰা হয়, ইন্টিগ্ৰেচনটোৱে WP Engine ৰ পৰা সাবডোমেইনটো আঁতৰাই দিয়ে।

## গুৰুত্বপূৰ্ণ টোকা (Important Notes) {#important-notes}

### Wildcard Domains {#wildcard-domains}
সাবডোমেইন মাল্টিসাইট ইনষ্টলেচনৰ বাবে, এটা Wildcard domain কনফিগাৰেচন বিচাৰি WP Engine support লৈ যোগাযোগ কৰাটো বাঞ্ছনীয়। ইয়াৰ ফলত প্ৰতিটো সাবডোমেইন একেবাৰে পৃথককৈ যোগ কৰাৰ প্ৰয়োজন নোহোৱাকৈ সকলো সাবডোমেইন স্বয়ংক্রিয়ভাৱে কাম কৰিব পাৰে।

### SSL Certificates {#ssl-certificates}
এই ইন্টিগ্ৰেচনৰ জৰিয়তে যোগ কৰা সকলো ডোমেইনৰ বাবে WP Engine স্বয়ংক্রিয়ভাৱে SSL সার্টিফিকেট জাৰী কৰে আৰু পুনৰীক্ষণ (renewal) কৰে। কোনো অতিৰিক্ত কনফিগাৰেচনৰ প্ৰয়োজন নহয়।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API সংযোগ সমস্যা (API Connection Issues) {#api-connection-issues}
- পৰীক্ষা কৰক যে WP Engine plugin active আৰু সঠিকভাৱে কনফিগাৰেট কৰা হৈছে।
- যদি আপুনি API key হাতেৰে সংজ্ঞায়িত কৰিছে, তেন্তে ইয়াক সঠিক বুলি পৰীক্ষা কৰক।
- যদি আপুনি API লগত কোনো সমস্যা অনুভৱ কৰে, তেন্তে WP Engine support লৈ যোগাযোগ কৰক।

### ডোমেইন যোগ নহ'ল (Domain Not Added) {#domain-not-added}
- কোনো এটা error message বা ভুলৰ বাবে Ultimate Multisite logs পৰীক্ষা কৰক।
- পৰীক্ষা কৰক যে ডোমেইনটো ইতিমধ্যে WP Engine ত যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ WP Engine plan ত আপুনি যোগ কৰা ডোমেইনৰ সংখ্যা সমৰ্থন কৰে।

### সাবডোমেইন সমস্যা (Subdomain Issues) {#subdomain-issues}
- যদি সাবডোমেইনবোৰ কাম নকৰে, তেন্তে এটা Wildcard domain কনফিগাৰেচন বিচাৰি WP Engine support লৈ যোগাযোগ কৰক।
- পৰীক্ষা কৰক যে আপোনাৰ DNS settings মূল ডোমেইন আৰু সাবডোমেইনসমূহৰ বাবে সঠিকভাৱে কনফিগাৰেট কৰা হৈছে।
