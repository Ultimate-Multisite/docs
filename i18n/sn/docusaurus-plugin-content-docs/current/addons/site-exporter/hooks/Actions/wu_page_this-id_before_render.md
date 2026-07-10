---
id: wu_page_this-id_before_render
title: 'Chiito - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render {#action-wupagethis-idbeforerender}

Inotanga isati yaratidza peji yakatarwa.

Mashandisirwo: Chikamu chinoshanduka chinofanira kutsiviwa ne id yepeji inoshanda, semuenzaniso add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id yepeji. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance yeBase Admin Page. |

### Kubva {#since}

- 1.8.2
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) pamutsara 368
