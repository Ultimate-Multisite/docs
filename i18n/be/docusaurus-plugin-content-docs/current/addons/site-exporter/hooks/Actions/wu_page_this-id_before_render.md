---
id: wu_page_this-id_before_render
title: 'Дзеяванне - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Выклікаецца перад паказаннем (рэндэрынгам) канкрэтнай старонкі.

Выкарыстанне: Дэянную частку трэба замяніць на правільны ID старонкі, напрыклад: add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID старонкі. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Экземпляры Base Admin Page. |

### З версіі {#since}

- 1.8.2
### Выказчык {#source}

Вызначаны ў [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) на 368-й пасылцы.
