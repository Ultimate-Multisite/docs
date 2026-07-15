---
id: wu_apc_process_page_content
title: Filtru - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content

Permite dezvoltatorilor să modifice conținutul final

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $content | `string` | Conținutul după înlocuiri. |
| $content_before_processing | `string` | Conținutul înainte de înlocuiri. |
| $to_replace | `array` | Un array care conține *placeholderele* care trebuie înlocuite. |
| $placeholder_count | `int` | Numărul de *placeholdere* găsite. |

### De la {#since}

- 1.4.0
### Sursă {#source}

Definit în [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) la linia 46


## Returnează {#returns}
Conținutul după modificare.
