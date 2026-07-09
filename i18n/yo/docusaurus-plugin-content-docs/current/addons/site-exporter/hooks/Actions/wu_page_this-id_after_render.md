---
id: wu_page_this-id_after_render
title: 'Ìṣe - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 2bdd062afe3dbfa7e50dc5162fba9b99
---
# Action: wu_page_\{$this->id\}_after_render

N ṣiṣẹ́ lẹ́yìn fífi ojúewé kan pàtó hàn.

Ìlò: Apá tí ó ń yí padà nílò láti rọ́pò pẹ̀lú id ojúewé tó fẹsẹ̀ múlẹ̀, fún àpẹẹrẹ add_action('wu_page_events_after_render', 'do_something_callback', 10, 2);

## Àwọn Párámítà

| Orúkọ | Irú | Àpèjúwe |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | id ti ojúewé náà. |
| $this | `\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Ẹ̀dá Base Admin Page náà. |

### Láti ìgbà

- 1.8.2
### Orísun

Ti ṣàlàyé nínú [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L394) ní ìlà 394
