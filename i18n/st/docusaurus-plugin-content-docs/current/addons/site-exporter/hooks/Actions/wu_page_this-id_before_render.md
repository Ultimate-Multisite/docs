---
id: wu_page_this-id_before_render
title: 'Ketso - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

E qala pele ho hlahiswa leqephe le itseng.

Tshebediso: Karolo e feto-fetohang e lokela ho nkelwa sebaka ka id ya leqephe e nepahetseng, mohlala add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Dipharamitha

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ya leqephe. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ketsahalo ya Base Admin Page. |

### Ho tloha

- 1.8.2
### Mohlodi

E hlalositswe ho [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) moleng wa 368
