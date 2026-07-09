---
id: wu_page_this-id_load
title: 'Ago - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Permesas al plugin-programistoj aldoni pliajn hooks al specifa paĝo.

Uzado: La dinamika parto devas esti anstataŭigita per valida paĝa ID, ekz. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La ID de ĉi tiu paĝo. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | La hook generita por ĉi tiu paĝo. |

### Ekde

- 1.8.2
### Fonto

Difinita en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ĉe linio 301
