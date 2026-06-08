---
id: wu_page_added
title: Дія - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Дозволяє розробникам плагінів виконувати додаткові дії, коли сторінки реєструються.

На відміну від `wu_page_load`, який спрацьовує лише тоді, коли користувач переглядає певну сторінку, цей hook спрацьовує під час реєстрації для кожної адміністративної сторінки, доданої за допомогою коду WP Ultimo.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID цієї сторінки. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook, згенерований для цієї сторінки. |

### Since

- 2.0.0
### Source

Визначено у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) на рядку 203
