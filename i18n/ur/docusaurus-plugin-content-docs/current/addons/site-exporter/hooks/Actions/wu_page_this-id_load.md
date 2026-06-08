---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

پلگ ان ڈویلپرز کو مخصوص پیج پر اضافی ہکس (hooks) شامل کرنے کی اجازت دیتا ہے۔

**استعمال کا طریقہ:** ڈائنامک حصے کو ایک درست پیج ID سے تبدیل کرنا ہوگا، مثال کے طور پر: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## پیرامیٹرز

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | اس پیج کی ID۔ |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | اس پیج کے لیے بنایا گیا ہک۔ |

### Since

- 1.8.2
### Source

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
