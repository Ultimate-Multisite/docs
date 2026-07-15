---
id: wu_page_this-id_register_widgets
title: 'Дејство - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Се активира откако widgets ќе бидат регистрирани за оваа страница.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $id | `string` | ID на страницата. |
| $page_hook | `string` | Hook на страницата. |
| $page | `object` | Објектот на страницата. |

### Од верзија {#since}

- 2.4.10
### Извор {#source}

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) на линија 755
