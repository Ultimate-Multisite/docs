---
id: wu_apc_process_page_content
title: ফিল্টার - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

ডেভেলপারদের চূড়ান্ত কন্টেন্ট পরিবর্তন করার সুযোগ দেয়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $content | `string` | রিপ্লেসমেন্ট করার পরের কন্টেন্ট। |
| $content_before_processing | `string` | রিপ্লেসমেন্ট করার আগের কন্টেন্ট। |
| $to_replace | `array` | প্লেসহোল্ডারগুলো ধারণকারী অ্যারে। |
| $placeholder_count | `int` | পাওয়া প্লেসহোল্ডারের সংখ্যা। |

### কখন থেকে {#since}

- 1.4.0
### উৎস {#source}

[`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) এর লাইন ৪৬ এ সংজ্ঞায়িত।

## ফেরত দেয় {#returns}
পরিবর্তন করার পরের কন্টেন্ট।
