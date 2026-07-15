---
id: wu_post_count
title: ফিল্টৰ - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

প্লাগইন ডেভেলপাৰসকলক কন্টেন্টৰ মুঠ সংখ্যা (count total) সলনি কৰিবলৈ অনুমতি দিয়ে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | মুঠ পোষ্টৰ সংখ্যা |
| $post_counts | `object` | `wp_count_posts` ফাংশনৰ দ্বাৰা WordPress object। |
| $post_type | `string` | পোষ্ট টাইপৰ slug। |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ফাইলৰ লাইন ১৩৬ ত সংজ্ঞায়িত।

## Returns {#returns}
নতুন মুঠ সংখ্যা।
