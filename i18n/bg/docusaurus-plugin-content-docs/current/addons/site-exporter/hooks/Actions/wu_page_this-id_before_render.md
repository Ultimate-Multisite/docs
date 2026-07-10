---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Активира се преди рендирането на определена страница.

**Използване:** Динамичната част трябва да бъде заменена с валиден ID на страницата, например: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID на страницата. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Инстанцията на Base Admin Page. |

### От версия {#since}

- 1.8.2
### Източник {#source}

Дефиниран в [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) на ред 368
