---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Action: wu_page_added

Låter plugin-utvecklare köra extra kod när sidor registreras.

Till skillnad från `wu_page_load`, som bara körs när en specifik sida visas, körs denna hook vid registreringen för varje administrationssida som läggs till med WP Ultimo-kod.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID:t för denna sida. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hooken som genererades för denna sida. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) på rad 203
