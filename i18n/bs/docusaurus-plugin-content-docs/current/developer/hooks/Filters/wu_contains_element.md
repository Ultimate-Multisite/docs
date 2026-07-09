---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Omogućava programerima da promijene rezultate početne pretrage.

Ovo je korisno za eksterne alate za izradu (third-party builders) i slično.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $contains_elements | `bool` | Ako je element sadržan u sadržaju. |
| $content | `string` | Sadržaj koji se pregleda. |
| $element | `self` | Trenutni element. |
| $post | `null\|\WP_Post` | Post koji se provjerava. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) na liniji 534
