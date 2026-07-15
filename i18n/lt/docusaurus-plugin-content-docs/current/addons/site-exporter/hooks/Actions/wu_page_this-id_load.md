---
id: wu_page_this-id_load
title: 'Veiksmas - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Leidžia plugin kūrėjams pridėti papildomų hooks prie konkretaus puslapio.

Naudojimas: dinaminę dalį reikia pakeisti galiojančiu puslapio ID, pvz. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šio puslapio ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šiam puslapiui sugeneruotas hook. |

### Nuo {#since}

- 1.8.2
### Šaltinis {#source}

Apibrėžta [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) 301 eilutėje
