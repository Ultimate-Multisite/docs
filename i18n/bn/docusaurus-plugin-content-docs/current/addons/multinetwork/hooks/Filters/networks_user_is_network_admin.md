---
id: networks_user_is_network_admin
title: Filter - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

কোনো ব্যবহারকারী কোন নেটওয়ার্কের অ্যাডমিনিস্ট্রেটর, তা ফিল্টার করে।

## প্যারামিটারসমূহ

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $ | `array\|bool` | নেটওয়ার্ক আইডিগুলির তালিকা, অথবা ব্যবহারকারীর জন্য কোনো নেটওয়ার্ক না থাকলে `false`। |
| $ | `int` | যে ব্যবহারকারীর জন্য নেটওয়ার্কগুলি ফেরত দিতে হবে, সেই ব্যবহারকারীর আইডি। |

### সংস্করণ

- 2.0.0
### উৎস

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703)-এ লাইন ৭০৩-এ সংজ্ঞায়িত করা হয়েছে
