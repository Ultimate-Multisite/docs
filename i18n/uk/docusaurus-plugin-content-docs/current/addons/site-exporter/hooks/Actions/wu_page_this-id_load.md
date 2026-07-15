---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_{$this->id}_load

Дозволяє розробникам плагінів додавати додаткові хуки до конкретної сторінки.

**Використання:** Динамічну частину потрібно замінити на дійсний ID сторінки, наприклад: `add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);`

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID цієї сторінки. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хук, згенерований для цієї сторінки. |

### Починаючи з {#since}

- 1.8.2
### Джерело {#source}

Визначено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) на рядку 301
