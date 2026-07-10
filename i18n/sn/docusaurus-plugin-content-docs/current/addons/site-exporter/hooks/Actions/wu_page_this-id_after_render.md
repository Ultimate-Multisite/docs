---
id: wu_page_this-id_after_render
title: 'Chiito - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Inotanga mushure mekunge peji yakatarwa yaratidzwa.

Mashandisirwo: Chikamu chine shanduko chinofanira kutsiviwa ne id yepeji inoshanda, semuenzaniso add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id yepeji. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance yeBase Admin Page. |

### Kubva {#since}

- 1.8.2
### Kwakabva {#source}

Yakatsanangurwa mu[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) pamutsetse 394
