---
id: wu_page_this-id_after_render
title: 'Dejanje - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Sproži se po izrisu določene strani.

Uporaba: dinamični del je treba zamenjati z veljavnim id-jem strani, npr. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID strani. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Primerek Base Admin Page. |

### Od različice

- 1.8.2
### Vir

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) v vrstici 394
