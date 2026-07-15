---
id: wu_page_this-id_load
title: 'Gníomh - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Lig d’fhorbróirí plugin crúcaí breise a chur le leathanach ar leith.

Úsáid: Ní mór an chuid dhinimiciúil a chur in ionad le ID bailí leathanaigh, m.sh. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID an leathanaigh seo. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | An crúca a gineadh don leathanach seo. |

### Ó {#since}

- 1.8.2
### Foinse {#source}

Sainithe in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ag líne 301
