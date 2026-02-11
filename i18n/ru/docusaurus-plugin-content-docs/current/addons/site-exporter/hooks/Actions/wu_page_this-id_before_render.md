---
id: wu_page_this-id_before_render
title: 'Действие - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Вызывается перед рендерингом конкретной страницы.

Использование: динамическая часть должна быть заменена на действительный id страницы, например `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Идентификатор страницы. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Экземпляр Base Admin Page. |

### С версии

- 1.8.2

### Источник

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) at line 368
