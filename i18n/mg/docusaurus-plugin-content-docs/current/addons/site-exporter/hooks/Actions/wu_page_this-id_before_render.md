---
id: wu_page_this-id_before_render
title: 'Hetsika - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Miasa alohan'ny handikana pejy manokana.

Fampiasana: Ny ampahany dinamika dia mila soloina amin'ny page id manan-kery, oh. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ny id an'ilay pejy. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ny instance Base Admin Page. |

### Hatramin'ny {#since}

- 1.8.2
### Loharano {#source}

Voafaritra ao amin'ny [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) amin'ny andalana 368
