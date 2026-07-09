---
id: wu_page_this-id_before_render
title: 'Радња - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Покреће се пре рендеровања одређене странице.

Употреба: Динамички део треба заменити важећим id-јем странице, нпр. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Параметри

| Назив | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id странице. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Инстанца Base Admin Page. |

### Од верзије

- 1.8.2
### Извор

Дефинисано у [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) у линији 368
