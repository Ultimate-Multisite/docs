---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Võimaldab arendajatel lõplikku sisu muuta

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $content | `string` | Sisu pärast asendusi. |
| $content_before_processing | `string` | Sisu enne asendusi. |
| $to_replace | `array` | Massiiv, mis sisaldab kohatäiteid. |
| $placeholder_count | `int` | Leitud kohatäidete arv. |

### Alates {#since}

- 1.4.0
### Allikas {#source}

Määratletud failis [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) real 46


## Tagastab {#returns}
Sisu pärast muutmist.
