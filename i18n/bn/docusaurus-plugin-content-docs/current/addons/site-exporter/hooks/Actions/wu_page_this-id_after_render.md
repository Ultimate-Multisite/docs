---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

একটি নির্দিষ্ট পেজ রেন্ডার করার পরে এটি কার্যকর হয়।

ব্যবহার: এখানে ডাইনামিক অংশটিকে একটি বৈধ পেজ আইডি দিয়ে প্রতিস্থাপন করতে হবে, যেমন: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## প্যারামিটারসমূহ

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | পেজটির আইডি। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | বেস অ্যাডমিন পেজ ইনস্ট্যান্স। |

### শুরু

- 1.8.2
### উৎস

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) এ লাইন ৩৯৪-এ সংজ্ঞায়িত করা হয়েছে।
