---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Lar utviklere endre resultatene fra den opprinnelige søkningen.

Dette er nyttig for tredjepartsbyggere og lignende.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $contains_elements | `bool` | Om elementet er inneholdt i innholdet. |
| $content | `string` | Innholdet som blir undersøkt. |
| $element | `self` | Det nåværende elementet. |
| $post | `null\|\WP_Post` | Innlegget som skal sjekkes. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) på linje 534
