---
id: wu_page_added
title: Акција - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added {#action-wupageadded}

Омогућава програмерима plugin-а да покрену додатне ствари када се странице региструју.

За разлику од wu_page_load, који се покреће само када се приказује одређена страница, овај hook се покреће при регистрацији за сваку администраторску страницу која се додаје помоћу WP Ultimo кода.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ове странице. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook генерисан за ову страницу. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) у реду 203
