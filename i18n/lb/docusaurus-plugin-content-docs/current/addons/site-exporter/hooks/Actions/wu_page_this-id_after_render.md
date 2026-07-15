---
id: wu_page_this-id_after_render
title: 'Aktioun - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Gëtt ausgeléist nodeems eng spezifesch Säit gerendert gouf.

Benotzung: Den dynameschen Deel muss duerch eng gëlteg Säiten-ID ersat ginn, z. B. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | D'ID vun der Säit. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | D'Base Admin Page-Instanz. |

### Zënter {#since}

- 1.8.2
### Quell {#source}

Definéiert an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) op Zeil 394
