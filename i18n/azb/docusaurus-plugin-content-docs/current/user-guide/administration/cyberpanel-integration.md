---
title: CyberPanel Integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel ইন্টিগ্রেশন

এই গাইডটি ব্যাখ্যা করে কিভাবে আপনি Ultimate Multisite CyberPanel ইন্টিগ্রেশন কনফিগার করবেন, যাতে আপনার নেটওয়ার্কের ম্যাপ করা ডোমেইনগুলি স্বয়ংক্রিয়ভাবে CyberPanel-এ ভার্চুয়াল হোস্ট হিসেবে যুক্ত (এবং সরানো) হয়। এর সাথে Let's Encrypt এর মাধ্যমে ঐচ্ছিক অটো-SSL প্রোভিশনিংও করা যায়।

## এটি কী করে {#what-it-does}

- যখন Ultimate Multisite-এ একটি ডোমেইন ম্যাপ করা হয়, তখন ইন্টিগ্রেশনটি সেই ডোমেইনের জন্য একটি ভার্চুয়াল হোস্ট তৈরি করতে CyberPanel API কে কল করে।
- যখন কোনো ডোমেইন ম্যাপিং সরানো হয়, তখন ইন্টিগ্রেশনটি সংশ্লিষ্ট ভার্চুয়াল হোস্টটি মুছে ফেলার জন্য API কে কল করে।
- অটো-SSL চালু থাকলে, ভার্চুয়াল হোস্ট তৈরি হওয়ার পরপরই ইন্টিগ্রেশনটি Let's Encrypt সার্টিফিকেট ইস্যু করার প্রক্রিয়া শুরু করে।
- ডোমেইন ম্যাপিং সেটিংসের "Auto-create www subdomain" সেটিংসের উপর নির্ভর করে ঐচ্ছিকভাবে `www.` অ্যালিয়াস যোগ বা সরিয়ে দেয়।

## পূর্বশর্ত {#prerequisites}

- একটি চলমান CyberPanel ইনস্ট্যান্স (v2.3 বা তার পরের সংস্করণ সুপারিশ করা হয়) যা আপনার WordPress সার্ভার থেকে অ্যাক্সেস করা যায়।
- CyberPanel-এ একটি বিদ্যমান ওয়েবসাইট থাকতে হবে যা ইতিমধ্যেই আপনার WordPress নেটওয়ার্ক রুট হিসেবে কাজ করছে। ইন্টিগ্রেশনটি এই সার্ভারে নতুন ভার্চুয়াল হোস্ট যুক্ত করে।
- CyberPanel API অ্যাক্সেস সক্ষম থাকতে হবে। অথেন্টিকেশনের জন্য আপনার CyberPanel অ্যাডমিন ইউজারনেম এবং পাসওয়ার্ড ব্যবহার করা হয়।
- অটো-SSL কার্যকর করার আগে ম্যাপ করা ডোমেইনগুলির জন্য আপনার DNS রেকর্ডগুলি অবশ্যই আপনার সার্ভারের IP অ্যাড্রেসকে নির্দেশ করতে হবে।

## প্রয়োজনীয়তা {#requirements}

আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলি সংজ্ঞায়িত করতে হবে:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ঐচ্ছিকভাবে, আপনি নিম্নলিখিতগুলিও সংজ্ঞায়িত করতে পারেন:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ডিফল্ট: true — ডোমেইন তৈরি করার পরে Let's Encrypt SSL ইস্যু করে
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ডিফল্ট: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL সার্টিফিকেট যোগাযোগের জন্য ব্যবহৃত হয়
```

## সেটআপ নির্দেশাবলী {#setup-instructions}

### ১. CyberPanel API সক্ষম করুন {#1-enable-the-cyberpanel-api}

১. অ্যাডমিনিস্ট্রেটর হিসেবে আপনার CyberPanel ড্যাশবোর্ডে লগ ইন করুন।
২. **Security** > **SSL** এ যান এবং নিশ্চিত করুন যে CyberPanel ইন্টারফেসের উপর SSL সক্রিয় আছে (নিরাপদ API কলের জন্য এটি প্রয়োজন)।
৩. CyberPanel API ডিফল্টভাবে `https://your-server-ip:8090/api/` এ উপলব্ধ। এটি সক্ষম করার জন্য কোনো অতিরিক্ত ধাপের প্রয়োজন নেই — অ্যাডমিন ব্যবহারকারীদের জন্য এটি ডিফল্টভাবে চালু থাকে।

### ২. wp-config.php এ কনস্ট্যান্ট যোগ করুন {#2-add-constants-to-wp-configphp}

`/* That's all, stop editing! */` লাইনের আগে আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলি যোগ করুন:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

অটো-SSL সক্ষম করতে (সুপারিশকৃত):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ৩. ইন্টিগ্রেশন সক্ষম করুন {#3-enable-the-integration}

১. আপনার WordPress নেটওয়ার্ক অ্যাডমিন থেকে **Ultimate Multisite** > **Settings** এ যান।
২. **Domain Mapping** ট্যাবে নেভিগেট করুন।
৩. **Host Integrations** পর্যন্ত স্ক্রল করুন।
৪. **CyberPanel** ইন্টিগ্রেশনটি সক্ষম করুন।
৫. **Save Changes** এ ক্লিক করুন।

### ৪. কানেক্টিভিটি যাচাই করুন {#4-verify-connectivity}

সেটিংস উইজার্ডে থাকা বিল্ট-ইন কানেকশন টেস্ট ব্যবহার করুন:

১. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** এ যান।
২. **Test Connection** এ ক্লিক করুন।
৩. একটি সাফল্যের বার্তা নিশ্চিত করে যে প্লাগইনটি CyberPanel API-এ পৌঁছাতে এবং সঠিকভাবে অথেন্টিকেট করতে পারে।

## এটি কিভাবে কাজ করে {#how-it-works}

### ডোমেইন ম্যাপিং {#domain-mapping}

যখন Ultimate Multisite-এ একটি ডোমেইন ম্যাপ করা হয়:

১. ইন্টিগ্রেশনটি আপনার CyberPanel হোস্টের `/api/createWebsite` এ একটি `POST` রিকোয়েস্ট পাঠায়।
২. CyberPanel কনফিগার করা প্যাকেজের অধীনে ডোমেইনের জন্য একটি নতুন ভার্চুয়াল হোস্ট তৈরি করে।
৩. ডকুমেন্ট রুটটি আপনার WordPress নেটওয়ার্ক রুট ডিরেক্টরিকে নির্দেশ করার জন্য সেট করা হয়।
৪. যখন ডোমেইন ম্যাপিং সরানো হয়, তখন ইন্টিগ্রেশনটি ভার্চুয়াল হোস্টটি পরিষ্কার করার জন্য `/api/deleteWebsite` কে কল করে।

### অটো-SSL {#auto-ssl}

যখন `WU_CYBERPANEL_AUTO_SSL` `true` হয়:

১. ভার্চুয়াল হোস্ট তৈরি হওয়ার পরে, ইন্টিগ্রেশনটি ডোমেইনের জন্য `/api/issueSSL` কে কল করে।
২. CyberPanel ACME HTTP-01 চ্যালেঞ্জ ব্যবহার করে একটি Let's Encrypt সার্টিফিকেট রিকোয়েস্ট করে।
৩. সার্টিফিকেটটি মেয়াদ শেষ হওয়ার আগে স্বয়ংক্রিয়ভাবে CyberPanel দ্বারা রিনিউ করা হয়।

> **গুরুত্বপূর্ণ:** Let's Encrypt কে ডোমেইনটি যাচাই করার জন্য DNS অবশ্যই আপনার সার্ভারের IP অ্যাড্রেসে সম্পূর্ণরূপে প্রোপাগেট (propagate) হতে হবে। ম্যাপিং করার পরপরই SSL ইস্যু করা ব্যর্থ হলে, DNS প্রোপাগেশন হওয়ার জন্য অপেক্ষা করুন এবং CyberPanel ড্যাশবোর্ডের **SSL** > **Manage SSL** এর অধীনে ম্যানুয়ালি SSL পুনরায় ট্রিগার করুন।

### www সাবডোমেইন {#www-subdomain}

যদি আপনার ডোমেইন ম্যাপিং সেটিংসের **Auto-create www subdomain** চালু থাকে, তবে ইন্টিগ্রেশনটি `www.<domain>` এর জন্য একটি ভার্চুয়াল হোস্ট অ্যালিয়াসও তৈরি করে এবং অটো-SSL চালু থাকলে, অ্যাপেক্স এবং www উভয় ভেরিয়েন্ট কভার করে একটি সার্টিফিকেট ইস্যু করে।

### ইমেল ফরোয়ার্ডার {#email-forwarders}

যখন [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) অ্যাডনটি সক্রিয় থাকে, তখন CyberPanel গ্রাহকদের জন্য ইমেল ফরোয়ার্ডারও সরবরাহ করতে পারে। ফরোয়ার্ডারগুলি একটি সম্পূর্ণ মেইলবক্স তৈরি না করে একটি ডোমেইন অ্যাড্রেস থেকে অন্য ইনবক্সে বার্তাগুলিকে রুট করে, যা `info@customer-domain.test` বা `support@customer-domain.test` এর মতো অ্যালিয়াসের জন্য উপযোগী।

গ্রাহকদের জন্য ফরোয়ার্ডার সক্ষম করার আগে:

১. নিশ্চিত করুন যে উপরের CyberPanel কনস্ট্যান্টগুলি কনফিগার করা হয়েছে এবং কানেকশন টেস্ট পাস করেছে।
২. ইমেল অ্যাডন সেটিংসের মধ্যে CyberPanel ইমেল প্রোভাইডার সক্ষম করুন।
৩. ফরোয়ার্ডার তৈরি করার আগে নিশ্চিত করুন যে গ্রাহকের ডোমেইনটি CyberPanel-এ বিদ্যমান।
৪. প্রোডাকশন প্ল্যানে ফিচারটি দেওয়ার আগে একটি টেস্ট ফরোয়ার্ডার তৈরি করুন এবং এর মাধ্যমে একটি বার্তা পাঠান।

যদি ফরোয়ার্ডার তৈরি করতে ব্যর্থ হয়, তবে প্রথমে Ultimate Multisite অ্যাক্টিভিটি লগগুলি পরীক্ষা করুন, তারপর CyberPanel-এ নিশ্চিত করুন যে সোর্স ডোমেইনটি বিদ্যমান এবং API ব্যবহারকারীর কাছে ইমেল-ম্যানেজমেন্ট পারমিশন আছে।

## কনফিগারেশন রেফারেন্স {#configuration-reference}

| কনস্ট্যান্ট | প্রয়োজনীয় | ডিফল্ট | বিবরণ |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | হ্যাঁ | — | আপনার CyberPanel ইনস্ট্যান্সের সম্পূর্ণ URL, পোর্ট সহ, যেমন: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | হ্যাঁ | — | CyberPanel অ্যাডমিন ইউজারনেম |
| `WU_CYBERPANEL_PASSWORD` | হ্যাঁ | — | CyberPanel অ্যাডমিন পাসওয়ার্ড |
| `WU_CYBERPANEL_PACKAGE` | হ্যাঁ | `Default` | নতুন ভার্চুয়াল হোস্টগুলিতে বরাদ্দ করার জন্য CyberPanel হোস্টিং প্যাকেজ |
| `WU_CYBERPANEL_AUTO_SSL` | না | `true` | ডোমেইন তৈরি করার পরে একটি Let's Encrypt SSL সার্টিফিকেট ইস্যু করে |
| `WU_CYBERPANEL_PHP_VERSION` | না | `PHP 8.2` | নতুন ভার্চুয়াল হোস্টগুলির জন্য PHP সংস্করণ (CyberPanel-এ ইনস্টল করা সংস্করণের সাথে মিলতে হবে) |
| `WU_CYBERPANEL_EMAIL` | না | — | SSL সার্টিফিকেট রেজিস্ট্রেশনের জন্য যোগাযোগের ইমেল |

## গুরুত্বপূর্ণ নোট {#important-notes}

- CyberPanel-এর API সেশন-ভিত্তিক টোকেন অথেন্টিকেশন ব্যবহার করে। ইন্টিগ্রেশনটি প্রতিটি API কলে স্বয়ংক্রিয়ভাবে টোকেন অধিগ্রহণ করে।
- আপনার CyberPanel অ্যাডমিন অ্যাকাউন্টে ওয়েবসাইট তৈরি এবং মুছে ফেলার অনুমতি থাকতে হবে।
- CyberPanel ডিফল্টভাবে `8090` পোর্টে চলে। যদি আপনার সার্ভারে ফায়ারওয়াল ব্যবহার করা হয়, তবে নিশ্চিত করুন যে এই পোর্টটি WordPress অ্যাপ্লিকেশন সার্ভার থেকে অ্যাক্সেসযোগ্য।
- ইন্টিগ্রেশনটি DNS রেকর্ড পরিচালনা করে না। Ultimate Multisite-এ ডোমেইন ম্যাপ করার আগে আপনাকে অবশ্যই ডোমেইন DNS আপনার সার্ভারের IP অ্যাড্রেসে পয়েন্ট করতে হবে।
- আপনি যদি OpenLiteSpeed (OLS) ব্যবহার করেন, তবে ভার্চুয়াল হোস্ট পরিবর্তনের পরে একটি গ্রেসফুল রিস্টার্ট স্বয়ংক্রিয়ভাবে ট্রিগার হয়। কোনো ম্যানুয়াল হস্তক্ষেপের প্রয়োজন নেই।

## সমস্যা সমাধান {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- যাচাই করুন যে আপনার সার্ভার ফায়ারওয়ালে পোর্ট `8090` খোলা আছে।
- নিশ্চিত করুন যে `WU_CYBERPANEL_HOST` ভ্যালুতে সঠিক প্রোটোকল (`https://`) এবং পোর্ট অন্তর্ভুক্ত আছে।
- পরীক্ষা করুন যে আপনার CyberPanel SSL সার্টিফিকেটটি বৈধ; সেলফ-সাইনড সার্টিফিকেটগুলি TLS ভেরিফিকেশন ব্যর্থ করতে পারে। শুধুমাত্র বিশ্বস্ত প্রাইভেট নেটওয়ার্ক পরিবেশে `WU_CYBERPANEL_VERIFY_SSL` কে `false` সেট করুন।

### Authentication Errors {#authentication-errors}

- সরাসরি CyberPanel-এ লগ ইন করে নিশ্চিত করুন যে আপনার `WU_CYBERPANEL_USERNAME` এবং `WU_CYBERPANEL_PASSWORD` সঠিক।
- বারবার ব্যর্থ লগইন প্রচেষ্টার পরে CyberPanel অ্যাকাউন্ট লক করে দেয়। যদি লকআউট হয় তবে CyberPanel-এ **Security** > **Brute Force Monitor** পরীক্ষা করুন।

### Domain Not Created {#domain-not-created}

- API ত্রুটির বার্তার জন্য Ultimate Multisite অ্যাক্টিভিটি লগ (**Ultimate Multisite** > **Activity Logs**) পরীক্ষা করুন।
- যাচাই করুন যে `WU_CYBERPANEL_PACKAGE`-এ সংজ্ঞায়িত প্যাকেজটি CyberPanel-এ বিদ্যমান (**Packages** > **List Packages**)।
- নিশ্চিত করুন যে ডোমেইনটি CyberPanel-এ ইতিমধ্যেই ওয়েবসাইট হিসেবে নিবন্ধিত নয় — ডুপ্লিকেট ওয়েবসাইট তৈরি করলে একটি ত্রুটি ফিরে আসে।

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- নিশ্চিত করুন যে DNS সম্পূর্ণরূপে প্রোপাগেট হয়েছে: `dig +short your-domain.com` এ আপনার সার্ভারের IP ফিরে আসা উচিত।
- Let's Encrypt রেট লিমিট প্রয়োগ করে। আপনি যদি সম্প্রতি একই ডোমেইনের জন্য বেশ কয়েকটি সার্টিফিকেট ইস্যু করে থাকেন, তবে পুনরায় চেষ্টা করার আগে অপেক্ষা করুন।
- সার্টিফিকেট ইস্যু ব্যর্থতার বিবরণ জানতে **Logs** > **Error Logs** এর অধীনে CyberPanel SSL লগগুলি পরীক্ষা করুন।
- একটি ফলব্যাক হিসাবে, আপনি CyberPanel থেকে ম্যানুয়ালি SSL ইস্যু করতে পারেন: **SSL** > **Manage SSL** > ডোমেইনটি নির্বাচন করুন > **Issue SSL**।

## রেফারেন্স {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
