---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

Изпълнява се след като виджлетите за тази страница са регистрирани.

Динамичната част от името на хука, `$this->id`, се отнася до ID на страницата.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $id | `string` | ID на страницата. |
| $page_hook | `string` | Хукът на страницата. |
| $page | `object` | Обектът на страницата. |

### От

- 2.4.10
### Източник

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) на линия 755
