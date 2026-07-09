---
id: wu_page_this-id_load
title: 'Igikorwa - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load {#action-wupagethis-idload}

Emerera abategura plugin kongeramo hooks z’inyongera kuri paji runaka.

Imikoreshereze: Igice gihinduka kigomba gusimbuzwa id ya paji yemewe, urugero add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID y’iyi paji. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook yakozwe kuri iyi paji. |

### Kuva {#since}

- 1.8.2
### Inkomoko {#source}

Bisobanuwe muri [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ku murongo wa 301
