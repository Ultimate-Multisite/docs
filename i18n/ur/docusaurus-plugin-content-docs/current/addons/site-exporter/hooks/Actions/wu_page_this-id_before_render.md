---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

یہ ایک مخصوص پیج کو دکھانے (render) سے پہلے فعال ہوتا ہے۔

استعمال: آپ کو ڈائنامک حصے کو ایک درست پیج ID سے تبدیل کرنا ہوگا، مثال کے طور پر `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | پیج کی ID۔ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page کا انسٹنس۔ |

### کب سے دستیاب ہے (Since) {#since}

- 1.8.2
### ماخذ (Source) {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) میں لائن 368 پر بیان کیا گیا ہے۔
