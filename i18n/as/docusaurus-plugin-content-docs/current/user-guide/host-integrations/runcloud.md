---
title: RunCloud Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration {#runcloud-integration}

## Overview {#overview}
RunCloud এটা ক্লাউড-ভিত্তিক ছerver व्यवस्थापन प्लेटफर्म हो, যাৰ জৰিয়তে আপুনি নিজৰ ক্লাউড ছerverত সহজে web application deploy আৰু manage কৰিব পাৰে। এই ইন্টিগ্ৰেচনটোৱে Ultimate Multisite আৰু RunCloudৰ মাজত স্বয়ংক্রিয় ডোমেইন Syncing আৰু SSL সার্টিফিকেট ব্যৱস্থাপনা কৰে।

## Features {#features}
- স্বয়ংক্রিয় ডোমেইন Syncing
- SSL সার্টিফিকেট ব্যৱস্থাপনা
- ম্য্যাপিং (mappings) ডিলিট কৰিলে ডোমেইন আঁতৰোৱা

## Requirements {#requirements}
তলৰ ধ্ৰুৱক (constants) সমূহ আপোনাৰ `wp-config.php` ফাইলত সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your RunCloud API Credentials {#1-get-your-runcloud-api-credentials}

1. আপোনাৰ RunCloud dashboard-লৈ লগ ইন কৰক
2. "User Profile"-লৈ যাওক (উপৰ-ডান কোণত থকা আপোনাৰ profile picture मा ক্লিক কৰক)
3. মেনুৰ পৰা "API" বাছি লওক
4. যদি আপোনাৰ API Key নাই, তেন্তে "Generate API Key" मा ক্লিক কৰক
5. আপোনাৰ API Key আৰু API Secret কপি কৰক

### 2. Get Your Server and App IDs {#2-get-your-server-and-app-ids}

1. আপোনাৰ RunCloud dashboard-ত, "Servers"-লৈ যাওক
2. য'ত আপোনাৰ WordPress multisite হোস্ট কৰা হৈছে, সেই ছerverটো বাছি লওক
3. Server ID টি URL ত দেখা যায়: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"-লৈ যাওক আৰু আপোনাৰ WordPress application বাছি লওক
5. App ID টি URL ত দেখা যায়: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

তলৰ ধ্ৰুৱক (constants) সমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰক:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. আপোনাৰ WordPress admin-ত, Ultimate Multisite > Settings লৈ যাওক
2. "Domain Mapping" ট্ৰিখনলৈ যোৱা
3. "Host Integrations" লৈ তললৈ নামি আহক
4. RunCloud ইন্টিগ্ৰেচনটো সক্ষম কৰক
5. "Save Changes" मा ক্লিক কৰক

## How It Works {#how-it-works}

যেতিয়া Ultimate Multisite-ত এটা ডোমেইন ম্য্যাপ কৰা হয়:

1. ইন্টিগ্ৰেচনটোৱে ডোমেইনটো আপোনাৰ application লৈ যোগ কৰিবলৈ RunCloud-ৰ API লৈ এটা অনুৰোধ (request) প্ৰেণ কৰে।
2. যদি ডোমেইনটো সফলভাৱে যোগ কৰা হয়, তেন্তে ইন্টিগ্ৰেচনটোৱে SSL সার্টিফিকেটও পুনৰ স্থাপন (redeploy) কৰিব।
3. যেতিয়া কোনো ডোমেইন ম্য্যাপিং আঁতৰোৱা হয়, ইন্টিগ্ৰেচনটোৱে RunCloudৰ পৰা ডোমেইনটো আঁতৰাই দিয়ে।

সাবডোমেইন (subdomain) স্থাপনৰ বাবে, আপোনাৰ নেটৱৰ্কত নতুন স্থান (sites) যোগ কৰাৰ লগে লগে ইন্টিগ্ৰেচনটোৱে RunCloud-ত স্বয়ংক্রিয়ভাৱে সাবডোমেইন সৃষ্টি কৰিব।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- নিশ্চিত কৰক যে আপোনাৰ API credentials সঠিক আছে।
- পৰীক্ষা কৰক যে আপোনাৰ ছerver আৰু app IDs সঠিক আছে।
- নিশ্চিত কৰক যে আপোনাৰ RunCloud account-ত প্ৰয়োজনীয় অনুমতি (permissions) আছে।

### SSL Certificate Issues {#ssl-certificate-issues}
- RunCloud-এ SSL সার্টিফিকেট জাৰি কৰিবলৈ কিছু সময় ল'ব পাৰে।
- নিশ্চিত কৰক যে আপোনাৰ ডোমেইনবোৰ সঠিকভাৱে আপোনাৰ ছerverৰ IP address লৈ আঙুলিয়াই আছে।
- আপোনাৰ application-ৰ বাবে RunCloud SSL settings পৰীক্ষা কৰক।

### Domain Not Added {#domain-not-added}
- কোনো ভুল বাণীবীক্ষণ (error messages) বা Ultimate Multisite logs পৰীক্ষা কৰক।
- নিশ্চিত কৰক যে ডোমেইনটো ইতিমধ্যে RunCloud-ত যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ RunCloud plan-এ বহু ডোমেইন সমৰ্থন কৰে।
