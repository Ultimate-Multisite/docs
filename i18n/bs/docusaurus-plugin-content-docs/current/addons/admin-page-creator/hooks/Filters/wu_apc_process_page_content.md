---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Omogućava programerima da manipulišu finalnim sadržajem.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $content | `string` | Sadržaj nakon zamjena. |
| $content_before_processing | `string` | Sadržaj prije zamjena. |
| $to_replace | `array` | Niz koji sadrži zamjenske mjesta (placeholder-e). |
| $placeholder_count | `int` | Broj pronađenih zamjenskih mjesta. |

### Od verzije {#since}

- 1.4.0
### Izvor {#source}

Definisano je u [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) na liniji 46

## Vraća {#returns}
Sadržaj nakon modifikacije.
