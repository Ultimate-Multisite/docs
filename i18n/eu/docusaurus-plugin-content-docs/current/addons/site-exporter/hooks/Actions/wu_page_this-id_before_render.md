---
id: wu_page_this-id_before_render
title: 'Ekintza - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Orrialde jakin bat errendatu aurretik abiarazten da.

Erabilera: Zati dinamikoa baliozko orrialde-id batekin ordezkatu behar da, adib. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Orrialdearen id-a. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instantzia. |

### Noiztik {#since}

- 1.8.2
### Iturburua {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) fitxategian definituta, 368. lerroan
