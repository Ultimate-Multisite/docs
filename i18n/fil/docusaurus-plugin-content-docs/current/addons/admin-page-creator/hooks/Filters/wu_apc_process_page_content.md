---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Pinapayagan nito ang mga developer na baguhin ang huling nilalaman.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $content | `string` | Nilalaman pagkatapos ng mga pagpapalit. |
| $content_before_processing | `string` | Nilalaman bago ang mga pagpapalit. |
| $to_replace | `array` | Array na naglalaman ng mga placeholder na kailangang palitan. |
| $placeholder_count | `int` | Bilang ng mga placeholder na natagpuan. |

### Mula {#since}

- 1.4.0
### Pinagmulan {#source}

Tinukoy sa [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) sa linya 46

## Ibinabalik {#returns}
Nilalaman pagkatapos ng pagbabago.
