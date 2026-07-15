---
id: wu_page_this-id_load
title: 'Ekintza - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Plugin garatzaileei orri jakin bati hook gehigarriak gehitzeko aukera ematen die.

Erabilera: Zati dinamikoa baliozko orri ID batekin ordezkatu behar da, adib. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Orri honen IDa. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Orri honetarako sortutako hooka. |

### Noiztik {#since}

- 1.8.2
### Iturburua {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) fitxategian definituta, 301. lerroan
