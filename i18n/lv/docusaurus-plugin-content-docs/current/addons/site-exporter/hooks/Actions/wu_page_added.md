---
id: wu_page_added
title: Darbība - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 91c9f283f9b26c81310bdb787db88fec
---
# Darbība: wu_page_added

Ļauj plugin izstrādātājiem palaist papildu darbības, kad lapas tiek reģistrētas.

Atšķirībā no wu_page_load, kas tiek palaists tikai tad, kad tiek skatīta konkrēta lapa, šis hook tiek palaists reģistrācijas laikā katrai admin lapai, kas tiek pievienota, izmantojot WP Ultimo kodu.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šīs lapas ID. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Šai lapai ģenerētais hook. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L203) 203. rindā
