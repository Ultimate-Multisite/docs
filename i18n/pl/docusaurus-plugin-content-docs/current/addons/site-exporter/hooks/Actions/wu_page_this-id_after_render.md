---
id: wu_page_this-id_after_render
title: 'Akcja - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Jest wywoływana po wyrenderowaniu konkretnej strony.

Usage: Należy zastąpić dynamiczną część poprawnym ID strony, np.: add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID strony. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instancja podstawowej strony administracyjnej. |

### Od {#since}

- 1.8.2
### Źródło {#source}

Zdefiniowane w [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) w linii 394
