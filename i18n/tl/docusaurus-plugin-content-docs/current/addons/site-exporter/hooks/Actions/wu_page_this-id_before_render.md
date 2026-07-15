---
id: wu_page_this-id_before_render
title: 'Aksyon - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Pinapagana bago i-render ang isang partikular na pahina.

Paggamit: Ang dynamic na bahagi ay kailangang palitan ng valid na id ng pahina, hal. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang id ng pahina. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ang instance ng Base Admin Page. |

### Mula Noong {#since}

- 1.8.2
### Pinagmulan {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) sa linya 368
