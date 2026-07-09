---
id: wu_page_this-id_load
title: 'Действие - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Позволява на разработчиците на плагини да добавят допълнителни хукове към конкретна страница.

Използване: Динамичната част трябва да бъде заменена с валиден ID на страница, например: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID на тази страница. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хукът, генериран за тази страница. |

### От версия {#since}

- 1.8.2
### Източник {#source}

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) на линия 301
