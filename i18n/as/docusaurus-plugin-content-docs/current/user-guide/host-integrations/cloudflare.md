---
title: Cloudflare সংহতিকৰণ
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration

## Overview {#overview}
Cloudflare এটা প্ৰখ্যাত কন্টেন্ট ডেলিভাৰি নেটৱৰ্ক (CDN) আৰু security প্ৰৱідাৰ যিয়ে ওয়েবসাইটক সুৰক্ষিত কৰাত আৰু গতি দিবলৈ সহায় কৰে। এই integration-এ Ultimate Multisite আৰু Cloudflareৰ মাজত স্বয়ংক্রিয় ডোমেইন ব্যৱস্থাপনা (automatic domain management) সক্ষম কৰে, বিশেষকৈ subdomain multisite installation-ৰ বাবে।

## Features {#features}
- Cloudflare-ত স্বয়ংক্রিয় subdomain সৃষ্টি
- Proxied subdomain সমৰ্থন
- DNS record ব্যৱস্থাপনা
- Ultimate Multisite admin-ত উন্নত DNS record প্ৰদৰ্শন

## Requirements {#requirements}
আপোনাৰ `wp-config.php` ফাইলত তলৰ ধৰণৰ constant সমূহ সংজ্ঞায়িত কৰিব লাগিব:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. আপোনাৰ Cloudflare dashboard-লৈ লগ ইন কৰক
2. "My Profile" লৈ যাওক (উপৰ-ডান কোণত আপোনাৰ ইমেইলত ক্লিক কৰক)
3. মেনুৰ পৰা "API Tokens" বাছি লওক
4. তলৰ অনুমতিসমূহৰে এটা নতুন API token সৃষ্টি কৰক:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. আপোনাৰ API token কপি কৰক

### 2. Get Your Zone ID {#2-get-your-zone-id}

1. আপোনাৰ Cloudflare dashboard-ত, যিটো ডোমেইন ব্যৱহাৰ কৰিব বিচাৰে সেয়া বাছি লওক
2. Zone ID টি "Overview" টැබলীত, "API"ৰ তলত, সোঁফালে দেখা যায়।
3. Zone ID টি কপি কৰক

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

তলৰ constant সমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰক:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. আপোনাৰ WordPress admin-ত, Ultimate Multisite > Settings লৈ যাওক
2. "Domain Mapping" টැබলীলৈ যোৱা।
3. "Host Integrations" লৈ তললৈ নামি যাওক
4. Cloudflare integration সক্ষম কৰক
5. "Save Changes" ক্লিক কৰক

## How It Works {#how-it-works}

### Subdomain Management {#subdomain-management}

যদি subdomain multisite installation-ত এটা নতুন site সৃষ্টি কৰা হয়:

1. integration-এ subdomain-ৰ বাবে এটা CNAME record যোগ কৰিবলৈ Cloudflare-ৰ API লৈ এটা request প্ৰেণ কৰে।
2. subdomain-ক ডিফল্টভাৱে Cloudflareৰ মাজেৰে proxy কৰিবলৈ configure কৰা হয় (এইটো filters ব্যৱহাৰ কৰি সলনি কৰিব পাৰি)।
3. যদি কোনো site ডিলিট কৰা হয়, তেন্তে integration-এ Cloudflareৰ পৰা subdomain টি আঁতৰাই দিব।

### DNS Record Display {#dns-record-display}

integration-এ Ultimate Multisite admin-ত DNS record প্ৰদৰ্শন উন্নত কৰে তলত দিয়া ধৰণে:

1. Cloudflareৰ পৰা পোনপটীয়াকৈ DNS record fetch কৰে।
2. record সমূহ proxy কৰা হৈছে নে নাই সেয়া প্ৰদৰ্শন কৰে।
3. DNS record সমূহৰ বিষয়ে অধিক তথ্য দেখুৱায়।

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (আগে "Cloudflare for SaaS" বুলি কোৱা হৈছিল) হৈছে এটা Cloudflare feature যিয়ে আপোনাৰ কাস্টমাৰসকলক আপোনাৰ multisite network-ত SSL লৈ তেওঁলোকৰ নিজৰ ডোমেইন ব্যৱহাৰ কৰিবলৈ অনুমতি দিয়ে। ই হৈছে domain-mapped multisite installation-ৰ বাবে প্ৰেৰ্antsপৰ পদ্ধতি, কাৰণ Cloudflare-এ প্ৰতিটো custom domain-ৰ বাবে SSL certificate-ৰ জাৰী আৰু পুনৰীক্ষণ স্বয়ংক্রিয়ভাৱে ব্যৱস্থাপনা কৰে।

### How it differs from the standard Cloudflare integration {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Purpose** | Subdomain-ৰ বাবে DNS record স্বয়ংক্রিয়ভাৱে সৃষ্টি কৰে | Cloudflare-managed SSL লৈ কাস্টম (mapped) ডোমেইন সক্ষম কৰে |
| **Best for** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | পৃথকভাৱে ব্যৱস্থাপনা কৰে | Cloudflare-এ স্বয়ংক্রিয়ভাৱে ব্যৱস্থাপনা কৰে |

### Setting up Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. আপোনাৰ Cloudflare dashboard-ত, আপোনাৰ মূল ডোমেইনৰ zone খুলক।
2. **SSL/TLS > Custom Hostnames** লৈ যাওক।
3. আপোনাৰ server-ৰ IP বা hostname লৈ এটা fallback origin যোগ কৰক।
4. Ultimate Multisite-ত ম্যাপ কৰা প্ৰতিজন কাস্টমাৰ ডোমেইনৰ বাবে Cloudflare-ত এটা Custom Hostname entry যোগ কৰক। আপুনি Cloudflare API ব্যৱহাৰ কৰি এই পদক্ষেপটো স্বয়ংক্রিয় কৰিব পাৰে।
5. কাস্টমাৰৰ DNS টি আপোনাৰ network লৈ নিৰ্দেশ কৰাৰ পিছত Cloudflare-এ প্ৰতিটো custom hostname-ৰ বাবে TLS certificate জাৰী আৰু পুনৰীক্ষণ কৰে।

সম্পূৰ্ণ API reference-ৰ বাবে, [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) চাওক।

:::note Terminology update
Ultimate Multisite v2.6.1 লৈকে, এই feature-টো সকলো plugin setting আৰু label-ত **Cloudflare Custom Hostnames** বুলি উল্লেখ কৰা হৈছে। পূৰ্বৰ version-সমূহে "Cloudflare for SaaS" নামটো ব্যৱহাৰ কৰিছিল, যিটো আচল Cloudflare product name।
:::

## Important Notes {#important-notes}

Cloudflare-ৰ শেহতীয়া আপডেট অনুসৰি, wildcard proxying এতিয়া সকলো কাস্টমাৰৰ বাবে উপলব্ধ। ইয়াৰ অৰ্থ হ'ল যে subdomain multisite installation-ৰ বাবে standard Cloudflare DNS integration-এ পূৰ্বৰ দৰে ইমান গুৰুত্বপূৰ্ণ নহ'ল, কাৰণ আপুনি Cloudflare-ত এটা wildcard DNS record সহজতে সেট কৰিব পাৰে।

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- নিশ্চিত কৰক যে আপোনাৰ API token সঠিক আৰু প্ৰয়োজনীয় অনুমতি আছে।
- পৰীক্ষা কৰক যে আপোনাৰ Zone ID সঠিক।
- নিশ্চিত কৰক যে আপোনাৰ Cloudflare account-ত প্ৰয়োজনীয় অনুমতি আছে।

### Subdomain Not Added {#subdomain-not-added}
- কোনো error message আছে নেকি তাৰ বাবে Ultimate Multisite logs পৰীক্ষা কৰক।
- পৰীক্ষা কৰক যে subdomain টি ইতিমধ্যে Cloudflare-ত যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ Cloudflare plan-এ আপুনি সৃষ্টি কৰি থকা DNS record সংখ্যা সমৰ্থন কৰে।

### Proxying Issues {#proxying-issues}
- যদি আপুনি subdomain সমূহক proxy কৰিব বিচাৰिन्न, তেন্তে আপুনি `wu_cloudflare_should_proxy` filter ব্যৱহাৰ কৰিব পাৰে।
- কিছুমান feature proxy কৰাৰ সময়ত সঠিকভাৱে কাম নকৰিব পাৰে (উদাহৰণস্বৰূপে, কিছুমান WordPress admin function)।
- admin page-ৰ বাবে cache এৰাই যাবলৈ Cloudflare-ৰ Page Rules ব্যৱহাৰ কৰিবলৈ বিবেচনা কৰক।
