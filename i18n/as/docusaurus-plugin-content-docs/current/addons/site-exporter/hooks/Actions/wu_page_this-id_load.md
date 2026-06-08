---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

প্লাগইন ডেভেলপাৰসকলক এটা নিৰ্দিষ্ট পৃষ্ঠাৰ বাবে অধিক hook যোগ কৰিবলৈ অনুমতি দিয়ে।

**ব্যৱহাৰ:** গতিশীল অংশটো এটা সঠিক পৃষ্ঠা আইডিৰে সলনি কৰিব লাগিব, যেনে: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## পৰিমান (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পৃষ্ঠাৰ আইডি (ID)। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পৃষ্ঠাৰ বাবে সৃষ্টি কৰা hook। |

### তাৰ পৰা (Since)

- 1.8.2
### উৎস (Source)

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ফাইলৰ ৩0১ নং শাৰীত সংজ্ঞায়িত।
