---
id: wu_page_this-id_after_render
title: 'Hetsika - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Miasa aorian’ny fandikana pejy manokana iray.

Fampiasana: Mila soloina amin’ny id pejy manan-kery ilay ampahany miovaova, oh. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Masontsivana

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ny id an’ilay pejy. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ny instance an’ny Base Admin Page. |

### Hatramin’ny

- 1.8.2
### Loharano

Voafaritra ao amin’ny [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) amin’ny andalana 394
