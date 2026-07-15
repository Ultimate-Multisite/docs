---
id: wu_page_load
title: Dejanje - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: 5033e5832dd8b614f857f0cad7b79fc3
---
# Dejanje: wu_page_load

Omogoča razvijalcem pluginov, da našim stranem dodajo dodatne hooks.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID te strani. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook, ustvarjen za to stran. |

### Od {#since}

- 1.8.2
### Vir {#source}

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L289) v vrstici 289
