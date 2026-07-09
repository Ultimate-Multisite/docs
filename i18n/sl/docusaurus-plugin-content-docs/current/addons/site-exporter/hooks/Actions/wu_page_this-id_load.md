---
id: wu_page_this-id_load
title: 'Dejanje - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Omogočite razvijalcem pluginov dodajanje dodatnih hookov na določeno stran.

Uporaba: Dinamični del je treba zamenjati z veljavnim ID-jem strani, npr. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID te strani. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook, ustvarjen za to stran. |

### Od različice {#since}

- 1.8.2
### Vir {#source}

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) v vrstici 301
