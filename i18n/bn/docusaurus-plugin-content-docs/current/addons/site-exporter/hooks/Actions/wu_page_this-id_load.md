---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

প্লাগইন ডেভেলপারদের একটি নির্দিষ্ট পেজে অতিরিক্ত হুক যোগ করার অনুমতি দেয়।

ব্যবহার: ডাইনামিক অংশটিকে একটি বৈধ পেজ আইডি দিয়ে প্রতিস্থাপন করতে হবে, যেমন: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## প্যারামিটারসমূহ

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পেজটির আইডি। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পেজের জন্য তৈরি হওয়া হুক। |

### যেহেতু

- 1.8.2
### উৎস

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ফাইলে লাইন ৩০১ এ সংজ্ঞায়িত।
