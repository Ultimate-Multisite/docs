---
id: wu_page_this-id_after_render
title: 'Aksyon - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Mopagana human ma-render ang usa ka espesipikong panid.

Paggamit: Ang dinamiko nga bahin kinahanglan pulihan og balidong page id, e.g. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang id sa panid. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang Base Admin Page instance. |

### Sukad

- 1.8.2
### Source

Gidefine sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) sa linya 394
