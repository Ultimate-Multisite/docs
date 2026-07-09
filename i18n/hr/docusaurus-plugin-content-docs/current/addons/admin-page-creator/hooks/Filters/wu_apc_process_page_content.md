---
id: wu_apc_process_page_content
title: Filtar - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtar: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Omogućuje developerima da mijenjaju konačni sadržaj

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $content | `string` | Sadržaj nakon zamjena. |
| $content_before_processing | `string` | Sadržaj prije zamjena. |
| $to_replace | `array` | Niz koji sadrži rezervirana mjesta. |
| $placeholder_count | `int` | Broj pronađenih rezerviranih mjesta. |

### Od {#since}

- 1.4.0
### Izvor {#source}

Definirano u [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) u retku 46


## Vraća {#returns}
Sadržaj nakon izmjene.
