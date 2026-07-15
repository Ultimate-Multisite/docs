---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

একটি ব্যবহারকারী কোন নেটওয়ার্কগুলোর অ্যাডমিনিস্ট্রেটর, তা ফিল্টার করে প্রক্রিয়াটিকে দ্রুত সম্পন্ন (short-circuit) করে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | নেটওয়ার্ক আইডিগুলির তালিকা বা false। null ছাড়া অন্য যেকোনো মান প্রক্রিয়াটিকে বাইপাস করে দেবে। |
| $ | `int` | যে ব্যবহারকারীর জন্য নেটওয়ার্কগুলো ফেরত দেওয়া হবে তার ইউজার আইডি। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) এর লাইন ৬৮৮ এ সংজ্ঞায়িত।
