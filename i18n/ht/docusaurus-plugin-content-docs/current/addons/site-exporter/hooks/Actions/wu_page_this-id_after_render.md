---
id: wu_page_this-id_after_render
title: 'Aksyon - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Deklanche apre rann yon paj espesifik.

Itilizasyon: Pati dinamik la bezwen ranplase ak yon id paj ki valab, pa egzanp add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Paramèt

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id paj la. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Enstans Base Admin Page la. |

### Depi

- 1.8.2
### Sous

Defini nan [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) nan liy 394
