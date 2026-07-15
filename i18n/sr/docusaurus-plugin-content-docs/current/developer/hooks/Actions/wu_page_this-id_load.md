---
id: wu_page_this-id_load
title: 'Радња - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Омогућава програмерима додатака да додају додатне закачке на наше странице.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $id | `string` | ID ове странице. |
| $page_hook | `string` | Закачка странице за ову страницу. |
| $admin_page | `self` | Инстанца странице. |

### Од верзије {#since}

- 1.8.2
- 2.0.4: Додат трећи параметар: инстанца странице.
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) на линији 332
