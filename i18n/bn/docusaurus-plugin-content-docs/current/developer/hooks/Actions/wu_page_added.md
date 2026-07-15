---
id: wu_page_added
title: ক্রিয়া - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

প্লাগইন ডেভেলপারদের সুযোগ দেয় যে পেজগুলো রেজিস্টার করার সময় তারা অতিরিক্ত কিছু কাজ চালাতে পারে।

`wu_page_load`-এর মতো নয়, যা শুধুমাত্র একটি নির্দিষ্ট পেজ দেখা হলে চলে, এই হুকটি Ultimate Multisite কোড ব্যবহার করে যুক্ত হওয়া প্রতিটি অ্যাডমিন পেজের রেজিস্ট্রেশনের সময় চলে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | এই পেজটির আইডি। |
| $page_hook | `string` | এই পেজটির হুক নাম। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
