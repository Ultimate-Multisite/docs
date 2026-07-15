---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

এটা নিৰ্দিষ্ট পৃষ্ঠা (page) ৰেণ্ডাৰ কৰাৰ পিছত এই অ্যাকশ্বনটো কাৰ্যকৰী হয়।

**ব্যৱহাৰ:** গতিশীল অংশটোক এটা সঠিক পৃষ্ঠা আইডিৰে সলনি কৰিব লাগিব, যেনে: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## প্যারামিটাৰসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | পৃষ্ঠাৰ আইডি। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page ৰ প্ৰতিলিপি (instance)। |

### Since {#since}

- 1.8.2
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ফাইলৰ ৩৯৪ নং শাৰীত সংজ্ঞায়িত।
