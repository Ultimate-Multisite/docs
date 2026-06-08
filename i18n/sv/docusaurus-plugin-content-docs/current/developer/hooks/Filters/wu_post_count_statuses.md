---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Låter plugin-utvecklare ändra vilka poststatus som ska räknas. Standardmässigt räknas publicerade och privata inlägg.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $post_status | `array` | Listan över poststatus |
| $post_type | `string` | Posttypens slug |

### Sedan

- 1.9.1
### Källa

Definieras i [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) på rad 119


## Returnerar
En ny array med poststatus
