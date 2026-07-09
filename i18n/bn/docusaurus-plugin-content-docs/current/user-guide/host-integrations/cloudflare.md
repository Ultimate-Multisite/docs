---
title: Cloudflare ইন্টিগ্রেশন
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare ইন্টিগ্রেশন

## সারসংক্ষেপ
Cloudflare একটি শীর্ষস্থানীয় কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDN) ও নিরাপত্তা প্রদানকারী, যা ওয়েবসাইট সুরক্ষিত ও দ্রুত করতে সাহায্য করে। এই ইন্টিগ্রেশন Ultimate Multisite এবং Cloudflare-এর মধ্যে স্বয়ংক্রিয় ডোমেইন ব্যবস্থাপনা চালু করে, বিশেষ করে সাবডোমেইন মাল্টিসাইট ইনস্টলেশনের জন্য।

## বৈশিষ্ট্য
- Cloudflare-এ স্বয়ংক্রিয় সাবডোমেইন তৈরি
- প্রক্সি করা সাবডোমেইন সমর্থন
- DNS রেকর্ড ব্যবস্থাপনা
- Ultimate Multisite admin-এ উন্নত DNS রেকর্ড প্রদর্শন

## প্রয়োজনীয়তা
নিচের constants আপনার `wp-config.php` ফাইলে সংজ্ঞায়িত থাকতে হবে:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## সেটআপ নির্দেশনা

### ১. আপনার Cloudflare API Key নিন

1. আপনার Cloudflare dashboard-এ লগ ইন করুন
2. "My Profile"-এ যান (উপরের ডান কোণে আপনার ইমেইলে ক্লিক করুন)
3. মেনু থেকে "API Tokens" নির্বাচন করুন
4. নিচের অনুমতিগুলোসহ একটি নতুন API token তৈরি করুন:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. আপনার API token কপি করুন

### ২. আপনার Zone ID নিন

1. আপনার Cloudflare dashboard-এ, যে ডোমেইনটি ব্যবহার করতে চান সেটি নির্বাচন করুন
2. Zone ID "Overview" ট্যাবে, ডান পাশের সাইডবারে "API"-এর নিচে দেখা যায়
3. Zone ID কপি করুন

### ৩. wp-config.php-এ constants যোগ করুন

আপনার `wp-config.php` ফাইলে নিচের constants যোগ করুন:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ৪. ইন্টিগ্রেশন চালু করুন

1. আপনার WordPress admin-এ, Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে যান
3. "Host Integrations" পর্যন্ত নিচে স্ক্রল করুন
4. Cloudflare ইন্টিগ্রেশন চালু করুন
5. "Save Changes" ক্লিক করুন

## এটি কীভাবে কাজ করে

### সাবডোমেইন ব্যবস্থাপনা

সাবডোমেইন মাল্টিসাইট ইনস্টলেশনে নতুন সাইট তৈরি হলে:

1. ইন্টিগ্রেশনটি সাবডোমেইনের জন্য একটি CNAME রেকর্ড যোগ করতে Cloudflare-এর API-তে অনুরোধ পাঠায়
2. ডিফল্টভাবে সাবডোমেইনটি Cloudflare-এর মাধ্যমে প্রক্সি করার জন্য কনফিগার করা হয় (এটি filters দিয়ে পরিবর্তন করা যায়)
3. কোনো সাইট মুছে ফেলা হলে, ইন্টিগ্রেশনটি Cloudflare থেকে সাবডোমেইনটি সরিয়ে দেবে

### DNS রেকর্ড প্রদর্শন

ইন্টিগ্রেশনটি Ultimate Multisite admin-এ DNS রেকর্ড প্রদর্শন উন্নত করে এভাবে:

1. Cloudflare থেকে সরাসরি DNS রেকর্ড আনা
2. রেকর্ডগুলো প্রক্সি করা কি না তা দেখানো
3. DNS রেকর্ড সম্পর্কে অতিরিক্ত তথ্য দেখানো

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (আগে "Cloudflare for SaaS" নামে পরিচিত ছিল) Cloudflare-এর একটি বৈশিষ্ট্য, যা আপনার গ্রাহকদের আপনার মাল্টিসাইট নেটওয়ার্কে SSL সহ নিজেদের ডোমেইন ব্যবহার করতে দেয়। Cloudflare ব্যবহার করে এমন ডোমেইন-ম্যাপ করা মাল্টিসাইট ইনস্টলেশনের জন্য এটিই প্রস্তাবিত পদ্ধতি, কারণ Cloudflare প্রতিটি custom domain-এর জন্য স্বয়ংক্রিয়ভাবে SSL certificate ইস্যু ও নবায়ন পরিচালনা করে।

### এটি স্ট্যান্ডার্ড Cloudflare ইন্টিগ্রেশন থেকে কীভাবে আলাদা

| | স্ট্যান্ডার্ড ইন্টিগ্রেশন | Cloudflare Custom Hostnames |
|---|---|---|
| **উদ্দেশ্য** | সাবডোমেইনের জন্য স্বয়ংক্রিয়ভাবে DNS রেকর্ড তৈরি করে | Cloudflare-পরিচালিত SSL সহ custom (mapped) ডোমেইন চালু করে |
| **যার জন্য সেরা** | সাবডোমেইন মাল্টিসাইট | ডোমেইন-ম্যাপ করা মাল্টিসাইট |
| **SSL** | আলাদাভাবে পরিচালিত | Cloudflare স্বয়ংক্রিয়ভাবে পরিচালনা করে |

### Cloudflare Custom Hostnames সেটআপ করা

1. আপনার Cloudflare dashboard-এ, আপনার প্রধান ডোমেইনের zone খুলুন।
2. **SSL/TLS > Custom Hostnames**-এ যান।
3. আপনার সার্ভারের IP বা hostname-এ নির্দেশ করা একটি fallback origin যোগ করুন।
4. Ultimate Multisite-এ ম্যাপ করা প্রতিটি গ্রাহক ডোমেইনের জন্য, Cloudflare-এ একটি Custom Hostname এন্ট্রি যোগ করুন। Cloudflare API ব্যবহার করে আপনি এই ধাপটি স্বয়ংক্রিয় করতে পারেন।
5. গ্রাহকের DNS আপনার নেটওয়ার্কে নির্দেশ করা হলে Cloudflare প্রতিটি custom hostname-এর জন্য স্বয়ংক্রিয়ভাবে TLS certificate ইস্যু ও নবায়ন করে।

সম্পূর্ণ API রেফারেন্সের জন্য, [Cloudflare Custom Hostnames ডকুমেন্টেশন](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) দেখুন।

:::note পরিভাষা আপডেট
Ultimate Multisite v2.6.1 থেকে, সব plugin settings এবং labels-এ এই বৈশিষ্ট্যকে **Cloudflare Custom Hostnames** বলা হয়। আগের সংস্করণগুলোতে "Cloudflare for SaaS" নাম ব্যবহার করা হতো, যা মূল Cloudflare product name।
:::

## গুরুত্বপূর্ণ নোট

Cloudflare-এর সাম্প্রতিক আপডেট অনুযায়ী, wildcard proxying এখন সব গ্রাহকের জন্য উপলভ্য। এর অর্থ হলো, সাবডোমেইন মাল্টিসাইট ইনস্টলেশনের জন্য স্ট্যান্ডার্ড Cloudflare DNS ইন্টিগ্রেশন আগের মতো এত জরুরি নয়, কারণ আপনি Cloudflare-এ সহজেই একটি wildcard DNS রেকর্ড সেটআপ করতে পারেন।

## সমস্যা সমাধান

### API সংযোগের সমস্যা
- আপনার API token সঠিক এবং প্রয়োজনীয় অনুমতি আছে কি না যাচাই করুন
- আপনার Zone ID সঠিক কি না পরীক্ষা করুন
- আপনার Cloudflare account-এ প্রয়োজনীয় অনুমতি আছে কি না নিশ্চিত করুন

### সাবডোমেইন যোগ হয়নি
- কোনো ত্রুটি বার্তা আছে কি না দেখতে Ultimate Multisite logs পরীক্ষা করুন
- সাবডোমেইনটি Cloudflare-এ আগে থেকেই যোগ করা নেই কি না যাচাই করুন
- আপনি যতগুলো DNS রেকর্ড তৈরি করছেন, আপনার Cloudflare plan তা সমর্থন করে কি না নিশ্চিত করুন

### প্রক্সি-সংক্রান্ত সমস্যা
- আপনি যদি সাবডোমেইনগুলো প্রক্সি করতে না চান, তাহলে `wu_cloudflare_should_proxy` filter ব্যবহার করতে পারেন
- প্রক্সি করা হলে কিছু বৈশিষ্ট্য সঠিকভাবে কাজ নাও করতে পারে (যেমন, নির্দিষ্ট WordPress admin ফাংশন)
- admin pages-এর জন্য cache এড়াতে Cloudflare-এর Page Rules ব্যবহার করার কথা বিবেচনা করুন
