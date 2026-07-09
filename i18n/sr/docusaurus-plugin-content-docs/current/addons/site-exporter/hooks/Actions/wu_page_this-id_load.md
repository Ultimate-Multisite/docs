---
id: wu_page_this-id_load
title: 'Акција - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Омогућава програмерима plugin-а да додају додатне куке на одређену страницу.

Употреба: Динамички део треба заменити важећим ID-јем странице, нпр. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметри

| Назив | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ове странице. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Кука генерисана за ову страницу. |

### Од верзије

- 1.8.2
### Извор

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) у реду 301
