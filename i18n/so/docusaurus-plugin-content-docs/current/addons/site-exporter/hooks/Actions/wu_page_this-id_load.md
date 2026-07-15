---
id: wu_page_this-id_load
title: 'Ficil - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

U oggolow horumariyeyaasha plugin inay ku daraan hooks dheeraad ah bog gaar ah.

Isticmaalka: Qaybta dynamic-ga ah waa in lagu beddelaa page id sax ah, tusaale ahaan add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-ga boggan. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | hook-ka loo sameeyay boggan. |

### Tan iyo {#since}

- 1.8.2
### Isha {#source}

Waxaa lagu qeexay [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) khadka 301
