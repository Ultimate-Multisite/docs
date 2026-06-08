---
id: switch_network
title: Action - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

যখন বর্তমান নেটওয়ার্ক কনটেক্সট পরিবর্তন হয়, তখন এটি ট্রিগার হয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | যে নেটওয়ার্কে পরিবর্তন করা হচ্ছে, তার আইডি। |
| $old_network_id | `int` | আগে যে নেটওয়ার্কটি সক্রিয় ছিল, তার আইডি। |

### Since

- 1.3.0
### Source

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859)-এ লাইন ৮৫৯-এ সংজ্ঞায়িত।
