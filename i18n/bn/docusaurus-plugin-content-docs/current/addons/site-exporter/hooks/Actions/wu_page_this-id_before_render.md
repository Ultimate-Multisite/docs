---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

একটি নির্দিষ্ট পেজ রেন্ডার করার আগে এটি কার্যকর হয়।

ব্যবহার: এখানে যে ডাইনামিক অংশটি আছে, সেটিকে একটি বৈধ পেজ আইডি দিয়ে প্রতিস্থাপন করতে হবে, যেমন: add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | পেজটির আইডি। |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page এর ইনস্ট্যান্স। |

### Since {#since}

- 1.8.2
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) at line 368
