---
id: wu_page_added
title: Акција - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Радња: wu_page_added {#action-wupageadded}

Омогућава програмерима plugin-а да покрену додатне ствари када се странице региструју.

За разлику од wu_page_load, који се покреће само када се одређена страница приказује, овај hook се покреће при регистрацији за сваку администраторску страницу додату помоћу Ultimate Multisite кода.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $page_id | `string` | ID ове странице. |
| $page_hook | `string` | Назив hook-а ове странице. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) у реду 228
