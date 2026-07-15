---
id: wu_page_this-id_load
title: 'Omume - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Kwe ka ndị mmepe plugin tinye hooks ndị ọzọ na ibe akọwapụtara.

Ojiji: A ga-eji page id ziri ezi dochie akụkụ dynamic ahụ, dịka add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID nke ibe a. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook emepụtara maka ibe a. |

### Kemgbe {#since}

- 1.8.2
### Isi mmalite {#source}

A kọwara ya na [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) na ahịrị 301
