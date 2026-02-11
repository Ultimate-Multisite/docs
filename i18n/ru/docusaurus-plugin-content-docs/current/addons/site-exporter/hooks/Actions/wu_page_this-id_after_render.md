---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Вызывается после рендеринга конкретной страницы.

Использование: Динамическая часть должна быть заменена на действительный id страницы, например add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Идентификатор страницы. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Экземпляр Base Admin Page. |

### С версии

- 1.8.2

### Источник

Определено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) на строке 394
