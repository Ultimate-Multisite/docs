---
id: wu_page_this-id_after_render
title: 'Gníomh - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render {#action-wupagethis-idafterrender}

Tintear é tar éis leathanach sonrach a rindreáil.

Úsáid: Ní mór páirt dhinimiciúil a chur in ionad le id bailí leathanaigh, m.sh. add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Id an leathanaigh. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | An t-ásc Base Admin Page. |

### Ó {#since}

- 1.8.2
### Foinse {#source}

Sainmhínithe in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ag líne 394
