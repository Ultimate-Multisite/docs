---
title: Cloudways ইন্টিগ্রেশন
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
Cloudways হলো একটি ম্যানেজড ক্লাউড হোস্টিং প্ল্যাটফর্ম যা আপনাকে DigitalOcean, AWS, Google Cloud এবং আরও অনেক ক্লাউড প্রোভাইডারে WordPress সাইট ডেপ্লয় করতে দেয়। এই ইন্টিগ্রেশনটি Ultimate Multisite এবং Cloudways-এর মধ্যে স্বয়ংক্রিয় ডোমেইন সিঙ্ক এবং SSL সার্টিফিকেট ব্যবস্থাপনা সক্ষম করে।

## বৈশিষ্ট্যসমূহ
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- SSL সার্টিফিকেট ব্যবস্থাপনা
- অতিরিক্ত ডোমেইন সাপোর্ট
- SSL সার্টিফিকেটের জন্য DNS ভ্যালিডেশন

## প্রয়োজনীয়তা
আপনার `wp-config.php` ফাইলে নিম্নলিখিত constant গুলো অবশ্যই সংজ্ঞায়িত করতে হবে:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ঐচ্ছিকভাবে, আপনি এটিও সংজ্ঞায়িত করতে পারেন:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## সেটআপ নির্দেশনা

### ১. আপনার Cloudways API ক্রেডেনশিয়াল সংগ্রহ করুন

1. আপনার Cloudways dashboard-এ লগইন করুন
2. "Account" > "API Keys"-এ যান
3. যদি আপনার কাছে API key না থাকে তাহলে একটি তৈরি করুন
4. আপনার ইমেইল এবং API key কপি করুন

### ২. আপনার Server এবং Application ID সংগ্রহ করুন

1. আপনার Cloudways dashboard-এ "Servers"-এ যান
2. যে সার্ভারে আপনার WordPress multisite হোস্ট করা আছে সেটি নির্বাচন করুন
3. Server ID URL-এ দেখা যাবে: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications"-এ গিয়ে আপনার WordPress অ্যাপ্লিকেশন নির্বাচন করুন
5. App ID URL-এ দেখা যাবে: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ৩. wp-config.php-এ Constant যোগ করুন

আপনার `wp-config.php` ফাইলে নিম্নলিখিত constant গুলো যোগ করুন:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

যদি আপনার অতিরিক্ত ডোমেইন থাকে যেগুলো সবসময় অন্তর্ভুক্ত করা উচিত:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### ৪. ইন্টিগ্রেশন সক্রিয় করুন

1. আপনার WordPress admin-এ Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে নেভিগেট করুন
3. "Host Integrations"-এ স্ক্রল করুন
4. Cloudways ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes" ক্লিক করুন

## এটি কীভাবে কাজ করে

### ডোমেইন সিঙ্কিং

যখন Ultimate Multisite-এ কোনো ডোমেইন ম্যাপ করা হয়:

1. ইন্টিগ্রেশনটি বর্তমানে ম্যাপ করা সব ডোমেইন সংগ্রহ করে
2. এটি তালিকায় নতুন ডোমেইন যোগ করে (প্রযোজ্য হলে www ভার্সনসহ)
3. এটি API-এর মাধ্যমে সম্পূর্ণ তালিকা Cloudways-এ পাঠায়
4. Cloudways আপনার অ্যাপ্লিকেশনের জন্য ডোমেইন alias আপডেট করে

দ্রষ্টব্য: Cloudways API প্রতিবার সম্পূর্ণ ডোমেইন তালিকা পাঠানো প্রয়োজন, শুধু পৃথক ডোমেইন যোগ বা বাদ দেওয়া নয়।

### SSL সার্টিফিকেট ব্যবস্থাপনা

ডোমেইন সিঙ্ক হওয়ার পর:

1. ইন্টিগ্রেশনটি পরীক্ষা করে কোন ডোমেইনগুলোর বৈধ DNS রেকর্ড আপনার সার্ভারের দিকে নির্দেশ করছে
2. এটি সেই ডোমেইনগুলোর জন্য Let's Encrypt SSL সার্টিফিকেট ইনস্টল করতে Cloudways-এ অনুরোধ পাঠায়
3. Cloudways SSL সার্টিফিকেট ইস্যু এবং ইনস্টলেশন পরিচালনা করে

## অতিরিক্ত ডোমেইন

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant আপনাকে অতিরিক্ত ডোমেইন নির্দিষ্ট করতে দেয় যেগুলো Cloudways-এর সাথে সিঙ্ক করার সময় সবসময় অন্তর্ভুক্ত থাকবে। এটি এর জন্য উপযোগী:

- যে ডোমেইনগুলো Ultimate Multisite দ্বারা পরিচালিত নয়
- Wildcard ডোমেইন (যেমন, `*.example.com`)
- ডেভেলপমেন্ট বা স্টেজিং ডোমেইন

## সমস্যা সমাধান

### API সংযোগ সমস্যা
- আপনার ইমেইল এবং API key সঠিক কিনা যাচাই করুন
- আপনার server এবং application ID সঠিক কিনা পরীক্ষা করুন
- নিশ্চিত করুন যে আপনার Cloudways অ্যাকাউন্টে প্রয়োজনীয় অনুমতি আছে

### SSL সার্টিফিকেট সমস্যা
- SSL সার্টিফিকেট ইস্যু করার আগে Cloudways-এর প্রয়োজন যে ডোমেইনগুলোর বৈধ DNS রেকর্ড আপনার সার্ভারের দিকে নির্দেশ করছে
- SSL সার্টিফিকেট অনুরোধ করার আগে ইন্টিগ্রেশনটি DNS রেকর্ড যাচাই করে
- যদি SSL সার্টিফিকেট ইস্যু না হয়, পরীক্ষা করুন আপনার ডোমেইনগুলো সঠিকভাবে আপনার সার্ভারের IP address-এর দিকে নির্দেশ করছে কিনা

### ডোমেইন যোগ হচ্ছে না
- কোনো error message-এর জন্য Ultimate Multisite লগ পরীক্ষা করুন
- যাচাই করুন ডোমেইনটি ইতিমধ্যে Cloudways-এ যোগ করা নেই
- নিশ্চিত করুন আপনার Cloudways প্ল্যান আপনি যত সংখ্যক ডোমেইন যোগ করছেন তা সাপোর্ট করে
