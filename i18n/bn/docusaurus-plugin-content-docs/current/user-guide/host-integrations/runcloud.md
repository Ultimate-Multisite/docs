---
title: RunCloud ইন্টিগ্রেশন
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
RunCloud একটি ক্লাউড-ভিত্তিক সার্ভার ম্যানেজমেন্ট প্ল্যাটফর্ম যা আপনাকে সহজেই আপনার নিজের ক্লাউড সার্ভারে ওয়েব অ্যাপ্লিকেশন ডিপ্লয় এবং পরিচালনা করতে দেয়। এই ইন্টিগ্রেশন Ultimate Multisite এবং RunCloud-এর মধ্যে স্বয়ংক্রিয় ডোমেইন সিঙ্কিং এবং SSL সার্টিফিকেট ম্যানেজমেন্ট সক্ষম করে।

## বৈশিষ্ট্যসমূহ
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- SSL সার্টিফিকেট ম্যানেজমেন্ট
- ম্যাপিং মুছে ফেলার সময় ডোমেইন অপসারণ

## প্রয়োজনীয়তা
আপনার `wp-config.php` ফাইলে নিচের constant গুলো সংজ্ঞায়িত করতে হবে:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## সেটআপ নির্দেশাবলী

### ১. আপনার RunCloud API ক্রেডেনশিয়াল সংগ্রহ করুন

1. আপনার RunCloud dashboard-এ লগইন করুন
2. "User Profile"-এ যান (উপরের ডান কোণায় আপনার প্রোফাইল ছবিতে ক্লিক করুন)
3. মেনু থেকে "API" নির্বাচন করুন
4. যদি আপনার কাছে আগে থেকে না থাকে তাহলে "Generate API Key"-তে ক্লিক করুন
5. আপনার API Key এবং API Secret কপি করুন

### ২. আপনার Server এবং App ID সংগ্রহ করুন

1. আপনার RunCloud dashboard-এ "Servers"-এ যান
2. যে সার্ভারে আপনার WordPress multisite হোস্ট করা আছে সেটি নির্বাচন করুন
3. Server ID URL-এ দেখতে পাবেন: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"-এ যান এবং আপনার WordPress অ্যাপ্লিকেশন নির্বাচন করুন
5. App ID URL-এ দেখতে পাবেন: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### ৩. wp-config.php-এ Constant যোগ করুন

আপনার `wp-config.php` ফাইলে নিচের constant গুলো যোগ করুন:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### ৪. ইন্টিগ্রেশন সক্রিয় করুন

1. আপনার WordPress admin-এ Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে নেভিগেট করুন
3. "Host Integrations"-এ স্ক্রল করুন
4. RunCloud ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes"-এ ক্লিক করুন

## এটি কীভাবে কাজ করে

Ultimate Multisite-এ যখন একটি ডোমেইন ম্যাপ করা হয়:

1. ইন্টিগ্রেশনটি আপনার অ্যাপ্লিকেশনে ডোমেইন যোগ করতে RunCloud-এর API-তে একটি রিকোয়েস্ট পাঠায়
2. ডোমেইন সফলভাবে যোগ হলে, ইন্টিগ্রেশনটি SSL সার্টিফিকেটও রিডিপ্লয় করবে
3. যখন একটি ডোমেইন ম্যাপিং সরানো হয়, ইন্টিগ্রেশনটি RunCloud থেকে ডোমেইনটি মুছে দেবে

সাবডোমেইন ইনস্টলেশনের ক্ষেত্রে, আপনার নেটওয়ার্কে নতুন সাইট যোগ করা হলে ইন্টিগ্রেশনটি স্বয়ংক্রিয়ভাবে RunCloud-এ সাবডোমেইন তৈরি করবে।

## সমস্যা সমাধান

### API সংযোগ সমস্যা
- আপনার API ক্রেডেনশিয়াল সঠিক কিনা যাচাই করুন
- আপনার server এবং app ID সঠিক কিনা পরীক্ষা করুন
- নিশ্চিত করুন যে আপনার RunCloud অ্যাকাউন্টে প্রয়োজনীয় অনুমতি আছে

### SSL সার্টিফিকেট সমস্যা
- RunCloud SSL সার্টিফিকেট ইস্যু করতে কিছু সময় নিতে পারে
- আপনার ডোমেইনগুলো সঠিকভাবে আপনার সার্ভারের IP address-এ পয়েন্ট করছে কিনা যাচাই করুন
- আপনার অ্যাপ্লিকেশনের জন্য RunCloud SSL সেটিংস পরীক্ষা করুন

### ডোমেইন যোগ হয়নি
- কোনো এরর মেসেজ আছে কিনা Ultimate Multisite লগ পরীক্ষা করুন
- ডোমেইনটি ইতিমধ্যে RunCloud-এ যোগ করা নেই তা যাচাই করুন
- আপনার RunCloud প্ল্যান একাধিক ডোমেইন সমর্থন করে কিনা নিশ্চিত করুন
