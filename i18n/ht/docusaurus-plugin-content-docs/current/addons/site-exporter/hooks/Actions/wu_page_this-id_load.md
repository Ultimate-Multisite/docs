---
id: wu_page_this-id_load
title: 'Aksyon - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Pèmèt devlopè plugin yo ajoute hooks anplis sou yon paj espesifik.

Itilizasyon: Pati dinamik la bezwen ranplase ak yon id paj ki valab, pa egzanp add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Paramèt {#parameters}

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | ID paj sa a. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Hook ki jenere pou paj sa a. |

### Depi {#since}

- 1.8.2
### Sous {#source}

Defini nan [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) nan liy 301
