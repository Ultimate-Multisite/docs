---
id: wu_page_this-id_register_widgets
title: 'Действие - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_${this->id}_register_widgets

Вызывается после регистрации виджетов для этой страницы.

Динамическая часть имени хука, `$this->id`, относится к id страницы.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Идентификатор страницы. |
| $page_hook | `string` | Хук страницы. |
| $page | `object` | Объект страницы. |

### Since

- 2.4.10
### Source

Определено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) на строке 755
