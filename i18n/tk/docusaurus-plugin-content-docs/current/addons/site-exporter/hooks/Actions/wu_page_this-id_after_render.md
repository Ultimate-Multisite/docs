---
id: wu_page_this-id_after_render
title: 'Hereket - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Belli bir sahypa render edilenden soň işledilýär.

Ulanylyşy: Dinamiki bölek dogry sahypa id-si bilen çalşylmaly, meselem add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametrler

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sahypanyň id-si. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page nusgasy. |

### Şondan bäri

- 1.8.2
### Çeşme

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) içinde 394-nji setirde kesgitlenen.
