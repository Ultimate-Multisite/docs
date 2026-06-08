---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

ডেভেলপৰসকলক বৰ্তমানৰ ব্যৱহাৰকাৰীজনক মুছা (unset current user) কোডটো বাইপাস কৰিবলৈ অনুমতি দিয়ে।

যদি আপুনি নাল (null) বাহিৰে আন কিবা এটা ৰিTurn কৰে, তেন্তে বৰ্তমান লগইন কৰা ব্যৱহাৰকাৰীজনক মুছা কৰা প্ৰক্ৰিয়াটো বাইপাস হৈ যাব। এইটো কিছুমান পৰিস্থিতিত ব্যৱহাৰিক হ'ব পাৰে, উদাহৰণস্বৰূপে, যেতিয়া আপুনি ছাৱ-সাইট (sub-sites) লৈ কাম কৰি থাকে যিবোৰক এডমিন প্যানেল হিচাপে ব্যৱহাৰ কৰা হয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | নাল (Null) হ'লে আগুৱাই যাব, আন কিবা এটা হ'লে বাইপাস কৰিব। |
| $current_user | `false\|\WP_User` | বৰ্তমানৰ ব্যৱহাৰকাৰীজনৰ অবজেক্ট। |

### Since

- 2.0.11
### Source

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ফাইলৰ ২২১ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।


## Returns
