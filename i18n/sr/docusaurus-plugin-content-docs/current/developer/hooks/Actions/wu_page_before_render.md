---
id: wu_page_before_render
title: Радња - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Action: wu_page_before_render

Омогућава plugin програмерима да додају додатни садржај пре него што испишемо страницу.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $page_id | `string` | id ове странице. |
| $page | `object` | Објекат странице. |

### Од верзије {#since}

- 1.8.2
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) у реду 388
