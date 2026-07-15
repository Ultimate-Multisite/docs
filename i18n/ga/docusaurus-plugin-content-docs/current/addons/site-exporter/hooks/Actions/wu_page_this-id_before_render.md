---
id: wu_page_this-id_before_render
title: 'Gníomh - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Spreagtar sula rindreáiltear leathanach ar leith.

Úsáid: Ní mór id bhailí leathanaigh a chur in ionad na coda dinimiciúla, e.g. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id an leathanaigh. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ásc Base Admin Page. |

### Ó shin {#since}

- 1.8.2
### Foinse {#source}

Sainithe in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ag líne 368
