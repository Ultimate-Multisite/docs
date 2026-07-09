---
id: wu_page_this-id_load
title: 'Дејство - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Им овозможува на развивачите на plugin да додадат дополнителни hooks на одредена страница.

Употреба: Динамичкиот дел треба да се замени со валиден ID на страница, на пр. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID на оваа страница. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook генериран за оваа страница. |

### Од

- 1.8.2
### Извор

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) на линија 301
