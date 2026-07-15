---
id: wu_page_this-id_load
title: 'Isenzo - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Vumela abathuthukisi be-plugin ukuthi bengeze ama-hook angeziwe ekhasini elithile.

Ukusetshenziswa: Ingxenye eguqukayo idinga ukushintshwa nge-ID yekhasi evumelekile, isib. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | I-ID yaleli khasi. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | I-hook ekhiqizelwe leli khasi. |

### Kusukela {#since}

- 1.8.2
### Umthombo {#source}

Kuchazwe ku-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) emugqeni 301
