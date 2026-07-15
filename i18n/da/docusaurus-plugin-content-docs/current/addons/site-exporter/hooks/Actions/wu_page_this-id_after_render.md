---
id: wu_page_this-id_after_render
title: 'Handling - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Udløses efter gengivelse af en specifik side.

Brug: Den dynamiske del skal erstattes med et gyldigt side-id, f.eks. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id'et for siden. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page-instansen. |

### Siden {#since}

- 1.8.2
### Kilde {#source}

Defineret i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) på linje 394
