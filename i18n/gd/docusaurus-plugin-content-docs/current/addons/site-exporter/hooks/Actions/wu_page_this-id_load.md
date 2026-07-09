---
id: wu_page_this-id_load
title: 'Gnìomh - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Leig le luchd-leasachaidh plugin dubhan a bharrachd a chur ri duilleag shònraichte.

Cleachdadh: Feumar am pàirt fiùghantach a chur an àite le ID duilleige dligheach, m.e. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID na duilleige seo. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | An dubhan a chaidh a chruthachadh dhan duilleag seo. |

### Bho

- 1.8.2
### Tùs

Air a mhìneachadh ann an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) aig loidhne 301
