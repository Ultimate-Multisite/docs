---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Aksie: wu_page_\{$this->id\}_after_render

Word geaktiveer nadat 'n spesifieke bladsy gerender is.

Gebruik: Die dinamiese deel moet vervang word met 'n geldige bladsy-ID, bv.: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameters

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die ID van die bladsy. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Die Base Admin Page-instansie. |

### Sedert

- 1.8.2
### Bron

Gedefinieer in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) by lyn 394
