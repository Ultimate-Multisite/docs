---
id: wu_page_this-id_load
title: 'Hereket - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Plugin döredijilerine belli bir sahypa goşmaça hook-lary goşmaga rugsat berýär.

Ulanylyşy: Dinamik bölek dogry sahypa ID-si bilen çalşyrylmalydyr, meselem add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Parametrler

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sahypanyň ID-si. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Bu sahypa üçin döredilen hook. |

### Şu wersiýadan bäri

- 1.8.2
### Çeşme

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) içinde 301-nji setirde kesgitlenen
