---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

ভালকৈ নিশ্চিত কৰিবলৈ, ইয়াত মূল WP Filter খনৰ নকল কৰা হৈছে।

এই ফিল্টাৰে কোনো ব্যৱহাৰকাৰী (user) কোনবোৰ স্থান (sites) লগত জড়িত, তাৰ তালিকাখন ফিল্টাৰ কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | ব্যৱহাৰকাৰীজনৰ সৈতে জড়িত স্থানসমূহৰ বস্তুৰ এটা তালিকা (array of site objects). |
| $user_id | `int` | ব্যৱহাৰকাৰীৰ ID। |
| $all | `bool` | পReturnType কৰা স্থানৰ তালিকাখনত 'deleted', 'archived', বা 'spam' বুলি চিহ্নিত স্থানসমূহো অন্তৰ্ভুক্ত কৰিব নে নাই। ডিফল্ট মান: false। |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) at line 851
