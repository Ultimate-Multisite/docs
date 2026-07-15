---
title: Cloudways ইন্টিগ্রেশন
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ইন্টিগ্রেশন

## সংক্ষিপ্ত বিবরণ {#overview}
Cloudways একটি পরিচালিত ক্লাউড হোস্টিং প্ল্যাটফর্ম, যা আপনাকে DigitalOcean, AWS, Google Cloud এবং আরও নানা ক্লাউড প্রদানকারীতে WordPress সাইট ডিপ্লয় করতে দেয়। এই ইন্টিগ্রেশন Ultimate Multisite এবং Cloudways-এর মধ্যে স্বয়ংক্রিয় ডোমেইন সিঙ্কিং এবং SSL সার্টিফিকেট ব্যবস্থাপনা সক্ষম করে।

## বৈশিষ্ট্য {#features}
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- SSL সার্টিফিকেট ব্যবস্থাপনা
- অতিরিক্ত ডোমেইনের জন্য সাপোর্ট
- SSL সার্টিফিকেটের জন্য DNS যাচাই

## প্রয়োজনীয়তা {#requirements}
আপনার `wp-config.php` ফাইলে নিচের constants সংজ্ঞায়িত থাকতে হবে:

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

## সেটআপ নির্দেশনা {#setup-instructions}

### 1. আপনার Cloudways API ক্রেডেনশিয়াল নিন {#1-get-your-cloudways-api-credentials}

1. আপনার Cloudways dashboard-এ লগ ইন করুন
2. "Account" > "API Keys"-এ যান
3. আপনার কাছে আগে থেকে না থাকলে একটি API key তৈরি করুন
4. আপনার ইমেইল এবং API key কপি করুন

### 2. আপনার Server এবং Application ID নিন {#2-get-your-server-and-application-ids}

1. আপনার Cloudways dashboard-এ "Servers"-এ যান
2. আপনার WordPress multisite হোস্ট করা আছে এমন সার্ভার নির্বাচন করুন
3. Server ID URL-এ দেখা যায়: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications"-এ যান এবং আপনার WordPress application নির্বাচন করুন
5. App ID URL-এ দেখা যায়: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-তে Constants যোগ করুন {#3-add-constants-to-wp-configphp}

আপনার `wp-config.php` ফাইলে নিচের constants যোগ করুন:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

আপনার যদি অতিরিক্ত **বহিরাগত** ডোমেইন থাকে (আপনার multisite নেটওয়ার্কের বাইরে), যেগুলো সবসময় Cloudways aliases তালিকায় রাখা উচিত:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning আপনার নিজের নেটওয়ার্কের wildcard অন্তর্ভুক্ত করবেন না
`WU_CLOUDWAYS_EXTRA_DOMAINS`-এ `*.your-network.com` (বা আপনার নিজের নেটওয়ার্কের কোনো subdomain pattern) যোগ করবেন **না**। কেন এটি প্রতি-tenant SSL সার্টিফিকেট ইস্যু হওয়া ঠেকায়, তা জানতে নিচে [গুরুত্বপূর্ণ — wildcard SSL বিপত্তি](#important--wildcard-ssl-pitfall) দেখুন।
:::

### 4. ইন্টিগ্রেশন সক্রিয় করুন {#4-enable-the-integration}

1. আপনার WordPress admin-এ Ultimate Multisite > Settings-এ যান
2. "Domain Mapping" ট্যাবে যান
3. "Host Integrations" পর্যন্ত নিচে স্ক্রল করুন
4. Cloudways ইন্টিগ্রেশন সক্রিয় করুন
5. "Save Changes" ক্লিক করুন

## এটি কীভাবে কাজ করে {#how-it-works}

### ডোমেইন সিঙ্কিং {#domain-syncing}

Ultimate Multisite-এ যখন কোনো ডোমেইন ম্যাপ করা হয়:

1. ইন্টিগ্রেশন বর্তমানে ম্যাপ করা সব ডোমেইন সংগ্রহ করে
2. এটি তালিকায় নতুন ডোমেইন যোগ করে (প্রযোজ্য হলে একটি www সংস্করণসহ)
3. এটি API-এর মাধ্যমে সম্পূর্ণ তালিকা Cloudways-এ পাঠায়
4. Cloudways আপনার application-এর ডোমেইন aliases আপডেট করে

নোট: Cloudways API-তে প্রতিবার ডোমেইনের সম্পূর্ণ তালিকা পাঠাতে হয়; শুধু আলাদা আলাদা ডোমেইন যোগ বা সরানো নয়।

### SSL সার্টিফিকেট ব্যবস্থাপনা {#ssl-certificate-management}

ডোমেইনগুলো সিঙ্ক হওয়ার পর:

1. ইন্টিগ্রেশন পরীক্ষা করে কোন ডোমেইনগুলোর বৈধ DNS রেকর্ড আপনার সার্ভারের দিকে নির্দেশ করছে
2. ওই ডোমেইনগুলোর জন্য Let's Encrypt SSL সার্টিফিকেট ইনস্টল করতে এটি Cloudways-এ একটি অনুরোধ পাঠায়
3. Cloudways SSL সার্টিফিকেট ইস্যু ও ইনস্টলেশন পরিচালনা করে

ইন্টিগ্রেশন সবসময় Cloudways থেকে **standard** (non-wildcard) Let's Encrypt সার্টিফিকেট চায়। `WU_CLOUDWAYS_EXTRA_DOMAINS`-এ কোনো wildcard pattern দেওয়া হলে, SSL অনুরোধের আগে শুরুতে থাকা `*.` সরিয়ে দেওয়া হয় — এই ইন্টিগ্রেশন কখনো wildcard নিজে ইনস্টল করে না। Cloudways-এ wildcard সার্টিফিকেট ব্যবহার করতে হলে আপনাকে সেটি ম্যানুয়ালি ইনস্টল করতে হবে, কিন্তু তা করলে ম্যাপ করা custom domain-এর জন্য প্রতি-ডোমেইন Let's Encrypt ইস্যু ব্লক হয়ে যায় (নিচের বিপত্তি দেখুন)।

## অতিরিক্ত ডোমেইন {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant আপনাকে অতিরিক্ত **বহিরাগত** ডোমেইন নির্দিষ্ট করতে দেয়, যেগুলো সবসময় Cloudways application-এর aliases তালিকায় রাখা উচিত। এটি ব্যবহার করুন:

- Ultimate Multisite দ্বারা পরিচালিত নয় এমন বহিরাগত ডোমেইনের জন্য (যেমন একই Cloudways application শেয়ার করা আলাদা marketing site)
- application aliases তালিকায় রাখতে চান এমন parked বা staging ডোমেইনের জন্য

আপনার নিজের নেটওয়ার্কের subdomain wildcard-এর জন্য এই constant ব্যবহার করবেন **না**
(যেমন `*.your-network.com`)। নিচের wildcard SSL বিপত্তি দেখুন।

## গুরুত্বপূর্ণ — Wildcard SSL বিপত্তি {#important--wildcard-ssl-pitfall}

Cloudways-এর ডিফল্ট সেটআপ অনুসরণ করার সময় একটি সাধারণ ভুল হলো `WU_CLOUDWAYS_EXTRA_DOMAINS`-এ
`*.your-network.com`-এর মতো কোনো wildcard যোগ করা, অথবা ওই wildcard-এর জন্য ম্যানুয়ালি একটি Cloudways
wildcard SSL সার্টিফিকেট ইনস্টল করা।

**আপনি এটি করলে, Ultimate Multisite যে প্রতি-tenant custom domain ম্যাপ করে, সেগুলোর জন্য Cloudways Let's Encrypt সার্টিফিকেট ইস্যু করতে অস্বীকার করবে।** Cloudways প্রতিবার application-এর সক্রিয় SSL সার্টিফিকেট প্রতিস্থাপন করে, এবং application-এ আগে থেকে থাকা wildcard সার্টিফিকেট ইন্টিগ্রেশন যার ওপর নির্ভর করে সেই প্রতি-ডোমেইন Let's Encrypt ইস্যু ব্লক করে।

### Ultimate Multisite নেটওয়ার্কের জন্য প্রস্তাবিত Cloudways SSL সেটআপ {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways application-এর **SSL Certificate** ট্যাবে একটি **standard
   Let's Encrypt certificate** ইনস্টল করুন, যা শুধু `your-network.com` এবং `www.your-network.com`
   কভার করবে — wildcard **নয়**।
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`-এ `*.your-network.com` (বা আপনার নিজের নেটওয়ার্কের কোনো subdomain pattern) রাখবেন **না**। এই constant কেবল **বহিরাগত** ডোমেইনের জন্য রাখুন।
3. প্রতি-tenant subdomain wildcard শুধু **DNS** স্তরে তৈরি করুন (`*.your-network.com`-এর জন্য একটি `A` রেকর্ড, যা আপনার Cloudways server IP-তে নির্দেশ করবে), যাতে subsites resolve হয়। এরপর পৃথকভাবে ম্যাপ করা custom domain-এর জন্য SSL ইন্টিগ্রেশন স্বয়ংক্রিয়ভাবে Let's Encrypt-এর মাধ্যমে ইস্যু করে।

আপনার tenants-এর custom domains যদি SSL ছাড়া আটকে থাকে, Cloudways SSL tab দেখুন। যদি সেখানে
wildcard certificate সক্রিয় থাকে, সেটি সরিয়ে দিন, শুধু main network domain-এর জন্য একটি standard Let's Encrypt
certificate আবার ইস্যু করুন, এবং `WU_CLOUDWAYS_EXTRA_DOMAINS` থেকে যেকোনো wildcard entry সরিয়ে দিন। এরপর domain mapping আবার চালু করুন (অথবা পরেরটির জন্য অপেক্ষা করুন)
এবং integration আবার per-domain certificates ইস্যু করা শুরু করবে।

## সমস্যা সমাধান {#troubleshooting}

### API সংযোগের সমস্যা {#api-connection-issues}
- আপনার email এবং API key সঠিক কি না যাচাই করুন
- আপনার server এবং application IDs সঠিক কি না দেখুন
- আপনার Cloudways Account-এ প্রয়োজনীয় permissions আছে কি না নিশ্চিত করুন

### SSL Certificate-এর সমস্যা {#ssl-certificate-issues}
- SSL certificates ইস্যু করার আগে Cloudways requires করে যে domains-এর valid DNS records আপনার server-এর দিকে pointing থাকতে হবে
- SSL certificates অনুরোধ করার আগে integration DNS records যাচাই করে
- SSL certificates ইস্যু না হলে, আপনার domains ঠিকভাবে আপনার server-এর IP address-এর দিকে pointing করছে কি না দেখুন
- **Per-tenant custom domains SSL ছাড়া আটকে আছে?** Cloudways application's SSL Certificate tab দেখুন। যদি একটি wildcard certificate (manually installed, বা `*.your-network.com` কভার করছে) active থাকে, Cloudways individually mapped custom domains-এর জন্য Let's Encrypt certificates ইস্যু করবে না। এর বদলে শুধু main network domain (`your-network.com`, `www.your-network.com`) কভার করে এমন একটি standard Let's Encrypt certificate ব্যবহার করুন এবং `WU_CLOUDWAYS_EXTRA_DOMAINS` থেকে যেকোনো wildcard entries সরিয়ে দিন। এরপর domain mapping আবার চালু করুন (অথবা পরেরটির জন্য অপেক্ষা করুন) এবং integration per-domain certificates অনুরোধ করবে।

### Domain যোগ হয়নি {#domain-not-added}
- কোনো error messages আছে কি না Ultimate Multisite logs দেখুন
- domain ইতিমধ্যে Cloudways-এ যোগ করা নেই কি না যাচাই করুন
- আপনি যে সংখ্যক domains যোগ করছেন তা আপনার Cloudways plan সমর্থন করে কি না নিশ্চিত করুন
