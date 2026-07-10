---
title: Cloudways Integration
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration {#cloudways-integration}

## Overview {#overview}
Cloudways হৈছে এটা managed cloud hosting platform, যিয়ে আপোনাক DigitalOcean, AWS, Google Cloud আৰু ইয়াৰ দৰে বিভিন্ন cloud provider-ত WordPress site deploy কৰিবলৈ অনুমতি দিয়ে। এই integration-এ Ultimate Multisite আৰু Cloudwaysৰ মাজত automatic domain syncing আৰু SSL certificate management সক্ষম কৰে।

## Features {#features}
- Automatic domain syncing (স্বয়ংক্রিয় ডোমেইন Syncing)
- SSL certificate management (SSL সার্টিফিকেট ব্যৱস্থাপনা)
- Support for extra domains (অতিরিক্ত ডোমেইনৰ বাবে সমৰ্থন)
- DNS validation for SSL certificates (SSL সার্টিফিকেটৰ বাবে DNS validation)

## Requirements {#requirements}
আপোনাৰ `wp-config.php` ফাইলত তলৰ ধ্ৰুৱক (constants) সমূহ সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ঐচ্ছিকভাৱে, আপুনি এইটোও সংজ্ঞায়িত কৰিব পাৰে:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your Cloudways API Credentials {#1-get-your-cloudways-api-credentials}

1. আপোনাৰ Cloudways dashboard-লৈ লগ ইন কৰক
2. "Account" > "API Keys" লৈ যাওক
3. যদি আপোনাৰ API key নাই, তেন্তে এটা generate কৰক
4. আপোনাৰ ইমেইল আৰু API key কপি কৰক

### 2. Get Your Server and Application IDs {#2-get-your-server-and-application-ids}

1. আপোনাৰ Cloudways dashboard-ত, "Servers" লৈ যাওক
2. য'ত আপোনাৰ WordPress multisite host কৰা হৈছে, সেই server টি select কৰক
3. Server ID টি URL ত দেখা যায়: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" লৈ যাওক আৰু আপোনাৰ WordPress application টি select কৰক
5. App ID টি URL ত দেখা যায়: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

তলৰ ধ্ৰুৱকসমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰক:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

যদি আপোনাৰ অধিক **external** ডোমেইন (আপোনাৰ multisite network বাহিৰৰ) আছে যিবোৰ সদায় Cloudways aliases list-ত থাকিব লাগে:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning নিজৰ network-ৰ wildcard অন্তৰ্ভুক্ত নকৰিব
`WU_CLOUDWAYS_EXTRA_DOMAINS`-ত `*.your-network.com` (বা আপোনাৰ নিজৰ network-ৰ কোনো subdomain pattern) **যোগ নকৰিব**। ইয়াৰ কাৰণ তলত দিয়া [Important — wildcard SSL pitfall](#important--wildcard-ssl-pitfall)-ত দিয়া হৈছে।
:::

### 4. Enable the Integration {#4-enable-the-integration}

1. আপোনাৰ WordPress admin-ত, Ultimate Multisite > Settings লৈ যাওক
2. "Domain Mapping" টোবীলৈ navigate কৰক
3. "Host Integrations" লৈ scroll কৰক
4. Cloudways integration টি enable কৰক
5. "Save Changes" ক্লিক কৰক

## How It Works {#how-it-works}

### Domain Syncing {#domain-syncing}

যদি Ultimate Multisite-ত এটা ডোমেইন map কৰা হয়:

1. integration-এ বৰ্তমান map কৰা সকলো ডোমেইন retrieve কৰে
2. ই নতুন ডোমেইনটো list-ত যোগ কৰে (যদি প্ৰযোজ্য হয় তেন্তে www version লগত)
3. ই সম্পূৰ্ণ list টি API মাজেৰে Cloudways লৈ পঠিয়ায়
4. Cloudways-এ আপোনাৰ application-ৰ বাবে ডোমেইন aliases update কৰে

নোট: Cloudways API-লৈ প্ৰতিবাৰ সম্পূৰ্ণ ডোমেইন list পঠিয়াব লাগিব, কেৱল এটা ডোমেইন যোগ বা বাদ দি নহ'ব।

### SSL Certificate Management {#ssl-certificate-management}

ডোমেইন sync হোৱাৰ পিছত:

1. integration-এ পৰীক্ষা কৰে যে কোন ডোমেইনৰ DNS record আছে যি আপোনাৰ server লৈ point কৰি আছে
2. ই সেই ডোমেইনসমূহৰ বাবে Let's Encrypt SSL certificate install কৰিবলৈ Cloudways লৈ এটা request পঠিয়ায়
3. Cloudways-এ SSL certificate issue কৰা আৰু install কৰাৰ কামটো সামৰি লয়

integration-এ সদায় **standard** (non-wildcard) Let's Encrypt certificate Cloudways ካৰ পৰা request কৰে। যদি `WU_CLOUDWAYS_EXTRA_DOMAINS`-ত এটা wildcard pattern দিয়া হয়, তেন্তে SSL request কৰাৰ আগতে আগৰ `*.` টি strip কৰা হয় — wildcard নিজে এই integration-এ কেতিয়াও install নকৰে। Cloudways ত wildcard certificate ব্যৱহাৰ কৰিবলৈ আপুনি ইয়াক নিজে install কৰিব লাগিব, কিন্তু এনে কৰিলে map কৰা custom domain সমূহৰ বাবে per-domain Let's Encrypt issuance বন্ধ হৈ যায় (pitfall তলত চাওক)।

## Extra Domains {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant-এ আপোনাক অধিক **external** ডোমেইন specify কৰিবলৈ অনুমতি দিয়ে যিবোৰ সদায় Cloudways application-ৰ aliases list-ত থাকিব লাগে। ই ব্যৱহাৰ কৰক:

- বাহ্যিক ডোমেইন যিবোৰ Ultimate Multisite-এ manage নকৰে (উদাহৰণস্বৰূপে, একেটা Cloudways application ভাগ কৰা এটা separate marketing site)
- Parked বা staging ডোমেইন যিবোৰ আপুনি application aliases list-ত ৰাখিব বিচাৰে

আপোনাৰ নিজৰ network-ৰ subdomain wildcard (উদাহৰণস্বৰূপে, `*.your-network.com`) ৰ বাবে এই constant ব্যৱহাৰ নকৰিব। wildcard SSL pitfall তলত চাওক।

## Important — Wildcard SSL Pitfall {#important--wildcard-ssl-pitfall}

Cloudways-ৰ default setup অনুসৰণ কৰোঁতে এটা সাধাৰণ ভুল হ'ল যে `*.your-network.com` जस्तो wildcard টি `WU_CLOUDWAYS_EXTRA_DOMAINS`-ত যোগ কৰা, বা সেই wildcard-ৰ বাবে Cloudways wildcard SSL certificate নিজে install কৰা।

**যদি আপুনি এনে কৰে, তেন্তে Cloudways-এ Ultimate Multisite-এ map কৰা per-tenant custom domain সমূহৰ বাবে Let's Encrypt certificate issue কৰিবলৈ অস্বীকাৰ কৰিব।** Cloudways প্ৰতিবাৰ application-ত active SSL certificate টি replace কৰে, আৰু application-ত থকা এটা pre-existing wildcard certificate-এ per-domain Let's Encrypt issuance বন্ধ কৰি দিয়ে, যাৰ ওপৰত integration-এ নিৰ্ভৰ কৰে।

### Ultimate Multisite network-ৰ বাবে Cloudways SSL setup ব্যৱস্থা {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways application-ৰ **SSL Certificate** টোবীলৈ যাওক, য'ত কেৱল `your-network.com` আৰু `www.your-network.com` ক কভার কৰা এটা **standard Let's Encrypt certificate** install কৰক — **wildcard নহয়**।
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`-ত `*.your-network.com` (বা আপোনাৰ নিজৰ network-ৰ কোনো subdomain pattern) **পৰো নহ'ব**। এই constant টি কেৱল **external** ডোমেইনৰ বাবে সংৰক্ষিত।
3. subsites resolve কৰিবলৈ per-tenant subdomain wildcard টি কেৱল **DNS** স্তৰত (এটা `A` record যি `*.your-network.com` ক আপোনাৰ Cloudways server IP লৈ point কৰে) সৃষ্টি কৰক। তাৰ পিছত, individual map কৰা custom domain সমূহৰ বাবে SSL certificate টি Let's Encrypt মাজেৰে integration-এ স্বয়ংক্রিয়ভাৱে issue কৰে।

যদি আপোনাৰ tenants-ৰ custom domain সমূহ SSL অবিহনে अड्ক গৈ থাকে, তেন্তে Cloudways SSL টোবীলৈ চাওক। যদি তাত এটা wildcard certificate active আছে, তেন্তে ইয়াক remove কৰক, কেৱল মূল network domain (`your-network.com`, `www.your-network.com`) ক কভার কৰা এটা standard Let's Encrypt certificate reissue কৰক, আৰু `WU_CLOUDWAYS_EXTRA_DOMAINS`-ৰ পৰা কোনো wildcard entry remove কৰক। তাৰ পিছত এটা domain mapping re-trigger কৰক (বা পৰৱৰ্তীটোৰ বাবে অপেক্ষা কৰক) আৰু integration-এ পুনৰ per-domain certificate request কৰিবলৈ আৰম্ভ কৰিব।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- নিশ্চিত কৰক যে আপোনাৰ ইমেইল আৰু API key সঠিক।
- পৰীক্ষা কৰক যে আপোনাৰ server আৰু application IDs সঠিক।
- নিশ্চিত কৰক যে আপোনাৰ Cloudways account-ত প্ৰয়োজনীয় permissions আছে।

### SSL Certificate Issues {#ssl-certificate-issues}
- Cloudways-এ SSL certificate issue কৰাৰ আগতে ডোমেইনসমূহে আপোনাৰ server লৈ valid DNS record থকাটো প্ৰয়োজন।
- integration-এ SSL certificate request কৰাৰ আগতে DNS record validate কৰে।
- যদি SSL certificate issue নহ'বলৈ থাকে, তেন্তে পৰীক্ষা কৰক যে আপোনাৰ ডোমেইনসমূহ সঠিকভাৱে আপোনাৰ server-ৰ IP address লৈ point কৰি আছে নেকি।
- **Per-tenant custom domain SSL অবিহনে अड्ক গৈ আছে?** Cloudways application-ৰ SSL Certificate টোবীলৈ চাওক। যদি এটা wildcard certificate (manually installed, বা `*.your-network.com` ক কভার কৰা) active আছে, তেন্তে Cloudways-এ individual map কৰা custom domain সমূহৰ বাবে Let's Encrypt certificate issue কৰিব। ইয়াক standard Let's Encrypt certificate লৈ সলনি কৰক যিয়ে কেৱল মূল network domain (`your-network.com`, `www.your-network.com`) ক কভার কৰে, আৰু `WU_CLOUDWAYS_EXTRA_DOMAINS`-ৰ পৰা কোনো wildcard entry remove কৰক। তাৰ পিছত এটা domain mapping re-trigger কৰক (বা পৰৱৰ্তীটোৰ বাবে অপেক্ষা কৰক) আৰু integration-এ per-domain certificate request কৰিবলৈ আৰম্ভ কৰিব।

### Domain Not Added {#domain-not-added}
- কোনো error message বা কোনো Ultimate Multisite logs পৰীক্ষা কৰক।
- পৰীক্ষা কৰক যে ডোমেইনটো Cloudways-ত ইতিমধ্যে যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ Cloudways plan-এ আপুনি যোগ কৰা ডোমেইন সংখ্যাটো সমৰ্থন কৰে।
