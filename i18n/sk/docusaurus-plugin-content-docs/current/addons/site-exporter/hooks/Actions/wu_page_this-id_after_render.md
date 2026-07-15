---
id: wu_page_this-id_after_render
title: 'Akcia - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Spúšťa sa po vykreslení konkrétnej stránky.

Použitie: Dynamickú časť je potrebné nahradiť platným id stránky, napr. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametre {#parameters}

| Názov | Typ | Opis |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID stránky. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Inštancia Base Admin Page. |

### Od verzie {#since}

- 1.8.2
### Zdroj {#source}

Definované v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) na riadku 394
