---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

Виконується після реєстрації віджетів для цієї сторінки.

Динамічна частина імені хука, `$this->id`, посилається на ID сторінки.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID сторінки. |
| $page_hook | `string` | Хук сторінки. |
| $page | `object` | Об'єкт сторінки. |

### Since

- 2.4.10
### Source

Визначено в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) на рядку 755
