---
id: wu_page_this-id_load
title: 'Azzjoni - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Ħalli lill-iżviluppaturi tal-estensjonijiet iżidu hooks addizzjonali ma' paġna speċifika.

Użu: Il-parti dinamika trid tiġi sostitwita b'ID tal-paġna valida, eż. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L-ID ta' din il-paġna. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Il-hook iġġenerat għal din il-paġna. |

### Minn {#since}

- 1.8.2
### Sors {#source}

Iddefinit fi [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) fil-linja 301
