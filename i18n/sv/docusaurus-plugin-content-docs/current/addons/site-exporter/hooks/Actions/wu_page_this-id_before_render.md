---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Körs innan en specifik sida renderas.

Användning: Den dynamiska delen måste ersättas med ett giltigt sid-ID, till exempel: `add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);`

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID:et för sidan. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instansen av Base Admin Page. |

### Sedan {#since}

- 1.8.2
### Källa {#source}

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) på rad 368
