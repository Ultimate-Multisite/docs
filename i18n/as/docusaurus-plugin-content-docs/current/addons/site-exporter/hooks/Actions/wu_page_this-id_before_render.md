---
id: wu_page_this-id_before_render
title: 'কাৰ্য্য - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render

কোনো এটা নিৰ্দিষ্ট পৃষ্ঠা (page) ৰেণ্ডাৰ কৰাৰ আগতে এইটো কাৰ্যকৰী হয়।

**ব্যৱহাৰ:** ইয়াত থকা গতিশীল অংশটো (dynamic part) এটা সঠিক পৃষ্ঠা ID (page id) লৈ সলনি কৰিব লাগিব, যেনে (e.g.) add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## পৰিমানাপ্ৰাপ্তি (Parameters) {#parameters}

| নাম (Name) | ধৰণ (Type) | বৰ্ণনা (Description) |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | পৃষ্ঠাৰ ID (The id of the page)। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-ৰ প্ৰতিলিপি (The Base Admin Page instance)। |

### কিমানৰ পৰা (Since) {#since}

- 1.8.2
### উৎস (Source) {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ত লাইন ৩৬৮ ত সংজ্ঞায়িত কৰা হৈছে।
