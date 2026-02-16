---
title: সার্ভারপাইলট ইন্টিগ্রেশন
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
ServerPilot হলো একটি ক্লাউড সার্ভিস যা DigitalOcean, Amazon, Google বা অন্য যেকোনো সার্ভার প্রোভাইডারে WordPress এবং অন্যান্য PHP ওয়েবসাইট হোস্ট করতে ব্যবহৃত হয়। এই ইন্টিগ্রেশন Ultimate Multisite এবং ServerPilot-এর মধ্যে স্বয়ংক্রিয় ডোমেইন সিঙ্কিং এবং SSL সার্টিফিকেট ব্যবস্থাপনা সক্রিয় করে।

## বৈশিষ্ট্যসমূহ
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- Let's Encrypt-এর সাথে SSL সার্টিফিকেট ব্যবস্থাপনা
- স্বয়ংক্রিয় SSL রিনিউয়াল

## প্রয়োজনীয়তা
আপনার `wp-config.php` ফাইলে নিচের constant গুলো সংজ্ঞায়িত করতে হবে:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## সেটআপ নির্দেশনা

### ১. আপনার ServerPilot API ক্রেডেনশিয়াল সংগ্রহ করুন

1. আপনার ServerPilot dashboard-এ লগইন করুন
2. "Account" > "API"-তে যান
3. যদি আগে থেকে না থাকে তাহলে একটি নতুন API key তৈরি করুন
4. আপনার Client ID এবং API Key কপি করুন

### ২. আপনার App ID সংগ্রহ করুন

1. আপনার ServerPilot dashboard-এ "Apps"-এ যান
2. যে app-এ আপনার WordPress multisite হোস্ট করা আছে সেটি নির্বাচন করুন
3. URL-এ App ID দেখা যাবে: `https://manage.serverpilot.io/apps/{APP_ID}`

### ৩. wp-config.php-এ Constant যোগ করুন

আপনার `wp-config.php` ফাইলে নিচের constant গুলো যোগ করুন:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ৪. ইন্টিগ্রেশন সক্রিয় করুন

1. আপনার WordPress admin-এ Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে নেভিগেট করুন
3. "Host Integrations"-এ স্ক্রল করুন
4. ServerPilot ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes" ক্লিক করুন

## এটি কীভাবে কাজ করে

### ডোমেইন সিঙ্কিং

যখন Ultimate Multisite-এ কোনো ডোমেইন ম্যাপ করা হয়:

1. ইন্টিগ্রেশন ServerPilot থেকে বর্তমান ডোমেইন তালিকা সংগ্রহ করে
2. এটি নতুন ডোমেইন (প্রযোজ্য হলে www ভার্সনসহ) তালিকায় যোগ করে
3. এটি API-এর মাধ্যমে আপডেট করা তালিকা ServerPilot-এ পাঠায়
4. ServerPilot আপনার অ্যাপ্লিকেশনের ডোমেইন তালিকা আপডেট করে

### SSL সার্টিফিকেট ব্যবস্থাপনা

ডোমেইন সিঙ্ক হওয়ার পর:

1. ইন্টিগ্রেশন আপনার অ্যাপ্লিকেশনের জন্য স্বয়ংক্রিয়ভাবে AutoSSL সক্রিয় করে
2. ServerPilot Let's Encrypt ব্যবহার করে SSL সার্টিফিকেট ইস্যু এবং ইনস্টল করে
3. ServerPilot SSL সার্টিফিকেটের স্বয়ংক্রিয় রিনিউয়ালও পরিচালনা করে

## SSL সার্টিফিকেট যাচাইকরণ

ServerPilot-এর SSL সার্টিফিকেট ইস্যু এবং ইনস্টল করতে কিছুটা সময় লাগতে পারে বলে এই ইন্টিগ্রেশনে SSL সার্টিফিকেট যাচাইকরণের প্রচেষ্টার সংখ্যা বাড়ানো হয়েছে। ডিফল্টভাবে, এটি ৫ বার পর্যন্ত চেষ্টা করবে, তবে filter ব্যবহার করে এটি পরিবর্তন করা যায়।

## সমস্যা সমাধান

### API সংযোগ সমস্যা
- আপনার Client ID এবং API Key সঠিক কিনা যাচাই করুন
- আপনার App ID সঠিক কিনা পরীক্ষা করুন
- আপনার ServerPilot অ্যাকাউন্টে প্রয়োজনীয় অনুমতি আছে কিনা নিশ্চিত করুন

### SSL সার্টিফিকেট সমস্যা
- SSL সার্টিফিকেট ইস্যু করার আগে ServerPilot-এর প্রয়োজন যে ডোমেইনগুলোর বৈধ DNS রেকর্ড আপনার সার্ভারের দিকে পয়েন্ট করছে
- যদি SSL সার্টিফিকেট ইস্যু না হয়, তাহলে পরীক্ষা করুন আপনার ডোমেইনগুলো সঠিকভাবে আপনার সার্ভারের IP address-এর দিকে পয়েন্ট করছে কিনা
- ServerPilot-এর SSL সার্টিফিকেট ইস্যু এবং ইনস্টল করতে কিছুটা সময় লাগতে পারে (সাধারণত ৫-১৫ মিনিট)

### ডোমেইন যোগ হচ্ছে না
- কোনো error message আছে কিনা Ultimate Multisite logs চেক করুন
- ডোমেইনটি ইতোমধ্যে ServerPilot-এ যোগ করা আছে কিনা যাচাই করুন
- আপনার ServerPilot প্ল্যান আপনি যতগুলো ডোমেইন যোগ করছেন তত সংখ্যক সাপোর্ট করে কিনা নিশ্চিত করুন

### ডোমেইন অপসারণ
- বর্তমানে, ServerPilot API-তে পৃথকভাবে ডোমেইন অপসারণের কোনো উপায় নেই
- যখন Ultimate Multisite-এ কোনো domain mapping সরানো হয়, ইন্টিগ্রেশন সরানো ডোমেইন বাদ দিয়ে ServerPilot-এর ডোমেইন তালিকা আপডেট করবে
