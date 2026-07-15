---
id: wu_page_this-id_after_render
title: 'Дзеяй — wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Дзеяванне: wu_page_\{$this->id\}_after_render

Выклікаецца пасля адбыцця (рэндэрынгу) канкрэтнай старонкі.

Выкарыстанне: Дэяннычае частка трэба замяніць на правільны ID старонкі, напрыклад: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Паметрыкі {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID старонкі. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Экземпляры Base Admin Page. |

### З {#since}

- 1.8.2
### Выкідзенне {#source}

Вызначана ў [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) на 394-й пасылцы.
