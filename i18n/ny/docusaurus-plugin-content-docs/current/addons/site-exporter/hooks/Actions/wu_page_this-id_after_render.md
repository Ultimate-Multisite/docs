---
id: wu_page_this-id_after_render
title: 'Chochita - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

Imayambitsidwa pambuyo powonetsa tsamba linalake.

Kagwiritsidwe ntchito: Gawo losintha liyenera kusinthidwa ndi id ya tsamba yovomerezeka, mwachitsanzo add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Magawo {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id ya tsambalo. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Chochitika cha Base Admin Page. |

### Kuyambira {#since}

- 1.8.2
### Gwero {#source}

Zafotokozedwa mu [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) pa mzere 394
