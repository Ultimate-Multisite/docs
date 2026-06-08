---
title: ডেভেলপার ডকুমেন্টেশন
sidebar_position: 1
_i18n_hash: 93892019464929842d9a6f4fdfdecbe7
---
# ডেভেলপার ডকুমেন্টেশন

এই গাইডটি Ultimate Multisite-এর সাথে ইন্টিগ্রেট করতে, এক্সটেন্ড করতে বা এর জন্য অ্যাডন তৈরি করতে ডেভেলপারদের জন্য প্রয়োজনীয় সবকিছু সরবরাহ করে। Ultimate Multisite একটি WordPress Multisite নেটওয়ার্ককে একটি ওয়েবসাইট-হিস-এ-সার্ভিস (WaaS) প্ল্যাটফর্মে রূপান্তরিত করে।

## কী কী উপলব্ধ

- **[REST API](./rest-api/overview)** — সমস্ত এনটিটি (গ্রাহক, সাইট, মেম্বারশিপ, পেমেন্ট, পণ্য, ডোমেইন) এর জন্য সম্পূর্ণ CRUD অপারেশন, API কী অথেন্টিকেশন সহ।
- **[Hooks Reference](./hooks/guide)** — লাইফসাইকেল ইভেন্ট এবং কাস্টমাইজেশনের জন্য ২০০+ অ্যাকশন হুক এবং ২৮০+ ফিল্টার হুক।
- **[Integration Guide](./integration-guide/)** — CRM ইন্টিগ্রেশন, অ্যানালিটিক্স, কাস্টম গেটওয়ে এবং ওয়েবহুকগুলির উদাহরণ।
- **[Code Examples](./code-examples/)** — ডাইনামিক প্রাইসিং, সাইট প্রভিশনিং, কাস্টম লিমিটেশন এবং মাল্টি-গেটওয়ে প্রসেসিং-এর জন্য অ্যাডভান্সড প্যাটার্ন।
- **[Addon Development](./addon-development/getting-started)** — অ্যাডন প্লাগইন তৈরির জন্য একটি কাঠামোবদ্ধ ফ্রেমওয়ার্ক।

## প্রয়োজনীয়তা

- WordPress Multisite ইনস্টলেশন
- PHP 7.4 বা তার বেশি
- Ultimate Multisite প্লাগইন সক্রিয় করা

## Composer / Bedrock ইনস্টলেশন

Ultimate Multisite [Packagist](https://packagist.org/packages/ultimate-multisite/ultimate-multisite)-এ `ultimate-multisite/ultimate-multisite` হিসাবে উপলব্ধ। Bedrock-ভিত্তিক WordPress সেটআপ এবং অন্যান্য Composer-managed এনভায়রনমেন্টের জন্য এটিই প্রস্তাবিত ইনস্টলেশন পদ্ধতি।

```bash
composer require ultimate-multisite/ultimate-multisite
```

:::note প্যাকেজের নাম পরিবর্তন হয়েছে (v2.6.1+)
v2.6.1 সংস্করণে Composer প্যাকেজের নাম `devstone/ultimate-multisite` থেকে `ultimate-multisite/ultimate-multisite`-এ পরিবর্তন করা হয়েছে। যদি আপনার `composer.json` এ পুরোনো ভেন্ডর নামটি উল্লেখ থাকে, তবে require এন্ট্রিটি আপডেট করুন এবং `composer update` চালান।
:::

ইনস্টল করার পরে, নেটওয়ার্ক অ্যাডমিন থেকে প্লাগইনটি নেটওয়ার্ক-অ্যাক্টিভেট করুন:

```bash
wp plugin activate ultimate-multisite --network
```

অথবা, আপনি যদি Bedrock-এর autoloader এর মাধ্যমে প্লাগইনটি must-use প্লাগইন হিসাবে লোড করেন, তবে অ্যাক্টিভেশন গার্ড বাইপাস করতে `wp_ultimo_skip_network_active_check` ফিল্টারটি ব্যবহার করুন:

```php
add_filter( 'wp_ultimo_skip_network_active_check', '__return_true' );
```

## দ্রুত শুরু

### REST API ব্যবহার করুন

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### ইভেন্টে হুক করুন

```php
add_action('wu_customer_post_create', function($customer) {
    // নতুন গ্রাহক সাইনআপের প্রতিক্রিয়া জানান
});
```

### একটি অ্যাডন তৈরি করুন

```bash
# টেমপ্লেট থেকে অ্যাডন স্কাফল্ড তৈরি করুন
bash create-addon.sh
```

বিস্তারিত ডকুমেন্টেশন এবং উদাহরণগুলির জন্য প্রতিটি বিভাগ দেখুন।
