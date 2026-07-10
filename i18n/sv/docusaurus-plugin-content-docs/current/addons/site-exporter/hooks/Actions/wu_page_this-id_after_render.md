---
id: wu_page_this-id_after_render
title: 'Action - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_{$this->id}_after_render {#action-wupagethis-idafterrender}

Körs efter att en specifik sida har renderats.

Användning: Den dynamiska delen måste ersättas med en giltig sid-ID, t.ex. `add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);`

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID:t för sidan. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instansen av Base Admin Page. |

### Sedan {#since}

- 1.8.2
### Källa {#source}

Definieras i [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) på rad 394
