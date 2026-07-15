---
id: wu_apc_process_page_content
title: Filtras - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filtras: wu_apc_process_page_content

Leidžia kūrėjams keisti galutinį turinį

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Turinys po pakeitimų. |
| $content_before_processing | `string` | Turinys prieš pakeitimus. |
| $to_replace | `array` | Masyvas, kuriame yra turimi vietaženkliai. |
| $placeholder_count | `int` | Rastų vietaženklių skaičius. |

### Nuo {#since}

- 1.4.0
### Šaltinis {#source}

Apibrėžta [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46), 46 eilutėje


## Grąžina {#returns}
Turinį po pakeitimo.
