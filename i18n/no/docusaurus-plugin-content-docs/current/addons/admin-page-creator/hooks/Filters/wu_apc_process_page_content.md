---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Lar utviklere endre det endelige innholdet

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $content | `string` | Innholdet etter erstatninger. |
| $content_before_processing | `string` | Innholdet før erstatninger. |
| $to_replace | `array` | Array som inneholder plassholderne. |
| $placeholder_count | `int` | Antall funnet plassholdere. |

### Siden {#since}

- 1.4.0
### Kilde {#source}

Definert i [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) på linje 46


## Returnerer {#returns}
Innholdet etter modifikasjon.
