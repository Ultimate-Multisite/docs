---
title: cPanel ইন্টিগ্রেশন
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
cPanel হলো সবচেয়ে জনপ্রিয় ওয়েব হোস্টিং কন্ট্রোল প্যানেলগুলোর একটি, যা অনেক শেয়ার্ড এবং ডেডিকেটেড হোস্টিং প্রোভাইডার ব্যবহার করে থাকে। এই ইন্টিগ্রেশনের মাধ্যমে Ultimate Multisite এবং cPanel-এর মধ্যে স্বয়ংক্রিয়ভাবে ডোমেইন সিঙ্ক করা যায়, ফলে আপনি সহজেই আপনার cPanel অ্যাকাউন্টে ডোমেইন অ্যালিয়াস এবং সাবডোমেইন যোগ করতে পারবেন।

## বৈশিষ্ট্যসমূহ
- cPanel-এ স্বয়ংক্রিয়ভাবে addon domain তৈরি
- cPanel-এ স্বয়ংক্রিয়ভাবে subdomain তৈরি (subdomain multisite ইনস্টলেশনের জন্য)
- ম্যাপিং মুছে ফেলার সাথে সাথে ডোমেইনও মুছে যাওয়া

## প্রয়োজনীয়তা
আপনার `wp-config.php` ফাইলে নিচের constant গুলো অবশ্যই সংজ্ঞায়িত করতে হবে:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ঐচ্ছিকভাবে, আপনি আরও কিছু সংজ্ঞায়িত করতে পারেন:

```php
define('WU_CPANEL_PORT', 2083); // ডিফল্ট হলো 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ডিফল্ট হলো /public_html
```

## সেটআপ নির্দেশিকা

### ১. আপনার cPanel ক্রেডেনশিয়াল সংগ্রহ করুন

1. আপনার হোস্টিং প্রোভাইডারের কাছ থেকে cPanel ইউজারনেম এবং পাসওয়ার্ড সংগ্রহ করুন
2. আপনার cPanel host নির্ধারণ করুন (সাধারণত `cpanel.yourdomain.com` অথবা `yourdomain.com:2083`)

### ২. wp-config.php-এ Constant যোগ করুন

আপনার `wp-config.php` ফাইলে নিচের constant গুলো যোগ করুন:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ঐচ্ছিকভাবে, আপনি port এবং root directory কাস্টমাইজ করতে পারেন:

```php
define('WU_CPANEL_PORT', 2083); // আপনার cPanel অন্য port ব্যবহার করলে পরিবর্তন করুন
define('WU_CPANEL_ROOT_DIR', '/public_html'); // আপনার document root ভিন্ন হলে পরিবর্তন করুন
```

### ৩. ইন্টিগ্রেশন সক্রিয় করুন

1. আপনার WordPress admin-এ যান Ultimate Multisite > Settings-এ
2. "Domain Mapping" ট্যাবে নেভিগেট করুন
3. "Host Integrations"-এ স্ক্রল করুন
4. cPanel ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes" ক্লিক করুন

## এটি কীভাবে কাজ করে

### Addon Domain

Ultimate Multisite-এ যখন কোনো ডোমেইন ম্যাপ করা হয়:

1. ইন্টিগ্রেশনটি cPanel-এর API-তে ডোমেইনটিকে addon domain হিসেবে যোগ করার জন্য একটি রিকোয়েস্ট পাঠায়
2. ডোমেইনটি আপনার root directory-তে পয়েন্ট করার জন্য কনফিগার করা হয়
3. যখন কোনো domain mapping মুছে ফেলা হয়, ইন্টিগ্রেশনটি cPanel থেকে addon domain-টিও সরিয়ে দেয়

### Subdomain

Subdomain multisite ইনস্টলেশনের জন্য, যখন একটি নতুন সাইট তৈরি হয়:

1. ইন্টিগ্রেশনটি পূর্ণ ডোমেইন থেকে subdomain অংশটি বের করে নেয়
2. এটি cPanel-এর API-তে subdomain যোগ করার জন্য একটি রিকোয়েস্ট পাঠায়
3. Subdomain-টি আপনার root directory-তে পয়েন্ট করার জন্য কনফিগার করা হয়

## গুরুত্বপূর্ণ বিষয়গুলো

- ইন্টিগ্রেশনটি আপনার cPanel অ্যাকাউন্টের সাথে যোগাযোগ করতে cPanel-এর API2 ব্যবহার করে
- আপনার cPanel অ্যাকাউন্টে addon domain এবং subdomain যোগ করার অনুমতি থাকতে হবে
- কিছু হোস্টিং প্রোভাইডার addon domain বা subdomain তৈরির সংখ্যা সীমিত রাখতে পারে
- ইন্টিগ্রেশনটি DNS কনফিগারেশন সামলায় না; আপনাকে আলাদাভাবে আপনার ডোমেইনগুলো সার্ভারের IP address-এ পয়েন্ট করতে হবে

## সমস্যা সমাধান

### API কানেকশন সমস্যা
- আপনার cPanel ইউজারনেম এবং পাসওয়ার্ড সঠিক কিনা যাচাই করুন
- আপনার cPanel host সঠিক এবং অ্যাক্সেসযোগ্য কিনা পরীক্ষা করুন
- নিশ্চিত করুন যে আপনার cPanel অ্যাকাউন্টে প্রয়োজনীয় অনুমতি আছে
- host-এর জন্য সম্পূর্ণ URL ব্যবহার করে দেখুন (যেমন, `https://cpanel.yourdomain.com`)

### ডোমেইন যোগ হচ্ছে না
- কোনো error message আছে কিনা Ultimate Multisite-এর log পরীক্ষা করুন
- ডোমেইনটি ইতোমধ্যে cPanel-এ যোগ করা আছে কিনা যাচাই করুন
- নিশ্চিত করুন যে আপনার cPanel অ্যাকাউন্ট addon domain বা subdomain-এর সীমায় পৌঁছে যায়নি

### SSL সার্টিফিকেট সমস্যা
- ইন্টিগ্রেশনটি SSL সার্টিফিকেট ইস্যু করা সামলায় না
- আপনার ডোমেইনগুলোর জন্য SSL সার্টিফিকেট ইস্যু করতে cPanel-এর SSL/TLS টুলস বা AutoSSL ফিচার ব্যবহার করতে হবে
- বিকল্পভাবে, আপনি cPanel-এর AutoSSL-এর সাথে Let's Encrypt-এর মতো সার্ভিস ব্যবহার করতে পারেন
