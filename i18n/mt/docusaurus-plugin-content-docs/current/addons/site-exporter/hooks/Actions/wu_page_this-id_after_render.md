---
id: wu_page_this-id_after_render
title: 'Azzjoni - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Jiskatta wara r-rendering ta' paġna speċifika.

Użu: Il-parti dinamika trid tiġi sostitwita b'id tal-paġna validu, eż. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L-id tal-paġna. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | L-istanza ta' Base Admin Page. |

### Minn

- 1.8.2
### Sors

Definit f'[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) fil-linja 394
