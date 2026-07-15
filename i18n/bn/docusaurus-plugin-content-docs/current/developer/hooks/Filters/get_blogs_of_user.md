---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

এটি মূল WP Filter-এর মতো কাজ করে, অতিরিক্ত সুরক্ষার জন্য।

এটি একটি ব্যবহারকারীর সাথে যুক্ত সাইটগুলোর তালিকা ফিল্টার করে।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $sites | `object[]` | ব্যবহারকারীর সাথে সম্পর্কিত সাইট অবজেক্টগুলোর একটি অ্যারে। |
| $user_id | `int` | ব্যবহারকারী আইডি। |
| $all | `bool` | ফেরত আসা সাইট অ্যারেতে সমস্ত সাইট থাকা উচিত কিনা, এমনকি যেগুলো 'deleted', 'archived', বা 'spam' হিসেবে চিহ্নিত। ডিফল্ট মান false। |

### কখন থেকে {#since}

- 2.0.11
### উৎস {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) এর লাইন ৮৫১ এ সংজ্ঞায়িত।
