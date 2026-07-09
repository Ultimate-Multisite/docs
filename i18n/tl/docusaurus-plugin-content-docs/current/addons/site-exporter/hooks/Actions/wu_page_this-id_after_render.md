---
id: wu_page_this-id_after_render
title: 'Aksyon - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Tumatakbo pagkatapos i-render ang isang partikular na pahina.

Paggamit: Kailangang palitan ang dynamic na bahagi ng valid na page id, hal. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang id ng pahina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang instance ng Base Admin Page. |

### Mula Noong

- 1.8.2
### Pinagmulan

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) sa linya 394
