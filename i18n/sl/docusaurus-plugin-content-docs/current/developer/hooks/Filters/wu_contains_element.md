---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Razvijalcem omogoča spreminjanje rezultatov začetnega iskanja.

To je uporabno za gradnike tretjih oseb in podobno.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Ali je element vsebovan v vsebini. |
| $content | `string` | Vsebina, ki se pregleduje. |
| $element | `self` | Trenutni element. |
| $post | `null\|\WP_Post` | Objava za preverjanje. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) v vrstici 534
