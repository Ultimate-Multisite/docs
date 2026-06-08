---
id: move_site
title: কার্যক্রম - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

যখন কোনো সাইটকে একটি নতুন নেটওয়ার্কে সরানো হয়, তখন এটি ট্রিগার হয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | যে সাইটটি সরানো হয়েছে তার আইডি। |
| $old_network_id | `int` | সাইটটির মূল নেটওয়ার্কের আইডি। |
| $new_network_id | `int` | যে নেটওয়ার্কে সাইটটি সরানো হয়েছে তার আইডি। |

### Since

- 1.3.0
### Source

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587)-এ লাইন ১৫৮৭-এ সংজ্ঞায়িত করা হয়েছে।
