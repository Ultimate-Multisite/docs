---
title: cPanel ইন্টিগ্ৰেচন
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel Integration {#cpanel-integration}

## Overview {#overview}
cPanel হৈছে বহুত shared আৰু dedicated hosting provider-সকলে ব্যৱহাৰ কৰা আটাইতকৈ জনপ্রিয় web hosting control panel-ৰ অন্যতম। এই integration-এ Ultimate Multisite আৰু cPanel ৰ মাজত স্বয়ংক্রিয় domain syncing সক্ষম কৰে, যাৰ ফলত আপুনি স্বয়ংক্রিয়ভাৱে domain aliases আৰু subdomains আপোনাৰ cPanel account ত যোগ কৰিব পাৰে।

## Features {#features}
- cPanel ত স্বয়ংক্রিয় addon domain সৃষ্টি
- cPanel ত স্বয়ংক্রিয় subdomain সৃষ্টি (subdomain multisite installation-ৰ বাবে)
- mapping delete কৰিলে domain removal

## Requirements {#requirements}
আপোনাৰ `wp-config.php` ফাইলত তলৰ constant সমূহ সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ঐচ্ছিকভাৱে, আপুনি এইবোৰো সংজ্ঞায়িত কৰিব পাৰে:

```php
define('WU_CPANEL_PORT', 2083); // Default হৈছে 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default হৈছে /public_html
```

## Setup Instructions {#setup-instructions}

### 1. Get Your cPanel Credentials {#1-get-your-cpanel-credentials}

1. আপোনাৰ hosting providerৰ পৰা আপোনাৰ cPanel username আৰু password লওক
2. আপোনাৰ cPanel host নিৰ্ণয় কৰক (সাধাৰণতে `cpanel.yourdomain.com` বা `yourdomain.com:2083`)

### 2. Add Constants to wp-config.php {#2-add-constants-to-wp-configphp}

আপোনাৰ `wp-config.php` ফাইলত তলৰ constant সমূহ যোগ কৰক:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ঐচ্ছিকভাৱে, আপুনি port আৰু root directory ক কাস্টমাইজ কৰিব পাৰে:

```php
define('WU_CPANEL_PORT', 2083); // যদি আপোনাৰ cPanel অন্য port ব্যৱহাৰ কৰে ত ইয়াক সলনি কৰক
define('WU_CPANEL_ROOT_DIR', '/public_html'); // যদি আপোনাৰ document root বেলেগ হয় ত ইয়াক সলনি কৰক
```

### 3. Enable the Integration {#3-enable-the-integration}

1. আপোনাৰ WordPress admin ত, Ultimate Multisite > Settings লৈ যাওক
2. "Domain Mapping" tab मा যাওক
3. "Host Integrations" লৈ তললৈ স্ক্রল কৰক
4. cPanel integration সক্ষম কৰক
5. "Save Changes" ক্লিক কৰক

## How It Works {#how-it-works}

### Addon Domains {#addon-domains}

যদি Ultimate Multisite ত এটা domain map কৰা হয়:

1. integration-এ domain ক addon domain হিচাপে যোগ কৰিবলৈ cPanel-ৰ API লৈ এটা request পঠায়।
2. domain ক আপোনাৰ root directory লৈ point কৰা হয়।
3. যদি domain mapping এটা remove কৰা হয়, তেন্তে integration-এ cPanelৰ পৰা addon domain টি remove কৰিব।

### Subdomains {#subdomains}

subdomain multisite installation-ৰ বাবে, যেতিয়া এটা নতুন site সৃষ্টি কৰা হয়:

1. integration-এ full domain बाट subdomain part টি extract কৰে।
2. ই subdomain যোগ কৰিবলৈ cPanel-ৰ API লৈ এটা request পঠায়।
3. subdomain ক আপোনাৰ root directory লৈ point কৰা হয়।

## Important Notes {#important-notes}

- integration-এ cPanel account লৈ যোগাযোগ কৰিবলৈ cPanel's API2 ব্যৱহাৰ কৰে।
- আপোনাৰ cPanel account ত addon domain আৰু subdomain যোগ কৰাৰ অনুমতি থাকিব লাগিব।
- কিছুমান hosting provider-এ আপুনি সৃষ্টি কৰিব পৰা addon domain বা subdomain-ৰ সংখ্যা সীমিত কৰিব পাৰে।
- integration-এ DNS configuration handle নকৰে; আপুনি এতিয়াও আপোনাৰ domain সমূহক আপোনাৰ server-ৰ IP address লৈ point কৰিব লাগিব।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- নিশ্চিত কৰক যে আপোনাৰ cPanel username আৰু password সঠিক।
- পৰীক্ষা কৰক যে আপোনাৰ cPanel host সঠিক আৰু accessible।
- নিশ্চিত কৰক যে আপোনাৰ cPanel account ত প্ৰয়োজনীয় অনুমতি আছে।
- host-ৰ বাবে full URL ব্যৱহাৰ কৰিবলৈ চেষ্টা কৰক (উদাহৰণস্বৰূপে, `https://cpanel.yourdomain.com`)

### Domain Not Added {#domain-not-added}
- কোনো error message বা লৈ Ultimate Multisite logs পৰীক্ষা কৰক।
- নিশ্চিত কৰক যে domain টোপনি cPanel ত ইতিমধ্যে যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ cPanel account ত addon domain বা subdomain-ৰ বাবে সীমা (limit) নহ'ল।

### SSL Certificate Issues {#ssl-certificate-issues}
- integration-এ SSL certificate issue কৰা নাই।
- আপুনি SSL certificate issue কৰিবলৈ cPanel's SSL/TLS tools বা AutoSSL feature ব্যৱহাৰ কৰিব লাগিব।
- বিকল্প হিচাপে, আপুনি cPanel's AutoSSL লৈ Let's Encrypt जस्तो service ব্যৱহাৰ কৰিব পাৰে।
