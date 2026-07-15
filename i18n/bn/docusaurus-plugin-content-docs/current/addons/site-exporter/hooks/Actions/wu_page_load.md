---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Action: wu_page_load

প্লাগইন ডেভেলপারদের আমাদের পেজগুলোতে অতিরিক্ত হুক (hooks) যোগ করার অনুমতি দেয়।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পেজটির আইডি। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পেজের জন্য তৈরি হওয়া হুক। |

### যেহেতু {#since}

- 1.8.2
### উৎস {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289)-এ লাইন ২৮৯-এ সংজ্ঞায়িত।
