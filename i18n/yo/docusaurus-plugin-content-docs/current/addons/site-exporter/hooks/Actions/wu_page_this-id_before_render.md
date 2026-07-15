---
id: wu_page_this-id_before_render
title: 'Ìṣe - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c2622b55e1ff656ba579f3ee25646584
---
# Action: wu_page_\{$this->id\}_before_render

Ó máa ń ṣiṣẹ́ ṣáájú ṣíṣe àfihàn oju-iwe kan pàtó.

Ìlò: Apá tó ń yí padà gbọ́dọ̀ rọ́pò pẹ̀lú page id tó péye, f.a. add_action('wu_page_events_before_render', 'do_something_callback', 10, 2);

## Àwọn Paramita {#parameters}

| Orúkọ | Irú | Àpèjúwe |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ti oju-iwe náà. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Instance Base Admin Page náà. |

### Láti {#since}

- 1.8.2
### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L368) ní ila 368
