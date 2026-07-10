---
id: wu_page_this-id_after_render
title: 'Ketso - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

E sebetsa kamora ho bontša leqephe le itseng.

Tšebeliso: Karolo e fetohang e hloka ho nkeloa sebaka ka page id e nepahetseng, mohlala add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ya leqephe. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance ya Base Admin Page. |

### Ho tloha {#since}

- 1.8.2
### Mohlodi {#source}

E hlalositswe ho [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) moleng wa 394
