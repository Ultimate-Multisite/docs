---
id: wu_page_this-id_after_render
title: 'Isenzo - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Iqala ngemva kokubonisa ikhasi elithile.

Ukusetshenziswa: Ingxenye eguqukayo idinga ukushintshwa nge-id yekhasi evumelekile, isb. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | I-id yekhasi. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Isibonelo se-Base Admin Page. |

### Kusukela {#since}

- 1.8.2
### Umthombo {#source}

Kuchazwe ku-[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) emugqeni 394
