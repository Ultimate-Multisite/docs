---
id: wu_page_this-id_register_widgets
title: 'Акција - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Покреће се након што су виџети регистровани за ову страницу.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $id | `string` | Идентификатор странице. |
| $page_hook | `string` | Hook странице. |
| $page | `object` | Објекат странице. |

### Од верзије {#since}

- 2.4.10
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) у реду 755
