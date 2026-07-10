---
id: wu_page_this-id_load
title: 'Actio - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Permittit explicatoribus additamentorum hook additos paginae certae addere.

Usus: Pars dynamica substituenda est ID paginae valido, e.g. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID huius paginae. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook huic paginae generatus. |

### Ex {#since}

- 1.8.2
### Fons {#source}

Definitum in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) linea 301
