---
id: wu_page_added
title: Dejanje - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Omogoča razvijalcem pluginov, da zaženejo dodatne stvari, ko so strani registrirane.

Za razliko od wu_page_load, ki se zažene samo, ko je prikazana določena stran, se ta hook zažene ob registraciji za vsako admin stran, dodano s kodo WP Ultimo.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID te strani. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook, ustvarjen za to stran. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) v vrstici 203
