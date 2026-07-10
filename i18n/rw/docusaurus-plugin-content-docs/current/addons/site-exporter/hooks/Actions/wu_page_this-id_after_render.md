---
id: wu_page_this-id_after_render
title: 'Igikorwa - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Bitangira nyuma yo kugaragaza paji runaka.

Imikoreshereze: Igice gihinduka kigomba gusimbuzwa page id yemewe, urugero add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ya paji. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance ya Base Admin Page. |

### Kuva {#since}

- 1.8.2
### Inkomoko {#source}

Bisobanuwe muri [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ku murongo wa 394
