---
id: wu_page_this-id_load
title: 'Hetsika - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Mamela ny developer plugin hanampy hooks fanampiny amin'ny pejy manokana.

Fampiasana: Ny ampahany dynamic dia mila soloina amin'ny page id manan-kery, oh. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ny ID an'ity pejy ity. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ny hook novokarina ho an'ity pejy ity. |

### Hatramin'ny {#since}

- 1.8.2
### Loharano {#source}

Voafaritra ao amin'ny [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) amin'ny andalana 301
