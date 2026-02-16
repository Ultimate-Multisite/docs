---
title: GridPane ইন্টিগ্রেশন
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ
GridPane হলো পেশাদার WordPress ব্যবহারকারীদের জন্য তৈরি একটি বিশেষায়িত WordPress হোস্টিং কন্ট্রোল প্যানেল। এই ইন্টিগ্রেশনের মাধ্যমে Ultimate Multisite এবং GridPane-এর মধ্যে স্বয়ংক্রিয়ভাবে ডোমেইন সিঙ্ক এবং SSL সার্টিফিকেট ব্যবস্থাপনা করা যায়।

## বৈশিষ্ট্যসমূহ
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- SSL সার্টিফিকেট ব্যবস্থাপনা
- SUNRISE constant স্বয়ংক্রিয়ভাবে কনফিগার করা

## প্রয়োজনীয়তা
আপনার `wp-config.php` ফাইলে নিচের constant গুলো অবশ্যই সংজ্ঞায়িত করতে হবে:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## সেটআপ নির্দেশিকা

### ১. আপনার GridPane API তথ্য সংগ্রহ করুন

1. আপনার GridPane dashboard-এ লগইন করুন
2. "Settings" > "API"-তে যান
3. যদি আগে থেকে না থাকে, একটি API key তৈরি করুন
4. আপনার API key কপি করুন

### ২. আপনার Server এবং Site ID সংগ্রহ করুন

1. আপনার GridPane dashboard-এ "Servers"-এ যান
2. যে সার্ভারে আপনার WordPress multisite হোস্ট করা আছে সেটি নির্বাচন করুন
3. Server ID নোট করে রাখুন (URL-এ অথবা server details পেজে দেখতে পাবেন)
4. "Sites"-এ গিয়ে আপনার WordPress সাইট নির্বাচন করুন
5. Site ID নোট করে রাখুন (URL-এ অথবা site details পেজে দেখতে পাবেন)

### ৩. wp-config.php-এ Constant যোগ করুন

আপনার `wp-config.php` ফাইলে নিচের constant গুলো যোগ করুন:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### ৪. ইন্টিগ্রেশন সক্রিয় করুন

1. আপনার WordPress admin-এ Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে যান
3. নিচে স্ক্রল করে "Host Integrations"-এ যান
4. GridPane ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes"-এ ক্লিক করুন

## এটি কীভাবে কাজ করে

Ultimate Multisite-এ কোনো ডোমেইন ম্যাপ করা হলে:

1. ইন্টিগ্রেশনটি GridPane-এর API-তে একটি রিকোয়েস্ট পাঠায় আপনার সাইটে ডোমেইন যোগ করতে
2. GridPane স্বয়ংক্রিয়ভাবে SSL সার্টিফিকেট প্রোভিশনিং করে
3. কোনো ডোমেইন ম্যাপিং সরানো হলে, ইন্টিগ্রেশনটি GridPane থেকে সেই ডোমেইন সরিয়ে দেয়

ইন্টিগ্রেশনটি আপনার wp-config.php ফাইলে SUNRISE constant স্বয়ংক্রিয়ভাবে হ্যান্ডেল করে, যা ডোমেইন ম্যাপিং সঠিকভাবে কাজ করার জন্য প্রয়োজন।

## SUNRISE Constant ব্যবস্থাপনা

GridPane ইন্টিগ্রেশনের একটি বিশেষ বৈশিষ্ট্য হলো এটি wp-config.php-এ SUNRISE constant স্বয়ংক্রিয়ভাবে পূর্বাবস্থায় ফিরিয়ে আনে, যাতে GridPane-এর নিজস্ব ডোমেইন ম্যাপিং সিস্টেমের সাথে কোনো সংঘর্ষ না হয়। এতে দুটি সিস্টেমই কোনো সমস্যা ছাড়াই একসাথে কাজ করতে পারে।

## সমস্যা সমাধান

### API সংযোগ সমস্যা
- আপনার API key সঠিক কিনা যাচাই করুন
- আপনার server এবং site ID সঠিক কিনা পরীক্ষা করুন
- আপনার GridPane অ্যাকাউন্টে প্রয়োজনীয় অনুমতি আছে কিনা নিশ্চিত করুন

### SSL সার্টিফিকেট সমস্যা
- GridPane-এর SSL সার্টিফিকেট ইস্যু করতে কিছু সময় লাগতে পারে
- আপনার ডোমেইনগুলো সার্ভারের IP address-এ সঠিকভাবে পয়েন্ট করছে কিনা যাচাই করুন
- আপনার সাইটের GridPane SSL সেটিংস পরীক্ষা করুন

### ডোমেইন যোগ হচ্ছে না
- কোনো error message আছে কিনা Ultimate Multisite logs পরীক্ষা করুন
- ডোমেইনটি ইতিমধ্যে GridPane-এ যোগ করা আছে কিনা যাচাই করুন
- আপনার ডোমেইনের DNS records সঠিকভাবে কনফিগার করা আছে কিনা নিশ্চিত করুন
