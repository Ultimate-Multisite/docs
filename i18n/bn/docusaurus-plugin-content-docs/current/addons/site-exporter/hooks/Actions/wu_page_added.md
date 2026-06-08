---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

প্লাগইন ডেভেলপারদের সুযোগ দেয় যখন পেজগুলো রেজিস্টার করা হয়, তখন অতিরিক্ত কিছু কাজ চালানোর জন্য।

`wu_page_load`-এর মতো নয়, যা শুধুমাত্র একটি নির্দিষ্ট পেজ দেখা হলে চলে, এই hook টি WP Ultimo কোড ব্যবহার করে যোগ করা প্রতিটি অ্যাডমিন পেজের রেজিস্ট্রেশনের সময় চলে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পেজটির ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পেজের জন্য তৈরি হওয়া hook। |

### Since

- 2.0.0
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) এ লাইন 203-এ সংজ্ঞায়িত করা হয়েছে।
