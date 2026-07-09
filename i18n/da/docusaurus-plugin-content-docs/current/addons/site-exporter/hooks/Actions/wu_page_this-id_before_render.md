---
id: wu_page_this-id_before_render
title: 'Handling - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Udløses før rendering af en specifik side.

Brug: Den dynamiske del skal erstattes med et gyldigt side-id, f.eks. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Sidens id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-instansen. |

### Siden

- 1.8.2
### Kilde

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) på linje 368
