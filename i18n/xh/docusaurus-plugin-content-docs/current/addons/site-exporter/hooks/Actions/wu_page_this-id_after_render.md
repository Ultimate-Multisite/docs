---
id: wu_page_this-id_after_render
title: 'Intshukumo - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Iqalisa emva kokubonisa iphepha elithile.

Ukusetyenziswa: Inxalenye eguqukayo kufuneka itshintshwe nge-id yephepha esebenzayo, umz. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Iiparamitha

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | I-id yephepha. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Umzekelo we-Base Admin Page. |

### Ukususela

- 1.8.2
### Umthombo

Ichazwe ku-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) kumgca 394
