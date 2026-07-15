---
id: wu_page_this-id_after_render
title: 'Handling - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Kjøres etter at en spesifikk side er rendret.

Bruk: Den dynamiske delen må erstattes med en gyldig side-ID, f.eks. `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID-en til siden. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instansen av Base Admin Page. |

### Siden {#since}

- 1.8.2
### Kilde {#source}

Definert i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) på linje 394
