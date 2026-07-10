---
id: wu_post_count
title: ফিল্টার - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count {#filter-wupostcount}

প্লাগইন ডেভেলপারদের গণনার মোট সংখ্যা পরিবর্তন করার অনুমতি দেয়

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | মোট পোস্ট সংখ্যা |
| $post_counts | `object` | `wp_count_posts` ফাংশন দ্বারা ফেরত আসা WordPress অবজেক্ট |
| $post_type | `string` | পোস্ট টাইপ স্ল্যাগ |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136)-এ লাইন ১৩৬-এ সংজ্ঞায়িত।

## Returns {#returns}
নতুন মোট সংখ্যা
