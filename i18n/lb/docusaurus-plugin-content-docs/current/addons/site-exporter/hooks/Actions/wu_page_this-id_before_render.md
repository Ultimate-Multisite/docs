---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Gëtt ausgeléist, ier eng spezifesch Säit gerendert gëtt.

Benotzung: Den dynameschen Deel muss duerch eng valabel Säiten-id ersat ginn, z. B. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | D’id vun der Säit. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | D’Base Admin Page-Instanz. |

### Zanter

- 1.8.2
### Quell

Definéiert an [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) op Linn 368
