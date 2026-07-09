---
id: wu_page_this-id_load
title: 'عمل - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

پلگ اِن ڊولپرز کي مخصوص صفحي ۾ اضافي هُڪ شامل ڪرڻ جي اجازت ڏيو.

استعمال: متحرڪ حصي کي صحيح صفحي جي آءِ ڊي سان بدلائڻو پوندو، مثال طور add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي جي آءِ ڊي. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي لاءِ ٺاهيل هُڪ. |

### کان وٺي

- 1.8.2
### ذريعو

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ۾ 301 لائن تي بيان ڪيل
