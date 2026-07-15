---
id: wu_page_this-id_after_render
title: 'Aksi - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Mlaku sawisé ngrender kaca tartamtu.

Panganggoné: Perangan dinamis kudu diganti nganggo id kaca sing sah, umpamané add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id saka kaca. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance Base Admin Page. |

### Wiwit {#since}

- 1.8.2
### Sumber {#source}

Ditetepaké ing [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ing baris 394
