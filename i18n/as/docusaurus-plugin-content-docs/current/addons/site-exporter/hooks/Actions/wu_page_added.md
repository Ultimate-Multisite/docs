---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

প্লাগইন ডেভেলপাৰসকলক পৃষ্ঠা যোগ কৰা হৈছে (registered) যেতিয়া আন আন কাম কৰিবলৈ সুযোগ দিয়ে।

wu_page_load ৰ পৰিৱৰ্তে, যি কেৱল এটা নিৰ্দিষ্ট পৃষ্ঠা দেখা হৈছে যেতিয়াই চলি, এই hook খন WP Ultimo কোড ব্যৱহাৰ কৰি যোগ কৰা প্ৰতিটো এডমিন পৃষ্ঠাৰ বাবে ৰেজিষ্ট্ৰেচনৰ সময়তে চলি।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পৃষ্ঠাৰ ID। |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | এই পৃষ্ঠাৰ বাবে সৃষ্টি কৰা hook। |

### Since

- 2.0.0
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) at line 203
