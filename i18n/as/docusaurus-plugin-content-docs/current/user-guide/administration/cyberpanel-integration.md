---
title: CyberPanel একীকরণ
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel ইন্টিগ্ৰেচন

এই গাইডটোৱে কেনেকৈ Ultimate Multisite CyberPanel ইন্টিগ্ৰেচন কনফিগাৰ কৰিব লাগে, তাৰ বিষয়ে ব্যাখ্যা কৰে। ইয়াৰ জৰিয়তে আপোনাৰ নেটৱৰ্কৰ ম্যাপ কৰা ডোমেইনবোৰ স্বয়ংক্রিয়ভাৱে (auto) CyberPanel-ত virtual hosts হিচাপে যোগ কৰা (আৰু আঁতৰ কৰা) হ'ব, আৰু Let's Encryptৰ জৰিয়তে ঐচ্ছিক auto-SSL provisioning पनि কৰিব পাৰিব।

## ই কি কৰে

- যেতিয়া Ultimate Multisite-ত এটা ডোমেইন ম্যাপ কৰা হয়, তেতিয়া ইন্টিগ্ৰেচনটোৱে সেই ডোমেইনৰ বাবে এটা virtual host সৃষ্টি কৰিবলৈ CyberPanel API-লৈ কল কৰে।
- যেতিয়া ডোমেইন ম্যপিং আঁতৰ কৰা হয়, তেতিয়া ইন্টিগ্ৰেচনটোৱে সংশ্লিষ্ট virtual host ডিলিট কৰিবলৈ API-লৈ কল কৰে।
- auto-SSL সক্ষম কৰিলে, ইন্টিগ্ৰেচনটোৱে virtual host সৃষ্টি হোৱাৰ ঠিক পিছতে Let's Encrypt সার্টিফিকেট জাৰী কৰাৰ বাবে ট্ৰigger কৰে।
- ডোমেইন ম্যপিং ছেটিংছত থকা "Auto-create www subdomain" ছেটিংছৰ ওপৰত নিৰ্ভৰ কৰি, ই ঐচ্ছিকভাৱে `www.` alias যোগ বা আঁতৰ কৰে।

## প্ৰয়োজনীয়তা (Prerequisites)

- এটা চলি থকা CyberPanel ইনষ্টেন্স (v2.3 বা তাৰ পাছৰ বাবে পৰামৰ্শ দিয়া হয়) যি আপোনাৰ WordPress ছাৰ্ভাৰৰ পৰা উপলব্ধ হ'ব।
- এটা বিদ্যমান ওয়েবসাইট যি আপোনাৰ WordPress নেটৱৰ্কৰ মূল স্থান (root) হিচাপে সেৱা আগবঢ়ায়। ইন্টিগ্ৰেচনটোৱে এই ছাৰ্ভাৰলৈ নতুন virtual hosts যোগ কৰে।
- CyberPanel API এক্সেছ সক্ষম কৰা। Authentication-ৰ বাবে আপোনাৰ CyberPanel admin username আৰু password ব্যৱহাৰ কৰা হয়।
- auto-SSL-ক সঠিক সার্টিফিকেট জাৰী কৰিবলৈ, ম্যাপ কৰা ডোমেইনবোৰৰ বাবে আপোনাৰ DNS ৰেকৰ্ডবোৰ ইতিমধ্যে আপোনাৰ ছাৰ্ভাৰৰ IP addressলৈ পয়েন্ট কৰা থাকিব লাগিব।

## আবশ্যকতা (Requirements)

তলৰ ধ্ৰুৱক (constants) সমূহ আপোনাৰ `wp-config.php` ফাইলত সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ঐচ্ছিকভাৱে, আপুনি এইবোৰো সংজ্ঞায়িত কৰিব পাৰে:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — ডোমেইন সৃষ্টিৰ পিছত Let's Encrypt SSL জাৰী কৰে
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL সার্টিফিকেটৰ যোগাযোগৰ বাবে ব্যৱহৃত
```

## সেটআপ নিৰ্দেশাবলী (Setup Instructions)

### ১. CyberPanel API সক্ষম কৰক

১. এজন প্ৰশাসক হিচাপে আপোনাৰ CyberPanel ড্যাশবোর্ডত লগ ইন কৰক।
২. **Security** > **SSL** লৈ যাওক আৰু নিশ্চিত কৰক যে CyberPanel interfacet-ত SSL সক্ষম হৈ আছে (নিৰাপদ API কলৰ বাবে প্ৰয়োজনীয়)।
৩. CyberPanel API ডিফল্টভাৱে `https://your-server-ip:8090/api/` ত উপলব্ধ। ই সক্ষম কৰিবলৈ কোনো অতিৰিক্ত পদক্ষেপৰ প্ৰয়োজন নাই — ই প্ৰশাসক ব্যৱহাৰকাৰীসকলৰ বাবে ডিফল্টভাৱে সক্ষম হৈ থাকে।

### ২. wp-config.php ত ধ্ৰুৱক যোগ কৰক

তলৰ ধ্ৰুৱকসমূহ আপোনাৰ `wp-config.php` ফাইলত `/* That's all, stop editing! */` লাইনৰ আগতে যোগ কৰক:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL সক্ষম কৰিবলৈ (পৰামৰ্শ দিয়া হয়):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ৩. ইন্টিগ্ৰেচন সক্ষম কৰক

১. আপোনাৰ WordPress নেটৱৰ্ক প্ৰশাসিতাত, **Ultimate Multisite** > **Settings** লৈ যাওক।
২. **Domain Mapping** ট্ৰিখনলৈ নেভিগেট কৰক।
৩. **Host Integrations** লৈ তললৈ স্ক্ৰল কৰক।
৪. **CyberPanel** ইন্টিগ্ৰেচনটো সক্ষম কৰক।
৫. **Save Changes** ক্লিক কৰক।

### ৪. সংযোগ পৰীক্ষা কৰক (Verify Connectivity)

ছেটিংছ উইজৰ্ডত থকা বিল্ট-ইন সংযোগ পৰীক্ষা ব্যৱহাৰ কৰক:

১. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** লৈ যাওক।
২. **Test Connection** ক্লিক কৰক।
৩. এটা সফলতাৰ বাৰ্তা দিয়ে যে প্লাগইনটোৱে CyberPanel API লৈ উপনীত হ'ব পাৰে আৰু সঠিকভাৱে authenticate কৰিব পাৰে।

## ই কেনেকৈ কাম কৰে (How It Works)

### ডোমেইন ম্যপিং (Domain Mapping)

যেতিয়া Ultimate Multisite-ত এটা ডোমেইন ম্যাপ কৰা হয়:

১. ইন্টিগ্ৰেচনটোৱে আপোনাৰ CyberPanel host-ৰ `/api/createWebsite` লৈ এটা `POST` ৰিকৱেষ্ট পঠিয়ায়।
২. CyberPanel-এ নিৰ্ধাৰিত পেকেজৰ অধীনত ডোমেইনৰ বাবে এটা নতুন virtual host সৃষ্টি কৰে।
৩. ডক्युমেণ্ট ৰুট (document root) আপোনাৰ WordPress নেটৱৰ্কৰ মূল ডাইৰেক্টৰীলৈ পয়েন্ট কৰা হয়।
৪. ডোমেইন ম্যপিং আঁতৰ কৰা হ'লে, ইন্টিগ্ৰেচনটোৱে virtual host सफা কৰিবলৈ `/api/deleteWebsite` লৈ কল কৰে।

### auto-SSL

যেতিয়া `WU_CYBERPANEL_AUTO_SSL` `true` হয়:

১. virtual host সৃষ্টি হোৱাৰ পিছত, ইন্টিগ্ৰেচনটোৱে ডোমেইনৰ বাবে `/api/issueSSL` লৈ কল কৰে।
২. CyberPanel-এ ACME HTTP-01 challenge ব্যৱহাৰ কৰি এটা Let's Encrypt সার্টিফিকেটৰ বাবে অনুৰোধ কৰে।
৩. সার্টিফিকেটটো CyberPanel-এ মেয়াদ পূৰ্ণ হোৱাৰ আগতে স্বয়ংক্রিয়ভাৱে পুনৰনিৰ্মাণ কৰে।

> **গুৰুত্বপূৰ্ণ:** Let's Encrypt-এ ডোমেইনটো বৈধতা দিবলৈ DNS সম্পূৰ্ণৰূপে আপোনাৰ ছাৰ্ভাৰৰ IP addressলৈ প্ৰচাৰিত (propagated) হোৱাটো প্ৰয়োজনীয়। যদি ম্যপিংৰ ঠিক পিছত SSL জাৰী কৰাত কোনো সমস্যা হয়, তেন্তে DNS প্ৰচাৰণৰ বাবে অপেক্ষা কৰক আৰু CyberPanel ড্যাশবৰ্ডৰ **SSL** > **Manage SSL** ৰ অধীনত SSL পুনৰ ট্ৰigger কৰক।

### www সাবডোমেইন (www Subdomain)

যদি আপোনাৰ Domain Mapping ছেটিংছত **Auto-create www subdomain** সক্ষম কৰা থাকে, তেন্তে ইন্টিগ্ৰেচনটোৱে `www.<domain>` ৰ বাবে এটা virtual host aliasো সৃষ্টি কৰে আৰু, auto-SSL সক্ষম থাকিলে, apex আৰু www দুয়োটা ভৰিয়েন্ট কভার কৰা এটা সার্টিফিকেট জাৰী কৰে।

### ইমেইল ফৰৱাৰ্ডাৰ (Email Forwarders)

যেতিয়া [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addons সক্ষম থাকে, তেতিয়া CyberPanel-এ ग्राहक ইমেইল ফৰৱাৰ্ডাৰো প্ৰদান কৰিব পাৰে। ফৰৱাৰ্ডাৰসমূহে এটা ডোমেইন এড্ৰেছৰ পৰা আন এটা ইনবক্সলৈ মেছেজ ৰুট কৰে, যাৰ বাবে এটা সম্পূৰ্ণ মেবক্স সৃষ্টি কৰাৰ প্ৰয়োজন নহয়। ই `info@customer-domain.test` বা `support@customer-domain.test` আদি alias-ৰ বাবে ব্যৱহাৰকাৰী।

প্ৰযোজ্য স্কিমত ফৰৱাৰ্ডাৰ সক্ষম কৰাৰ আগতে:

১. নিশ্চিত কৰক যে ওপৰত উল্লেখ কৰা CyberPanel ধ্ৰুৱকসমূহ কনফিগাৰ কৰা হৈছে আৰু সংযোগ পৰীক্ষাই সফল হৈছে।
২. ইমেইল addons ছেটিংছত CyberPanel ইমেইল প্ৰোভাইডাৰ সক্ষম কৰক।
৩. ফৰৱাৰ্ডাৰ সৃষ্টি কৰাৰ আগতে নিশ্চিত কৰক যে গ্রাহক ডোমেইনটো CyberPanel-ত ইতিমধ্যে বিদ্যমান।
৪. প্ৰডাকচন প্লেনত এই বৈশিষ্ট্যটো আগবঢ়াবলৈ তাৰ পৰা এটা ট্ৰীষ্ট ফৰৱাৰ্ডাৰ সৃষ্টি কৰক আৰু ইয়াৰ মাজেৰে এটা মেছেজ প্ৰেৰণ কৰক।

যদি ফৰৱাৰ্ডাৰ সৃষ্টি কৰাত কোনো সমস্যা হয়, প্ৰথমে Ultimate Multisite activity logs পৰীক্ষা কৰক, তাৰ পিছত CyberPanel-ত নিশ্চিত কৰক যে উৎস ডোমেইনটো বিদ্যমান আৰু API ব্যৱহাৰকাৰীৰ ওৱেৰী-প্ৰৱস্থাপনা (email-management) অনুমতি আছে।

## কনফিগাৰেচন প্ৰেৰঞ্জী (Configuration Reference)

| ধ্ৰুৱক (Constant) | প্ৰয়োজনীয় (Required) | ডিফল্ট (Default) | বৰ্ণনা (Description) |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | হয় (Yes) | — | আপোনাৰ CyberPanel ইনষ্টেন্সলৈ সম্পূৰ্ণ URL, প’ৰ্ট সহ, যেনে: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | হয় (Yes) | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | হয় (Yes) | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | হয় (Yes) | `Default` | নতুন virtual hosts লৈ যোৱা CyberPanel হোষ্টিং পেকেজ |
| `WU_CYBERPANEL_AUTO_SSL` | নহয় (No) | `true` | ডোমেইন সৃষ্টিৰ পিছত Let's Encrypt SSL সার্টিফিকেট জাৰী কৰে |
| `WU_CYBERPANEL_PHP_VERSION` | নহয় (No) | `PHP 8.2` | নতুন virtual hostsৰ বাবে PHP সংস্কৰণ (যিটো CyberPanel-ত স্থাপন কৰা সংস্কৰণৰ সৈতে মিলিব লাগিব) |
| `WU_CYBERPANEL_EMAIL` | নহয় (No) | — | SSL সার্টিফিকেট ৰেকচনেচনৰ বাবে যোগাযোগ ইমেইল |

## গুৰুত্বপূৰ্ণ টোকা (Important Notes)

- CyberPanel-ৰ API-এ session-based token authentication ব্যৱহাৰ কৰে। ইন্টিগ্ৰেচনটোৱে প্ৰতিটো API কলত স্বয়ংক্রিয়ভাৱে টোকেন লাভ কৰে।
- আপোনাৰ CyberPanel admin account-ত ওয়েবসাইট সৃষ্টি কৰা আৰু ডিলিট কৰাৰ অনুমতি থাকিব লাগিব।
- CyberPanel ডিফল্টভাৱে `8090` প’ৰ্টত চলি। যদি আপোনাৰ ছাৰ্ভৰে ফায়াৰৱল ব্যৱহাৰ কৰে, তেন্তে এই প’ৰ্টটো WordPress application serverৰ পৰা উপলব্ধ হ'ব বুলি নিশ্চিত কৰক।
- ইন্টিগ্ৰেচনটোৱে DNS ৰেকৰ্ডসমূহ ব্যৱস্থাপনা নকৰে। Ultimate Multisite-ত ডোমেইন ম্যাপ কৰাৰ আগতে আপুনি ডোমেইনৰ DNS আপোনাৰ ছাৰ্ভাৰৰ IP addressলৈ পয়েন্ট কৰিব লাগিব।
- যদি আপুনি OpenLiteSpeed (OLS) ব্যৱহাৰ কৰে, তেন্তে virtual host সলনি হোৱাৰ পিছত এটা graceful restart স্বয়ংক্রিয়ভাৱে ট্ৰigger হয়। কোনো হাতেৰে হস্তক্ষেপৰ প্ৰয়োজন নাই।

## সমস্যা সমাধান (Troubleshooting)

### API Connection Refused

- নিশ্চিত কৰক যে আপোনাৰ ছাৰ্ভাৰ ফায়াৰৱলত প’ৰ্ট `8090` খোলা আছে।
- নিশ্চিত কৰক যে `WU_CYBERPANEL_HOST` মানত সঠিক প্ৰটোকল (`https://`) আৰু প’ৰ্ট অন্তৰ্ভুক্ত হৈছে।
- পৰীক্ষা কৰক যে আপোনাৰ CyberPanel SSL সার্টিফিকেটটো বৈধ; self-signed সার্টিফিকেটসমূহে TLS verification failure সৃষ্টি কৰিব পাৰে। কেৱল বিশ্বাসযোগ্য ব্যক্তিগত নেটৱৰ্ক পৰিৱেশতহে `WU_CYBERPANEL_VERIFY_SSL` लाई `false` সেট কৰক।

### Authentication Errors

- CyberPanel-ত পোনপটীয়াকৈ লগ ইন কৰি নিশ্চিত কৰক যে আপোনাৰ `WU_CYBERPANEL_USERNAME` আৰু `WU_CYBERPANEL_PASSWORD` সঠিক।
- বহু বৰঙণিৰে লগ ইন কৰাত CyberPanel-এ একাউণ্ট লক কৰি দিয়ে। যদি লকআউট হয়, তেন্তে CyberPanel-ত **Security** > **Brute Force Monitor** পৰীক্ষা কৰক।

### Domain Not Created

- API error message-ৰ বাবে Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) পৰীক্ষা কৰক।
- নিশ্চিত কৰক যে `WU_CYBERPANEL_PACKAGE` ত সংজ্ঞায়িত পেকেজটো CyberPanel-ত বিদ্যমান (**Packages** > **List Packages**)।
- নিশ্চিত কৰক যে ডোমেইনটো CyberPanel-ত ইতিমধ্যে এটা ওয়েবসাইট হিচাপে ৰেজিষ্ট্ৰেড নহয় — ডুপ্লিকেট ওয়েবসাইট সৃষ্টি কৰিলে এটা error আহিব।

### SSL Certificate Not Issued

- নিশ্চিত কৰক যে DNS সম্পূৰ্ণৰূপে প্ৰচাৰিত হৈছে: `dig +short your-domain.com` লৈ গ'লে আপোনাৰ ছাৰ্ভাৰৰ IP আহিব লাগে।
- Let's Encrypt-এ rate limits বলবৎ কৰে। যদি আপুনি শেহতীয়াভাৱে একে ডোমেইনৰ বাবে কেইবাটাও সার্টিফিকেট জাৰী কৰিছে, তেন্তে পুনৰ চেষ্টা কৰাৰ আগতে অপেক্ষা কৰক।
- সার্টিফিকেট জাৰী কৰাত সমস্যাৰ বিৱৰণৰ বাবে **Logs** > **Error Logs** তলত CyberPanel SSL logs পৰীক্ষা কৰক।
- এটা বিকল্প হিচাপে, আপুনি CyberPanel-ৰ পৰা SSL হাতেৰে জাৰী কৰিব পাৰে: **SSL** > **Manage SSL** > ডোমেইনটো বাছি লওক > **Issue SSL**।

## তথ্যসূত্র (References)

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
