---
id: wu_page_this-id_load
title: 'عمل - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

plugin ڊولپرز کي مخصوص صفحي تي اضافي hooks شامل ڪرڻ جي اجازت ڏئي ٿو.

استعمال: dynamic حصو صحيح page id سان بدلائڻو آهي، مثال طور add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي جو ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | هن صفحي لاءِ ٺهيل hook. |

### کان وٺي {#since}

- 1.8.2
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ۾ لائن 301 تي بيان ٿيل
