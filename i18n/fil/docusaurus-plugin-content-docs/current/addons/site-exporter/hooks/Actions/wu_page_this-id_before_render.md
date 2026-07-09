---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

Tumatakbo ito bago pa man i-render ang isang partikular na pahina.

Paggamit: Kailangang palitan ang dynamic na bahagi ng isang valid na page ID, halimbawa: add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Parameters {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang ID ng pahina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang instance ng Base Admin Page. |

### Since {#since}

- 1.8.2
### Source {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) sa linya 368
