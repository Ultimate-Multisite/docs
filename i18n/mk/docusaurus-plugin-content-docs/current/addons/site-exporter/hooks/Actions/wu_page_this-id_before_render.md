---
id: wu_page_this-id_before_render
title: 'Дејство - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Се активира пред прикажување на конкретна страница.

Употреба: Динамичниот дел треба да се замени со валиден id на страница, на пр. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id на страницата. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Инстанцата Base Admin Page. |

### Од верзија {#since}

- 1.8.2
### Извор {#source}

Дефинирано во [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) на линија 368
