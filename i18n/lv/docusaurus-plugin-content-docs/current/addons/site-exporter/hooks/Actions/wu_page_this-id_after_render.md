---
id: wu_page_this-id_after_render
title: 'Darbība - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Tiek izsaukts pēc konkrētas lapas renderēšanas.

Lietojums: dinamiskā daļa jāaizstāj ar derīgu lapas id, piem., add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Lapas id. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instance. |

### Kopš {#since}

- 1.8.2
### Avots {#source}

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) 394. rindā
