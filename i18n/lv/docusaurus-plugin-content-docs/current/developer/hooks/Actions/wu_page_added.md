---
id: wu_page_added
title: Darbība - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Ļauj plugin izstrādātājiem palaist papildu darbības, kad lapas tiek reģistrētas.

Atšķirībā no wu_page_load, kas darbojas tikai tad, kad tiek skatīta konkrēta lapa, šis hook darbojas reģistrācijas laikā katrai admin lapai, kas tiek pievienota, izmantojot Ultimate Multisite kodu.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | Šīs lapas ID. |
| $page_hook | `string` | Šīs lapas hook nosaukums. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) 228. rindā
