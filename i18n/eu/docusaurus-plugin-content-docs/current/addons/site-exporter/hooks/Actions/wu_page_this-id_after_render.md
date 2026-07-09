---
id: wu_page_this-id_after_render
title: 'Ekintza - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Orrialde zehatz bat errendatu ondoren abiarazten da.

Erabilera: atal dinamikoa baliozko orrialde-id batekin ordezkatu behar da, adib. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Orrialdearen id-a. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Base Admin Page instantzia. |

### Noiztik {#since}

- 1.8.2
### Iturburua {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) fitxategian definitua, 394. lerroan
