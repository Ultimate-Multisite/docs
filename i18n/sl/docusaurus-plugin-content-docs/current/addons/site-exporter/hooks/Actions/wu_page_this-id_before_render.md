---
id: wu_page_this-id_before_render
title: 'Dejanje - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Sproži se pred izrisom določene strani.

Uporaba: Dinamični del je treba zamenjati z veljavnim ID-jem strani, npr. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID strani. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instanca Base Admin Page. |

### Od različice {#since}

- 1.8.2
### Vir {#source}

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) v vrstici 368
