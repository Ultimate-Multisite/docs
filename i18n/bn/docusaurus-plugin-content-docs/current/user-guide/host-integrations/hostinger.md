---
title: Hostinger (hPanel) একীকরণ
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ইন্টিগ্রেশন

## ওভারভিউ {#overview}

Hostinger একটি জনপ্রিয় ওয়েব হোস্টিং প্রোভাইডার, এবং তাদের একটি আধুনিক কন্ট্রোল প্যানেল হলো hPanel। Ultimate Multisite Hostinger ইন্টিগ্রেশনটি Ultimate Multisite এবং Hostinger-এর hPanel-এর মধ্যে স্বয়ংক্রিয় ডোমেইন সিঙ্কিং সক্ষম করে। এর ফলে আপনি সরাসরি আপনার WordPress অ্যাডমিন থেকে ডোমেইন ম্যাপিং এবং সাবডোমেইনগুলো স্বয়ংক্রিয়ভাবে পরিচালনা করতে পারবেন।

## ফিচারসমূহ {#features}

- hPanel-এ স্বয়ংক্রিয় অ্যাডন ডোমেইন তৈরি
- hPanel-এ স্বয়ংক্রিয় সাবডোমেইন তৈরি (সাবডোমেইন মাল্টিসাইট ইনস্টলেশনের জন্য)
- ম্যাপিং মুছে গেলে ডোমেইন অপসারণ
- hPanel-এর ডোমেইন ম্যানেজমেন্ট API-এর সাথে নির্বিঘ্ন ইন্টিগ্রেশন

## প্রয়োজনীয়তা {#requirements}

Hostinger ইন্টিগ্রেশন ব্যবহার করার জন্য আপনার যা প্রয়োজন:

১. hPanel অ্যাক্সেস সহ একটি Hostinger অ্যাকাউন্ট
২. Hostinger থেকে একটি API টোকেন
৩. আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলো সংজ্ঞায়িত করা:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ঐচ্ছিকভাবে, আপনি এটিও সংজ্ঞায়িত করতে পারেন:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // ডিফল্ট API এন্ডপয়েন্ট
```

## সেটআপ নির্দেশাবলী {#setup-instructions}

### ১. আপনার Hostinger API টোকেন তৈরি করুন {#1-generate-your-hostinger-api-token}

১. আপনার Hostinger অ্যাকাউন্টে লগইন করুন এবং hPanel অ্যাক্সেস করুন।
২. **Account Settings** → **API Tokens** এ যান।
৩. **Create New Token** এ ক্লিক করুন।
৪. আপনার টোকেনটির একটি বর্ণনামূলক নাম দিন (যেমন: "Ultimate Multisite")।
৫. প্রয়োজনীয় অনুমতিগুলো নির্বাচন করুন:
   - Domain management
   - Subdomain management
৬. তৈরি হওয়া টোকেনটি কপি করুন এবং এটি নিরাপদে সংরক্ষণ করুন।

### ২. আপনার অ্যাকাউন্ট আইডি খুঁজুন {#2-find-your-account-id}

১. hPanel-এ, **Account Settings** → **Account Information** এ যান।
২. আপনার অ্যাকাউন্ট আইডি এই পেজে প্রদর্শিত হবে।
৩. পরবর্তী ধাপের জন্য এই আইডিটি কপি করে সংরক্ষণ করুন।

### ৩. wp-config.php-এ কনস্ট্যান্ট যোগ করুন {#3-add-constants-to-wp-configphp}

আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলো যোগ করুন:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

যদি আপনার Hostinger অ্যাকাউন্ট অন্য কোনো API এন্ডপয়েন্ট ব্যবহার করে, তবে আপনি এটি কাস্টমাইজ করতে পারেন:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ৪. ইন্টিগ্রেশন সক্ষম করুন {#4-enable-the-integration}

১. আপনার WordPress অ্যাডমিন থেকে **Ultimate Multisite > Settings** এ যান।
২. **Domain Mapping** ট্যাবে নেভিগেট করুন।
৩. **Host Integrations** পর্যন্ত স্ক্রল করুন।
৪. **Hostinger (hPanel)** ইন্টিগ্রেশনটি সক্ষম করুন।
৫. **Save Changes** এ ক্লিক করুন।

## এটি কীভাবে কাজ করে {#how-it-works}

### অ্যাডন ডোমেইন (Addon Domains) {#addon-domains}

যখন আপনি Ultimate Multisite-এ একটি ডোমেইন ম্যাপ করেন:

১. ইন্টিগ্রেশনটি অ্যাডন ডোমেইন হিসেবে ডোমেইনটি যোগ করার জন্য Hostinger-এর API-তে একটি অনুরোধ পাঠায়।
২. ডোমেইনটি আপনার রুট ডিরেক্টরির দিকে নির্দেশ করার জন্য কনফিগার করা হয়।
৩. যখন একটি ডোমেইন ম্যাপিং সরানো হয়, তখন ইন্টিগ্রেশনটি স্বয়ংক্রিয়ভাবে hPanel থেকে অ্যাডন ডোমেইনটি সরিয়ে দেয়।

### সাবডোমেইন (Subdomains) {#subdomains}

সাবডোমেইন মাল্টিসাইট ইনস্টলেশনের জন্য, যখন একটি নতুন সাইট তৈরি হয়:

১. ইন্টিগ্রেশনটি সম্পূর্ণ ডোমেইন থেকে সাবডোমেইন অংশটি বের করে আনে।
২. এটি সাবডোমেইনটি যোগ করার জন্য Hostinger-এর API-তে একটি অনুরোধ পাঠায়।
৩. সাবডোমেইনটি আপনার রুট ডিরেক্টরির দিকে নির্দেশ করার জন্য কনফিগার করা হয়।

## গুরুত্বপূর্ণ নোট {#important-notes}

- ইন্টিগ্রেশনটি আপনার অ্যাকাউন্টের সাথে যোগাযোগ করার জন্য Hostinger-এর REST API ব্যবহার করে।
- আপনার API টোকেনে ডোমেইন এবং সাবডোমেইন পরিচালনার জন্য প্রয়োজনীয় অনুমতি থাকতে হবে।
- ইন্টিগ্রেশনটি DNS কনফিগারেশন পরিচালনা করে না; ডোমেইনগুলো আগে থেকেই আপনার Hostinger অ্যাকাউন্টের দিকে নির্দেশ করা থাকতে হবে।
- API অনুরোধগুলো নিরাপদে HTTPS এর মাধ্যমে করা হয়।
- আপনার API টোকেন সুরক্ষিত রাখুন এবং এটি কখনোই সর্বজনীনভাবে শেয়ার করবেন না।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API সংযোগ সমস্যা {#api-connection-issues}

- যাচাই করুন যে আপনার API টোকেনটি সঠিক এবং মেয়াদোত্তীর্ণ হয়নি।
- নিশ্চিত করুন যে আপনার অ্যাকাউন্ট আইডিটি সঠিক।
- নিশ্চিত করুন যে আপনার API টোকেনে ডোমেইন পরিচালনার জন্য প্রয়োজনীয় অনুমতি আছে।
- যাচাই করুন যে আপনার Hostinger অ্যাকাউন্ট সক্রিয় এবং ভালো অবস্থায় আছে।

### ডোমেইন যোগ না হওয়া {#domain-not-added}

- কোনো ত্রুটির বার্তা আছে কিনা তা পরীক্ষা করতে Ultimate Multisite লগগুলো দেখুন।
- যাচাই করুন যে ডোমেইনটি ইতিমধ্যেই আপনার Hostinger অ্যাকাউন্টে যোগ করা নেই।
- নিশ্চিত করুন যে আপনার Hostinger অ্যাকাউন্টে অ্যাডন ডোমেইনের সীমা অতিক্রম হয়নি।
- নিশ্চিত করুন যে ডোমেইনটি সঠিকভাবে আপনার Hostinger নেমসার্ভারগুলোর দিকে নির্দেশ করা আছে।

### SSL সার্টিফিকেট সমস্যা {#ssl-certificate-issues}

- ইন্টিগ্রেশনটি SSL সার্টিফিকেট ইস্যু করা করে না।
- Hostinger সাধারণত AutoSSL এর মাধ্যমে বিনামূল্যে SSL সার্টিফিকেট সরবরাহ করে।
- আপনি **SSL/TLS** এর অধীনে hPanel-এ সরাসরি SSL সার্টিফিকেট পরিচালনা করতে পারেন।
- বিকল্পভাবে, Hostinger-এর AutoSSL ফিচারের সাথে Let's Encrypt ব্যবহার করুন।

## সাপোর্ট {#support}

Hostinger ইন্টিগ্রেশন সম্পর্কে আরও সহায়তার জন্য, অনুগ্রহ করে দেখুন:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
