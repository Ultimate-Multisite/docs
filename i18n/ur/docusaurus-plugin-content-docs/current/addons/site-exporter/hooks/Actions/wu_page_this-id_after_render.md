---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

یہ ایک مخصوص پیج کو رینڈر (render) کرنے کے بعد فعال ہوتا ہے۔

استعمال کا طریقہ: آپ کو اس ڈائنامک حصے کو ایک درست پیج ID سے تبدیل کرنا ہوگا، مثال کے طور پر: `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## پیرامیٹرز (Parameters) {#parameters}

| نام | قسم | وضاحت |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | پیج کی ID۔ |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page کا انسٹنس۔ |

### موجودہ ورژن {#since}

- 1.8.2
### ماخذ {#source}

یہ [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) میں لائن 394 پر ڈیفائن کیا گیا ہے۔
