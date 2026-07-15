---
id: wu_page_load
title: Радња - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Радња: wu_page_load

Омогућава програмерима plugin-а да додају додатне hook-ове на наше странице.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $id | `string` | ID ове странице. |
| $page_hook | `string` | Hook странице за ову страницу. |
| $admin_page | `self` | Инстанца странице. |

### Од верзије {#since}

- 1.8.2
- 2.0.4: Додат трећи параметар: инстанца странице.
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) на линији 318
