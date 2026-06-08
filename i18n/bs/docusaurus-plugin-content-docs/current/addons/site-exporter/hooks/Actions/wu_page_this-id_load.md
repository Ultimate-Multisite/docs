---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Omogućava programerima pluginova da dodaju dodatne *hook*-ove na određenu stranicu.

Upotreba: Dinamički dio mora biti zamijenjen validnim ID-om stranice, npr.: add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ove stranice. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook generisan za ovu stranicu. |

### Od verzije

- 1.8.2
### Izvor

Definisano u [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) na liniji 301
