---
id: wu_page_this-id_after_render
title: 'Actio - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Incenditur post redditam paginam specificam.

Usus: Pars dynamica substituenda est id paginae valido, e.g. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id paginae. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instantia Base Admin Page. |

### Ab {#since}

- 1.8.2
### Fons {#source}

Definitum in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) linea 394
