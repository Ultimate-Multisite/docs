---
id: wu_post_count_statuses
title: ফিল্টার - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

প্লাগইন ডেভেলপারদের সুযোগ দেয় যে কোন পোস্ট স্ট্যাটাস গণনা করা হবে তা পরিবর্তন করার। ডিফল্টভাবে, প্রকাশিত (published) এবং ব্যক্তিগত (private) পোস্টগুলো গণনা করা হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | পোস্ট স্ট্যাটাসগুলোর তালিকা |
| $post_type | `string` | পোস্ট টাইপ স্ল্যাগ |

### Since {#since}

- 1.9.1
### Source {#source}

[`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119)-এ লাইন ১১৯-এ সংজ্ঞায়িত।

## Returns {#returns}
পোস্ট স্ট্যাটাসের নতুন অ্যারে
