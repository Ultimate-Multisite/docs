---
title: GridPane সংহতিকৰণ
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration

## Overview {#overview}
GridPane হৈছে এটা বিশেষিত WordPress হোস্টিং কণ্ট্ৰল প্যানেল যি গধুৰ WordPress প্ৰফেশ্যনেলসকলৰ বাবে নিৰ্মাণ কৰা হৈছে। এই ইন্টিগ্ৰেচনটোৱে Ultimate Multisite আৰু GridPaneৰ মাজত স্বয়ংক্রিয় ডোমেইন সিঙ্কিং (automatic domain syncing) আৰু SSL সার্টিফিকেট ব্যৱস্থাপনা (SSL certificate management) সক্ষম কৰে।

## Features {#features}
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- SSL সার্টিফিকেট ব্যৱস্থাপনা
- SUNRISE constant ৰ স্বয়ংক্রিয় কনফিগাৰেশ্যন

## Requirements {#requirements}
আপোনাৰ `wp-config.php` ফাইলত তলৰ ধৰণৰ constant সমূহ সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your GridPane API Credentials {#1-get-your-gridpane-api-credentials}

1. আপোনাৰ GridPane dashboard লৈ লগ ইন কৰক
2. "Settings" > "API" লৈ যাওক
3. যদি আপোনাৰ API key নাই তেন্তে এটা API key জেনারেট কৰক
4. আপোনাৰ API key কপি কৰক

### 2. Get Your Server and Site IDs {#2-get-your-server-and-site-ids}

1. আপোনাৰ GridPane dashboard ত, "Servers" লৈ যাওক
2. য'ত আপোনাৰ WordPress multisite হোষ্ট কৰা হৈছে, সেই server টি বাছি লওক
3. Server ID টো মন কৰক (এইটো URL ত বা server details page ত দেখা যায়)
4. "Sites" লৈ যাওক আৰু আপোনাৰ WordPress site টি বাছি লওক
5. Site ID টো মন কৰক (এইটো URL ত বা site details page ত দেখা যায়)

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

তলৰ constant সমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰক:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. আপোনাৰ WordPress admin ত, Ultimate Multisite > Settings লৈ যাওক
2. "Domain Mapping" টোৱে নেভিগেট কৰক
3. "Host Integrations" লৈ তললৈ স্ক্রল কৰক
4. GridPane ইন্টিগ্ৰেচনটো সক্ষম কৰক
5. "Save Changes" ক্লিক কৰক

## How It Works {#how-it-works}

જ્યારે Ultimate Multisite ত এটা ডোমেইন ম্যাপ কৰা হয়:

1. ইন্টিগ্ৰেচনটোৱে ডোমেইনটো আপোনাৰ site লৈ যোগ কৰিবলৈ GridPane-ৰ API লৈ এটা অনুৰোধ (request) প্ৰেণ কৰে
2. GridPane স্বয়ংক্রিয়ভাৱে SSL সার্টিফিকেট প্ৰোভিজানিং (provisioning) ব্যৱস্থা কৰে
3. যেতিয়া ডোমেইন ম্যপিংটো আঁতৰাই দিয়া হয়, তেতিয়া ইন্টিগ্ৰেচনটোৱে GridPaneৰ পৰা ডোমেইনটো আঁতৰাই দিয়ে

এই ইন্টিগ্ৰেচনটোৱে আপোনাৰ wp-config.php ফাইলত থকা SUNRISE constant টোও স্বয়ংক্রিয়ভাৱে ব্যৱস্থাপনা কৰে, যি ডোমেইন ম্যপিং সঠিকভাৱে কাম কৰিবলৈ প্ৰয়োজনীয়।

## SUNRISE Constant Management {#sunrise-constant-management}

GridPane ইন্টিগ্ৰেচনটোৰ এটা বিশেষ বৈশিষ্ট্য হ'ল যে ই GridPane-ৰ নিজৰ ডোমেইন ম্যপিং ব্যৱস্থাৰ সৈতে সংঘাত (conflict) হোৱাৰ পৰা ৰেখাৰ বাবে wp-config.php ত থকা SUNRISE constant টো স্বয়ংক্রিয়ভাৱে revert কৰে। ই নিশ্চিত কৰে যে দুয়োটা ব্যৱস্থাই কোনো সমস্যা নোহোৱাকৈ একেলগে কাম কৰিব পাৰে।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- নিশ্চিত কৰক যে আপোনাৰ API key সঠিক আছে
- পৰীক্ষা কৰক যে আপোনাৰ server আৰু site ID সঠিক আছে
- নিশ্চিত কৰক যে আপোনাৰ GridPane account ত প্ৰয়োজনীয় অনুমতি (permissions) আছে

### SSL Certificate Issues {#ssl-certificate-issues}
- GridPane-ক SSL সার্টিফিকেট জাৰি কৰিবলৈ কিছু সময় লাগিব পাৰে
- পৰীক্ষা কৰক যে আপোনাৰ ডোমেইনবোৰ সঠিকভাৱে আপোনাৰ server-ৰ IP address লৈ আঙুলিয়াই আছে নেকি
- আপোনাৰ site-ৰ বাবে GridPane SSL settings পৰীক্ষা কৰক

### Domain Not Added {#domain-not-added}
- কোনো error message আছে নেকি তাৰ বাবে Ultimate Multisite logs পৰীক্ষা কৰক
- পৰীক্ষা কৰক যে ডোমেইনটো ইতিমধ্যে GridPane ত যোগ কৰা নাই
- নিশ্চিত কৰক যে আপোনাৰ ডোমেইনৰ DNS records সঠিকভাৱে কনফিগাৰ কৰা হৈছে
