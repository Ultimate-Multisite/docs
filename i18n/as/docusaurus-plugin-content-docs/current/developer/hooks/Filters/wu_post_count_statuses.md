---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

প্লাগইন ডেভেলপাৰসকলক কোনে কোন পোষ্ট ষ্টেটছ গণনা কৰা হ'ব, সেয়া সলনি কৰিবলৈ অনুমতি দিয়ে। ডিফল্টভাৱে, 'published' আৰু 'private' পোষ্টসমূহ গণনা কৰা হয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | পোষ্ট ষ্টেটছৰ তালিকা (The list of post statuses) |
| $post_type | `string` | পোষ্ট ট্ৰাইপৰ স্লাগ (The post type slug) |

### Since {#since}

- 1.9.1
### Source {#source}

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) at line 119

## Returns {#returns}
পোষ্ট ষ্টেটছৰ এটা নতুন তালিকা (New array of post status)
