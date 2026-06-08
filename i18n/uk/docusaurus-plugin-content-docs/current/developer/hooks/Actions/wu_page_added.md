---
id: wu_page_added
title: Дія - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Дозволяє розробникам плагінів виконувати додаткові дії, коли реєструються сторінки.

На відміну від `wu_page_load`, який спрацьовує лише тоді, коли користувач переглядає певну сторінку, цей хук спрацьовує під час реєстрації кожної адміністративної сторінки, доданої за допомогою коду Ultimate Multisite.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID цієї сторінки. |
| $page_hook | `string` | Ім'я хука цієї сторінки. |

### Since

- 2.0.0
### Source

Визначено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) на рядку 228
