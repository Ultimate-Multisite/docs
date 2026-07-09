---
id: wu_page_this-id_load
title: 'Ìṣe - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Gba àwọn olùdàgbàsókè plugin laaye láti fi àwọn hook àfikún sí ojú ewé pàtó.

Lílò: Apá dynamic náà ní láti rọ́pò pẹ̀lú ID ojú ewé tó wúlò, f.a. add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Àwọn Parameter

| Orúkọ | Type | Àpèjúwe |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID ti ojú ewé yìí. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook tí a dá sí ojú ewé yìí. |

### Láti

- 1.8.2
### Orísun

Ti ṣàlàyé nínú [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ní ìlà 301
