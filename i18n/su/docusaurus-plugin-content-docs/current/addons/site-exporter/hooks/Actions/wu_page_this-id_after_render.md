---
id: wu_page_this-id_after_render
title: 'Aksi - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Dijalankeun sanggeus ngarender kaca husus.

Pamakéan: Bagian dinamis kudu diganti ku id kaca anu sah, contona add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id kaca. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance Base Admin Page. |

### Ti saprak {#since}

- 1.8.2
### Sumber {#source}

Ditetepkeun dina [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) dina garis 394
