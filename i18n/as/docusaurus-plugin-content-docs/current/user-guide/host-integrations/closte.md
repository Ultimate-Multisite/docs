---
title: Closte সংহতিকৰণ
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration

## Overview
Closte হৈছে Google Cloud infrastructure मा आधारित এটা व्यवस्थापित WordPress হোস্টিং প্লেটফৰ্ম। এই integration ले Ultimate Multisite আৰু Closte ৰ মাজত স্বয়ংক্রিয় domain syncing আৰু SSL certificate management সক্ষম কৰে।

## Features
- স্বয়ংক্রিয় domain syncing
- SSL certificate management
- Wildcard domain support
- Closte मा চলি থকাৰ বাবে কোনো configuration কৰাৰ প্ৰয়োজন নাই

## Requirements
যদি আপুনি Closte ব্যৱহাৰ কৰি আছে, তেন্তে আপোনাৰ `wp-config.php` ফাইলত তলৰ constant টি define কৰিব লাগিব:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

সাধাৰণতে, যদি আপুনি Closte मा হোস্টিং কৰি আছে, তেন্তে এই constant টি ইতিমধ্যে define কৰা থাকে।

## Setup Instructions

### 1. Verify Your Closte API Key

যদি আপুনি Closte मा হোস্টিং কৰি আছে, তেন্তে `CLOSTE_CLIENT_API_KEY` constant টি আপোনাৰ `wp-config.php` ফাইলত ইতিমধ্যে define কৰা থাকিব। আপুনি এইটো আপোনাৰ `wp-config.php` ফাইলটো পৰীক্ষা কৰি নিশ্চিত কৰিব পাৰে।

### 2. Enable the Integration

1. আপোনাৰ WordPress admin ত, Ultimate Multisite > Settings লৈ যাওক
2. "Domain Mapping" tab मा যাওক
3. "Host Integrations" লৈ তললৈ নামি যাওক
4. Closte integration টি enable কৰক
5. "Save Changes" ক্লিক কৰক

## How It Works

যেতিয়া Ultimate Multisite ত এটা domain map কৰা হয়:

1. integration ले domain টি আপোনাৰ application লৈ যোগ কৰিবলৈ Closte ৰ API লৈ এটা request পঠিয়ায়।
2. Closte স্বয়ংক্রিয়ভাৱে SSL certificate provision কৰে।
3. যেতিয়া domain mapping এটা remove কৰা হয়, তেতিয়া integration ले Closte ৰ পৰা domain টি remove কৰে।

এই integration ले Ultimate Multisite ত থকা DNS check interval setting লগতও কাম কৰে, যাৰ ফলত আপুনি ব্যৱস্থা কৰিব পাৰে যে ব্যৱস্থাই কিমান সময়ৰ মূৰেৰে DNS propagation আৰু SSL certificate issuance পৰীক্ষা কৰিব।

## Domain Record Creation

এই integration ले নিশ্চিত কৰে যে কোনো site create বা duplicate কৰাৰ সময়ত, এটা domain record স্বয়ংক্রিয়ভাৱে create হয়। Closte integration ৰ বাবে ই বিশেষভাৱে গুৰুত্বপূৰ্ণ, কাৰণ domain record create কৰাটোৱে Closte API लाई domain আৰু SSL certificate create কৰিবলৈ ট্ৰigger কৰে।

## Troubleshooting

### API Connection Issues
- নিশ্চিত কৰক যে আপোনাৰ Closte API key সঠিক।
- নিশ্চিত কৰক যে আপোনাৰ Closte account ত প্ৰয়োজনীয় permission আছে।

### SSL Certificate Issues
- Closte लाई SSL certificate issue কৰিবলৈ কিছু সময় লাগিব পাৰে (সাধাৰণতে ৫-১০ মিনিট)।
- নিশ্চিত কৰক যে আপোনাৰ domain সমূহ Closte server ৰ IP address লৈ সঠিকভাৱে point কৰি আছে।
- আপোনাৰ domain ৰ DNS records পৰীক্ষা কৰক যাতে সেয়া সঠিকভাৱে configure কৰা আছে।

### Domain Not Added
- কোনো error message আছে নেকি সেইটো চাবলৈ Ultimate Multisite logs পৰীক্ষা কৰক।
- নিশ্চিত কৰক যে domain টি Closte ত ইতিমধ্যে যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ domain ৰ DNS records সঠিকভাৱে configure কৰা আছে।

### DNS Check Interval
- যদি SSL certificate issue কৰিবলৈ বেছি সময় লাগে, তেন্তে আপুনি Domain Mapping settings ত DNS check interval adjust কৰিব পাৰে।
- default interval টি ৩০০ ছেকেণ্ড (৫ মিনিট) হয়, কিন্তু testing সময়ত বেছি ক্ষীৰত পৰীক্ষা কৰিবলৈ আপুনি ইয়াক ১০ ছেকেণ্ড লৈও set কৰিব পাৰে।
