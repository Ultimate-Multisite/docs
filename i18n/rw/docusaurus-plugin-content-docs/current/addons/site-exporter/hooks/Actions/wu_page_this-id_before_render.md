---
id: wu_page_this-id_before_render
title: 'Igikorwa - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Ikora mbere yo kugaragaza paji runaka.

Imikoreshereze: Igice gihinduka kigomba gusimbuzwa id ya paji yemewe, urugero add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ya paji. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Urugero rwa Base Admin Page. |

### Kuva {#since}

- 1.8.2
### Inkomoko {#source}

Byasobanuwe muri [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ku murongo wa 368
