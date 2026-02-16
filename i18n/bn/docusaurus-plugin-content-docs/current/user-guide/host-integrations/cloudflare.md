---
title: Cloudflare ইন্টিগ্রেশন
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
Cloudflare হলো একটি শীর্ষস্থানীয় কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDN) এবং সিকিউরিটি প্রোভাইডার যা ওয়েবসাইটকে সুরক্ষিত রাখতে এবং দ্রুত করতে সাহায্য করে। এই ইন্টিগ্রেশন Ultimate Multisite এবং Cloudflare-এর মধ্যে স্বয়ংক্রিয় ডোমেইন ম্যানেজমেন্ট সক্ষম করে, বিশেষ করে subdomain multisite ইনস্টলেশনের জন্য।

## ফিচারসমূহ
- Cloudflare-এ স্বয়ংক্রিয় subdomain তৈরি
- Proxied subdomain সাপোর্ট
- DNS রেকর্ড ম্যানেজমেন্ট
- Ultimate Multisite অ্যাডমিনে উন্নত DNS রেকর্ড ডিসপ্লে

## প্রয়োজনীয়তা
আপনার `wp-config.php` ফাইলে নিচের constant গুলো অবশ্যই সংজ্ঞায়িত করতে হবে:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## সেটআপ নির্দেশনা

### ১. আপনার Cloudflare API Key সংগ্রহ করুন

1. আপনার Cloudflare dashboard-এ লগইন করুন
2. "My Profile"-এ যান (উপরের ডান কোণায় আপনার ইমেইলে ক্লিক করুন)
3. মেনু থেকে "API Tokens" সিলেক্ট করুন
4. নিচের permission গুলো দিয়ে একটি নতুন API token তৈরি করুন:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. আপনার API token কপি করুন

### ২. আপনার Zone ID সংগ্রহ করুন

1. আপনার Cloudflare dashboard-এ, যে ডোমেইন ব্যবহার করতে চান সেটি সিলেক্ট করুন
2. Zone ID "Overview" ট্যাবে দেখা যাবে, ডান সাইডবারে "API"-এর নিচে
3. Zone ID কপি করুন

### ৩. wp-config.php-এ Constant যোগ করুন

আপনার `wp-config.php` ফাইলে নিচের constant গুলো যোগ করুন:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ৪. ইন্টিগ্রেশন সক্রিয় করুন

1. আপনার WordPress অ্যাডমিনে, Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে নেভিগেট করুন
3. "Host Integrations"-এ স্ক্রল করুন
4. Cloudflare ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes"-এ ক্লিক করুন

## এটি কীভাবে কাজ করে

### Subdomain ম্যানেজমেন্ট

যখন একটি subdomain multisite ইনস্টলেশনে নতুন সাইট তৈরি হয়:

1. ইন্টিগ্রেশনটি subdomain-এর জন্য একটি CNAME রেকর্ড যোগ করতে Cloudflare-এর API-তে রিকোয়েস্ট পাঠায়
2. Subdomain-টি ডিফল্টভাবে Cloudflare-এর মাধ্যমে proxied হিসেবে কনফিগার করা হয় (এটি filter দিয়ে পরিবর্তন করা যায়)
3. যখন কোনো সাইট মুছে ফেলা হয়, ইন্টিগ্রেশনটি Cloudflare থেকে subdomain-টি সরিয়ে দেবে

### DNS রেকর্ড ডিসপ্লে

ইন্টিগ্রেশনটি Ultimate Multisite অ্যাডমিনে DNS রেকর্ড ডিসপ্লে উন্নত করে:

1. সরাসরি Cloudflare থেকে DNS রেকর্ড fetch করে
2. রেকর্ডগুলো proxied কিনা তা দেখায়
3. DNS রেকর্ড সম্পর্কে অতিরিক্ত তথ্য প্রদর্শন করে

## গুরুত্বপূর্ণ তথ্য

Cloudflare-এর সাম্প্রতিক আপডেট অনুযায়ী, wildcard proxying এখন সব গ্রাহকের জন্য উপলব্ধ। এর মানে হলো subdomain multisite ইনস্টলেশনের জন্য Cloudflare ইন্টিগ্রেশন আগের মতো জরুরি নয়, কারণ আপনি সহজেই Cloudflare-এ একটি wildcard DNS রেকর্ড সেটআপ করতে পারেন।

## সমস্যা সমাধান

### API কানেকশন সমস্যা
- যাচাই করুন যে আপনার API token সঠিক এবং প্রয়োজনীয় permission আছে
- আপনার Zone ID সঠিক কিনা পরীক্ষা করুন
- নিশ্চিত করুন যে আপনার Cloudflare অ্যাকাউন্টে প্রয়োজনীয় permission আছে

### Subdomain যোগ হচ্ছে না
- কোনো error message আছে কিনা Ultimate Multisite লগ চেক করুন
- যাচাই করুন যে subdomain-টি ইতোমধ্যে Cloudflare-এ যোগ করা নেই
- নিশ্চিত করুন যে আপনার Cloudflare প্ল্যান আপনি যত DNS রেকর্ড তৈরি করছেন তা সাপোর্ট করে

### Proxying সমস্যা
- আপনি যদি subdomain proxied করতে না চান, তাহলে `wu_cloudflare_should_proxy` filter ব্যবহার করতে পারেন
- কিছু ফিচার proxied অবস্থায় সঠিকভাবে কাজ নাও করতে পারে (যেমন, কিছু WordPress অ্যাডমিন ফাংশন)
- অ্যাডমিন পেজগুলোর জন্য cache বাইপাস করতে Cloudflare-এর Page Rules ব্যবহার করার কথা বিবেচনা করুন
