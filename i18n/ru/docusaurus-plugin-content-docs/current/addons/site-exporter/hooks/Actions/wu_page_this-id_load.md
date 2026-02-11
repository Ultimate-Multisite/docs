---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Действие: wu_page_{$this->id}_load

Позволяет разработчикам плагинов добавлять дополнительные хуки к конкретной странице.

Использование: динамическая часть должна быть заменена на действительный ID страницы, например add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID этой страницы. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Хук, сгенерированный для этой страницы. |

### С версии

- 1.8.2

### Источник

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) at line 301
