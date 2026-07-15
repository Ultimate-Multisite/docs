---
id: wu_page_this-id_load
title: 'Darbība - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Ļauj plugin izstrādātājiem pievienot papildu āķus konkrētai lapai.

Lietojums: dinamiskā daļa jāaizstāj ar derīgu lapas ID, piem., add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šīs lapas ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šai lapai ģenerētais āķis. |

### Kopš {#since}

- 1.8.2
### Avots {#source}

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) 301. rindā
