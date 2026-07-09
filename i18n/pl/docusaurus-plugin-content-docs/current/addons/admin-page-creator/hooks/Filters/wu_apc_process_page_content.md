---
id: wu_apc_process_page_content
title: Filtr - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtr: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Pozwala deweloperom modyfikować końcową zawartość.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $content | `string` | Zawartość po podstawieniu. |
| $content_before_processing | `string` | Zawartość przed podstawieniem. |
| $to_replace | `array` | Tablica zawierająca podstawienia. |
| $placeholder_count | `int` | Liczba znalezionych podstawień. |

### Od {#since}

- 1.4.0
### Źródło {#source}

Zdefiniowany w [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) w linii 46

## Zwraca {#returns}
Zawartość po modyfikacji.
